import { forwardRef } from 'react'
import ClassicProfessional from './templates/ClassicProfessional/ClassicProfessional'
import ExecutiveBlue from './templates/ExecutiveBlue/ExecutiveBlue'
import ExecutivePro from './templates/ExecutivePro/ExecutivePro'

const CVPreview = forwardRef(({ cvData, template, showLeftSidebar = true, onSectionAction }, ref) => {
  const templateId = template?.id || 'classic-professional'
  
  // Select the appropriate renderer based on template ID
  let Renderer;
  if (templateId === 'executive-blue') {
    Renderer = ExecutiveBlue;
  } else if (templateId === 'executive-pro') {
    Renderer = ExecutivePro;
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