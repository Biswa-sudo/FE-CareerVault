import React, { useState } from 'react';
import './StudyGroups.css';

const StudyGroups = () => {
  const [activeTab, setActiveTab] = useState('my-groups');
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Mock data
  const myGroups = [
    {
      id: 1,
      name: 'Full Stack Developers',
      members: 12,
      active: 6,
      topic: 'JavaScript, React, Node.js',
      nextSession: 'Today, 6:00 PM',
      streak: 5,
      rank: 3,
      joinCode: 'FSD2026'
    },
    {
      id: 2,
      name: 'Interview Prep Squad',
      members: 8,
      active: 4,
      topic: 'DSA, System Design',
      nextSession: 'Tomorrow, 10:00 AM',
      streak: 12,
      rank: 1,
      joinCode: 'IPS123'
    },
    {
      id: 3,
      name: 'Odisha Board Students',
      members: 25,
      active: 15,
      topic: 'Math, Science, English',
      nextSession: 'Today, 4:00 PM',
      streak: 8,
      rank: 2,
      joinCode: 'ODI2026'
    }
  ];

  const availableGroups = [
    {
      id: 4,
      name: 'React Native Learners',
      members: 45,
      active: 18,
      topic: 'Mobile App Development',
      level: 'Intermediate'
    },
    {
      id: 5,
      name: 'Data Science Enthusiasts',
      members: 32,
      active: 12,
      topic: 'Python, ML, Statistics',
      level: 'Advanced'
    },
    {
      id: 6,
      name: 'English Communication',
      members: 56,
      active: 22,
      topic: 'Spoken English, Grammar',
      level: 'Beginner'
    },
    {
      id: 7,
      name: 'Frontend Masters',
      members: 28,
      active: 14,
      topic: 'HTML, CSS, JavaScript',
      level: 'Beginner'
    }
  ];

  const leaderboard = [
    { name: 'Rahul S.', score: 2840, streak: 15, avatar: 'R' },
    { name: 'Biswaranjan', score: 2560, streak: 12, avatar: 'BP', isMe: true },
    { name: 'Priya M.', score: 2310, streak: 10, avatar: 'P' },
    { name: 'Amit K.', score: 2150, streak: 8, avatar: 'A' },
    { name: 'Sneha R.', score: 1980, streak: 7, avatar: 'S' }
  ];

  const groupActivities = [
    { user: 'Rahul', action: 'completed 2 React exercises', time: '5 min ago' },
    { user: 'Priya', action: 'started a group study session', time: '15 min ago' },
    { user: 'Amit', action: 'shared a resource: System Design PDF', time: '1 hour ago' },
    { user: 'Sneha', action: 'earned "5-Day Streak" badge', time: '2 hours ago' }
  ];

  const [timerMinutes, setTimerMinutes] = useState(25);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const handleJoinGroup = (groupId) => {
    alert(`🎉 You've joined the group! Start studying together.`);
  };

  const handleStartTimer = () => {
    setIsTimerRunning(!isTimerRunning);
    if (!isTimerRunning) {
      // Start timer logic
      const interval = setInterval(() => {
        setTimerSeconds(prev => {
          if (prev === 0) {
            if (timerMinutes === 0) {
              clearInterval(interval);
              setIsTimerRunning(false);
              alert('⏰ Study session complete! Great job!');
              return 0;
            }
            setTimerMinutes(prevMin => prevMin - 1);
            return 59;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <div className="study-groups-page">
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
          <a href="/skill-analysis" className="nav-item">
            <span className="nav-icon">🧠</span> Skill Analysis
          </a>
          <a href="/study-groups" className="nav-item active">
            <span className="nav-icon">👥</span> Study Groups
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
            <h1 className="page-title">👥 Study Groups</h1>
            <p className="page-subtitle">Study together. Grow together. Stay accountable.</p>
          </div>
          <div className="header-right">
            <button className="btn btn-primary" onClick={() => setShowCreateModal(true)}>
              + Create Group
            </button>
            <span className="badge">🔥 8 active study sessions</span>
          </div>
        </header>

        {/* Stats */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <span className="stat-value">3</span>
              <span className="stat-label">Your Groups</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">12</span>
              <span className="stat-label">Study Sessions</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-value">8</span>
              <span className="stat-label">Day Streak</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-info">
              <span className="stat-value">#3</span>
              <span className="stat-label">Global Rank</span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'my-groups' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-groups')}
          >
            📚 My Groups
          </button>
          <button 
            className={`tab-btn ${activeTab === 'discover' ? 'active' : ''}`}
            onClick={() => setActiveTab('discover')}
          >
            🔍 Discover
          </button>
          <button 
            className={`tab-btn ${activeTab === 'timer' ? 'active' : ''}`}
            onClick={() => setActiveTab('timer')}
          >
            ⏱️ Focus Timer
          </button>
          <button 
            className={`tab-btn ${activeTab === 'leaderboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            🏆 Leaderboard
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            📊 Activity Feed
          </button>
        </div>

        {/* ===== TAB: MY GROUPS ===== */}
        {activeTab === 'my-groups' && (
          <div className="tab-content">
            <div className="groups-grid">
              {myGroups.map(group => (
                <div key={group.id} className="group-card">
                  <div className="group-header">
                    <div className="group-icon">📚</div>
                    <div className="group-info">
                      <h3>{group.name}</h3>
                      <p className="group-topic">{group.topic}</p>
                    </div>
                    <div className="group-status">
                      <span className="status-badge active">
                        ● {group.active}/{group.members} active
                      </span>
                    </div>
                  </div>
                  <div className="group-details">
                    <div className="detail-item">
                      <span>📅 Next Session</span>
                      <span className="detail-value">{group.nextSession}</span>
                    </div>
                    <div className="detail-item">
                      <span>🔥 Streak</span>
                      <span className="detail-value">{group.streak} days</span>
                    </div>
                    <div className="detail-item">
                      <span>🏆 Rank</span>
                      <span className="detail-value">#{group.rank}</span>
                    </div>
                    <div className="detail-item">
                      <span>🔑 Join Code</span>
                      <span className="detail-value code">{group.joinCode}</span>
                    </div>
                  </div>
                  <div className="group-actions">
                    <button className="btn btn-primary btn-small">📖 Join Session</button>
                    <button className="btn btn-outline btn-small">💬 Chat</button>
                    <button className="btn btn-outline btn-small">👥 Share</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Join Section */}
            <div className="quick-join">
              <h3>Or join a session now</h3>
              <div className="join-code-input">
                <input type="text" placeholder="Enter join code" />
                <button className="btn btn-primary">Join</button>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: DISCOVER ===== */}
        {activeTab === 'discover' && (
          <div className="tab-content">
            <div className="discover-header">
              <div className="search-bar">
                <input type="text" placeholder="Search groups by name or topic..." />
                <button>🔍 Search</button>
              </div>
              <div className="filter-group">
                <select className="filter-select">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <select className="filter-select">
                  <option>Popular</option>
                  <option>Newest</option>
                  <option>Most Active</option>
                </select>
              </div>
            </div>

            <div className="groups-grid">
              {availableGroups.map(group => (
                <div key={group.id} className="group-card discover-card">
                  <div className="group-header">
                    <div className="group-icon">👥</div>
                    <div className="group-info">
                      <h3>{group.name}</h3>
                      <p className="group-topic">{group.topic}</p>
                    </div>
                    <div className="group-level">
                      <span className={`level-badge ${group.level.toLowerCase()}`}>
                        {group.level}
                      </span>
                    </div>
                  </div>
                  <div className="group-details">
                    <div className="detail-item">
                      <span>👤 Members</span>
                      <span className="detail-value">{group.members}</span>
                    </div>
                    <div className="detail-item">
                      <span>🟢 Active</span>
                      <span className="detail-value">{group.active} online</span>
                    </div>
                  </div>
                  <div className="group-actions">
                    <button 
                      className="btn btn-primary btn-small"
                      onClick={() => handleJoinGroup(group.id)}
                    >
                      + Join Group
                    </button>
                    <button className="btn btn-outline btn-small">Preview</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===== TAB: FOCUS TIMER ===== */}
        {activeTab === 'timer' && (
          <div className="tab-content">
            <div className="timer-container">
              <div className="timer-card">
                <div className="timer-header">
                  <h3>⏱️ Focus Timer</h3>
                  <p>Study with focus. Track your sessions.</p>
                </div>
                <div className="timer-display">
                  <span className="timer-minutes">
                    {String(timerMinutes).padStart(2, '0')}
                  </span>
                  <span className="timer-colon">:</span>
                  <span className="timer-seconds">
                    {String(timerSeconds).padStart(2, '0')}
                  </span>
                </div>
                <div className="timer-controls">
                  <button 
                    className={`btn ${isTimerRunning ? 'btn-danger' : 'btn-primary'}`}
                    onClick={handleStartTimer}
                  >
                    {isTimerRunning ? '⏸️ Pause' : '▶️ Start'}
                  </button>
                  <button 
                    className="btn btn-outline"
                    onClick={() => {
                      setTimerMinutes(25);
                      setTimerSeconds(0);
                      setIsTimerRunning(false);
                    }}
                  >
                    🔄 Reset
                  </button>
                </div>
                <div className="timer-presets">
                  <button 
                    className="preset-btn"
                    onClick={() => { setTimerMinutes(25); setTimerSeconds(0); }}
                  >
                    25m
                  </button>
                  <button 
                    className="preset-btn"
                    onClick={() => { setTimerMinutes(45); setTimerSeconds(0); }}
                  >
                    45m
                  </button>
                  <button 
                    className="preset-btn"
                    onClick={() => { setTimerMinutes(60); setTimerSeconds(0); }}
                  >
                    60m
                  </button>
                  <button 
                    className="preset-btn"
                    onClick={() => { setTimerMinutes(120); setTimerSeconds(0); }}
                  >
                    2h
                  </button>
                </div>
                <div className="timer-stats">
                  <div className="timer-stat">
                    <span>Today</span>
                    <strong>1h 45m</strong>
                  </div>
                  <div className="timer-stat">
                    <span>This Week</span>
                    <strong>8h 30m</strong>
                  </div>
                  <div className="timer-stat">
                    <span>Streak</span>
                    <strong>8 days</strong>
                  </div>
                </div>
              </div>

              <div className="timer-sidebar">
                <div className="live-sessions">
                  <h4>🟢 Live Sessions Now</h4>
                  <div className="live-item">
                    <span>Full Stack Developers</span>
                    <span className="live-count">6 studying</span>
                  </div>
                  <div className="live-item">
                    <span>Interview Prep Squad</span>
                    <span className="live-count">4 studying</span>
                  </div>
                  <div className="live-item">
                    <span>Odisha Board Students</span>
                    <span className="live-count">15 studying</span>
                  </div>
                </div>
                <div className="quick-quote">
                  <p>"Study groups increase focus by 3x"</p>
                  <span>— StudiesTimer Research</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: LEADERBOARD ===== */}
        {activeTab === 'leaderboard' && (
          <div className="tab-content">
            <div className="leaderboard-container">
              <div className="leaderboard-header">
                <h3>🏆 Global Leaderboard</h3>
                <p>Compete with learners around the world</p>
                <div className="leaderboard-period">
                  <button className="period-btn active">All Time</button>
                  <button className="period-btn">This Month</button>
                  <button className="period-btn">This Week</button>
                </div>
              </div>
              <div className="leaderboard-list">
                {leaderboard.map((user, index) => (
                  <div key={index} className={`leaderboard-item ${user.isMe ? 'is-me' : ''}`}>
                    <div className="rank">
                      {index === 0 && '🥇'}
                      {index === 1 && '🥈'}
                      {index === 2 && '🥉'}
                      {index > 2 && `#${index + 1}`}
                    </div>
                    <div className="user-avatar-sm">{user.avatar}</div>
                    <div className="user-name">
                      {user.name}
                      {user.isMe && <span className="you-badge">You</span>}
                    </div>
                    <div className="user-score">{user.score} pts</div>
                    <div className="user-streak">🔥 {user.streak}d</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: ACTIVITY FEED ===== */}
        {activeTab === 'activity' && (
          <div className="tab-content">
            <div className="activity-container">
              <h3>📊 Group Activity Feed</h3>
              <p>See what your group members are doing</p>
              <div className="activity-list">
                {groupActivities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-avatar">{activity.user[0]}</div>
                    <div className="activity-content">
                      <span className="activity-user">{activity.user}</span>
                      <span className="activity-action">{activity.action}</span>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== CREATE GROUP MODAL ===== */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Create Study Group</h2>
            <form className="modal-form">
              <div className="form-group">
                <label>Group Name</label>
                <input type="text" placeholder="e.g., React Masters" />
              </div>
              <div className="form-group">
                <label>Topic / Subject</label>
                <input type="text" placeholder="e.g., JavaScript, React, DSA" />
              </div>
              <div className="form-group">
                <label>Level</label>
                <select>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea placeholder="What will this group study?" />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-outline" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Group 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyGroups;