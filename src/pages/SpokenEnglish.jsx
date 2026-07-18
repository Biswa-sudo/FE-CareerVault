import React, { useState } from 'react';
import './SpokenEnglish.css';

const SpokenEnglish = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your AI English Coach. Let's practice speaking. Say something or choose a topic below.",
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedMode, setSelectedMode] = useState('free');

  const modes = [
    { id: 'free', label: '🗣️ Free Talk', icon: '💬' },
    { id: 'interview', label: '🎯 Interview Prep', icon: '🎯' },
    { id: 'business', label: '💼 Business', icon: '💼' },
    { id: 'pronunciation', label: '🔊 Pronunciation', icon: '🔊' }
  ];

  const topics = [
    'Introduce Yourself',
    'Describe Your Dream Job',
    'Tell Me About Your Day',
    'Explain Your Skills',
    'Practice Interview Questions'
  ];

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

    // Simulate AI response after 1 second
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'ai',
        text: getAIResponse(inputText),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (userInput) => {
    const responses = [
      "That's great! Let me help you improve that. Try saying it with more confidence.",
      "Good effort! Here's a tip: focus on your pronunciation of the word 'experience'.",
      "I like your vocabulary! Let's work on making your sentences more fluent.",
      "Nice! Can you elaborate on that? Use more descriptive words.",
      "Perfect! Your grammar is improving. Let's try a more challenging topic."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleModeSelect = (modeId) => {
    setSelectedMode(modeId);
    const modeNames = {
      free: "🗣️ Free Talk Mode — let's chat naturally.",
      interview: "🎯 Interview Prep Mode — I'll ask you interview questions.",
      business: "💼 Business Mode — we'll practice professional conversations.",
      pronunciation: "🔊 Pronunciation Mode — focus on speaking clearly."
    };
    
    const aiMessage = {
      id: messages.length + 1,
      sender: 'ai',
      text: `Switched to ${modeNames[modeId]}`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, aiMessage]);
  };

  return (
    <div className="spoken-english-page">
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
          <a href="/spoken-english" className="nav-item active">
            <span className="nav-icon">🗣️</span> Spoken English
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
            <h1 className="page-title">🗣️ Spoken English</h1>
            <p className="page-subtitle">Practice speaking with your AI conversation partner</p>
          </div>
          <div className="header-right">
            <span className="badge">🎯 15 mins today</span>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Sessions Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <span className="stat-value">78%</span>
              <span className="stat-label">Pronunciation Score</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📚</div>
            <div className="stat-info">
              <span className="stat-value">45</span>
              <span className="stat-label">Words Learned</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-value">5</span>
              <span className="stat-label">Day Streak</span>
            </div>
          </div>
        </section>

        {/* Mode Selection */}
        <section className="mode-selector">
          <h3>Choose Practice Mode</h3>
          <div className="mode-grid">
            {modes.map(mode => (
              <button
                key={mode.id}
                className={`mode-btn ${selectedMode === mode.id ? 'active' : ''}`}
                onClick={() => handleModeSelect(mode.id)}
              >
                <span className="mode-icon">{mode.icon}</span>
                <span className="mode-label">{mode.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Topics */}
        <section className="quick-topics">
          <h3>Quick Practice Topics</h3>
          <div className="topic-grid">
            {topics.map((topic, index) => (
              <button key={index} className="topic-btn">
                {topic}
              </button>
            ))}
          </div>
        </section>

        {/* Chat Area */}
        <section className="chat-container">
          <div className="chat-header">
            <span className="chat-status">🟢 AI Coach is online</span>
            <span className="chat-mode">{modes.find(m => m.id === selectedMode)?.label || 'Free Talk'}</span>
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
              placeholder="Type your response or practice speaking..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="send-btn">
              Send 📤
            </button>
            <button className="mic-btn" title="Speak instead (coming soon)">
              🎤
            </button>
          </div>

          <div className="chat-tips">
            <span>💡 Tip: Speak naturally. Don't worry about mistakes. I'm here to help you improve!</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SpokenEnglish;