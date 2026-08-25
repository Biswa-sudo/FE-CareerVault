export const PURCHASE_ELIGIBLE_SERVICE_IDS = new Set([
  'career-vault',
  'career-vault-pro',
  'spoken-english',
]);

export function isPurchaseService(serviceId) {
  if (!serviceId) {
    return false;
  }

  return PURCHASE_ELIGIBLE_SERVICE_IDS.has(String(serviceId).trim().toLowerCase());
}

export function getEnquiryServiceSubject(serviceName) {
  if (typeof serviceName !== 'string') {
    return '';
  }

  return serviceName.trim();
}
