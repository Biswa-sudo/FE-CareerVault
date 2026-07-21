import classicProfessionalDefaults from '../components/templates/ClassicProfessional/defaultFormData'
import executiveBlueDefaults from '../components/templates/ExecutiveBlue/defaultFormData'
import executiveProDefaults from '../components/templates/ExecutivePro/defaultFormData'
import simpleAndElegantDefaults from '../components/templates/SimpleAndElegant/defaultFormData' // NEW
import templateExecutiveAssistantDefaults from '../components/templates/TemplateExecutiveAssistant/defaultFormData' // NEW
import creativeBlueDefaults from '../components/templates/CreativeBlue/defaultFormData'
import modernDarkSidebarDefaults from '../components/templates/ModernDarkSidebar/defaultFormData' 
import centeredProfileDefaults from '../components/templates/CenteredProfile/defaultFormData'
import timelineProfessionalDefaults from '../components/templates/TimelineProfessional/defaultFormData' // NEW // NEW// NEW // NEW
import elegantSplitDefaults from '../components/templates/ElegantSplit/defaultFormData'
import cleanSidebarTimelineDefaults from '../components/templates/CleanSidebarTimeline/defaultFormData'
import modernAccentDefaults from '../components/templates/ModernAccent/defaultFormData'
import minimalistTechDefaults from '../components/templates/MinimalistTech/defaultFormData' // NEW // NEW // NEW // NEW

const templateDefaults = {
 'classic-professional': classicProfessionalDefaults,
 'executive-blue': executiveBlueDefaults,
 'executive-pro': executiveProDefaults,
 'simple-and-elegant': simpleAndElegantDefaults,
 'template-executive-assistant': templateExecutiveAssistantDefaults,
 'creative-blue': creativeBlueDefaults,
 'modern-dark-sidebar': modernDarkSidebarDefaults,
 'centered-profile': centeredProfileDefaults, // NEW
 'timeline-professional': timelineProfessionalDefaults, // NEW
 'elegant-split': elegantSplitDefaults, // NEW
 'clean-sidebar-timeline': cleanSidebarTimelineDefaults,
 'modern-accent': modernAccentDefaults,
 'minimalist-tech': minimalistTechDefaults, // NEW // NEW // NEW // NEW
}

export function getTemplateDefaults(templateId) {
 return templateDefaults[templateId] || null
}