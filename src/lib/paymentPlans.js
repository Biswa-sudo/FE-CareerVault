export const PAYMENT_PLANS = {
  'career-vault-pro': {
    key: 'career-vault-pro',
    name: 'Career Vault Pro',
    amount: 19900,
    productId: 3,
    planId: 'career-vault-pro',
    description: 'Career Vault Pro access',
  },

  'spoken-english': {
    key: 'spoken-english',
    name: 'Spoken English 1-Year Pass',
    amount: 9900,
    // Product ID 2 = Spoken English
    productId: 2,
    planId: 'spoken-english',
    description: 'Spoken English practice pass',
  },

  'career-vault': {
    key: 'career-vault',
    name: 'Career Vault',
    amount: 9900,
    // Product ID 1 = Career Vault
    productId: 1,
    planId: 'career-vault',
    description: 'Career Vault access',
  },

  // Database slug is "pro"
  pro: {
    key: 'pro',
    name: 'Career Vault + AI (Pro)',
    amount: 19900,
    // Pro belongs to Career Vault product
    productId: 1,
    planId: 'pro',
    description: 'Career Vault + AI assistance',
  },

  'custom-bundle': {
    key: 'custom-bundle',
    name: 'Custom Service Bundle',
    amount: 0,
    // Not linked to a single product by default.
    productId: null,
    planId: null,
    description: 'Custom service bundle',
  },
}

export function resolvePaymentPlan(planKey, query = {}) {
  const inputKey = String(planKey || query.plan || '')
    .trim()
    .toLowerCase()

  let normalizedKey = inputKey
  let plan = PAYMENT_PLANS[normalizedKey] || null

  // Default annual fallback for unknown plans (used by tests and UI)
  const DEFAULT_ANNUAL = {
    key: 'annual',
    name: 'Benture AI Annual',
    amount: 10000,
    productId: null,
    planId: 'annual',
    description: 'Annual subscription',
  }

  /*
   * Backward compatibility:
   * If old URLs used the UI label, map them to the actual backend plan key.
   */
  if (!plan && normalizedKey === 'career-vault-pro') {
    normalizedKey = 'pro'
    plan = PAYMENT_PLANS[normalizedKey] || null
  }

  // If still not found, fall back to the annual default
  if (!plan) {
    normalizedKey = 'annual'
    plan = DEFAULT_ANNUAL
  }

  const fallbackKey = normalizedKey

  /*
   * Query amount is only used for display compatibility.
   *
   * The actual payment amount is ALWAYS validated
   * server-side by payment.php using the database.
   */
  let amount = plan.amount || 0

  if (query.amount !== undefined && query.amount !== null && query.amount !== '') {
    const queryAmount = Number(query.amount)

    if (Number.isFinite(queryAmount) && queryAmount > 0) {
      amount = queryAmount
    } else {
      console.warn(
        '[resolvePaymentPlan] Invalid query amount:',
        query.amount
      )
    }
  }

  console.log('[resolvePaymentPlan]', {
    planKey,
    normalizedKey,
    queryAmountRaw: query.amount,
    amount,
    displayAmount: (amount / 100).toFixed(2),
  })

  return {
    ...plan,

    key: fallbackKey,
    planId: plan.planId || plan.key,
    amount,

    displayAmount: Number(
      (amount / 100).toFixed(2)
    ),

    name: String(
      query.title ||
      plan.name ||
      'Benture AI Subscription'
    ),

    description: String(
      query.description ||
      plan.description ||
      'Benture AI subscription'
    ),
  }
}