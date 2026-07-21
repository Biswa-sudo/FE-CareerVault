import React, { useState, useRef, useEffect } from 'react';
import './AIInterview.css';
import { generateTopicQuestions } from '../services/interviewService';
import {
  addWeakQuestion,
  clearTopicPracticeBatch,
  getBatchProgress,
  getTopicPracticeBatch,
  getWeakTopicSummary,
  setTopicPracticeBatch,
  updateQuestionEntry
} from '../lib/topicPracticeStore';

const AIInterview = () => {
  const [activeTab, setActiveTab] = useState('practice');
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      sender: 'ai',
      text: "Hello! I'm your AI Interview Coach. I'll help you practice for your upcoming interviews with live feedback. Choose a mode below or let's start with a general interview.",
      time: '10:30 AM'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('JavaScript');
  const [isRecording, setIsRecording] = useState(false);
  const [isBatchLoading, setIsBatchLoading] = useState(false);
  const [questionBatch, setQuestionBatchState] = useState([]);
  const [showConceptByQuestion, setShowConceptByQuestion] = useState({});
  const [allowNextBatch, setAllowNextBatch] = useState(false);
  const [interviewStats, setInterviewStats] = useState({
    sessions: 8,
    avgScore: 72,
    questionsAnswered: 34,
    streak: 5
  });
  const messagesEndRef = useRef(null);

  const createMessage = (sender, text, extra = {}) => ({
    id: crypto.randomUUID(),
    sender,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    ...extra
  });

  const topics = [
    'JavaScript',
    'React',
    'System Design',
    'Data Structures & Algorithms',
    'Node.js',
    'Database Design'
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

  useEffect(() => {
    const savedBatch = getTopicPracticeBatch();

    if (!savedBatch.length) {
      return;
    }

    setQuestionBatchState(savedBatch);
    setSelectedTopic(savedBatch[0]?.topic || 'JavaScript');

    const progress = getBatchProgress(savedBatch);
    if (progress.completed) {
      if (progress.averageRating >= 3.5) {
        setAllowNextBatch(true);
        setMessages(prev => [
          ...prev,
          createMessage(
            'ai',
            `Welcome back. Your previous ${savedBatch[0]?.topic || 'topic'} batch is complete with average rating ${progress.averageRating.toFixed(1)}/5. You can request a new set now.`
          )
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          createMessage(
            'ai',
            `Welcome back. Your previous ${savedBatch[0]?.topic || 'topic'} batch is complete with average rating ${progress.averageRating.toFixed(1)}/5. Use Continue to unlock the next set, or review weak areas first.`
          )
        ]);
      }

      return;
    }

    const nextIndex = savedBatch.findIndex(entry => !Number.isFinite(entry.userRating));
    if (nextIndex >= 0) {
      setMessages(prev => [
        ...prev,
        createMessage(
          'ai',
          `Resuming your saved batch for ${savedBatch[nextIndex].topic}.\n\nQuestion ${nextIndex + 1}/10: ${savedBatch[nextIndex].question}`
        )
      ]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const setQuestionBatch = (nextBatch) => {
    setQuestionBatchState(nextBatch);
    setTopicPracticeBatch(nextBatch);
  };

  const batchProgress = getBatchProgress(questionBatch);
  const currentQuestionIndex = questionBatch.findIndex(entry => !Number.isFinite(entry.userRating));
  const currentQuestion = currentQuestionIndex >= 0 ? questionBatch[currentQuestionIndex] : null;
  const weakTopicSummary = Object.entries(getWeakTopicSummary())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const handleGenerateBatch = async () => {
    if (isBatchLoading) {
      return;
    }

    const hasPendingBatch = questionBatch.length && !batchProgress.completed;
    if (hasPendingBatch) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'Finish rating all 10 current questions before requesting another batch.')
      ]);
      return;
    }

    if (questionBatch.length && batchProgress.completed && !allowNextBatch && batchProgress.averageRating < 3.5) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'Your average rating is below 3.5. Click Continue Anyway if you still want a new batch.')
      ]);
      return;
    }

    setIsBatchLoading(true);

    try {
      clearTopicPracticeBatch();
      const generatedBatch = await generateTopicQuestions({ topic: selectedTopic });

      setQuestionBatch(generatedBatch);
      setShowConceptByQuestion({});
      setAllowNextBatch(false);

      setMessages([
        createMessage(
          'ai',
          `Great choice. I generated 10 ${selectedTopic} questions in one batch. We'll now practice locally with no further AI calls.`
        ),
        createMessage('ai', `Question 1/10: ${generatedBatch[0].question}`)
      ]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown Groq error';
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Could not generate the topic batch. ${errorMessage}`)
      ]);
    } finally {
      setIsBatchLoading(false);
    }
  };

  const handleSendMessage = () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isBatchLoading) return;

    const userMessage = createMessage('user', trimmedInput);

    if (!questionBatch.length || !currentQuestion) {
      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', 'Please generate a 10-question topic batch first.')
      ]);
      setInputText('');
      return;
    }

    if (currentQuestion.userAnswer?.trim()) {
      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', 'You already answered this question. Reveal the concept and rate yourself to continue.')
      ]);
      setInputText('');
      return;
    }

    const updatedBatch = updateQuestionEntry(currentQuestion.id, { userAnswer: trimmedInput });
    setQuestionBatchState(updatedBatch);

    setMessages(prev => [
      ...prev,
      userMessage,
      createMessage('ai', 'Answer saved. Reveal the concept, then rate yourself from 1 to 5.')
    ]);
    setInputText('');
  };

  const handleRevealConcept = () => {
    if (!currentQuestion || !currentQuestion.userAnswer?.trim()) {
      return;
    }

    if (showConceptByQuestion[currentQuestion.id]) {
      return;
    }

    setShowConceptByQuestion(prev => ({
      ...prev,
      [currentQuestion.id]: true
    }));

    setMessages(prev => [
      ...prev,
      createMessage('ai', `Concept: ${currentQuestion.concept}`)
    ]);
  };

  const handleRateQuestion = (rating) => {
    if (!currentQuestion || !currentQuestion.userAnswer?.trim()) {
      return;
    }

    const updatedBatch = updateQuestionEntry(currentQuestion.id, { userRating: rating });
    setQuestionBatchState(updatedBatch);

    if (rating <= 2) {
      addWeakQuestion({
        topic: currentQuestion.topic,
        questionId: currentQuestion.id,
        rating,
        createdAt: Date.now()
      });
    }

    const nextIndex = updatedBatch.findIndex(entry => !Number.isFinite(entry.userRating));

    if (nextIndex >= 0) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Rating saved (${rating}/5). Next question ${nextIndex + 1}/10: ${updatedBatch[nextIndex].question}`)
      ]);
      return;
    }

    const progress = getBatchProgress(updatedBatch);
    const average = progress.averageRating.toFixed(1);

    if (progress.averageRating >= 3.5) {
      setAllowNextBatch(true);
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Batch completed. Average rating: ${average}/5. You can now generate a new batch.`)
      ]);
      return;
    }

    setAllowNextBatch(false);
    setMessages(prev => [
      ...prev,
      createMessage(
        'ai',
        `Batch completed with average rating ${average}/5. Review weak topics or click Continue Anyway to request a new batch.`
      )
    ]);
  };

  const handleContinueAnyway = () => {
    setAllowNextBatch(true);
    setMessages(prev => [
      ...prev,
      createMessage('ai', 'Continue enabled. You can now generate a new 10-question batch.')
    ]);
  };

  const handleRevisitWeakTopics = () => {
    if (!weakTopicSummary.length) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'No weak topics have been recorded yet. Low ratings (<=2) will appear here.')
      ]);
      return;
    }

    const details = weakTopicSummary.map(([topic, count]) => `${topic} (${count})`).join(', ');
    setMessages(prev => [
      ...prev,
      createMessage('ai', `Weak-topic recap: ${details}. Pick one of these topics for your next batch.`)
    ]);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        // Add a message
        setMessages(prev => [...prev, createMessage('ai', "🎤 I've captured your voice response. Let me analyze it... Good clarity and confidence in your voice. You sound prepared!")]);
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
                <label>Practice Topic</label>
                <div className="topic-selector-row">
                  <select
                    className="topic-select"
                    value={selectedTopic}
                    onChange={(event) => setSelectedTopic(event.target.value)}
                    disabled={isBatchLoading}
                  >
                    {topics.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                  </select>
                  <button className="btn btn-primary btn-small" onClick={handleGenerateBatch} disabled={isBatchLoading}>
                    {isBatchLoading ? 'Generating...' : '⚡ Generate 10 Questions'}
                  </button>
                </div>
              </div>

              <div className="role-selector">
                <label>Batch Progress</label>
                <div className="practice-status">
                  <span>Answered: {batchProgress.answeredCount}/10</span>
                  <span>Rated: {batchProgress.ratedCount}/10</span>
                  <span>Average: {batchProgress.ratedCount ? batchProgress.averageRating.toFixed(1) : '0.0'}/5</span>
                </div>

                {batchProgress.completed && batchProgress.averageRating < 3.5 && !allowNextBatch && (
                  <button className="btn btn-outline btn-small" onClick={handleContinueAnyway}>
                    Continue Anyway
                  </button>
                )}

                {weakTopicSummary.length > 0 && (
                  <button className="btn btn-outline btn-small" onClick={handleRevisitWeakTopics}>
                    Revisit Weak Topics
                  </button>
                )}
              </div>
            </div>

            {currentQuestion && (
              <div className="current-question-card">
                <div className="question-meta">Current topic: {currentQuestion.topic} • Question {currentQuestionIndex + 1}/10</div>
                <div className="question-title">{currentQuestion.question}</div>
                <div className="action-row">
                  <button
                    className="btn btn-outline btn-small"
                    onClick={handleRevealConcept}
                    disabled={!currentQuestion.userAnswer?.trim()}
                  >
                    Reveal Concept
                  </button>
                  <div className="rating-row">
                    {[1, 2, 3, 4, 5].map(value => (
                      <button
                        key={value}
                        className="rating-btn"
                        onClick={() => handleRateQuestion(value)}
                        disabled={!currentQuestion.userAnswer?.trim() || Number.isFinite(currentQuestion.userRating)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {weakTopicSummary.length > 0 && (
              <div className="weak-topics">
                <span className="prompts-label">Weak topics:</span>
                {weakTopicSummary.map(([topic, count]) => (
                  <span key={topic} className="weak-pill">{topic}: {count}</span>
                ))}
              </div>
            )}

            {allowNextBatch && batchProgress.completed && (
              <div className="quick-prompts">
                <span className="prompts-label">You can request a fresh question set now.</span>
              </div>
            )}

            {/* Chat Container */}
            <div className="chat-container">
              <div className="chat-header">
                <span className="chat-status">
                  {isBatchLoading ? '🤔 Generating topic set...' : '🟢 Practice mode is local'}
                </span>
                <span className="chat-mode">
                  {selectedTopic} • {batchProgress.ratedCount}/10 rated
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
                {isBatchLoading && (
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
                    placeholder="Type your answer for the current question..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isBatchLoading}
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
                    disabled={!inputText.trim() || isBatchLoading}
                  >
                    Send 📤
                  </button>
                </div>
                <div className="chat-tips">
                  💡 One AI call creates 10 questions. Answer, reveal concept, and self-rate locally.
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