import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { getCVs, getDocuments, getPaymentDate, deleteCV } from '../lib/localStorage'
import { useAuth } from '../context/AuthContext'
import Button from '../components/ui/Button'
import CVPreview from '../components/CVPreview'
import { getTemplateById } from '../data/templates'
import { getTemplateDefaults } from '../data/templateDefaults'
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
  CreditCard,
  FolderOpen,
  Plus,
  Download,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
  LayoutTemplate,
  HardDrive,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Code,
  Mic2,
  Brain,
  Target,
  Trophy
} from 'lucide-react'

// Define plan types for display
const PLAN_TYPES = {
  'career-vault': {
    name: 'Career Vault',
    icon: BriefcaseBusiness,
    color: 'from-blue-500 to-indigo-500',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
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
    badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
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
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    features: [
      'Daily Speaking Drills',
      'Real-World Workplace Scenarios',
      'Pronunciation & Tone Guidance',
      'Confidence Milestones'
    ]
  }
}

const A4_PREVIEW_WIDTH = 794
const A4_PREVIEW_HEIGHT = 1123

const getDefaultSidebarLayout = () => ([
  { id: 'contact-base', type: 'contact', source: 'base' },
  { id: 'skills-base', type: 'skills', source: 'base' },
  { id: 'education-base', type: 'education', source: 'base' },
  { id: 'certifications-base', type: 'certifications', source: 'base' },
])

const getDefaultMainLayout = () => ([
  { id: 'experience-base', type: 'experience', source: 'base' },
  { id: 'projects-base', type: 'projects', source: 'base' },
  { id: 'technicalSummary-base', type: 'technicalSummary', source: 'base' },
])

const toValue = (item) => {
  if (typeof item === 'string') return item
  return item?.value || ''
}

const toAchievements = (entry) => {
  if (entry?.achievementsText) {
    return entry.achievementsText.split('\n').filter(Boolean)
  }
  if (Array.isArray(entry?.achievements)) {
    return entry.achievements.filter(Boolean)
  }
  return []
}

const normalizeItemArray = (value) => (Array.isArray(value) ? value : [])

function buildPreviewData(data = {}, templateId = 'classic-professional') {
  const formData = data || {}

  if (templateId === 'executive-pro') {
    const defaults = getTemplateDefaults('executive-pro') || {}
    const sourceLayout = formData.sectionLayout || defaults.sectionLayout || { sidebar: [], main: [] }
    const sourceContent = formData.sectionContent || defaults.sectionContent || {}
    const sourceInstances = formData.sectionInstances || {}

    const normalizeLayout = (list = []) =>
      list.map((entry) => ({ source: 'base', ...entry }))

    const sectionTypes = new Set([
      ...Object.keys(sourceContent),
      ...Object.keys(sourceInstances),
    ])

    const normalizedSectionContent = {}
    sectionTypes.forEach((type) => {
      const bucket = sourceContent[type] || {}
      const inferredInstances = normalizeItemArray(sourceInstances[type]).map((instance) => instance?.data || {})
      normalizedSectionContent[type] = {
        ...bucket,
        base: bucket.base || {},
        instances: inferredInstances.length ? inferredInstances : (bucket.instances || []),
      }
    })

    return {
      personalInfo: formData.personalInfo || defaults.personalInfo || {},
      sectionHeadings: formData.sectionHeadings || defaults.sectionHeadings || {},
      sectionLayout: {
        sidebar: normalizeLayout(sourceLayout.sidebar),
        main: normalizeLayout(sourceLayout.main),
      },
      sectionContent: normalizedSectionContent,
    }
  }

  const baseContact = {
    email: formData.personalInfo?.email || '',
    phone: formData.personalInfo?.phone || '',
    location: formData.personalInfo?.location || '',
    linkedin: formData.personalInfo?.linkedin || '',
    github: formData.personalInfo?.github || '',
  }

  const baseSkills = normalizeItemArray(formData.skills).map(toValue).filter(Boolean)
  const baseEducation = normalizeItemArray(formData.education)
  const baseCertifications = normalizeItemArray(formData.certifications).map(toValue).filter(Boolean)
  const baseExperience = normalizeItemArray(formData.experience).map((entry) => ({
    title: entry?.title || '',
    company: entry?.company || '',
    location: entry?.location || '',
    duration: entry?.duration || '',
    achievements: toAchievements(entry),
  }))
  const baseProjects = normalizeItemArray(formData.projects)
  const baseTechnicalSummary = formData.technicalSummary || {}

  const instanceData = {
    contact: normalizeItemArray(formData.sectionInstances?.contact).map((entry) => entry?.data || {}),
    skills: normalizeItemArray(formData.sectionInstances?.skills).map((entry) => ({
      items: normalizeItemArray(entry?.data?.items).map(toValue).filter(Boolean),
    })),
    education: normalizeItemArray(formData.sectionInstances?.education).map((entry) => ({
      items: normalizeItemArray(entry?.data?.items),
    })),
    certifications: normalizeItemArray(formData.sectionInstances?.certifications).map((entry) => ({
      items: normalizeItemArray(entry?.data?.items).map(toValue).filter(Boolean),
    })),
    experience: normalizeItemArray(formData.sectionInstances?.experience).map((entry) => ({
      items: normalizeItemArray(entry?.data?.items).map((item) => ({
        title: item?.title || '',
        company: item?.company || '',
        location: item?.location || '',
        duration: item?.duration || '',
        achievements: toAchievements(item),
      })),
    })),
    projects: normalizeItemArray(formData.sectionInstances?.projects).map((entry) => ({
      items: normalizeItemArray(entry?.data?.items),
    })),
    technicalSummary: normalizeItemArray(formData.sectionInstances?.technicalSummary).map((entry) => entry?.data || {}),
  }

  return {
    personalInfo: formData.personalInfo || {},
    skills: baseSkills,
    education: baseEducation,
    certifications: baseCertifications,
    experience: baseExperience,
    projects: baseProjects,
    technicalSummary: baseTechnicalSummary,
    sectionHeadings: formData.sectionHeadings || {},
    technicalSummaryLabels: formData.technicalSummaryLabels || {},
    sectionLayout: formData.sectionLayout || {
      sidebar: getDefaultSidebarLayout(),
      main: getDefaultMainLayout(),
    },
    sectionContent: {
      contact: {
        base: baseContact,
        instances: instanceData.contact,
      },
      skills: {
        base: { items: baseSkills },
        instances: instanceData.skills,
      },
      education: {
        base: { items: baseEducation },
        instances: instanceData.education,
      },
      certifications: {
        base: { items: baseCertifications },
        instances: instanceData.certifications,
      },
      experience: {
        base: { items: baseExperience },
        instances: instanceData.experience,
      },
      projects: {
        base: { items: baseProjects },
        instances: instanceData.projects,
      },
      technicalSummary: {
        base: baseTechnicalSummary,
        instances: instanceData.technicalSummary,
      },
    },
  }
}

function LiveCVCardPreview({ cvData, template }) {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(0.25)

  useEffect(() => {
    if (!containerRef.current) return undefined

    const updateScale = () => {
      const width = containerRef.current?.clientWidth || 0
      if (!width) return
      setScale(width / A4_PREVIEW_WIDTH)
    }

    updateScale()

    const observer = new ResizeObserver(updateScale)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full aspect-[210/297] overflow-hidden rounded border border-gray-200 bg-white">
      <div
        className="absolute left-0 top-0 origin-top-left pointer-events-none"
        style={{
          width: `${A4_PREVIEW_WIDTH}px`,
          minHeight: `${A4_PREVIEW_HEIGHT}px`,
          transform: `scale(${scale})`,
        }}
      >
        <CVPreview cvData={cvData} template={template} />
      </div>
    </div>
  )
}

// Quick Action Card Component
const QuickActionCard = ({ icon: Icon, title, description, to, buttonText, color = 'indigo' }) => {
  const colorMap = {
    indigo: 'from-indigo-500 to-purple-600',
    blue: 'from-blue-500 to-cyan-600',
    emerald: 'from-emerald-500 to-teal-600',
    amber: 'from-amber-500 to-orange-600',
    rose: 'from-rose-500 to-pink-600'
  }

  return (
    <Link to={to} className="block group">
      <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 h-full">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorMap[color]} text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
        <p className="text-sm text-slate-600 mb-4">{description}</p>
        <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
          {buttonText}
          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}

// Recent Activity Card Component
const RecentCVCard = ({ cv, onEdit, onDownload, onDelete }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 rounded-lg">
            <FileText className="w-4 h-4 text-indigo-600" />
          </div>
          <div>
            <p className="font-medium text-slate-800 text-sm">{cv.name}</p>
            <p className="text-xs text-slate-400">Updated {new Date(cv.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
          Active
        </span>
      </div>
      <div className="flex gap-2 mt-3 pt-3 border-t border-slate-100">
        <button 
          onClick={() => onEdit(cv)}
          className="flex-1 text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <Edit className="w-3 h-3" />
          Edit
        </button>
        <button 
          onClick={() => onDownload(cv)}
          className="flex-1 text-xs bg-slate-50 hover:bg-slate-100 text-slate-700 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <Download className="w-3 h-3" />
          Download
        </button>
        <button 
          onClick={() => onDelete(cv.id)}
          className="flex-1 text-xs bg-rose-50 hover:bg-rose-100 text-rose-600 px-2 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1"
        >
          <Trash2 className="w-3 h-3" />
          Delete
        </button>
      </div>
    </div>
  )
}

// Recent Document Card
const RecentDocumentCard = ({ doc }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-blue-50 rounded-lg">
          <FileText className="w-4 h-4 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-slate-800 text-sm truncate">{doc.name}</p>
          <p className="text-xs text-slate-400">{doc.type || 'Document'} • {new Date(doc.uploadedAt).toLocaleDateString()}</p>
        </div>
        <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
          <Download className="w-4 h-4" />
        </button>
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
        setCvs(nextCvs || [])
        setDocs(nextDocs || [])
        setPaymentDate(nextPaymentDate)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load dashboard data.')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  const nextBilling = paymentDate 
    ? new Date(new Date(paymentDate).setFullYear(new Date(paymentDate).getFullYear() + 1)).toLocaleDateString() 
    : 'N/A'

  const hasActiveSubscription = paymentDate !== null
  const userPlan = hasActiveSubscription ? 'career-vault-pro' : null
  const planDetails = userPlan ? PLAN_TYPES[userPlan] : null

  const handleEditCV = (cv) => {
    navigate(`/editor/${cv.id}?template=${cv.templateId}`)
  }

  const handleDownloadCV = (cv) => {
    navigate(`/editor/${cv.id}?template=${cv.templateId}&print=true`)
  }

  const handleDeleteCV = async (id) => {
    if (window.confirm('Delete this CV?')) {
      try {
        await deleteCV(id)
        const updated = await getCVs()
        setCvs(updated)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Delete failed.')
      }
    }
  }

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

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'cvs', label: `My CVs (${cvs.length})` },
    { id: 'documents', label: `Documents (${docs.length})` },

  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex gap-1 border-b border-slate-200 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">CVs Created</p>
                <p className="text-3xl font-bold text-slate-800">
                  {cvs.length}
                  <span className="text-base font-normal text-slate-400 ml-1">/10</span>
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">Documents</p>
                <p className="text-3xl font-bold text-slate-800">{docs.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <p className="text-sm text-slate-600">Plan Status</p>
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
            </div>

          

            {/* Quick Actions */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <QuickActionCard
                  icon={Plus}
                  title="Create New CV"
                  description="Build a professional CV with our templates"
                  to="/templates"
                  buttonText="Start Building"
                  color="indigo"
                />
                <QuickActionCard
                  icon={Upload}
                  title="Upload Document"
                  description="Store your documents securely"
                  to="/documents"
                  buttonText="Upload Now"
                  color="blue"
                />
                <QuickActionCard
                  icon={LayoutTemplate}
                  title="Browse Templates"
                  description="Choose from professional designs"
                  to="/templates"
                  buttonText="View Templates"
                  color="emerald"
                />
                <QuickActionCard
                  icon={CreditCard}
                  title="Manage Plan"
                  description="Upgrade or manage your subscription"
                  to="/payment"
                  buttonText="Manage Subscription"
                  color="amber"
                />
              </div>
            </div>

            {/* Recent Activity - CVs & Documents */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent CVs */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-indigo-600" />
                    My CVs
                  </h2>
                  <Link to="/my-cvs" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                {cvs.length === 0 ? (
                  <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                    <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">No CVs yet</p>
                    <Link to="/templates">
                      <Button className="mt-3 bg-indigo-600 hover:bg-indigo-700 text-white">
                        Create Your First CV
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {cvs.slice(0, 3).map((cv) => (
                      <RecentCVCard
                        key={cv.id}
                        cv={cv}
                        onEdit={handleEditCV}
                        onDownload={handleDownloadCV}
                        onDelete={handleDeleteCV}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Documents */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-indigo-600" />
                    Recent Documents
                  </h2>
                  <Link to="/documents" className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1">
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                {docs.length === 0 ? (
                  <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                    <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">No documents uploaded</p>
                    <Link to="/documents">
                      <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                        Upload Document
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {docs.slice(0, 3).map((doc, index) => (
                      <RecentDocumentCard key={index} doc={doc} />
                    ))}
                  </div>
                )}
              </div>
            </div>

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
          </>
        )}

        {/* My CVs Tab */}
        {activeTab === 'cvs' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-slate-800">My CVs ({cvs.length}/10)</h1>
              <Link to="/templates">
                <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-200">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </Link>
            </div>

            {cvs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-indigo-50 rounded-full">
                    <FileText className="w-12 h-12 text-indigo-400" />
                  </div>
                </div>
                <p className="text-lg text-slate-600">No CVs created yet</p>
                <p className="text-sm text-slate-400 mt-1">Start building your professional CV</p>
                <Link to="/templates">
                  <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                    Create Your First CV
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cvs.map((cv) => {
                  const template = getTemplateById(cv.templateId)
                  const previewData = buildPreviewData(cv.data, cv.templateId)

                  return (
                    <div key={cv.id} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="mb-3">
                        <LiveCVCardPreview cvData={previewData} template={template} />
                      </div>
                      <p className="font-medium text-slate-800">{cv.name}</p>
                      <p className="text-xs text-slate-400 mb-3">Updated {new Date(cv.updatedAt).toLocaleDateString()}</p>
                      <div className="grid grid-cols-3 gap-2">
                        <Button 
                          className="w-full text-sm" 
                          onClick={() => handleEditCV(cv)} 
                          variant="primary"
                        >
                          <Edit className="w-3 h-3 mr-1" />
                          Edit
                        </Button>
                        <Button 
                          className="w-full text-sm" 
                          onClick={() => handleDownloadCV(cv)} 
                          variant="secondary"
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Download
                        </Button>
                        <Button 
                          className="w-full text-sm" 
                          onClick={() => handleDeleteCV(cv.id)} 
                          variant="danger"
                        >
                          <Trash2 className="w-3 h-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-slate-800">My Documents ({docs.length})</h1>
              <Link to="/documents">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-md shadow-blue-200">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Document
                </Button>
              </Link>
            </div>

            {/* Document Hero Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-800">Document Management</h2>
                  <p className="text-slate-600 mt-2 max-w-2xl text-sm">
                    Upload your essential documents – resumes, cover letters, portfolios, 
                    certificates, and more. Access them anytime, anywhere.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                      <Upload className="w-3 h-3" />
                      Upload from Desktop
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                      <Download className="w-3 h-3" />
                      Download anywhere
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                      <ShieldCheck className="w-3 h-3" />
                      Secure & encrypted
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                  <div className="bg-white/80 backdrop-blur rounded-xl p-4 text-center border border-white shadow-sm">
                    <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-2">
                      <HardDrive className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500">Storage Used</p>
                    <p className="text-sm font-semibold text-slate-700">{docs.length} files</p>
                  </div>
                </div>
              </div>
            </div>

            {docs.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-50 rounded-full">
                    <FolderOpen className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
                <p className="text-lg text-slate-600">No documents uploaded</p>
                <p className="text-sm text-slate-400 mt-1">Upload your career documents</p>
                <Link to="/documents">
                  <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    Upload Your First Document
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {docs.map((doc, index) => (
                  <div key={index} className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 text-sm truncate max-w-[140px]">{doc.name}</p>
                          <p className="text-xs text-slate-400">{doc.type || 'Document'}</p>
                        </div>
                      </div>
                      <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200">
                        {doc.size ? `${Math.round(doc.size / 1024)}KB` : 'PDF'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mb-3">Uploaded {new Date(doc.uploadedAt || Date.now()).toLocaleDateString()}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                      <button className="flex-1 text-sm bg-slate-50 hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <Download className="w-3 h-3" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}