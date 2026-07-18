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
   id: 'executive-pro',
   name: 'Executive Pro',
   category: 'professional',
   preview: '/templates/executive-pro-preview.jpg'
 },
 {
   id: 'simple-and-elegant', // NEW
   name: 'Simple And Elegant',
   description: 'Clean alternating row template based on CV image.',
   category: 'professional'
 },
 {
   id: 'template-executive-assistant',
   name: 'Executive Assistant',
   description: 'Modern two-column layout with icon highlights based on the uploaded CV design.',
   category: 'professional',
   preview: '/templates/executive-assistant-preview.jpg',
   previewColor: '#1e293b'
 }
]

export function getTemplateById(id) {
 return templates.find(t => t.id === id) || templates[0]
}