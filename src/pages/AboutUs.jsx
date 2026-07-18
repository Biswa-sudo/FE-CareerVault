import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Biswaranjan Pradhan',
      role: 'Founder & CEO',
      bio: 'Passionate about building technology that empowers people. 5+ years of experience in product development and AI.',
      avatar: 'BP',
      linkedin: '#'
    },
    {
      name: 'Dr. Ananya Mehta',
      role: 'Head of Strategy',
      bio: 'Former Head of Strategy at BYJU\'S. Expert in EdTech market dynamics and product-market fit.',
      avatar: 'AM',
      linkedin: '#'
    },
    {
      name: 'Rajesh Khanna',
      role: 'CTO',
      bio: 'Former CTO at Unacademy. Scaled platform from 2M to 50M users. AI and cloud architecture expert.',
      avatar: 'RK',
      linkedin: '#'
    },
    {
      name: 'Priya Nair',
      role: 'Head of Finance',
      bio: 'Former Investment Director at leading VC. Led 12 EdTech investments totaling $200M+.',
      avatar: 'PN',
      linkedin: '#'
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Growth',
      bio: 'Former VP Marketing at Internshala. Scaled user base from 500K to 15M. Growth marketing expert.',
      avatar: 'VS',
      linkedin: '#'
    },
    {
      name: 'Sanjay Menon',
      role: 'Head of People',
      bio: 'Former CHRO at unicorn EdTech. Scaled team from 50 to 2,000+ . Expert in culture building.',
      avatar: 'SM',
      linkedin: '#'
    }
  ];

  const milestones = [
    { year: '2026', event: 'Company Founded', description: 'Benture AI incorporated in Odisha, India' },
    { year: '2026', event: 'MVP Launch', description: 'Career Intelligence Platform launched with 5,000+ users' },
    { year: '2027', event: 'Product Expansion', description: 'AI Interview, Spoken English, and Skill Analysis modules' },
    { year: '2027', event: 'Market Leadership', description: '500,000+ users across India' },
    { year: '2028', event: 'International Expansion', description: 'Entering Southeast Asian markets' }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We constantly explore new ways to solve meaningful problems using technology.'
    },
    {
      icon: '🌍',
      title: 'Accessibility',
      description: 'Every individual deserves access to affordable, high-quality learning and career tools.'
    },
    {
      icon: '🔒',
      title: 'Privacy',
      description: 'User data belongs to the user. We are committed to secure and responsible AI practices.'
    },
    {
      icon: '📚',
      title: 'Lifelong Learning',
      description: 'Learning does not stop after graduation. We support continuous development.'
    },
    {
      icon: '❤️',
      title: 'Social Impact',
      description: 'Our success is measured by the lives we help transform, not just revenue.'
    }
  ];

  return (
    <div className="about-us">
      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <span className="about-badge">🇮🇳 Built in India</span>
            <h1 className="about-title">
              Building the Future of
              <span className="highlight"> Human Growth with AI</span>
            </h1>
            <p className="about-subtitle">
              Benture AI is an Artificial Intelligence company committed to transforming the way 
              people learn, grow, prepare for careers, and succeed throughout their professional lives.
            </p>
            <div className="about-hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">5,000+</span>
                <span className="hero-stat-label">Users</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">7</span>
                <span className="hero-stat-label">AI Modules</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">15+</span>
                <span className="hero-stat-label">Team Members</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">2026</span>
                <span className="hero-stat-label">Founded</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h2>Our Vision</h2>
              <p>
                To become the world's most trusted AI-powered Human Growth Platform, enabling 
                every individual to learn, develop, achieve meaningful careers, and continuously 
                improve throughout their lifetime.
              </p>
            </div>
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h2>Our Mission</h2>
              <p>
                To make high-quality education, career guidance, interview preparation, AI literacy, 
                and professional development accessible, affordable, and personalized for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE PROBLEM ===== */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-content">
            <div className="problem-text">
              <span className="section-badge">The Problem</span>
              <h2>Today's Career Journey is Broken</h2>
              <p>
                Students use one platform for studying. Another for coding. Another for resumes. 
                Another for interviews. Another for learning English. Another for finding jobs.
              </p>
              <p>
                <strong>The result is a disconnected, inefficient, and frustrating experience.</strong>
              </p>
              <div className="problem-stats">
                <div className="problem-stat">
                  <span className="problem-stat-value">75%</span>
                  <span className="problem-stat-label">of resumes never reach a human</span>
                </div>
                <div className="problem-stat">
                  <span className="problem-stat-value">90%</span>
                  <span className="problem-stat-label">of candidates feel unprepared</span>
                </div>
                <div className="problem-stat">
                  <span className="problem-stat-value">72%</span>
                  <span className="problem-stat-label">don't know what to learn next</span>
                </div>
              </div>
            </div>
            <div className="problem-visual">
              <div className="fragmentation-diagram">
                <div className="frag-item">📚 Learning</div>
                <div className="frag-arrow">→</div>
                <div className="frag-item">💻 Coding</div>
                <div className="frag-arrow">→</div>
                <div className="frag-item">📄 Resume</div>
                <div className="frag-arrow">→</div>
                <div className="frag-item">🎯 Interview</div>
                <div className="frag-arrow">→</div>
                <div className="frag-item">💼 Job</div>
                <div className="frag-arrow">→</div>
                <div className="frag-item broken">❌ Disconnected</div>
              </div>
              <div className="solution-banner">
                <span>💡 One Platform. Complete Career Growth.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR SOLUTION ===== */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-header">
            <span className="section-badge">Our Solution</span>
            <h2>An AI-Powered Ecosystem</h2>
            <p>Seven powerful AI modules that work together. No fragmentation. No confusion.</p>
          </div>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon">📝</div>
              <h3>Career Intelligence</h3>
              <p>AI-powered resume creation, ATS optimization, and career profile management</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🎯</div>
              <h3>AI Interview Platform</h3>
              <p>Personalized interview practice with AI evaluation and real-time feedback</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🗣️</div>
              <h3>Spoken English</h3>
              <p>AI communication coaching for pronunciation, grammar, and fluency</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🧠</div>
              <h3>Personalized AI Learning</h3>
              <p>Adaptive learning paths based on skill assessment and career goals</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">📚</div>
              <h3>AI Tutor</h3>
              <p>AI-powered academic support starting with the Odisha curriculum</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">🤝</div>
              <h3>Recruiter Marketplace</h3>
              <p>AI-powered talent discovery and candidate matching for recruiters</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon">👥</div>
              <h3>Social Study Groups</h3>
              <p>Peer accountability, live study rooms, and group competitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us</h2>
            <p>These principles guide every decision we make and every product we build.</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <span className="section-badge">Our Team</span>
            <h2>Meet the People Behind Benture AI</h2>
            <p>Passionate innovators building the future of human growth with AI.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-avatar">{member.avatar}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <a href={member.linkedin} className="team-linkedin">🔗 LinkedIn</a>
              </div>
            ))}
          </div>

          <div className="team-join">
            <p>Want to join our mission?</p>
            <a href="/careers" className="btn btn-primary">View Open Positions →</a>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="timeline-section">
        <div className="container">
          <div className="timeline-header">
            <span className="section-badge">Our Journey</span>
            <h2>Milestones That Define Us</h2>
          </div>

          <div className="timeline">
            {milestones.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.event}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY BENTURE AI ===== */}
      <section className="why-section">
        <div className="container">
          <div className="why-header">
            <span className="section-badge">Why Benture AI</span>
            <h2>Built for Bharat. Powered by AI.</h2>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🧩</div>
              <h3>Integrated Ecosystem</h3>
              <p>Only platform covering the complete learning-to-employment journey</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🇮🇳</div>
              <h3>Bharat-First</h3>
              <p>Built for Tier 2/3 India, not just metros. Local language support.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤖</div>
              <h3>AI-Native</h3>
              <p>Built for AI from the ground up, not legacy with AI add-ons</p>
            </div>
            <div className="why-card">
              <div className="why-icon">📊</div>
              <h3>Data Moat</h3>
              <p>Proprietary interview response and skill data that compounds over time</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Government Alignment</h3>
              <p>Aligned with Odisha curriculum, Skill India, and Digital India initiatives</p>
            </div>
            <div className="why-card">
              <div className="why-icon">❤️</div>
              <h3>Social Impact</h3>
              <p>Improving employability for millions of Indians</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container">
          <h2>Ready to Build Your Future?</h2>
          <p>Join 5,000+ professionals and students growing their careers with Benture AI.</p>
          <div className="about-cta-actions">
            <a href="/signup" className="btn btn-primary btn-large">🚀 Get Started — It's Free</a>
            <a href="/contact" className="btn btn-outline btn-light btn-large">📧 Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;