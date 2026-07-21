const TOPIC_BATCH_KEY = 'topicPracticeBatch';
const WEAK_QUESTIONS_KEY = 'topicPracticeWeakQuestions';

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

/**
 * @returns {QuestionEntry[]}
 */
export function getTopicPracticeBatch() {
  return readJsonArray(TOPIC_BATCH_KEY);
}

/**
 * @param {QuestionEntry[]} entries
 */
export function setTopicPracticeBatch(entries) {
  writeJsonArray(TOPIC_BATCH_KEY, entries);
}

export function clearTopicPracticeBatch() {
  localStorage.removeItem(TOPIC_BATCH_KEY);
}

/**
 * @param {string} questionId
 * @param {Partial<QuestionEntry>} patch
 * @returns {QuestionEntry[]}
 */
export function updateQuestionEntry(questionId, patch) {
  const current = getTopicPracticeBatch();
  const updated = current.map(entry => (
    entry.id === questionId
      ? {
          ...entry,
          ...patch
        }
      : entry
  ));

  setTopicPracticeBatch(updated);
  return updated;
}

/**
 * @returns {{topic: string, questionId: string, rating: number, createdAt: number}[]}
 */
export function getWeakQuestions() {
  return readJsonArray(WEAK_QUESTIONS_KEY);
}

/**
 * @param {{topic: string, questionId: string, rating: number, createdAt: number}} weakQuestion
 */
export function addWeakQuestion(weakQuestion) {
  const weakQuestions = getWeakQuestions();
  const deduplicated = weakQuestions.filter(item => item.questionId !== weakQuestion.questionId);

  deduplicated.push(weakQuestion);
  writeJsonArray(WEAK_QUESTIONS_KEY, deduplicated);
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
