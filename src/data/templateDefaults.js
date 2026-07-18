import classicProfessionalDefaults from '../components/templates/ClassicProfessional/defaultFormData'
import executiveBlueDefaults from '../components/templates/ExecutiveBlue/defaultFormData'
import executiveProDefaults from '../components/templates/ExecutivePro/defaultFormData'
import simpleAndElegantDefaults from '../components/templates/SimpleAndElegant/defaultFormData' // NEW
import templateExecutiveAssistantDefaults from '../components/templates/TemplateExecutiveAssistant/defaultFormData' // NEW

const templateDefaults = {
 'classic-professional': classicProfessionalDefaults,
 'executive-blue': executiveBlueDefaults,
 'executive-pro': executiveProDefaults,
 'simple-and-elegant': simpleAndElegantDefaults,
 'template-executive-assistant': templateExecutiveAssistantDefaults, // NEW
}

export function getTemplateDefaults(templateId) {
 return templateDefaults[templateId] || null
}