import React, { useEffect, useState } from 'react';
import { useSpokenEnglish } from '../context';
import ActivityRenderer from '../components/ActivityRenderer';
import { filterActivities } from '../services/progressService';
import lessonCompleteSvg from './lessonComplete.svg';

const LESSON_PLAYER_STYLES = `
  .lesson-player-page {
    --lp-primary: #4f46e5;
    --lp-primary-dark: #3730a3;
    --lp-text: #172554;
    --lp-muted: #64748b;
    --lp-border: #e5e7eb;
    --lp-bg: #f6f8fc;

    min-height: 100vh;
    width: 100%;
    background:
      radial-gradient(
        circle at 100% 0%,
        rgba(99, 102, 241, 0.10),
        transparent 28rem
      ),
      linear-gradient(
        180deg,
        #f8faff 0%,
        var(--lp-bg) 100%
      );

    color: var(--lp-text);
    box-sizing: border-box;
  }

  .lesson-player-page *,
  .lesson-player-page *::before,
  .lesson-player-page *::after {
    box-sizing: border-box;
  }

  .lesson-player-shell {
    width: min(100%, 980px);
    margin: 0 auto;
    padding: 24px 24px 48px;
  }

  /* =========================================
     HEADER
     ========================================= */

  .lesson-mobile-header {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    gap: 12px;
    align-items: center;
    margin-bottom: 24px;
  }

  .lesson-back-btn {
    min-height: 44px;

    display: inline-flex;
    align-items: center;
    gap: 7px;

    border: 0;
    background: transparent;

    color: #1d4ed8;
    padding: 8px 4px;

    font-weight: 700;
    font-size: 15px;

    cursor: pointer;
  }

  .lesson-back-btn span:first-child {
    width: 40px;
    height: 40px;

    display: grid;
    place-items: center;

    border-radius: 12px;
    background: #eaf1ff;

    font-size: 23px;
    line-height: 1;
  }

  .lesson-header-pill {
    min-width: 0;
    max-width: 100%;
    min-height: 44px;

    justify-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 8px 18px;

    border-radius: 14px;

    background: #e7efff;
    color: #17366e;

    font-weight: 800;

    overflow: hidden;
  }

  .lesson-header-pill span:last-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .lesson-header-icon {
    flex: 0 0 auto;
  }

  .lesson-count-pill {
    min-height: 44px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    padding: 8px 13px;

    border-radius: 14px;
    border: 1px solid var(--lp-border);

    background: #ffffff;
    color: var(--lp-primary);

    font-weight: 800;

    white-space: nowrap;
  }

  /* =========================================
     LESSON HEADING
     ========================================= */

  .lesson-heading {
    margin: 8px 4px 20px;
  }

  .lesson-eyebrow {
    margin-bottom: 5px;

    color: var(--lp-primary);

    font-size: 13px;
    font-weight: 800;

    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .lesson-heading h1 {
    margin: 0;

    color: var(--lp-text);

    font-size: clamp(24px, 4vw, 34px);
    line-height: 1.15;

    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .lesson-heading p {
    margin: 7px 0 0;

    color: var(--lp-muted);

    font-size: 16px;
    line-height: 1.5;
  }

  /* =========================================
     PROGRESS
     ========================================= */

  .lesson-progress-wrap {
    margin: 0 4px 18px;
  }

  .lesson-progress-meta {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    margin-bottom: 8px;

    color: #64748b;

    font-size: 13px;
    font-weight: 700;
  }

  .lesson-progress-meta strong {
    color: var(--lp-primary);
  }

  .lesson-progress-track {
    width: 100%;
    height: 7px;

    border-radius: 999px;

    overflow: hidden;

    background: #e5e7eb;
  }

  .lesson-progress-bar {
    height: 100%;

    border-radius: inherit;

    background: linear-gradient(
      90deg,
      #6366f1,
      #4f46e5
    );

    transition: width 0.25s ease;
  }

  /* =========================================
     ERROR
     ========================================= */

  .lesson-error {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 12px;

    padding: 13px 15px;
    margin-bottom: 16px;

    border: 1px solid #fecaca;
    border-radius: 14px;

    background: #fff7f7;

    color: #991b1b;
  }

  .lesson-error div {
    display: flex;
    flex-direction: column;
    gap: 3px;

    min-width: 0;
  }

  .lesson-error button {
    border: 0;
    background: transparent;

    color: inherit;

    font-size: 22px;
    line-height: 1;

    cursor: pointer;
  }

  /* =========================================
     ACTIVITY CARD
     ========================================= */

  .lesson-activity-card {
    width: 100%;
    min-width: 0;

    background: #ffffff;

    border: 1px solid rgba(226, 232, 240, 0.95);
    border-radius: 24px;

    box-shadow:
      0 12px 40px rgba(15, 23, 42, 0.08);

    overflow: hidden;
  }

  /*
   * Make existing ActivityRenderer content
   * responsive without changing its logic.
   */

  .lesson-activity-card > *,
  .lesson-activity-card .container,
  .lesson-activity-card .container-fluid,
  .lesson-activity-card .row,
  .lesson-activity-card [class*="col-"] {
    max-width: 100%;
    min-width: 0;
  }

  .lesson-activity-card img,
  .lesson-activity-card video,
  .lesson-activity-card audio,
  .lesson-activity-card canvas {
    max-width: 100%;
  }

  .lesson-activity-card input,
  .lesson-activity-card textarea,
  .lesson-activity-card select,
  .lesson-activity-card button {
    max-width: 100%;
  }

  .lesson-activity-card input,
  .lesson-activity-card textarea {
    font-size: 16px;
  }

  /* =========================================
     LOADING
     ========================================= */

  .lesson-loading {
    min-height: 60vh;

    display: grid;
    place-items: center;
    align-content: center;

    gap: 12px;

    color: var(--lp-muted);
    font-weight: 700;
  }

  .lesson-spinner {
    width: 34px;
    height: 34px;

    border: 4px solid #dbe4ff;
    border-top-color: var(--lp-primary);

    border-radius: 50%;

    animation: lesson-spin 0.8s linear infinite;
  }

  @keyframes lesson-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* =========================================
     LESSON COMPLETE
     ========================================= */

  .lesson-complete-shell {
    min-height: 100vh;

    display: grid;
    place-items: center;
  }

  .lesson-complete-card {
    width: min(100%, 620px);

    padding: 42px 28px;

    text-align: center;

    background: #ffffff;

    border: 1px solid var(--lp-border);
    border-radius: 28px;

    box-shadow:
      0 16px 50px rgba(15, 23, 42, 0.09);
  }

  .lesson-complete-icon {
    width: 72px;
    height: 72px;

    display: grid;
    place-items: center;

    margin: 0 auto 18px;

    border-radius: 22px;

    background: #e9f9ef;
    color: #159447;

    font-size: 38px;
    font-weight: 900;
  }

  .lesson-complete-card h1 {
    margin: 0;

    font-size: 30px;
    font-weight: 850;
  }

  .lesson-complete-card p {
    margin: 9px 0;

    color: var(--lp-muted);
  }

  .lesson-complete-note {
    margin: 18px 0;
    padding: 12px 14px;

    border-radius: 14px;

    background: #f7f5ff;
    color: #4c3aa8;

    font-size: 14px;
  }

  .lesson-complete-actions {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    gap: 10px;

    margin-top: 22px;
  }

  .lesson-btn {
    min-height: 46px;

    padding: 10px 18px;

    border-radius: 13px;
    border: 1px solid transparent;

    font-weight: 800;

    cursor: pointer;
  }

  .lesson-btn-primary {
    background: var(--lp-primary);
    color: #ffffff;
  }

  .lesson-btn-secondary {
    background: #ffffff;
    color: var(--lp-primary);

    border-color: #c7d2fe;
  }

  .lesson-btn-success {
    background: #159447;
    color: #ffffff;
  }

  .lesson-btn-warning {
    background: #f59e0b;
    color: #ffffff;
  }

  /* =========================================
     MOBILE
     ========================================= */

  @media (max-width: 640px) {

    .lesson-player-shell {
      padding: 12px 12px 28px;
    }

    .lesson-mobile-header {
      grid-template-columns:
        auto
        minmax(0, 1fr)
        auto;

      gap: 7px;

      margin-bottom: 18px;
    }

    .lesson-back-btn {
      padding: 3px 0;
    }

    .lesson-back-btn span:first-child {
      width: 40px;
      height: 40px;
    }

    .lesson-back-text {
      display: none;
    }

    .lesson-header-pill {
      justify-self: stretch;

      padding: 7px 11px;

      border-radius: 13px;

      font-size: 13px;
    }

    .lesson-count-pill {
      min-height: 40px;

      padding: 7px 10px;

      border-radius: 12px;

      font-size: 12px;
    }

    .lesson-heading {
      margin: 4px 2px 16px;
    }

    .lesson-heading h1 {
      font-size: 25px;
    }

    .lesson-heading p {
      font-size: 14px;
    }

    .lesson-progress-wrap {
      margin-left: 2px;
      margin-right: 2px;
      margin-bottom: 14px;
    }

    .lesson-progress-meta {
      font-size: 12px;
    }

    .lesson-activity-card {
      border-radius: 18px;

      box-shadow:
        0 7px 24px rgba(15, 23, 42, 0.07);
    }

    /*
     * Prevent content inside ActivityRenderer
     * from creating horizontal scrolling.
     */

    .lesson-activity-card * {
      max-width: 100%;
    }

    .lesson-activity-card .d-flex {
      flex-wrap: wrap;
    }

    .lesson-activity-card .btn {
      white-space: normal;
    }

    .lesson-complete-shell {
      padding: 18px 12px;
    }

    .lesson-complete-card {
      padding: 32px 18px;

      border-radius: 22px;
    }

    .lesson-complete-card h1 {
      font-size: 26px;
    }

    .lesson-complete-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .lesson-btn {
      width: 100%;
    }
  }

  /* =========================================
     VERY SMALL PHONES
     ========================================= */

  @media (max-width: 380px) {

    .lesson-player-shell {
      padding-left: 9px;
      padding-right: 9px;
    }

    .lesson-header-pill {
      font-size: 12px;
      padding-left: 8px;
      padding-right: 8px;
    }

    .lesson-count-pill {
      padding-left: 8px;
      padding-right: 8px;
    }

    .lesson-heading h1 {
      font-size: 23px;
    }

    .lesson-heading p {
      font-size: 13px;
    }
  }
`;

const LessonPlayer = ({
  selectedSubjectId,
  selectedLessonId,
  navigateToDashboard,
  navigateToSubject,
  navigateToLesson
}) => {
  const {
    progress,
    advanceToNextActivity,
    getSubject,
    getLesson,
    isLessonCompleted,
    resetLesson,
    saveProgress
  } = useSpokenEnglish();

  const [currentActivity, setCurrentActivity] = useState(null);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [error, setError] = useState(null);
  const [failedActivities, setFailedActivities] = useState([]);
  const [retrySkippedMode, setRetrySkippedMode] = useState(false);
  const [retryIndex, setRetryIndex] = useState(0);
  const [retryFailedActivities, setRetryFailedActivities] = useState([]);
  const [autoSpeakEnabled, setAutoSpeakEnabled] = useState(true);

  const createActivityState = (
    subject,
    lesson,
    activity,
    activityIndex,
    totalActivities
  ) => ({
    subject,
    lesson,
    activity,
    activityIndex,
    totalActivities
  });

  useEffect(() => {
    setFailedActivities([]);
    setRetrySkippedMode(false);
    setRetryIndex(0);
    setRetryFailedActivities([]);
  }, [selectedSubjectId, selectedLessonId]);

  // Load the correct lesson based on navigation props,
  // NOT progress.currentLessonId
  useEffect(() => {
    if (retrySkippedMode) {
      return;
    }

    // 1. Validate props
    if (!selectedSubjectId || !selectedLessonId) {
      setLessonComplete(false);
      setCurrentActivity(null);
      setFailedActivities([]);
      setRetryFailedActivities([]);
      setRetryIndex(0);
      return;
    }

    // 2. Check if the lesson is completed
    if (
      isLessonCompleted(
        selectedSubjectId,
        selectedLessonId
      )
    ) {
      setLessonComplete(true);
      setCurrentActivity(null);
      return;
    }

    // 3. Get the lesson data
    const subject = getSubject(selectedSubjectId);
    const lesson = getLesson(
      selectedSubjectId,
      selectedLessonId
    );

    if (!subject || !lesson) {
      setLessonComplete(true);
      setCurrentActivity(null);
      return;
    }

    const visibleActivities = filterActivities(
      lesson.activities
    );

    if (visibleActivities.length === 0) {
      setLessonComplete(true);
      setCurrentActivity(null);
      return;
    }

    // 4. Determine which activity to show
    // If progress already points to this lesson,
    // use its activity index
    let activityIndex = 0;

    if (
      progress.currentSubjectId === selectedSubjectId &&
      progress.currentLessonId === selectedLessonId
    ) {
      activityIndex = progress.currentActivityIndex;

      // Ensure index is valid
      if (
        activityIndex < 0 ||
        activityIndex >= visibleActivities.length
      ) {
        activityIndex = 0;
      }
    } else {
      // New lesson – reset progress to this lesson
      // and start from activity 0
      const fixedProgress = { ...progress };

      fixedProgress.currentSubjectId =
        selectedSubjectId;

      fixedProgress.currentLessonId =
        selectedLessonId;

      fixedProgress.currentActivityIndex = 0;

      saveProgress(fixedProgress);
    }

    const activity =
      visibleActivities[activityIndex];

    setCurrentActivity(
      createActivityState(
        subject,
        lesson,
        activity,
        activityIndex,
        visibleActivities.length
      )
    );

    setLessonComplete(false);
    setError(null);
  }, [
    selectedSubjectId,
    selectedLessonId,
    progress,
    getSubject,
    getLesson,
    isLessonCompleted,
    saveProgress,
    retrySkippedMode
  ]);

  const handleActivityComplete = (
    wasCorrect,
    userAnswer
  ) => {
    if (retrySkippedMode) {
      const currentRetryActivity =
        failedActivities[retryIndex];

      const alreadyRetriedFailed =
        retryFailedActivities.some(
          (item) =>
            item.id === currentRetryActivity?.id
        );

      const nextRetryFailedActivities =
        !wasCorrect &&
        currentRetryActivity &&
        !alreadyRetriedFailed
          ? [
              ...retryFailedActivities,
              currentRetryActivity
            ]
          : retryFailedActivities;

      if (
        nextRetryFailedActivities !==
        retryFailedActivities
      ) {
        setRetryFailedActivities(
          nextRetryFailedActivities
        );
      }

      const nextRetryIndex =
        retryIndex + 1;

      if (
        nextRetryIndex <
        failedActivities.length
      ) {
        const nextActivity =
          failedActivities[nextRetryIndex];

        if (
          currentActivity?.subject &&
          currentActivity?.lesson &&
          nextActivity
        ) {
          setRetryIndex(nextRetryIndex);

          setCurrentActivity(
            createActivityState(
              currentActivity.subject,
              currentActivity.lesson,
              nextActivity,
              nextRetryIndex,
              failedActivities.length
            )
          );
        }
      } else {
        setRetrySkippedMode(false);
        setRetryIndex(0);
        setFailedActivities(
          nextRetryFailedActivities
        );
        setRetryFailedActivities([]);
        setLessonComplete(true);
        setCurrentActivity(null);
      }

      return;
    }

    if (
      !wasCorrect &&
      currentActivity?.activity
    ) {
      setFailedActivities((prev) => {
        const exists = prev.some(
          (item) =>
            item.id ===
            currentActivity.activity.id
        );

        if (exists) {
          return prev;
        }

        return [
          ...prev,
          currentActivity.activity
        ];
      });
    }

    advanceToNextActivity();

    // After advancing, check if the lesson
    // from navigation props is now completed
    if (
      isLessonCompleted(
        selectedSubjectId,
        selectedLessonId
      )
    ) {
      setLessonComplete(true);
      setCurrentActivity(null);
    }
  };

  const handleError = (err) => {
    setError(err.message);
  };

  const dismissError = () => {
    setError(null);
  };

  const handleRestartLesson = () => {
    if (
      window.confirm(
        'Reset this lesson? You will lose all progress for this lesson.'
      )
    ) {
      resetLesson(
        selectedSubjectId,
        selectedLessonId
      );

      // Reset activity index for this lesson
      const fixedProgress = {
        ...progress
      };

      fixedProgress.currentSubjectId =
        selectedSubjectId;

      fixedProgress.currentLessonId =
        selectedLessonId;

      fixedProgress.currentActivityIndex = 0;

      saveProgress(fixedProgress);

      navigateToSubject(
        selectedSubjectId
      );
    }
  };

  const handleRetrySkippedQuestions = () => {
    if (
      !failedActivities.length ||
      !currentActivity?.subject ||
      !currentActivity?.lesson
    ) {
      const subject =
        getSubject(selectedSubjectId);

      const lesson =
        getLesson(
          selectedSubjectId,
          selectedLessonId
        );

      if (
        !subject ||
        !lesson ||
        !failedActivities.length
      ) {
        return;
      }

      setRetryFailedActivities([]);
      setRetrySkippedMode(true);
      setRetryIndex(0);
      setLessonComplete(false);

      setCurrentActivity(
        createActivityState(
          subject,
          lesson,
          failedActivities[0],
          0,
          failedActivities.length
        )
      );

      return;
    }

    setRetryFailedActivities([]);
    setRetrySkippedMode(true);
    setRetryIndex(0);
    setLessonComplete(false);

    setCurrentActivity(
      createActivityState(
        currentActivity.subject,
        currentActivity.lesson,
        failedActivities[0],
        0,
        failedActivities.length
      )
    );
  };

  // =========================================
  // RENDER: LESSON COMPLETE
  // =========================================

  if (lessonComplete) {
    const currentSubject =
      getSubject(selectedSubjectId);

    let nextLesson = null;

    if (currentSubject) {
      const lessonIndex =
        currentSubject.lessons.findIndex(
          (l) =>
            l.id === selectedLessonId
        );

      if (
        lessonIndex !== -1 &&
        lessonIndex + 1 <
          currentSubject.lessons.length
      ) {
        nextLesson =
          currentSubject.lessons[
            lessonIndex + 1
          ];
      }
    }

    return (
      <div className="lesson-player-page">
        <style>
          {LESSON_PLAYER_STYLES}
        </style>

        <main className="lesson-player-shell lesson-complete-shell">

          <section className="lesson-complete-card">

            <div className="lesson-complete-icon">
              ✓
            </div>

            <h1>
              Lesson Complete!
            </h1>

            <p>
              You've finished all activities
              in this lesson.
            </p>

            {failedActivities.length > 0 && (
              <div className="lesson-complete-note">
                You still have{' '}
                {failedActivities.length}{' '}
                skipped question(s) from
                failed attempts.
              </div>
            )}

            <div className="lesson-complete-actions">

              <button
                className="lesson-btn lesson-btn-primary"
                onClick={() =>
                  navigateToSubject(
                    selectedSubjectId
                  )
                }
              >
                Back to Lessons
              </button>

              {failedActivities.length > 0 && (
                <button
                  className="lesson-btn lesson-btn-secondary"
                  onClick={
                    handleRetrySkippedQuestions
                  }
                >
                  Retry Skipped (
                  {failedActivities.length})
                </button>
              )}

              {nextLesson && (
                <button
                  className="lesson-btn lesson-btn-success"
                  onClick={() =>
                    navigateToLesson(
                      selectedSubjectId,
                      nextLesson.id
                    )
                  }
                >
                  Next Lesson
                </button>
              )}

              <button
                className="lesson-btn lesson-btn-warning"
                onClick={
                  handleRestartLesson
                }
              >
                Restart Lesson
              </button>

            </div>

          </section>

        </main>
      </div>
    );
  }

  // =========================================
  // RENDER: LOADING
  // =========================================

  if (!currentActivity) {
    return (
      <div className="lesson-player-page">
        <style>
          {LESSON_PLAYER_STYLES}
        </style>

        <main className="lesson-player-shell lesson-loading">

          <div
            className="lesson-spinner"
            aria-label="Loading"
          />

          <span>
            Loading lesson...
          </span>

        </main>
      </div>
    );
  }

  // =========================================
  // RENDER: ACTIVITY
  // =========================================

  const {
    subject,
    lesson,
    activity,
    activityIndex,
    totalActivities
  } = currentActivity;

  const progressPercent =
    Math.round(
      ((activityIndex + 1) /
        Math.max(
          totalActivities,
          1
        )) *
        100
    );

  return (
    <div className="lesson-player-page">

      <style>
        {LESSON_PLAYER_STYLES}
      </style>

      <main className="lesson-player-shell">

        {/* =====================================
            MOBILE-FRIENDLY HEADER
            ===================================== */}

        <header className="lesson-mobile-header">

          <button
            className="lesson-back-btn"
            onClick={() =>
              navigateToSubject(
                subject.id
              )
            }
            aria-label="Back to lessons"
          >

            <span aria-hidden="true">
              ←
            </span>

            <span className="lesson-back-text">
              Lessons
            </span>

          </button>

          <div
            className="lesson-header-pill"
            title={lesson.title}
          >

            <span
              className="lesson-header-icon"
              aria-hidden="true"
            >
              ☀️
            </span>

            <span>
              {retrySkippedMode
                ? 'Retry Questions'
                : lesson.title}
            </span>

          </div>

          <div className="lesson-count-pill">
            {activityIndex + 1}/
            {totalActivities}
          </div>

        </header>

        {/* =====================================
            LESSON TITLE
            ===================================== */}

        <section className="lesson-heading">

          <div className="lesson-eyebrow">
            {subject.title}
          </div>

          <h1>
            {lesson.title}
          </h1>

          <p>
            {retrySkippedMode
              ? 'Let’s try the questions you missed.'
              : 'Practice, speak, and build your confidence.'}
          </p>

        </section>

        {/* =====================================
            PROGRESS
            ===================================== */}

        <div
          className="lesson-progress-wrap"
          aria-label={`Activity ${
            activityIndex + 1
          } of ${totalActivities}`}
        >

          <div className="lesson-progress-meta">

            <span>
              Activity{' '}
              {activityIndex + 1}{' '}
              of{' '}
              {totalActivities}
            </span>

            <strong>
              {progressPercent}%
            </strong>

          </div>

          <div className="lesson-progress-track">

            <div
              className="lesson-progress-bar"
              style={{
                width: `${progressPercent}%`
              }}
            />

          </div>

        </div>

        {/* =====================================
            ERROR
            ===================================== */}

        {error && (
          <div
            className="lesson-error"
            role="alert"
          >

            <div>

              <strong>
                Something went wrong
              </strong>

              <span>
                {error}
              </span>

            </div>

            <button
              onClick={dismissError}
              aria-label="Dismiss error"
            >
              ×
            </button>

          </div>
        )}

        {/* =====================================
            EXISTING ACTIVITY RENDERER
            DO NOT CHANGE THE LOGIC
            ===================================== */}

        <section className="lesson-activity-card">

          <ActivityRenderer
            key={activity.id}
            activity={activity}
            onComplete={
              handleActivityComplete
            }
            onError={handleError}
            autoSpeakEnabled={
              autoSpeakEnabled
            }
            onAutoSpeakModeChange={
              setAutoSpeakEnabled
            }
          />

        </section>

      </main>

    </div>
  );
};

export default LessonPlayer;