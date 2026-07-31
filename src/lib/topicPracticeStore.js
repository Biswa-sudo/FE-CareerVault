import { generateTopicQuestions } from '../services/interviewService';
import { apiRequest } from './apiClient';

/**
 * @typedef {Object} QuestionEntry
 * @property {string} id
 * @property {string} topic
 * @property {string} question
 * @property {string} concept
 * @property {string=} userAnswer
 * @property {number=} userRating
 * @property {number} createdAt
 */

let questionsCache = [];
let usedTopicsCache = [];
let initialized = false;

function normalizeTopic(topic) {
  return String(topic || '').trim().toLowerCase();
}

function sanitizeTopic(topic) {
  return String(topic || '').trim();
}

function sameTopic(a, b) {
  return normalizeTopic(a) === normalizeTopic(b);
}

function mergeTopicQuestions(allQuestions, topic, topicQuestions) {
  const topicKey = normalizeTopic(topic);
  const others = allQuestions.filter(item => normalizeTopic(item.topic) !== topicKey);
  return [...others, ...topicQuestions];
}

function normalizeQuestions(value) {
  if (!Array.isArray(value)) return [];
  return value.filter(item => item && typeof item === 'object');
}

function normalizeUsedTopics(value) {
  if (!Array.isArray(value)) return [];
  return value
    .map(topic => sanitizeTopic(topic))
    .filter(Boolean);
}

async function persistStore() {
  await apiRequest('/topic-practice.php', {
    method: 'PUT',
    body: {
      questions: questionsCache,
      usedTopics: usedTopicsCache,
    },
  });
}

export async function initTopicPracticeStore() {
  if (initialized) {
    return;
  }

  const response = await apiRequest('/topic-practice.php');
  questionsCache = normalizeQuestions(response.questions);
  usedTopicsCache = normalizeUsedTopics(response.usedTopics);
  initialized = true;
}

/**
 * @returns {QuestionEntry[]}
 */
export function getAllQuestions() {
  return questionsCache;
}

/**
 * @param {QuestionEntry[]} entries
 */
export async function saveQuestions(entries) {
  questionsCache = normalizeQuestions(entries);
  await persistStore();
}

/**
 * @param {string} topic
 * @returns {QuestionEntry[]}
 */
export function getQuestionsForTopic(topic) {
  const topicKey = normalizeTopic(topic);
  return getAllQuestions().filter(item => normalizeTopic(item.topic) === topicKey);
}

/**
 * @param {string} topic
 * @param {QuestionEntry[]} topicQuestions
 * @returns {Promise<QuestionEntry[]>}
 */
export async function setTopicQuestions(topic, topicQuestions) {
  const allQuestions = getAllQuestions();
  const merged = mergeTopicQuestions(allQuestions, topic, topicQuestions);
  await saveQuestions(merged);
  return topicQuestions;
}

/**
 * @returns {QuestionEntry[]}
 */
export function getTopicPracticeBatch() {
  return getAllQuestions();
}

/**
 * @param {QuestionEntry[]} entries
 */
export async function setTopicPracticeBatch(entries) {
  await saveQuestions(entries);
}

export async function clearTopicPracticeBatch() {
  questionsCache = [];
  await persistStore();
}

/**
 * @param {string} questionId
 * @param {Partial<QuestionEntry>} patch
 * @returns {Promise<QuestionEntry[]>}
 */
export async function updateQuestionEntry(questionId, patch) {
  const current = getAllQuestions();
  const updated = current.map(entry => (
    entry.id === questionId
      ? {
          ...entry,
          ...patch
        }
      : entry
  ));

  await saveQuestions(updated);
  return updated;
}

export function getWeakQuestions() {
  return getAllQuestions().filter(item => Number.isFinite(item.userRating) && Number(item.userRating) < 3);
}

/**
 * @param {string} topic
 * @returns {QuestionEntry[]}
 */
export function getWeakQuestionsForTopic(topic) {
  const topicKey = normalizeTopic(topic);
  return getWeakQuestions().filter(item => normalizeTopic(item.topic) === topicKey);
}

/**
 * @param {string} topic
 */
export function hasWeakQuestions(topic) {
  return getWeakQuestionsForTopic(topic).length > 0;
}

/**
 * @param {QuestionEntry[]} batch
 */
export function getBatchProgress(batch) {
  const answeredCount = batch.filter(item => typeof item.userAnswer === 'string' && item.userAnswer.trim()).length;
  const ratedItems = batch.filter(item => Number.isFinite(item.userRating));
  const ratedCount = ratedItems.length;
  const averageRating = ratedCount
    ? ratedItems.reduce((sum, item) => sum + Number(item.userRating), 0) / ratedCount
    : 0;

  return {
    answeredCount,
    ratedCount,
    averageRating,
    completed: batch.length > 0 && ratedCount === batch.length
  };
}

export function getWeakTopicSummary() {
  const weakQuestions = getWeakQuestions();
  return weakQuestions.reduce((acc, item) => {
    if (!item?.topic) {
      return acc;
    }

    acc[item.topic] = (acc[item.topic] || 0) + 1;
    return acc;
  }, {});
}

export function getUsedTopics() {
  return usedTopicsCache;
}

/**
 * @param {string} topic
 */
export async function addUsedTopic(topic) {
  const cleanTopic = sanitizeTopic(topic);
  if (!cleanTopic) {
    return getUsedTopics();
  }

  const exists = usedTopicsCache.some(item => normalizeTopic(item) === normalizeTopic(cleanTopic));
  if (!exists) {
    usedTopicsCache = [...usedTopicsCache, cleanTopic];
    await persistStore();
  }

  return getUsedTopics();
}

/**
 * Generates and stores a fresh 10-question batch.
 * @param {string} topic
 * @param {boolean} append
 * @returns {Promise<QuestionEntry[]>}
 */
export async function generateQuestionsBatch(topic, append = false) {
  const cleanTopic = sanitizeTopic(topic);
  if (!cleanTopic) {
    return [];
  }

  const existing = getQuestionsForTopic(cleanTopic);
  const generated = await generateTopicQuestions({ topic: cleanTopic });
  const nextBatch = append ? [...existing, ...generated] : generated;

  await setTopicQuestions(cleanTopic, nextBatch);
  await addUsedTopic(cleanTopic);
  return nextBatch;
}

/**
 * Local-first question source.
 * @param {string} topic
 * @param {{append?: boolean, generateIfMissing?: boolean}} options
 * @returns {Promise<QuestionEntry[]>}
 */
export async function getTopicQuestions(topic, options = {}) {
  await initTopicPracticeStore();

  const { append = false, generateIfMissing = true } = options;
  const cleanTopic = sanitizeTopic(topic);
  if (!cleanTopic) {
    return [];
  }

  if (append) {
    return generateQuestionsBatch(cleanTopic, true);
  }

  const existing = getQuestionsForTopic(cleanTopic);
  if (existing.length) {
    await addUsedTopic(cleanTopic);
    return existing;
  }

  if (!generateIfMissing) {
    return [];
  }

  return generateQuestionsBatch(cleanTopic, false);
}

export function getStoredTopicLabel(topic) {
  const cleanTopic = sanitizeTopic(topic);
  if (!cleanTopic) {
    return '';
  }

  return getUsedTopics().find(item => sameTopic(item, cleanTopic)) || cleanTopic;
}

/**
 * @param {string} topic
 * @returns {Promise<QuestionEntry[]>}
 */
export async function regenerateTopicQuestions(topic) {
  return generateQuestionsBatch(topic, false);
}

export function getOverallStats() {
  const all = getAllQuestions();
  const answered = all.filter(q => q.userAnswer?.trim());
  const rated = all.filter(q => Number.isFinite(q.userRating));
  const topics = getUsedTopics();

  const avgRating = rated.length
    ? rated.reduce((sum, q) => sum + q.userRating, 0) / rated.length
    : 0;

  const dateSet = new Set();
  all.forEach(q => {
    if (q.createdAt) {
      dateSet.add(new Date(q.createdAt).toDateString());
    }
  });
  const dates = Array.from(dateSet).sort((a, b) => new Date(b) - new Date(a));
  let streak = 0;
  const today = new Date().toDateString();
  for (const d of dates) {
    const expected = new Date(Date.now() - streak * 86400000).toDateString();
    if (d === today || d === expected) {
      streak++;
    } else {
      break;
    }
  }

  return {
    sessions: topics.length,
    avgScore: Math.round(avgRating * 20),
    questionsAnswered: answered.length,
    streak
  };
}

/**
 * @returns {Array<{date: string, role: string, score: number, duration: string, topic: string}>}
 */
export function getTopicHistory() {
  const all = getAllQuestions();
  const topicMap = {};
  all.forEach(q => {
    if (!topicMap[q.topic]) {
      topicMap[q.topic] = {
        topic: q.topic,
        createdAt: q.createdAt,
        totalRating: 0,
        ratedCount: 0,
        questionCount: 0
      };
    }
    const entry = topicMap[q.topic];
    entry.questionCount++;
    if (Number.isFinite(q.userRating)) {
      entry.totalRating += q.userRating;
      entry.ratedCount++;
    }
    if (q.createdAt > entry.createdAt) entry.createdAt = q.createdAt;
  });

  const history = Object.values(topicMap).map(item => ({
    date: new Date(item.createdAt).toLocaleDateString(),
    role: item.topic,
    score: item.ratedCount ? Math.round((item.totalRating / item.ratedCount) * 20) : 0,
    duration: `${item.questionCount} questions`,
    topic: item.topic
  }));

  history.sort((a, b) => new Date(b.date) - new Date(a.date));
  return history;
}

/**
 * @returns {Array<{label: string, score: number}>}
 */
export function getTopicPerformance() {
  const history = getTopicHistory();
  return history.map(item => ({
    label: item.role,
    score: item.score
  }));
}

/**
 * @returns {{ strengths: string[], weaknesses: string[] }}
 */
export function getStrengthsWeaknesses() {
  const perf = getTopicPerformance();
  const strengths = perf.filter(p => p.score >= 70).map(p => p.label);
  const weaknesses = perf.filter(p => p.score < 60).map(p => p.label);
  return { strengths, weaknesses };
}
