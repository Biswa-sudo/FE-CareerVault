export const templates = [
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    description: 'Senior Software Developer style resume with sidebar layout.',
    previewColor: '#1a365d',
    layout: 'classic'
  }
]

export function getTemplateById(id) {
  return templates.find(t => t.id === id) || templates[0]
}
