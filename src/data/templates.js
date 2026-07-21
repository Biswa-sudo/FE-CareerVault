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
 },
 {
   id: 'creative-blue', // NEW
   name: 'Creative Blue',
   description: 'Modern two-column layout with hexagon icons based on CV image.',
   category: 'creative'
 },
 {
   id: 'modern-dark-sidebar', // NEW
   name: 'Modern Dark Sidebar',
   description: 'Clean two-column layout with a distinctive dark blue sidebar.',
   category: 'professional'
 },
 {
   id: 'centered-profile', // NEW
   name: 'Centered Profile',
   description: 'Single column layout with a centered photo and prominent orange accents.',
   category: 'creative'
 },
 {
   id: 'timeline-professional', // NEW
   name: 'Timeline Professional',
   description: 'Clean two-column layout featuring a timeline visual for experience and elegant teal accents.',
   category: 'professional'
 },
 {
   id: 'elegant-split', // NEW
   name: 'Elegant Split',
   description: 'Sophisticated dual-column design with a distinct dark sidebar and sharp typography.',
   category: 'creative'
 },
 {
   id: 'clean-sidebar-timeline', // NEW
   name: 'Clean Sidebar Timeline',
   description: 'Light sidebar with progress bars and a clean main timeline for experience.',
   category: 'professional'
 },
 {
   id: 'modern-accent', // NEW
   name: 'Modern Accent',
   description: 'Bold top-border design with striking coral accents and a clean split layout.',
   category: 'creative'
 },
 {
   id: 'minimalist-tech', // NEW
   name: 'Minimalist Tech',
   description: 'Sleek tech-focused layout with a dark header block and clean light body.',
   category: 'professional'
 }
]

export function getTemplateById(id) {
 return templates.find(t => t.id === id) || templates[0]
}