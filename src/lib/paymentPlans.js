export const PAYMENT_PLANS = {
  annual: {
    key: 'annual',
    name: 'Benture AI Annual Subscription',
    amount: 10000,
    description: 'Annual subscription — all features unlocked',
  },
  'spoken-english': {
    key: 'spoken-english',
    name: 'Spoken English 1-Year Pass',
    amount: 9900,
    description: 'Spoken English practice pass',
  },
  'career-vault': {
    key: 'career-vault',
    name: 'Career Vault',
    amount: 9900,
    description: 'Career Vault access',
  },
  'career-vault-pro': {
    key: 'career-vault-pro',
    name: 'Career Vault + AI (Pro)',
    amount: 19900,
    description: 'Career Vault + AI assistance',
  },
  'custom-bundle': {
    key: 'custom-bundle',
    name: 'Custom Service Bundle',
    amount: 0,
    description: 'Custom service bundle',
  },
};

export function resolvePaymentPlan(planKey, query = {}) {
  const normalizedKey = String(planKey || query.plan || 'annual').trim().toLowerCase();
  const plan = PAYMENT_PLANS[normalizedKey] || PAYMENT_PLANS.annual;
  
  // Prioritize query.amount if provided; MUST use it
  let amount;
  if (query.amount) {
    amount = Number(query.amount);
    if (!Number.isFinite(amount) || amount <= 0) {
      console.warn('[resolvePaymentPlan] Invalid query amount:', query.amount, 'falling back to plan default');
      amount = plan.amount;
    }
  } else {
    amount = plan.amount;
  }

  console.log('[resolvePaymentPlan]', { planKey, queryAmountRaw: query.amount, amount, displayAmount: (amount / 100).toFixed(2) });

  return {
    ...plan,
    amount: amount,
    displayAmount: Number((amount / 100).toFixed(2)),
    name: String(query.title || plan.name || 'Benture AI Subscription'),
    description: String(query.description || plan.description || 'Benture AI subscription'),
  };
}
