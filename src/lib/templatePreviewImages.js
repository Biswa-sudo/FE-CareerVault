import executiveAssistantPreview from '../assets/executive-assistant-preview.jpg'
import simpleAndElegantPreview from '../assets/simpleAndElegantPreview.jpg'
import classicProfessional from '../assets/classicProfessional.jpg'
import executiveBlue from '../assets/ExecutiveBlue.jpg'
import executivePro from '../assets/ExecutivePro.jpg'
import creativeBlue from '../assets/CreativeBlue.jpg'
import modernDarkSidebar from '../assets/ModernDarkSidebar.jpg'
import timelineProfessional from '../assets/TimelineProfessional.jpg'
import elegantSplit from '../assets/ElegantSplit.jpg'
import centeredProfile from '../assets/CenteredProfile.jpg'
import cleanSidebarTimeline from '../assets/CleanSidebarTimeline.jpg'
import modernAccent from '../assets/ModernAccent.jpg'
import minimalistTech from '../assets/MinimalistTech.jpg'
import professionalDark from '../assets/ProfessionalDark.jpg'

const templatePreviewImages = {
  'template-executive-assistant': executiveAssistantPreview,
  'simple-and-elegant': simpleAndElegantPreview,
  'executive-blue': executiveBlue,
  'classic-professional': classicProfessional,
  'executive-pro': executivePro,
  'creative-blue': creativeBlue,
  'modern-dark-sidebar': modernDarkSidebar,
  'timeline-professional': timelineProfessional,
  'elegant-split': elegantSplit,
  'centered-profile': centeredProfile,
  'clean-sidebar-timeline': cleanSidebarTimeline,
  'modern-accent': modernAccent,
  'minimalist-tech': minimalistTech,
  'professional-dark': professionalDark,
}

export function getTemplatePreviewImage(templateId) {
  return templatePreviewImages[templateId]
}
