import { Link } from 'react-router-dom'
import { getCVs, getDocuments, getPaymentDate } from '../lib/localStorage'
import { useAuth } from '../context/AuthContext'
import Button from '../components/ui/Button'

export default function Dashboard() {
  const { user } = useAuth()
  const cvs = getCVs()
  const docs = getDocuments()
  const paymentDate = getPaymentDate()
  const nextBilling = paymentDate ? new Date(new Date(paymentDate).setFullYear(new Date(paymentDate).getFullYear() + 1)).toLocaleDateString() : 'N/A'

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-display font-bold">Welcome back, {user?.name}</h1>
        <p className="text-gray-500">Manage your CVs and documents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">CVs Created</p>
          <p className="text-3xl font-bold">{cvs.length}<span className="text-base font-normal text-gray-400">/10</span></p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">Documents Uploaded</p>
          <p className="text-3xl font-bold">{docs.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-sm text-gray-500">Subscription</p>
          <p className="text-lg font-semibold text-green-600">Active until {nextBilling}</p>
        </div>
      </div>

      <div className="flex gap-4">
        <Link to="/templates"><Button>Create New CV</Button></Link>
        <Link to="/documents"><Button variant="secondary">Upload Document</Button></Link>
      </div>

      {cvs.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-3">Recent CVs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cvs.slice(-3).reverse().map(cv => (
              <Link key={cv.id} to={`/editor/${cv.id}`} className="bg-white p-4 rounded-xl border hover:shadow-md transition-shadow">
                <p className="font-medium">{cv.name}</p>
                <p className="text-sm text-gray-400">Modified {new Date(cv.updatedAt).toLocaleDateString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
