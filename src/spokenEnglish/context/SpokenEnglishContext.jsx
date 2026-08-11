import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  loadProgress,
  saveProgress,
  getUnlockedSubjectIds,
  isSubjectCompleted,
  isLessonCompleted,
  markLessonComplete,
  markChallengePassed,
  getCurrentActivity,
  advanceProgress,
  getNextIncompleteActivity,
  resetProgress,
  resetLesson,
  resetSubject
} from '../services/progressService';
import { courseData } from '../data/courseData';
import odiaInstructions from '../data/odiaSubjects/odia1';

const SpokenEnglishContext = createContext();

const SUPPORTED_LANGUAGES = ['english', 'odia', 'hindi'];

const normalizeLanguagePreference = (language) => {
  const normalized = String(language || 'english').trim().toLowerCase();
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : 'english';
};

const localizeCourseData = (language) => {
  if (language !== 'odia') {
    return courseData;
  }

  return {
    subjects: courseData.subjects.map((subject) => ({
      ...subject,
      lessons: subject.lessons.map((lesson) => ({
        ...lesson,
        activities: lesson.activities.map((activity) => {
          const translatedInstruction = odiaInstructions[activity.id];
          return translatedInstruction
            ? { ...activity, instruction: translatedInstruction }
            : activity;
        }),
      })),
    })),
  };
};

export const SpokenEnglishProvider = ({ children }) => {
  const [progress, setProgress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [unlockedSubjectIds, setUnlockedSubjectIds] = useState([]);

  useEffect(() => {
    const hydrate = async () => {
      const loaded = await loadProgress();
      setProgress(loaded);
      setUnlockedSubjectIds(getUnlockedSubjectIds(loaded));
      setLoading(false);
    };

    hydrate();
  }, []);

  const updateProgress = useCallback(async (newProgress) => {
    setProgress(newProgress);
    await saveProgress(newProgress);
    setUnlockedSubjectIds(getUnlockedSubjectIds(newProgress));
  }, []);

  const setLanguagePreference = useCallback(async (language) => {
    if (!progress) return;
    const normalized = normalizeLanguagePreference(language);
    const updated = { ...progress, languagePreference: normalized };
    await updateProgress(updated);
  }, [progress, updateProgress]);

  const markLessonAsComplete = useCallback((subjectId, lessonId) => {
    if (!progress) return;
    const updated = { ...progress };
    markLessonComplete(updated, subjectId, lessonId);
    void updateProgress(updated);
  }, [progress, updateProgress]);

  const markChallengeAsPassed = useCallback((subjectId) => {
    if (!progress) return;
    const updated = { ...progress };
    markChallengePassed(updated, subjectId);
    void updateProgress(updated);
  }, [progress, updateProgress]);

  const advanceToNextActivity = useCallback(() => {
    if (!progress) return;
    const updated = { ...progress };
    const advanced = advanceProgress(updated);
    void updateProgress(advanced);
  }, [progress, updateProgress]);

  const getCurrent = useCallback(() => {
    if (!progress) return null;
    return getCurrentActivity(progress);
  }, [progress]);

  const getNextIncomplete = useCallback(() => {
    if (!progress) return null;
    return getNextIncompleteActivity(progress);
  }, [progress]);

  const checkSubjectCompleted = useCallback((subjectId) => {
    if (!progress) return false;
    return isSubjectCompleted(progress, subjectId);
  }, [progress]);

  const checkLessonCompleted = useCallback((subjectId, lessonId) => {
    if (!progress) return false;
    return isLessonCompleted(progress, subjectId, lessonId);
  }, [progress]);

  const languagePreference = normalizeLanguagePreference(progress?.languagePreference);
  const localizedCourseData = useMemo(() => localizeCourseData(languagePreference), [languagePreference]);

  const getSubject = useCallback((subjectId) => {
    return localizedCourseData.subjects.find(s => s.id === subjectId);
  }, [localizedCourseData]);

  const getLesson = useCallback((subjectId, lessonId) => {
    const subject = getSubject(subjectId);
    if (!subject) return null;
    return subject.lessons.find(l => l.id === lessonId);
  }, [getSubject]);

  const handleResetProgress = useCallback(async () => {
    if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      const fresh = await resetProgress();
      setProgress(fresh);
      setUnlockedSubjectIds(getUnlockedSubjectIds(fresh));
    }
  }, []);

  const handleResetLesson = useCallback((subjectId, lessonId) => {
    if (!progress) return;
    const updated = { ...progress };
    resetLesson(updated, subjectId, lessonId);
    void updateProgress(updated);
  }, [progress, updateProgress]);

  const handleResetSubject = useCallback((subjectId) => {
  if (!progress) return;
  if (window.confirm(`Reset all progress for "${getSubject(subjectId)?.title}"? All lessons and challenge will be reset.`)) {
    const updated = { ...progress };
    resetSubject(updated, subjectId);
    void updateProgress(updated);
  }
}, [progress, updateProgress, getSubject]);

  // Compute global progress
  const totalSubjects = courseData.subjects.length;
  const completedSubjects = progress?.completedSubjects?.length || 0;
  const totalLessons = courseData.subjects.reduce((acc, s) => acc + s.lessons.length, 0);
  const completedLessons = progress?.completedLessons?.length || 0;
  const overallProgress = totalSubjects > 0 ? Math.round((completedSubjects / totalSubjects) * 100) : 0;

  const value = {
    progress,
    loading,
    unlockedSubjectIds,
    languagePreference,
    setLanguagePreference,
    courseData: localizedCourseData,
    getSubject,
    getLesson,
    markLessonAsComplete,
    markChallengeAsPassed,
    advanceToNextActivity,
    getCurrentActivity: getCurrent,
    getNextIncompleteActivity: getNextIncomplete,
    isSubjectCompleted: checkSubjectCompleted,
    isLessonCompleted: checkLessonCompleted,
    resetProgress: handleResetProgress,
    resetLesson: handleResetLesson,
    resetSubject: handleResetSubject,
    // Global stats
    totalSubjects,
    completedSubjects,
    totalLessons,
    completedLessons,
    overallProgress,
    // Expose raw functions if needed
    loadProgress,
    saveProgress,
    getUnlockedSubjectIds,
  };

  return (
    <SpokenEnglishContext.Provider value={value}>
      {children}
    </SpokenEnglishContext.Provider>
  );
};

export const useSpokenEnglish = () => {
  const context = useContext(SpokenEnglishContext);
  if (!context) {
    throw new Error('useSpokenEnglish must be used within a SpokenEnglishProvider');
  }
  return context;
};