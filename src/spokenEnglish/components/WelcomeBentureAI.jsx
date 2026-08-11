import React, { useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const languageMap = {
  en: 'english',
  hi: 'hindi',
  or: 'odia',
};

const WelcomeBentureAI = ({ selectedLanguage, onLanguageChange, onContinue }) => {
  const currentLanguage = useMemo(() => {
    if (selectedLanguage) return selectedLanguage;
    return 'en';
  }, [selectedLanguage]);

  const courseSteps = [
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
    <div className="container-fluid bg-white p-4 p-md-5 rounded-4 shadow-sm border">
      
      {/* Header Section */}
      <div className="mb-3 pb-3 border-bottom">
        {/* <h1 className="text-primary fw-bold mb-2">BentureAI</h1> */}
        <h2 className="fs-3 fw-semibold text-dark">Welcome to AI Powered Spoken English</h2>
        <p className="text-muted mt-2">Your journey to fluent and confident English starts here.</p>
      </div>

      {/* How It Works Section (Now 3 columns in a single row) */}
      <div className="mb-3">
        <h3 className="fs-5 fw-semibold text-secondary mb-4">How You Will Learn</h3>
        <div className="row g-4">
          {courseSteps.map((step) => (
            <div key={step.id} className="col-12 col-md-4">
              <div className="d-flex align-items-start bg-primary bg-opacity-10 p-4 rounded-3 border border-primary border-opacity-25 h-100">
                <div className="fs-2 me-3">{step.icon}</div>
                <div>
                  <h4 className="fs-5 fw-bold text-dark mb-2">{step.title}</h4>
                  <p className="small text-muted mb-0">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Language Selection Section */}
      <div className="mb-3 mt-3">
        <h3 className="fs-5 fw-semibold text-secondary mb-3">Choose Your Learning Language</h3>
        {/* <p className="small text-muted mb-4">Which language do you want us to use to explain English concepts?</p> */}
        
        {/* Languages also aligned in a 3-column row to match the design width */}
        <div className="row g-3">
          {languages.map((lang) => (
            <div key={lang.code} className="col-12 col-md-4">
              <button
                onClick={() => onLanguageChange?.(languageMap[lang.code] || 'english')}
                className={`btn w-100 h-100 py-3 rounded-3 border-2 ${
                  currentLanguage === lang.code
                    ? 'btn-primary shadow-sm'
                    : 'btn-outline-secondary bg-white text-dark'
                }`}
                style={{ transition: 'all 0.2s ease-in-out' }}
              >
                <div className="fw-bold fs-4 mb-1">{lang.native}</div>
                <div className="small">{lang.name}</div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-end border-top pt-4 mt-4">
        <button
          disabled={!currentLanguage}
          className={`btn px-5 py-3 rounded-3 fs-6 fw-bold ${
            currentLanguage ? 'btn-primary shadow-sm' : 'btn-secondary text-white opacity-50'
          }`}
          onClick={onContinue}
          style={{ transition: 'all 0.3s' }}
        >
          {currentLanguage ? "Save & Continue" : "Please Select a Language"}
        </button>
      </div>
      
    </div>
  );
};

export default WelcomeBentureAI;