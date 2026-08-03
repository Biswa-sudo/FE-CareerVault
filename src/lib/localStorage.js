import { apiRequest } from './apiClient';

const CV_LIMIT = 10;

export async function signUpUser(user) {
  const response = await apiRequest('/auth.php?action=signup', {
    method: 'POST',
    body: user,
  });
  return response.user || null;
}

export async function loginUser(email, password) {
  const response = await apiRequest('/auth.php?action=login', {
    method: 'POST',
    body: { email, password },
  });
  return response.user || null;
}

export async function getSession() {
  try {
    const response = await apiRequest('/auth.php?action=session');
    return {
      authenticated: Boolean(response.authenticated),
      user: response.user || null,
    };
  } catch (error) {
    if (error instanceof Error && /401|Unauthorized/.test(error.message)) {
      return {
        authenticated: false,
        user: null,
      };
    }
    throw error;
  }
}

export async function getSubscriptionStatus() {
  try {
    const response = await apiRequest('/subscription.php');
    return response.status === 'active';
  } catch (error) {
    if (error instanceof Error && /401|Unauthorized/.test(error.message)) {
      return false;
    }
    throw error;
  }
}

export async function getPaymentDate() {
  const response = await apiRequest('/subscription.php');
  return response.paymentDate || null;
}

export async function logout() {
  await apiRequest('/auth.php?action=logout', { method: 'POST' });
}

export async function isLoggedIn() {
  const session = await getSession();
  return session.authenticated;
}

export async function getCurrentUser() {
  const session = await getSession();
  return session.user;
}

export async function getCVs() {
  const response = await apiRequest('/cvs.php');
  return Array.isArray(response.items) ? response.items : [];
}

export async function saveCV(cv) {
  const current = await getCVs();
  const isNew = !cv.id || cv.id === 'new';
  if (isNew && current.length >= CV_LIMIT) {
    throw new Error('CV limit reached (10).');
  }

  const response = await apiRequest('/cvs.php', {
    method: isNew ? 'POST' : 'PUT',
    body: cv,
  });

  return response.item;
}

export async function deleteCV(cvId) {
  await apiRequest(`/cvs.php?id=${encodeURIComponent(cvId)}`, {
    method: 'DELETE',
  });

  return getCVs();
}

export async function getDocuments() {
  const response = await apiRequest('/documents.php');
  return Array.isArray(response.items) ? response.items : [];
}

export async function saveDocument(doc) {
  await apiRequest('/documents.php', {
    method: 'POST',
    body: doc,
  });
  return getDocuments();
}

export async function deleteDocument(docId) {
  await apiRequest(`/documents.php?id=${encodeURIComponent(docId)}`, {
    method: 'DELETE',
  });
  return getDocuments();
}
