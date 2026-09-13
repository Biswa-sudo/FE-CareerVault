import test from 'node:test';
import assert from 'node:assert/strict';

import { buildPaymentOrderPayload } from '../src/lib/paymentService.js';

test('guest checkout includes customer details in the create-order payload', () => {
  const payload = buildPaymentOrderPayload({
    amount: 9900,
    currency: 'INR',
    description: 'Spoken English',
    plan: 'spoken-english',
    productId: 3,
    customer: {
      name: 'Asha Verma',
      email: 'asha@example.com',
      phone: '9876543210',
    },
  });

  assert.equal(payload.customer.name, 'Asha Verma');
  assert.equal(payload.customer.email, 'asha@example.com');
  assert.equal(payload.customer.phone, '9876543210');
  assert.equal(payload.plan, 'spoken-english');
  assert.equal(payload.amount, 9900);
});
