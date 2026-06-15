import { useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import { getCVs, saveCV } from '../lib/localStorage'
import { getTemplateById } from '../data/templates'
import { templates } from '../data/templates'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import CVPreview from '../components/CVPreview'
import { motion } from 'framer-motion'

export default function Editor() {
  const { cvId } = useParams()
  const [searchParams] = useSearchParams()
  const templateId = searchParams.get('template') || 'modern'
  const template = getTemplateById(templateId)
  const navigate = useNavigate()
  const printRef = useRef()

  const defaultValues = {
    personal: { fullName: '', title: '', email: '', phone: '', location: '', summary: '' },
    experiences: [{ title: '', company: '', duration: '', description: '' }],
    education: [{ degree: '', school: '', year: '' }],
    skills: [''],
  }

  const [cvName, setCvName] = useState('Untitled CV')
  const { register, control, handleSubmit, reset, watch } = useForm({ defaultValues })
  const { fields: expFields, append: addExp, remove: removeExp } = useFieldArray({ control, name: 'experiences' })
  const { fields: eduFields, append: addEdu, remove: removeEdu } = useFieldArray({ control, name: 'education' })
  const { fields: skillFields, append: addSkill, remove: removeSkill } = useFieldArray({ control, name: 'skills' })

  const formData = watch()

  useEffect(() => {
    if (cvId) {
      const cvs = getCVs()
      const existing = cvs.find(c => c.id === cvId)
      if (existing) {
        reset(existing.data)
        setCvName(existing.name || 'Untitled CV')
      }
    }
  }, [cvId, reset])

  const onSave = useCallback(() => {
    try {
      const data = formData
      const cvObject = {
        id: cvId || undefined,
        name: cvName,
        templateId,
        data,
      }
      saveCV(cvObject)
      alert('CV saved!')
    } catch (e) {
      alert(e.message)
    }
  }, [formData, cvId, cvName, templateId])

  const handleDownload = () => {
    window.print()
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <input
            value={cvName}
            onChange={e => setCvName(e.target.value)}
            className="text-lg font-semibold bg-transparent border-b border-transparent hover:border-gray-300 focus:border-primary-500 focus:outline-none"
          />
          <select
            value={templateId}
            onChange={e => navigate(`/editor/${cvId || 'new'}?template=${e.target.value}`)}
            className="text-sm border rounded px-2 py-1"
          >
            {templates.map(t => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <Button onClick={onSave}>Save CV</Button>
          <Button variant="secondary" onClick={handleDownload}>Download PDF</Button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-hidden">
        {/* Form */}
        <div className="overflow-y-auto pr-2 space-y-6">
          <section>
            <h3 className="font-semibold mb-2">Personal Details</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input label="Full Name" {...register('personal.fullName')} />
              <Input label="Title" {...register('personal.title')} />
              <Input label="Email" {...register('personal.email')} />
              <Input label="Phone" {...register('personal.phone')} />
              <Input label="Location" {...register('personal.location')} />
            </div>
            <textarea {...register('personal.summary')} rows={3} className="w-full mt-2 border rounded-lg p-2" placeholder="Professional summary" />
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Experience</h3>
              <Button variant="secondary" type="button" onClick={() => addExp({ title: '', company: '', duration: '', description: '' })}>+ Add</Button>
            </div>
            {expFields.map((field, index) => (
              <motion.div key={field.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border p-3 rounded-lg mb-3 relative">
                <button onClick={() => removeExp(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">✕</button>
                <Input label="Job Title" {...register(`experiences.${index}.title`)} className="mb-2" />
                <Input label="Company" {...register(`experiences.${index}.company`)} className="mb-2" />
                <Input label="Duration" {...register(`experiences.${index}.duration`)} className="mb-2" />
                <textarea {...register(`experiences.${index}.description`)} rows={2} className="w-full border rounded-lg p-2" placeholder="Description" />
              </motion.div>
            ))}
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Education</h3>
              <Button variant="secondary" type="button" onClick={() => addEdu({ degree: '', school: '', year: '' })}>+ Add</Button>
            </div>
            {eduFields.map((field, index) => (
              <div key={field.id} className="border p-3 rounded-lg mb-3 relative">
                <button onClick={() => removeEdu(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">✕</button>
                <Input label="Degree" {...register(`education.${index}.degree`)} className="mb-2" />
                <Input label="School" {...register(`education.${index}.school`)} className="mb-2" />
                <Input label="Year" {...register(`education.${index}.year`)} />
              </div>
            ))}
          </section>

          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Skills</h3>
              <Button variant="secondary" type="button" onClick={() => addSkill('')}>+ Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillFields.map((field, index) => (
                <div key={field.id} className="flex items-center gap-1">
                  <input {...register(`skills.${index}`)} className="border rounded px-2 py-1 w-32" placeholder="Skill" />
                  <button onClick={() => removeSkill(index)} className="text-gray-400 hover:text-red-500">✕</button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Preview */}
        <div className="bg-gray-200 p-4 rounded-xl overflow-auto flex justify-center">
          <CVPreview ref={printRef} cvData={formData} template={template} />
        </div>
      </div>
    </div>
  )
}
