const KEYS = {
  SUBSCRIPTION: 'subscriptionStatus',
  PAYMENT_DATE: 'paymentDate',
  REGISTERED_USER: 'registeredUser',
  LOGGED_IN: 'loggedIn',
  CURRENT_USER: 'currentUser',
  CVS: 'cvs',
  DOCUMENTS: 'documents',
}

export function getSubscriptionStatus() {
  return localStorage.getItem(KEYS.SUBSCRIPTION) === 'active'
}

export function setSubscriptionActive() {
  localStorage.setItem(KEYS.SUBSCRIPTION, 'active')
  localStorage.setItem(KEYS.PAYMENT_DATE, new Date().toISOString())
}

export function getPaymentDate() {
  return localStorage.getItem(KEYS.PAYMENT_DATE)
}

export function getRegisteredUser() {
  const data = localStorage.getItem(KEYS.REGISTERED_USER)
  return data ? JSON.parse(data) : null
}

export function setRegisteredUser(user) {
  localStorage.setItem(KEYS.REGISTERED_USER, JSON.stringify(user))
}

export function isLoggedIn() {
  return localStorage.getItem(KEYS.LOGGED_IN) === 'true'
}

export function setLoggedIn(user) {
  localStorage.setItem(KEYS.LOGGED_IN, 'true')
  localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user))
}

export function logout() {
  localStorage.removeItem(KEYS.LOGGED_IN)
  localStorage.removeItem(KEYS.CURRENT_USER)
}

export function getCurrentUser() {
  const data = localStorage.getItem(KEYS.CURRENT_USER)
  return data ? JSON.parse(data) : null
}

export function getCVs() {
  const data = localStorage.getItem(KEYS.CVS)
  return data ? JSON.parse(data) : []
}

export function saveCV(cv) {
  const cvs = getCVs()
  const normalizedId = cv.id && cv.id !== 'new' ? cv.id : undefined
  const existingIndex = cvs.findIndex(c => c.id === cv.id)
  let savedCv
  if (existingIndex >= 0) {
    savedCv = { ...cv, id: normalizedId || cv.id, updatedAt: new Date().toISOString() }
    cvs[existingIndex] = savedCv
  } else {
    if (cvs.length >= 10) {
      throw new Error('CV limit reached (10).')
    }
    savedCv = { ...cv, id: normalizedId || crypto.randomUUID(), updatedAt: new Date().toISOString() }
    cvs.push(savedCv)
  }
  localStorage.setItem(KEYS.CVS, JSON.stringify(cvs))
  return savedCv
}

export function deleteCV(cvId) {
  const cvs = getCVs().filter(c => c.id !== cvId)
  localStorage.setItem(KEYS.CVS, JSON.stringify(cvs))
  return cvs
}

export function getDocuments() {
  const data = localStorage.getItem(KEYS.DOCUMENTS)
  return data ? JSON.parse(data) : []
}

export function saveDocument(doc) {
  const docs = getDocuments()
  docs.push({ ...doc, id: crypto.randomUUID(), uploadedAt: new Date().toISOString() })
  localStorage.setItem(KEYS.DOCUMENTS, JSON.stringify(docs))
  return docs
}

export function deleteDocument(docId) {
  const docs = getDocuments().filter(d => d.id !== docId)
  localStorage.setItem(KEYS.DOCUMENTS, JSON.stringify(docs))
  return docs
}
