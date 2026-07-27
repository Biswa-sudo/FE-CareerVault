import { useState, useCallback } from 'react';

export const NAV_VIEWS = {
  DASHBOARD: 'dashboard',
  SUBJECT_DETAIL: 'subjectDetail',
  LESSON_PLAYER: 'lessonPlayer',
  CHALLENGE: 'challenge'
};

export function useNavigation() {
  const [currentView, setCurrentView] = useState(NAV_VIEWS.DASHBOARD);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [selectedLessonId, setSelectedLessonId] = useState(null);

  const navigateToDashboard = useCallback(() => {
    setCurrentView(NAV_VIEWS.DASHBOARD);
    setSelectedSubjectId(null);
    setSelectedLessonId(null);
  }, []);

  const navigateToSubject = useCallback((subjectId) => {
    setCurrentView(NAV_VIEWS.SUBJECT_DETAIL);
    setSelectedSubjectId(subjectId);
    setSelectedLessonId(null);
  }, []);

  const navigateToLesson = useCallback((subjectId, lessonId) => {
    setCurrentView(NAV_VIEWS.LESSON_PLAYER);
    setSelectedSubjectId(subjectId);
    setSelectedLessonId(lessonId);
  }, []);

  const navigateToChallenge = useCallback((subjectId) => {
    setCurrentView(NAV_VIEWS.CHALLENGE);
    setSelectedSubjectId(subjectId);
    setSelectedLessonId(null);
  }, []);

  return {
    currentView,
    selectedSubjectId,
    selectedLessonId,
    navigateToDashboard,
    navigateToSubject,
    navigateToLesson,
    navigateToChallenge
  };
}