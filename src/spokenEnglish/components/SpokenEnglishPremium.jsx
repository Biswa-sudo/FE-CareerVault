import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SpokenEnglishPremium.css';

const SpokenEnglishPremium = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBtn, setHoveredBtn] = useState(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="premium-container">
      <div className={`premium-card ${isVisible ? 'fade-in' : ''}`}>
        
        {/* Animated Background Elements */}
        <div className="bg-glow glow-1"></div>
        <div className="bg-glow glow-2"></div>
        <div className="bg-glow glow-3"></div>
        
        {/* Grid Pattern */}
        <div className="grid-pattern"></div>

        {/* Navigation */}
        {/* <nav className="nav-premium">
          <div className="nav-left">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" stroke="url(#logoGrad)" strokeWidth="2.5"/>
                <path d="M8 16L12 12L12 20L8 16Z" fill="#FFD700"/>
                <path d="M14 9Q20 16 14 23" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M18 6Q26 16 18 26" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
                    <stop offset="0%" stopColor="#F7971E"/>
                    <stop offset="100%" stopColor="#FFD700"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-bold">SPOKEN</span>
              <span className="logo-light">ENGLISH</span>
            </div>
          </div>

          <div className="nav-center">
            <a href="#" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Courses</a>
            <a href="#" className="nav-link">Features</a>
            <a href="#" className="nav-link">Pricing</a>
            <a href="#" className="nav-link">About</a>
          </div>

          <div className="nav-right">
            <button className="btn-login">Login</button>
            <button 
              className="btn-cta"
              onMouseEnter={() => setHoveredBtn('cta')}
              onMouseLeave={() => setHoveredBtn(null)}
            >
              <span>Get Started</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: hoveredBtn === 'cta' ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s' }}>
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </nav> */}

        {/* Hero Section */}
        <div className="hero-premium">
          <div className="hero-content">
            {/* <div className="badge-premium">
              <span className="badge-dot"></span>
              <span>LIVE CLASSES</span>
            </div> */}

            <h1 className="hero-title">
              Speak English
              <span className="title-light"> with </span>
              <span className="title-highlight"> Confidence</span>
            </h1>

            <div className="hero-divider"></div>

            <p className="hero-description">
              Master spoken English with our AI classes.
              <br />
              Build fluency and gain the confidence to communicate in any situation.
            </p>

            <div className="hero-actions">
              <button 
                className="btn-primary-hero"
                onMouseEnter={() => setHoveredBtn('start')}
                onMouseLeave={() => setHoveredBtn(null)}
                onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
              >
                <span>Enquire Now</span>
                {hoveredBtn === 'start' && (
                  <span className="btn-sparkle">✨</span>
                )}
              </button>
              <button className="btn-secondary-hero">
                Watch Demo
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 7L13 10L8 13V7Z" fill="currentColor"/>
                </svg>
              </button>
            </div>

            <div className="stats-premium">
              <div className="stat-item">
                <span className="stat-number">50K+</span>
                <span className="stat-label">ACTIVE LEARNERS</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <div className="stat-stars">★★★★★</div>
                <span className="stat-label">RATING</span>
              </div>
              {/* <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">200+</span>
                <span className="stat-label">EXPERT TUTORS</span>
              </div> */}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container">
              {/* Floating Elements */}
              <div className="float-element elem-1">
                <div className="float-content">
                  <span>🎯</span>
                  <span>Fluency</span>
                </div>
              </div>
              <div className="float-element elem-2">
                <div className="float-content">
                  <span>🗣️</span>
                  <span>Speaking</span>
                </div>
              </div>
              <div className="float-element elem-3">
                <div className="float-content">
                  <span>🎓</span>
                  <span>Expert</span>
                </div>
              </div>

              {/* Main Avatar */}
              <div className="avatar-premium">
                <div className="avatar-ring"></div>
                <div className="avatar-ring-inner"></div>
                <div className="avatar-glow"></div>
                
                <div className="avatar-head">
                  <div className="headphone-left"></div>
                  <div className="headphone-right"></div>
                  <div className="headband"></div>
                  <div className="avatar-face">
                    <div className="avatar-eyes">
                      <div className="eye">
                        <div className="pupil"></div>
                      </div>
                      <div className="eye">
                        <div className="pupil"></div>
                      </div>
                    </div>
                    <div className="avatar-smile"></div>
                  </div>
                </div>
                <div className="avatar-body">
                  <div className="body-collar"></div>
                </div>

                {/* Speech Bubbles */}
                <div className="speech-bubble bubble-1">
                  <span>Hello! 👋</span>
                </div>
                <div className="speech-bubble bubble-2">
                  <span>How are you?</span>
                </div>
                <div className="speech-bubble bubble-3">
                  <span>Great! 😊</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Bar */}
        {/* <div className="features-bar">
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M16 5L8 13L4 9" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Interactive Sessions</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7" r="3" stroke="#FFD700" strokeWidth="2"/>
                <path d="M3 17C3 13.6863 6.13401 11 10 11C13.866 11 17 13.6863 17 17" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Expert Tutors</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 14L9 17L15 9" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="10" r="8" stroke="#FFD700" strokeWidth="2"/>
              </svg>
            </div>
            <span>Pronunciation Practice</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="4" y="6" width="12" height="10" rx="2" stroke="#FFD700" strokeWidth="2"/>
                <path d="M8 6V4H12V6" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                <path d="M7 12L9 14L14 9" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span>Certification</span>
          </div>
        </div> */}

        {/* Live Indicator */}
        {/* <div className="live-indicator">
          <span className="live-pulse"></span>
          <span className="live-text">Live Now</span>
        </div> */}
      </div>
    </div>
  );
};

export default SpokenEnglishPremium;