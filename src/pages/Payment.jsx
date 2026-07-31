import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { setSubscriptionActive } from '../lib/localStorage'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function Payment() {
  const [step, setStep] = useState('form')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handlePay = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await setSubscriptionActive()
      navigate('/payment/success')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Payment activation failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border">
        <div className="flex items-center gap-2 mb-6 text-sm text-gray-500">
          <span className="font-semibold text-primary-600">Select Plan</span>
          <span>→</span>
          <span className="font-semibold text-primary-600">Payment</span>
          <span>→</span>
          <span>Confirmation</span>
        </div>
        <h2 className="text-2xl font-display font-bold mb-2">Complete Payment</h2>
        <p className="text-gray-600 mb-6">₹100/year · All features unlocked</p>
        {error && <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
        <form onSubmit={handlePay}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Payment Method</label>
              <div className="grid grid-cols-3 gap-2">
                {['Card', 'UPI', 'Netbanking'].map(method => (
                  <label key={method} className="border rounded-lg p-3 text-center cursor-pointer has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50">
                    <input type="radio" name="method" defaultChecked={method === 'Card'} className="sr-only" />
                    <span className="text-sm">{method}</span>
                  </label>
                ))}
              </div>
            </div>
            <Input label="Card Number" placeholder="1234 5678 9012 3456" />
            <div className="flex gap-4">
              <Input label="Expiry" placeholder="MM/YY" />
              <Input label="CVV" placeholder="123" />
            </div>
            <Input label="Cardholder Name" placeholder="John Doe" />
          </div>
          <Button type="submit" disabled={loading} className="w-full mt-6">
            {loading ? 'Processing...' : 'Pay ₹100'}
          </Button>
        </form>
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
          <span>🔒 Secure SSL Encrypted</span>
        </div>
        <Link to="/" className="block text-center text-sm text-gray-500 mt-4 hover:underline">← Cancel</Link>
      </div>
    </div>
  )
}
