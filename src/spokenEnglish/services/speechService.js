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
  let restartId;
  let stopReason = 'unknown';
  let restartCount = 0;
  let hadAnySpeech = false;

  const maxAutoRestarts = 3;
  const restartDelayMs = 180;
  const safeTimeoutBufferMs = 500;
  const transcriptChunks = [];

  const cleanup = () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    if (restartId) {
      window.clearTimeout(restartId);
      restartId = undefined;
    }
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
  };

  const combinedTranscript = () => transcriptChunks.join(' ').replace(/\s+/g, ' ').trim();

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
      const error = new Error(message);
      error.capturedText = combinedTranscript();
      error.stopReason = stopReason;
      reject(error);
    };

    recognition.onresult = (event) => {
      stopReason = 'result';
      const transcript = event.results?.[0]?.[0]?.transcript?.trim() || '';
      if (transcript) {
        transcriptChunks.push(transcript);
        hadAnySpeech = true;
      }
    };

    recognition.onerror = (event) => {
      let errorMessage;
      switch (event.error) {
        case 'not-allowed':
          errorMessage = 'Microphone access was denied. Please allow microphone access in your browser settings and try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Could not access your microphone. Please check your microphone connection.';
          break;
        case 'network':
          errorMessage = 'Network error occurred. Please check your internet connection.';
          break;
        case 'aborted':
          if (stopReason === 'timeout') {
            if (combinedTranscript()) {
              return;
            }

            errorMessage = 'Speech recognition timed out. Please try again.';
          } else if (stopReason === 'cancelled') {
            errorMessage = 'Speech recognition was cancelled.';
          } else if (hadAnySpeech) {
            // If we already captured speech, let onend resolve with combined transcript.
            return;
          } else {
            errorMessage = 'Speech recognition was cancelled.';
          }
          break;
        case 'no-speech':
          if (hadAnySpeech) {
            // Keep the partial transcript and allow onend to decide restart/resolve.
            return;
          }
          errorMessage = 'No speech detected. Please speak clearly and try again.';
          break;
        default:
          errorMessage = `Speech recognition error: ${event.error}. Please try again.`;
      }
      finishReject(errorMessage);
    };

    recognition.onend = () => {
      if (settled) {
        return;
      }

      const transcript = combinedTranscript();

      if (stopReason === 'timeout') {
        if (transcript) {
          finishResolve(transcript);
        } else {
          finishReject('Speech recognition timed out. Please try again.');
        }
        return;
      }

      if (stopReason === 'cancelled') {
        finishReject('Speech recognition was cancelled.');
        return;
      }

      const shouldRestart = transcript && restartCount < maxAutoRestarts;

      if (shouldRestart) {
        restartCount += 1;
        restartId = window.setTimeout(() => {
          restartId = undefined;
          if (settled) {
            return;
          }

          stopReason = 'restarting';
          try {
            recognition.start();
          } catch {
            const fallbackTranscript = combinedTranscript();
            if (fallbackTranscript) {
              finishResolve(fallbackTranscript);
            } else {
              finishReject('Unable to continue speech recognition. Please try again.');
            }
          }
        }, restartDelayMs);
        return;
      }

      if (transcript) {
        finishResolve(transcript);
      } else {
        finishReject('No speech detected. Please speak clearly and try again.');
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
    }, Math.max(1000, timeoutMs - safeTimeoutBufferMs));

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