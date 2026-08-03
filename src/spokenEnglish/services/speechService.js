/**
 * Speech-to-text service using the Web Speech API.
 * Provides clear error messages for various failure scenarios.
 */

export function startListening({ timeoutMs = 20000, silenceMs = 4000 } = {}) {
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
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.maxAlternatives = 1;

  let settled = false;
  let timeoutId;
  let submitTimerId;
  let stopReason = 'unknown';
  let hadAnySpeech = false;
  let interimTranscript = '';
  let lastSpeechAt = 0;

  const safeTimeoutBufferMs = 500;
  const submitAfterSilenceMs = Math.max(1500, silenceMs);
  const transcriptChunks = [];

  const cleanup = () => {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = undefined;
    }
    if (submitTimerId) {
      window.clearTimeout(submitTimerId);
      submitTimerId = undefined;
    }
    recognition.onresult = null;
    recognition.onerror = null;
    recognition.onend = null;
  };

  const combinedTranscript = () => {
    const finalTranscript = transcriptChunks.join(' ').replace(/\s+/g, ' ').trim();
    const currentTranscript = interimTranscript.trim();
    if (currentTranscript && finalTranscript) {
      return `${finalTranscript} ${currentTranscript}`.replace(/\s+/g, ' ').trim();
    }
    return finalTranscript || currentTranscript;
  };

  const scheduleSubmit = () => {
    if (submitTimerId) {
      window.clearTimeout(submitTimerId);
    }

    submitTimerId = window.setTimeout(() => {
      submitTimerId = undefined;
      if (settled) {
        return;
      }

      const transcript = combinedTranscript();
      if (transcript) {
        stopReason = 'silence';
        try {
          recognition.stop();
        } catch {
          // Ignore stop failures and resolve the transcript anyway.
        }
        finishResolve(transcript);
      }
    }, submitAfterSilenceMs);
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
      const error = new Error(message);
      error.capturedText = combinedTranscript();
      error.stopReason = stopReason;
      reject(error);
    };

    recognition.onresult = (event) => {
      stopReason = 'result';
      let sawSpeech = false;

      for (let index = event.resultIndex; index < event.results.length; index += 1) {
        const result = event.results[index];
        const transcript = result?.[0]?.transcript?.trim() || '';

        if (!transcript) {
          continue;
        }

        sawSpeech = true;
        hadAnySpeech = true;
        lastSpeechAt = Date.now();

        if (result.isFinal) {
          transcriptChunks.push(transcript);
          interimTranscript = '';
        } else {
          interimTranscript = transcript;
        }
      }

      if (sawSpeech) {
        scheduleSubmit();
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
            // Keep listening and let the silence timeout resolve the transcript.
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

      if (transcript) {
        finishResolve(transcript);
        return;
      }

      if (hadAnySpeech) {
        finishResolve(transcript);
        return;
      }

      finishReject('No speech detected. Please speak clearly and try again.');
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

    lastSpeechAt = Date.now();

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