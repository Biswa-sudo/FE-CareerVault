import { Navigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { getSubscriptionStatus } from '../lib/localStorage'

export default function ProtectedRoute({
  children,
  productId = null,
  plan = null,
  requireSubscription = true,
}) {
  const { authenticated, authLoading } = useAuth()
  const location = useLocation()

  const [subscriptionLoading, setSubscriptionLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    let cancelled = false

    const checkAccess = async () => {
      if (!authenticated) {
        if (!cancelled) {
          setHasAccess(false)
          setSubscriptionLoading(false)
        }
        return
      }

      if (!requireSubscription) {
        if (!cancelled) {
          setHasAccess(true)
          setSubscriptionLoading(false)
        }
        return
      }

      try {
        const access = await getSubscriptionStatus(productId, plan)

        if (!cancelled) {
          setHasAccess(access)
        }
      } catch (error) {
        console.error(
          '[ProtectedRoute] Subscription check failed:',
          error
        )

        if (!cancelled) {
          setHasAccess(false)
        }
      } finally {
        if (!cancelled) {
          setSubscriptionLoading(false)
        }
      }
    }

    checkAccess()

    return () => {
      cancelled = true
    }
  }, [authenticated, productId, plan, requireSubscription])

  if (authLoading || subscriptionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">
          Loading...
        </p>
      </div>
    )
  }

  if (!authenticated) {
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(
          location.pathname + location.search
        )}`}
        replace
      />
    )
  }

  if (requireSubscription && !hasAccess) {
    const params = new URLSearchParams()

    if (productId !== null) {
      params.set('product_id', String(productId))
    }

    if (plan) {
      params.set('plan', plan)
    }

    const queryString = params.toString()

    return (
      <Navigate
        to={queryString ? `/payment?${queryString}` : '/payment'}
        replace
      />
    )
  }

  return children
}