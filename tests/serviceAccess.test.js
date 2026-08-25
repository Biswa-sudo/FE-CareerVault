import test from 'node:test';
import assert from 'node:assert/strict';
import { isPurchaseService, getEnquiryServiceSubject } from '../src/lib/serviceAccess.js';

test('only Career Vault, Career Vault + AI, and Spoken English are purchase eligible', () => {
  assert.equal(isPurchaseService('career-vault'), true);
  assert.equal(isPurchaseService('career-vault-pro'), true);
  assert.equal(isPurchaseService('spoken-english'), true);
  assert.equal(isPurchaseService('web-starter'), false);
  assert.equal(isPurchaseService('custom-web-app'), false);
  assert.equal(isPurchaseService('mobile-app'), false);
  assert.equal(isPurchaseService('brand-identity'), false);
});

test('enquiry subject uses the selected service name when provided', () => {
  assert.equal(getEnquiryServiceSubject('Website Development'), 'Website Development');
  assert.equal(getEnquiryServiceSubject(''), '');
});
