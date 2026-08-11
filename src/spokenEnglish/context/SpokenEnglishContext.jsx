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
import odia1 from '../data/odiaSubjects/odia1';
import odia2 from '../data/odiaSubjects/odia2';
import odia3 from '../data/odiaSubjects/odia3';
import odia4 from '../data/odiaSubjects/odia4';
import odia5 from '../data/odiaSubjects/odia5';
import odia6 from '../data/odiaSubjects/odia6';
import odia7 from '../data/odiaSubjects/odia7';
import odia8 from '../data/odiaSubjects/odia8';
import odia9 from '../data/odiaSubjects/odia9';
import odia10 from '../data/odiaSubjects/odia10';
import odia11 from '../data/odiaSubjects/odia11';
import odia12 from '../data/odiaSubjects/odia12';
import odia13 from '../data/odiaSubjects/odia13';
import odia14 from '../data/odiaSubjects/odia14';
import odia15 from '../data/odiaSubjects/odia15';
import odia16 from '../data/odiaSubjects/odia16';
import odia17 from '../data/odiaSubjects/odia17';
import odia18 from '../data/odiaSubjects/odia18';
import odia19 from '../data/odiaSubjects/odia19';
import odia20 from '../data/odiaSubjects/odia20';
import odia21 from '../data/odiaSubjects/odia21';
import odia22 from '../data/odiaSubjects/odia22';
import odia23 from '../data/odiaSubjects/odia23';
import odia24 from '../data/odiaSubjects/odia24';
import odia25 from '../data/odiaSubjects/odia25';
import hindi1 from '../data/hindiSubjects/hindi1';
import hindi2 from '../data/hindiSubjects/hindi2';
import hindi3 from '../data/hindiSubjects/hindi3';
import hindi4 from '../data/hindiSubjects/hindi4';
import hindi5 from '../data/hindiSubjects/hindi5';
import hindi6 from '../data/hindiSubjects/hindi6';
import hindi7 from '../data/hindiSubjects/hindi7';
import hindi8 from '../data/hindiSubjects/hindi8';
import hindi9 from '../data/hindiSubjects/hindi9';
import hindi10 from '../data/hindiSubjects/hindi10';
import hindi11 from '../data/hindiSubjects/hindi11';
import hindi12 from '../data/hindiSubjects/hindi12';
import hindi13 from '../data/hindiSubjects/hindi13';
import hindi14 from '../data/hindiSubjects/hindi14';

const SpokenEnglishContext = createContext();

const SUPPORTED_LANGUAGES = ['english', 'odia', 'hindi'];
const LANGUAGE_TRANSLATIONS = {
  odia: {
    ...odia1,
    ...odia2,
    ...odia3,
    ...odia4,
    ...odia5,
    ...odia6,
    ...odia7,
    ...odia8,
    ...odia9,
    ...odia10,
    ...odia11,
    ...odia12,
    ...odia13,
    ...odia14,
    ...odia15,
    ...odia16,
    ...odia17,
    ...odia18,
    ...odia19,
    ...odia20,
    ...odia21,
    ...odia22,
    ...odia23,
    ...odia24,
    ...odia25,
  },
  hindi: {
    ...hindi1,
    ...hindi2,
    ...hindi3,
    ...hindi4,
    ...hindi5,
    ...hindi6,
    ...hindi7,
    ...hindi8,
    ...hindi9,
    ...hindi10,
    ...hindi11,
    ...hindi12,
    ...hindi13,
    ...hindi14,
  },
};

const normalizeLanguagePreference = (language) => {
  const normalized = String(language || 'english').trim().toLowerCase();
  return SUPPORTED_LANGUAGES.includes(normalized) ? normalized : 'english';
};

const localizeCourseData = (language) => {
  const translations = LANGUAGE_TRANSLATIONS[language];
  if (!translations) {
    return courseData;
  }

  return {
    subjects: courseData.subjects.map((subject) => ({
      ...subject,
      lessons: subject.lessons.map((lesson) => ({
        ...lesson,
        activities: lesson.activities.map((activity) => {
          const translatedInstruction = translations[activity.id];
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