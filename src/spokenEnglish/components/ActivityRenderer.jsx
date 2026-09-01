import React, { useEffect, useRef, useState } from 'react';
import { startListening } from '../services/speechService';
import { isValidAnswer } from '../utils/helpers';
import correctIcon from '../correct.svg';
import './ActivityRenderer.css';

const SPEECH_TYPES = [
  'listen_repeat',
  'read_aloud',
  'spell_word',
  'revision',
  'challenge_question'
];

/*
|--------------------------------------------------------------------------
| UI ONLY
|--------------------------------------------------------------------------
| Everything below is presentation styling.
| Speech recognition, speech synthesis, validation, attempts,
| Auto Speak, timers and callbacks remain unchanged.
*/


const ActivityRenderer = ({
  activity,
  onComplete,
  onError,
  autoSpeakEnabled = true,
  onAutoSpeakModeChange,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wasCorrectAnswer, setWasCorrectAnswer] = useState(false);
  const [speechError, setSpeechError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);
  const [listeningProgress, setListeningProgress] = useState(0);
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

        const nextProgress =
          currentProgress < 30
            ? currentProgress + 8
            : currentProgress < 60
              ? currentProgress + 5
              : currentProgress + 2;

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

        const nextProgress =
          currentProgress < 40
            ? currentProgress + 10
            : currentProgress < 75
              ? currentProgress + 5
              : currentProgress + 2;

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
    setWasCorrectAnswer(false);
    setSpeechError(null);
    setShowFallback(false);
  };

  const stopSpeaking = () => {
    // Cancel any speech synthesis and clear related timers
    if (window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {
        // ignore
      }

      window.speechSynthesis.onvoiceschanged = null;
    }

    if (autoSpeakVoicesTimerRef.current) {
      window.clearTimeout(autoSpeakVoicesTimerRef.current);
      autoSpeakVoicesTimerRef.current = null;
    }

    if (autoListenTimerRef.current) {
      window.clearTimeout(autoListenTimerRef.current);
      autoListenTimerRef.current = null;
    }

    stopAutoSpeakProgress();
    setAutoSpeakProgress(0);
    setAutoSpeakStatus('off');
    setIsSpeaking(false);
  };

  // ----- Text-to-Speech -----
  const handleSpeakText = ({ isAuto = false, retryCount = 0 } = {}) => {
    const instructionText = (activity.instruction || '').trim();
    const contentText = (activity.content || '').trim();

    const textToSpeak = [
      instructionText ? `Instruction: ${instructionText}` : '',
      contentText || ''
    ].filter(Boolean).join(' ');

    // Ensure any speaking stops before starting listening
    if (listeningSessionRef.current) {
      listeningSessionRef.current.cancel?.();
      listeningSessionRef.current = null;
    }

    stopSpeaking();
    stopListeningProgress();
    setIsListening(false);
    setListeningProgress(0);

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
        handleSpeakText({
          isAuto,
          retryCount: retryCount + 1
        });
      } else if (!started) {
        setIsSpeaking(false);

        if (isAuto) {
          stopAutoSpeakProgress();
          setAutoSpeakProgress(0);
          setAutoSpeakStatus('error');
        }

        if (isAuto) {
          setFeedback(
            '🔈 Auto speak could not start. Use Listen to try again.'
          );
        } else {
          setFeedback(
            'Could not start audio. Please try again.'
          );
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

    setFeedback(
      isAuto
        ? '🔊 Auto speaking...'
        : '🔊 Listening...'
    );
  };

  useEffect(() => {
    if (
      !autoSpeakEnabled ||
      !isSpeechTypeActivity ||
      (!activity?.content &&
        !activity?.instruction)
    ) {
      return;
    }

    if (
      lastAutoSpokenActivityRef.current ===
      activityAutoSpeakKey
    ) {
      return;
    }

    let didTriggerSpeak = false;

    const triggerAutoSpeak = () => {
      startAutoSpeakProgress();

      autoSpeakVoicesTimerRef.current =
        window.setTimeout(() => {
          didTriggerSpeak = true;

          lastAutoSpokenActivityRef.current =
            activityAutoSpeakKey;

          handleSpeakText({
            isAuto: true
          });
        }, 250);
    };

    const voiceCount =
      window.speechSynthesis
        ? window.speechSynthesis.getVoices().length
        : 0;

    if (
      voiceCount === 0 &&
      window.speechSynthesis
    ) {
      window.speechSynthesis.onvoiceschanged =
        () => {
          window.speechSynthesis.onvoiceschanged =
            null;

          triggerAutoSpeak();
        };

      triggerAutoSpeak();
    } else {
      triggerAutoSpeak();
    }

    return () => {
      if (
        autoSpeakVoicesTimerRef.current
      ) {
        window.clearTimeout(
          autoSpeakVoicesTimerRef.current
        );

        autoSpeakVoicesTimerRef.current =
          null;
      }

      if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged =
          null;
      }

      if (!didTriggerSpeak) {
        stopAutoSpeakProgress();

        setAutoSpeakProgress(0);
        setAutoSpeakStatus('idle');
      }
    };
  }, [
    activityAutoSpeakKey,
    autoSpeakEnabled,
    isSpeechTypeActivity
  ]);

  const handleAutoSpeakToggle = () => {
    const next = !autoSpeakEnabled;

    if (onAutoSpeakModeChange) {
      onAutoSpeakModeChange(next);
    }

    if (
      next &&
      isSpeechTypeActivity &&
      (activity?.content ||
        activity?.instruction)
    ) {
      setAutoSpeakStatus('loading');

      lastAutoSpokenActivityRef.current =
        activityAutoSpeakKey;

      window.setTimeout(() => {
        startAutoSpeakProgress();

        handleSpeakText({
          isAuto: true
        });
      }, 120);

    } else if (!next) {
      stopAutoSpeakProgress();

      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      if (autoListenTimerRef.current) {
        window.clearTimeout(
          autoListenTimerRef.current
        );

        autoListenTimerRef.current =
          null;
      }

      setAutoSpeakProgress(0);
      setAutoSpeakStatus('off');
    }
  };

  // ----- Speech-to-Text (listening) -----
  const handleSpeak = async () => {
    setSpeechError(null);
    setShowFallback(false);

    stopAutoSpeakProgress();
    setAutoSpeakStatus('off');

    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    setIsListening(true);
    setFeedback('Listening...');

    startListeningProgress();

    const sessionId =
      listeningSessionIdRef.current + 1;

    listeningSessionIdRef.current =
      sessionId;

    const listeningSession =
      startListening({
        timeoutMs: 20000,
        silenceMs: 4000
      });

    listeningSessionRef.current =
      listeningSession;

    try {
      const transcript =
        await listeningSession.promise;

      if (
        listeningSessionIdRef.current !==
        sessionId
      ) {
        return;
      }

      stopListeningProgress();

      setListeningProgress(100);
      setUserAnswer(transcript);

      setFeedback(
        `You said: "${transcript}"`
      );

      checkAnswer(transcript);

    } catch (err) {
      if (
        listeningSessionIdRef.current !==
        sessionId
      ) {
        return;
      }

      stopListeningProgress();

      setListeningProgress(0);

      const capturedText =
        typeof err.capturedText === 'string'
          ? err.capturedText.trim()
          : '';

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
        err.message.includes(
          'not supported'
        ) ||
        err.message.includes(
          'denied'
        ) ||
        err.message.includes(
          'No speech detected'
        ) ||
        err.message.includes(
          'timed out'
        )
      ) {
        setShowFallback(true);
      }

      onError && onError(err);

    } finally {
      if (
        listeningSessionIdRef.current ===
        sessionId
      ) {
        setIsListening(false);
        listeningSessionRef.current =
          null;
      }
    }
  };

  // ----- Text input -----
  const handleTextChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (
      e.key === 'Enter' &&
      !isCorrect
    ) {
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
  const scheduleCompletion = (
    callback,
    delay
  ) => {
    if (completionTimerRef.current) {
      window.clearTimeout(
        completionTimerRef.current
      );
    }

    completionTimerRef.current =
      window.setTimeout(() => {
        completionTimerRef.current =
          null;

        callback();
      }, delay);
  };

  const checkAnswer = (spoken) => {
    const expected =
      activity.expectedAnswers || [];

    if (expected.length === 0) {
      setFeedback(
        'No expected answers defined. Skipping.'
      );

      setIsCorrect(true);

      scheduleCompletion(
        () => {
          onComplete(
            true,
            spoken
          );
        },
        1000
      );

      return;
    }

    if (
      isValidAnswer(
        spoken,
        expected
      )
    ) {
      setFeedback(
        '✅ Correct!'
      );

      setIsCorrect(true);
      setWasCorrectAnswer(true);

      scheduleCompletion(
        () => {
          onComplete(
            true,
            spoken
          );
        },
        1000
      );

    } else {
      const newAttempts =
        attempts + 1;

      setAttempts(
        newAttempts
      );

      if (
        newAttempts >=
        maxAttempts
      ) {
        setFeedback(
          `❌ Incorrect. You said: "${spoken}". The correct answer is: ${expected[0]}`
        );

        setIsCorrect(true);
        setWasCorrectAnswer(false);

        scheduleCompletion(
          () => {
            onComplete(
              false,
              spoken
            );
          },
          2000
        );

      } else {
        setFeedback(
          `❌ Not quite. You said: "${spoken}". Try again (${newAttempts}/${maxAttempts})`
        );

        setUserAnswer('');
      }
    }
  };

  // ----- Render helpers -----
  const renderImage = () => {
    if (activity.image) {
      return (
        <div className="activity-ui-image">
          <img
            src={activity.image}
            alt="Activity illustration"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      );
    }

    return null;
  };

  // ----- Render content -----
  const renderContent = () => {
    const isSpeechType =
      SPEECH_TYPES.includes(
        activity.type
      );

    const shouldShowFallback =
      (isSpeechType &&
        showFallback) ||
      (isSpeechType &&
        speechError);

    const renderInteraction = () => {
      switch (activity.type) {

        /*
        |--------------------------------------------------------------------------
        | SPEECH ACTIVITIES
        |--------------------------------------------------------------------------
        */

        case 'listen_repeat':
        case 'read_aloud':
        case 'spell_word':
        case 'revision':
        case 'challenge_question':
          return (
            <div className="activity-ui-speech">
              <div className="activity-ui-read-section">
                <div className="activity-ui-read-label">
                  {activity.type === 'listen_repeat'
                    ? 'Listen & repeat'
                    : activity.type === 'read_aloud'
                      ? 'Read aloud'
                      : activity.type === 'spell_word'
                        ? 'Spell the word'
                        : activity.type === 'revision'
                          ? 'Revision'
                          : 'Challenge'}
                  <span className="activity-ui-speaker-small">🔊</span>
                </div>

                <div className="activity-ui-read-row">
                  <p className="activity-ui-read-text">
                    {activity.content}
                  </p>

                  <button
                    type="button"
                    className="activity-ui-listen-circle"
                    onClick={handleSpeakText}
                    disabled={isSpeaking || isCorrect}
                    aria-label="Listen"
                  >
                    🎧
                  </button>
                </div>
              </div>

              <div className="activity-ui-actions">
                <button
                  type="button"
                  className={`activity-ui-action activity-ui-auto ${
                    autoSpeakEnabled
                      ? 'activity-ui-auto-on'
                      : 'activity-ui-auto-off'
                  }`}
                  onClick={handleAutoSpeakToggle}
                  disabled={isCorrect}
                  aria-pressed={autoSpeakEnabled}
                >
                  <span className="activity-ui-auto-left">
                    <span className="activity-ui-mic-circle">🎙️</span>
                    <span className="activity-ui-auto-title">
                      Auto Speak: {autoSpeakEnabled ? 'ON' : 'OFF'}
                    </span>
                  </span>
                  {autoSpeakEnabled && (
                    <span className="activity-ui-wave" aria-hidden="true">
                      {Array.from({ length: 15 }, (_, index) => (
                        <span key={index} />
                      ))}
                    </span>
                  )}
                </button>

                <button
                  type="button"
                  className="activity-ui-action activity-ui-speak"
                  onClick={handleSpeak}
                  disabled={isListening || isCorrect}
                >
                  <span>🎙️</span>
                  <span>
                    {isListening
                      ? `Listening ${listeningProgress}%`
                      : 'Speak'}
                  </span>
                </button>

                <button
                  type="button"
                  className="activity-ui-action activity-ui-refresh"
                  onClick={resetActivity}
                >
                  <span className="activity-ui-refresh-icon">↻</span>
                  <span>Refresh</span>
                </button>
              </div>

              {autoSpeakEnabled && (
                <div className="activity-ui-status-card">
                  <div className="activity-ui-status-top">
                    <span>
                      Auto Speak:{' '}
                      {autoSpeakStatus === 'loading'
                        ? 'Loading...'
                        : autoSpeakStatus === 'speaking'
                          ? 'Speaking'
                          : autoSpeakStatus === 'done'
                            ? 'Completed'
                            : autoSpeakStatus === 'error'
                              ? 'Stopped'
                              : 'Ready'}
                    </span>
                    <strong>{autoSpeakProgress}%</strong>
                  </div>
                  <div
                    className="activity-ui-progress"
                    role="progressbar"
                    aria-valuenow={autoSpeakProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="activity-ui-progress-bar"
                      style={{ width: `${autoSpeakProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {isListening && (
                <div className="activity-ui-status-card activity-ui-listening-card">
                  <div className="activity-ui-status-top">
                    <span>Listening...</span>
                    <strong>{listeningProgress}%</strong>
                  </div>
                  <div
                    className="activity-ui-progress"
                    role="progressbar"
                    aria-valuenow={listeningProgress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="activity-ui-progress-bar"
                      style={{ width: `${listeningProgress}%` }}
                    />
                  </div>
                </div>
              )}

              {shouldShowFallback && (
                <div className="activity-ui-typing">
                  <p className="activity-ui-typing-title">
                    Or type your answer:
                  </p>
                  <div className="activity-ui-input-row">
                    <input
                      type="text"
                      className="activity-ui-input"
                      placeholder="Type your answer..."
                      value={userAnswer}
                      onChange={handleTextChange}
                      onKeyDown={handleKeyDown}
                      disabled={isCorrect}
                    />
                    <button
                      type="button"
                      className="activity-ui-submit"
                      onClick={handleSubmitText}
                      disabled={isCorrect}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}

              {speechError && !showFallback && (
                <button
                  type="button"
                  className="activity-ui-typing-toggle"
                  onClick={() => setShowFallback(true)}
                >
                  ⌨️ Use typing instead
                </button>
              )}
            </div>
          );

        case 'sentence_completion':

          return (
            <div className="activity-ui-simple">

              <p className="activity-ui-simple-title">
                Complete the sentence:
              </p>

              <p className="activity-ui-simple-content">
                {activity.content}
              </p>

              <div className="activity-ui-input-row">

                <input
                  type="text"
                  className="activity-ui-input"
                  placeholder="Type your answer..."
                  value={userAnswer}
                  onChange={
                    handleTextChange
                  }
                  onKeyDown={
                    handleKeyDown
                  }
                  disabled={
                    isCorrect
                  }
                />

                <button
                  type="button"
                  className="activity-ui-submit"
                  onClick={
                    handleSubmitText
                  }
                  disabled={
                    isCorrect
                  }
                >
                  Submit
                </button>

              </div>

              <button
                type="button"
                className="activity-ui-or-speak"
                onClick={
                  handleSpeak
                }
                disabled={
                  isListening ||
                  isCorrect
                }
              >
                {isListening
                  ? 'Listening...'
                  : '🎤 Or Speak'}
              </button>

            </div>
          );

        /*
        |--------------------------------------------------------------------------
        | MULTIPLE CHOICE
        |--------------------------------------------------------------------------
        */

        case 'multiple_choice':

          return (
            <div className="activity-ui-simple">

              <p className="activity-ui-simple-content">
                {activity.content}
              </p>

              <div className="activity-ui-choice-list">

                {(activity.options || [])
                  .map(
                    (
                      option,
                      idx
                    ) => (
                      <button
                        key={idx}
                        type="button"
                        className={`activity-ui-choice ${
                          userAnswer ===
                          option
                            ? 'active'
                            : ''
                        }`}
                        onClick={() => {
                          setUserAnswer(
                            option
                          );

                          checkAnswer(
                            option
                          );
                        }}
                        disabled={
                          isCorrect
                        }
                      >
                        {option}
                      </button>
                    )
                  )}

              </div>

            </div>
          );

        /*
        |--------------------------------------------------------------------------
        | DEFAULT
        |--------------------------------------------------------------------------
        */

        default:

          return (
            <p className="activity-ui-simple-content">
              Unknown activity type:{' '}
              {activity.type}
            </p>
          );
      }
    };

    return renderInteraction();
  };

  return (
    <>
      <div className="activity-ui">

        {/* Instruction */}
        {activity.instruction && (
          <div className="activity-ui-header">
            <p className="activity-ui-instruction">
              {activity.instruction}
            </p>
          </div>
        )}

        {/* Hint / scenario */}

        {activity.hint && (
          <div className="activity-ui-prompt">

            <div className="activity-ui-prompt-icon">
              ✨
            </div>

            <div className="activity-ui-prompt-text">
              {activity.hint}
            </div>

          </div>
        )}

        {/* Existing image support */}

        {renderImage()}

        {/* Existing correct answer overlay */}

        <div className="activity-ui-content position-relative">

          {wasCorrectAnswer && isCorrect && (
            <div className="activity-ui-overlay">
              <img
                src={correctIcon}
                alt="Correct answer"
              />
            </div>
          )}

          {renderContent()}

        </div>

        {/* Existing feedback */}

        {feedback && (
          <div
            className={`activity-ui-feedback ${
              isCorrect
                ? 'success'
                : 'warning'
            }`}
          >

            <div className="activity-ui-feedback-icon">
              {isCorrect
                ? '🏆'
                : '💡'}
            </div>

            <div>
              {feedback}
            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default ActivityRenderer;
