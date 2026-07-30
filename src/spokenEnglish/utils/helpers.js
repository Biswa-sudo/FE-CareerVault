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

function splitWords(text) {
  return normalizeText(text)
    .split(" ")
    .filter(Boolean);
}

function hasAllWords(sourceText, targetText) {
  const sourceWords = splitWords(sourceText);
  const targetWords = new Set(splitWords(targetText));

  if (sourceWords.length === 0) return false;

  return sourceWords.every((word) => targetWords.has(word));
}

/**
 * Check if a spoken answer matches any of the expected answers (after normalization).
 */
export function isValidAnswer(spoken, expectedAnswers) {
  const normalizedSpoken = normalizeText(spoken);
  if (!normalizedSpoken) return false;

  return expectedAnswers.some(expected => {
    const normalizedExpected = normalizeText(expected);
    if (!normalizedExpected) return false;

    // 1) Exact match (previous behavior)
    if (normalizedSpoken === normalizedExpected) return true;

    // 2) Phrase containment in either direction
    if (normalizedSpoken.includes(normalizedExpected)) return true;
    if (normalizedExpected.includes(normalizedSpoken)) {
      // Avoid accepting very short one-word partials against long expected phrases.
      return splitWords(normalizedSpoken).length >= 2;
    }

    // 3) Word-level subset match in either direction
    if (hasAllWords(normalizedExpected, normalizedSpoken)) return true;
    if (splitWords(normalizedSpoken).length >= 2 && hasAllWords(normalizedSpoken, normalizedExpected)) {
      return true;
    }

    return false;
  });
}