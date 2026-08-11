import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { getSubscriptionStatus } from '../lib/localStorage'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const location = useLocation()
  const { authenticated, authLoading } = useAuth()
  const cachedSubscriptionValue = typeof window !== 'undefined'
    ? window.sessionStorage.getItem('bentureai_active_subscription')
    : null
  const initialHasPaid = cachedSubscriptionValue === 'active'

  const [hasPaid, setHasPaid] = useState(initialHasPaid)
  const [subscriptionLoading, setSubscriptionLoading] = useState(!initialHasPaid)

  useEffect(() => {
    const checkSubscription = async () => {
      if (!authenticated) {
        setHasPaid(false)
        setSubscriptionLoading(false)
        return
      }

      setSubscriptionLoading(true)

      try {
        const active = await getSubscriptionStatus()
        const nextHasPaid = Boolean(active)
        setHasPaid(nextHasPaid)

        if (nextHasPaid) {
          sessionStorage.setItem('bentureai_active_subscription', 'active')
        } else {
          sessionStorage.removeItem('bentureai_active_subscription')
        }
      } catch (error) {
        const cachedStatus = sessionStorage.getItem('bentureai_active_subscription') === 'active'
        if (cachedStatus) {
          setHasPaid(true)
        } else {
          setHasPaid(false)
        }
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
