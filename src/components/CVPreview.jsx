import { forwardRef } from 'react'
import ClassicProfessional from './templates/ClassicProfessional/ClassicProfessional'
import ExecutiveBlue from './templates/ExecutiveBlue/ExecutiveBlue'
import ExecutivePro from './templates/ExecutivePro/ExecutivePro'
import SimpleAndElegant from './templates/SimpleAndElegant/SimpleAndElegant' // NEW
import TemplateExecutiveAssistant from './templates/TemplateExecutiveAssistant/TemplateExecutiveAssistant' // NEW
import CreativeBlue from './templates/CreativeBlue/CreativeBlue'
import ModernDarkSidebar from './templates/ModernDarkSidebar/ModernDarkSidebar'
import CenteredProfile from './templates/CenteredProfile/CenteredProfile'
import TimelineProfessional from './templates/TimelineProfessional/TimelineProfessional' // NEW // NEW // NEW
import ElegantSplit from './templates/ElegantSplit/ElegantSplit'
import CleanSidebarTimeline from './templates/CleanSidebarTimeline/CleanSidebarTimeline'
import ModernAccent from './templates/ModernAccent/ModernAccent'
import MinimalistTech from './templates/MinimalistTech/MinimalistTech' // NEW // NEW // NEW // NEW

const CVPreview = forwardRef(({ cvData, template, showLeftSidebar = true, onSectionAction }, ref) => {
 const templateId = template?.id || 'classic-professional'
  // Select the appropriate renderer based on template ID
 let Renderer;
 if (templateId === 'executive-blue') {
   Renderer = ExecutiveBlue;
 } else if (templateId === 'executive-pro') {
   Renderer = ExecutivePro;
 } else if (templateId === 'simple-and-elegant') { // NEW
   Renderer = SimpleAndElegant;

 }else if (templateId === 'template-executive-assistant') { // NEW
   Renderer = TemplateExecutiveAssistant;
 } else if (templateId === 'creative-blue') { // NEW
   Renderer = CreativeBlue;
 } else if (templateId === 'modern-dark-sidebar') { // NEW
   Renderer = ModernDarkSidebar;
 } else if (templateId === 'centered-profile') { // NEW
   Renderer = CenteredProfile;
 } else if (templateId === 'timeline-professional') { // NEW
   Renderer = TimelineProfessional;
 } else if (templateId === 'elegant-split') { // NEW
   Renderer = ElegantSplit;
 } else if (templateId === 'clean-sidebar-timeline') { // NEW
   Renderer = CleanSidebarTimeline;
 } else if (templateId === 'modern-accent') { // NEW
   Renderer = ModernAccent;
  } else if (templateId === 'minimalist-tech') { // NEW
   Renderer = MinimalistTech;
 } else {
   Renderer = ClassicProfessional;
 }

 return (
   <div ref={ref} id="print-area">
     <Renderer
       data={cvData}
       showLeftSidebar={showLeftSidebar}
       onSectionAction={onSectionAction}
     />
   </div>
 )
})

export default CVPreview