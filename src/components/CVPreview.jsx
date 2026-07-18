import { forwardRef } from 'react'
import ClassicProfessional from './templates/ClassicProfessional/ClassicProfessional'
import ExecutiveBlue from './templates/ExecutiveBlue/ExecutiveBlue'
import ExecutivePro from './templates/ExecutivePro/ExecutivePro'
import SimpleAndElegant from './templates/SimpleAndElegant/SimpleAndElegant' // NEW
import TemplateExecutiveAssistant from './templates/TemplateExecutiveAssistant/TemplateExecutiveAssistant' // NEW

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
 }
  else {
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