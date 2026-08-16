import test from 'node:test';
import assert from 'node:assert/strict';

import { resolvePaymentPlan } from '../src/lib/paymentPlans.js';

test('spoken english plan resolves to the correct amount', () => {
  const plan = resolvePaymentPlan('spoken-english');

  assert.equal(plan.key, 'spoken-english');
  assert.equal(plan.amount, 9900);
  assert.equal(plan.displayAmount, 99);
});

test('custom payment amount overrides the default plan amount', () => {
  const plan = resolvePaymentPlan('career-vault', { amount: 14900, title: 'Career Vault Pro' });

  assert.equal(plan.key, 'career-vault');
  assert.equal(plan.amount, 14900);
  assert.equal(plan.displayAmount, 149);
  assert.equal(plan.name, 'Career Vault Pro');
});

test('career-vault-pro resolves to correct pro amount', () => {
  const plan = resolvePaymentPlan('career-vault-pro');

  assert.equal(plan.key, 'career-vault-pro');
  assert.equal(plan.amount, 19900);
  assert.equal(plan.displayAmount, 199);
});

test('unknown plans fall back to the annual subscription defaults', () => {
  const plan = resolvePaymentPlan('unknown-plan');

  assert.equal(plan.key, 'annual');
  assert.equal(plan.amount, 10000);
  assert.equal(plan.displayAmount, 100);
});
