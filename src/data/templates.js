export const templates = [
  {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Clean, bold header with structured sections.',
    headerBg: '#4f46e5',
    textColor: '#ffffff',
    accent: '#4338ca',
    layout: 'standard'
  },
  {
    id: 'minimal',
    name: 'Minimalist',
    description: 'Subtle grays, elegant typography.',
    headerBg: '#374151',
    textColor: '#f9fafb',
    accent: '#1f2937',
    layout: 'standard'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Vibrant accent colors, modern feel.',
    headerBg: '#0f766e',
    textColor: '#ffffff',
    accent: '#f59e0b',
    layout: 'standard'
  }
]

export function getTemplateById(id) {
  return templates.find(t => t.id === id) || templates[0]
}
