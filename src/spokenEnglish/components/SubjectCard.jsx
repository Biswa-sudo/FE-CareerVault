import React from 'react';
import { useSpokenEnglish } from '../context';

const SubjectCard = ({ subject, isUnlocked, onClick }) => {
  const { progress } = useSpokenEnglish();
  const completed = progress.completedLessons || [];
  
  // Compute lessons completed for this subject
  const subjectLessonsCompleted = completed
    .filter(item => item.subjectId === subject.id)
    .map(item => item.lessonId);
  
  const totalLessons = subject.lessons.length;
  const done = subjectLessonsCompleted.length;
  const percent = totalLessons > 0 ? Math.round((done / totalLessons) * 100) : 0;
  const subjectCompleted = totalLessons > 0
    ? done >= totalLessons
    : progress.completedSubjects.includes(subject.id);
  
  const challengePassed = progress.subjectProgress?.[subject.id]?.challengePassed || false;

  return (
    <div className="card h-100 shadow-sm" style={{ cursor: isUnlocked ? 'pointer' : 'not-allowed', opacity: isUnlocked ? 1 : 0.6 }}>
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title">{subject.title}</h5>
          {!isUnlocked && <span className="badge bg-secondary">🔒 Locked</span>}
          {subjectCompleted && <span className="badge bg-success">✅ Completed</span>}
          {!subjectCompleted && isUnlocked && challengePassed && <span className="badge bg-info">Challenge Passed</span>}
        </div>
        <p className="card-text text-muted small">{subject.description || 'Practice speaking English'}</p>
        {isUnlocked && (
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">Progress: {done}/{totalLessons} lessons</small>
              <span className="fw-bold">{percent}%</span>
            </div>
            <div className="progress" style={{ height: '6px' }}>
              <div className="progress-bar bg-primary" style={{ width: `${percent}%` }}></div>
            </div>
            {!subjectCompleted && (
              <button className="btn btn-sm btn-outline-primary mt-2 w-100" onClick={() => onClick(subject.id)}>
                {done === 0 ? 'Start' : 'Continue'}
              </button>
            )}
            {subjectCompleted && (
              <button className="btn btn-sm btn-outline-secondary mt-2 w-100" onClick={() => onClick(subject.id)}>
                Review
              </button>
            )}
          </div>
        )}
        {!isUnlocked && (
          <div className="mt-2">
            <small className="text-muted">Complete previous subjects to unlock</small>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubjectCard;