export const templates = [
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    description: 'Senior Software Developer style resume with sidebar layout.',
    previewColor: '#1a365d',
    layout: 'classic'
  },
  {
  id: "executive-blue",
  name: "Executive Blue",
  description: "Professional executive resume template",
},
  {
    id: 'executive-pro', // NEW
    name: 'Executive Pro',
    category: 'professional',
    preview: '/templates/executive-pro-preview.jpg'
  }
]

export function getTemplateById(id) {
  return templates.find(t => t.id === id) || templates[0]
}
