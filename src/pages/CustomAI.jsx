// ============================================================
// CustomAILandingPage.js
// Landing page for BentureAI Custom AI Products.
// Futuristic, tech-forward design with neon/circuit board aesthetic.
// ============================================================

import React, { useState } from 'react';
import ConsultationModal from '../components/ConsultationModal';

// ============================================================
// 1. DATA – Custom AI Products & Services
// ============================================================
const CUSTOM_AI_DATA = {
  id: 'custom-ai',
  name: 'Custom AI Solutions',
  tagline: 'AI built specifically for your business',
  description:
    'We don\'t just sell AI – we build AI that works for you. BentureAI Custom Solutions delivers bespoke artificial intelligence software tailored to your unique business challenges, data, and goals. From predictive analytics to automation, NLP to computer vision – we turn your vision into intelligent reality.',
  stats: [
    { label: 'Solutions Delivered', value: '340+' },
    { label: 'Happy Clients', value: '280+' },
    { label: 'Industry Domains', value: '18' },
    { label: 'Client Satisfaction', value: '4.9★' },
  ],
  capabilities: [
    {
      icon: 'fa-brain',
      title: 'Predictive Analytics & Forecasting',
      desc: 'Forecast demand, sales, and trends with 95%+ accuracy using advanced ML models.',
      color: '#818CF8',
    },
    {
      icon: 'fa-robot',
      title: 'Intelligent Process Automation',
      desc: 'Automate complex workflows with AI agents that learn and adapt to your processes.',
      color: '#34D399',
    },
    {
      icon: 'fa-comment-dots',
      title: 'Natural Language Processing',
      desc: 'Custom chatbots, sentiment analysis, and text intelligence built for your domain.',
      color: '#F472B6',
    },
    {
      icon: 'fa-eye',
      title: 'Computer Vision Solutions',
      desc: 'Image recognition, document processing, and visual inspection tailored to your needs.',
      color: '#F59E0B',
    },
    {
      icon: 'fa-database',
      title: 'Data & Custom Models',
      desc: 'Fine-tuned LLMs, custom recommendation engines, and proprietary AI models.',
      color: '#818CF8',
    },
    {
      icon: 'fa-chart-network',
      title: 'Enterprise AI Integration',
      desc: 'Seamless integration with your existing tech stack – ERP, CRM, and more.',
      color: '#34D399',
    },
  ],
  useCases: [
    {
      title: 'E-commerce',
      desc: 'Personalized recommendations, dynamic pricing, and demand forecasting.',
      icon: 'fa-shopping-cart',
      color: '#F472B6',
    },
    {
      title: 'Healthcare',
      desc: 'Diagnostic assistance, patient analytics, and operational optimization.',
      icon: 'fa-heartbeat',
      color: '#34D399',
    },
    {
      title: 'Finance',
      desc: 'Fraud detection, risk scoring, and algorithmic trading intelligence.',
      icon: 'fa-coins',
      color: '#F59E0B',
    },
    {
      title: 'Manufacturing',
      desc: 'Predictive maintenance, quality control, and supply chain optimization.',
      icon: 'fa-industry',
      color: '#818CF8',
    },
    {
      title: 'Logistics',
      desc: 'Route optimization, fleet management, and real-time tracking.',
      icon: 'fa-truck',
      color: '#34D399',
    },
    {
      title: 'Retail',
      desc: 'Inventory intelligence, customer segmentation, and store analytics.',
      icon: 'fa-store',
      color: '#F472B6',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Discovery',
      desc: 'We dive deep into your business challenges, data sources, and success metrics.',
      icon: 'fa-lightbulb',
    },
    {
      step: '02',
      title: 'Design',
      desc: 'Our AI architects design a custom solution architecture and model strategy.',
      icon: 'fa-pen-ruler',
    },
    {
      step: '03',
      title: 'Development',
      desc: 'We build, train, and iterate on your custom AI models using state-of-the-art techniques.',
      icon: 'fa-code',
    },
    {
      step: '04',
      title: 'Deployment',
      desc: 'Seamless integration, rigorous testing, and deployment to your production environment.',
      icon: 'fa-rocket',
    },
    {
      step: '05',
      title: 'Evolution',
      desc: 'Continuous monitoring, retraining, and improvement as your business grows.',
      icon: 'fa-sync-alt',
    },
  ],
  industries: [
    'Fintech', 'Healthcare', 'Manufacturing', 'E-commerce', 'Logistics', 'Retail',
    'Education', 'Real Estate', 'Hospitality', 'Automotive', 'Telecom', 'Energy'
  ],
  techStack: [
    { name: 'Python', icon: 'fa-python' },
    { name: 'TensorFlow', icon: 'fa-brain' },
    { name: 'PyTorch', icon: 'fa-fire' },
    { name: 'Transformers', icon: 'fa-robot' },
    { name: 'OpenAI', icon: 'fa-robot' },
    { name: 'LangChain', icon: 'fa-link' },
    { name: 'RAG', icon: 'fa-database' },
    { name: 'NLP', icon: 'fa-comment-dots' },
    { name: 'CV', icon: 'fa-eye' },
  ],
  // No pricing – it's custom, so we use a consultation CTA
};

// ============================================================
// 2. LANDING PAGE COMPONENT
// ============================================================
const CustomAILandingPage = () => {
  const [consultModalOpen, setConsultModalOpen] = useState(false);

  const handleConsult = () => {
    setConsultModalOpen(true);
  };

  // form submission is handled by the reusable ConsultationModal component

  return (
    <div style={styles.container}>
      {/* ----- HERO SECTION (Futuristic Neon/Circuit) ----- */}
      <section style={styles.hero}>
        <div style={styles.heroGrid}></div>
        <div style={styles.heroGlow}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <i className="fas fa-microchip" style={styles.heroBadgeIcon}></i> AI built for your business
          </div>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroHighlight}>Custom</span> AI Solutions
          </h1>
          <p style={styles.heroTagline}>{CUSTOM_AI_DATA.tagline}</p>
          <p style={styles.heroDescription}>{CUSTOM_AI_DATA.description}</p>
          <div style={styles.heroActions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={handleConsult}
            >
              <i className="fas fa-message"></i> Book a Free Consultation
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnOutlineLight }}
              onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-chevron-down"></i> Explore Capabilities
            </button>
          </div>
          <div style={styles.heroStats}>
            {CUSTOM_AI_DATA.stats.map((stat, idx) => (
              <div key={idx} style={styles.heroStat}>
                <strong style={styles.heroStatValue}>{stat.value}</strong>
                <span style={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.aiCard}>
            <div style={styles.aiCardHeader}>
              <span style={styles.aiCardTitle}>AI Architecture</span>
              <span style={styles.aiCardStatus}>● Live</span>
            </div>
            <div style={styles.aiNodes}>
              <div style={styles.aiNode}><span>Data</span></div>
              <div style={styles.aiNode}><span>Model</span></div>
              <div style={styles.aiNode}><span>Train</span></div>
              <div style={styles.aiNode}><span>Deploy</span></div>
              <div style={styles.aiNode}><span>Monitor</span></div>
            </div>
            <div style={styles.aiDivider}></div>
            <div style={styles.aiMetrics}>
              <div style={styles.aiMetric}>
                <span style={styles.aiMetricLabel}>Accuracy</span>
                <span style={styles.aiMetricValue}>98.4%</span>
              </div>
              <div style={styles.aiMetric}>
                <span style={styles.aiMetricLabel}>Latency</span>
                <span style={styles.aiMetricValue}>42ms</span>
              </div>
              <div style={styles.aiMetric}>
                <span style={styles.aiMetricLabel}>Uptime</span>
                <span style={styles.aiMetricValue}>99.97%</span>
              </div>
            </div>
            <div style={styles.aiDivider}></div>
            <div style={styles.aiFooter}>
              <span>Custom AI</span>
              <span style={styles.aiFooterValue}>Tailored • Scalable • Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----- CAPABILITIES SECTION ----- */}
      <section id="capabilities" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Capabilities</span>
          <h2 style={styles.sectionHeaderTitle}>
            What can <span style={{ color: '#818CF8' }}>custom AI</span> do for you?
          </h2>
          <p style={styles.sectionHeaderSubtext}>
            We build intelligent systems that solve real business problems across any domain.
          </p>
        </div>
        <div style={styles.capabilitiesGrid}>
          {CUSTOM_AI_DATA.capabilities.map((cap, idx) => (
            <div key={idx} style={styles.capabilityCard}>
              <div style={{ ...styles.capabilityIcon, color: cap.color }}>
                <i className={`fas ${cap.icon}`}></i>
              </div>
              <h4 style={styles.capabilityCardTitle}>{cap.title}</h4>
              <p style={styles.capabilityCardDesc}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----- USE CASES / INDUSTRIES SECTION ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Use Cases</span>
          <h2 style={styles.sectionHeaderTitle}>
            AI <span style={{ color: '#34D399' }}>across industries</span>
          </h2>
          <p style={styles.sectionHeaderSubtext}>
            Every industry has unique challenges – we build AI that solves them.
          </p>
        </div>
        <div style={styles.useCasesGrid}>
          {CUSTOM_AI_DATA.useCases.map((use, idx) => (
            <div key={idx} style={styles.useCaseCard}>
              <div style={{ ...styles.useCaseIcon, color: use.color }}>
                <i className={`fas ${use.icon}`}></i>
              </div>
              <h4 style={styles.useCaseCardTitle}>{use.title}</h4>
              <p style={styles.useCaseCardDesc}>{use.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----- PROCESS SECTION (Timeline) ----- */}
      <section style={styles.processSection}>
        <div style={styles.processBg}></div>
        <div style={styles.processContent}>
          <div style={styles.sectionHeader}>
            <span style={styles.tag}>Our Process</span>
            <h2 style={{ ...styles.sectionHeaderTitle, color: '#ffffff' }}>
              How we build <span style={{ color: '#818CF8' }}>your AI</span>
            </h2>
            <p style={{ ...styles.sectionHeaderSubtext, color: '#94A3B8' }}>
              A proven methodology for delivering custom AI that drives real business value.
            </p>
          </div>
          <div style={styles.processSteps}>
            {CUSTOM_AI_DATA.process.map((step, idx) => (
              <div key={idx} style={styles.processStep}>
                <div style={styles.processStepNum}>{step.step}</div>
                <div style={styles.processStepIcon}>
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4 style={styles.processStepTitle}>{step.title}</h4>
                <p style={styles.processStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- TECH STACK ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Tech Stack</span>
          <h2 style={styles.sectionHeaderTitle}>
            Powered by <span style={{ color: '#F472B6' }}>cutting-edge</span> AI
          </h2>
          <p style={styles.sectionHeaderSubtext}>
            We use the most advanced tools and frameworks to build your custom AI solutions.
          </p>
        </div>
        <div style={styles.techGrid}>
          {CUSTOM_AI_DATA.techStack.map((tech, idx) => (
            <div key={idx} style={styles.techCard}>
              <i className={`fas ${tech.icon}`} style={styles.techIcon}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----- INDUSTRIES WE SERVE ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Industries</span>
          <h2 style={styles.sectionHeaderTitle}>
            We understand <span style={{ color: '#F59E0B' }}>your domain</span>
          </h2>
          <p style={styles.sectionHeaderSubtext}>
            We've built AI solutions across 18+ industries – we speak your language.
          </p>
        </div>
        <div style={styles.industriesGrid}>
          {CUSTOM_AI_DATA.industries.map((industry, idx) => (
            <div key={idx} style={styles.industryCard}>
              <i className="fas fa-check-circle" style={styles.industryCheck}></i>
              <span>{industry}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----- FINAL CTA (Consultation) ----- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaGlow}></div>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaContentTitle}>
            Ready to build <span style={{ color: '#818CF8' }}>AI that works</span> for you?
          </h2>
          <p style={styles.ctaContentSubtext}>
            Let's talk about your business challenges and how custom AI can solve them.
          </p>
          <div style={styles.ctaButtons}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={handleConsult}
            >
              <i className="fas fa-calendar-check"></i> Book a Free Consultation
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnOutlineLight }}
              onClick={() => window.location.href = 'mailto:support@bentureai.com'}
            >
              <i className="fas fa-envelope"></i> support@bentureai.com
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        initialSubject={CUSTOM_AI_DATA.name}
      />
    </div>
  );
};

// ============================================================
// 3. STYLES (Futuristic Neon/Circuit Design)
// ============================================================
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    color: '#1e293b',
    backgroundColor: '#0a0a0f',
    minHeight: '100vh',
    padding: '0',
    margin: '0',
  },

  // ---- Hero (Futuristic Neon) ----
  hero: {
    position: 'relative',
    background: 'linear-gradient(145deg, #0a0a0f 0%, #111827 30%, #0f172a 60%, #1e1b4b 100%)',
    padding: '80px 40px 70px',
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr',
    gap: 60,
    alignItems: 'center',
    maxWidth: 1200,
    margin: '32px auto 0',
    borderRadius: 28,
    overflow: 'hidden',
    border: '1px solid rgba(129,140,248,0.15)',
  },
  heroGrid: {
    position: 'absolute',
    inset: 0,
    background: `
      linear-gradient(rgba(129,140,248,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(129,140,248,0.03) 1px, transparent 1px)
    `,
    backgroundSize: '40px 40px',
    pointerEvents: 'none',
  },
  heroGlow: {
    position: 'absolute',
    top: '-30%',
    right: '-20%',
    width: 600,
    height: 600,
    background: 'radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(129,140,248,0.12)',
    border: '1px solid rgba(129,140,248,0.15)',
    padding: '6px 16px 6px 12px',
    borderRadius: 40,
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#818CF8',
    marginBottom: 20,
  },
  heroBadgeIcon: { fontSize: '0.7rem', color: '#818CF8' },
  heroTitle: {
    fontSize: '3.4rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 1.1,
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #818CF8, #A78BFA, #C4B5FD)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroTagline: {
    fontSize: '1.3rem',
    color: '#818CF8',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#94A3B8',
    lineHeight: 1.8,
    maxWidth: 520,
    marginBottom: 28,
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  heroStats: {
    display: 'flex',
    gap: 40,
    flexWrap: 'wrap',
    borderTop: '1px solid rgba(129,140,248,0.08)',
    paddingTop: 24,
  },
  heroStat: {
    textAlign: 'left',
  },
  heroStatValue: {
    display: 'block',
    fontSize: '1.6rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.01em',
  },
  heroStatLabel: {
    fontSize: '0.85rem',
    color: '#64748b',
  },

  // ---- Hero Visual (AI Architecture Card) ----
  heroVisual: {
    position: 'relative',
    zIndex: 2,
  },
  aiCard: {
    background: 'rgba(255,255,255,0.03)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(129,140,248,0.12)',
    borderRadius: 20,
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(129,140,248,0.05)',
  },
  aiCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  aiCardTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#818CF8',
  },
  aiCardStatus: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#34D399',
  },
  aiNodes: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  aiNode: {
    padding: '6px 14px',
    background: 'rgba(129,140,248,0.08)',
    borderRadius: 20,
    border: '1px solid rgba(129,140,248,0.06)',
    fontSize: '0.7rem',
    fontWeight: 600,
    color: '#818CF8',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  aiDivider: {
    height: 1,
    background: 'rgba(129,140,248,0.08)',
    margin: '12px 0',
  },
  aiMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
  },
  aiMetric: {
    textAlign: 'center',
  },
  aiMetricLabel: {
    display: 'block',
    fontSize: '0.65rem',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  aiMetricValue: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#E2E8F0',
  },
  aiFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: '#64748b',
  },
  aiFooterValue: {
    color: '#818CF8',
    fontWeight: 500,
  },

  // ---- Section ----
  section: {
    maxWidth: 1200,
    margin: '80px auto',
    padding: '0 24px',
  },
  sectionHeader: {
    textAlign: 'center',
    maxWidth: 700,
    margin: '0 auto 48px',
  },
  tag: {
    display: 'inline-block',
    fontWeight: 600,
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.06em',
    color: '#818CF8',
    background: 'rgba(129,140,248,0.1)',
    padding: '4px 16px',
    borderRadius: 20,
    marginBottom: 12,
  },
  sectionHeaderTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    marginBottom: 8,
  },
  sectionHeaderSubtext: {
    color: '#94A3B8',
    fontSize: '1.05rem',
  },

  // ---- Capabilities ----
  capabilitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  capabilityCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: '28px 24px',
    transition: '0.3s',
    textAlign: 'center',
  },
  capabilityIcon: {
    fontSize: '2.2rem',
    marginBottom: 12,
  },
  capabilityCardTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: 8,
  },
  capabilityCardDesc: {
    fontSize: '0.9rem',
    color: '#94A3B8',
    lineHeight: 1.6,
  },

  // ---- Use Cases ----
  useCasesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20,
  },
  useCaseCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: 16,
    padding: '24px 20px',
    transition: '0.3s',
    textAlign: 'center',
  },
  useCaseIcon: {
    fontSize: '1.8rem',
    marginBottom: 10,
  },
  useCaseCardTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: 4,
  },
  useCaseCardDesc: {
    fontSize: '0.85rem',
    color: '#94A3B8',
    lineHeight: 1.5,
  },

  // ---- Process Section ----
  processSection: {
    position: 'relative',
    padding: '80px 0',
    margin: '80px 0 0',
    backgroundColor: '#0a0a0f',
    borderTop: '1px solid rgba(129,140,248,0.05)',
    borderBottom: '1px solid rgba(129,140,248,0.05)',
    overflow: 'hidden',
  },
  processBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 50%, rgba(129,140,248,0.02) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  processContent: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2,
  },
  processSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 16,
  },
  processStep: {
    textAlign: 'center',
    padding: '20px 12px',
    position: 'relative',
  },
  processStepNum: {
    fontSize: '2rem',
    fontWeight: 800,
    color: 'rgba(129,140,248,0.1)',
    marginBottom: 8,
    letterSpacing: '-0.02em',
  },
  processStepIcon: {
    fontSize: '1.8rem',
    color: '#818CF8',
    marginBottom: 10,
  },
  processStepTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: 4,
  },
  processStepDesc: {
    fontSize: '0.8rem',
    color: '#94A3B8',
    lineHeight: 1.5,
  },

  // ---- Tech Stack ----
  techGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    maxWidth: 700,
    margin: '0 auto',
  },
  techCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: 12,
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#94A3B8',
    transition: '0.2s',
  },
  techIcon: {
    color: '#818CF8',
    fontSize: '1rem',
  },

  // ---- Industries ----
  industriesGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    maxWidth: 900,
    margin: '0 auto',
  },
  industryCard: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.04)',
    borderRadius: 40,
    padding: '8px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: '0.85rem',
    fontWeight: 500,
    color: '#E2E8F0',
  },
  industryCheck: {
    color: '#34D399',
    fontSize: '0.75rem',
  },

  // ---- CTA ----
  ctaSection: {
    maxWidth: 1200,
    margin: '64px auto',
    padding: '64px 40px',
    background: 'linear-gradient(145deg, #0a0a0f 0%, #111827 40%, #1e1b4b 100%)',
    borderRadius: 24,
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    border: '1px solid rgba(129,140,248,0.08)',
  },
  ctaGlow: {
    position: 'absolute',
    top: '-50%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: 800,
    height: 800,
    background: 'radial-gradient(circle, rgba(129,140,248,0.04) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  ctaContent: {
    maxWidth: 600,
    margin: '0 auto',
    color: 'white',
    position: 'relative',
    zIndex: 2,
  },
  ctaContentTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: 12,
  },
  ctaContentSubtext: {
    color: '#94A3B8',
    fontSize: '1.05rem',
    marginBottom: 24,
  },
  ctaButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },

  // ---- Buttons ----
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontWeight: 600,
    fontSize: '0.95rem',
    padding: '12px 28px',
    border: 'none',
    borderRadius: 40,
    cursor: 'pointer',
    transition: '0.25s',
    fontFamily: 'inherit',
    textDecoration: 'none',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #4F46E5, #7C3AED)',
    color: 'white',
    boxShadow: '0 4px 20px rgba(79,70,229,0.35)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#4F46E5',
    border: '2px solid #4F46E5',
  },
  btnOutlineLight: {
    background: 'transparent',
    color: 'white',
    border: '2px solid rgba(255,255,255,0.12)',
  },
  btnWhite: {
    background: 'white',
    color: '#1e293b',
    border: '1px solid #e2e8f0',
  },

  // ---- Consultation Modal ----
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.7)',
    backdropFilter: 'blur(8px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    background: '#111827',
    borderRadius: 24,
    maxWidth: 520,
    width: '100%',
    padding: '40px 36px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
    border: '1px solid rgba(129,140,248,0.08)',
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    top: 16,
    right: 16,
    background: 'rgba(255,255,255,0.05)',
    border: 'none',
    color: '#94A3B8',
    width: 36,
    height: 36,
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: '0.2s',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    marginBottom: 8,
  },
  modalIcon: {
    color: '#818CF8',
    marginRight: 10,
  },
  modalSub: {
    color: '#94A3B8',
    marginBottom: 24,
  },
  modalForm: {},
  formRow: {
    display: 'flex',
    gap: 12,
  },
  formGroup: {
    marginBottom: 16,
  },
  formLabel: {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.85rem',
    marginBottom: 4,
    color: '#E2E8F0',
  },
  formInput: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: '0.2s',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.03)',
    color: '#F1F5F9',
  },
  formTextarea: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 12,
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: '0.2s',
    boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.03)',
    color: '#F1F5F9',
    resize: 'vertical',
    minHeight: 80,
  },
  successMessage: {
    textAlign: 'center',
    padding: '20px 0',
  },
  successIcon: {
    fontSize: '3rem',
    color: '#34D399',
    marginBottom: 12,
  },
successMessage: {
  textAlign: 'center',
  padding: '20px 0',
},
successMessageIcon: {
  fontSize: '3rem',
  color: '#34D399',
  marginBottom: 12,
},
successMessageTitle: {
  color: '#F1F5F9',
  fontSize: '1.2rem',
  marginBottom: 4,
},
successMessageSubtext: {
  color: '#94A3B8',
},
};

// ============================================================
// 4. EXPORT
// ============================================================
export default CustomAILandingPage;