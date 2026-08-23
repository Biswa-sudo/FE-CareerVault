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

export async function getSubscriptionStatus(
  productId = null,
  plan = null
) {
  try {
    const params = new URLSearchParams();

    if (productId !== null && productId !== undefined) {
      params.set('product_id', String(productId));
    }

    if (plan) {
      params.set('plan', String(plan));
    }

    const query = params.toString();

    const response = await apiRequest(
      `/subscription.php${query ? `?${query}` : ''}`
    );

    return response.status === 'active';
  } catch (error) {
    if (error instanceof Error && /401|Unauthorized/.test(error.message)) {
      return false;
    }

    throw error;
  }
}

export async function getSubscriptionDetails(
  productId = null,
  plan = null
) {
  try {
    const params = new URLSearchParams();

    if (productId !== null && productId !== undefined) {
      params.set('product_id', String(productId));
    }

    if (plan) {
      params.set('plan', String(plan));
    }

    const query = params.toString();

    return await apiRequest(
      `/subscription.php${query ? `?${query}` : ''}`
    );
  } catch (error) {
    if (error instanceof Error && /401|Unauthorized/.test(error.message)) {
      return {
        status: 'inactive',
        productId: productId,
        planId: plan,
        paymentDate: null,
        startsAt: null,
        expiresAt: null,
      };
    }

    throw error;
  }
}

export async function hasAnyActiveSubscription() {
  try {
    const response = await apiRequest('/subscription.php');

    if (response && Array.isArray(response.subscriptions)) {
      return response.subscriptions.some(s => s.status === 'active');
    }

    return false;
  } catch (error) {
    if (error instanceof Error && /401|Unauthorized/.test(error.message)) {
      return false;
    }
    throw error;
  }
}

export async function getPaymentDate(productId = null, plan = null) {
  const details = await getSubscriptionDetails(productId, plan);
  return details.paymentDate || null;
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