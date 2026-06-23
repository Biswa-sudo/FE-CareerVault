import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useForm, useFieldArray, useWatch } from 'react-hook-form'
import { getCVs, saveCV } from '../lib/localStorage'
import { getTemplateById } from '../data/templates'
import { getTemplateDefaults } from '../data/templateDefaults'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import CVPreview from '../components/CVPreview'
import { motion } from 'framer-motion'

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

const getDefaultSectionInstances = () => ({
  contact: [],
  skills: [],
  education: [],
  certifications: [],
  experience: [],
  projects: [],
  technicalSummary: [],
})

const createSectionInstanceData = (type, values, sourceInstance) => {
  if (sourceInstance) {
    return JSON.parse(JSON.stringify(sourceInstance.data || {}))
  }

  if (type === 'contact') {
    return {
      email: values.personalInfo?.email || '',
      phone: values.personalInfo?.phone || '',
      location: values.personalInfo?.location || '',
      linkedin: values.personalInfo?.linkedin || '',
      github: values.personalInfo?.github || '',
    }
  }

  if (type === 'skills') {
    return { items: JSON.parse(JSON.stringify(values.skills || [])) }
  }

  if (type === 'education') {
    return { items: JSON.parse(JSON.stringify(values.education || [])) }
  }

  if (type === 'certifications') {
    return { items: JSON.parse(JSON.stringify(values.certifications || [])) }
  }

  if (type === 'experience') {
    return { items: JSON.parse(JSON.stringify(values.experience || [])) }
  }

  if (type === 'projects') {
    return { items: JSON.parse(JSON.stringify(values.projects || [])) }
  }

  if (type === 'technicalSummary') {
    return JSON.parse(JSON.stringify(values.technicalSummary || {}))
  }

  return {}
}

const defaultValues = {
  personalInfo: {
    fullName: '', title: '', summary: '',
    email: '', phone: '', location: '',
    linkedin: '', github: '', image: ''
  },
  skills: [{ value: '' }],
  education: [{ degree: '', school: '', year: '' }],
  certifications: [{ value: '' }],
  experience: [{ title: '', company: '', location: '', duration: '', achievementsText: '' }],
  projects: [{ title: '', description: '' }],
  technicalSummary: {
    languages: '', frameworks: '', databases: '', cloud: '', tools: '',
    additional: []
  },
  sectionHeadings: {
    contact: 'CONTACT',
    skills: 'SKILLS',
    education: 'EDUCATION',
    certifications: 'CERTIFICATIONS',
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    technicalSummary: 'TECHNICAL SUMMARY',
  },
  technicalSummaryLabels: {
    languages: 'Languages',
    frameworks: 'Frameworks',
    databases: 'Databases',
    cloud: 'Cloud & DevOps',
    tools: 'Tools',
  },
  sectionLayout: {
    sidebar: getDefaultSidebarLayout(),
    main: getDefaultMainLayout(),
  },
  sectionInstances: getDefaultSectionInstances(),
}

const normalizeLoadedData = (source = {}) => ({
  ...defaultValues,
  ...source,
  personalInfo: { ...defaultValues.personalInfo, ...(source.personalInfo || {}) },
  technicalSummary: {
    ...defaultValues.technicalSummary,
    ...(source.technicalSummary || {}),
    additional: source.technicalSummary?.additional || defaultValues.technicalSummary.additional,
  },
  sectionHeadings: { ...defaultValues.sectionHeadings, ...(source.sectionHeadings || {}) },
  technicalSummaryLabels: { ...defaultValues.technicalSummaryLabels, ...(source.technicalSummaryLabels || {}) },
  sectionLayout: {
    sidebar: source.sectionLayout?.sidebar?.length
      ? source.sectionLayout.sidebar
      : getDefaultSidebarLayout(),
    main: source.sectionLayout?.main?.length
      ? source.sectionLayout.main
      : getDefaultMainLayout(),
  },
  sectionInstances: {
    ...getDefaultSectionInstances(),
    ...(source.sectionInstances || {}),
  },
})

export default function Editor() {
  const { cvId } = useParams()
  const [searchParams] = useSearchParams()
  const templateId = searchParams.get('template') || 'classic-professional'
  const template = getTemplateById(templateId)
  const navigate = useNavigate()
  const printRef = useRef()
  const didAutoPrint = useRef(false)

  const [cvName, setCvName] = useState('Untitled CV')
  const [activePanel, setActivePanel] = useState('form')
  const { register, control, reset, getValues, setValue } = useForm({ defaultValues })

  const { fields: skillFields, append: addSkill, remove: removeSkill } =
    useFieldArray({ control, name: 'skills' })
  const { fields: eduFields, append: addEdu, remove: removeEdu } =
    useFieldArray({ control, name: 'education' })
  const { fields: certFields, append: addCert, remove: removeCert } =
    useFieldArray({ control, name: 'certifications' })
  const { fields: expFields, append: addExp, remove: removeExp } =
    useFieldArray({ control, name: 'experience' })
  const { fields: projFields, append: addProj, remove: removeProj } =
    useFieldArray({ control, name: 'projects' })
  const { fields: techAdditionalFields, append: addTechAdditional, remove: removeTechAdditional } =
    useFieldArray({ control, name: 'technicalSummary.additional' })
  const formData = useWatch({ control }) || defaultValues

  useEffect(() => {
    if (cvId && cvId !== 'new') {
      const cvs = getCVs()
      const existing = cvs.find(c => c.id === cvId)
      if (existing) {
        reset(normalizeLoadedData(existing.data))
        setCvName(existing.name || 'Untitled CV')
      }
    } else {
      // New CV — seed form with template's default demo data
      const defaults = getTemplateDefaults(templateId)
      if (defaults) reset(normalizeLoadedData(defaults))
    }
  }, [cvId, templateId, reset])

  useEffect(() => {
    const shouldPrint = searchParams.get('print') === 'true'
    if (!shouldPrint || didAutoPrint.current || cvId === 'new') return

    didAutoPrint.current = true
    const timer = window.setTimeout(() => {
      window.print()
    }, 300)

    return () => window.clearTimeout(timer)
  }, [searchParams, cvId, formData])

  // Transform form data into the shape ClassicProfessional expects
  const previewData = useMemo(() => {
    const baseContact = {
      email: formData.personalInfo?.email || '',
      phone: formData.personalInfo?.phone || '',
      location: formData.personalInfo?.location || '',
      linkedin: formData.personalInfo?.linkedin || '',
      github: formData.personalInfo?.github || '',
    }

    const baseSkills = (formData.skills || []).map(s => s.value).filter(Boolean)
    const baseEducation = formData.education || []
    const baseCertifications = (formData.certifications || []).map(c => c.value).filter(Boolean)
    const baseExperience = (formData.experience || []).map(e => ({
      title: e.title,
      company: e.company,
      location: e.location,
      duration: e.duration,
      achievements: (e.achievementsText || '').split('\n').filter(Boolean)
    }))
    const baseProjects = formData.projects || []
    const baseTechnicalSummary = formData.technicalSummary || {}

    const instanceData = {
      contact: (formData.sectionInstances?.contact || []).map(i => i.data || {}),
      skills: (formData.sectionInstances?.skills || []).map(i => ({
        items: (i.data?.items || []).map(s => s.value).filter(Boolean),
      })),
      education: (formData.sectionInstances?.education || []).map(i => ({
        items: i.data?.items || [],
      })),
      certifications: (formData.sectionInstances?.certifications || []).map(i => ({
        items: (i.data?.items || []).map(c => c.value).filter(Boolean),
      })),
      experience: (formData.sectionInstances?.experience || []).map(i => ({
        items: (i.data?.items || []).map(e => ({
          title: e.title,
          company: e.company,
          location: e.location,
          duration: e.duration,
          achievements: (e.achievementsText || '').split('\n').filter(Boolean),
        })),
      })),
      projects: (formData.sectionInstances?.projects || []).map(i => ({
        items: i.data?.items || [],
      })),
      technicalSummary: (formData.sectionInstances?.technicalSummary || []).map(i => i.data || {}),
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
  }, [formData])

  const onSave = useCallback(() => {
    try {
      const savedCv = saveCV({
        id: cvId && cvId !== 'new' ? cvId : undefined,
        name: cvName,
        templateId,
        data: getValues(),
      })
      if (cvId === 'new' && savedCv?.id) {
        navigate(`/editor/${savedCv.id}?template=${templateId}`, { replace: true })
      }
      alert('CV saved!')
    } catch (e) {
      alert(e.message)
    }
  }, [cvId, cvName, templateId, getValues, navigate])

  const handleSectionAction = useCallback((region, action, index) => {
    const layoutPath = `sectionLayout.${region}`
    const layout = getValues(layoutPath) || []
    const target = layout[index]
    if (!target) return

    if (action === 'up') {
      if (index === 0) return
      const next = [...layout]
      ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
      setValue(layoutPath, next, { shouldDirty: true })
      return
    }

    if (action === 'down') {
      if (index >= layout.length - 1) return
      const next = [...layout]
      ;[next[index + 1], next[index]] = [next[index], next[index + 1]]
      setValue(layoutPath, next, { shouldDirty: true })
      return
    }

    const instancesPath = `sectionInstances.${target.type}`
    const instances = getValues(instancesPath) || []

    if (action === 'duplicate') {
      const sourceInstance = target.source === 'instance'
        ? instances[target.instanceIndex]
        : null

      const payload = {
        data: createSectionInstanceData(target.type, formData, sourceInstance),
      }
      const nextInstances = [...instances, payload]
      setValue(instancesPath, nextInstances, { shouldDirty: true })

      const newInstanceIndex = nextInstances.length - 1
      const newLayoutEntry = {
        id: `${target.type}-${Date.now()}`,
        type: target.type,
        source: 'instance',
        instanceIndex: newInstanceIndex,
      }
      const nextLayout = [...layout]
      nextLayout.splice(index + 1, 0, newLayoutEntry)
      setValue(layoutPath, nextLayout, { shouldDirty: true })
      return
    }

    if (action === 'delete') {
      const nextLayout = layout.filter((_, i) => i !== index)

      if (target.source === 'instance') {
        const nextInstances = instances.filter((_, i) => i !== target.instanceIndex)
        setValue(instancesPath, nextInstances, { shouldDirty: true })

        const adjustedLayout = nextLayout.map((entry) => {
          if (
            entry.source === 'instance' &&
            entry.type === target.type &&
            entry.instanceIndex > target.instanceIndex
          ) {
            return { ...entry, instanceIndex: entry.instanceIndex - 1 }
          }
          return entry
        })
        setValue(layoutPath, adjustedLayout, { shouldDirty: true })
        return
      }

      setValue(layoutPath, nextLayout, { shouldDirty: true })
    }
  }, [
    getValues,
    setValue,
    formData,
  ])

  const sectionTitleForType = useCallback((type) => {
    const fallback = {
      contact: 'CONTACT',
      skills: 'SKILLS',
      education: 'EDUCATION',
      certifications: 'CERTIFICATIONS',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      technicalSummary: 'TECHNICAL SUMMARY',
    }
    return formData.sectionHeadings?.[type] || fallback[type] || type
  }, [formData.sectionHeadings])

  const duplicatedLayoutEntries = useMemo(() => {
    const sidebar = (formData.sectionLayout?.sidebar || []).map((entry, layoutIndex) => ({
      ...entry,
      region: 'sidebar',
      layoutIndex,
    }))
    const main = (formData.sectionLayout?.main || []).map((entry, layoutIndex) => ({
      ...entry,
      region: 'main',
      layoutIndex,
    }))
    return [...sidebar, ...main].filter(entry => entry.source === 'instance')
  }, [formData.sectionLayout])

  const addInstanceItem = useCallback((type, instanceIndex, factory) => {
    const path = `sectionInstances.${type}.${instanceIndex}.data.items`
    const items = getValues(path) || []
    setValue(path, [...items, factory()], { shouldDirty: true })
  }, [getValues, setValue])

  const removeInstanceItem = useCallback((type, instanceIndex, itemIndex) => {
    const path = `sectionInstances.${type}.${instanceIndex}.data.items`
    const items = getValues(path) || []
    setValue(path, items.filter((_, i) => i !== itemIndex), { shouldDirty: true })
  }, [getValues, setValue])

  const addTechnicalAdditional = useCallback((instanceIndex) => {
    const path = `sectionInstances.technicalSummary.${instanceIndex}.data.additional`
    const items = getValues(path) || []
    setValue(path, [...items, { label: '', value: '' }], { shouldDirty: true })
  }, [getValues, setValue])

  const removeTechnicalAdditional = useCallback((instanceIndex, itemIndex) => {
    const path = `sectionInstances.technicalSummary.${instanceIndex}.data.additional`
    const items = getValues(path) || []
    setValue(path, items.filter((_, i) => i !== itemIndex), { shouldDirty: true })
  }, [getValues, setValue])

  const renderDuplicatedSectionEditor = (entry, idx) => {
    const basePath = `sectionInstances.${entry.type}.${entry.instanceIndex}.data`
    const title = `${sectionTitleForType(entry.type)} (Duplicate ${entry.instanceIndex + 1})`

    if (entry.type === 'contact') {
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <p className="text-sm font-medium text-gray-700">{title}</p>
          <div className="grid grid-cols-2 gap-3">
            <Input label="Email" {...register(`${basePath}.email`)} />
            <Input label="Phone" {...register(`${basePath}.phone`)} />
            <Input label="Location" {...register(`${basePath}.location`)} />
            <Input label="LinkedIn" {...register(`${basePath}.linkedin`)} />
            <Input label="GitHub" {...register(`${basePath}.github`)} />
          </div>
        </div>
      )
    }

    if (entry.type === 'skills' || entry.type === 'certifications') {
      const items = formData.sectionInstances?.[entry.type]?.[entry.instanceIndex]?.data?.items || []
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <Button
              variant="secondary"
              type="button"
              onClick={() => addInstanceItem(entry.type, entry.instanceIndex, () => ({ value: '' }))}
            >
              + Add
            </Button>
          </div>
          {items.map((_, itemIndex) => (
            <div key={itemIndex} className="flex items-center gap-2">
              <input
                {...register(`${basePath}.items.${itemIndex}.value`)}
                className="flex-1 border rounded px-2 py-1"
                placeholder={entry.type === 'skills' ? 'Skill' : 'Certification'}
              />
              <button
                type="button"
                onClick={() => removeInstanceItem(entry.type, entry.instanceIndex, itemIndex)}
                className="text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )
    }

    if (entry.type === 'education') {
      const items = formData.sectionInstances?.education?.[entry.instanceIndex]?.data?.items || []
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <Button
              variant="secondary"
              type="button"
              onClick={() => addInstanceItem('education', entry.instanceIndex, () => ({ degree: '', school: '', year: '' }))}
            >
              + Add
            </Button>
          </div>
          {items.map((_, itemIndex) => (
            <div key={itemIndex} className="border p-3 rounded-lg relative">
              <button
                type="button"
                onClick={() => removeInstanceItem('education', entry.instanceIndex, itemIndex)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
              <Input label="Degree" {...register(`${basePath}.items.${itemIndex}.degree`)} className="mb-2" />
              <Input label="School" {...register(`${basePath}.items.${itemIndex}.school`)} className="mb-2" />
              <Input label="Year" {...register(`${basePath}.items.${itemIndex}.year`)} />
            </div>
          ))}
        </div>
      )
    }

    if (entry.type === 'experience') {
      const items = formData.sectionInstances?.experience?.[entry.instanceIndex]?.data?.items || []
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <Button
              variant="secondary"
              type="button"
              onClick={() => addInstanceItem('experience', entry.instanceIndex, () => ({ title: '', company: '', location: '', duration: '', achievementsText: '' }))}
            >
              + Add
            </Button>
          </div>
          {items.map((_, itemIndex) => (
            <div key={itemIndex} className="border p-3 rounded-lg relative">
              <button
                type="button"
                onClick={() => removeInstanceItem('experience', entry.instanceIndex, itemIndex)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Input label="Job Title" {...register(`${basePath}.items.${itemIndex}.title`)} />
                <Input label="Company" {...register(`${basePath}.items.${itemIndex}.company`)} />
                <Input label="Location" {...register(`${basePath}.items.${itemIndex}.location`)} />
                <Input label="Duration" {...register(`${basePath}.items.${itemIndex}.duration`)} />
              </div>
              <label className="text-xs text-gray-500 block mb-1">Achievements (one per line)</label>
              <textarea
                {...register(`${basePath}.items.${itemIndex}.achievementsText`)}
                rows={4}
                className="w-full border rounded-lg p-2 text-sm"
                placeholder={"Led a team of 6 developers...\nReduced deployment time by 60%..."}
              />
            </div>
          ))}
        </div>
      )
    }

    if (entry.type === 'projects') {
      const items = formData.sectionInstances?.projects?.[entry.instanceIndex]?.data?.items || []
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <Button
              variant="secondary"
              type="button"
              onClick={() => addInstanceItem('projects', entry.instanceIndex, () => ({ title: '', description: '' }))}
            >
              + Add
            </Button>
          </div>
          {items.map((_, itemIndex) => (
            <div key={itemIndex} className="border p-3 rounded-lg relative">
              <button
                type="button"
                onClick={() => removeInstanceItem('projects', entry.instanceIndex, itemIndex)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
              <Input label="Project Title" {...register(`${basePath}.items.${itemIndex}.title`)} className="mb-2" />
              <textarea
                {...register(`${basePath}.items.${itemIndex}.description`)}
                rows={2}
                className="w-full border rounded-lg p-2 text-sm"
                placeholder="Project description"
              />
            </div>
          ))}
        </div>
      )
    }

    if (entry.type === 'technicalSummary') {
      const additional = formData.sectionInstances?.technicalSummary?.[entry.instanceIndex]?.data?.additional || []
      return (
        <div key={`${entry.region}-${entry.id}-${idx}`} className="border p-3 rounded-lg space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium text-gray-700">{title}</p>
            <Button
              variant="secondary"
              type="button"
              onClick={() => addTechnicalAdditional(entry.instanceIndex)}
            >
              + Add Row
            </Button>
          </div>
          <div className="space-y-2">
            <Input label="Languages" {...register(`${basePath}.languages`)} />
            <Input label="Frameworks" {...register(`${basePath}.frameworks`)} />
            <Input label="Databases" {...register(`${basePath}.databases`)} />
            <Input label="Cloud & DevOps" {...register(`${basePath}.cloud`)} />
            <Input label="Tools" {...register(`${basePath}.tools`)} />
          </div>
          {additional.map((_, itemIndex) => (
            <div key={itemIndex} className="border p-3 rounded-lg relative">
              <button
                type="button"
                onClick={() => removeTechnicalAdditional(entry.instanceIndex, itemIndex)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              >
                ✕
              </button>
              <div className="grid grid-cols-2 gap-3">
                <Input label="Custom label" {...register(`${basePath}.additional.${itemIndex}.label`)} />
                <Input label="Value" {...register(`${basePath}.additional.${itemIndex}.value`)} />
              </div>
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <input
          value={cvName}
          onChange={e => setCvName(e.target.value)}
          className="text-lg font-semibold bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary-500 focus:outline-none"
        />
        <div className="flex flex-wrap gap-2 justify-end">
          <div className="flex items-center gap-2 px-2">
            <span className={`text-sm ${activePanel === 'form' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Input Fields
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={activePanel === 'preview'}
              aria-label="Toggle between input fields and CV output"
              onClick={() => setActivePanel(prev => (prev === 'form' ? 'preview' : 'form'))}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${activePanel === 'preview' ? 'bg-primary-600' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${activePanel === 'preview' ? 'translate-x-6' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm ${activePanel === 'preview' ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
              Output CV
            </span>
          </div>
          <Button onClick={onSave}>Save CV</Button>
          <Button variant="secondary" onClick={() => window.print()}>Download PDF</Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 gap-6 overflow-hidden">
        {/* Form */}
        <div className={`${activePanel === 'form' ? 'block' : 'hidden'} overflow-y-auto pr-2 space-y-6`}>

          {/* Personal Info */}
          <section>
            <h3 className="font-semibold mb-2">Personal Info</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Full Name" {...register('personalInfo.fullName')} />
              <Input label="Title" {...register('personalInfo.title')} />
              <Input label="Email" {...register('personalInfo.email')} />
              <Input label="Phone" {...register('personalInfo.phone')} />
              <Input label="Location" {...register('personalInfo.location')} />
              <Input label="LinkedIn" {...register('personalInfo.linkedin')} />
              <Input label="GitHub" {...register('personalInfo.github')} />
              <Input label="Profile Image URL" {...register('personalInfo.image')} />
            </div>
            <textarea
              {...register('personalInfo.summary')}
              rows={3}
              className="w-full mt-2 border rounded-lg p-2"
              placeholder="Professional summary"
            />
          </section>

          {/* Skills */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Skills</h3>
              <Button variant="secondary" type="button" onClick={() => addSkill({ value: '' })}>+ Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-1">
                  <input {...register(`skills.${index}.value`)} className="border rounded px-2 py-1 w-40" placeholder="Skill" />
                  <button type="button" onClick={() => removeSkill(index)} className="text-gray-400 hover:text-red-500">✕</button>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Education</h3>
              <Button variant="secondary" type="button" onClick={() => addEdu({ degree: '', school: '', year: '' })}>+ Add</Button>
            </div>
            {eduFields.map((field, index) => (
              <div key={field.id} className="border p-3 rounded-lg mb-3 relative">
                <button type="button" onClick={() => removeEdu(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">✕</button>
                <Input label="Degree" {...register(`education.${index}.degree`)} className="mb-2" />
                <Input label="School" {...register(`education.${index}.school`)} className="mb-2" />
                <Input label="Year" {...register(`education.${index}.year`)} />
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Certifications</h3>
              <Button variant="secondary" type="button" onClick={() => addCert({ value: '' })}>+ Add</Button>
            </div>
            {certFields.map((field, index) => (
              <div key={field.id} className="flex items-center gap-2 mb-2">
                <input {...register(`certifications.${index}.value`)} className="flex-1 border rounded px-2 py-1" placeholder="Certification name" />
                <button type="button" onClick={() => removeCert(index)} className="text-gray-400 hover:text-red-500">✕</button>
              </div>
            ))}
          </section>

          {/* Experience */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Experience</h3>
              <Button variant="secondary" type="button" onClick={() => addExp({ title: '', company: '', location: '', duration: '', achievementsText: '' })}>+ Add</Button>
            </div>
            {expFields.map((field, index) => (
              <motion.div key={field.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border p-3 rounded-lg mb-3 relative">
                <button type="button" onClick={() => removeExp(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">✕</button>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <Input label="Job Title" {...register(`experience.${index}.title`)} />
                  <Input label="Company" {...register(`experience.${index}.company`)} />
                  <Input label="Location" {...register(`experience.${index}.location`)} />
                  <Input label="Duration" {...register(`experience.${index}.duration`)} />
                </div>
                <label className="text-xs text-gray-500 block mb-1">Achievements (one per line)</label>
                <textarea
                  {...register(`experience.${index}.achievementsText`)}
                  rows={4}
                  className="w-full border rounded-lg p-2 text-sm"
                  placeholder={"Led a team of 6 developers...\nReduced deployment time by 60%..."}
                />
              </motion.div>
            ))}
          </section>

          {/* Projects */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Projects</h3>
              <Button variant="secondary" type="button" onClick={() => addProj({ title: '', description: '' })}>+ Add</Button>
            </div>
            {projFields.map((field, index) => (
              <div key={field.id} className="border p-3 rounded-lg mb-3 relative">
                <button type="button" onClick={() => removeProj(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">✕</button>
                <Input label="Project Title" {...register(`projects.${index}.title`)} className="mb-2" />
                <textarea
                  {...register(`projects.${index}.description`)}
                  rows={2}
                  className="w-full border rounded-lg p-2 text-sm"
                  placeholder="Project description"
                />
              </div>
            ))}
          </section>

          {/* Technical Summary */}
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Technical Summary</h3>
              <Button variant="secondary" type="button" onClick={() => addTechAdditional({ label: '', value: '' })}>+ Add Row</Button>
            </div>
            <div className="space-y-2">
              <Input label="Languages" {...register('technicalSummary.languages')} />
              <Input label="Frameworks" {...register('technicalSummary.frameworks')} />
              <Input label="Databases" {...register('technicalSummary.databases')} />
              <Input label="Cloud & DevOps" {...register('technicalSummary.cloud')} />
              <Input label="Tools" {...register('technicalSummary.tools')} />
            </div>
            {techAdditionalFields.map((field, index) => (
              <div key={field.id} className="border p-3 rounded-lg mt-3 relative">
                <button
                  type="button"
                  onClick={() => removeTechAdditional(index)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label="Custom label"
                    {...register(`technicalSummary.additional.${index}.label`)}
                  />
                  <Input
                    label="Value"
                    {...register(`technicalSummary.additional.${index}.value`)}
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Technical Summary Labels */}
          <section>
            <h3 className="font-semibold mb-2">Technical Summary Labels</h3>
            <p className="text-xs text-gray-500 mb-3">Customize the field labels inside the Technical Summary section.</p>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Languages label" {...register('technicalSummaryLabels.languages')} />
              <Input label="Frameworks label" {...register('technicalSummaryLabels.frameworks')} />
              <Input label="Databases label" {...register('technicalSummaryLabels.databases')} />
              <Input label="Cloud & DevOps label" {...register('technicalSummaryLabels.cloud')} />
              <Input label="Tools label" {...register('technicalSummaryLabels.tools')} />
            </div>
          </section>

          {/* Section Headings */}
          <section>
            <h3 className="font-semibold mb-2">Section Headings</h3>
            <p className="text-xs text-gray-500 mb-3">Customize the heading labels that appear on your resume.</p>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Contact" {...register('sectionHeadings.contact')} />
              <Input label="Skills" {...register('sectionHeadings.skills')} />
              <Input label="Education" {...register('sectionHeadings.education')} />
              <Input label="Certifications" {...register('sectionHeadings.certifications')} />
              <Input label="Experience" {...register('sectionHeadings.experience')} />
              <Input label="Projects" {...register('sectionHeadings.projects')} />
              <Input label="Technical Summary" {...register('sectionHeadings.technicalSummary')} />
            </div>
          </section>

          {/* Duplicated Sections */}
          <section>
            <h3 className="font-semibold mb-2">Duplicated Sections</h3>
            <p className="text-xs text-gray-500 mb-3">Any section duplicated from Output CV appears here automatically for editing and saving.</p>
            <div className="space-y-3">
              {duplicatedLayoutEntries.length === 0 ? (
                <p className="text-sm text-gray-500">No duplicated sections yet. Use the duplicate icon in Output CV.</p>
              ) : (
                duplicatedLayoutEntries.map((entry, idx) => renderDuplicatedSectionEditor(entry, idx))
              )}
            </div>
          </section>

        </div>

        {/* Preview */}
        <div className={`${activePanel === 'preview' ? 'flex' : 'hidden'} bg-gray-200 p-4 rounded-xl overflow-auto justify-center`}>
          <CVPreview
            ref={printRef}
            cvData={previewData}
            template={template}
            onSectionAction={handleSectionAction}
          />
        </div>
      </div>
    </div>
  )
}
