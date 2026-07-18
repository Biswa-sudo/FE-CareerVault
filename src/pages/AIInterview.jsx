import React, { useState, useRef, useEffect } from 'react';
import './AIInterview.css';

const AIInterview = () => {
  const [activeTab, setActiveTab] = useState('practice');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your AI Interview Coach. I'll help you practice for your upcoming interviews. Choose a mode below or let's start with a general interview.",
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedMode, setSelectedMode] = useState('general');
  const [selectedRole, setSelectedRole] = useState('Software Engineer');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [interviewStats, setInterviewStats] = useState({
    sessions: 8,
    avgScore: 72,
    questionsAnswered: 34,
    streak: 5
  });
  const messagesEndRef = useRef(null);

  const modes = [
    { id: 'general', label: '🎯 General', desc: 'Standard interview questions' },
    { id: 'technical', label: '💻 Technical', desc: 'Coding & technical skills' },
    { id: 'behavioral', label: '🧠 Behavioral', desc: 'Soft skills & situational' },
    { id: 'hr', label: '🤝 HR Round', desc: 'HR & culture fit questions' }
  ];

  const roles = [
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Engineer',
    'Backend Developer',
    'Data Scientist',
    'Product Manager',
    'DevOps Engineer'
  ];

  const quickPrompts = [
    'Tell me about yourself',
    'Why do you want this role?',
    'Describe a challenge you faced',
    'Where do you see yourself in 5 years?',
    'What are your strengths?'
  ];

  const historyData = [
    { date: 'Today', role: 'Full Stack Developer', score: 78, duration: '25 min' },
    { date: 'Yesterday', role: 'Software Engineer', score: 65, duration: '20 min' },
    { date: 'Jul 15', role: 'Frontend Engineer', score: 82, duration: '30 min' },
    { date: 'Jul 12', role: 'Data Scientist', score: 70, duration: '22 min' }
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputText.trim() || isLoading) return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsLoading(true);

    // Simulate AI thinking
    setTimeout(() => {
      const responses = [
        {
          text: "That's a great response! Your answer was clear and well-structured. To improve, try adding more specific examples from your experience.",
          feedback: 'Structure: 8/10, Content: 7/10, Delivery: 8/10'
        },
        {
          text: "Good effort! I like how you connected your skills to the job requirements. Consider adding more metrics or numbers to make your achievements more impactful.",
          feedback: 'Structure: 7/10, Content: 8/10, Delivery: 7/10'
        },
        {
          text: "Nice answer! You demonstrated good communication skills. Try to pause and think briefly before responding — it shows confidence and thoughtfulness.",
          feedback: 'Structure: 8/10, Content: 7/10, Delivery: 9/10'
        },
        {
          text: "Excellent! This was a very well-articulated response. You covered all key points effectively. Keep up this quality throughout the interview.",
          feedback: 'Structure: 9/10, Content: 8/10, Delivery: 9/10'
        },
        {
          text: "Good start. Your answer touched on the key points. For next time, try to structure your response using the STAR method — Situation, Task, Action, Result.",
          feedback: 'Structure: 6/10, Content: 7/10, Delivery: 7/10'
        }
      ];

      const response = responses[Math.floor(Math.random() * responses.length)];
      
      const aiMessage = {
        id: messages.length + 2,
        sender: 'ai',
        text: response.text,
        feedback: response.feedback,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleModeChange = (modeId) => {
    setSelectedMode(modeId);
    const modeMessages = {
      general: "Great! Let's start with a general interview. I'll ask you common questions that interviewers typically ask.",
      technical: "Switching to Technical mode. I'll ask you coding concepts, system design, and technical problem-solving questions.",
      behavioral: "Switching to Behavioral mode. I'll ask about your past experiences, teamwork, leadership, and handling difficult situations.",
      hr: "Switching to HR Round mode. We'll practice culture fit, career goals, and HR-specific questions."
    };
    
    const aiMessage = {
      id: messages.length + 1,
      sender: 'ai',
      text: modeMessages[modeId],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleQuickPrompt = (prompt) => {
    setInputText(prompt);
  };

  const handleStartInterview = () => {
    const aiMessage = {
      id: messages.length + 1,
      sender: 'ai',
      text: `Alright, let's begin! I'll ask you a series of questions for the ${selectedRole} position. Take your time and respond thoughtfully. Here's your first question: "Can you tell me about yourself and why you're interested in this role?"`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, aiMessage]);
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        // Add a message
        const aiMessage = {
          id: messages.length + 1,
          sender: 'ai',
          text: "🎤 I've captured your voice response. Let me analyze it... Good clarity and confidence in your voice. You sound prepared!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMessage]);
      }, 3000);
    }
  };

  return (
    <div className="ai-interview">
      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">🎯 AI Interview Coach</h1>
            <p className="page-subtitle">Practice realistic interviews with AI-powered feedback</p>
          </div>
          <div className="header-right">
            <span className="badge">🎯 {interviewStats.sessions} sessions</span>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">{interviewStats.sessions}</span>
              <span className="stat-label">Sessions Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <span className="stat-value">{interviewStats.avgScore}%</span>
              <span className="stat-label">Average Score</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <span className="stat-value">{interviewStats.questionsAnswered}</span>
              <span className="stat-label">Questions Answered</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-value">{interviewStats.streak}</span>
              <span className="stat-label">Day Streak</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`}
            onClick={() => setActiveTab('practice')}
          >
            🎯 Practice
          </button>
          <button 
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            📋 History
          </button>
          <button 
            className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('performance')}
          >
            📊 Performance
          </button>
        </div>

        {/* ===== TAB: PRACTICE ===== */}
        {activeTab === 'practice' && (
          <div className="tab-content">
            {/* Mode & Role Selection */}
            <div className="practice-controls">
              <div className="mode-selector">
                <label>Practice Mode</label>
                <div className="mode-grid">
                  {modes.map(mode => (
                    <button
                      key={mode.id}
                      className={`mode-btn ${selectedMode === mode.id ? 'active' : ''}`}
                      onClick={() => handleModeChange(mode.id)}
                    >
                      <span className="mode-icon">{mode.label}</span>
                      <span className="mode-desc">{mode.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="role-selector">
                <label>Target Role</label>
                <select 
                  className="role-select"
                  value={selectedRole}
                  onChange={handleRoleChange}
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <button className="btn btn-primary btn-small" onClick={handleStartInterview}>
                  🚀 Start Interview
                </button>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="quick-prompts">
              <span className="prompts-label">Quick practice prompts:</span>
              {quickPrompts.map((prompt, index) => (
                <button key={index} className="prompt-btn" onClick={() => handleQuickPrompt(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            {/* Chat Container */}
            <div className="chat-container">
              <div className="chat-header">
                <span className="chat-status">
                  {isLoading ? '🤔 AI is thinking...' : '🟢 AI Coach is online'}
                </span>
                <span className="chat-mode">
                  {modes.find(m => m.id === selectedMode)?.label || 'General'} • {selectedRole}
                </span>
              </div>

              <div className="chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`message ${msg.sender === 'ai' ? 'ai' : 'user'}`}>
                    <div className="message-avatar">
                      {msg.sender === 'ai' ? '🤖' : '👤'}
                    </div>
                    <div className="message-content-wrapper">
                      <div className="message-content">
                        <div className="message-text">{msg.text}</div>
                        {msg.feedback && (
                          <div className="message-feedback">
                            <span className="feedback-label">📊 Feedback:</span>
                            <span className="feedback-text">{msg.feedback}</span>
                          </div>
                        )}
                        <span className="message-time">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="message ai">
                    <div className="message-avatar">🤖</div>
                    <div className="message-content-wrapper">
                      <div className="message-content">
                        <div className="typing-indicator">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chat-input-area">
                <div className="chat-input-wrapper">
                  <input
                    type="text"
                    placeholder="Type your response or use voice..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <button 
                    className={`voice-btn ${isRecording ? 'recording' : ''}`}
                    onClick={handleToggleRecording}
                    title={isRecording ? 'Stop recording' : 'Start voice recording'}
                  >
                    {isRecording ? '⏹️' : '🎤'}
                  </button>
                  <button 
                    className="send-btn"
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isLoading}
                  >
                    Send 📤
                  </button>
                </div>
                <div className="chat-tips">
                  💡 Tip: Be specific and use examples. The AI evaluates structure, content, and delivery.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: HISTORY ===== */}
        {activeTab === 'history' && (
          <div className="tab-content">
            <div className="history-container">
              <h3>📋 Interview History</h3>
              <p>Review your past interview practice sessions</p>
              
              <div className="history-list">
                {historyData.map((item, index) => (
                  <div key={index} className="history-item">
                    <div className="history-date">{item.date}</div>
                    <div className="history-role">{item.role}</div>
                    <div className="history-score">
                      <span className="score-value">{item.score}%</span>
                      <span className="score-label">Score</span>
                    </div>
                    <div className="history-duration">⏱️ {item.duration}</div>
                    <button className="btn btn-outline btn-small">Review</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: PERFORMANCE ===== */}
        {activeTab === 'performance' && (
          <div className="tab-content">
            <div className="performance-container">
              <div className="performance-grid">
                <div className="performance-card">
                  <h4>📊 Skill Breakdown</h4>
                  <div className="skill-bar">
                    <span>Technical Knowledge</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '75%' }}></div>
                    </div>
                    <span className="bar-score">75%</span>
                  </div>
                  <div className="skill-bar">
                    <span>Communication</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '82%' }}></div>
                    </div>
                    <span className="bar-score">82%</span>
                  </div>
                  <div className="skill-bar">
                    <span>Problem Solving</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '68%' }}></div>
                    </div>
                    <span className="bar-score">68%</span>
                  </div>
                  <div className="skill-bar">
                    <span>Confidence</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '70%' }}></div>
                    </div>
                    <span className="bar-score">70%</span>
                  </div>
                  <div className="skill-bar">
                    <span>Structure & Clarity</span>
                    <div className="bar-track">
                      <div className="bar-fill" style={{ width: '77%' }}></div>
                    </div>
                    <span className="bar-score">77%</span>
                  </div>
                </div>

                <div className="performance-card">
                  <h4>📈 Progress Over Time</h4>
                  <div className="chart-placeholder">
                    <div className="chart-bar-container">
                      <div className="chart-bar" style={{ height: '40%' }}>65%</div>
                      <div className="chart-bar" style={{ height: '55%' }}>70%</div>
                      <div className="chart-bar" style={{ height: '70%' }}>78%</div>
                      <div className="chart-bar" style={{ height: '60%' }}>72%</div>
                      <div className="chart-bar" style={{ height: '75%' }}>82%</div>
                    </div>
                    <div className="chart-labels">
                      <span>Day 1</span>
                      <span>Day 2</span>
                      <span>Day 3</span>
                      <span>Day 4</span>
                      <span>Day 5</span>
                    </div>
                    <p className="chart-note">Your scores are improving! Keep practicing.</p>
                  </div>
                </div>

                <div className="performance-card full-width">
                  <h4>💪 Strengths & Areas for Improvement</h4>
                  <div className="strengths-grid">
                    <div className="strength-area">
                      <span className="strength-icon">✅</span>
                      <div>
                        <strong>Strengths</strong>
                        <ul>
                          <li>Clear communication and articulation</li>
                          <li>Good technical understanding</li>
                          <li>Confident delivery</li>
                        </ul>
                      </div>
                    </div>
                    <div className="improvement-area">
                      <span className="strength-icon">📈</span>
                      <div>
                        <strong>Areas to Improve</strong>
                        <ul>
                          <li>Use more specific examples</li>
                          <li>Practice STAR method for behavioral questions</li>
                          <li>Reduce filler words (um, uh, like)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AIInterview;