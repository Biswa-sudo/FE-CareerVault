const GROQ_ENDPOINT = 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.1-8b-instant';
const groqApiKey = import.meta.env.VITE_GROQ_API_KEY?.trim();

function isQuotaError(error) {
  const message = String(error?.message || error || '');
  return /quota|resource_exhausted|429|rate limit|too many requests/i.test(message);
}

function buildFallbackResponse({ mode, role, userMessage }) {
  const modeGuidance = {
    general: 'Keep your answer focused, positive, and easy to follow.',
    technical: 'Add concrete technical details and name the tools, tradeoffs, or steps you used.',
    behavioral: 'Use the STAR method: situation, task, action, result.',
    hr: 'Connect your motivation, teamwork style, and career goals to the role.'
  };

  return {
    answer: `Groq is temporarily unavailable because the API quota or rate limit was reached. For now, here is coaching for your ${role} answer: ${modeGuidance[mode] || modeGuidance.general} You said: "${userMessage}". If you want, I can help you rewrite it into a stronger interview response.`,
    feedback: 'Fallback mode: Groq quota or rate-limit exceeded. Structure: 7/10, Content: 7/10, Delivery: 7/10',
    score: 70,
    followUpQuestion: 'Would you like me to rewrite that answer in a stronger interview format?'
  };
}

function extractJsonPayload(text) {
  const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/```$/i, '').trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const jsonMatch = cleaned.match(/\{[\s\S]*\}/);

    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch {
        return null;
      }
    }

    return null;
  }
}

function buildConversationSnippet(conversation) {
  return conversation
    .slice(-8)
    .map(message => `${message.sender === 'user' ? 'Candidate' : 'Coach'}: ${message.text}`)
    .join('\n');
}

function buildPrompt({ mode, role, userMessage, conversation }) {
  const modeInstructions = {
    general: 'Focus on common interview fundamentals, motivation, and communication clarity.',
    technical: 'Focus on technical depth, problem-solving, and concise explanations.',
    behavioral: 'Focus on STAR-style answers, teamwork, conflict, and ownership.',
    hr: 'Focus on culture fit, career goals, collaboration, and expectations.'
  };

  return [
    'You are an expert AI interview coach inside a job-preparation app.',
    `Interview mode: ${mode}.`,
    `Target role: ${role}.`,
    `Guidance: ${modeInstructions[mode] || modeInstructions.general}`,
    'Respond to the candidate with coaching that is practical, supportive, and specific.',
    'Return valid JSON only with this exact shape: {"answer":"...","feedback":"...","score":0,"followUpQuestion":"..."}.',
    'The answer should be concise, direct, and suitable for a chat UI.',
    'The feedback field should summarize structure, content, and delivery in a short label-style format.',
    'The score should be an integer from 0 to 100.',
    'If no follow-up is needed, set followUpQuestion to an empty string.',
    '',
    'Conversation context:',
    buildConversationSnippet(conversation),
    '',
    `Latest candidate answer: ${userMessage}`
  ].join('\n');
}

export async function generateInterviewResponse({ mode, role, userMessage, conversation }) {
  if (!groqApiKey) {
    throw new Error('Missing Groq API key. Set VITE_GROQ_API_KEY in .env.local');
  }

  try {
    const response = await fetch(GROQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${groqApiKey}`
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [
          {
            role: 'system',
            content:
              'You are an expert AI interview coach in a job-preparation app. Return only valid JSON with this exact shape: {"answer":"...","feedback":"...","score":0,"followUpQuestion":"..."}.'
          },
          {
            role: 'user',
            content: buildPrompt({ mode, role, userMessage, conversation })
          }
        ],
        temperature: 0.7,
        top_p: 0.95,
        max_tokens: 512,
        response_format: { type: 'json_object' }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      const apiMessage = data?.error?.message || `Groq request failed with status ${response.status}`;
      throw new Error(apiMessage);
    }

    const text = data?.choices?.[0]?.message?.content?.trim();

    if (!text) {
      throw new Error('Groq returned an empty response');
    }

    const payload = extractJsonPayload(text);

    if (!payload || typeof payload.answer !== 'string') {
      return {
        answer: text,
        feedback: '',
        score: null,
        followUpQuestion: ''
      };
    }

    return {
      answer: payload.answer,
      feedback: typeof payload.feedback === 'string' ? payload.feedback : '',
      score: Number.isFinite(payload.score) ? payload.score : null,
      followUpQuestion: typeof payload.followUpQuestion === 'string' ? payload.followUpQuestion : ''
    };
  } catch (error) {
    if (isQuotaError(error)) {
      return buildFallbackResponse({ mode, role, userMessage, conversation });
    }

    throw error;
  }
}