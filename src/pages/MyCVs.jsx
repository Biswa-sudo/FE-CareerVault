import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCVs, deleteCV } from '../lib/localStorage'
import { getTemplateById } from '../data/templates'
import Button from '../components/ui/Button'

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
    // we can't easily trigger print for a specific CV from here without loading the editor
    alert('Open the CV and use Download PDF from the editor.')
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
          return (
            <div key={cv.id} className="bg-white rounded-xl border p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-20 rounded mb-3 flex items-center justify-center text-white text-sm font-medium" style={{ backgroundColor: template?.headerBg || '#6366f1' }}>
                {cv.name}
              </div>
              <p className="font-medium">{cv.name}</p>
              <p className="text-xs text-gray-400 mb-3">Updated {new Date(cv.updatedAt).toLocaleDateString()}</p>
              <div className="flex gap-2">
                <Button onClick={() => navigate(`/editor/${cv.id}`)} variant="primary">Edit</Button>
                <Button onClick={handleDownload} variant="secondary">Download</Button>
                <Button onClick={() => handleDelete(cv.id)} variant="danger">Delete</Button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
