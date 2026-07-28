/**
 * Speech-to-text service using the Web Speech API.
 * Provides clear error messages for various failure scenarios.
 */

export function startListening({ timeoutMs = 20000 } = {}) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    return {
      promise: Promise.reject(
        new Error('Your browser does not support speech recognition. Please use Chrome, Edge, or Safari.')
      ),
      cancel: () => {},
    };
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let settled = false;
  let timeoutId;
  let stopReason = 'unknown';

  const cleanup = () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
  };

  const promise = new Promise((resolve, reject) => {
    const finishResolve = (transcript) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      resolve(transcript);
    };

    const finishReject = (message) => {
      if (settled) {
        return;
      }
      settled = true;
      cleanup();
      reject(new Error(message));
    };

    recognition.onresult = (event) => {
      stopReason = 'result';
      const transcript = event.results[0][0].transcript;
      finishResolve(transcript);
    };

    recognition.onerror = (event) => {
      let errorMessage;
      switch (event.error) {
        case 'not-allowed':
          errorMessage = 'Microphone access was denied. Please allow microphone access in your browser settings and try again.';
          break;
        case 'no-speech':
          errorMessage = 'No speech detected. Please speak clearly and try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Could not access your microphone. Please check your microphone connection.';
          break;
        case 'network':
          errorMessage = 'Network error occurred. Please check your internet connection.';
          break;
        case 'aborted':
          if (stopReason === 'timeout') {
            errorMessage = 'Speech recognition timed out. Please try again.';
          } else {
            errorMessage = 'Speech recognition was cancelled.';
          }
          break;
        default:
          errorMessage = `Speech recognition error: ${event.error}. Please try again.`;
      }
      finishReject(errorMessage);
    };

    recognition.onend = () => {
      if (!settled) {
        if (stopReason === 'timeout') {
          finishReject('Speech recognition timed out. Please try again.');
        } else {
          finishReject('No speech detected. Please speak clearly and try again.');
        }
      }
    };

    timeoutId = window.setTimeout(() => {
      stopReason = 'timeout';
      try {
        recognition.abort();
      } catch {
        // If abort fails, reject directly with timeout.
        finishReject('Speech recognition timed out. Please try again.');
        return;
      }
    }, timeoutMs);

    try {
      recognition.start();
    } catch (error) {
      finishReject(error instanceof Error ? error.message : 'Unable to start speech recognition.');
    }
  });

  return {
    promise,
    cancel: () => {
      stopReason = 'cancelled';
      try {
        recognition.abort();
      } catch {
        // Ignore cancellation failures.
      }
    },
  };
}