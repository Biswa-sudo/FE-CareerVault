import React, { useEffect, useRef, useState } from 'react';
import { startListening } from '../services/speechService';
import { isValidAnswer } from '../utils/helpers';
import correctIcon from '../correct.svg';

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
const ACTIVITY_UI_STYLES = `
  .activity-ui {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    color: #172554;
    font-family: inherit;
  }

  .activity-ui *,
  .activity-ui *::before,
  .activity-ui *::after {
    box-sizing: border-box;
  }

  /* --------------------------------------------------
     HEADER
  -------------------------------------------------- */

  .activity-ui-header {
    margin-bottom: 22px;
  }

  .activity-ui-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    min-height: 38px;
    padding: 7px 14px;

    border-radius: 999px;

    background: #f3edff;
    color: #6237c8;

    font-size: 15px;
    line-height: 1;
    font-weight: 750;
  }

  .activity-ui-badge-icon {
    font-size: 17px;
    line-height: 1;
  }

  .activity-ui-instruction {
    margin: 15px 0 0;

    color: #24365f;

    font-size: 17px;
    line-height: 1.5;

    font-weight: 500;
  }

  /* --------------------------------------------------
     BLUE HINT / SCENARIO CARD
  -------------------------------------------------- */

  .activity-ui-prompt {
    display: flex;
    align-items: center;

    width: 100%;

    gap: 16px;

    margin-bottom: 22px;
    padding: 19px 20px;

    border: 1.5px solid #bfd8ff;
    border-radius: 18px;

    background:
      linear-gradient(
        135deg,
        #f7faff 0%,
        #eff6ff 100%
      );
  }

  .activity-ui-prompt-icon {
    flex: 0 0 52px;

    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #e4efff;

    color: #195dcc;

    font-size: 23px;
    line-height: 1;
  }

  .activity-ui-prompt-text {
    min-width: 0;

    color: #1557c4;

    font-size: 21px;
    line-height: 1.35;

    font-weight: 750;

    overflow-wrap: anywhere;
  }

  /* --------------------------------------------------
     DIVIDER
  -------------------------------------------------- */

  .activity-ui-divider {
    width: 100%;
    height: 1px;

    margin: 0 0 20px;

    background: #edf0f5;
  }

  /* --------------------------------------------------
     READ / SPEAK CONTENT
  -------------------------------------------------- */

  .activity-ui-read-section {
    width: 100%;
  }

  .activity-ui-read-label {
    margin-bottom: 7px;

    color: #6638cc;

    font-size: 17px;
    line-height: 1.3;

    font-weight: 750;
  }

  .activity-ui-speaker-small {
    margin-left: 4px;
    font-size: 15px;
  }

  .activity-ui-read-row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 18px;
  }

  .activity-ui-read-text {
    min-width: 0;

    margin: 0;

    color: #172554;

    font-size: clamp(26px, 3vw, 34px);
    line-height: 1.25;

    font-weight: 750;

    overflow-wrap: anywhere;
  }

  .activity-ui-listen-circle {
    flex: 0 0 52px;

    width: 52px;
    height: 52px;

    display: grid;
    place-items: center;

    padding: 0;

    border: 0;
    border-radius: 50%;

    background: #f1efff;
    color: #4f46e5;

    font-size: 23px;

    cursor: pointer;

    transition:
      transform .15s ease,
      background .15s ease;
  }

  .activity-ui-listen-circle:hover:not(:disabled) {
    transform: translateY(-1px);
    background: #e9e6ff;
  }

  .activity-ui-listen-circle:disabled {
    opacity: .55;
    cursor: not-allowed;
  }

  /* --------------------------------------------------
     LISTEN LINK
  -------------------------------------------------- */

  .activity-ui-listen-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;

    margin: 12px 0 0;

    padding: 0 0 3px;

    border: 0;
    border-bottom: 1.5px dashed #7ca8ed;

    background: transparent;

    color: #1558c8;

    font-size: 15px;
    line-height: 1.3;

    font-weight: 750;

    cursor: pointer;
  }

  .activity-ui-listen-link:disabled {
    opacity: .55;
    cursor: not-allowed;
  }

  /* --------------------------------------------------
     AUTO SPEAK
  -------------------------------------------------- */

  .activity-ui-auto {
    width: 100%;

    min-height: 72px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 15px;

    margin-top: 20px;
    padding: 10px 16px;

    border-radius: 18px;

    text-align: left;

    cursor: pointer;
  }

  .activity-ui-auto-on {
    border: 0;

    background:
      linear-gradient(
        100deg,
        #08a65d 0%,
        #09a85f 100%
      );

    color: #ffffff;

    box-shadow:
      0 7px 18px rgba(
        8,
        166,
        93,
        .14
      );
  }

  .activity-ui-auto-off {
    border: 1px solid #e0e5ed;

    background: #f8fafc;

    color: #475569;
  }

  .activity-ui-auto-left {
    display: flex;
    align-items: center;

    gap: 12px;

    min-width: 0;
  }

  .activity-ui-mic-circle {
    flex: 0 0 46px;

    width: 46px;
    height: 46px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: rgba(
      255,
      255,
      255,
      .9
    );

    color: #078f50;

    font-size: 21px;
  }

  .activity-ui-auto-off
  .activity-ui-mic-circle {
    background: #e9eef5;
    color: #64748b;
  }

  .activity-ui-auto-title {
    font-size: 17px;
    line-height: 1.2;

    font-weight: 750;
  }

  /* --------------------------------------------------
     WAVEFORM
  -------------------------------------------------- */

  .activity-ui-wave {
    display: flex;
    align-items: center;

    gap: 3px;

    height: 34px;

    color: rgba(
      255,
      255,
      255,
      .55
    );

    flex: 0 0 auto;
  }

  .activity-ui-wave span {
    width: 3px;

    border-radius: 99px;

    background: currentColor;
  }

  .activity-ui-wave span:nth-child(1) {
    height: 9px;
  }

  .activity-ui-wave span:nth-child(2) {
    height: 15px;
  }

  .activity-ui-wave span:nth-child(3) {
    height: 11px;
  }

  .activity-ui-wave span:nth-child(4) {
    height: 21px;
  }

  .activity-ui-wave span:nth-child(5) {
    height: 14px;
  }

  .activity-ui-wave span:nth-child(6) {
    height: 28px;
  }

  .activity-ui-wave span:nth-child(7) {
    height: 18px;
  }

  .activity-ui-wave span:nth-child(8) {
    height: 24px;
  }

  .activity-ui-wave span:nth-child(9) {
    height: 14px;
  }

  .activity-ui-wave span:nth-child(10) {
    height: 21px;
  }

  .activity-ui-wave span:nth-child(11) {
    height: 11px;
  }

  .activity-ui-wave span:nth-child(12) {
    height: 17px;
  }

  .activity-ui-wave span:nth-child(13) {
    height: 9px;
  }

  .activity-ui-wave span:nth-child(14) {
    height: 14px;
  }

  .activity-ui-wave span:nth-child(15) {
    height: 8px;
  }

  /* --------------------------------------------------
     SPEAK / REFRESH
  -------------------------------------------------- */

  .activity-ui-actions {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 12px;

    margin-top: 12px;
  }

  .activity-ui-action {
    min-height: 60px;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    gap: 9px;

    padding: 10px 15px;

    border-radius: 16px;

    font-size: 17px;
    line-height: 1.2;

    font-weight: 750;

    cursor: pointer;

    transition:
      transform .15s ease,
      box-shadow .15s ease;
  }

  .activity-ui-action:hover:not(:disabled) {
    transform: translateY(-1px);
  }

  .activity-ui-action:disabled {
    opacity: .58;
    cursor: not-allowed;
  }

  .activity-ui-speak {
    border: 0;

    background:
      linear-gradient(
        135deg,
        #625af5 0%,
        #4f46e5 100%
      );

    color: #ffffff;

    box-shadow:
      0 7px 18px rgba(
        79,
        70,
        229,
        .16
      );
  }

  .activity-ui-refresh {
    border: 1.5px solid #e4e8ef;

    background: #ffffff;

    color: #40506e;

    box-shadow:
      0 4px 12px rgba(
        15,
        23,
        42,
        .035
      );
  }

  .activity-ui-refresh-icon {
    font-size: 22px;
    line-height: 1;
  }

  /* --------------------------------------------------
     PROGRESS
  -------------------------------------------------- */

  .activity-ui-status-card {
    margin-top: 12px;

    padding: 16px 18px 17px;

    border: 1px solid #e6eaf1;
    border-radius: 17px;

    background: #fafbfe;
  }

  .activity-ui-listening-card {
    margin-top: 10px;
  }

  .activity-ui-status-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 12px;

    margin-bottom: 9px;

    color: #64748b;

    font-size: 14px;
    line-height: 1.3;

    font-weight: 650;
  }

  .activity-ui-status-top strong {
    color: #172554;

    font-size: 15px;
  }

  .activity-ui-progress {
    width: 100%;
    height: 9px;

    overflow: hidden;

    border-radius: 999px;

    background: #e5e8f1;
  }

  .activity-ui-progress-bar {
    height: 100%;

    border-radius: inherit;

    background:
      linear-gradient(
        90deg,
        #6258f4,
        #4f46e5
      );

    transition: width .2s ease;
  }

  /* --------------------------------------------------
     TYPING
  -------------------------------------------------- */

  .activity-ui-typing {
    margin-top: 20px;
  }

  .activity-ui-typing-title {
    margin: 0 0 9px;

    color: #172554;

    font-size: 17px;
    line-height: 1.4;

    font-weight: 700;
  }

  .activity-ui-input-row {
    display: grid;

    grid-template-columns:
      minmax(0, 1fr)
      auto;

    gap: 10px;
  }

  .activity-ui-input {
    width: 100%;

    min-height: 56px;

    padding: 12px 16px;

    border: 1.5px solid #dce2eb;
    border-radius: 15px;

    outline: none;

    background: #ffffff;
    color: #172554;

    font-size: 16px;

    transition:
      border-color .15s ease,
      box-shadow .15s ease;
  }

  .activity-ui-input::placeholder {
    color: #98a3b6;
  }

  .activity-ui-input:focus {
    border-color: #8ca6fa;

    box-shadow:
      0 0 0 3px rgba(
        99,
        102,
        241,
        .09
      );
  }

  .activity-ui-submit {
    min-width: 115px;
    min-height: 56px;

    padding: 11px 20px;

    border: 0;
    border-radius: 15px;

    background:
      linear-gradient(
        135deg,
        #625af5 0%,
        #4f46e5 100%
      );

    color: #ffffff;

    font-size: 17px;
    line-height: 1.2;

    font-weight: 750;

    cursor: pointer;
  }

  .activity-ui-submit:disabled {
    opacity: .58;
    cursor: not-allowed;
  }

  .activity-ui-typing-toggle,
  .activity-ui-or-speak {
    min-height: 44px;

    margin-top: 10px;
    padding: 8px 13px;

    border: 1px solid #d9ddff;
    border-radius: 12px;

    background: #ffffff;

    color: #4f46e5;

    font-size: 14px;
    font-weight: 700;

    cursor: pointer;
  }

  /* --------------------------------------------------
     OTHER ACTIVITY TYPES
  -------------------------------------------------- */

  .activity-ui-simple-title {
    margin: 0 0 10px;

    color: #172554;

    font-size: 17px;
    line-height: 1.4;

    font-weight: 700;
  }

  .activity-ui-simple-content {
    margin: 0 0 18px;

    color: #172554;

    font-size: 24px;
    line-height: 1.4;

    font-weight: 700;

    overflow-wrap: anywhere;
  }

  .activity-ui-choice-list {
    display: grid;

    gap: 10px;
  }

  .activity-ui-choice {
    width: 100%;

    min-height: 52px;

    padding: 11px 15px;

    border: 1.5px solid #dce3ef;
    border-radius: 14px;

    background: #ffffff;

    color: #26385d;

    font-size: 16px;
    line-height: 1.3;

    font-weight: 650;

    text-align: left;

    cursor: pointer;
  }

  .activity-ui-choice:hover:not(:disabled),
  .activity-ui-choice.active {
    border-color: #7168f6;

    background: #f5f3ff;

    color: #4f46e5;
  }

  .activity-ui-choice:disabled {
    opacity: .62;
    cursor: not-allowed;
  }

  /* --------------------------------------------------
     IMAGE
  -------------------------------------------------- */

  .activity-ui-image {
    display: flex;
    justify-content: center;

    margin-bottom: 18px;
  }

  .activity-ui-image img {
    max-width: 100%;
    max-height: 180px;

    object-fit: contain;

    border-radius: 14px;
  }

  /* --------------------------------------------------
     FEEDBACK
  -------------------------------------------------- */

  .activity-ui-feedback {
    display: flex;
    align-items: center;

    gap: 13px;

    margin-top: 17px;
    padding: 14px 16px;

    border-radius: 15px;

    background: #f7f2ff;

    color: #172554;

    font-size: 15px;
    line-height: 1.45;

    font-weight: 600;
  }

  .activity-ui-feedback.success {
    background: #eefbf4;
  }

  .activity-ui-feedback.warning {
    background: #fff8eb;
  }

  .activity-ui-feedback-icon {
    flex: 0 0 42px;

    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: #fff1cf;

    font-size: 21px;
  }

  /* --------------------------------------------------
     CORRECT ANSWER OVERLAY
  -------------------------------------------------- */

  .activity-ui-overlay {
    position: absolute;

    inset: 0;

    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(
      255,
      255,
      255,
      .90
    );

    pointer-events: none;

    border-radius: 18px;
  }

  .activity-ui-overlay img {
    max-width: 65%;
    max-height: 230px;

    width: auto;

    filter:
      drop-shadow(
        0 0 24px
        rgba(
          25,
          135,
          84,
          .4
        )
      );
  }

  /* --------------------------------------------------
     DESKTOP
  -------------------------------------------------- */

  @media (min-width: 900px) {
    .activity-ui {
      max-width: 820px;
    }

    .activity-ui-prompt-text {
      max-width: 650px;
    }

    .activity-ui-read-text {
      max-width: 680px;
    }
  }

  /* --------------------------------------------------
     TABLET
  -------------------------------------------------- */

  @media (max-width: 760px) {
    .activity-ui {
      max-width: 100%;
    }

    .activity-ui-prompt {
      padding: 17px 16px;
    }

    .activity-ui-prompt-text {
      font-size: 20px;
    }

    .activity-ui-read-text {
      font-size: 29px;
    }
  }

  /* --------------------------------------------------
     MOBILE
  -------------------------------------------------- */

  @media (max-width: 560px) {
    .activity-ui {
      max-width: 100%;
    }

    .activity-ui-header {
      margin-bottom: 18px;
    }

    .activity-ui-badge {
      min-height: 36px;

      padding: 7px 12px;

      font-size: 14px;
    }

    .activity-ui-badge-icon {
      font-size: 16px;
    }

    .activity-ui-instruction {
      margin-top: 12px;

      font-size: 15px;
    }

    .activity-ui-prompt {
      gap: 11px;

      margin-bottom: 17px;

      padding: 15px 13px;

      border-radius: 16px;
    }

    .activity-ui-prompt-icon {
      flex-basis: 43px;

      width: 43px;
      height: 43px;

      font-size: 20px;
    }

    .activity-ui-prompt-text {
      font-size: 18px;
    }

    .activity-ui-divider {
      margin-bottom: 16px;
    }

    .activity-ui-read-label {
      font-size: 16px;
    }

    .activity-ui-read-row {
      gap: 10px;
    }

    .activity-ui-read-text {
      font-size: 25px;
    }

    .activity-ui-listen-circle {
      flex-basis: 47px;

      width: 47px;
      height: 47px;

      font-size: 20px;
    }

    .activity-ui-listen-link {
      margin-top: 9px;

      font-size: 14px;
    }

    .activity-ui-auto {
      min-height: 68px;

      margin-top: 17px;

      padding: 9px 11px;

      border-radius: 16px;
    }

    .activity-ui-auto-left {
      gap: 9px;
    }

    .activity-ui-mic-circle {
      flex-basis: 42px;

      width: 42px;
      height: 42px;

      font-size: 19px;
    }

    .activity-ui-auto-title {
      font-size: 15px;
    }

    .activity-ui-wave {
      gap: 2px;
      height: 30px;
    }

    .activity-ui-wave span {
      width: 2px;
    }

    .activity-ui-actions {
      gap: 9px;

      margin-top: 10px;
    }

    .activity-ui-action {
      min-height: 55px;

      padding: 8px 7px;

      border-radius: 14px;

      font-size: 15px;
    }

    .activity-ui-refresh-icon {
      font-size: 20px;
    }

    .activity-ui-status-card,
    .activity-ui-listening-card {
      margin-top: 10px;

      padding: 13px;

      border-radius: 15px;
    }

    .activity-ui-status-top {
      margin-bottom: 8px;

      font-size: 13px;
    }

    .activity-ui-status-top strong {
      font-size: 14px;
    }

    .activity-ui-progress {
      height: 8px;
    }

    .activity-ui-typing {
      margin-top: 17px;
    }

    .activity-ui-typing-title {
      font-size: 16px;
    }

    .activity-ui-input-row {
      grid-template-columns: 1fr;

      gap: 8px;
    }

    .activity-ui-input {
      min-height: 54px;

      border-radius: 14px;

      font-size: 16px;
    }

    .activity-ui-submit {
      width: 100%;

      min-height: 54px;

      border-radius: 14px;

      font-size: 17px;
    }

    .activity-ui-feedback {
      gap: 10px;

      margin-top: 14px;

      padding: 12px;

      border-radius: 14px;

      font-size: 13px;
    }

    .activity-ui-feedback-icon {
      flex-basis: 38px;

      width: 38px;
      height: 38px;

      font-size: 19px;
    }

    .activity-ui-simple-title {
      font-size: 16px;
    }

    .activity-ui-simple-content {
      font-size: 21px;
    }

    .activity-ui-choice {
      min-height: 50px;

      font-size: 15px;
    }
  }

  /* --------------------------------------------------
     VERY SMALL PHONES
  -------------------------------------------------- */

  @media (max-width: 380px) {
    .activity-ui-prompt-text {
      font-size: 17px;
    }

    .activity-ui-wave {
      display: none;
    }

    .activity-ui-auto-title {
      font-size: 14px;
    }

    .activity-ui-action {
      font-size: 14px;
    }

    .activity-ui-read-text {
      font-size: 23px;
    }
  }
`;

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
            <div className="activity-ui">

              <div className="activity-ui-divider" />

              <div className="activity-ui-read-section">

                <div className="activity-ui-read-label">

                  {activity.type ===
                  'listen_repeat'
                    ? 'Listen and repeat'
                    : activity.type ===
                      'read_aloud'
                    ? 'Read aloud'
                    : activity.type ===
                      'spell_word'
                    ? 'Spell the word'
                    : activity.type ===
                      'revision'
                    ? 'Revision'
                    : 'Challenge'}

                  <span className="activity-ui-speaker-small">
                    🔊
                  </span>

                </div>

                <div className="activity-ui-read-row">

                  <p className="activity-ui-read-text">
                    {activity.content}
                  </p>

                  <button
                    type="button"
                    className="activity-ui-listen-circle"
                    onClick={
                      handleSpeakText
                    }
                    disabled={
                      isSpeaking ||
                      isCorrect
                    }
                    aria-label="Listen"
                  >
                    🔊
                  </button>

                </div>

                <button
                  type="button"
                  className="activity-ui-listen-link"
                  onClick={
                    handleSpeakText
                  }
                  disabled={
                    isSpeaking ||
                    isCorrect
                  }
                >
                  <span>
                    🎧
                  </span>

                  <span>
                    Listen
                  </span>
                </button>

              </div>

              {/* Auto Speak */}

              <button
                type="button"
                className={`activity-ui-auto ${
                  autoSpeakEnabled
                    ? 'activity-ui-auto-on'
                    : 'activity-ui-auto-off'
                }`}
                onClick={
                  handleAutoSpeakToggle
                }
                disabled={isCorrect}
                aria-pressed={
                  autoSpeakEnabled
                }
              >

                <span className="activity-ui-auto-left">

                  <span className="activity-ui-mic-circle">
                    🎙️
                  </span>

                  <span className="activity-ui-auto-title">
                    Auto Speak:{' '}
                    {autoSpeakEnabled
                      ? 'ON'
                      : 'OFF'}
                  </span>

                </span>

                {autoSpeakEnabled && (
                  <span
                    className="activity-ui-wave"
                    aria-hidden="true"
                  >
                    {Array.from(
                      {
                        length: 15
                      },
                      (_, index) => (
                        <span
                          key={index}
                        />
                      )
                    )}
                  </span>
                )}

              </button>

              {/* Speak / Refresh */}

              <div className="activity-ui-actions">

                <button
                  type="button"
                  className="activity-ui-action activity-ui-speak"
                  onClick={
                    handleSpeak
                  }
                  disabled={
                    isListening ||
                    isCorrect
                  }
                >

                  <span>
                    🎙️
                  </span>

                  <span>
                    {isListening
                      ? `Listening ${listeningProgress}%`
                      : 'Speak'}
                  </span>

                </button>

                <button
                  type="button"
                  className="activity-ui-action activity-ui-refresh"
                  onClick={
                    resetActivity
                  }
                >

                  <span className="activity-ui-refresh-icon">
                    ↻
                  </span>

                  <span>
                    Refresh
                  </span>

                </button>

              </div>

              {/* Auto Speak progress */}

              {autoSpeakEnabled && (
                <div className="activity-ui-status-card">

                  <div className="activity-ui-status-top">

                    <span>
                      Auto Speak:{' '}
                      {autoSpeakStatus ===
                      'loading'
                        ? 'Loading...'
                        : autoSpeakStatus ===
                          'speaking'
                        ? 'Speaking'
                        : autoSpeakStatus ===
                          'done'
                        ? 'Completed'
                        : autoSpeakStatus ===
                          'error'
                        ? 'Stopped'
                        : 'Ready'}
                    </span>

                    <strong>
                      {autoSpeakProgress}%
                    </strong>

                  </div>

                  <div
                    className="activity-ui-progress"
                    role="progressbar"
                    aria-valuenow={
                      autoSpeakProgress
                    }
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >

                    <div
                      className="activity-ui-progress-bar"
                      style={{
                        width: `${autoSpeakProgress}%`
                      }}
                    />

                  </div>

                </div>
              )}

              {/* Listening progress */}

              {isListening && (
                <div className="activity-ui-status-card activity-ui-listening-card">

                  <div className="activity-ui-status-top">

                    <span>
                      Listening...
                    </span>

                    <strong>
                      {listeningProgress}%
                    </strong>

                  </div>

                  <div
                    className="activity-ui-progress"
                    role="progressbar"
                    aria-valuenow={
                      listeningProgress
                    }
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >

                    <div
                      className="activity-ui-progress-bar"
                      style={{
                        width: `${listeningProgress}%`
                      }}
                    />

                  </div>

                </div>
              )}

              {/* Typing fallback */}

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

                </div>
              )}

              {speechError &&
                !showFallback && (
                  <button
                    type="button"
                    className="activity-ui-typing-toggle"
                    onClick={() =>
                      setShowFallback(
                        true
                      )
                    }
                  >
                    ⌨️ Use typing instead
                  </button>
                )}

            </div>
          );

        /*
        |--------------------------------------------------------------------------
        | SENTENCE COMPLETION
        |--------------------------------------------------------------------------
        */

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
      <style>
        {ACTIVITY_UI_STYLES}
      </style>

      <div className="activity-ui">

        {/* Activity badge + instruction */}

        <div className="activity-ui-header">

          <div className="activity-ui-badge">

            <span className="activity-ui-badge-icon">
              📖
            </span>

            <span>
              Activity {activity.id}
            </span>

          </div>

          {activity.instruction && (
            <p className="activity-ui-instruction">
              {activity.instruction}
            </p>
          )}

        </div>

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

        <div className="position-relative">

          {wasCorrectAnswer &&
            isCorrect && (
              <div className="activity-ui-overlay">

                <img
                  src={correctIcon}
                  alt="Correct answer"
                />

              </div>
            )}

          {/* Existing activity interaction */}

          <div>
            {renderContent()}
          </div>

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