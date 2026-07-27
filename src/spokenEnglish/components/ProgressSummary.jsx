import React from 'react';
import { useSpokenEnglish } from '../context';

const ProgressSummary = () => {
  const { 
    totalSubjects, 
    completedSubjects, 
    totalLessons, 
    completedLessons, 
    overallProgress 
  } = useSpokenEnglish();

  return (
    <div className="row g-3 mb-4">
      <div className="col-md-3">
        <div className="card bg-primary text-white">
          <div className="card-body text-center">
            <h5 className="card-title">Subjects</h5>
            <p className="display-6">{completedSubjects}/{totalSubjects}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card bg-success text-white">
          <div className="card-body text-center">
            <h5 className="card-title">Lessons</h5>
            <p className="display-6">{completedLessons}/{totalLessons}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card bg-info text-white">
          <div className="card-body text-center">
            <h5 className="card-title">Overall Progress</h5>
            <div className="display-6">{overallProgress}%</div>
            <div className="progress" style={{ height: '10px' }}>
              <div className="progress-bar bg-light" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSummary;