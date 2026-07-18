import React, { useState } from 'react';
import './SkillAnalysis.css';

const SkillAnalysis = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [resumeFile, setResumeFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi! I'm your AI Career Advisor. Upload your resume or tell me about your skills, and I'll analyze your strengths, find gaps, and create a personalized learning path for you.",
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');

  // Mock analysis data
  const analysisData = {
    overallScore: 72,
    strengths: [
      'React.js (Proficient)',
      'JavaScript (Advanced)',
      'Problem Solving (Strong)'
    ],
    gaps: [
      'System Design (Beginner)',
      'Data Structures & Algorithms (Intermediate)',
      'Cloud Computing (No Experience)'
    ],
    recommendedSkills: [
      { name: 'System Design', priority: 'High', resources: 12 },
      { name: 'Data Structures', priority: 'High', resources: 8 },
      { name: 'AWS/Azure', priority: 'Medium', resources: 6 },
      { name: 'Docker/Kubernetes', priority: 'Medium', resources: 4 }
    ],
    jobs: [
      { title: 'Full Stack Developer', match: 85, salary: '₹12-18 LPA' },
      { title: 'Frontend Engineer', match: 78, salary: '₹10-15 LPA' },
      { title: 'Software Engineer', match: 70, salary: '₹8-12 LPA' }
    ]
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setIsAnalyzing(true);
      
      // Simulate analysis
      setTimeout(() => {
        setIsAnalyzing(false);
        setAnalysisComplete(true);
        setActiveTab('results');
        
        // Add AI message
        const aiMessage = {
          id: messages.length + 1,
          sender: 'ai',
          text: "I've analyzed your resume! You have strong skills in React and JavaScript. I've identified some skill gaps and created a personalized learning path for you. Check out the results below.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages([...messages, aiMessage]);
      }, 2500);
    }
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');

    setTimeout(() => {
      const responses = [
        "Great question! Based on your goals, I recommend focusing on System Design next.",
        "I see you're interested in backend development. I'd suggest learning Node.js and databases.",
        "Your skills are strong for frontend roles. Consider learning about performance optimization.",
        "I recommend spending 2 hours per week on Data Structures practice.",
        "For your career path, cloud certification would be very valuable."
      ];
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="skill-analysis-page">
      {/* ===== SIDEBAR ===== */}
      {/* <aside className="sidebar">
        <div className="sidebar-logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">Benture AI</span>
        </div>
        
        <nav className="sidebar-nav">
          <a href="/dashboard" className="nav-item">
            <span className="nav-icon">📊</span> Dashboard
          </a>
          <a href="/my-cvs" className="nav-item">
            <span className="nav-icon">📄</span> My CVs
          </a>
          <a href="/templates" className="nav-item">
            <span className="nav-icon">🎨</span> Templates
          </a>
          <a href="/documents" className="nav-item">
            <span className="nav-icon">📁</span> Documents
          </a>
          <a href="/spoken-english" className="nav-item">
            <span className="nav-icon">🗣️</span> Spoken English
          </a>
          <a href="/skill-analysis" className="nav-item active">
            <span className="nav-icon">🧠</span> Skill Analysis
          </a>
          <a href="/account" className="nav-item">
            <span className="nav-icon">⚙️</span> Account
          </a>
        </nav>

        <div className="sidebar-user">
          <div className="user-avatar">BP</div>
          <div className="user-info">
            <span className="user-name">Biswaranjan</span>
            <span className="user-email">biswa@email.com</span>
          </div>
          <a href="/logout" className="logout-btn">Logout</a>
        </div>
      </aside> */}

      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">🧠 Skill Analysis</h1>
            <p className="page-subtitle">AI-powered skill assessment and personalized learning path</p>
          </div>
          <div className="header-right">
            {analysisComplete && (
              <span className="badge success">✅ Analysis Complete</span>
            )}
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-info">
              <span className="stat-value">{analysisComplete ? '72%' : '—'}</span>
              <span className="stat-label">Overall Skill Score</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">💪</div>
            <div className="stat-info">
              <span className="stat-value">{analysisComplete ? '3' : '—'}</span>
              <span className="stat-label">Strengths Identified</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <span className="stat-value">{analysisComplete ? '4' : '—'}</span>
              <span className="stat-label">Skill Gaps Found</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <span className="stat-value">{analysisComplete ? '30+' : '—'}</span>
              <span className="stat-label">Learning Resources</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            📋 Overview
          </button>
          <button 
            className={`tab-btn ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            📤 Upload Resume
          </button>
          <button 
            className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
            onClick={() => setActiveTab('results')}
            disabled={!analysisComplete}
          >
            📊 Results
          </button>
          <button 
            className={`tab-btn ${activeTab === 'chat' ? 'active' : ''}`}
            onClick={() => setActiveTab('chat')}
          >
            💬 AI Advisor
          </button>
        </div>

        {/* ===== TAB: OVERVIEW ===== */}
        {activeTab === 'overview' && (
          <div className="tab-content">
            <div className="overview-grid">
              <div className="overview-card">
                <h3>🧠 How It Works</h3>
                <ol>
                  <li><strong>Upload your resume</strong> — We'll parse and analyze it</li>
                  <li><strong>AI identifies your skills</strong> — See your current strengths</li>
                  <li><strong>Find skill gaps</strong> — What you need to learn next</li>
                  <li><strong>Get a learning path</strong> — Personalized recommendations</li>
                  <li><strong>Track your progress</strong> — Watch yourself grow</li>
                </ol>
              </div>
              <div className="overview-card">
                <h3>🎯 What You'll Get</h3>
                <ul>
                  <li>✅ Detailed skill breakdown</li>
                  <li>✅ Strength & weakness analysis</li>
                  <li>✅ Career path recommendations</li>
                  <li>✅ Personalized learning resources</li>
                  <li>✅ Job market matching</li>
                </ul>
              </div>
              <div className="overview-card highlight">
                <h3>🚀 Ready to Start?</h3>
                <p>Upload your resume or manually enter your skills to get started.</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setActiveTab('upload')}
                >
                  📤 Upload Resume
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: UPLOAD ===== */}
        {activeTab === 'upload' && (
          <div className="tab-content">
            <div className="upload-container">
              <div className="upload-area">
                {!resumeFile && !isAnalyzing && (
                  <>
                    <div className="upload-icon">📄</div>
                    <h3>Upload Your Resume</h3>
                    <p>Drag & drop or click to upload (PDF, DOCX, or TXT)</p>
                    <input 
                      type="file" 
                      accept=".pdf,.docx,.txt"
                      onChange={handleFileUpload}
                      className="file-input"
                      id="resume-upload"
                    />
                    <label htmlFor="resume-upload" className="btn btn-primary upload-btn">
                      Choose File
                    </label>
                  </>
                )}

                {isAnalyzing && (
                  <div className="analyzing-state">
                    <div className="spinner"></div>
                    <h3>Analyzing Your Resume...</h3>
                    <p>Our AI is parsing your skills and experience</p>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                )}

                {resumeFile && !isAnalyzing && analysisComplete && (
                  <div className="uploaded-state">
                    <div className="checkmark">✅</div>
                    <h3>Analysis Complete!</h3>
                    <p><strong>File:</strong> {resumeFile.name}</p>
                    <button 
                      className="btn btn-primary"
                      onClick={() => setActiveTab('results')}
                    >
                      View Results →
                    </button>
                  </div>
                )}
              </div>

              <div className="manual-option">
                <p>— OR —</p>
                <button className="btn btn-outline">Enter Skills Manually</button>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: RESULTS ===== */}
        {activeTab === 'results' && (
          <div className="tab-content">
            <div className="results-grid">
              {/* Overall Score */}
              <div className="result-card score-card">
                <div className="score-circle">
                  <span className="score-number">72</span>
                  <span className="score-label">%</span>
                </div>
                <div className="score-info">
                  <h3>Overall Skill Score</h3>
                  <p>Based on your resume and current skills</p>
                  <div className="score-bar">
                    <div className="score-fill" style={{ width: '72%' }}></div>
                  </div>
                  <span className="score-level">Intermediate</span>
                </div>
              </div>

              {/* Strengths */}
              <div className="result-card">
                <h3>💪 Your Strengths</h3>
                <ul className="result-list strengths">
                  <li>✅ React.js <span className="tag">Proficient</span></li>
                  <li>✅ JavaScript <span className="tag">Advanced</span></li>
                  <li>✅ Problem Solving <span className="tag">Strong</span></li>
                </ul>
              </div>

              {/* Skill Gaps */}
              <div className="result-card">
                <h3>📈 Skill Gaps</h3>
                <ul className="result-list gaps">
                  <li>⚠️ System Design <span className="tag warn">Beginner</span></li>
                  <li>⚠️ Data Structures <span className="tag warn">Intermediate</span></li>
                  <li>⚠️ Cloud Computing <span className="tag danger">No Experience</span></li>
                </ul>
              </div>

              {/* Recommended Learning Path */}
              <div className="result-card full-width">
                <h3>📚 Recommended Learning Path</h3>
                <div className="learning-path">
                  <div className="path-item priority-high">
                    <div className="path-info">
                      <span className="path-name">System Design</span>
                      <span className="path-priority">🔴 High Priority</span>
                    </div>
                    <div className="path-actions">
                      <span className="resources">12 resources</span>
                      <button className="btn btn-small">Start Learning →</button>
                    </div>
                  </div>
                  <div className="path-item priority-high">
                    <div className="path-info">
                      <span className="path-name">Data Structures & Algorithms</span>
                      <span className="path-priority">🔴 High Priority</span>
                    </div>
                    <div className="path-actions">
                      <span className="resources">8 resources</span>
                      <button className="btn btn-small">Start Learning →</button>
                    </div>
                  </div>
                  <div className="path-item priority-medium">
                    <div className="path-info">
                      <span className="path-name">AWS / Azure Fundamentals</span>
                      <span className="path-priority">🟡 Medium Priority</span>
                    </div>
                    <div className="path-actions">
                      <span className="resources">6 resources</span>
                      <button className="btn btn-small">Start Learning →</button>
                    </div>
                  </div>
                  <div className="path-item priority-medium">
                    <div className="path-info">
                      <span className="path-name">Docker & Kubernetes</span>
                      <span className="path-priority">🟡 Medium Priority</span>
                    </div>
                    <div className="path-actions">
                      <span className="resources">4 resources</span>
                      <button className="btn btn-small">Start Learning →</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Matching */}
              <div className="result-card full-width">
                <h3>🎯 Jobs That Match Your Skills</h3>
                <div className="job-grid">
                  <div className="job-card">
                    <div className="job-title">Full Stack Developer</div>
                    <div className="job-match">
                      <span className="match-score">85%</span>
                      <span className="match-label">match</span>
                    </div>
                    <div className="job-salary">₹12-18 LPA</div>
                    <button className="btn btn-outline btn-small">View Details</button>
                  </div>
                  <div className="job-card">
                    <div className="job-title">Frontend Engineer</div>
                    <div className="job-match">
                      <span className="match-score">78%</span>
                      <span className="match-label">match</span>
                    </div>
                    <div className="job-salary">₹10-15 LPA</div>
                    <button className="btn btn-outline btn-small">View Details</button>
                  </div>
                  <div className="job-card">
                    <div className="job-title">Software Engineer</div>
                    <div className="job-match">
                      <span className="match-score">70%</span>
                      <span className="match-label">match</span>
                    </div>
                    <div className="job-salary">₹8-12 LPA</div>
                    <button className="btn btn-outline btn-small">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: CHAT ===== */}
        {activeTab === 'chat' && (
          <div className="tab-content">
            <div className="chat-container">
              <div className="chat-header">
                <span className="chat-status">🟢 AI Advisor is online</span>
                <span className="chat-mode">🧠 Career Guidance</span>
              </div>

              <div className="chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`message ${msg.sender === 'ai' ? 'ai' : 'user'}`}>
                    <div className="message-avatar">
                      {msg.sender === 'ai' ? '🤖' : '👤'}
                    </div>
                    <div className="message-content">
                      <div className="message-text">{msg.text}</div>
                      <span className="message-time">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Ask about career advice, skill recommendations..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-btn">
                  Send 📤
                </button>
              </div>

              <div className="chat-tips">
                <span>💡 Ask me anything about your career path, skill recommendations, or interview tips!</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default SkillAnalysis;