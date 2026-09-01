import test from 'node:test';
import assert from 'node:assert/strict';
import { isPurchaseService, getEnquiryServiceSubject } from '../src/lib/serviceAccess.js';
import { buildTemplatePrompt } from '../src/data/prompts/masterPrompt.js';

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

test('AI prompt uses the selected template default data instead of the hardcoded example schema', () => {
  const prompt = buildTemplatePrompt('classic-professional');

  assert.match(prompt, /"fullName": "JOHN DOE"/);
  assert.match(prompt, /"title": "SENIOR SOFTWARE DEVELOPER"/);
  assert.match(prompt, /"company": "TechSolutions Ltd\."/);
});
