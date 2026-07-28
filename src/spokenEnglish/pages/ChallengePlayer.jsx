import React, { useState, useEffect } from 'react';
import { useSpokenEnglish } from '../context';
import ActivityRenderer from '../components/ActivityRenderer';
import ChallengeResult from '../components/ChallengeResult';

const ChallengePlayer = ({
  selectedSubjectId,
  navigateToSubject
}) => {
  const { getSubject, markChallengeAsPassed, progress } = useSpokenEnglish();
  
  const subject = getSubject(selectedSubjectId);
  const [activities, setActivities] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [testComplete, setTestComplete] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (subject && subject.challengeTest && subject.challengeTest.activities) {
      setActivities(subject.challengeTest.activities);
    } else {
      setActivities([]);
    }
    setCurrentIndex(0);
    setResults([]);
    setTestComplete(false);
    setError(null);
  }, [subject]);

  const handleActivityComplete = (wasCorrect, userAnswer) => {
    setResults(prev => [...prev, { correct: wasCorrect, userAnswer }]);
    if (currentIndex + 1 < activities.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setTestComplete(true);
    }
  };

  const handleError = (err) => {
    setError(err.message);
  };

  const dismissError = () => setError(null);

  const handleRetry = () => {
    setCurrentIndex(0);
    setResults([]);
    setTestComplete(false);
    setError(null);
  };

  if (!subject) {
    return (
      <div className="container py-4">
        <button className="btn btn-link mb-3" onClick={() => navigateToSubject(null)}>
          ← Back to All Subjects
        </button>
        <div className="alert alert-danger">Subject not found.</div>
      </div>
    );
  }

  if (!activities || activities.length === 0) {
    return (
      <div className="container py-5 text-center">
        <p>No challenge test available for this subject.</p>
        <button className="btn btn-primary" onClick={() => navigateToSubject(selectedSubjectId)}>
          Back to Subject
        </button>
      </div>
    );
  }

  if (testComplete) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const passed = percentage >= 90;

    if (passed) {
      const alreadyPassed = progress.subjectProgress?.[subject.id]?.challengePassed || false;
      if (!alreadyPassed) {
        markChallengeAsPassed(subject.id);
      }
    }

    return (
      <ChallengeResult
        subject={subject}
        results={results}
        percentage={percentage}
        passed={passed}
        onRetry={handleRetry}
        onBack={() => navigateToSubject(subject.id)}
      />
    );
  }

  const currentActivity = activities[currentIndex];
  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <button className="btn btn-link" onClick={() => navigateToSubject(subject.id)}>
          ← Back to Subject
        </button>
        <span className="badge bg-warning text-dark">Challenge Test</span>
        <span className="badge bg-info">Question {currentIndex+1}/{activities.length}</span>
      </div>
      <h4>{subject.title} – Challenge</h4>
      <hr />
      {error && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          <strong>Error:</strong> {error}
          <button type="button" className="btn-close" onClick={dismissError}></button>
        </div>
      )}
      <ActivityRenderer
         key={currentActivity.id}
  activity={currentActivity}
  onComplete={handleActivityComplete}
  onError={handleError}
      />
    </div>
  );
};

export default ChallengePlayer;