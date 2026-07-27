/**
 * Normalize text for validation: lowercase, remove extra spaces, remove punctuation.
 */
export function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "") // remove punctuation
    .replace(/\s+/g, " ")    // collapse multiple spaces
    .trim();
}

/**
 * Check if a spoken answer matches any of the expected answers (after normalization).
 */
export function isValidAnswer(spoken, expectedAnswers) {
  const normalizedSpoken = normalizeText(spoken);
  return expectedAnswers.some(expected => {
    const normalizedExpected = normalizeText(expected);
    return normalizedSpoken === normalizedExpected;
  });
}