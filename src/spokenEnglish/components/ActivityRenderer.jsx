import React, { useEffect, useRef, useState } from 'react';
import { startListening } from '../services/speechService';
import { isValidAnswer } from '../utils/helpers';

const SPEECH_TYPES = ['listen_repeat', 'read_aloud', 'spell_word', 'revision', 'challenge_question'];

const ActivityRenderer = ({ activity, onComplete, onError }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [speechError, setSpeechError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);
  const [listeningProgress, setListeningProgress] = useState(0);
  const [autoSpeakEnabled, setAutoSpeakEnabled] = useState(true);
  const [autoSpeakProgress, setAutoSpeakProgress] = useState(0);
  const [autoSpeakStatus, setAutoSpeakStatus] = useState('idle');
  const listeningSessionRef = useRef(null);
  const listeningSessionIdRef = useRef(0);
  const listeningProgressTimerRef = useRef(null);
  const completionTimerRef = useRef(null);
  const lastAutoSpokenActivityRef = useRef(null);
  const autoSpeakVoicesTimerRef = useRef(null);
  const autoSpeakProgressTimerRef = useRef(null);
  const autoListenTimerRef = useRef(null);
  const maxAttempts = 3;
  const isSpeechTypeActivity = SPEECH_TYPES.includes(activity.type);
  const activityAutoSpeakKey = `${activity.type || 'unknown'}|${activity.id ?? 'no-id'}|${activity.content || ''}|${activity.instruction || ''}`;

  useEffect(() => {
    return () => {
      listeningSessionRef.current?.cancel?.();
      if (listeningProgressTimerRef.current) {
        window.clearInterval(listeningProgressTimerRef.current);
      }
      if (completionTimerRef.current) {
        window.clearTimeout(completionTimerRef.current);
      }
      if (autoSpeakVoicesTimerRef.current) {
        window.clearTimeout(autoSpeakVoicesTimerRef.current);
      }
      if (autoSpeakProgressTimerRef.current) {
        window.clearInterval(autoSpeakProgressTimerRef.current);
      }
      if (autoListenTimerRef.current) {
        window.clearTimeout(autoListenTimerRef.current);
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
    };
  }, []);

  const stopListeningProgress = () => {
    if (listeningProgressTimerRef.current) {
      window.clearInterval(listeningProgressTimerRef.current);
      listeningProgressTimerRef.current = null;
    }
  };

  const startListeningProgress = () => {
    stopListeningProgress();
    setListeningProgress(1);
    listeningProgressTimerRef.current = window.setInterval(() => {
      setListeningProgress((currentProgress) => {
        if (currentProgress >= 94) {
          return currentProgress;
        }

        const nextProgress = currentProgress < 30 ? currentProgress + 8 : currentProgress < 60 ? currentProgress + 5 : currentProgress + 2;
        return Math.min(94, nextProgress);
      });
    }, 260);
  };

  const stopAutoSpeakProgress = () => {
    if (autoSpeakProgressTimerRef.current) {
      window.clearInterval(autoSpeakProgressTimerRef.current);
      autoSpeakProgressTimerRef.current = null;
    }
  };

  const startAutoSpeakProgress = () => {
    stopAutoSpeakProgress();
    setAutoSpeakProgress(3);
    setAutoSpeakStatus('loading');
    autoSpeakProgressTimerRef.current = window.setInterval(() => {
      setAutoSpeakProgress((currentProgress) => {
        if (currentProgress >= 95) {
          return currentProgress;
        }

        const nextProgress = currentProgress < 40 ? currentProgress + 10 : currentProgress < 75 ? currentProgress + 5 : currentProgress + 2;
        return Math.min(95, nextProgress);
      });
    }, 220);
  };

  const resetActivity = () => {
    listeningSessionIdRef.current += 1;
    listeningSessionRef.current?.cancel?.();
    listeningSessionRef.current = null;
    stopListeningProgress();
    if (completionTimerRef.current) {
      window.clearTimeout(completionTimerRef.current);
      completionTimerRef.current = null;
    }
    stopAutoSpeakProgress();
    if (autoSpeakVoicesTimerRef.current) {
      window.clearTimeout(autoSpeakVoicesTimerRef.current);
      autoSpeakVoicesTimerRef.current = null;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.onvoiceschanged = null;
    }
    if (autoListenTimerRef.current) {
      window.clearTimeout(autoListenTimerRef.current);
      autoListenTimerRef.current = null;
    }
    setAutoSpeakProgress(0);
    setAutoSpeakStatus(autoSpeakEnabled ? 'idle' : 'off');
    setListeningProgress(0);
    setUserAnswer('');
    setIsListening(false);
    setIsSpeaking(false);
    setFeedback('');
    setAttempts(0);
    setIsCorrect(false);
    setSpeechError(null);
    setShowFallback(false);
  };

  // ----- Text-to-Speech -----
  const handleSpeakText = ({ isAuto = false, retryCount = 0 } = {}) => {
    const textToSpeak = (activity.content || activity.instruction || '').trim();

    if (!textToSpeak) {
      setFeedback('No text available to read aloud for this activity.');
      if (isAuto) {
        stopAutoSpeakProgress();
        setAutoSpeakProgress(0);
        setAutoSpeakStatus('error');
      }
      return;
    }

    if (!window.speechSynthesis) {
      setFeedback('Text-to-speech is not supported in this browser.');
      if (isAuto) {
        stopAutoSpeakProgress();
        setAutoSpeakProgress(0);
        setAutoSpeakStatus('error');
      }
      return;
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // slightly slower for learners
    utterance.pitch = 1;
    utterance.volume = 1;

    let started = false;
    const startGuard = window.setTimeout(() => {
      if (!started && retryCount < 1) {
        handleSpeakText({ isAuto, retryCount: retryCount + 1 });
      } else if (!started) {
        setIsSpeaking(false);
        if (isAuto) {
          stopAutoSpeakProgress();
          setAutoSpeakProgress(0);
          setAutoSpeakStatus('error');
        }
        if (isAuto) {
          setFeedback('🔈 Auto speak could not start. Use Listen to try again.');
        } else {
          setFeedback('Could not start audio. Please try again.');
        }
      }
    }, 1200);

    setIsSpeaking(true);
    utterance.onstart = () => {
      started = true;
      window.clearTimeout(startGuard);
      if (isAuto) {
        stopAutoSpeakProgress();
        setAutoSpeakProgress(100);
        setAutoSpeakStatus('speaking');
      }
    };
    utterance.onend = () => {
      window.clearTimeout(startGuard);
      setIsSpeaking(false);
      setFeedback('🔊 Done listening.');
      if (isAuto) {
        setAutoSpeakStatus('done');
        stopAutoSpeakProgress();
        setAutoSpeakProgress(100);
        if (autoListenTimerRef.current) {
          window.clearTimeout(autoListenTimerRef.current);
        }
        autoListenTimerRef.current = window.setTimeout(() => {
          autoListenTimerRef.current = null;
          if (!isCorrect && autoSpeakEnabled) {
            handleSpeak();
          }
        }, 300);
      }
    };
    utterance.onerror = (event) => {
      window.clearTimeout(startGuard);
      setIsSpeaking(false);
      setFeedback(`Error speaking: ${event.error}`);
      if (isAuto) {
        stopAutoSpeakProgress();
        setAutoSpeakProgress(0);
        setAutoSpeakStatus('error');
        if (autoListenTimerRef.current) {
          window.clearTimeout(autoListenTimerRef.current);
          autoListenTimerRef.current = null;
        }
      }
    };
    window.speechSynthesis.speak(utterance);
    setFeedback(isAuto ? '🔊 Auto speaking...' : '🔊 Listening...');
  };

  useEffect(() => {
    if (!autoSpeakEnabled || !isSpeechTypeActivity || !activity?.content) {
      return;
    }

    if (lastAutoSpokenActivityRef.current === activityAutoSpeakKey) {
      return;
    }

    let didTriggerSpeak = false;
    const triggerAutoSpeak = () => {
      startAutoSpeakProgress();
      autoSpeakVoicesTimerRef.current = window.setTimeout(() => {
        didTriggerSpeak = true;
        lastAutoSpokenActivityRef.current = activityAutoSpeakKey;
        handleSpeakText({ isAuto: true });
      }, 250);
    };

    const voiceCount = window.speechSynthesis ? window.speechSynthesis.getVoices().length : 0;
    if (voiceCount === 0 && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        triggerAutoSpeak();
      };
      triggerAutoSpeak();
    } else {
      triggerAutoSpeak();
    }

    return () => {
      if (autoSpeakVoicesTimerRef.current) {
        window.clearTimeout(autoSpeakVoicesTimerRef.current);
        autoSpeakVoicesTimerRef.current = null;
      }
      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = null;
      }
      if (!didTriggerSpeak) {
        stopAutoSpeakProgress();
        setAutoSpeakProgress(0);
        setAutoSpeakStatus('idle');
      }
    };
  }, [activityAutoSpeakKey, autoSpeakEnabled, isSpeechTypeActivity]);

  const handleAutoSpeakToggle = () => {
    setAutoSpeakEnabled((prev) => {
      const next = !prev;
      if (next && isSpeechTypeActivity && activity?.content) {
        setAutoSpeakStatus('loading');
        lastAutoSpokenActivityRef.current = activityAutoSpeakKey;
        window.setTimeout(() => {
          startAutoSpeakProgress();
          handleSpeakText({ isAuto: true });
        }, 120);
      } else if (!next) {
        stopAutoSpeakProgress();
        if (window.speechSynthesis) {
          window.speechSynthesis.cancel();
        }
        if (autoListenTimerRef.current) {
          window.clearTimeout(autoListenTimerRef.current);
          autoListenTimerRef.current = null;
        }
        setAutoSpeakProgress(0);
        setAutoSpeakStatus('off');
      }
      return next;
    });
  };

  // ----- Speech-to-Text (listening) -----
  const handleSpeak = async () => {
    setSpeechError(null);
    setShowFallback(false);
    setIsListening(true);
    setFeedback('Listening...');
    startListeningProgress();

    const sessionId = listeningSessionIdRef.current + 1;
    listeningSessionIdRef.current = sessionId;

    const listeningSession = startListening({ timeoutMs: 20000 });
    listeningSessionRef.current = listeningSession;

    try {
      const transcript = await listeningSession.promise;

      if (listeningSessionIdRef.current !== sessionId) {
        return;
      }

      stopListeningProgress();
      setListeningProgress(100);
      setUserAnswer(transcript);
      setFeedback(`You said: "${transcript}"`);
      checkAnswer(transcript);
    } catch (err) {
      if (listeningSessionIdRef.current !== sessionId) {
        return;
      }

      stopListeningProgress();
      setListeningProgress(0);
      const capturedText = typeof err.capturedText === 'string' ? err.capturedText.trim() : '';
      setSpeechError(err.message);
      if (capturedText) {
        setUserAnswer(capturedText);
      }
      setFeedback(
        capturedText
          ? `❌ ${err.message} Captured text: "${capturedText}"`
          : `❌ ${err.message}`
      );
      if (
        err.message.includes('not supported') ||
        err.message.includes('denied') ||
        err.message.includes('No speech detected') ||
        err.message.includes('timed out')
      ) {
        setShowFallback(true);
      }
      onError && onError(err);
    } finally {
      if (listeningSessionIdRef.current === sessionId) {
        setIsListening(false);
        listeningSessionRef.current = null;
      }
    }
  };

  // ----- Text input -----
  const handleTextChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isCorrect) {
      e.preventDefault();
      handleSubmitText();
    }
  };

  const handleSubmitText = () => {
    if (userAnswer.trim()) {
      checkAnswer(userAnswer);
    }
  };

  // ----- Core validation -----
  const scheduleCompletion = (callback, delay) => {
    if (completionTimerRef.current) {
      window.clearTimeout(completionTimerRef.current);
    }

    completionTimerRef.current = window.setTimeout(() => {
      completionTimerRef.current = null;
      callback();
    }, delay);
  };

  const checkAnswer = (spoken) => {
    const expected = activity.expectedAnswers || [];
    if (expected.length === 0) {
      setFeedback('No expected answers defined. Skipping.');
      setIsCorrect(true);
      scheduleCompletion(() => {
        onComplete(true, spoken);
      }, 1000);
      return;
    }

    if (isValidAnswer(spoken, expected)) {
      setFeedback('✅ Correct!');
      setIsCorrect(true);
      scheduleCompletion(() => {
        onComplete(true, spoken);
      }, 1000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= maxAttempts) {
        setFeedback(`❌ Incorrect. You said: "${spoken}". The correct answer is: ${expected[0]}`);
        setIsCorrect(true);
        scheduleCompletion(() => {
          onComplete(false, spoken);
        }, 2000);
      } else {
        setFeedback(`❌ Not quite. You said: "${spoken}". Try again (${newAttempts}/${maxAttempts})`);
        setUserAnswer('');
      }
    }
  };

  // ----- Render helpers -----
  const renderImage = () => {
    if (activity.image) {
      return (
        <div className="text-center mb-3">
          <img
            src={activity.image}
            alt="Activity illustration"
            className="img-fluid rounded"
            style={{ maxHeight: '200px', objectFit: 'contain' }}
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      );
    }
    return null;
  };

  // ----- Render content -----
  const renderContent = () => {
    const isSpeechType = SPEECH_TYPES.includes(activity.type);
    const shouldShowFallback = (isSpeechType && showFallback) || (isSpeechType && speechError);

    const renderInteraction = () => {
      switch (activity.type) {
        case 'listen_repeat':
        case 'read_aloud':
        case 'spell_word':
        case 'revision':
        case 'challenge_question':
          return (
            <div>
              <p><strong>{activity.type === 'listen_repeat' ? 'Listen and repeat' :
                         activity.type === 'read_aloud' ? 'Read aloud' :
                         activity.type === 'spell_word' ? 'Spell the word' :
                         activity.type === 'revision' ? 'Revision' : 'Challenge'}</strong></p>
              <p className="lead">{activity.content}</p>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <button className="btn btn-outline-info" 
                onClick={handleSpeakText} disabled={isSpeaking || isCorrect}>
                  {isSpeaking ? '🔊 Speaking...' : '🔊 Listen'}
                </button>
                <button
                  className={`btn ${autoSpeakEnabled ? 'btn-success text-white' : 'btn-outline-secondary'}`}
                  style={{backgroundColor: 'green'}}
                  onClick={handleAutoSpeakToggle}
                  disabled={isCorrect}
                >
                  {autoSpeakEnabled ? (
                    <>
                      <span className="spinner-grow spinner-grow-sm me-2"
                       aria-hidden="true"></span>
                      Auto Speak: ON
                    </>
                  ) : (
                    'Auto Speak: OFF'
                  )}
                </button>
                <button className="btn btn-primary" onClick={handleSpeak} disabled={isListening || isCorrect}>
                  {isListening ? `🎤 Listening ${listeningProgress}%` : '🎤 Speak'}
                </button>
                <button className="btn btn-outline-secondary" onClick={resetActivity}>
                  ↻ Refresh
                </button>
              </div>
              {autoSpeakEnabled && (
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <small className="text-muted">
                      Auto Speak: {autoSpeakStatus === 'loading' ? 'Loading...' : autoSpeakStatus === 'speaking' ? 'Speaking' : autoSpeakStatus === 'done' ? 'Completed' : autoSpeakStatus === 'error' ? 'Stopped' : 'Ready'}
                    </small>
                    <small className="fw-semibold">{autoSpeakProgress}%</small>
                  </div>
                  <div className="progress" role="progressbar" aria-valuenow={autoSpeakProgress} aria-valuemin="0" aria-valuemax="100">
                    <div
                      className={`progress-bar ${autoSpeakStatus === 'loading' || autoSpeakStatus === 'speaking' ? 'progress-bar-striped progress-bar-animated' : ''} ${autoSpeakStatus === 'error' ? 'bg-danger' : 'bg-success'}`}
                      style={{ width: `${autoSpeakProgress}%` }}
                    >
                      {autoSpeakProgress}%
                    </div>
                  </div>
                </div>
              )}
              {isListening && (
                <div className="mt-3">
                  <div className="progress" role="progressbar" aria-valuenow={listeningProgress} aria-valuemin="0" aria-valuemax="100">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={{ width: `${listeningProgress}%` }}
                    >
                      {listeningProgress}%
                    </div>
                  </div>
                </div>
              )}
              {shouldShowFallback && (
                <div className="mt-3">
                  <p className="text-muted">Or type your answer:</p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type your answer..."
                      value={userAnswer}
                      onChange={handleTextChange}
                      onKeyDown={handleKeyDown}
                      disabled={isCorrect}
                    />
                    <button className="btn btn-outline-secondary" onClick={handleSubmitText} disabled={isCorrect}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {speechError && !showFallback && (
                <button className="btn btn-sm btn-outline-warning mt-2" onClick={() => setShowFallback(true)}>
                  ⌨️ Use typing instead
                </button>
              )}
            </div>
          );

        case 'sentence_completion':
          return (
            <div>
              <p><strong>Complete the sentence:</strong></p>
              <p className="lead">{activity.content}</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your answer..."
                  value={userAnswer}
                  onChange={handleTextChange}
                  onKeyDown={handleKeyDown}
                  disabled={isCorrect}
                />
                <button className="btn btn-outline-secondary text-white"
                style={{ backgroundColor: '#198754', borderColor: '#198754' }}
                onClick={handleSubmitText} disabled={isCorrect}>
                  Submit
                </button>
              </div>
              <button className="btn btn-outline-primary mt-2" onClick={handleSpeak} disabled={isListening || isCorrect}>
                {isListening ? 'Listening...' : '🎤 Or Speak'}
              </button>
            </div>
          );

        case 'multiple_choice':
          return (
            <div>
              <p><strong>{activity.content}</strong></p>
              <div className="d-flex flex-column gap-2">
                {(activity.options || []).map((option, idx) => (
                  <button
                    key={idx}
                    className={`btn btn-outline-primary ${userAnswer === option ? 'active' : ''}`}
                    onClick={() => {
                      setUserAnswer(option);
                      checkAnswer(option);
                    }}
                    disabled={isCorrect}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          );

        default:
          return <p>Unknown activity type: {activity.type}</p>;
      }
    };

    return renderInteraction();
  };

  return (
    <div className="card p-4">
      <div className="mb-3">
        <small className="text-muted">Activity {activity.id}</small>
        <p className="text-muted">{activity.instruction}</p>
        {activity.hint && <div className="alert alert-info">{activity.hint}</div>}
      </div>

      {renderImage()}

      <div>
        {renderContent()}
      </div>

      {feedback && (
        <div className={`mt-3 alert ${isCorrect ? 'alert-success' : 'alert-warning'}`}>
          {feedback}
        </div>
      )}
    </div>
  );
};

export default ActivityRenderer;