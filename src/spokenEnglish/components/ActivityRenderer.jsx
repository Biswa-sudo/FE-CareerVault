import React, { useState } from 'react';
import { startListening } from '../services/speechService';
import { isValidAnswer } from '../utils/helpers';

const ActivityRenderer = ({ activity, onComplete, onError }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [speechError, setSpeechError] = useState(null);
  const [showFallback, setShowFallback] = useState(false);
  const maxAttempts = 3;

  // ----- Text-to-Speech -----
  const handleSpeakText = () => {
    if (!window.speechSynthesis) {
      setFeedback('Text-to-speech is not supported in this browser.');
      return;
    }
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(activity.content);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // slightly slower for learners
    utterance.pitch = 1;
    utterance.volume = 1;

    setIsSpeaking(true);
    utterance.onend = () => {
      setIsSpeaking(false);
      setFeedback('🔊 Done listening.');
    };
    utterance.onerror = (event) => {
      setIsSpeaking(false);
      setFeedback(`Error speaking: ${event.error}`);
    };
    window.speechSynthesis.speak(utterance);
    setFeedback('🔊 Listening...');
  };

  // ----- Speech-to-Text (listening) -----
  const handleSpeak = async () => {
    setSpeechError(null);
    setIsListening(true);
    setFeedback('Listening...');
    try {
      const transcript = await startListening();
      setUserAnswer(transcript);
      setFeedback(`You said: "${transcript}"`);
      checkAnswer(transcript);
    } catch (err) {
      setSpeechError(err.message);
      setFeedback(`❌ ${err.message}`);
      if (err.message.includes('not supported') || err.message.includes('denied')) {
        setShowFallback(true);
      }
      onError && onError(err);
    } finally {
      setIsListening(false);
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
  const checkAnswer = (spoken) => {
    const expected = activity.expectedAnswers || [];
    if (expected.length === 0) {
      setFeedback('No expected answers defined. Skipping.');
      setIsCorrect(true);
      setTimeout(() => {
        onComplete(true, spoken);
      }, 1000);
      return;
    }

    if (isValidAnswer(spoken, expected)) {
      setFeedback('✅ Correct!');
      setIsCorrect(true);
      setTimeout(() => {
        onComplete(true, spoken);
      }, 1000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= maxAttempts) {
        setFeedback(`❌ Incorrect. The correct answer is: ${expected[0]}`);
        setIsCorrect(true);
        setTimeout(() => {
          onComplete(false, spoken);
        }, 2000);
      } else {
        setFeedback(`❌ Not quite. Try again (${newAttempts}/${maxAttempts})`);
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
    const speechTypes = ['listen_repeat', 'read_aloud', 'spell_word', 'revision', 'challenge_question'];
    const isSpeechType = speechTypes.includes(activity.type);
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
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-outline-info" onClick={handleSpeakText} disabled={isSpeaking || isCorrect}>
                  {isSpeaking ? '🔊 Speaking...' : '🔊 Listen'}
                </button>
                <button className="btn btn-primary" onClick={handleSpeak} disabled={isListening || isCorrect}>
                  {isListening ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Listening...
                    </>
                  ) : (
                    '🎤 Speak'
                  )}
                </button>
              </div>
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
                <button className="btn btn-outline-secondary" onClick={handleSubmitText} disabled={isCorrect}>
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