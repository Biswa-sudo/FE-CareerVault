// ============================================================
// HRMSLandingPage.js
// A self-contained landing page for the HRMS product.
// No sidebar – just the product content and a payment flow.
// ============================================================

import React, { useState } from 'react';

// ============================================================
// 1. DATA – HRMS Product Details
// ============================================================
const HRMS_DATA = {
  id: 'hrms',
  name: 'HRMS',
  category: 'People & HR',
  tagline: 'Complete employee and HR management suite',
  description:
    'Manage your entire workforce from one place. HRMS centralises employee profiles, attendance, leave, payroll, recruitment, and performance – all with powerful automation and real-time analytics.',
  benefits: [
    {
      icon: 'fa-database',
      title: 'Centralised Workforce Data',
      desc: 'All employee information – profiles, documents, contact details, and history – in one secure, searchable platform.',
    },
    {
      icon: 'fa-calculator',
      title: 'Automated Payroll & Compliance',
      desc: 'Calculate salaries, manage deductions, and generate payslips automatically while staying compliant with tax laws.',
    },
    {
      icon: 'fa-user-plus',
      title: 'Streamlined Recruitment',
      desc: 'Post jobs, manage applicants, and move candidates through your hiring pipeline with ease.',
    },
    {
      icon: 'fa-chart-line',
      title: 'Performance & Goal Tracking',
      desc: 'Set KPIs, conduct performance reviews, and track employee progress toward company goals.',
    },
    {
      icon: 'fa-user-cog',
      title: 'Employee Self-Service',
      desc: 'Empower employees to update profiles, request leave, and access payslips – reducing HR workload.',
    },
    {
      icon: 'fa-chart-pie',
      title: 'Insightful HR Analytics',
      desc: 'Get real-time dashboards on headcount, turnover, attendance, and more to make data-driven decisions.',
    },
  ],
  features: [
    'Employee profiles & org charts',
    'Department and team management',
    'Document storage and version control',
    'Attendance tracking with shift scheduling',
    'Leave requests, approvals, and balance tracking',
    'Payroll processing with tax deductions',
    'Recruitment pipeline and applicant tracking',
    'Performance reviews and KPI setting',
    'Employee onboarding checklists and task management',
    'Self-service portal for employees',
  ],
  integrations: ['Slack', 'Google Workspace', 'Zapier', 'QuickBooks', 'Xero', 'Microsoft Teams'],
  pricing: [
    {
      name: 'Starter',
      price: 99,
      currency: '₹',
      period: '/month',
      features: ['Up to 50 employees', 'Core HR & attendance', 'Leave management', 'Email support'],
      popular: false,
    },
    {
      name: 'Professional',
      price: 299,
      currency: '₹',
      period: '/month',
      features: [
        'Up to 200 employees',
        'All HR modules',
        'Payroll & compliance',
        'Performance management',
        'Priority support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      currency: '',
      period: '',
      features: [
        'Unlimited employees',
        'All Professional features',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support',
      ],
      popular: false,
    },
  ],
};

// ============================================================
// 2. LANDING PAGE COMPONENT
// ============================================================
const HRMSLandingPage = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    setPaymentModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert(`✅ Payment successful for ${HRMS_DATA.name} (${selectedPlan?.name || 'Professional'})`);
    setPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div style={styles.container}>
      {/* ----- HERO SECTION ----- */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.categoryBadge}>{HRMS_DATA.category}</span>
          <h1 style={styles.heroTitle}>{HRMS_DATA.name}</h1>
          <p style={styles.heroTagline}>{HRMS_DATA.tagline}</p>
          <p style={styles.heroDescription}>{HRMS_DATA.description}</p>
          <div style={styles.heroActions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={() => handlePurchase(HRMS_DATA.pricing[1])} // Professional plan
            >
              <i className="fas fa-rocket"></i> Start Free Trial
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnOutline }}
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-chevron-down"></i> Explore Features
            </button>
          </div>
          <div style={styles.heroStats}>
            <div>
              <strong>₹{HRMS_DATA.pricing[1].price}</strong>
              <span>/ month (Professional)</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>User rating</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>Satisfaction</span>
            </div>
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.mockCard}>
            <div style={styles.mockRow}>
              <i className="fas fa-user"></i>
              <span style={styles.mockLabel}>Total Employees</span>
              <span style={styles.mockValue}>247</span>
            </div>
            <div style={styles.mockRow}>
              <i className="fas fa-clock"></i>
              <span style={styles.mockLabel}>Today's Attendance</span>
              <span style={styles.mockValue}>89%</span>
            </div>
            <div style={styles.mockRow}>
              <i className="fas fa-calendar-check"></i>
              <span style={styles.mockLabel}>Pending Leave Requests</span>
              <span style={styles.mockValue}>12</span>
            </div>
            <div style={styles.mockRow}>
              <i className="fas fa-wallet"></i>
              <span style={styles.mockLabel}>Payroll this month</span>
              <span style={styles.mockValue}>₹4.2L</span>
            </div>
          </div>
        </div>
      </section>

      {/* ----- BENEFITS SECTION ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Why HRMS</span>
          <h2>Streamline your people operations</h2>
          <p>Everything you need to manage your workforce efficiently in one place.</p>
        </div>
        <div style={styles.benefitsGrid}>
          {HRMS_DATA.benefits.map((benefit, idx) => (
            <div key={idx} style={styles.benefitCard}>
              <div style={styles.benefitIcon}>
                <i className={`fas ${benefit.icon}`}></i>
              </div>
              <h4>{benefit.title}</h4>
              <p>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----- FEATURES SECTION ----- */}
      <section id="features" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Features</span>
          <h2>All the tools you need</h2>
          <p>HRMS comes packed with everything required to manage your HR operations.</p>
        </div>
        <div style={styles.featuresGrid}>
          {HRMS_DATA.features.map((feature, idx) => (
            <div key={idx} style={styles.featureItem}>
              <i className="fas fa-check-circle" style={styles.featureCheck}></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ----- PRICING SECTION ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Pricing</span>
          <h2>Choose the right plan for your business</h2>
          <p>Start with a free trial – no credit card required.</p>
        </div>
        <div style={styles.pricingGrid}>
          {HRMS_DATA.pricing.map((plan, idx) => (
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
          <h2>Ready to transform your HR?</h2>
          <p>Join thousands of companies that trust BentureAI HRMS to manage their workforce.</p>
          <button
            style={{ ...styles.btn, ...styles.btnWhite }}
            onClick={() => handlePurchase(HRMS_DATA.pricing[1])}
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
              You are about to subscribe to <strong>{HRMS_DATA.name} – {selectedPlan.name}</strong>
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
// 3. STYLES (inline for portability)
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

  // ---- Hero ----
  hero: {
    background: 'linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)',
    padding: '80px 40px 60px',
    display: 'grid',
    gridTemplateColumns: '1.8fr 1fr',
    gap: 60,
    alignItems: 'center',
    maxWidth: 1200,
    margin: '0 auto',
    borderRadius: 24,
    border: '1px solid #e2e8f0',
    marginTop: 32,
  },
  heroContent: {},
  categoryBadge: {
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#4F46E5',
    background: '#EEF2FF',
    display: 'inline-block',
    padding: '4px 16px',
    borderRadius: 20,
    marginBottom: 12,
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#0f172a',
    marginBottom: 8,
  },
  heroTagline: {
    fontSize: '1.3rem',
    color: '#334155',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#64748b',
    lineHeight: 1.7,
    maxWidth: 500,
    marginBottom: 24,
  },
  heroActions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  heroStats: {
    display: 'flex',
    gap: 32,
    flexWrap: 'wrap',
  },
  heroVisual: {
    background: 'white',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
    border: '1px solid #e2e8f0',
  },
  mockCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  mockRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 12px',
    background: '#f8fafc',
    borderRadius: 10,
    borderLeft: '4px solid #4F46E5',
  },
  mockLabel: {
    fontWeight: 500,
    fontSize: '0.9rem',
    flex: 1,
  },
  mockValue: {
    fontSize: '0.85rem',
    color: '#64748b',
    fontWeight: 600,
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
    background: '#eef2ff',
    padding: '4px 16px',
    borderRadius: 20,
    marginBottom: 12,
  },
  // ---- Benefits ----
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  benefitCard: {
    background: 'white',
    borderRadius: 16,
    padding: '28px 24px',
    border: '1px solid #e2e8f0',
    transition: '0.25s',
    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
  },
  benefitIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    background: '#eef2ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.3rem',
    color: '#4F46E5',
    marginBottom: 16,
  },

  // ---- Features ----
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px 24px',
    background: 'white',
    borderRadius: 20,
    padding: '32px 36px',
    border: '1px solid #e2e8f0',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    fontSize: '0.95rem',
    color: '#1e293b',
    padding: '6px 0',
  },
  featureCheck: {
    color: '#4F46E5',
    fontSize: '1.1rem',
    width: 20,
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
    borderColor: '#4F46E5',
    background: '#f8faff',
    boxShadow: '0 8px 24px rgba(79,70,229,0.06)',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#4F46E5',
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
    background: '#0f172a',
    borderRadius: 24,
    textAlign: 'center',
  },
  ctaContent: {
    maxWidth: 600,
    margin: '0 auto',
    color: 'white',
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
    background: '#4F46E5',
    color: 'white',
    boxShadow: '0 4px 14px rgba(79,70,229,0.3)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#4F46E5',
    border: '2px solid #4F46E5',
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
export default HRMSLandingPage;