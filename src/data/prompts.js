// src/data/prompts.js
import classicProfessionalPrompt from './prompts/classicProfessional.txt?raw';
import executiveProPrompt from './prompts/executivePro.txt?raw';
import centeredProfilePrompt from './prompts/centeredProfile.txt?raw';

export const templatePrompts = {
  'classic-professional': classicProfessionalPrompt,
  'executive-blue': '',
  'executive-pro': executiveProPrompt,
  'simple-and-elegant': '', 
  'template-executive-assistant': '',
  'creative-blue': '',
  'modern-dark-sidebar': '',
  'centered-profile': centeredProfilePrompt,
  'timeline-professional': '',
  'elegant-split': '',
  'clean-sidebar-timeline': '',
  'modern-accent': '',
  'minimalist-tech': '',
  'professional-dark': '',
};

export function getTemplatePrompt(id) {
  return templatePrompts[id] ?? '';
}