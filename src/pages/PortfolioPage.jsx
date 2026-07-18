import React, { useState } from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: 'Biswaranjan Pradhan',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 4+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud architecture.',
    location: 'Odisha, India',
    email: 'biswa@email.com',
    phone: '+91 98765 43210',
    linkedin: 'linkedin.com/in/biswaranjan',
    github: 'github.com/biswaranjan',
    website: 'biswaranjan.dev',
    skills: ['React.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
    experience: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        role: 'Senior Full Stack Developer',
        period: '2022 - Present',
        description: 'Led development of 5+ enterprise applications. Mentored junior developers.'
      },
      {
        id: 2,
        company: 'Startup Hub',
        role: 'Software Engineer',
        period: '2020 - 2022',
        description: 'Built and maintained microservices architecture. Improved system performance by 40%.'
      }
    ],
    education: [
      {
        id: 1,
        institution: 'Odisha University of Technology',
        degree: 'B.Tech in Computer Science',
        year: '2020'
      }
    ]
  });

  const [cvs] = useState([
    {
      id: 1,
      title: 'Full Stack Developer CV',
      modified: 'Jul 18, 2026',
      isPrimary: true,
      role: 'Full Stack Developer'
    },
    {
      id: 2,
      title: 'Frontend Engineer CV',
      modified: 'Jul 10, 2026',
      isPrimary: false,
      role: 'Frontend Engineer'
    }
  ]);

  const [documents] = useState([
    { id: 1, name: 'Resume - Full Stack.pdf', type: 'Resume', uploaded: 'Jul 18, 2026' },
    { id: 2, name: 'Cover Letter - Google.pdf', type: 'Cover Letter', uploaded: 'Jul 15, 2026' },
    { id: 3, name: 'Certification - AWS.pdf', type: 'Certificate', uploaded: 'Jul 10, 2026' }
  ]);

  const [shareLink] = useState('benture.ai/profile/biswaranjan-pradhan');
  const [showShareModal, setShowShareModal] = useState(false);

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert('✅ Profile updated successfully!');
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(`https://${shareLink}`).then(() => {
      alert('📋 Link copied to clipboard!');
    }).catch(() => {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = `https://${shareLink}`;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      alert('📋 Link copied to clipboard!');
    });
  };

  const handleSetPrimary = (cvId) => {
    alert(`✅ CV set as primary!`);
  };

  const handleDeleteCV = (cvId) => {
    if (window.confirm('Are you sure you want to delete this CV?')) {
      alert('🗑️ CV deleted!');
    }
  };

  return (
    <div className="portfolio-page">
      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">📋 Portfolio</h1>
            <p className="page-subtitle">Your public professional profile. Share it with recruiters.</p>
          </div>
          <div className="header-right">
            <button className="btn btn-primary" onClick={() => setShowShareModal(true)}>
              🔗 Share Profile
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👁️</div>
            <div className="stat-info">
              <span className="stat-value">247</span>
              <span className="stat-label">Profile Views</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📄</div>
            <div className="stat-info">
              <span className="stat-value">{cvs.length}</span>
              <span className="stat-label">CVs Available</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📁</div>
            <div className="stat-info">
              <span className="stat-value">{documents.length}</span>
              <span className="stat-label">Documents</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔗</div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Shares</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button 
            className={`tab-btn ${activeTab === 'cvs' ? 'active' : ''}`}
            onClick={() => setActiveTab('cvs')}
          >
            📄 My CVs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'documents' ? 'active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            📁 Documents
          </button>
        </div>

        {/* ===== TAB: PROFILE ===== */}
        {activeTab === 'profile' && (
          <div className="tab-content">
            <div className="profile-container">
              {/* Public Profile Preview */}
              <div className="public-preview">
                <div className="preview-header">
                  <div className="preview-avatar">
                    {userData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="preview-info">
                    <h2>{userData.name}</h2>
                    <p className="preview-title">{userData.title}</p>
                    <p className="preview-location">📍 {userData.location}</p>
                  </div>
                  <div className="preview-actions">
                    <button className="btn btn-primary btn-small" onClick={handleCopyLink}>
                      🔗 Share
                    </button>
                    <button className="btn btn-outline btn-small" onClick={() => setIsEditing(true)}>
                      ✏️ Edit
                    </button>
                  </div>
                </div>

                <div className="preview-body">
                  <div className="preview-section">
                    <h4>About</h4>
                    <p>{userData.bio}</p>
                  </div>

                  <div className="preview-section">
                    <h4>Skills</h4>
                    <div className="preview-skills">
                      {userData.skills.map((skill, i) => (
                        <span key={i} className="skill-badge">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="preview-section">
                    <h4>Experience</h4>
                    {userData.experience.map(exp => (
                      <div key={exp.id} className="preview-exp-item">
                        <div className="exp-header">
                          <span className="exp-role">{exp.role}</span>
                          <span className="exp-company">{exp.company}</span>
                          <span className="exp-period">{exp.period}</span>
                        </div>
                        <p className="exp-description">{exp.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="preview-section">
                    <h4>Education</h4>
                    {userData.education.map(edu => (
                      <div key={edu.id} className="preview-edu-item">
                        <span className="edu-degree">{edu.degree}</span>
                        <span className="edu-institution">{edu.institution}</span>
                        <span className="edu-year">{edu.year}</span>
                      </div>
                    ))}
                  </div>

                  <div className="preview-section">
                    <h4>Connect</h4>
                    <div className="preview-links">
                      <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer">
                        🔗 LinkedIn
                      </a>
                      <a href={`https://${userData.github}`} target="_blank" rel="noopener noreferrer">
                        🔗 GitHub
                      </a>
                      <a href={`mailto:${userData.email}`}>
                        📧 Email
                      </a>
                    </div>
                  </div>
                </div>

                <div className="preview-footer">
                  <span>🔒 This is your public profile. Share the link with recruiters.</span>
                  <span className="preview-link">{shareLink}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: CVs ===== */}
        {activeTab === 'cvs' && (
          <div className="tab-content">
            <div className="cvs-container">
              <div className="cvs-header">
                <h3>📄 Your CVs</h3>
                <p>Manage your CVs. The primary CV will appear on your public profile.</p>
              </div>

              <div className="cvs-list">
                {cvs.map(cv => (
                  <div key={cv.id} className={`cv-item ${cv.isPrimary ? 'primary' : ''}`}>
                    <div className="cv-info">
                      <div className="cv-title">
                        {cv.title}
                        {cv.isPrimary && <span className="primary-badge">⭐ Primary</span>}
                      </div>
                      <div className="cv-meta">
                        <span>📌 {cv.role}</span>
                        <span>🕐 Modified {cv.modified}</span>
                      </div>
                    </div>
                    <div className="cv-actions">
                      {!cv.isPrimary && (
                        <button 
                          className="btn btn-outline btn-small"
                          onClick={() => handleSetPrimary(cv.id)}
                        >
                          Set as Primary
                        </button>
                      )}
                      <button className="btn btn-outline btn-small">View</button>
                      <button className="btn btn-outline btn-small">Download</button>
                      <button 
                        className="btn btn-outline btn-small danger"
                        onClick={() => handleDeleteCV(cv.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cvs-empty-cta">
                <p>Need a new CV?</p>
                <button className="btn btn-primary">+ Create New CV</button>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: DOCUMENTS ===== */}
        {activeTab === 'documents' && (
          <div className="tab-content">
            <div className="documents-container">
              <div className="documents-header">
                <h3>📁 Your Documents</h3>
                <p>Upload and manage your career documents.</p>
                <button className="btn btn-primary btn-small">+ Upload Document</button>
              </div>

              <div className="documents-grid">
                {documents.map(doc => (
                  <div key={doc.id} className="document-card">
                    <div className="document-icon">📄</div>
                    <div className="document-info">
                      <span className="document-name">{doc.name}</span>
                      <span className="document-type">{doc.type}</span>
                      <span className="document-date">Uploaded {doc.uploaded}</span>
                    </div>
                    <div className="document-actions">
                      <button className="btn btn-outline btn-small">📥 Download</button>
                      <button className="btn btn-outline btn-small danger">🗑️</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="documents-empty-cta">
                <p>Upload your certificates, cover letters, and other career documents.</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== SHARE MODAL ===== */}
      {showShareModal && (
        <div className="modal-overlay" onClick={() => setShowShareModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>🔗 Share Your Profile</h2>
            <p>Share your public portfolio with recruiters and employers.</p>
            
            <div className="share-link-container">
              <div className="share-link-display">
                <span>https://{shareLink}</span>
              </div>
              <button className="btn btn-primary" onClick={handleCopyLink}>
                📋 Copy Link
              </button>
            </div>

            <div className="share-options">
              <p>Or share via:</p>
              <div className="share-buttons">
                <button className="share-btn linkedin">in LinkedIn</button>
                <button className="share-btn whatsapp">📱 WhatsApp</button>
                <button className="share-btn twitter">🐦 Twitter</button>
                <button className="share-btn email">📧 Email</button>
              </div>
            </div>

            <div className="share-visibility">
              <span>👁️ Your profile is public. Anyone with the link can view it.</span>
              <button className="btn btn-outline btn-small">Change Visibility</button>
            </div>

            <button className="btn btn-outline" onClick={() => setShowShareModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ===== EDIT PROFILE MODAL ===== */}
      {isEditing && (
        <div className="modal-overlay" onClick={() => setIsEditing(false)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <h2>✏️ Edit Profile</h2>
            <form className="modal-form" onSubmit={(e) => { e.preventDefault(); handleSaveProfile(); }}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" value={userData.name} onChange={(e) => setUserData({...userData, name: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" value={userData.title} onChange={(e) => setUserData({...userData, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea value={userData.bio} onChange={(e) => setUserData({...userData, bio: e.target.value})} rows="3" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value={userData.location} onChange={(e) => setUserData({...userData, location: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" value={userData.email} onChange={(e) => setUserData({...userData, email: e.target.value})} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>LinkedIn</label>
                  <input type="text" value={userData.linkedin} onChange={(e) => setUserData({...userData, linkedin: e.target.value})} />
                </div>
                <div className="form-group">
                  <label>GitHub</label>
                  <input type="text" value={userData.github} onChange={(e) => setUserData({...userData, github: e.target.value})} />
                </div>
              </div>
              <div className="form-group">
                <label>Skills (comma separated)</label>
                <input type="text" value={userData.skills.join(', ')} onChange={(e) => setUserData({...userData, skills: e.target.value.split(',').map(s => s.trim())})} />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  💾 Save Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;