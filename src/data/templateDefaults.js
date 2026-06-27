// import classicProfessionalDefaults from '../components/templates/ClassicProfessional/defaultFormData'
// import executiveBlueDefaults from '../components/templates/ExecutiveBlue/defaultFormData'

// // Maps templateId → default form data for new CVs.
// // Add an entry here whenever a new template is created.
// const templateDefaults = {
//   'classic-professional': classicProfessionalDefaults,
//   'executive-blue': executiveBlueDefaults,
// }

// export function getTemplateDefaults(templateId) {  
//   return templateDefaults[templateId] || null
// }

import classicProfessionalDefaults from '../components/templates/ClassicProfessional/defaultFormData'
import executiveBlueDefaults from '../components/templates/ExecutiveBlue/defaultFormData'
import executiveProDefaults from '../components/templates/ExecutivePro/defaultFormData' // NEW

// Maps templateId → default form data for new CVs.
// Add an entry here whenever a new template is created.
const templateDefaults = {
  'classic-professional': classicProfessionalDefaults,
  'executive-blue': executiveBlueDefaults,
  'executive-pro': executiveProDefaults, // NEW
}

export function getTemplateDefaults(templateId) {
  return templateDefaults[templateId] || null
}