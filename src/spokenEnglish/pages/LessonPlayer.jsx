import React, { useEffect, useState } from 'react';
import { useSpokenEnglish } from '../context';
import ActivityRenderer from '../components/ActivityRenderer';

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

  // Load the correct lesson based on navigation props, NOT progress.currentLessonId
  useEffect(() => {
    // 1. Validate props
    if (!selectedSubjectId || !selectedLessonId) {
      setLessonComplete(false);
      setCurrentActivity(null);
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
    
    if (!subject || !lesson || !lesson.activities || lesson.activities.length === 0) {
      setLessonComplete(true); // No activities = completed
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
      if (activityIndex < 0 || activityIndex >= lesson.activities.length) {
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

    const activity = lesson.activities[activityIndex];
    setCurrentActivity({
      subject,
      lesson,
      activity,
      activityIndex,
      totalActivities: lesson.activities.length
    });
    setLessonComplete(false);
    setError(null);
  }, [selectedSubjectId, selectedLessonId, progress, getSubject, getLesson, isLessonCompleted, saveProgress]);

  const handleActivityComplete = (wasCorrect, userAnswer) => {
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
        <h2>🎉 Lesson Complete!</h2>
        <p>You've finished all activities in this lesson.</p>
        <div className="mt-3 d-flex gap-3 justify-content-center flex-wrap">
          <button className="btn btn-primary" onClick={() => navigateToSubject(selectedSubjectId)}>
            Back to Subject
          </button>
          {nextLesson && (
            <button
              className="btn btn-success"
              onClick={() => navigateToLesson(selectedSubjectId, nextLesson.id)}
            >
              ➡️ Next Lesson: {nextLesson.title}
            </button>
          )}
          <button className="btn btn-outline-warning" onClick={handleRestartLesson}>
            🔄 Restart Lesson
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
        <span className="badge bg-secondary">Lesson: {lesson.title}</span>
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
      />
    </div>
  );
};

export default LessonPlayer;