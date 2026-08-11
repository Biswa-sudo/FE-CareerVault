import { courseData } from "../data/courseData";
import { apiRequest } from '../../lib/apiClient';

const STORAGE_KEY = "benture_spoken_english_progress";

const defaultProgress = {
  currentSubjectId: 1,
  currentLessonId: 1,
  currentActivityIndex: 0,
  completedLessons: [],
  completedSubjects: [],
  subjectProgress: {},
  languagePreference: 'english',
  lastUpdated: new Date().toISOString()
};

const SKIPPED_ACTIVITY_TYPES = new Set(['sentence_completion', 'spell_word']);

export function filterActivities(activities = []) {
  if (!Array.isArray(activities)) return [];
  return activities.filter((activity) => {
    const type = activity?.type;
    return !type || !SKIPPED_ACTIVITY_TYPES.has(type);
  });
}

function hasVisibleChallengeActivities(subject) {
  return filterActivities(subject?.challengeTest?.activities || []).length > 0;
}

export async function loadProgress() {
  try {
    const response = await apiRequest('/spoken-progress.php');
    const stored = response?.item;
    if (stored && typeof stored === 'object') {
      const parsed = stored.data && typeof stored.data === 'object' ? stored.data : stored;
      const languagePreference = stored.languagePreference || stored.language_preference || parsed.languagePreference || parsed.language_preference;
      return { ...defaultProgress, ...parsed, ...(languagePreference ? { languagePreference } : {}) };
    }
  } catch (e) {
    console.warn("Failed to load progress:", e);
  }
  return { ...defaultProgress };
}

export async function saveProgress(progress) {
  try {
    progress.lastUpdated = new Date().toISOString();
    await apiRequest('/spoken-progress.php', {
      method: 'PUT',
      body: {
        key: STORAGE_KEY,
        data: progress,
        languagePreference: progress.languagePreference ?? 'english',
      },
    });
    return true;
  } catch (e) {
    console.warn("Failed to save progress:", e);
    return false;
  }
}

export async function resetProgress() {
  const fresh = { ...defaultProgress };
  await saveProgress(fresh);
  return fresh;
}

export function getUnlockedSubjectIds(progress) {
  const completed = progress.completedSubjects || [];
  const allIds = courseData.subjects.map(s => s.id).sort((a, b) => a - b);
  const maxUnlocked = Math.min(allIds.length, completed.length + 4);
  return allIds.slice(0, maxUnlocked);
}

export function isSubjectCompleted(progress, subjectId) {
  return progress.completedSubjects.includes(subjectId);
}

export function isLessonCompleted(progress, subjectId, lessonId) {
  return progress.completedLessons.some(
    item => item.subjectId === subjectId && item.lessonId === lessonId
  );
}

export function markLessonComplete(progress, subjectId, lessonId) {
  if (!isLessonCompleted(progress, subjectId, lessonId)) {
    progress.completedLessons.push({ subjectId, lessonId });
    if (!progress.subjectProgress[subjectId]) {
      progress.subjectProgress[subjectId] = { lessonsCompleted: [], challengePassed: false };
    }
    if (!progress.subjectProgress[subjectId].lessonsCompleted.includes(lessonId)) {
      progress.subjectProgress[subjectId].lessonsCompleted.push(lessonId);
    }
    const subject = courseData.subjects.find(s => s.id === subjectId);
    if (subject && subject.lessons.length > 0) {
      const allLessonIds = subject.lessons.map(l => l.id);
      const completedLessonIds = progress.subjectProgress[subjectId].lessonsCompleted;
      const allDone = allLessonIds.every(id => completedLessonIds.includes(id));
      const challengePassed = progress.subjectProgress[subjectId].challengePassed;
      const canCompleteByLessons = !hasVisibleChallengeActivities(subject);
      const subjectCompleted = canCompleteByLessons ? allDone : allDone && challengePassed;

      if (subjectCompleted && !progress.completedSubjects.includes(subjectId)) {
        progress.completedSubjects.push(subjectId);
      } else if (!subjectCompleted) {
        progress.completedSubjects = progress.completedSubjects.filter(id => id !== subjectId);
      }
    }
  }
  return progress;
}

export function markChallengePassed(progress, subjectId) {
  if (!progress.subjectProgress[subjectId]) {
    progress.subjectProgress[subjectId] = { lessonsCompleted: [], challengePassed: false };
  }
  progress.subjectProgress[subjectId].challengePassed = true;

  const subject = courseData.subjects.find(s => s.id === subjectId);
  const allLessonIds = subject?.lessons?.map((lesson) => lesson.id) || [];
  const completedLessonIds = progress.subjectProgress[subjectId]?.lessonsCompleted || [];
  const allLessonsDone = allLessonIds.every((lessonId) => completedLessonIds.includes(lessonId));
  const canComplete = subject && hasVisibleChallengeActivities(subject) ? allLessonsDone : true;

  if (canComplete && !progress.completedSubjects.includes(subjectId)) {
    progress.completedSubjects.push(subjectId);
  }
  return progress;
}

/**
 * Reset a single lesson: remove its completion status.
 * Also reset the current activity index if this is the current lesson,
 * and recalculate subject completion.
 */
export function resetLesson(progress, subjectId, lessonId) {
  // 1. Remove from completedLessons
  progress.completedLessons = progress.completedLessons.filter(
    item => !(item.subjectId === subjectId && item.lessonId === lessonId)
  );

  // 2. Remove from subjectProgress lessonsCompleted
  if (progress.subjectProgress[subjectId]) {
    progress.subjectProgress[subjectId].lessonsCompleted = progress.subjectProgress[subjectId].lessonsCompleted.filter(
      id => id !== lessonId
    );
  }

  // 3. If this is the current lesson, reset activity index to 0
  if (progress.currentSubjectId === subjectId && progress.currentLessonId === lessonId) {
    progress.currentActivityIndex = 0;
  }

  // 4. Recalculate subject completion
  const subject = courseData.subjects.find(s => s.id === subjectId);
  if (subject) {
    const hasLessons = subject.lessons.length > 0;
    const challengePassed = progress.subjectProgress[subjectId]?.challengePassed || false;
    const hasChallenge = hasVisibleChallengeActivities(subject);

    if (hasLessons) {
      const allLessonIds = subject.lessons.map(l => l.id);
      const completedLessonIds = progress.subjectProgress[subjectId]?.lessonsCompleted || [];
      const allDone = allLessonIds.every(id => completedLessonIds.includes(id));
      // If challenge exists, completion requires all lessons and challenge pass.
      const isComplete = hasChallenge ? (allDone && challengePassed) : allDone;
      if (!isComplete) {
        progress.completedSubjects = progress.completedSubjects.filter(id => id !== subjectId);
      }
    } else {
      // No lessons – only challenge can complete it
      if (!challengePassed) {
        progress.completedSubjects = progress.completedSubjects.filter(id => id !== subjectId);
      }
    }
  }

  return progress;
}

/**
 * Reset all progress for a subject: clear all lesson completions and challenge pass.
 */
export function resetSubject(progress, subjectId) {
  // Remove all completed lessons for this subject
  progress.completedLessons = progress.completedLessons.filter(
    item => item.subjectId !== subjectId
  );
  // Clear subjectProgress entry
  if (progress.subjectProgress[subjectId]) {
    delete progress.subjectProgress[subjectId];
  }
  // Remove subject from completedSubjects if present
  progress.completedSubjects = progress.completedSubjects.filter(id => id !== subjectId);
  // If this is the current subject, reset to first lesson and activity 0
  if (progress.currentSubjectId === subjectId) {
    const subject = courseData.subjects.find(s => s.id === subjectId);
    if (subject && subject.lessons.length > 0) {
      progress.currentLessonId = subject.lessons[0].id;
      progress.currentActivityIndex = 0;
    }
  }
  return progress;
}

export function getCurrentActivity(progress) {
  const { currentSubjectId, currentLessonId, currentActivityIndex } = progress;
  const subject = courseData.subjects.find(s => s.id === currentSubjectId);
  if (!subject) return null;
  const lesson = subject.lessons.find(l => l.id === currentLessonId);
  if (!lesson) return null;
  const activities = filterActivities(lesson.activities);
  if (currentActivityIndex >= 0 && currentActivityIndex < activities.length) {
    return {
      subject,
      lesson,
      activity: activities[currentActivityIndex],
      activityIndex: currentActivityIndex,
      totalActivities: activities.length
    };
  }
  return null;
}

export function advanceProgress(progress) {
  const { currentSubjectId, currentLessonId, currentActivityIndex } = progress;
  const subject = courseData.subjects.find(s => s.id === currentSubjectId);
  if (!subject) return progress;
  const lesson = subject.lessons.find(l => l.id === currentLessonId);
  if (!lesson) return progress;
  const activities = filterActivities(lesson.activities);
  if (currentActivityIndex + 1 < activities.length) {
    progress.currentActivityIndex = currentActivityIndex + 1;
  } else {
    // Finished all visible activities in this lesson → mark lesson complete
    markLessonComplete(progress, currentSubjectId, currentLessonId);
    // Find next lesson in this subject
    const lessonIndex = subject.lessons.findIndex(l => l.id === currentLessonId);
    if (lessonIndex + 1 < subject.lessons.length) {
      progress.currentLessonId = subject.lessons[lessonIndex + 1].id;
      progress.currentActivityIndex = 0;
    } else {
      // All lessons done – check if challenge is passed; if not, we set to -1 (marker for challenge)
      const challengePassed = progress.subjectProgress?.[currentSubjectId]?.challengePassed || false;
      const visibleChallengeActivities = filterActivities(subject.challengeTest?.activities || []);
      if (!challengePassed && visibleChallengeActivities.length > 0) {
        progress.currentActivityIndex = -1; // indicates challenge is next
      } else {
        // Subject is complete, move to next subject
        const nextSubject = findNextIncompleteSubject(progress);
        if (nextSubject) {
          progress.currentSubjectId = nextSubject.id;
          progress.currentLessonId = nextSubject.lessons[0]?.id || 1;
          progress.currentActivityIndex = 0;
        } else {
          // All subjects completed
          progress.currentActivityIndex = -2; // all done
        }
      }
    }
  }
  return progress;
}

// Helper to find the next subject that has incomplete lessons or challenge
function findNextIncompleteSubject(progress) {
  const completedIds = progress.completedSubjects || [];
  for (const subject of courseData.subjects) {
    if (completedIds.includes(subject.id)) continue;
    // Check if any lesson incomplete
    const allLessons = subject.lessons;
    const completedLessons = progress.completedLessons.filter(item => item.subjectId === subject.id).map(item => item.lessonId);
    const allDone = allLessons.every(l => completedLessons.includes(l.id));
    if (!allDone) return subject;
    // If all lessons done but challenge not passed, return subject
    const challengePassed = progress.subjectProgress?.[subject.id]?.challengePassed || false;
    const visibleChallengeActivities = filterActivities(subject.challengeTest?.activities || []);
    if (!challengePassed && visibleChallengeActivities.length > 0) {
      return subject;
    }
  }
  return null;
}

export function getNextIncompleteActivity(progress) {
  // First check current activity
  const current = getCurrentActivity(progress);
  if (current) return current;

  const { currentSubjectId, currentActivityIndex } = progress;
  if (currentActivityIndex === -1) {
    const subject = courseData.subjects.find(s => s.id === currentSubjectId);
    const visibleChallengeActivities = filterActivities(subject?.challengeTest?.activities || []);
    if (subject && visibleChallengeActivities.length > 0) {
      return {
        subject,
        lesson: null,
        activity: null,
        isChallenge: true,
        activityIndex: -1,
        totalActivities: visibleChallengeActivities.length
      };
    }
  }

  // Find next incomplete subject/lesson
  for (const subject of courseData.subjects) {
    if (isSubjectCompleted(progress, subject.id)) continue;
    const lessons = subject.lessons;
    for (let i = 0; i < lessons.length; i++) {
      const lesson = lessons[i];
      const visibleActivities = filterActivities(lesson.activities);
      if (!isLessonCompleted(progress, subject.id, lesson.id) && visibleActivities.length > 0) {
        return {
          subject,
          lesson,
          activity: visibleActivities[0] || null,
          activityIndex: 0,
          totalActivities: visibleActivities.length,
          isChallenge: false
        };
      }
    }
    const challengePassed = progress.subjectProgress?.[subject.id]?.challengePassed || false;
    const visibleChallengeActivities = filterActivities(subject.challengeTest?.activities || []);
    if (!challengePassed && visibleChallengeActivities.length > 0) {
      return {
        subject,
        lesson: null,
        activity: null,
        isChallenge: true,
        activityIndex: -1,
        totalActivities: visibleChallengeActivities.length
      };
    }
  }
  return null;
}