import React, { useState } from 'react';
import './RecruiterMarketplace.css';

const RecruiterMarketplace = () => {
  const [activeTab, setActiveTab] = useState('candidates');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedExperience, setSelectedExperience] = useState('All Levels');
  const [showJobModal, setShowJobModal] = useState(false);

  // Mock candidate data
  const candidates = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Full Stack Developer',
      experience: '4 years',
      location: 'Bangalore',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      matchScore: 92,
      video: true,
      availability: 'Available',
      avatar: 'PS'
    },
    {
      id: 2,
      name: 'Amit Kumar',
      role: 'Frontend Engineer',
      experience: '3 years',
      location: 'Remote',
      skills: ['JavaScript', 'Vue.js', 'Tailwind', 'UI/UX'],
      matchScore: 85,
      video: true,
      availability: 'Interviewing',
      avatar: 'AK'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      role: 'Data Scientist',
      experience: '5 years',
      location: 'Hyderabad',
      skills: ['Python', 'ML', 'TensorFlow', 'SQL'],
      matchScore: 78,
      video: false,
      availability: 'Available',
      avatar: 'SP'
    },
    {
      id: 4,
      name: 'Rahul Verma',
      role: 'Backend Developer',
      experience: '6 years',
      location: 'Mumbai',
      skills: ['Java', 'Spring Boot', 'Microservices', 'Kafka'],
      matchScore: 89,
      video: true,
      availability: 'Available',
      avatar: 'RV'
    },
    {
      id: 5,
      name: 'Neha Singh',
      role: 'Product Manager',
      experience: '7 years',
      location: 'Delhi',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'Leadership'],
      matchScore: 82,
      video: true,
      availability: 'Open to offers',
      avatar: 'NS'
    },
    {
      id: 6,
      name: 'Vikram Reddy',
      role: 'DevOps Engineer',
      experience: '4 years',
      location: 'Chennai',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      matchScore: 90,
      video: false,
      availability: 'Available',
      avatar: 'VR'
    }
  ];

  // Mock jobs posted
  const postedJobs = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      applications: 45,
      matches: 12,
      posted: '2 days ago',
      status: 'Active'
    },
    {
      id: 2,
      title: 'Frontend Engineer (React)',
      applications: 32,
      matches: 8,
      posted: '1 week ago',
      status: 'Reviewing'
    },
    {
      id: 3,
      title: 'Data Analyst',
      applications: 28,
      matches: 6,
      posted: '3 days ago',
      status: 'Active'
    }
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          candidate.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          candidate.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRole = selectedRole === 'All Roles' || candidate.role.includes(selectedRole);
    const matchesExp = selectedExperience === 'All Levels' || candidate.experience.includes(selectedExperience);
    return matchesSearch && matchesRole && matchesExp;
  });

  const handleShortlist = (candidateId) => {
    alert(`✅ Candidate added to shortlist!`);
  };

  const handleMessage = (candidateId) => {
    alert(`💬 Message sent to candidate!`);
  };

  const handleScheduleInterview = (candidateId) => {
    alert(`📅 Interview scheduled with candidate!`);
  };

  return (
    <div className="recruiter-marketplace">
      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">🤝 Recruiter Marketplace</h1>
            <p className="page-subtitle">Discover top talent through AI-powered matching and video profiles</p>
          </div>
          <div className="header-right">
            <button className="btn btn-primary" onClick={() => setShowJobModal(true)}>
              + Post Job
            </button>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <span className="stat-value">2,847</span>
              <span className="stat-label">Active Candidates</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">156</span>
              <span className="stat-label">AI Matches Today</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📹</div>
            <div className="stat-info">
              <span className="stat-value">84</span>
              <span className="stat-label">Video Profiles</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <span className="stat-value">32</span>
              <span className="stat-label">Active Jobs</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'candidates' ? 'active' : ''}`}
            onClick={() => setActiveTab('candidates')}
          >
            🔍 Find Candidates
          </button>
          <button 
            className={`tab-btn ${activeTab === 'my-jobs' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-jobs')}
          >
            📋 My Jobs
          </button>
          <button 
            className={`tab-btn ${activeTab === 'shortlist' ? 'active' : ''}`}
            onClick={() => setActiveTab('shortlist')}
          >
            ⭐ Shortlist
          </button>
          <button 
            className={`tab-btn ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            📊 Analytics
          </button>
        </div>

        {/* ===== TAB: FIND CANDIDATES ===== */}
        {activeTab === 'candidates' && (
          <div className="tab-content">
            {/* Search & Filter */}
            <div className="search-filters">
              <div className="search-bar">
                <input 
                  type="text" 
                  placeholder="Search by name, role, or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-btn">🔍</button>
              </div>
              <div className="filter-group">
                <select 
                  className="filter-select"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  <option>All Roles</option>
                  <option>Full Stack Developer</option>
                  <option>Frontend Engineer</option>
                  <option>Backend Developer</option>
                  <option>Data Scientist</option>
                  <option>DevOps Engineer</option>
                  <option>Product Manager</option>
                </select>
                <select 
                  className="filter-select"
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                >
                  <option>All Levels</option>
                  <option>0-2 years</option>
                  <option>3-5 years</option>
                  <option>6-8 years</option>
                  <option>8+ years</option>
                </select>
                <button className="filter-btn">
                  ⚡ AI Smart Search
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="results-info">
              <span>Showing {filteredCandidates.length} candidates</span>
              <span className="ai-matched">🤖 AI-powered matching active</span>
            </div>

            {/* Candidate Cards */}
            <div className="candidates-grid">
              {filteredCandidates.map(candidate => (
                <div key={candidate.id} className="candidate-card">
                  <div className="candidate-header">
                    <div className="candidate-avatar-lg">{candidate.avatar}</div>
                    <div className="candidate-info">
                      <h3>{candidate.name}</h3>
                      <p className="candidate-role">{candidate.role}</p>
                      <div className="candidate-meta">
                        <span>📍 {candidate.location}</span>
                        <span>💼 {candidate.experience}</span>
                      </div>
                    </div>
                    <div className="candidate-match">
                      <span className="match-score">{candidate.matchScore}%</span>
                      <span className="match-label">Match</span>
                    </div>
                  </div>

                  <div className="candidate-skills">
                    {candidate.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="candidate-footer">
                    <div className="candidate-status">
                      {candidate.video && <span className="status-tag video">📹 Video</span>}
                      <span className={`status-tag ${candidate.availability === 'Available' ? 'available' : 'interviewing'}`}>
                        {candidate.availability}
                      </span>
                    </div>
                    <div className="candidate-actions">
                      <button 
                        className="btn btn-outline btn-small"
                        onClick={() => handleMessage(candidate.id)}
                      >
                        💬 Message
                      </button>
                      <button 
                        className="btn btn-primary btn-small"
                        onClick={() => handleShortlist(candidate.id)}
                      >
                        ⭐ Shortlist
                      </button>
                      <button 
                        className="btn btn-primary btn-small"
                        onClick={() => handleScheduleInterview(candidate.id)}
                      >
                        📅 Interview
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== TAB: MY JOBS ===== */}
        {activeTab === 'my-jobs' && (
          <div className="tab-content">
            <div className="jobs-container">
              <div className="jobs-header">
                <h3>📋 Posted Jobs</h3>
                <button className="btn btn-primary btn-small" onClick={() => setShowJobModal(true)}>
                  + Post New Job
                </button>
              </div>

              <div className="jobs-list">
                {postedJobs.map(job => (
                  <div key={job.id} className="job-card">
                    <div className="job-info">
                      <h4>{job.title}</h4>
                      <div className="job-meta">
                        <span>📝 {job.applications} applications</span>
                        <span>🎯 {job.matches} AI matches</span>
                        <span>🕐 Posted {job.posted}</span>
                      </div>
                    </div>
                    <div className="job-status">
                      <span className={`job-status-badge ${job.status.toLowerCase()}`}>
                        {job.status}
                      </span>
                      <div className="job-actions">
                        <button className="btn btn-outline btn-small">View</button>
                        <button className="btn btn-outline btn-small">Edit</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: SHORTLIST ===== */}
        {activeTab === 'shortlist' && (
          <div className="tab-content">
            <div className="empty-state">
              <div className="empty-icon">⭐</div>
              <h3>Your Shortlist is Empty</h3>
              <p>Start shortlisting candidates you're interested in. They'll appear here.</p>
              <button className="btn btn-primary" onClick={() => setActiveTab('candidates')}>
                Browse Candidates →
              </button>
            </div>
          </div>
        )}

        {/* ===== TAB: ANALYTICS ===== */}
        {activeTab === 'analytics' && (
          <div className="tab-content">
            <div className="analytics-grid">
              <div className="analytics-card">
                <div className="analytics-icon">👀</div>
                <div className="analytics-info">
                  <span className="analytics-value">1,247</span>
                  <span className="analytics-label">Profile Views (This Week)</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">📩</div>
                <div className="analytics-info">
                  <span className="analytics-value">89</span>
                  <span className="analytics-label">Messages Sent</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">📅</div>
                <div className="analytics-info">
                  <span className="analytics-value">24</span>
                  <span className="analytics-label">Interviews Scheduled</span>
                </div>
              </div>
              <div className="analytics-card">
                <div className="analytics-icon">🎯</div>
                <div className="analytics-info">
                  <span className="analytics-value">68%</span>
                  <span className="analytics-label">Average Match Score</span>
                </div>
              </div>
            </div>

            <div className="analytics-chart-placeholder">
              <div className="chart-icon">📊</div>
              <h4>Hiring Pipeline</h4>
              <p>AI-powered insights coming soon. Track your hiring funnel here.</p>
              <div className="pipeline-stats">
                <div className="pipeline-item">
                  <span>Profile Views</span>
                  <span className="pipeline-value">1,247</span>
                </div>
                <div className="pipeline-item">
                  <span>Shortlisted</span>
                  <span className="pipeline-value">42</span>
                </div>
                <div className="pipeline-item">
                  <span>Interviews</span>
                  <span className="pipeline-value">24</span>
                </div>
                <div className="pipeline-item">
                  <span>Offers</span>
                  <span className="pipeline-value">8</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== POST JOB MODAL ===== */}
      {showJobModal && (
        <div className="modal-overlay" onClick={() => setShowJobModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Post a New Job</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Job Title</label>
                <input type="text" placeholder="e.g., Senior React Developer" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Experience Level</label>
                  <select>
                    <option>0-2 years</option>
                    <option>3-5 years</option>
                    <option>6-8 years</option>
                    <option>8+ years</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" placeholder="e.g., Bangalore or Remote" />
                </div>
              </div>
              <div className="form-group">
                <label>Skills Required</label>
                <input type="text" placeholder="e.g., React, Node.js, AWS" />
              </div>
              <div className="form-group">
                <label>Job Description</label>
                <textarea placeholder="Describe the role and responsibilities..." rows="4"></textarea>
              </div>
              <div className="form-group">
                <label>Salary Range (LPA)</label>
                <div className="form-row">
                  <input type="text" placeholder="Min" className="half" />
                  <input type="text" placeholder="Max" className="half" />
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowJobModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Post Job 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecruiterMarketplace;