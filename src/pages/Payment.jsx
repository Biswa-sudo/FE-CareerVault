import { useEffect, useState } from 'react'
import { useNavigate, Link, useLocation, useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getPaymentConfig, startUpiPayment } from '../lib/paymentService'
import { getSubscriptionStatus } from '../lib/localStorage'
import Button from '../components/ui/Button'
import { resolvePaymentPlan } from '../lib/paymentPlans'

export default function Payment() {
  const { authenticated, authLoading, user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [configLoading, setConfigLoading] = useState(true)
  const [error, setError] = useState('')
  const [paymentConfig, setPaymentConfig] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  
  // Log raw params from URL
  const rawAmount = searchParams.get('amount');
  const rawPlan = searchParams.get('plan');
  console.log('[Payment] Raw URL params:', { plan: rawPlan, amount: rawAmount, amountType: typeof rawAmount });
  
  const selectedPlan = resolvePaymentPlan(rawPlan, {
    amount: rawAmount,
    title: searchParams.get('title'),
    description: searchParams.get('description'),
  })
  
  console.log('[Payment] Resolved plan:', { key: selectedPlan.key, amount: selectedPlan.amount, displayAmount: selectedPlan.displayAmount });

  useEffect(() => {
    let cancelled = false

    const loadConfig = async () => {
      try {
        const config = await getPaymentConfig()
        if (!cancelled) {
          setPaymentConfig(config)
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : 'Failed to load payment configuration.')
        }
      } finally {
        if (!cancelled) {
          setConfigLoading(false)
        }
      }
    }

    loadConfig()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    const checkActiveSubscription = async () => {
      if (!authenticated) {
        return
      }

      try {
        const active = await getSubscriptionStatus()
        if (!cancelled && active) {
          navigate('/dashboard', { replace: true })
        }
      } catch (e) {
        // Ignore; payment page is still allowed if subscription check fails.
      }
    }

    checkActiveSubscription()
    return () => {
      cancelled = true
    }
  }, [authenticated, navigate])

  const handlePay = async () => {
    setLoading(true)
    setError('')

    console.log('[Payment.handlePay] Starting payment with plan:', { 
      plan: selectedPlan.key,
      amount: selectedPlan.amount, 
      displayAmount: selectedPlan.displayAmount,
      title: selectedPlan.name 
    });

    // SAFETY CHECK: Verify amount is not the default if custom amount was provided
    if (searchParams.get('amount')) {
      const urlAmount = Number(searchParams.get('amount'));
      if (selectedPlan.amount !== urlAmount) {
        console.warn('[Payment.handlePay] WARNING: selectedPlan.amount differs from URL amount!', { 
          urlAmount, 
          selectedAmount: selectedPlan.amount 
        });
      }
    }

    try {
      console.log('[Payment.handlePay] Calling startUpiPayment with amount:', selectedPlan.amount);
      await startUpiPayment({
        amount: selectedPlan.amount,
        currency: 'INR',
        description: selectedPlan.description,
        plan: selectedPlan.key,
        onDismiss: () => setLoading(false),
      })
      navigate('/payment/success', { replace: true })


    } catch (e) {
      const message = e instanceof Error ? e.message : 'Payment failed. Please try again.'
      if (message !== 'Payment cancelled.') {
        setError(message)
      }
    } finally {
      setLoading(false)
    }
  }

  const loginRedirect = `/login?redirect=${encodeURIComponent(location.pathname)}`

  if (authLoading || configLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <p className="text-sm text-gray-500">Loading payment...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
          <span className="font-semibold text-primary-600">Account</span>
          <span>→</span>
          <span className="font-semibold text-primary-600">Payment</span>
          <span>→</span>
          <span>Confirmation</span>
        </div>

        <h2 className="text-2xl font-display font-bold mb-2">Complete Payment</h2>
        <p className="text-gray-600 mb-2">
          {selectedPlan.name}
        </p>
        <p className="text-gray-600 mb-2">
          ₹{selectedPlan.displayAmount}/year · {selectedPlan.description}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Pay securely with UPI (Google Pay, PhonePe, Paytm) or card via Razorpay.
        </p>

        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {error}
          </p>
        )}

        {!authenticated ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 space-y-3">
            <p className="text-sm text-amber-900">
              Sign in or create an account before paying so your subscription is linked to your profile.
            </p>
            <div className="flex flex-col gap-2">
              <Link to={loginRedirect}>
                <Button className="w-full">Log in to pay</Button>
              </Link>
              <Link to={`/signup?redirect=${encodeURIComponent(location.pathname)}`}>
                <Button variant="secondary" className="w-full">Create account</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-xl border bg-gray-50 p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">Paying as</p>
              <p className="font-medium text-gray-900">{user?.name}</p>
              <p className="text-sm text-gray-600">{user?.email}</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm font-medium text-gray-900 mb-3">Payment method</p>
              <div className="flex items-center gap-3 rounded-lg border border-primary-200 bg-primary-50 p-3">
                <span className="text-2xl" aria-hidden="true">📱</span>
                <div>
                  <p className="font-medium text-primary-900">UPI</p>
                  <p className="text-xs text-primary-700">Google Pay, PhonePe, Paytm & more</p>
                </div>
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Card and netbanking are also available in the Razorpay checkout window.
              </p>
            </div>

            {!paymentConfig?.configured && (
              <p className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
                Payment gateway is not configured on the server yet. Add Razorpay API keys to enable checkout.
              </p>
            )}

            <Button
              type="button"
              disabled={loading || !paymentConfig?.configured}
              className="w-full"
              onClick={handlePay}
            >
              {loading ? 'Opening checkout...' : `Pay ₹${selectedPlan.displayAmount} with UPI`}
            </Button>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
          <span>🔒 Secured by Razorpay</span>
        </div>
        <Link to="/" className="block text-center text-sm text-gray-500 mt-4 hover:underline">
          ← Cancel
        </Link>
      </div>
    </div>
  )
}
