import { generateTopicQuestions } from '../services/interviewService';

const TOPIC_QUESTIONS_KEY = 'topicPracticeQuestions';
const USED_TOPICS_KEY = 'used_topics';

/**
 * @typedef {Object} QuestionEntry
 * @property {string} id - Unique ID for this topic question.
 * @property {string} topic - Selected topic for this question.
 * @property {string} question - Question text shown to the user.
 * @property {string} concept - Correct answer/explanation for the question.
 * @property {string=} userAnswer - User submitted answer.
 * @property {number=} userRating - Self-rating from 1 to 5.
 * @property {number} createdAt - Unix timestamp in milliseconds.
 */

function safeParseArray(raw) {
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function readJsonArray(key) {
  return safeParseArray(localStorage.getItem(key));
}

function writeJsonArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

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

/**
 * @returns {QuestionEntry[]}
 */
export function getAllQuestions() {
  return readJsonArray(TOPIC_QUESTIONS_KEY);
}

/**
 * @param {QuestionEntry[]} entries
 */
export function saveQuestions(entries) {
  writeJsonArray(TOPIC_QUESTIONS_KEY, entries);
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
 * @returns {QuestionEntry[]}
 */
export function setTopicQuestions(topic, topicQuestions) {
  const allQuestions = getAllQuestions();
  const merged = mergeTopicQuestions(allQuestions, topic, topicQuestions);
  saveQuestions(merged);
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
export function setTopicPracticeBatch(entries) {
  saveQuestions(entries);
}

export function clearTopicPracticeBatch() {
  localStorage.removeItem(TOPIC_QUESTIONS_KEY);
}

/**
 * @param {string} questionId
 * @param {Partial<QuestionEntry>} patch
 * @returns {QuestionEntry[]}
 */
export function updateQuestionEntry(questionId, patch) {
  const current = getAllQuestions();
  const updated = current.map(entry => (
    entry.id === questionId
      ? {
          ...entry,
          ...patch
        }
      : entry
  ));

  saveQuestions(updated);
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
  return readJsonArray(USED_TOPICS_KEY)
    .map(topic => sanitizeTopic(topic))
    .filter(Boolean);
}

/**
 * @param {string} topic
 */
export function addUsedTopic(topic) {
  const cleanTopic = sanitizeTopic(topic);
  if (!cleanTopic) {
    return getUsedTopics();
  }

  const topics = getUsedTopics();
  const exists = topics.some(item => normalizeTopic(item) === normalizeTopic(cleanTopic));

  if (!exists) {
    topics.push(cleanTopic);
    writeJsonArray(USED_TOPICS_KEY, topics);
  }

  return getUsedTopics();
}

/**
 * Generates and stores a fresh 10-question batch.
 * If append is true, keeps existing topic history and appends new entries.
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

  setTopicQuestions(cleanTopic, nextBatch);
  addUsedTopic(cleanTopic);
  return nextBatch;
}

/**
 * Local-first question source.
 * - append=true: always generates and appends a fresh batch.
 * - generateIfMissing=false: never generates if topic has no local rows.
 * - default: returns local rows, otherwise generates a new batch.
 * @param {string} topic
 * @param {{append?: boolean, generateIfMissing?: boolean}} options
 * @returns {Promise<QuestionEntry[]>}
 */
export async function getTopicQuestions(topic, options = {}) {
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
    addUsedTopic(cleanTopic);
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
 * Backward-compatible alias for replacing a topic batch.
 * @param {string} topic
 * @returns {Promise<QuestionEntry[]>}
 */
export async function regenerateTopicQuestions(topic) {
  return generateQuestionsBatch(topic, false);
}

// ============================================================================
// NEW DYNAMIC STATS HELPERS (for dashboard)
// ============================================================================

/**
 * Compute overall statistics from all stored questions.
 * @returns {{
 *   sessions: number,
 *   avgScore: number,
 *   questionsAnswered: number,
 *   streak: number
 * }}
 */
export function getOverallStats() {
  const all = getAllQuestions();
  const answered = all.filter(q => q.userAnswer?.trim());
  const rated = all.filter(q => Number.isFinite(q.userRating));
  const topics = getUsedTopics();

  const avgRating = rated.length
    ? rated.reduce((sum, q) => sum + q.userRating, 0) / rated.length
    : 0;

  // Streak: count consecutive days with any activity (based on createdAt)
  const dateSet = new Set();
  all.forEach(q => {
    if (q.createdAt) {
      dateSet.add(new Date(q.createdAt).toDateString());
    }
  });
  const dates = Array.from(dateSet).sort((a, b) => new Date(b) - new Date(a));
  let streak = 0;
  const today = new Date().toDateString();
  for (let d of dates) {
    const expected = new Date(Date.now() - streak * 86400000).toDateString();
    if (d === today || d === expected) {
      streak++;
    } else {
      break;
    }
  }

  return {
    sessions: topics.length,
    avgScore: Math.round(avgRating * 20), // convert 0-5 to 0-100 percentage
    questionsAnswered: answered.length,
    streak
  };
}

/**
 * Group questions by topic to build history entries.
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
    // Keep the most recent createdAt for the topic
    if (q.createdAt > entry.createdAt) entry.createdAt = q.createdAt;
  });

  // Convert to array and sort by most recent createdAt
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
 * Get performance breakdown per topic (for skill bars).
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
 * Extract strengths (score >= 70%) and weaknesses (score < 60%)
 * @returns {{ strengths: string[], weaknesses: string[] }}
 */
export function getStrengthsWeaknesses() {
  const perf = getTopicPerformance();
  const strengths = perf.filter(p => p.score >= 70).map(p => p.label);
  const weaknesses = perf.filter(p => p.score < 60).map(p => p.label);
  return { strengths, weaknesses };
}