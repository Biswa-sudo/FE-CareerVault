// ============================================================
// SalesCRMLandingPage.js
// Landing page for BentureAI's Sales & CRM suite (12 products).
// Energetic design with sales-focused visuals and pipeline flow.
// ============================================================

import React, { useState } from 'react';

// ============================================================
// 1. DATA – Sales & CRM Products
// ============================================================
const SALES_CRM_DATA = {
  id: 'sales-crm',
  name: 'Sales & CRM',
  tagline: 'Close more deals, faster',
  description:
    'BentureAI Sales & CRM is a complete customer relationship ecosystem with 12 interconnected products. From lead capture to deal closure, billing to customer success – everything you need to build lasting customer relationships and grow revenue.',
  stats: [
    { label: 'Products', value: '12' },
    { label: 'Deals Closed', value: '50,000+' },
    { label: 'Leads Managed', value: '2.1M+' },
    { label: 'Customer Rating', value: '4.8★' },
  ],
  products: [
    { name: 'CRM', desc: 'Complete customer relationship management', icon: 'fa-address-book', color: '#4F46E5' },
    { name: 'Leads', desc: 'Capture, score, and nurture sales leads', icon: 'fa-user-plus', color: '#F59E0B' },
    { name: 'Contacts', desc: 'Manage customer contact database', icon: 'fa-address-card', color: '#059669' },
    { name: 'Companies', desc: 'Business and customer account management', icon: 'fa-building', color: '#7C3AED' },
    { name: 'Deals', desc: 'Track sales opportunities and forecasts', icon: 'fa-handshake', color: '#DC2626' },
    { name: 'Sales Pipeline', desc: 'Visual deal pipeline with drag-and-drop', icon: 'fa-filter', color: '#2563EB' },
    { name: 'Activities', desc: 'Log calls, meetings, and follow-ups', icon: 'fa-calendar-day', color: '#0891B2' },
    { name: 'Follow-ups', desc: 'Automated reminders and sequences', icon: 'fa-bell', color: '#EA580C' },
    { name: 'Sales Targets', desc: 'Team and individual sales goals', icon: 'fa-bullseye', color: '#0D9488' },
    { name: 'Sales Reports', desc: 'Revenue, win/loss, and forecasting', icon: 'fa-chart-bar', color: '#6D28D9' },
    { name: 'Products', desc: 'Manage product catalogue and pricing', icon: 'fa-box', color: '#1E293B' },
    { name: 'Price Lists', desc: 'Manage discounts and currency variants', icon: 'fa-tags', color: '#9333EA' },
  ],
  integrations: ['Salesforce', 'HubSpot', 'Zoho CRM', 'Slack', 'Teams', 'Google Workspace', 'Zapier', 'Mailchimp'],
  pricing: [
    {
      name: 'CRM Starter',
      price: 149,
      currency: '₹',
      period: '/month',
      features: ['Up to 10 users', 'Lead & contact management', 'Basic pipeline', 'Email support'],
      popular: false,
    },
    {
      name: 'CRM Pro',
      price: 399,
      currency: '₹',
      period: '/month',
      features: [
        'All 12 products included',
        'Advanced pipeline & forecasting',
        'Sales automation',
        'Full reporting suite',
        'Priority support',
        'API access',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      currency: '',
      period: '',
      features: [
        'All Pro features',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
        'White-label option',
        'SLA guarantees',
      ],
      popular: false,
    },
  ],
};

// ============================================================
// 2. LANDING PAGE COMPONENT
// ============================================================
const SalesCRMLandingPage = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    setPaymentModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert(`✅ Payment successful for ${SALES_CRM_DATA.name} (${selectedPlan?.name || 'CRM Pro'})`);
    setPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div style={styles.container}>
      {/* ----- HERO SECTION (Energetic Gradient) ----- */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <i className="fas fa-trophy" style={styles.heroBadgeIcon}></i> #1 Sales Platform for Growing Teams
          </div>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroHighlight}>Sales</span> & CRM
          </h1>
          <p style={styles.heroTagline}>{SALES_CRM_DATA.tagline}</p>
          <p style={styles.heroDescription}>{SALES_CRM_DATA.description}</p>
          <div style={styles.heroActions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={() => handlePurchase(SALES_CRM_DATA.pricing[1])}
            >
              <i className="fas fa-rocket"></i> Start Free Trial
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnOutlineLight }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-chevron-down"></i> Explore Products
            </button>
          </div>
          <div style={styles.heroStats}>
            {SALES_CRM_DATA.stats.map((stat, idx) => (
              <div key={idx} style={styles.heroStat}>
                <strong style={styles.heroStatValue}>{stat.value}</strong>
                <span style={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.pipelineCard}>
            <div style={styles.pipelineCardHeader}>
              <span style={styles.pipelineCardTitle}>Sales Pipeline</span>
              <span style={styles.pipelineCardValue}>₹18.4L</span>
            </div>
            <div style={styles.pipelineStages}>
              <div style={styles.pipelineStage}>
                <span style={styles.stageLabel}>Lead</span>
                <span style={styles.stageCount}>46</span>
                <div style={{ ...styles.stageBar, width: '100%', background: '#FCD34D' }}></div>
              </div>
              <div style={styles.pipelineStage}>
                <span style={styles.stageLabel}>Contact</span>
                <span style={styles.stageCount}>38</span>
                <div style={{ ...styles.stageBar, width: '82%', background: '#60A5FA' }}></div>
              </div>
              <div style={styles.pipelineStage}>
                <span style={styles.stageLabel}>Deal</span>
                <span style={styles.stageCount}>24</span>
                <div style={{ ...styles.stageBar, width: '52%', background: '#A78BFA' }}></div>
              </div>
              <div style={styles.pipelineStage}>
                <span style={styles.stageLabel}>Proposal</span>
                <span style={styles.stageCount}>12</span>
                <div style={{ ...styles.stageBar, width: '26%', background: '#F472B6' }}></div>
              </div>
              <div style={styles.pipelineStage}>
                <span style={styles.stageLabel}>Closed</span>
                <span style={styles.stageCount}>8</span>
                <div style={{ ...styles.stageBar, width: '17%', background: '#34D399' }}></div>
              </div>
            </div>
            <div style={styles.pipelineFooter}>
              <span>Deals won this month</span>
              <span style={styles.pipelineFooterValue}>8</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----- PRODUCTS SHOWCASE (12 Products Grid) ----- */}
      <section id="products" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>12 Products, One Ecosystem</span>
          <h2>Power your <span style={{ color: '#4F46E5' }}>sales engine</span></h2>
          <p>From lead to loyal customer – every tool you need to build relationships and close deals.</p>
        </div>
        <div style={styles.productsGrid}>
          {SALES_CRM_DATA.products.map((product, idx) => (
            <div key={idx} style={styles.productCard}>
              <div style={{ ...styles.productIcon, backgroundColor: `${product.color}15`, color: product.color }}>
                <i className={`fas ${product.icon}`}></i>
              </div>
              <h4 style={styles.productName}>{product.name}</h4>
              <p style={styles.productDesc}>{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----- PIPELINE WORKFLOW SECTION ----- */}
      <section style={styles.workflowSection}>
        <div style={styles.workflowBg}></div>
        <div style={styles.workflowContent}>
          <div style={styles.workflowHeader}>
            <span style={styles.tag}>The Sales Workflow</span>
            <h2 style={styles.workflowHeaderTitle}>
              From <span style={{ color: '#F59E0B' }}>Lead</span> to <span style={{ color: '#34D399' }}>Revenue</span>
            </h2>
            <p style={styles.workflowHeaderSubtext}>
              See how our products connect to create a seamless sales motion.
            </p>
          </div>
          <div style={styles.workflowSteps}>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>1</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-user-plus"></i></div>
              <h4 style={styles.workflowStepTitle}>Leads</h4>
              <p style={styles.workflowStepParagraph}>Capture & score</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>2</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-handshake"></i></div>
              <h4 style={styles.workflowStepTitle}>Deals</h4>
              <p style={styles.workflowStepParagraph}>Track & manage</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>3</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-file-invoice-dollar"></i></div>
              <h4 style={styles.workflowStepTitle}>Quotation</h4>
              <p style={styles.workflowStepParagraph}>Propose & negotiate</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>4</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-file-invoice"></i></div>
              <h4 style={styles.workflowStepTitle}>Invoice</h4>
              <p style={styles.workflowStepParagraph}>Bill & collect</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>5</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-heart"></i></div>
              <h4 style={styles.workflowStepTitle}>Retention</h4>
              <p style={styles.workflowStepParagraph}>Grow & support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----- INTEGRATIONS ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Integrations</span>
          <h2>Connect with your <span style={{ color: '#4F46E5' }}>favorite tools</span></h2>
          <p>Sales & CRM works seamlessly with the tools you already use.</p>
        </div>
        <div style={styles.integrationsGrid}>
          {SALES_CRM_DATA.integrations.map((integration, idx) => (
            <div key={idx} style={styles.integrationCard}>
              <i className="fas fa-plug" style={styles.integrationIcon}></i>
              <span>{integration}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----- PRICING SECTION ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Pricing</span>
          <h2>Choose your <span style={{ color: '#4F46E5' }}>sales suite</span></h2>
          <p>Start with a free trial – no credit card required.</p>
        </div>
        <div style={styles.pricingGrid}>
          {SALES_CRM_DATA.pricing.map((plan, idx) => (
            <div
              key={idx}
              style={{
                ...styles.pricingCard,
                ...(plan.popular ? styles.popularCard : {}),
              }}
            >
              {plan.popular && <span style={styles.popularBadge}>Most Popular</span>}
              <h4 style={styles.planName}>{plan.name}</h4>
              <div style={styles.planPrice}>
                {plan.currency}
                {plan.price}
                {plan.period && <span style={styles.planPeriod}>{plan.period}</span>}
              </div>
              <ul style={styles.planFeatures}>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <i className="fas fa-check" style={styles.planCheck}></i> {f}
                  </li>
                ))}
              </ul>
              <button
                style={{
                  ...styles.btn,
                  ...(plan.popular ? styles.btnPrimary : styles.btnOutline),
                  width: '100%',
                  justifyContent: 'center',
                }}
                onClick={() => handlePurchase(plan)}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ----- FINAL CTA ----- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaContentTitle}>
            Ready to <span style={{ color: '#FCD34D' }}>supercharge</span> your sales?
          </h2>
          <p style={styles.ctaContentSubtext}>
            Join 50,000+ sales teams that use BentureAI Sales & CRM to close more deals.
          </p>
          <button
            style={{ ...styles.btn, ...styles.btnWhite }}
            onClick={() => handlePurchase(SALES_CRM_DATA.pricing[1])}
          >
            <i className="fas fa-rocket"></i> Start Your Free Trial
          </button>
        </div>
      </section>

      {/* ----- PAYMENT MODAL ----- */}
      {paymentModalOpen && selectedPlan && (
        <div style={styles.modalOverlay} onClick={() => setPaymentModalOpen(false)}>
          <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <h3 style={styles.modalTitle}>
              <i className="fas fa-lock" style={styles.modalLock}></i> Complete Purchase
            </h3>
            <p style={styles.modalSub}>
              You are about to subscribe to <strong>{SALES_CRM_DATA.name} – {selectedPlan.name}</strong>
            </p>
            <div style={styles.modalPrice}>
              {selectedPlan.currency}{selectedPlan.price}
              {selectedPlan.period && <span style={styles.modalPriceSuffix}>{selectedPlan.period}</span>}
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Card Number</label>
              <input type="text" placeholder="1234 5678 9012 3456" style={styles.formInput} />
            </div>
            <div style={styles.formRow}>
              <div style={{ ...styles.formGroup, flex: 1 }}>
                <label style={styles.formLabel}>Expiry</label>
                <input type="text" placeholder="MM/YY" style={styles.formInput} />
              </div>
              <div style={{ ...styles.formGroup, flex: 1 }}>
                <label style={styles.formLabel}>CVC</label>
                <input type="text" placeholder="123" style={styles.formInput} />
              </div>
            </div>

            <div style={styles.modalActions}>
              <button style={{ ...styles.modalBtn, ...styles.modalBtnSecondary }} onClick={() => setPaymentModalOpen(false)}>
                Cancel
              </button>
              <button style={{ ...styles.modalBtn, ...styles.modalBtnPrimary }} onClick={handlePaymentSubmit}>
                <i className="fas fa-check"></i> Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// 3. STYLES (Energetic Sales-Focused Design)
// ============================================================
const styles = {
  container: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    color: '#1e293b',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '0',
    margin: '0',
  },

  // ---- Hero (Energetic Warm Gradient) ----
  hero: {
    position: 'relative',
    background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 35%, #451a03 65%, #B45309 100%)',
    padding: '80px 40px 70px',
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr',
    gap: 60,
    alignItems: 'center',
    maxWidth: 1200,
    margin: '32px auto 0',
    borderRadius: 28,
    overflow: 'hidden',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.12) 0%, transparent 70%)',
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
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.06)',
    padding: '6px 16px 6px 12px',
    borderRadius: 40,
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#FCD34D',
    marginBottom: 20,
  },
  heroBadgeIcon: { fontSize: '0.7rem', color: '#FCD34D' },
  heroTitle: {
    fontSize: '3.4rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 1.1,
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #FCD34D, #F59E0B, #F97316)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroTagline: {
    fontSize: '1.3rem',
    color: '#FDE68A',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#D1D5DB',
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
    borderTop: '1px solid rgba(255,255,255,0.06)',
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
    color: '#9CA3AF',
  },

  // ---- Hero Visual (Pipeline Card) ----
  heroVisual: {
    position: 'relative',
    zIndex: 2,
  },
  pipelineCard: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: '28px 24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  pipelineCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  pipelineCardTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#E2E8F0',
  },
  pipelineCardValue: {
    fontSize: '1.2rem',
    fontWeight: 800,
    color: '#FCD34D',
  },
  pipelineStages: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  pipelineStage: {
    display: 'grid',
    gridTemplateColumns: '70px 30px 1fr',
    alignItems: 'center',
    gap: 10,
  },
  stageLabel: {
    fontSize: '0.8rem',
    fontWeight: 500,
    color: '#CBD5E1',
  },
  stageCount: {
    fontSize: '0.8rem',
    fontWeight: 700,
    color: '#F1F5F9',
    textAlign: 'center',
  },
  stageBar: {
    height: 6,
    borderRadius: 4,
    background: '#4B5563',
    transition: 'width 0.6s ease',
  },
  pipelineFooter: {
    marginTop: 16,
    paddingTop: 12,
    borderTop: '1px solid rgba(255,255,255,0.06)',
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    color: '#94A3B8',
  },
  pipelineFooterValue: {
    fontWeight: 700,
    color: '#34D399',
  },

  // ---- Section ----
  section: {
    maxWidth: 1200,
    margin: '64px auto',
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
    color: '#4F46E5',
    background: '#EEF2FF',
    padding: '4px 16px',
    borderRadius: 20,
    marginBottom: 12,
  },

  // ---- Products Grid (12 products) ----
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
  },
  productCard: {
    background: 'white',
    borderRadius: 16,
    padding: '24px 18px',
    border: '1px solid #e2e8f0',
    transition: '0.3s',
    textAlign: 'center',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  productIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    margin: '0 auto 12px',
  },
  productName: {
    fontSize: '0.85rem',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 4,
  },
  productDesc: {
    fontSize: '0.75rem',
    color: '#64748b',
    lineHeight: 1.5,
  },

  // ---- Workflow Section ----
  workflowSection: {
    position: 'relative',
    padding: '64px 0',
    margin: '0 0 64px',
    backgroundColor: '#0f172a',
    borderRadius: 0,
    overflow: 'hidden',
  },
  workflowBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 100%, rgba(245,158,11,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  workflowContent: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 24px',
    position: 'relative',
    zIndex: 2,
  },
  workflowHeader: {
    textAlign: 'center',
    marginBottom: 48,
  },
  workflowHeaderTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#ffffff',
    letterSpacing: '-0.02em',
    marginBottom: 8,
  },
  workflowHeaderSubtext: {
    color: '#94A3B8',
    fontSize: '1.05rem',
  },
  workflowSteps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 0,
    position: 'relative',
  },
  workflowStep: {
    textAlign: 'center',
    padding: '20px 12px',
    position: 'relative',
  },
  workflowStepNum: {
    width: 28,
    height: 28,
    borderRadius: '50%',
    background: 'rgba(245,158,11,0.2)',
    color: '#FCD34D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    margin: '0 auto 12px',
    border: '1px solid rgba(245,158,11,0.2)',
  },
  workflowStepIcon: {
    fontSize: '1.8rem',
    color: '#FCD34D',
    marginBottom: 10,
  },
  workflowStepTitle: {
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#F1F5F9',
    marginBottom: 2,
  },
  workflowStepParagraph: {
    fontSize: '0.8rem',
    color: '#94A3B8',
  },
  workflowArrow: {
    position: 'absolute',
    right: '-12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#334155',
    fontSize: '1.2rem',
  },

  // ---- Integrations ----
  integrationsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    maxWidth: 800,
    margin: '0 auto',
  },
  integrationCard: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    padding: '12px 24px',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#1e293b',
    transition: '0.2s',
  },
  integrationIcon: {
    color: '#4F46E5',
    fontSize: '0.8rem',
  },

  // ---- Pricing ----
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32,
  },
  pricingCard: {
    background: 'white',
    borderRadius: 20,
    border: '1px solid #e2e8f0',
    padding: '32px 24px',
    textAlign: 'center',
    transition: '0.25s',
    position: 'relative',
  },
  popularCard: {
    borderColor: '#F59E0B',
    background: '#FFFBEB',
    boxShadow: '0 8px 32px rgba(245,158,11,0.08)',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#F59E0B',
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: 700,
    padding: '4px 20px',
    borderRadius: 40,
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  planName: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 8,
  },
  planPrice: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: 16,
  },
  planPeriod: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#64748b',
  },
  planFeatures: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    marginBottom: 24,
    fontSize: '0.9rem',
  },
  planCheck: {
    color: '#4F46E5',
    marginRight: 8,
  },

  // ---- CTA ----
  ctaSection: {
    maxWidth: 1200,
    margin: '64px auto',
    padding: '64px 40px',
    background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 40%, #451a03 70%, #B45309 100%)',
    borderRadius: 24,
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: 600,
    margin: '0 auto',
    color: 'white',
  },
  ctaContentTitle: {
    fontSize: '2.2rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    marginBottom: 12,
  },
  ctaContentSubtext: {
    color: '#D1D5DB',
    fontSize: '1.05rem',
    marginBottom: 24,
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
    background: '#F59E0B',
    color: '#0f172a',
    boxShadow: '0 4px 20px rgba(245,158,11,0.35)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#4F46E5',
    border: '2px solid #4F46E5',
  },
  btnOutlineLight: {
    background: 'transparent',
    color: 'white',
    border: '2px solid rgba(255,255,255,0.2)',
  },
  btnWhite: {
    background: 'white',
    color: '#1e293b',
    border: '1px solid #e2e8f0',
  },

  // ---- Payment Modal ----
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(15, 23, 42, 0.5)',
    backdropFilter: 'blur(4px)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalCard: {
    background: 'white',
    borderRadius: 24,
    maxWidth: 480,
    width: '100%',
    padding: '40px 36px',
    boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
  },
  modalTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    marginBottom: 8,
  },
  modalLock: {
    color: '#4F46E5',
    marginRight: 10,
  },
  modalSub: {
    color: '#64748b',
    marginBottom: 24,
  },
  modalPrice: {
    fontSize: '2.2rem',
    fontWeight: 800,
    color: '#0f172a',
    marginBottom: 20,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 16,
  },
  modalPriceSuffix: {
    fontSize: '1rem',
    fontWeight: 400,
    color: '#64748b',
  },
  formGroup: {
    marginBottom: 16,
  },
  formRow: {
    display: 'flex',
    gap: 12,
  },
  formLabel: {
    display: 'block',
    fontWeight: 600,
    fontSize: '0.85rem',
    marginBottom: 4,
    color: '#334155',
  },
  formInput: {
    width: '100%',
    padding: '12px 14px',
    border: '1px solid #e2e8f0',
    borderRadius: 12,
    fontSize: '0.95rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: '0.2s',
    boxSizing: 'border-box',
  },
  modalActions: {
    display: 'flex',
    gap: 12,
    marginTop: 24,
  },
  modalBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 40,
    fontWeight: 700,
    border: 'none',
    cursor: 'pointer',
    transition: '0.2s',
    fontFamily: 'inherit',
    fontSize: '0.95rem',
  },
  modalBtnPrimary: {
    background: '#4F46E5',
    color: 'white',
  },
  modalBtnSecondary: {
    background: '#f1f5f9',
    color: '#1e293b',
  },
};

// ============================================================
// 4. EXPORT
// ============================================================
export default SalesCRMLandingPage;