import React from 'react';

const ChallengeResult = ({ subject, results, percentage, passed, onRetry, onBack }) => {
  const total = results.length;
  const correct = results.filter(r => r.correct).length;

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body text-center">
          <h2 className="mb-4">{subject.title} – Challenge Result</h2>
          
          <div className="mb-4">
            <div className="display-1">{percentage}%</div>
            <div className="progress" style={{ height: '20px' }}>
              <div 
                className={`progress-bar ${passed ? 'bg-success' : 'bg-danger'}`} 
                style={{ width: `${percentage}%` }}
              >
                {percentage}%
              </div>
            </div>
          </div>

          <p>You answered {correct} out of {total} questions correctly.</p>
          
          {passed ? (
            <div className="alert alert-success">
              🎉 Congratulations! You passed the challenge test for <strong>{subject.title}</strong>.
              <br />
              This subject is now marked as completed.
            </div>
          ) : (
            <div className="alert alert-warning">
              ❌ You need at least 90% to pass. You scored {percentage}%.
              <br />
              You can retry the challenge test.
            </div>
          )}

          <div className="mt-4 d-flex gap-3 justify-content-center">
            {!passed && (
              <button className="btn btn-primary" onClick={onRetry}>
                🔄 Retry Challenge
              </button>
            )}
            <button className="btn btn-outline-secondary" onClick={onBack}>
              Back to Subject
            </button>
            {passed && (
              <button className="btn btn-success" onClick={onBack}>
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeResult;