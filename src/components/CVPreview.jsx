import { forwardRef } from 'react'
import ClassicProfessional from './templates/ClassicProfessional/ClassicProfessional'

const CVPreview = forwardRef(({ cvData, template }, ref) => {

  if (template?.id === 'classic-professional') {
    return (
      <div ref={ref} id="print-area">
        <ClassicProfessional data={cvData} />
      </div>
    )
  }
  const { personal, experiences, education, skills } = cvData || {}
  const t = template || {}
  const headerBg = t.headerBg || '#6366f1'
  const textColor = t.textColor || '#ffffff'
  const accent = t.accent || '#0f766e'

  return (
    <div ref={ref} id="print-area" className="bg-white w-[210mm] min-h-[297mm] mx-auto shadow-xl rounded-md overflow-hidden font-sans text-sm" style={{ fontFamily: 'Inter' }}>
      {/* Header */}
      <div className="p-6" style={{ backgroundColor: headerBg, color: textColor }}>
        <h1 className="text-3xl font-display font-bold">{personal?.fullName || 'Your Name'}</h1>
        <p className="text-lg mt-1">{personal?.title || 'Professional Title'}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm opacity-90">
          {personal?.email && <span>{personal.email}</span>}
          {personal?.phone && <span>{personal.phone}</span>}
          {personal?.location && <span>{personal.location}</span>}
        </div>
      </div>
      <div className="p-6 space-y-6 text-gray-700">
        {/* Summary */}
        {personal?.summary && (
          <div>
            <h2 className="text-lg font-bold border-b pb-1 mb-2" style={{ color: accent }}>Professional Summary</h2>
            <p>{personal.summary}</p>
          </div>
        )}
        {/* Experience */}
        {experiences?.length > 0 && (
          <div>
            <h2 className="text-lg font-bold border-b pb-1 mb-2" style={{ color: accent }}>Experience</h2>
            {experiences.map((exp, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between">
                  <strong>{exp.title}</strong>
                  <span className="text-xs text-gray-500">{exp.duration}</span>
                </div>
                <p className="font-medium">{exp.company}</p>
                <p className="text-sm mt-1">{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {/* Education */}
        {education?.length > 0 && (
          <div>
            <h2 className="text-lg font-bold border-b pb-1 mb-2" style={{ color: accent }}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="flex justify-between mb-1">
                <span><strong>{edu.degree}</strong> - {edu.school}</span>
                <span className="text-xs text-gray-500">{edu.year}</span>
              </div>
            ))}
          </div>
        )}
        {/* Skills */}
        {skills && skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold border-b pb-1 mb-2" style={{ color: accent }}>Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

export default CVPreview
