import React, { useEffect, useState } from 'react';
import { useSpokenEnglish } from '../context';
import { filterActivities } from '../services/progressService';

const SubjectDetail = ({
  selectedSubjectId,
  navigateToDashboard,
  navigateToLesson,
  navigateToChallenge
}) => {
  const { getSubject, progress, isLessonCompleted, isSubjectCompleted, resetLesson, resetSubject } = useSpokenEnglish();
  const [refresh, setRefresh] = useState(0);
  
  // Force re‑render whenever progress changes
  useEffect(() => {
    setRefresh(prev => prev + 1);
    // Debug log to see completed lessons
    console.log('SubjectDetail: progress updated', progress.completedLessons);
  }, [progress]);

  const subject = getSubject(selectedSubjectId);

  if (!subject) {
    return (
      <div className="container py-4">
        <button className="btn btn-link mb-3" onClick={navigateToDashboard}>
          ← Back to Lessons
        </button>
        <button className="btn btn-outline-danger btn-sm mb-3" onClick={() => resetSubject(subject.id)}>
  🔄 Reset Subject
</button>
        <div className="alert alert-danger">
          <h4>Subject not found</h4>
          <p>The subject with ID {selectedSubjectId} does not exist.</p>
          <button className="btn btn-primary" onClick={navigateToDashboard}>
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const subjectCompleted = isSubjectCompleted(subject.id);
  const challengePassed = progress.subjectProgress?.[subject.id]?.challengePassed || false;
  const visibleChallengeActivities = filterActivities(subject.challengeTest?.activities || []);
  const hasChallenge = visibleChallengeActivities.length > 0;
  const totalLessons = subject.lessons.length;
  const completedLessonCount = subject.lessons.filter((lesson) => isLessonCompleted(subject.id, lesson.id)).length;
  const lessonsCompleted = totalLessons > 0
    ? completedLessonCount >= totalLessons
    : subjectCompleted;
  const progressPercent = totalLessons > 0
    ? Math.round((completedLessonCount / totalLessons) * 100)
    : (subjectCompleted ? 100 : 0);

  const handleResetLesson = (lessonId) => {
    if (window.confirm(`Reset "${subject.lessons.find(l => l.id === lessonId)?.title}"? Your progress for this lesson will be removed.`)) {
      resetLesson(subject.id, lessonId);
    }
  };

  return (
    <div className="container py-4">
      <button className="btn btn-link mb-3" onClick={navigateToDashboard}>
        ← Back to Subjects
              </button>
      <h2>{subject.title}</h2>
      <p className="text-muted">{subject.description}</p>

      <div className="mt-3">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <small className="text-muted">Progress: {completedLessonCount}/{totalLessons} lessons</small>
          <span className="fw-bold">{progressPercent}%</span>
        </div>
        <div className="progress" style={{ height: '8px' }}>
          <div className="progress-bar bg-success" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="list-group mt-3">
        {subject.lessons.map((lesson, index) => {
          const completed = isLessonCompleted(subject.id, lesson.id);
          const prevCompleted = index === 0 ? true : isLessonCompleted(subject.id, subject.lessons[index - 1].id);
          const locked = !lessonsCompleted && !completed && !prevCompleted;
          
          // Debug: log each lesson's completion status
          console.log(`Lesson ${lesson.id} (${lesson.title}) completed:`, completed);
          
          return (
            <div key={lesson.id} className="list-group-item d-flex justify-content-between align-items-center">
              <button
                className={`btn btn-link text-start p-0 ${locked ? 'disabled' : ''}`}
                onClick={() => {
                  if (!locked) {
                    navigateToLesson(subject.id, lesson.id);
                  }
                }}
                disabled={locked}
                style={{ textDecoration: 'none', flex: 1 }}
              >
                <span>
                  {completed ? '✅ ' : ''}
                  {lesson.title}
                </span>
              </button>
              <div>
                {completed && (
                  <button
                    className="btn btn-sm btn-outline-danger me-2"
                    onClick={() => handleResetLesson(lesson.id)}
                  >
                    🔄 Reset
                  </button>
                )}
                {completed && <span className="badge bg-success">Completed</span>}
                {locked && <span className="badge bg-secondary">🔒 Locked</span>}
              </div>
            </div>
          );
        })}
      </div>

      {hasChallenge && (
        <div className="mt-4">
          <button className="btn btn-warning" onClick={() => navigateToChallenge(subject.id)}>
            {challengePassed ? '🔄 Retake Challenge' : '🏆 Take Challenge Test'}
          </button>
          <small className="d-block text-muted mt-1">
            (You can take this test anytime. Score 90% or above to pass the subject.)
          </small>
        </div>
      )}

      {lessonsCompleted && hasChallenge && !challengePassed && (
        <div className="alert alert-info mt-3">
          You have completed all lessons! Take the challenge test to complete the subject.
        </div>
      )}
    </div>
  );
};

export default SubjectDetail;