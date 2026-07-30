import React, { useEffect, useMemo, useRef, useState } from 'react';
import './AIInterview.css';
import { startListening } from '../spokenEnglish/services/speechService';
import {
  addUsedTopic,
  getAllQuestions,
  getBatchProgress,
  getOverallStats,
  getStoredTopicLabel,
  getStrengthsWeaknesses,
  getTopicHistory,
  getTopicPerformance,
  getTopicQuestions,
  getUsedTopics,
  getWeakQuestionsForTopic,
  setTopicQuestions,
  updateQuestionEntry
} from '../lib/topicPracticeStore';

const OTHER_TOPIC_VALUE = 'other';
const CHAT_HISTORY_KEY = 'aiInterviewChatHistoryByTopic';

function getTopicChatKey(topic) {
  return String(topic || '__global__').trim().toLowerCase() || '__global__';
}

function readChatHistoryStore() {
  try {
    const raw = localStorage.getItem(CHAT_HISTORY_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function getChatHistoryForTopic(topic) {
  const store = readChatHistoryStore();
  const key = getTopicChatKey(topic);
  const history = store[key];
  return Array.isArray(history) ? history : [];
}

function setChatHistoryForTopic(topic, messages) {
  const store = readChatHistoryStore();
  const key = getTopicChatKey(topic);
  store[key] = Array.isArray(messages) ? messages : [];
  localStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(store));
}

const AIInterview = () => {
  const [activeTab, setActiveTab] = useState('practice');
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      sender: 'ai',
      text: "Hello! I'm your AI Interview Coach. Pick a topic from Your Topics or add a new one.",
      time: '10:30 AM'
    }
  ]);
  const [availableTopics, setAvailableTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [topicSelectValue, setTopicSelectValue] = useState('');
  const [customTopicInput, setCustomTopicInput] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isBatchLoading, setIsBatchLoading] = useState(false);
  const [topicQuestions, setTopicQuestionsState] = useState([]);
  const [activeQuestionIds, setActiveQuestionIds] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editingQuestionId, setEditingQuestionId] = useState(null);
  const [allowNextBatch, setAllowNextBatch] = useState(false);
  const [isReplayMode, setIsReplayMode] = useState(false);
  const [replayInitialWeakCount, setReplayInitialWeakCount] = useState(0);
  const messagesEndRef = useRef(null);
  const skipNextChatPersistRef = useRef(false);
  const voiceControllerRef = useRef(null);

  // ---- Dynamic data from store ----
  const stats = useMemo(() => getOverallStats(), [topicQuestions, availableTopics]);
  const historyData = useMemo(() => getTopicHistory(), [topicQuestions]);
  const topicPerformance = useMemo(() => getTopicPerformance(), [topicQuestions]);
  const strengthsWeaknesses = useMemo(() => getStrengthsWeaknesses(), [topicQuestions]);

  const createMessage = (sender, text, extra = {}) => ({
    id: crypto.randomUUID(),
    sender,
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    ...extra
  });

  const activeQuestions = useMemo(() => (
    activeQuestionIds
      .map(id => topicQuestions.find(item => item.id === id))
      .filter(Boolean)
  ), [activeQuestionIds, topicQuestions]);

  const currentQuestion = useMemo(() => (
    activeQuestions.find(question => !Number.isFinite(question.userRating)) || null
  ), [activeQuestions]);

  const currentQuestionIndex = useMemo(() => {
    if (!currentQuestion) {
      return -1;
    }

    return activeQuestions.findIndex(item => item.id === currentQuestion.id);
  }, [activeQuestions, currentQuestion]);

  const batchProgress = getBatchProgress(topicQuestions);
  const weakQuestions = selectedTopic ? getWeakQuestionsForTopic(selectedTopic) : [];
  const weakCount = weakQuestions.length;
  const allRated = batchProgress.completed && topicQuestions.length > 0;
  const allStrong = allRated && weakCount === 0;
  const canGetNewQuestions = allRated && (allStrong || allowNextBatch);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    return () => {
      voiceControllerRef.current?.cancel?.();
    };
  }, []);

  useEffect(() => {
    if (skipNextChatPersistRef.current) {
      skipNextChatPersistRef.current = false;
      return;
    }

    setChatHistoryForTopic(selectedTopic || '__global__', messages);
  }, [messages, selectedTopic]);

  useEffect(() => {
    const topics = getUsedTopics();
    setAvailableTopics(topics);

    if (!topics.length) {
      setTopicSelectValue(OTHER_TOPIC_VALUE);
      return;
    }

    const all = getAllQuestions();
    const latest = all.reduce((latestItem, current) => {
      if (!latestItem) {
        return current;
      }

      return current.createdAt > latestItem.createdAt ? current : latestItem;
    }, null);

    const nextTopic = latest?.topic || topics[0];
    setTopicSelectValue(nextTopic);
    handleTopicSelect(nextTopic, { allowGenerate: false, appendMessage: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshAvailableTopics = () => {
    const topics = getUsedTopics();
    setAvailableTopics(topics);
    return topics;
  };

  const syncTopicState = (topic, allQuestions) => {
    const topicKey = String(topic || '').trim().toLowerCase();
    const currentTopicQuestions = allQuestions.filter(item => item.topic.toLowerCase() === topicKey);
    setTopicQuestionsState(currentTopicQuestions);
    return currentTopicQuestions;
  };

  const publishTopicSummary = (topic, currentTopicQuestions, appendMessage = true) => {
    const progress = getBatchProgress(currentTopicQuestions);
    const weakForTopic = getWeakQuestionsForTopic(topic);
    const average = progress.ratedCount ? progress.averageRating.toFixed(1) : '0.0';

    setActiveQuestionIds([]);
    setIsReplayMode(false);

    if (!appendMessage) {
      return;
    }

    if (weakForTopic.length) {
      const weakList = weakForTopic.slice(0, 5).map(item => item.question).join(' | ');
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Summary for ${topic}: average ${average}/5 with ${weakForTopic.length} weak questions (rating < 3). Replay Continue to unlock new batch.`),
        createMessage('ai', `Weak list: ${weakList}${weakForTopic.length > 5 ? ' ...' : ''}`)
      ]);
      return;
    }

    setMessages(prev => [
      ...prev,
      createMessage('ai', `Summary for ${topic}: average ${average}/5 and all ratings are 3 or higher. You can get new questions.`)
    ]);
  };

  const setupQueueForTopic = (topic, currentTopicQuestions, appendMessage = true) => {
    const firstUnrated = currentTopicQuestions.find(item => !Number.isFinite(item.userRating));

    if (firstUnrated) {
      setIsReplayMode(false);
      setAllowNextBatch(false);
      setActiveQuestionIds(currentTopicQuestions.map(item => item.id));

      if (appendMessage) {
        const queueIndex = currentTopicQuestions.findIndex(item => item.id === firstUnrated.id);
        setMessages(prev => [
          ...prev,
          createMessage('ai', `Resuming ${topic}. Question ${queueIndex + 1}/${currentTopicQuestions.length}: ${firstUnrated.question}`)
        ]);
      }
      return;
    }

    publishTopicSummary(topic, currentTopicQuestions, appendMessage);
  };

  const handleTopicSelect = async (topicValue, options = { allowGenerate: false, appendMessage: true }) => {
    const cleanTopic = String(topicValue || '').trim();
    if (!cleanTopic || isBatchLoading) {
      return;
    }

    setIsBatchLoading(true);

    try {
      const questions = await getTopicQuestions(cleanTopic, {
        append: false,
        generateIfMissing: options.allowGenerate
      });

      if (!questions.length) {
        setMessages(prev => [
          ...prev,
          createMessage('ai', `No saved data found for ${cleanTopic}. Choose Add new topic to create a fresh batch.`)
        ]);
        setSelectedTopic(cleanTopic);
        setTopicQuestionsState([]);
        setActiveQuestionIds([]);
        setAllowNextBatch(false);
        return;
      }

      const storedLabel = getStoredTopicLabel(cleanTopic);
      setSelectedTopic(storedLabel);
      setTopicSelectValue(storedLabel);
      setEditingQuestionId(null);
      setReplayInitialWeakCount(0);
      setAllowNextBatch(false);

      const savedTopicMessages = getChatHistoryForTopic(storedLabel);
      const hasSavedTopicMessages = savedTopicMessages.length > 0;
      skipNextChatPersistRef.current = true;
      setMessages(hasSavedTopicMessages ? savedTopicMessages : [
        createMessage('ai', `Topic ${storedLabel} selected. Let's continue your practice.`)
      ]);

      const updatedTopics = refreshAvailableTopics();
      if (!updatedTopics.includes(storedLabel)) {
        setAvailableTopics(updatedTopics);
      }

      const currentTopicQuestions = syncTopicState(storedLabel, getAllQuestions());
      setupQueueForTopic(storedLabel, currentTopicQuestions, hasSavedTopicMessages ? false : options.appendMessage);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Could not load topic questions. ${errorMessage}`)
      ]);
    } finally {
      setIsBatchLoading(false);
    }
  };

  const handleTopicDropdownChange = async (event) => {
    const value = event.target.value;
    setTopicSelectValue(value);

    if (value === OTHER_TOPIC_VALUE) {
      return;
    }

    await handleTopicSelect(value, { allowGenerate: false, appendMessage: true });
  };

  const handleCustomTopicSubmit = async () => {
    const cleanTopic = customTopicInput.trim();
    if (!cleanTopic) {
      return;
    }

    addUsedTopic(cleanTopic);
    refreshAvailableTopics();
    setTopicSelectValue(cleanTopic);
    await handleTopicSelect(cleanTopic, { allowGenerate: true, appendMessage: true });
    setCustomTopicInput('');
  };

  const handleGetNewQuestions = async ({ forceUnlock = false } = {}) => {
    if (!selectedTopic) {
      return;
    }

    if (!canGetNewQuestions && !forceUnlock) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'Get new questions is locked until all current questions are rated and weak ones are improved (or you use Continue anyway).')
      ]);
      return;
    }

    setIsBatchLoading(true);

    try {
      const updatedBatch = await getTopicQuestions(selectedTopic, {
        append: true,
        generateIfMissing: true
      });

      setAllowNextBatch(false);
      setIsReplayMode(false);
      setEditingQuestionId(null);

      const currentTopicQuestions = syncTopicState(selectedTopic, getAllQuestions());
      const newQuestion = currentTopicQuestions.find(item => !Number.isFinite(item.userRating));

      if (newQuestion) {
        setActiveQuestionIds(currentTopicQuestions.map(item => item.id));
        const newIndex = currentTopicQuestions.findIndex(item => item.id === newQuestion.id);
        setMessages(prev => [
          ...prev,
          createMessage('ai', `Added 10 new questions to ${selectedTopic}. Resuming at question ${newIndex + 1}/${updatedBatch.length}: ${newQuestion.question}`)
        ]);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Could not append a new batch. ${errorMessage}`)
      ]);
    } finally {
      setIsBatchLoading(false);
    }
  };

  const handleContinueAnyway = () => {
    setAllowNextBatch(true);
    setMessages(prev => [
      ...prev,
      createMessage('ai', 'Continue anyway enabled. You may now request a new batch without finishing weak replay.')
    ]);
  };

  const handleStartReplay = () => {
    if (!selectedTopic) {
      return;
    }

    const weakForTopic = getWeakQuestionsForTopic(selectedTopic);
    if (!weakForTopic.length) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'No weak questions found for replay.')
      ]);
      return;
    }

    const weakIds = weakForTopic.map(item => item.id);
    const resetBatch = topicQuestions.map(question => (
      weakIds.includes(question.id)
        ? {
            ...question,
            userAnswer: '',
            userRating: undefined
          }
        : question
    ));

    setTopicQuestions(selectedTopic, resetBatch);
    const refreshed = syncTopicState(selectedTopic, getAllQuestions());

    setIsReplayMode(true);
    setReplayInitialWeakCount(weakForTopic.length);
    setAllowNextBatch(false);
    setEditingQuestionId(null);
    setActiveQuestionIds(weakIds);

    const firstReplayQuestion = refreshed.find(item => item.id === weakIds[0]);
    setMessages(prev => [
      ...prev,
      createMessage('ai', `Replay mode started. Re-answering question 1 of ${weakForTopic.length}: ${firstReplayQuestion?.question || ''}`)
    ]);
  };

  const handleSendMessage = async () => {
    const trimmedInput = inputText.trim();
    if (!trimmedInput || isBatchLoading) return;

    const userMessage = createMessage('user', trimmedInput);
    const normalizedInput = trimmedInput.toLowerCase();
    const isContinueCommand = normalizedInput === 'continue' || normalizedInput === 'continue anyway';

    if (!selectedTopic || !topicQuestions.length) {
      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', 'Select a topic first.')
      ]);
      setInputText('');
      return;
    }

    if (isContinueCommand && !currentQuestion) {
      if (!batchProgress.completed) {
        setMessages(prev => [
          ...prev,
          userMessage,
          createMessage('ai', 'Please complete and rate all current questions first.')
        ]);
        setInputText('');
        return;
      }

      if (batchProgress.averageRating <= 3) {
        setMessages(prev => [
          ...prev,
          userMessage,
          createMessage('ai', `Current average is ${batchProgress.averageRating.toFixed(1)}/5. Reach above 3.0 to unlock the next 10 questions from chat.`)
        ]);
        setInputText('');
        return;
      }

      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', `Great work. Average is ${batchProgress.averageRating.toFixed(1)}/5. Fetching your next 10 questions now...`)
      ]);
      setInputText('');
      await handleGetNewQuestions({ forceUnlock: true });
      return;
    }

    if (!currentQuestion) {
      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', 'No active question. Start replay or get new questions.')
      ]);
      setInputText('');
      return;
    }

    const isWaitingForRating = Boolean(
      currentQuestion.userAnswer?.trim() && !Number.isFinite(currentQuestion.userRating)
    );

    if (isWaitingForRating) {
      if (editingQuestionId === currentQuestion.id) {
        const updatedAll = updateQuestionEntry(currentQuestion.id, {
          userAnswer: trimmedInput,
          userRating: undefined
        });

        syncTopicState(selectedTopic, updatedAll);
        setEditingQuestionId(null);
        setMessages(prev => [
          ...prev,
          userMessage,
          createMessage('ai', `Concept: ${currentQuestion.concept}`),
          createMessage('ai', 'Answer updated. Please select rating 1 to 5 below, or reply with 1-5 in chat.')
        ]);
        setInputText('');
        return;
      }

      if (/^[1-5]$/.test(trimmedInput)) {
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        handleRateQuestion(Number(trimmedInput));
        return;
      }

      setMessages(prev => [
        ...prev,
        userMessage,
        createMessage('ai', 'Please rate this answer first. Click 1-5 below, reply with 1-5, or click Retry Answer to edit and resubmit.')
      ]);
      setInputText('');
      return;
    }

    const updatedAll = updateQuestionEntry(currentQuestion.id, { userAnswer: trimmedInput });
    syncTopicState(selectedTopic, updatedAll);
    setEditingQuestionId(null);

    setMessages(prev => [
      ...prev,
      userMessage,
      createMessage('ai', `Concept: ${currentQuestion.concept}`),
      createMessage('ai', 'Now rate your answer from 1 to 5 above, or reply with 1-5 in chat.')
    ]);
    setInputText('');
  };

  const handleRetryAnswer = () => {
    if (!currentQuestion || !currentQuestion.userAnswer?.trim() || Number.isFinite(currentQuestion.userRating)) {
      return;
    }

    setEditingQuestionId(currentQuestion.id);
    setInputText(currentQuestion.userAnswer);
    setMessages(prev => [
      ...prev,
      createMessage('ai', 'Edit your answer and press Send to resubmit before rating.')
    ]);
  };

  const handleRateQuestion = (rating) => {
    if (!currentQuestion || !currentQuestion.userAnswer?.trim()) {
      return;
    }

    const updatedAll = updateQuestionEntry(currentQuestion.id, { userRating: rating });
    const updatedTopicQuestions = syncTopicState(selectedTopic, updatedAll);

    const nextInQueue = activeQuestionIds
      .map(id => updatedTopicQuestions.find(item => item.id === id))
      .find(item => item && !Number.isFinite(item.userRating));

    if (nextInQueue) {
      const queueIndex = activeQuestionIds.findIndex(id => id === nextInQueue.id);
      if (isReplayMode) {
        setMessages(prev => [
          ...prev,
          createMessage('ai', `Rating saved (${rating}/5). \nRe-answering question ${queueIndex + 1} of ${activeQuestionIds.length}: ${nextInQueue.question}`)
        ]);
      } else {
        const fullIndex = updatedTopicQuestions.findIndex(item => item.id === nextInQueue.id);
        setMessages(prev => [
          ...prev,
          createMessage('ai', `Rating saved (${rating}/5). \nNext question ${fullIndex + 1}/${updatedTopicQuestions.length}: ${nextInQueue.question}`)
        ]);
      }
      return;
    }

    const updatedProgress = getBatchProgress(updatedTopicQuestions);
    const updatedWeakQuestions = getWeakQuestionsForTopic(selectedTopic);
    const average = updatedProgress.averageRating.toFixed(1);

    if (isReplayMode) {
      const improved = Math.max(replayInitialWeakCount - updatedWeakQuestions.length, 0);

      setIsReplayMode(false);
      setActiveQuestionIds([]);

      if (!updatedWeakQuestions.length) {
        setAllowNextBatch(true);
        setMessages(prev => [
          ...prev,
          createMessage('ai', `You improved ${improved} weak questions! New average: ${average}/5.`)
        ]);
        return;
      }

      setAllowNextBatch(false);
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Replay complete. You improved ${improved} weak questions. New average: ${average}/5. Remaining weak: ${updatedWeakQuestions.length}.`)
      ]);
      return;
    }

    if (updatedProgress.completed && updatedWeakQuestions.length) {
      setAllowNextBatch(false);
      setActiveQuestionIds([]);
      setMessages(prev => [
        ...prev,
        createMessage('ai', `All questions are rated. Weak questions (<3): ${updatedWeakQuestions.length}. Replay them to unlock new batch or Continue anyway.`)
      ]);
      return;
    }

    if (updatedProgress.completed && !updatedWeakQuestions.length) {
      setAllowNextBatch(true);
      setActiveQuestionIds([]);
      setMessages(prev => [
        ...prev,
        createMessage('ai', `Great work. All ratings are 3 or higher with average ${average}/5. You can get new questions.`)
      ]);
    }
  };

  const handleAnswerKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleCustomTopicKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleCustomTopicSubmit();
    }
  };

  const handleToggleRecording = async () => {
    if (isRecording) {
      voiceControllerRef.current?.cancel?.();
      voiceControllerRef.current = null;
      setIsRecording(false);
      return;
    }

    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      setMessages(prev => [
        ...prev,
        createMessage('ai', 'Speech recognition is not supported in this browser. Please use Chrome or Edge.')
      ]);
      return;
    }

    setIsRecording(true);
    // setMessages(prev => [
    //   ...prev,
    //   createMessage('ai', 'Listening… Speak now and your words will appear in the answer box.')
    // ]);

    try {
      const controller = startListening({ timeoutMs: 30000 });
      voiceControllerRef.current = controller;
      const transcript = await controller.promise;

      const cleanTranscript = transcript?.trim();
      if (!cleanTranscript) {
        setMessages(prev => [
          ...prev,
          createMessage('ai', 'No speech detected. Please try again.')
        ]);
        return;
      }

      setInputText(prev => (prev ? `${prev} ${cleanTranscript}`.trim() : cleanTranscript));
      // setMessages(prev => [
      //   ...prev,
      //   createMessage('ai', `Voice input captured: "${cleanTranscript}"`)
      // ]);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to capture voice input.';
      const isTimeoutError = typeof message === 'string' && message.toLowerCase().includes('timed out');
      setMessages(prev => [
        ...prev,
        createMessage(
          'ai',
          isTimeoutError
            ? 'Listening timed out. Tap the mic and start speaking right away, or type your answer in the box.'
            : message
        )
      ]);
    } finally {
      voiceControllerRef.current = null;
      setIsRecording(false);
    }
  };

  return (
    <div className="ai-interview">
      <main className="main-content">
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">AI Interview Coach</h1>
            <p className="page-subtitle">Resume by topic, replay weak questions, append new batches</p>
          </div>
          <div className="header-right">
            <span className="badge">{stats.sessions} sessions</span>
          </div>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-info">
              <span className="stat-value">{stats.sessions}</span>
              <span className="stat-label">Sessions Completed</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <div className="stat-info">
              <span className="stat-value">{stats.avgScore}%</span>
              <span className="stat-label">Average Score</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-info">
              <span className="stat-value">{stats.questionsAnswered}</span>
              <span className="stat-label">Questions Answered</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <div className="stat-info">
              <span className="stat-value">{stats.streak}</span>
              <span className="stat-label">Day Streak</span>
            </div>
          </div>
        </section>

        <div className="tabs">
          <button className={`tab-btn ${activeTab === 'practice' ? 'active' : ''}`} onClick={() => setActiveTab('practice')}>
            Practice
          </button>
          <button className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`} onClick={() => setActiveTab('history')}>
            History
          </button>
          <button className={`tab-btn ${activeTab === 'performance' ? 'active' : ''}`} onClick={() => setActiveTab('performance')}>
            Performance
          </button>
        </div>

        {activeTab === 'practice' && (
          <div className="tab-content">
            <div className="practice-controls">
              <div className="mode-selector">
                <label>Your Topics</label>
                <div className="topic-selector-row">
                  <select
                    className="topic-select"
                    value={topicSelectValue}
                    onChange={handleTopicDropdownChange}
                    disabled={isBatchLoading}
                  >
                    {availableTopics.length === 0 && <option value="">No topics yet</option>}
                    {availableTopics.map(topic => (
                      <option key={topic} value={topic}>{topic}</option>
                    ))}
                    <option value={OTHER_TOPIC_VALUE}>➕ Add new topic...</option>
                  </select>

                  <button
                    className="btn btn-primary btn-small"
                    onClick={handleGetNewQuestions}
                    disabled={isBatchLoading || !selectedTopic || !canGetNewQuestions}
                  >
                    Get New Questions
                  </button>
                </div>

                {topicSelectValue === OTHER_TOPIC_VALUE && (
                  <div className="topic-selector-row topic-custom-row">
                    <input
                      type="text"
                      className="topic-select"
                      placeholder="Type a new topic"
                      value={customTopicInput}
                      onChange={(event) => setCustomTopicInput(event.target.value)}
                      onKeyPress={handleCustomTopicKeyPress}
                      disabled={isBatchLoading}
                    />
                    <button
                      className="btn btn-primary btn-small"
                      onClick={handleCustomTopicSubmit}
                      disabled={isBatchLoading || !customTopicInput.trim()}
                    >
                      Add / Start
                    </button>
                  </div>
                )}
              </div>

              <div className="role-selector">
                <label>Progress</label>
                <div className="practice-status">
                  <span>Topic: {selectedTopic || 'None selected'}</span>
                  <span>Answered: {batchProgress.answeredCount}/{topicQuestions.length || 0}</span>
                  <span>Rated: {batchProgress.ratedCount}/{topicQuestions.length || 0}</span>
                  <span>Average: {batchProgress.ratedCount ? batchProgress.averageRating.toFixed(1) : '0.0'}/5</span>
                </div>

                {allRated && weakCount > 0 && !isReplayMode && (
                  <button className="btn btn-primary btn-small replay-btn" onClick={handleStartReplay}>
                    Replay Weak Questions ({weakCount})
                  </button>
                )}

                {allRated && weakCount > 0 && !allowNextBatch && !isReplayMode && (
                  <button className="btn btn-outline btn-small" onClick={handleContinueAnyway}>
                    Continue Anyway
                  </button>
                )}
              </div>
            </div>

            {!currentQuestion && allRated && selectedTopic && (
              <div className="current-question-card">
                <div className="question-meta">Summary for {selectedTopic}</div>
                <div className="question-title">Average rating: {batchProgress.averageRating.toFixed(1)}/5</div>
                <div className="action-row">
                  <span className="weak-pill">Weak questions: {weakCount}</span>
                  {weakCount > 0 && (
                    <button className="btn btn-primary btn-small replay-btn" onClick={handleStartReplay}>
                      Replay Weak Questions
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentQuestion && (
              <div className="current-question-card">
                <div className="question-meta">
                  Current topic: {currentQuestion.topic}
                  {isReplayMode ? ' • Replay mode' : ''}
                  {isReplayMode
                    ? ` • Re-answering question ${currentQuestionIndex + 1} of ${activeQuestionIds.length}`
                    : ` • Question ${topicQuestions.findIndex(item => item.id === currentQuestion.id) + 1}/${topicQuestions.length}`}
                </div>
                {isReplayMode && <span className="replay-badge">Replay mode</span>}
                <div className="question-title">{currentQuestion.question}</div>
                {currentQuestion.userAnswer?.trim() && (
                  <div className="concept-auto-reveal">
                    <strong>Concept:</strong> {currentQuestion.concept}
                  </div>
                )}
                <div className="action-row">
                  {currentQuestion.userAnswer?.trim() && !Number.isFinite(currentQuestion.userRating) && (
                    <button className="btn btn-outline btn-small" onClick={handleRetryAnswer}>
                      Retry Answer
                    </button>
                  )}
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

            <div className="chat-container">
              <div className="chat-header">
                <span className="chat-status">{isBatchLoading ? 'Loading topic...' : 'Local practice active'}</span>
                <span className="chat-mode">
                  {selectedTopic || 'No topic'} • {isReplayMode ? `Replay ${currentQuestionIndex + 1}/${activeQuestionIds.length}` : `${batchProgress.ratedCount}/${topicQuestions.length || 0} rated`}
                </span>
              </div>

              <div className="chat-messages">
                {messages.map(msg => (
                  <div key={msg.id} className={`message ${msg.sender === 'ai' ? 'ai' : 'user'}`}>
                    <div className="message-avatar">{msg.sender === 'ai' ? '🤖' : '👤'}</div>
                    <div className="message-content-wrapper">
                      <div className="message-content">
                        <div className="message-text">{msg.text}</div>
                        {msg.feedback && (
                          <div className="message-feedback">
                            <span className="feedback-label">Feedback:</span>
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
                    placeholder={
                      editingQuestionId === currentQuestion?.id
                        ? 'Edit your answer and press Send...'
                        : (isReplayMode ? 'Type your improved answer for this weak question...' : 'Type your answer for the current question...')
                    }
                    value={inputText}
                    onChange={(event) => setInputText(event.target.value)}
                    onKeyPress={handleAnswerKeyPress}
                    disabled={isBatchLoading}
                  />
                  <button
                    className={`voice-btn ${isRecording ? 'recording' : ''}`}
                    onClick={handleToggleRecording}
                    title={isRecording ? 'Stop recording' : 'Start voice recording'}
                    disabled={isBatchLoading}
                  >
                    {isRecording ? '■' : '🎤'}
                  </button>
                  <button className="send-btn" onClick={handleSendMessage} disabled={!inputText.trim() || isBatchLoading}>
                    Send
                  </button>
                </div>
                <div className="chat-tips">
                  Selecting a saved topic resumes where you left off. Add new topics for fresh generation.
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="tab-content">
            <div className="history-container">
              <h3>Interview History</h3>
              <p>Review your past interview practice sessions</p>
              <div className="history-list">
                {historyData.length === 0 ? (
                  <p>No practice sessions yet. Start a new topic!</p>
                ) : (
                  historyData.map((item, index) => (
                    <div key={index} className="history-item">
                      <div className="history-date">{item.date}</div>
                      <div className="history-role">{item.role}</div>
                      <div className="history-score">
                        <span className="score-value">{item.score}%</span>
                        <span className="score-label">Score</span>
                      </div>
                      <div className="history-duration">{item.duration}</div>
                      <button
                        className="btn btn-outline btn-small"
                        onClick={() => {
                          // Load the topic when "Review" is clicked
                          handleTopicSelect(item.topic, { allowGenerate: false, appendMessage: true });
                          setActiveTab('practice');
                        }}
                      >
                        Review
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="tab-content">
            <div className="performance-container">
              <div className="performance-grid">
                <div className="performance-card">
                  <h4>Topic Performance</h4>
                  {topicPerformance.length === 0 ? (
                    <p>No topics practiced yet.</p>
                  ) : (
                    topicPerformance.map((item, idx) => (
                      <div className="skill-bar" key={idx}>
                        <span>{item.label}</span>
                        <div className="bar-track">
                          <div className="bar-fill" style={{ width: `${item.score}%` }}></div>
                        </div>
                        <span className="bar-score">{item.score}%</span>
                      </div>
                    ))
                  )}
                </div>

                <div className="performance-card">
                  <h4>Progress Over Time</h4>
                  <div className="chart-placeholder">
                    <div className="chart-bar-container">
                      {topicPerformance.length > 0 ? (
                        topicPerformance.slice(0, 5).map((item, idx) => (
                          <div key={idx} className="chart-bar" style={{ height: `${Math.max(item.score, 10)}%` }}>
                            {item.score}%
                          </div>
                        ))
                      ) : (
                        <div className="chart-bar" style={{ height: '30%' }}>0%</div>
                      )}
                    </div>
                    <div className="chart-labels">
                      {topicPerformance.length > 0 ? (
                        topicPerformance.slice(0, 5).map((item, idx) => (
                          <span key={idx}>{item.label.slice(0, 8)}</span>
                        ))
                      ) : (
                        <span>No data</span>
                      )}
                    </div>
                    <p className="chart-note">Your scores are improving. Keep practicing.</p>
                  </div>
                </div>

                <div className="performance-card full-width">
                  <h4>Strengths & Areas for Improvement</h4>
                  <div className="strengths-grid">
                    <div className="strength-area">
                      <span className="strength-icon">✅</span>
                      <div>
                        <strong>Strengths</strong>
                        <ul>
                          {strengthsWeaknesses.strengths.length > 0 ? (
                            strengthsWeaknesses.strengths.map((s, i) => <li key={i}>{s}</li>)
                          ) : (
                            <li>Keep practicing to identify strengths.</li>
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="improvement-area">
                      <span className="strength-icon">📈</span>
                      <div>
                        <strong>Areas to Improve</strong>
                        <ul>
                          {strengthsWeaknesses.weaknesses.length > 0 ? (
                            strengthsWeaknesses.weaknesses.map((w, i) => <li key={i}>{w}</li>)
                          ) : (
                            <li>Great job! No weak topics identified.</li>
                          )}
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