import { useState, useEffect, useRef } from 'react'
import { getDocuments, saveDocument, deleteDocument } from '../lib/localStorage'
import Button from '../components/ui/Button'

export default function Documents() {
  const [docs, setDocs] = useState([])
  const fileRef = useRef()

  useEffect(() => setDocs(getDocuments()), [])

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      saveDocument({ name: file.name, type: file.type, data: reader.result })
      setDocs(getDocuments())
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = (id) => {
    deleteDocument(id)
    setDocs(getDocuments())
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display font-bold">My Documents</h1>
        <Button onClick={() => fileRef.current.click()}>Upload</Button>
        <input ref={fileRef} type="file" className="hidden" onChange={handleUpload} />
      </div>
      {docs.length === 0 && (
        <div className="text-center py-12 text-gray-400">No documents uploaded.</div>
      )}
      <div className="space-y-3">
        {docs.map(doc => (
          <div key={doc.id} className="flex items-center justify-between bg-white p-4 rounded-xl border">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="font-medium text-sm">{doc.name}</p>
                <p className="text-xs text-gray-400">{new Date(doc.uploadedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={doc.data} download={doc.name} className="text-primary-600 text-sm hover:underline">Download</a>
              <button onClick={() => handleDelete(doc.id)} className="text-red-500 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
