import React, { useEffect, useState } from 'react';
import { useSpokenEnglish } from '../context';
import { filterActivities } from '../services/progressService';
import './SubjectDetail.css';

const SubjectDetail = ({
  selectedSubjectId,
  navigateToDashboard,
  navigateToLesson,
  navigateToChallenge
}) => {
  const {
    getSubject,
    progress,
    isLessonCompleted,
    isSubjectCompleted,
    resetLesson,
    resetSubject
  } = useSpokenEnglish();

  const [refresh, setRefresh] = useState(0);

  // Force re-render whenever progress changes
  useEffect(() => {
    setRefresh(prev => prev + 1);
    // Debug log to see completed lessons
    console.log('SubjectDetail: progress updated', progress.completedLessons);
  }, [progress]);

  const subject = getSubject(selectedSubjectId);

  if (!subject) {
    return (
      <div className="subject-detail-page">
        <div className="subject-detail-container">
          <button className="subject-back-link" onClick={navigateToDashboard}>
            ← Back to Lessons
          </button>

          <button
            className="subject-reset-subject-btn"
            onClick={() => resetSubject(subject.id)}
          >
            🔄 Reset Subject
          </button>

          <div className="subject-error-card">
            <h4>Subject not found</h4>
            <p>The subject with ID {selectedSubjectId} does not exist.</p>
            <button className="subject-primary-btn" onClick={navigateToDashboard}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const subjectCompleted = isSubjectCompleted(subject.id);
  const challengePassed =
    progress.subjectProgress?.[subject.id]?.challengePassed || false;

  const visibleChallengeActivities = filterActivities(
    subject.challengeTest?.activities || []
  );

  const hasChallenge = visibleChallengeActivities.length > 0;
  const totalLessons = subject.lessons.length;

  const completedLessonCount = subject.lessons.filter(lesson =>
    isLessonCompleted(subject.id, lesson.id)
  ).length;

  const lessonsCompleted =
    totalLessons > 0
      ? completedLessonCount >= totalLessons
      : subjectCompleted;

  const progressPercent =
    totalLessons > 0
      ? Math.round((completedLessonCount / totalLessons) * 100)
      : subjectCompleted
        ? 100
        : 0;

  const handleResetLesson = lessonId => {
    if (
      window.confirm(
        `Reset "${subject.lessons.find(l => l.id === lessonId)?.title}"? Your progress for this lesson will be removed.`
      )
    ) {
      resetLesson(subject.id, lessonId);
    }
  };

  return (
    <div className="subject-detail-page">
      <div className="subject-detail-container">
        <button className="subject-back-link" onClick={navigateToDashboard}>
          â† Back to Subjects
        </button>

        <section className="subject-overview-card">
          <div className="subject-overview-main">
            <div className="subject-overview-icon" aria-hidden="true">
                📚
            </div>

            <div className="subject-overview-content">
              <h1>{subject.title}</h1>
              <p>{subject.description}</p>
            </div>
          </div>

          <div className="subject-progress-block">
            <div className="subject-progress-heading">
              <span>
                Progress: {completedLessonCount}/{totalLessons} lessons
              </span>
              <strong>{progressPercent}%</strong>
            </div>

            <div className="subject-progress-track">
              <div
                className="subject-progress-fill"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        <section className="subject-lessons-section">
          <div className="subject-section-heading">
            <h2>Lessons</h2>
            <span>
              {completedLessonCount}/{totalLessons} completed
            </span>
          </div>

          <div className="subject-lessons-list">
            {subject.lessons.map((lesson, index) => {
              const completed = isLessonCompleted(subject.id, lesson.id);
              const prevCompleted =
                index === 0
                  ? true
                  : isLessonCompleted(
                      subject.id,
                      subject.lessons[index - 1].id
                    );

              const locked =
                !lessonsCompleted &&
                !completed &&
                !prevCompleted;

              // Debug: log each lesson's completion status
              console.log(
                `Lesson ${lesson.id} (${lesson.title}) completed:`,
                completed
              );

              return (
                <div
                  key={lesson.id}
                  className={[
                    'subject-lesson-row',
                    completed ? 'is-completed' : '',
                    locked ? 'is-locked' : '',
                    !completed && !locked ? 'is-current' : ''
                  ].join(' ')}
                >
                  <button
                    className="subject-lesson-main"
                    onClick={() => {
                      if (!locked) {
                        navigateToLesson(subject.id, lesson.id);
                      }
                    }}
                    disabled={locked}
                  >
                    <span className="subject-lesson-state" aria-hidden="true">
                       {completed ? '✅' : locked ? '🔒' : '▸'}
                    </span>

                    <span className="subject-lesson-title">
                      {lesson.title}
                    </span>
                  </button>

                  <div className="subject-lesson-actions">
                    {completed && (
                      <button
                        className="subject-lesson-reset"
                        onClick={() => handleResetLesson(lesson.id)}
                      >
                          🔄 <span>Reset</span>
                      </button>
                    )}

                    {completed && (
                      <span className="subject-status-badge completed">
                          ✅ <span>Done</span>
                      </span>
                    )}

                    {locked && (
                      <span className="subject-status-badge locked">
                          🔒 <span>Locked</span>
                      </span>
                    )}

                    {!completed && !locked && (
                      <span className="subject-status-badge continue">
                          Continue →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {hasChallenge && (
          <section className="subject-challenge-card">
            <button
              className="subject-challenge-main"
              onClick={() => navigateToChallenge(subject.id)}
            >
              <span className="subject-challenge-icon" aria-hidden="true">
                  🏆
              </span>

              <span className="subject-challenge-content">
                <strong>
                  {challengePassed
                    ? 'Retake Challenge Test'
                    : 'Take Challenge Test'}
                </strong>
                <small>
                  You can take this test anytime.
                  <br />
                  Score 90% or above to pass the subject.
                </small>
              </span>

              <span className="subject-challenge-arrow" aria-hidden="true">
                 →
              </span>
            </button>
          </section>
        )}

        {lessonsCompleted && hasChallenge && !challengePassed && (
          <div className="subject-completion-note">
            You have completed all lessons! Take the challenge test to complete
            the subject.
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectDetail;