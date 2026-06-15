import { useAuth } from '../context/AuthContext'
import { getPaymentDate } from '../lib/localStorage'
import Button from '../components/ui/Button'

export default function Account() {
  const { user, logout } = useAuth()
  const paymentDate = getPaymentDate()
  const nextBilling = paymentDate ? new Date(new Date(paymentDate).setFullYear(new Date(paymentDate).getFullYear() + 1)).toLocaleDateString() : 'N/A'

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-display font-bold">Account</h1>
      <div className="bg-white p-6 rounded-xl border space-y-3">
        <div>
          <span className="text-sm text-gray-500">Name</span>
          <p className="font-medium">{user?.name}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Email</span>
          <p className="font-medium">{user?.email}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Subscription</span>
          <p className="font-medium text-green-600">Active until {nextBilling}</p>
        </div>
      </div>
      <Button variant="danger" onClick={logout} className="w-full">Logout</Button>
    </div>
  )
}
