import classicProfessionalDefaults from '../components/templates/ClassicProfessional/defaultFormData'

// Maps templateId → default form data for new CVs.
// Add an entry here whenever a new template is created.
const templateDefaults = {
  'classic-professional': classicProfessionalDefaults,
}

export function getTemplateDefaults(templateId) {
  return templateDefaults[templateId] || null
}
