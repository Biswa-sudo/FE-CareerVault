import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCVs, deleteCV } from '../lib/localStorage'
import { getTemplateById } from '../data/templates'
import { getTemplateDefaults } from '../data/templateDefaults'
import CVPreview from '../components/CVPreview'
import Button from '../components/ui/Button'

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

export default function MyCVs() {
  const [cvs, setCvs] = useState([])
  const navigate = useNavigate()

  const load = () => setCvs(getCVs())
  useEffect(() => { load() }, [])

  const handleDelete = (id) => {
    if (window.confirm('Delete this CV?')) {
      deleteCV(id)
      load()
    }
  }

  const handleDownload = (cv) => {
    navigate(`/editor/${cv.id}?template=${cv.templateId}&print=true`)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display font-bold">My CVs ({cvs.length}/10)</h1>
        <Link to="/templates"><Button>Create New</Button></Link>
      </div>
      {cvs.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-lg">No CVs yet. Create your first one!</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cvs.map(cv => {
          const template = getTemplateById(cv.templateId)
          const previewData = buildPreviewData(cv.data, cv.templateId)

          return (
            <div key={cv.id} className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <LiveCVCardPreview cvData={previewData} template={template} />
              </div>
              <p className="font-medium">{cv.name}</p>
              <p className="text-xs text-gray-400 mb-3">Updated {new Date(cv.updatedAt).toLocaleDateString()}</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button className="w-full" onClick={() => navigate(`/editor/${cv.id}?template=${cv.templateId}`)} variant="primary">Edit</Button>
                <Button className="w-full" onClick={() => handleDownload(cv)} variant="secondary">Download</Button>
                <Button className="w-full" onClick={() => handleDelete(cv.id)} variant="danger">Delete</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
