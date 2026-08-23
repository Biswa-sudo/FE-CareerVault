import React, { useEffect, useState } from 'react'
import NotAuthorized from '../pages/NotAuthorized'
import { getSubscriptionStatus } from '../lib/localStorage'

export default function FeatureGate({
  productId = null,
  plan = null,
  serviceName = null,
  children,
}) {
  const [loading, setLoading] = useState(true)
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    let cancelled = false

    const check = async () => {
      try {
        const access = await getSubscriptionStatus(productId, plan)
        if (!cancelled) setHasAccess(access)
      } catch (e) {
        if (!cancelled) setHasAccess(false)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    check()

    return () => { cancelled = true }
  }, [productId, plan])

  if (loading) {
    return <div className="p-4 text-sm text-gray-500">Checking access...</div>
  }

  if (!hasAccess) {
    return (
      <NotAuthorized
        serviceName={serviceName || plan || 'Premium Service'}
        serviceId={plan || String(productId)}
      />
    )
  }
  return <>{children}</>
}
