/**
 * Normalize text for validation: lowercase, remove extra spaces, remove punctuation.
 */
const ONES = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const TENS = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety"
];

function numberToWords(value) {
  const number = Number(value);
  if (!Number.isInteger(number) || number < 0 || number > 9999) {
    return String(value);
  }

  if (number < 20) {
    return ONES[number];
  }

  if (number < 100) {
    const ten = Math.floor(number / 10);
    const rest = number % 10;
    return rest ? `${TENS[ten]} ${ONES[rest]}` : TENS[ten];
  }

  if (number < 1000) {
    const hundred = Math.floor(number / 100);
    const rest = number % 100;
    return rest ? `${ONES[hundred]} hundred ${numberToWords(rest)}` : `${ONES[hundred]} hundred`;
  }

  const thousand = Math.floor(number / 1000);
  const rest = number % 1000;
  return rest ? `${ONES[thousand]} thousand ${numberToWords(rest)}` : `${ONES[thousand]} thousand`;
}

export function normalizeText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/\b\d+\b/g, (match) => numberToWords(match))
    .replace(/[^\w\s]/g, "") // remove punctuation
    .replace(/\s+/g, " ")    // collapse multiple spaces
    .trim();
}

function normalizePatternText(text) {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/[^\w\s\[\]]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function splitWords(text) {
  return normalizeText(text)
    .split(" ")
    .filter(Boolean);
}

function parseExpectedTokens(expected) {
  const normalizedPattern = normalizePatternText(expected);
  const rawTokens = normalizedPattern.match(/\[[^\]]+\]|\S+/g) || [];

  return rawTokens.map((token) => {
    const isPlaceholder = token.startsWith("[") && token.endsWith("]");
    return {
      isPlaceholder,
      word: isPlaceholder ? null : token,
    };
  });
}

function findWordInOrder(words, targetWord, startIndex) {
  for (let i = startIndex; i < words.length; i += 1) {
    if (words[i] === targetWord) {
      return i;
    }
  }
  return -1;
}

function matchExpectedTokens(spokenWords, tokens, spokenIndex = 0, tokenIndex = 0) {
  if (tokenIndex >= tokens.length) {
    return true;
  }

  if (spokenIndex > spokenWords.length) {
    return false;
  }

  const token = tokens[tokenIndex];

  if (!token.isPlaceholder) {
    const wordIndex = findWordInOrder(spokenWords, token.word, spokenIndex);
    if (wordIndex === -1) {
      return false;
    }
    return matchExpectedTokens(spokenWords, tokens, wordIndex + 1, tokenIndex + 1);
  }

  // Placeholder segment is required: consume at least one word.
  if (spokenIndex >= spokenWords.length) {
    return false;
  }

  // If placeholder is the final token, at least one remaining spoken word satisfies it.
  if (tokenIndex === tokens.length - 1) {
    return spokenWords.length - spokenIndex >= 1;
  }

  for (let nextSpokenIndex = spokenIndex + 1; nextSpokenIndex <= spokenWords.length; nextSpokenIndex += 1) {
    if (matchExpectedTokens(spokenWords, tokens, nextSpokenIndex, tokenIndex + 1)) {
      return true;
    }
  }

  return false;
}

/**
 * Check if a spoken answer matches any of the expected answers (after normalization).
 */
export function isValidAnswer(spoken, expectedAnswers) {
  const normalizedSpoken = normalizeText(spoken);
  if (!normalizedSpoken) return false;
  const spokenWords = splitWords(normalizedSpoken);

  return expectedAnswers.some(expected => {
    const tokens = parseExpectedTokens(expected);
    if (tokens.length === 0) return false;

    const hasPlaceholders = tokens.some((token) => token.isPlaceholder);

    if (!hasPlaceholders) {
      const normalizedExpected = normalizeText(expected);
      if (!normalizedExpected) return false;

      // Exact match remains valid.
      if (normalizedSpoken === normalizedExpected) return true;

      // Accept when full expected phrase appears in spoken answer.
      if (normalizedSpoken.includes(normalizedExpected)) return true;
    }

    // Strict full-coverage check: all required expected tokens must appear in order.
    // This prevents accepting half-spoken long sentences.
    return matchExpectedTokens(spokenWords, tokens);
  });
}