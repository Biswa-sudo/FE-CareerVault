import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';
import { templatePrompts } from '../data/prompts';
import { getTemplateDefaults } from '../data/templateDefaults';
import { buildTemplatePrompt } from '../data/prompts/masterPrompt';
import TemplateCard from '../components/TemplateCard';
import FeatureGate from '../components/FeatureGate';
import Button from '../components/ui/Button';

export default function Templates() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showChoiceModal, setShowChoiceModal] = useState(false);
  const [showAIModal, setShowAIModal] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [gptResponse, setGptResponse] = useState('');
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);

  // Handle template card click – open choice modal
  const handleCardClick = (template) => {
    setSelectedTemplate(template);
    setPrompt(buildPromptForTemplate(template.id));
    setGptResponse('');
    setShowChoiceModal(true);
  };

  const buildPromptForTemplate = (templateId) => {
    const basePrompt = templatePrompts[templateId] || '';
    const selectedDefaults = getTemplateDefaults(templateId);

    if (basePrompt) {
      return buildTemplatePrompt(basePrompt, selectedDefaults || undefined);
    }

    return buildTemplatePrompt(templateId, selectedDefaults || undefined);
  };

  // Ensure the prompt input is populated from templatePrompts when a template is selected
  useEffect(() => {
    if (!selectedTemplate) return
    setPrompt(buildPromptForTemplate(selectedTemplate.id))
  }, [selectedTemplate])

  // "Do Manually" – navigate directly to editor
  const handleManual = () => {
    setShowChoiceModal(false);
    navigate(`/editor/new?template=${selectedTemplate.id}`);
  };

  // "Use AI" – close choice modal, open AI modal
  const handleUseAI = () => {
    setShowChoiceModal(false);
    setShowAIModal(true);
  };

  // Copy prompt to clipboard with visual feedback
  const copyPrompt = () => {
    try {
      const write = navigator.clipboard.writeText(prompt)
      if (write && typeof write.then === 'function') {
        write.then(() => {
          setCopied(true)
          if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
          copyTimerRef.current = window.setTimeout(() => setCopied(false), 2000)
        }).catch(() => {})
      } else {
        // Fallback synchronous API (very old browsers)
        setCopied(true)
        if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
        copyTimerRef.current = window.setTimeout(() => setCopied(false), 2000)
      }
    } catch (e) {
      // ignore
    }
  };

  // Proceed with AI-generated data
  const handleProceed = () => {
    if (!gptResponse.trim()) {
      alert('Please paste the GPT response before proceeding.');
      return;
    }

    // Save to localStorage – structure: { templateId, fields: parsed from gptResponse }
    // You may want to parse the GPT response into form fields. For simplicity, we store raw text.
    let responseValue = gptResponse.trim()
    // If the pasted response is valid JSON, store it as an object so the editor can merge fields
    try {
      const parsed = JSON.parse(responseValue)
      responseValue = parsed
    } catch (e) {
      // keep as string
    }

    const aiData = {
      templateId: selectedTemplate.id,
      gptResponse: responseValue,
      timestamp: Date.now(),
    };
    localStorage.setItem('aiGeneratedData', JSON.stringify(aiData));

    setShowAIModal(false);
    // Navigate to editor – the editor will read from localStorage
    navigate(`/editor/new?template=${selectedTemplate.id}`);
  };

  // Clean up on modal close
  const closeModals = () => {
    setShowChoiceModal(false);
    setShowAIModal(false);
    setSelectedTemplate(null);
  };

  // Clear copy timer on unmount
  useEffect(() => {
    return () => {
      if (copyTimerRef.current) window.clearTimeout(copyTimerRef.current)
    }
  }, [])

  return (
    <FeatureGate productId={1} plan="career-vault" serviceName="Career Vault">
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 className="text-2xl font-display font-bold mr-4">Choose a Template</h1>
          <Button variant="secondary" onClick={() => navigate(-1)}>← Go Back</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t) => (
            <TemplateCard key={t.id} template={t} onSelect={handleCardClick} />
          ))}
        </div>
      </div>

      {/* ========== CHOICE MODAL ========== */}
      {showChoiceModal && selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Choose how to fill "{selectedTemplate.name}"</h2>
            <div className="flex gap-4">
              <Button variant="primary" onClick={handleUseAI} className="flex-1">
                Edit With AI
              </Button>
              <Button variant="secondary" onClick={handleManual} className="flex-1">
                Edit Manually
              </Button>
            </div>
            <button
              className="mt-4 text-sm text-gray-500 hover:underline"
              onClick={closeModals}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ========== AI PROMPT MODAL ========== */}
      {showAIModal && selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-xl w-full">
            <h2 className="text-xl font-bold mb-4">AI Assistant – {selectedTemplate.name}</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Prompt (copy and use in ChatGPT)
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  value={prompt}
                  readOnly
                  className="flex-1 p-2 border rounded bg-gray-50"
                />
                <div className="relative flex items-center">
                  <Button variant="secondary" onClick={copyPrompt}>
                    Copy
                  </Button>
                  <span
                    aria-hidden={!copied}
                    aria-live="polite"
                    className={`ml-2 text-sm font-medium text-green-600 transform transition-all duration-200 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                  >
                    Copied!
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Paste GPT response
              </label>
              <textarea
                rows={5}
                value={gptResponse}
                onChange={(e) => setGptResponse(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Paste the generated content here..."
              />
            </div>

            <div className="flex gap-4 justify-end">
              <Button
                variant="secondary"
                onClick={() => {
                  setShowAIModal(false);
                  setShowChoiceModal(true); // go back to choice
                }}
              >
                Back
              </Button>
              <Button variant="primary" onClick={handleProceed}>
                Proceed
              </Button>
            </div>
            <button
              className="mt-4 text-sm text-gray-500 hover:underline"
              onClick={closeModals}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </FeatureGate>
  );
}