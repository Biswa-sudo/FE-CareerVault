import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getSubscriptionStatus } from '../lib/localStorage'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  const { authenticated, authLoading } = useAuth()
  const [hasPaid, setHasPaid] = useState(false)
  const [subscriptionLoading, setSubscriptionLoading] = useState(true)

  useEffect(() => {
    const checkSubscription = async () => {
      if (!authenticated) {
        setHasPaid(false)
        setSubscriptionLoading(false)
        return
      }

      try {
        const active = await getSubscriptionStatus()
        setHasPaid(active)
      } finally {
        setSubscriptionLoading(false)
      }
    }

    checkSubscription()
  }, [authenticated])

  if (authLoading || subscriptionLoading) {
    return <div className="p-6 text-sm text-gray-500">Checking access...</div>
  }

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if (!hasPaid) {
    return <Navigate to="/payment" state={{ from: location }} replace />
  }
  return children
}
