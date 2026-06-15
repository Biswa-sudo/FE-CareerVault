import { useNavigate } from 'react-router-dom'
import { templates } from '../data/templates'
import TemplateCard from '../components/TemplateCard'

export default function Templates() {
  const navigate = useNavigate()

  const handleSelect = (id) => {
    navigate(`/editor/new?template=${id}`)
  }

  return (
    <div>
      <h1 className="text-2xl font-display font-bold mb-6">Choose a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(t => (
          <TemplateCard key={t.id} template={t} onSelect={handleSelect} />
        ))}
      </div>
    </div>
  )
}
