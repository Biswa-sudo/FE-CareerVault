import { useState, useEffect, useRef } from 'react'
import FeatureGate from '../components/FeatureGate'
import { getDocuments, saveDocument, deleteDocument } from '../lib/localStorage'
import Button from '../components/ui/Button'
import DocumentsHero from '../components/ui/DocumentsHero'
import ErrorBoundary from '../components/ui/ErrorBoundary'

export default function Documents() {
  const [docs, setDocs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const fileRef = useRef()

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const items = await getDocuments()
        setDocs(items)
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Failed to load documents.')
      } finally {
        setLoading(false)
      }
    }

    loadDocuments()
  }, [])

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        setLoading(true)
        const next = await saveDocument({ name: file.name, type: file.type, data: reader.result })
        setDocs(next)
        setError('')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Upload failed.')
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  const handleDelete = async (id) => {
    try {
      setLoading(true)
      const next = await deleteDocument(id)
      setDocs(next)
      setError('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Delete failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <FeatureGate productId={1} plan="career-vault" serviceName="Career Vault">
      <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-display font-bold">My Documents</h1>
        <Button onClick={() => fileRef.current.click()}>Upload</Button>
        <input ref={fileRef} type="file" className="hidden" onChange={handleUpload} />
      </div>

      <ErrorBoundary
        fallback={
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-center text-red-700">
            <h2 className="text-lg font-semibold">Something went wrong</h2>
            <p className="mt-2 text-sm">We couldn’t load this documents view. Please refresh the page and try again.</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white"
            >
              Reload page
            </button>
          </div>
        }
      >
        <DocumentsHero />
        {error && <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">{error}</div>}
        {loading && <div className="mb-4 text-sm text-gray-500">Syncing documents...</div>}
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
      </ErrorBoundary>
      </div>
    </FeatureGate>
  )
}
