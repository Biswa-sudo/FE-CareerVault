import React from 'react';
import { useSpokenEnglish } from '../context';
import { useNavigation, NAV_VIEWS } from '../hooks/useNavigation';
import SubjectCard from '../components/SubjectCard';
import ProgressSummary from '../components/ProgressSummary';
import SubjectDetail from '../components/SubjectDetail';
import LessonPlayer from '../pages/LessonPlayer';
import ChallengePlayer from '../pages/ChallengePlayer';
import { courseData } from '../data/courseData';

const SpokenEnglishDashboard = () => {
  const { unlockedSubjectIds, progress, loading, getNextIncompleteActivity, resetProgress } = useSpokenEnglish();
  const {
    currentView,
    selectedSubjectId,
    selectedLessonId,
    navigateToSubject,
    navigateToLesson,
    navigateToChallenge,
    navigateToDashboard
  } = useNavigation();

  if (loading) {
    return <div className="text-center mt-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  }

  const handleContinue = () => {
    const next = getNextIncompleteActivity();
    if (!next) {
      alert('🎉 You have completed all subjects!');
      return;
    }
    if (next.isChallenge) {
      navigateToChallenge(next.subject.id);
    } else if (next.lesson) {
      navigateToLesson(next.subject.id, next.lesson.id);
    } else {
      navigateToSubject(next.subject.id);
    }
  };

  // Render child views with shared navigation props
  if (currentView === NAV_VIEWS.SUBJECT_DETAIL) {
    return (
      <SubjectDetail
        key={selectedSubjectId}  // 🔑 forces remount on subject change
        selectedSubjectId={selectedSubjectId}
        navigateToDashboard={navigateToDashboard}
        navigateToLesson={navigateToLesson}
        navigateToChallenge={navigateToChallenge}
      />
    );
  }

  if (currentView === NAV_VIEWS.LESSON_PLAYER) {
    return (
      <LessonPlayer
        selectedSubjectId={selectedSubjectId}
        selectedLessonId={selectedLessonId}
        navigateToDashboard={navigateToDashboard}
        navigateToSubject={navigateToSubject}
        navigateToLesson={navigateToLesson}
      />
    );
  }

  if (currentView === NAV_VIEWS.CHALLENGE) {
    return (
      <ChallengePlayer
        selectedSubjectId={selectedSubjectId}
        navigateToSubject={navigateToSubject}
      />
    );
  }

  // Default: Dashboard view
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>🗣️ Spoken English</h1>
        <div>
          <button className="btn btn-primary me-2" onClick={handleContinue}>
            ▶ Continue Learning
          </button>
          <button className="btn btn-outline-danger" onClick={resetProgress}>
            🔄 Reset Progress
          </button>
        </div>
      </div>

      <ProgressSummary />
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {courseData.subjects.map(subject => {
          const isUnlocked = unlockedSubjectIds.includes(subject.id);
          return (
            <div key={subject.id} className="col">
              <SubjectCard
                subject={subject}
                isUnlocked={isUnlocked}
                onClick={() => {
                  if (isUnlocked) {
                    navigateToSubject(subject.id);
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpokenEnglishDashboard;