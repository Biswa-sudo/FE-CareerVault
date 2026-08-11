const PRODUCTION_BASE_URL = 'https://bentureai.com/bentureai/api';

function trimTrailingSlash(value) {
  return String(value || '').replace(/\/+$/, '');
}

export function getApiBaseUrl() {
  const configuredBaseUrl = import.meta.env.VITE_API_BASE_URL?.trim();
  if (configuredBaseUrl) {
    return trimTrailingSlash(configuredBaseUrl);
  }

  return PRODUCTION_BASE_URL;
}

function buildUrl(path) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${getApiBaseUrl()}${normalizedPath}`;
}

export async function apiRequest(path, options = {}) {
  const { method = 'GET', body, headers = {} } = options;
  const requestHeaders = {
    Accept: 'application/json',
    ...headers,
  };

  const init = {
    method,
    credentials: 'include',
    headers: requestHeaders,
  };

  if (body !== undefined) {
    requestHeaders['Content-Type'] = 'application/json';
    init.body = JSON.stringify(body);
  }

  const response = await fetch(buildUrl(path), init);
  const contentType = response.headers.get('content-type') || '';
  const payload = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof payload === 'object' && payload?.error
      ? payload.error
      : `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return payload;
}
