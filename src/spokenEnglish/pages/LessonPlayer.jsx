import React, { useEffect, useState } from 'react';
import { useSpokenEnglish } from '../context';
import ActivityRenderer from '../components/ActivityRenderer';
import { filterActivities } from '../services/progressService';
import lessonCompleteSvg from './lessonComplete.svg';

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

  const createActivityState = (subject, lesson, activity, activityIndex, totalActivities) => ({
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

  // Load the correct lesson based on navigation props, NOT progress.currentLessonId
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
    if (isLessonCompleted(selectedSubjectId, selectedLessonId)) {
      setLessonComplete(true);
      setCurrentActivity(null);
      return;
    }

    // 3. Get the lesson data
    const subject = getSubject(selectedSubjectId);
    const lesson = getLesson(selectedSubjectId, selectedLessonId);
    if (!subject || !lesson) {
      setLessonComplete(true);
      setCurrentActivity(null);
      return;
    }

    const visibleActivities = filterActivities(lesson.activities);
    if (visibleActivities.length === 0) {
      setLessonComplete(true); // No visible activities = completed
      setCurrentActivity(null);
      return;
    }

    // 4. Determine which activity to show
    // If progress already points to this lesson, use its activity index
    let activityIndex = 0;
    if (progress.currentSubjectId === selectedSubjectId && 
        progress.currentLessonId === selectedLessonId) {
      activityIndex = progress.currentActivityIndex;
      // Ensure index is valid
      if (activityIndex < 0 || activityIndex >= visibleActivities.length) {
        activityIndex = 0;
      }
    } else {
      // New lesson – reset progress to this lesson and start from activity 0
      const fixedProgress = { ...progress };
      fixedProgress.currentSubjectId = selectedSubjectId;
      fixedProgress.currentLessonId = selectedLessonId;
      fixedProgress.currentActivityIndex = 0;
      saveProgress(fixedProgress);
    }

    const activity = visibleActivities[activityIndex];
    setCurrentActivity(createActivityState(subject, lesson, activity, activityIndex, visibleActivities.length));
    setLessonComplete(false);
    setError(null);
  }, [selectedSubjectId, selectedLessonId, progress, getSubject, getLesson, isLessonCompleted, saveProgress, retrySkippedMode]);

  const handleActivityComplete = (wasCorrect, userAnswer) => {
    if (retrySkippedMode) {
      const currentRetryActivity = failedActivities[retryIndex];
      const alreadyRetriedFailed = retryFailedActivities.some((item) => item.id === currentRetryActivity?.id);
      const nextRetryFailedActivities = (!wasCorrect && currentRetryActivity && !alreadyRetriedFailed)
        ? [...retryFailedActivities, currentRetryActivity]
        : retryFailedActivities;

      if (nextRetryFailedActivities !== retryFailedActivities) {
        setRetryFailedActivities(nextRetryFailedActivities);
      }

      const nextRetryIndex = retryIndex + 1;
      if (nextRetryIndex < failedActivities.length) {
        const nextActivity = failedActivities[nextRetryIndex];
        if (currentActivity?.subject && currentActivity?.lesson && nextActivity) {
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
        setFailedActivities(nextRetryFailedActivities);
        setRetryFailedActivities([]);
        setLessonComplete(true);
        setCurrentActivity(null);
      }
      return;
    }

    if (!wasCorrect && currentActivity?.activity) {
      setFailedActivities((prev) => {
        const exists = prev.some((item) => item.id === currentActivity.activity.id);
        if (exists) return prev;
        return [...prev, currentActivity.activity];
      });
    }

    advanceToNextActivity();
    // After advancing, check if the lesson (from navigation props) is now completed
    if (isLessonCompleted(selectedSubjectId, selectedLessonId)) {
      setLessonComplete(true);
      setCurrentActivity(null);
    }
  };

  const handleError = (err) => {
    setError(err.message);
  };

  const dismissError = () => setError(null);

  const handleRestartLesson = () => {
    if (window.confirm('Reset this lesson? You will lose all progress for this lesson.')) {
      resetLesson(selectedSubjectId, selectedLessonId);
      // Reset activity index for this lesson
      const fixedProgress = { ...progress };
      fixedProgress.currentSubjectId = selectedSubjectId;
      fixedProgress.currentLessonId = selectedLessonId;
      fixedProgress.currentActivityIndex = 0;
      saveProgress(fixedProgress);
      navigateToSubject(selectedSubjectId);
    }
  };

  const handleRetrySkippedQuestions = () => {
    if (!failedActivities.length || !currentActivity?.subject || !currentActivity?.lesson) {
      const subject = getSubject(selectedSubjectId);
      const lesson = getLesson(selectedSubjectId, selectedLessonId);
      if (!subject || !lesson || !failedActivities.length) {
        return;
      }
      setRetryFailedActivities([]);
      setRetrySkippedMode(true);
      setRetryIndex(0);
      setLessonComplete(false);
      setCurrentActivity(createActivityState(subject, lesson, failedActivities[0], 0, failedActivities.length));
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

  // ----- RENDER: Lesson Complete -----
  if (lessonComplete) {
    const currentSubject = getSubject(selectedSubjectId);
    let nextLesson = null;
    if (currentSubject) {
      const lessonIndex = currentSubject.lessons.findIndex(l => l.id === selectedLessonId);
      if (lessonIndex !== -1 && lessonIndex + 1 < currentSubject.lessons.length) {
        nextLesson = currentSubject.lessons[lessonIndex + 1];
      }
    }

    return (
      <div className="container py-5 text-center">
        <img
          src={lessonCompleteSvg}
          alt="Lesson Complete"
          style={{ maxWidth: '320px', width: '100%', display: 'block', margin: '0 auto 1rem' }}
        />
        <p>You've finished all activities in this lesson.</p>
        {failedActivities.length > 0 && (
          <p className="text-muted">You still have {failedActivities.length} skipped question(s) from failed attempts.</p>
        )}
        <div className="mt-3 d-flex gap-3 justify-content-center flex-wrap">
          <button className="btn btn-primary" onClick={() => navigateToSubject(selectedSubjectId)}>
            Back to Subject
          </button>
          {failedActivities.length > 0 && (
            <button
              className="btn btn-outline-primary"
              onClick={handleRetrySkippedQuestions}
            >
              Finish Skipped Questions ({failedActivities.length})
            </button>
          )}
          {nextLesson && (
            <button
              className="btn btn-success text-white"
              style={{ backgroundColor: '#198754', borderColor: '#198754' }}
              onClick={() => navigateToLesson(selectedSubjectId, nextLesson.id)}
            >
              Next Lesson: {nextLesson.title}
            </button>
          )}
          <button className="btn btn-outline-warning text-white"
          style={{ backgroundColor: '#fc9856', borderColor: '#fc9856' }}
           onClick={handleRestartLesson}>
            Restart Lesson
          </button>
        </div>
      </div>
    );
  }

  // ----- RENDER: Loading -----
  if (!currentActivity) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  // ----- RENDER: Activity -----
  const { subject, lesson, activity, activityIndex, totalActivities } = currentActivity;

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-link" onClick={() => navigateToSubject(subject.id)}>
          ← Back to Subject
        </button>
        <span className="badge bg-secondary">
          {retrySkippedMode ? 'Retry Skipped Questions' : `Lesson: ${lesson.title}`}
        </span>
        <span className="badge bg-info">Activity {activityIndex+1}/{totalActivities}</span>
      </div>
      <h4>{subject.title} – {lesson.title}</h4>
      <hr />
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> {error}
          <button type="button" className="btn-close" onClick={dismissError}></button>
        </div>
      )}
      <ActivityRenderer
        key={activity.id}
        activity={activity}
        onComplete={handleActivityComplete}
        onError={handleError}
        autoSpeakEnabled={autoSpeakEnabled}
        onAutoSpeakModeChange={setAutoSpeakEnabled}
      />
    </div>
  );
};

export default LessonPlayer;