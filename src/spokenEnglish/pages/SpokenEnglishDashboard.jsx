import React from 'react';
import { useSpokenEnglish } from '../context';
import { useNavigation, NAV_VIEWS } from '../hooks/useNavigation';
import SubjectCard from '../components/SubjectCard';
import ProgressSummary from '../components/ProgressSummary';
import SubjectDetail from '../components/SubjectDetail';
import LessonPlayer from '../pages/LessonPlayer';
import ChallengePlayer from '../pages/ChallengePlayer';

const SpokenEnglishDashboard = () => {
  const { unlockedSubjectIds, progress, loading, getNextIncompleteActivity, resetProgress, languagePreference, setLanguagePreference, courseData } = useSpokenEnglish();
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
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4 gap-3">
        <div>
          <h1>🗣️ Spoken English</h1>
          <p className="text-muted mb-0">Select your spoken-language preference and follow the instructions.</p>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
          <label htmlFor="spoken-language-select" className="mb-0 fw-semibold">Language:</label>
          <select
            id="spoken-language-select"
            className="form-select"
            value={languagePreference}
            onChange={(e) => setLanguagePreference(e.target.value)}
          >
            <option value="english">English</option>
            <option value="odia">Odia</option>
            <option value="hindi">Hindi</option>
          </select>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <button className="btn btn-primary me-2" onClick={handleContinue}>
            ▶ Continue Learning
          </button>
          <button className="btn btn-outline-danger" onClick={resetProgress}>
            🔄 Reset Progress
          </button>
        </div>
        {languagePreference === 'hindi' && (
          <div className="alert alert-info mb-0 py-2 px-3">
            Hindi mode selected. English fallback is used until full Hindi lesson text is available.
          </div>
        )}
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