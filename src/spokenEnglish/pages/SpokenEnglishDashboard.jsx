import React, { useEffect, useMemo, useState } from 'react';
import { useSpokenEnglish } from '../context';
import { useNavigation, NAV_VIEWS } from '../hooks/useNavigation';
import SubjectCard from '../components/SubjectCard';
import ProgressSummary from '../components/ProgressSummary';
import SubjectDetail from '../components/SubjectDetail';
import LessonPlayer from '../pages/LessonPlayer';
import ChallengePlayer from '../pages/ChallengePlayer';
import WelcomeBentureAI from '../components/WelcomeBentureAI';

import './SpokenEnglishDashboard.css';

const SpokenEnglishDashboard = () => {
  const {
    unlockedSubjectIds,
    progress,
    loading,
    getNextIncompleteActivity,
    resetProgress,
    languagePreference,
    setLanguagePreference,
    courseData
  } = useSpokenEnglish();

  const {
    currentView,
    selectedSubjectId,
    selectedLessonId,
    navigateToSubject,
    navigateToLesson,
    navigateToChallenge,
    navigateToDashboard
  } = useNavigation();

  const [showWelcome, setShowWelcome] = useState(false);

  const hasStartedProgress = useMemo(() => {
    if (!progress) return false;

    return (
      (progress.completedLessons?.length || 0) > 0 ||
      (progress.completedSubjects?.length || 0) > 0 ||
      Object.keys(progress.subjectProgress || {}).length > 0 ||
      (progress.currentActivityIndex || 0) > 0 ||
      progress.currentLessonId !== 1 ||
      progress.currentSubjectId !== 1
    );
  }, [progress]);

  useEffect(() => {
    if (!loading) {
      setShowWelcome(!hasStartedProgress);
    }
  }, [loading, hasStartedProgress]);

  if (loading) {
    return (
      <div className="spoken-loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Loading your learning journey...</p>
      </div>
    );
  }

  if (showWelcome) {
    return (
      <WelcomeBentureAI
        selectedLanguage={
          languagePreference === 'english'
            ? 'en'
            : languagePreference === 'hindi'
              ? 'hi'
              : 'or'
        }
        onLanguageChange={(nextLanguage) =>
          setLanguagePreference(nextLanguage)
        }
        onContinue={() => {
          setShowWelcome(false);
        }}
      />
    );
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

  // ---------------------------------------------------------
  // CHILD VIEWS
  // ---------------------------------------------------------

  if (currentView === NAV_VIEWS.SUBJECT_DETAIL) {
    return (
      <SubjectDetail
        key={selectedSubjectId}
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

  // ---------------------------------------------------------
  // DASHBOARD
  // ---------------------------------------------------------

  return (
    <div className="spoken-dashboard">

      {/* ================= HERO ================= */}
      <section className="spoken-hero">

        <div className="spoken-hero-content">

          <div className="spoken-title-row">
            <div className="spoken-title-icon">
              💬
            </div>

            <div>
              <h1>Spoken English</h1>
              <p>
                Build your confidence and fluency step by step.
              </p>
            </div>
          </div>

          <div className="spoken-actions">

            <button
              type="button"
              className="spoken-btn spoken-btn-primary"
              onClick={handleContinue}
            >
              <span>▶</span>
              Continue Learning
            </button>

            <button
              type="button"
              className="spoken-btn spoken-btn-secondary"
              onClick={resetProgress}
            >
              <span>↻</span>
              Reset Progress
            </button>

          </div>

        </div>

        {/* Language */}
        <div className="spoken-language">

          <label htmlFor="spoken-language-select">
            Language:
          </label>

          <select
            id="spoken-language-select"
            value={languagePreference}
            onChange={(e) =>
              setLanguagePreference(e.target.value)
            }
          >
            <option value="english">English</option>
            <option value="odia">Odia</option>
            <option value="hindi">Hindi</option>
          </select>

        </div>

        {/* Decorative illustration */}
        <div className="spoken-hero-decoration">

          <div className="speech-bubble">
            <span>▰</span>
            <span>▰</span>
            <span>▰</span>
          </div>

          <div className="headphones">
            🎧
          </div>

          <div className="sparkle">
            ✦
          </div>

        </div>

      </section>


      {/* ================= PROGRESS SUMMARY ================= */}
      <section className="spoken-summary">
        <ProgressSummary />
      </section>


      {/* ================= SUBJECT HEADER ================= */}
      <section className="subjects-heading">

        <div>
          <h2>Subjects</h2>
          <p>
            Learn step by step and improve your spoken English skills.
          </p>
        </div>

      </section>


      {/* ================= SUBJECT GRID ================= */}
      <section className="subjects-grid">

        {courseData.subjects.map((subject, index) => {

          const isUnlocked = unlockedSubjectIds.includes(subject.id);

          return (
            <div
              key={subject.id}
              className={`subject-wrapper ${
                !isUnlocked ? 'subject-is-locked' : ''
              }`}
            >

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

      </section>


      {/* ================= MOTIVATIONAL FOOTER ================= */}
      <section className="spoken-motivation">

        <div className="motivation-icon">
          🏆
        </div>

        <div className="motivation-content">
          <strong>
            Stay consistent and keep learning every day!
          </strong>

          <span>
            Small progress every day leads to big results.
          </span>
        </div>

        <button
          type="button"
          className="motivation-button"
          onClick={handleContinue}
        >
          Keep Going! 🚀
        </button>

      </section>

    </div>
  );
};

export default SpokenEnglishDashboard;