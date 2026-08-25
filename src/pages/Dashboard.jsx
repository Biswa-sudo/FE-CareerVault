import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCVs, getDocuments, getPaymentDate, getAllSubscriptions } from '../lib/localStorage'
import { useAuth } from '../context/AuthContext'
import Button from '../components/ui/Button'
import { 
  FileText, 
  Upload, 
  Calendar, 
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe2,
  Sparkles,
  BriefcaseBusiness,
  MessageSquareText,
  Zap,
  CreditCard
} from 'lucide-react'

// Define plan types for display
const PLAN_TYPES = {
  'career-vault': {
    name: 'Career Vault',
    icon: BriefcaseBusiness,
    color: 'from-blue-500 to-indigo-500',
    features: [
      'Encrypted Document Storage',
      'Manage Up to 5 Active CVs',
      'Public Portfolio Link',
      'One-Click PDF Export'
    ]
  },
  'career-vault-pro': {
    name: 'Career Vault + AI',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-500',
    features: [
      'AI CV Optimization & Scoring',
      'Role-Based Mock Interviews',
      'Real-Time Answer Feedback',
      'Skill Progression Tracking'
    ]
  },
  'spoken-english': {
    name: 'Spoken English & Fluency',
    icon: MessageSquareText,
    color: 'from-emerald-500 to-teal-500',
    features: [
      'Daily Speaking Drills',
      'Real-World Workplace Scenarios',
      'Pronunciation & Tone Guidance',
      'Confidence Milestones'
    ]
  }
}

// Profile Tab Component
const ProfileTab = ({ user, logout }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-lg space-y-4">
        <div>
          <span className="text-sm text-gray-500">Name</span>
          <p className="font-medium">{user?.name || 'Not set'}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Email</span>
          <p className="font-medium">{user?.email || 'Not set'}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Public Profile URL</span>
          <p className="font-medium text-indigo-600">
            hyper.com/profile/{user?.name?.toLowerCase().replace(/\s/g, '') || 'username'}
          </p>
        </div>
        <button className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          Edit Profile
        </button>
        <hr />
        <div>
          <h4 className="font-medium text-red-600">Account Actions</h4>
          <Button variant="danger" onClick={logout} className="mt-2">
            Logout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [cvs, setCvs] = useState([])
  const [docs, setDocs] = useState([])
  const [paymentDate, setPaymentDate] = useState(null)
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    const loadData = async () => {
      try {
        const [nextCvs, nextDocs, nextPaymentDate] = await Promise.all([
          getCVs(),
          getDocuments(),
          getPaymentDate(),
        ])
        setCvs(nextCvs)
        setDocs(nextDocs)
        setPaymentDate(nextPaymentDate)
        try {
          const subs = await getAllSubscriptions()
          setSubscriptions(subs)
        } catch (e) {
          // ignore subscription fetch errors, already handled by outer try
        }
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load dashboard data.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  // Helpers to safely render subscription fields
  const safeString = (val) => {
    if (val === null || val === undefined) return ''
    if (typeof val === 'string' || typeof val === 'number') return String(val)
    if (typeof val === 'object') return val.name || val.title || val.id || JSON.stringify(val)
    return String(val)
  }

  const parseDate = (val) => {
    if (!val) return null
    if (typeof val === 'string' || typeof val === 'number') {
      const d = new Date(val)
      return isNaN(d.getTime()) ? null : d
    }
    if (typeof val === 'object') {
      const candidate = val.date || val.starts_at || val.startsAt || val.start || val.created_at
      if (candidate) {
        const d = new Date(candidate)
        return isNaN(d.getTime()) ? null : d
      }
    }
    return null
  }

  const nextBilling = paymentDate 
    ? new Date(new Date(paymentDate).setFullYear(new Date(paymentDate).getFullYear() + 1)).toLocaleDateString() 
    : 'N/A'

  // Active subscriptions
  const activeSubscriptions = Array.isArray(subscriptions)
    ? subscriptions.filter(s => s && s.status === 'active')
    : []

  // Check if user has active subscription (fallback to paymentDate)
  const hasActiveSubscription = activeSubscriptions.length > 0 || paymentDate !== null

  // Get user's primary plan (prefer first active subscription)
  const userPlan = hasActiveSubscription
    ? (activeSubscriptions[0]?.product_id || activeSubscriptions[0]?.productId || 'career-vault-pro')
    : null
  const planDetails = userPlan ? PLAN_TYPES[userPlan] : null

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
            <p className="text-sm text-slate-600">Loading dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome back, <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{user?.name}</span>
            </h1>
            <p className="text-slate-600 mt-1">Manage your CVs, documents, and subscription</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200">
              🇮🇳 Built for Bharat
            </span>
          </div>
        </div>
      {/* Stats Grid */}
            {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">CVs Created</p>
                <p className="text-3xl font-bold text-slate-800">
                  {cvs.length}
                  <span className="text-base font-normal text-slate-400 ml-1">/10</span>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">Documents Uploaded</p>
                <p className="text-3xl font-bold text-slate-800">{docs.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">Subscription Status</p>
                <div className="flex items-center gap-2 mt-1">
                  {hasActiveSubscription ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <p className="text-lg font-semibold text-emerald-600">Active</p>
                    </>
                  ) : (
                    <>
                      <Clock className="w-5 h-5 text-amber-500" />
                      <p className="text-lg font-semibold text-amber-600">Inactive</p>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">Next Billing</p>
                <p className="text-lg font-semibold text-slate-800">{nextBilling}</p>
                {!hasActiveSubscription && (
                  <p className="text-xs text-slate-500 mt-1">No active subscription</p>
                )}
              </div>
            </div> */}

            {/* Active Plan Section */}
             {/* Active subscriptions list */}
              <div className="p-6 border-t border-slate-200">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Your Active Subscriptions</h3>
                {activeSubscriptions.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeSubscriptions.map((s, idx) => {
                        const prod = s.product_id || s.productId || s.product || 'unknown'
                        const prodName = PLAN_TYPES[prod]?.name || safeString(prod)
                        const planLabel = s && (typeof s.plan === 'object' ? safeString(s.plan) : (s.plan || s.plan_id || s.planId)) || 'Plan'

                        const startedDate = parseDate(s && (s.starts_at || s.startsAt || s.start_date || s.created_at))
                        const expiresDate = parseDate(s && (s.expires_at || s.expiresAt || s.expiry_date || s.expires_at_date))

                        return (
                          <div key={idx} className="bg-white p-4 rounded-lg border border-slate-100">
                            <div className="flex items-start justify-between">
                              <div>
                                {/* <p className="text-sm text-slate-500">{prodName || 'Subscription'}</p> */}
                                <p className="font-medium text-slate-800">{safeString(planLabel)}</p>
                              </div>
                              <div className="text-sm text-slate-500 text-right">
                                <p>Started: {startedDate ? startedDate.toLocaleDateString() : '—'}</p>
                                <p>Expires: {expiresDate ? expiresDate.toLocaleDateString() : '—'}</p>
                              </div>
                            </div>
                            <Button
                              className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200"
                              onClick={() => {
                                // Determine plan key and product for routing
                                const planKey = (s && (s.plan || s.plan_id || s.planId || s.key || s.planKey)) || ''
                                const planStr = safeString(planKey).toLowerCase()

                                // If subscription corresponds to Spoken English
                                if (planStr.includes('spoken-english') || planStr.includes('spoken')) {
                                  navigate('/spoken-english')
                                  return
                                }

                                // If subscription corresponds to Career Vault (any career-vault plan)
                                if (planStr.includes('career-vault') || planStr.includes('career')) {
                                  navigate('/dashboard')
                                  return
                                }

                                // Fallback: open payment page with plan/product prefilled
                                const productId = safeString(s.product_id || s.productId || s.product || s.productId)
                                const params = new URLSearchParams()
                                if (planKey) params.set('plan', safeString(planKey))
                                if (productId) params.set('product_id', productId)
                                navigate(`/payment?${params.toString()}`)
                              }}
                            >
                              Continue
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        )
                      })}
                  </div>
                ) : (
                  <p className="text-sm text-slate-600">You have no active subscriptions.</p>
                )}
              </div>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
              {hasActiveSubscription && planDetails ? (
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${planDetails.color} text-white`}>
                      <planDetails.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">{planDetails.name}</h3>
                      <p className="text-sm text-slate-600">Active until {nextBilling}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                    {planDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">Ready to unlock your career potential?</h3>
                        <p className="text-sm text-slate-600 mt-1">
                          Subscribe to get access to AI-powered CV optimization, interview practice, and more.
                        </p>
                        <Link to="/payment">
                          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200">
                            Browse Plans
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
             
            </div>

            {/* Action Buttons */}
            {/* <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/templates">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200">
                  <FileText className="w-4 h-4 mr-2" />
                  Create New CV
                </Button>
              </Link>
              <Link to="/documents">
                <Button variant="secondary" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </Link>
              <Link to="/payment">
                <Button variant="secondary" className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200">
                  <CreditCard className="w-4 h-4 mr-2" />
                  Manage Subscription
                </Button>
              </Link>
            </div> */}

            {/* Recent CVs */}
            {cvs.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-slate-800 mb-3">Recent CVs</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cvs.slice(-3).reverse().map(cv => (
                    <Link 
                      key={cv.id} 
                      to={`/editor/${cv.id}`} 
                      className="bg-white p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200"
                    >
                      <p className="font-medium text-slate-800">{cv.name}</p>
                      <p className="text-sm text-slate-400 mt-1">
                        Modified {new Date(cv.updatedAt).toLocaleDateString()}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Trust Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                    <Users className="w-5 h-5" />
                    <span className="text-2xl font-bold text-slate-800">5,000+</span>
                  </div>
                  <p className="text-xs text-slate-600">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-2xl font-bold text-slate-800">DPIIT</span>
                  </div>
                  <p className="text-xs text-slate-600">Recognized Startup</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                    <Globe2 className="w-5 h-5" />
                    <span className="text-2xl font-bold text-slate-800">🇮🇳</span>
                  </div>
                  <p className="text-xs text-slate-600">Built for Bharat</p>
                </div>
              </div>
            </div>
       
      </div>
    </div>
  )
}