import React from 'react';
import './LandingPageFinal.css';

const LandingPageFinal = () => {
  return (
    <div className="landing-page">
      {/* ===== HEADER ===== */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">Benture AI</span>
          </div>
          <nav className="nav">
            <a href="/about-us">About Us</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/account-settings">Account Settings</a>
          </nav>
          <div className="header-actions">
            <a href="/login" className="btn btn-outline">Login</a>
            <a href="/signup" className="btn btn-primary">Get Started</a>
          </div>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">🚀 India's #1 Career Growth Platform</div>
            <h1 className="hero-title">
              Your AI Career Mentor
              <span className="highlight"> From Classroom to Career</span>
            </h1>
            <p className="hero-subtitle">
              Build ATS-friendly resumes, practice AI interviews, improve spoken English,
              learn job-ready skills, and get discovered by recruiters. <strong>Built for Bharat.</strong>
            </p>
            <div className="hero-actions">
              <a href="/signup" className="btn btn-primary btn-large">
                🚀 Get Started — It's Free
              </a>
              <a href="#demo" className="btn btn-outline btn-large">
                🎥 Watch Demo
              </a>
            </div>
            <div className="hero-trust">
              <span>⭐ 5,000+ Users</span>
              <span>🏆 DPIIT Recognized</span>
              <span>🇮🇳 Built in India</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-dashboard">
              <div className="dashboard-card">
                <div className="card-header">📝 Resume Builder</div>
                <div className="card-body">AI-powered • ATS optimized</div>
              </div>
              <div className="dashboard-card">
                <div className="card-header">🎯 Interview Coach</div>
                <div className="card-body">Realistic • Instant feedback</div>
              </div>
              <div className="dashboard-card">
                <div className="card-header">🗣️ Spoken English</div>
                <div className="card-body">Pronunciation • Grammar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="problem">
        <div className="container">
          <h2 className="section-title">The Career Journey is Broken.</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">📄</div>
              <h3>ATS Rejection</h3>
              <p>75% of resumes never reach a human. Your resume gets rejected by bots.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">😰</div>
              <h3>Interview Anxiety</h3>
              <p>90% of candidates feel unprepared. No one to practice with.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">❓</div>
              <h3>Skill Confusion</h3>
              <p>72% of professionals don't know what to learn next. Wasting time.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">👤</div>
              <h3>No Visibility</h3>
              <p>Recruiters never see the real you behind the resume.</p>
            </div>
          </div>
          <p className="problem-closing">Benture AI fixes all of this. <strong>One platform. Complete career growth.</strong></p>
        </div>
      </section>

      {/* ===== ECOSYSTEM ===== */}
      <section className="ecosystem" id="features">
        <div className="container">
          <h2 className="section-title">Everything You Need. One Ecosystem.</h2>
          <p className="section-subtitle">Seven powerful AI tools that work together. No fragmentation. No confusion.</p>
          <div className="ecosystem-grid">
            <div className="ecosystem-card">
              <div className="ecosystem-icon">📝</div>
              <h3>Resume Builder</h3>
              <p>AI-powered creation, ATS optimization, multiple templates, PDF export.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🎯</div>
              <h3>AI Interview Coach</h3>
              <p>Mock interviews with HR + technical questions. Get feedback & scoring.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🗣️</div>
              <h3>Spoken English</h3>
              <p>AI conversation partner, pronunciation analysis, grammar corrections.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🧠</div>
              <h3>Personalized Learning</h3>
              <p>Analyze resume, detect gaps, recommend learning paths & practice.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">📚</div>
              <h3>AI Tutor</h3>
              <p>Academic support for Odisha curriculum (expanding to all boards).</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">🤝</div>
              <h3>Recruiter Marketplace</h3>
              <p>Video profiles, AI matching, direct recruiter connections.</p>
            </div>
            <div className="ecosystem-card">
              <div className="ecosystem-icon">👥</div>
              <h3>Social Study Groups</h3>
              <p>Peer accountability, live study rooms, group competitions.</p>
            </div>
          </div>
          <div className="ecosystem-flow">
            <span>🔄 All Modules Work Together</span>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL LEARNING ===== */}
      <section className="social-learning">
        <div className="container">
          <h2 className="section-title">Study Together. Grow Together.</h2>
          <p className="section-subtitle">
            Join thousands of learners in live study groups. Compete on leaderboards.
            Hold each other accountable.
          </p>
          <div className="social-grid">
            <div className="social-card">
              <div className="social-icon">📚</div>
              <h3>Live Study Rooms</h3>
              <p>Join public or private study groups. Study with real people.</p>
            </div>
            <div className="social-card">
              <div className="social-icon">🏆</div>
              <h3>Compete & Win</h3>
              <p>Global leaderboards, streaks, daily challenges, badges.</p>
            </div>
            <div className="social-card">
              <div className="social-icon">👥</div>
              <h3>Peer Interviews</h3>
              <p>Practice mock interviews with peers. Give & receive honest feedback.</p>
            </div>
          </div>
          <div className="social-cta">
            <p>Students who study in groups are 3x more likely to stay consistent.</p>
            <a href="/study-groups" className="btn btn-primary">Join a Study Group →</a>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">4 Steps to Your Dream Career</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">📝</div>
              <h3>Create Your Resume</h3>
              <p>Upload or build from scratch. AI optimizes for ATS.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">🎯</div>
              <h3>Practice Interviews</h3>
              <p>AI interviewer asks realistic questions. Get instant feedback.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">📚</div>
              <h3>Learn What Matters</h3>
              <p>AI identifies skill gaps. Personalized learning path.</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-icon">🤝</div>
              <h3>Get Discovered</h3>
              <p>Recruiters find you through video profiles. Land your dream job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="comparison">
        <div className="container">
          <h2 className="section-title">Built for Bharat. Powered by AI.</h2>
          <p className="section-subtitle">See how we compare to the competition.</p>
          <div className="table-responsive">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>🔵 Benture AI</th>
                  <th>Naukri</th>
                  <th>BYJU'S</th>
                  <th>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>AI Resume Builder</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>AI Interview Practice</td><td>✅</td><td>✅</td><td>❌</td><td>❌</td></tr>
                <tr><td>Spoken English Training</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>Skill Gap Analysis</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>Video Profiles</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>Recruiter Discovery</td><td>✅</td><td>✅</td><td>❌</td><td>✅</td></tr>
                <tr><td>AI Tutor (Curriculum)</td><td>✅</td><td>❌</td><td>✅</td><td>❌</td></tr>
                <tr><td>Social Study Groups</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>Integrated Ecosystem</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
                <tr><td>Bharat-Focused Pricing</td><td>✅</td><td>❌</td><td>❌</td><td>❌</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Real Stories. Real Impact.</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Benture AI helped me land my dream job at Google. The AI interview coach was incredibly realistic!"</p>
              <div className="testimonial-author">
                <strong>Sarah Johnson</strong>
                <span>Software Engineer</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"I switched from finance to tech in 3 months. The skill gap analysis showed me exactly what to learn."</p>
              <div className="testimonial-author">
                <strong>Michael Chen</strong>
                <span>Career Switcher</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"As a recruiter, I love the video profiles. I can see the real candidate before scheduling interviews."</p>
              <div className="testimonial-author">
                <strong>Priya Patel</strong>
                <span>HR Manager</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The study groups kept me motivated. I finally passed my exams with distinction."</p>
              <div className="testimonial-author">
                <strong>Amit Kumar</strong>
                <span>Student, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="pricing" id="pricing">
        <div className="container">
          <h2 className="section-title">Plans for Every Career Stage</h2>
          <p className="section-subtitle">Start free. Upgrade when you need more.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-name">Free</div>
              <div className="pricing-price">₹0</div>
              <div className="pricing-period">forever</div>
              <ul className="pricing-features">
                <li>1 Resume</li>
                <li>3 AI Interviews/mo</li>
                <li>Resume Analysis</li>
                <li>Study Groups</li>
              </ul>
              <a href="/signup" className="btn btn-outline">Get Started</a>
            </div>
            <div className="pricing-card popular">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-name">Starter</div>
              <div className="pricing-price">₹99</div>
              <div className="pricing-period">/month</div>
              <ul className="pricing-features">
                <li>5 Resumes</li>
                <li>15 AI Interviews/mo</li>
                <li>ATS Optimization</li>
                <li>Spoken English</li>
                <li>Skill Gap Analysis</li>
                <li>Study Groups</li>
              </ul>
              <a href="/subscribe" className="btn btn-primary">Subscribe Now</a>
              <div className="pricing-annual">or ₹999/year (save 16%)</div>
            </div>
            <div className="pricing-card">
              <div className="pricing-name">Pro</div>
              <div className="pricing-price">₹249</div>
              <div className="pricing-period">/month</div>
              <ul className="pricing-features">
                <li>10 Resumes</li>
                <li>50 AI Interviews/mo</li>
                <li>Video Profiles</li>
                <li>Recruiter Discovery</li>
                <li>All Starter Features</li>
              </ul>
              <a href="/subscribe" className="btn btn-primary">Subscribe Now</a>
              <div className="pricing-annual">or ₹2,499/year (save 16%)</div>
            </div>
            <div className="pricing-card">
              <div className="pricing-name">Premium</div>
              <div className="pricing-price">₹499</div>
              <div className="pricing-period">/month</div>
              <ul className="pricing-features">
                <li>Unlimited Resumes</li>
                <li>Unlimited Interviews</li>
                <li>1-on-1 AI Coaching</li>
                <li>All Pro Features</li>
              </ul>
              <a href="/subscribe" className="btn btn-primary">Subscribe Now</a>
              <div className="pricing-annual">or ₹4,999/year (save 16%)</div>
            </div>
          </div>
          <p className="pricing-note">Upgrade anytime. Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How many resumes can I create?</h3>
              <p>Up to 10 resumes with Pro plan. Unlimited with Premium.</p>
            </div>
            <div className="faq-item">
              <h3>Can I download PDF resumes?</h3>
              <p>Yes! All resumes can be exported as professional PDFs.</p>
            </div>
            <div className="faq-item">
              <h3>Is ATS optimization included?</h3>
              <p>Absolutely. All resumes are automatically optimized for ATS systems.</p>
            </div>
            <div className="faq-item">
              <h3>Will recruiters contact me?</h3>
              <p>Yes, when you opt-in to recruiter discovery, recruiters can reach out.</p>
            </div>
            <div className="faq-item">
              <h3>Is AI Interview available?</h3>
              <p>Yes! Practice with our AI interviewer anytime, anywhere.</p>
            </div>
            <div className="faq-item">
              <h3>What is the Social Study Group?</h3>
              <p>Live study rooms with peers. Compete on leaderboards. Hold each other accountable.</p>
            </div>
            <div className="faq-item">
              <h3>Can I use this on mobile?</h3>
              <p>Yes! Fully responsive mobile-first design.</p>
            </div>
            <div className="faq-item">
              <h3>What if I don't like it?</h3>
              <p>Cancel anytime. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="final-cta">
        <div className="container">
          <h2>Ready to Build Your Future?</h2>
          <p>
            Join 5,000+ professionals and students who are growing their careers with Benture AI.
          </p>
          <div className="cta-actions">
            <a href="/signup" className="btn btn-primary btn-large">🚀 Get Started — It's Free</a>
            <a href="#demo" className="btn btn-outline btn-light btn-large">🎥 Watch Demo</a>
          </div>
          <div className="cta-trust">
            <span>⭐ 5,000+ Users</span>
            <span>🏆 DPIIT Recognized</span>
            <span>🇮🇳 Built in India</span>
            <span>🔒 100% Secure</span>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">🚀</span>
                <span className="logo-text">Benture AI</span>
              </div>
              <p>Built in Odisha, India. 🇮🇳</p>
              <p className="footer-tagline">Your AI Career Mentor</p>
            </div>
            <div className="footer-links">
              <h4>Product</h4>
              <a href="#">Resume Builder</a>
              <a href="#">AI Interview</a>
              <a href="#">Spoken English</a>
              <a href="#">Study Groups</a>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-links">
              <h4>Support</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">FAQ</a>
              <a href="#">Help Center</a>
            </div>
            <div className="footer-social">
              <h4>Follow Us</h4>
              <div className="social-icons">
                <a href="#">📘</a>
                <a href="#">🐦</a>
                <a href="#">📸</a>
                <a href="#">▶️</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Benture AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageFinal;