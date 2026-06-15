import { Navigate, useLocation } from 'react-router-dom'
import { getSubscriptionStatus, isLoggedIn } from '../lib/localStorage'

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  const hasPaid = getSubscriptionStatus()
  const authenticated = isLoggedIn()

  if (!hasPaid) {
    return <Navigate to="/payment" state={{ from: location }} replace />
  }
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children
}
