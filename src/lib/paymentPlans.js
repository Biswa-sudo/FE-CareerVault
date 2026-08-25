export const PAYMENT_PLANS = {
  annual: {
    key: 'annual',
    name: 'Benture AI Annual Subscription',
    amount: 10000,
    // Product ID 3 = Benture AI (see src/App.jsx)
    productId: 3,
    planId: 'annual',
    description: 'Annual subscription — all features unlocked',
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
  const inputKey = String(
    planKey || query.plan || 'annual'
  )
    .trim()
    .toLowerCase()

  let normalizedKey = inputKey
  let plan = PAYMENT_PLANS[normalizedKey] || PAYMENT_PLANS.annual

  /*
   * Backward compatibility:
   *
   * If an old URL uses:
   *
   * career-vault-pro
   *
   * convert it to the actual database slug:
   *
   * pro
   */
  if (normalizedKey === 'career-vault-pro') {
    normalizedKey = 'pro'
    plan = PAYMENT_PLANS[normalizedKey] || PAYMENT_PLANS.annual
  }

  const fallbackKey = plan === PAYMENT_PLANS.annual && !PAYMENT_PLANS[inputKey]
    ? 'annual'
    : inputKey

  /*
   * Query amount is only used for display compatibility.
   *
   * The actual payment amount is ALWAYS validated
   * server-side by payment.php using the database.
   */
  let amount = plan.amount

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