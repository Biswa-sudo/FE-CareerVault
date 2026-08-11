import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure Bootstrap is installed and imported

const WelcomeBentureAI = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const courseSteps = [
    {
      id: 1,
      icon: "📚",
      title: "Master the Basics",
      description: "Start with essential vocabulary and grammar designed for daily use."
    },
    {
      id: 2,
      icon: "🎙️",
      title: "Practice Speaking",
      description: "Use our AI voice tools to perfect your pronunciation and accent."
    },
    {
      id: 3,
      icon: "🤝",
      title: "Real-World Scenarios",
      description: "Engage in practical roleplays like job interviews and shopping."
    },
    {
      id: 4,
      icon: "🏆",
      title: "Track & Graduate",
      description: "Monitor your fluency score and earn your BentureAI certificate."
    }
  ];

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' }
  ];

  return (
    <div className="min-vh-100 bg-light d-flex flex-column align-items-center justify-content-center p-3 font-sans">
      <div className="card shadow-lg border-0 rounded-4 w-100" style={{ maxWidth: '800px' }}>
        <div className="card-body p-4 p-md-5">
          
          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="text-primary fw-bold mb-2">BentureAI</h1>
            <h2 className="fs-3 fw-semibold text-dark">Welcome to Spoken English</h2>
            <p className="text-muted mt-2">Your journey to fluent and confident English starts here.</p>
          </div>

          {/* How It Works Section */}
          <div className="mb-5">
            <h3 className="fs-5 fw-semibold text-secondary mb-4 border-bottom pb-2">How You Will Learn</h3>
            <div className="row g-4">
              {courseSteps.map((step) => (
                <div key={step.id} className="col-12 col-md-6">
                  <div className="d-flex align-items-start bg-primary bg-opacity-10 p-3 rounded-3 border border-primary border-opacity-25 h-100">
                    <div className="fs-2 me-3">{step.icon}</div>
                    <div>
                      <h4 className="fs-6 fw-bold text-dark mb-1">{step.title}</h4>
                      <p className="small text-muted mb-0">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Selection Section */}
          <div className="mb-5">
            <h3 className="fs-5 fw-semibold text-secondary mb-3 border-bottom pb-2">Choose Your Learning Language</h3>
            <p className="small text-muted mb-4">Which language do you want us to use to explain English concepts?</p>
            
            <div className="d-flex flex-column flex-sm-row gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setSelectedLanguage(lang.code)}
                  className={`btn flex-fill py-3 rounded-3 border-2 ${
                    selectedLanguage === lang.code
                      ? 'btn-primary shadow'
                      : 'btn-outline-secondary bg-white text-dark'
                  }`}
                  style={{ transition: 'all 0.2s ease-in-out' }}
                >
                  <div className="fw-bold fs-5 mb-1">{lang.native}</div>
                  <div className="small">{lang.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <button
            disabled={!selectedLanguage}
            className={`btn w-100 py-3 rounded-3 fs-5 fw-bold ${
              selectedLanguage ? 'btn-primary shadow-sm' : 'btn-secondary text-white opacity-50'
            }`}
            style={{ transition: 'all 0.3s' }}
          >
            {selectedLanguage ? "Start My Journey" : "Please Select a Language"}
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default WelcomeBentureAI;