import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { getCVs, saveCV } from '../lib/localStorage'
import { getTemplateById } from '../data/templates'
import { getTemplateDefaults } from '../data/templateDefaults'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import CVPreview from '../components/CVPreview'
import { motion } from 'framer-motion'

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
  technicalSummary: { languages: '', frameworks: '', databases: '', cloud: '', tools: '' },
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
  }
}

export default function Editor() {
  const { cvId } = useParams()
  const [searchParams] = useSearchParams()
  const templateId = searchParams.get('template') || 'classic-professional'
  const template = getTemplateById(templateId)
  const navigate = useNavigate()
  const printRef = useRef()
  const didAutoPrint = useRef(false)

  const [cvName, setCvName] = useState('Untitled CV')
  const { register, control, reset, watch } = useForm({ defaultValues })

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

  const formData = watch()

  useEffect(() => {
    if (cvId && cvId !== 'new') {
      const cvs = getCVs()
      const existing = cvs.find(c => c.id === cvId)
      if (existing) {
        reset(existing.data)
        setCvName(existing.name || 'Untitled CV')
      }
    } else {
      // New CV — seed form with template's default demo data
      const defaults = getTemplateDefaults(templateId)
      if (defaults) reset(defaults)
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
  const previewData = useMemo(() => ({
    personalInfo: formData.personalInfo || {},
    skills: (formData.skills || []).map(s => s.value).filter(Boolean),
    education: formData.education || [],
    certifications: (formData.certifications || []).map(c => c.value).filter(Boolean),
    experience: (formData.experience || []).map(e => ({
      title: e.title,
      company: e.company,
      location: e.location,
      duration: e.duration,
      achievements: (e.achievementsText || '').split('\n').filter(Boolean)
    })),
    projects: formData.projects || [],
    technicalSummary: formData.technicalSummary || {},
    sectionHeadings: formData.sectionHeadings || {},
    technicalSummaryLabels: formData.technicalSummaryLabels || {}
  }), [formData])

  const onSave = useCallback(() => {
    try {
      saveCV({ id: cvId || undefined, name: cvName, templateId, data: formData })
      alert('CV saved!')
    } catch (e) {
      alert(e.message)
    }
  }, [formData, cvId, cvName, templateId])

  return (
    <div className="flex flex-col h-full">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-4">
        <input
          value={cvName}
          onChange={e => setCvName(e.target.value)}
          className="text-lg font-semibold bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary-500 focus:outline-none"
        />
        <div className="flex gap-2">
          <Button onClick={onSave}>Save CV</Button>
          <Button variant="secondary" onClick={() => window.print()}>Download PDF</Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
        {/* Form */}
        <div className="overflow-y-auto pr-2 space-y-6">

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
            <h3 className="font-semibold mb-2">Technical Summary</h3>
            <div className="space-y-2">
              <Input label="Languages" {...register('technicalSummary.languages')} />
              <Input label="Frameworks" {...register('technicalSummary.frameworks')} />
              <Input label="Databases" {...register('technicalSummary.databases')} />
              <Input label="Cloud & DevOps" {...register('technicalSummary.cloud')} />
              <Input label="Tools" {...register('technicalSummary.tools')} />
            </div>
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

        </div>

        {/* Preview */}
        <div className="bg-gray-200 p-4 rounded-xl overflow-auto flex justify-center">
          <CVPreview ref={printRef} cvData={previewData} template={template} />
        </div>
      </div>
    </div>
  )
}
