// ============================================================
// EcommerceLandingPage.js
// Landing page for BentureAI's E-commerce suite (9 products).
// Vibrant, retail-inspired design with pink/rose tones.
// ============================================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ConsultationModal from '../components/ConsultationModal';

// ============================================================
// 1. DATA – E-commerce Products
// ============================================================
const ECOMMERCE_DATA = {
  id: 'ecommerce',
  name: 'E-commerce',
  tagline: 'Build, grow, and scale your online store',
  description:
    'BentureAI E-commerce is a complete online retail ecosystem with 9 interconnected products. From storefront to checkout, inventory to analytics – everything you need to launch and grow a successful online business, without the complexity.',
  stats: [
    { label: 'Products', value: '9' },
    { label: 'Storefronts Built', value: '4,200+' },
    { label: 'Orders Processed', value: '1.8M+' },
    { label: 'Customer Rating', value: '4.8★' },
  ],
  products: [
    { name: 'Online Store', desc: 'Build and manage your storefront', icon: 'fa-store', color: '#EC4899' },
    { name: 'Products', desc: 'Manage product catalogue and variants', icon: 'fa-tag', color: '#F43F5E' },
    { name: 'Orders', desc: 'Process and track customer orders', icon: 'fa-box-open', color: '#8B5CF6' },
    { name: 'Customers', desc: 'Manage customer accounts and history', icon: 'fa-user', color: '#06B6D4' },
    { name: 'Coupons', desc: 'Create discounts and promotions', icon: 'fa-gift', color: '#F59E0B' },
    { name: 'Shipping', desc: 'Manage rates, carriers, and tracking', icon: 'fa-shipping-fast', color: '#10B981' },
    { name: 'Returns', desc: 'Handle returns and refunds', icon: 'fa-undo', color: '#EF4444' },
    { name: 'Reviews', desc: 'Collect and display product reviews', icon: 'fa-star', color: '#F97316' },
    { name: 'Store Analytics', desc: 'Sales, traffic, and conversion insights', icon: 'fa-chart-simple', color: '#6366F1' },
  ],
  integrations: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Razorpay', 'Google Analytics', 'Facebook Ads', 'Zapier', 'Mailchimp'],
  pricing: [
    {
      name: 'Store Starter',
      price: 99,
      currency: '₹',
      period: '/month',
      features: ['Up to 100 products', 'Basic storefront', 'Order management', 'Email support'],
      popular: false,
    },
    {
      name: 'Store Pro',
      price: 299,
      currency: '₹',
      period: '/month',
      features: [
        'All 9 products included',
        'Unlimited products',
        'Advanced analytics',
        'Coupons & promotions',
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
const EcommerceLandingPage = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const navigate = useNavigate();
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    setPaymentModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert(`✅ Payment successful for ${ECOMMERCE_DATA.name} (${selectedPlan?.name || 'Store Pro'})`);
    setPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div style={styles.container}>
      {/* ----- HERO SECTION (Playful Retail Pink) ----- */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <i className="fas fa-cart-plus" style={styles.heroBadgeIcon}></i> Trusted by 4,200+ store owners
          </div>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroHighlight}>E-</span>commerce
          </h1>
          <p style={styles.heroTagline}>{ECOMMERCE_DATA.tagline}</p>
          <p style={styles.heroDescription}>{ECOMMERCE_DATA.description}</p>
          <div style={styles.heroActions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={() => setConsultModalOpen(true)}
            >
              <i className="fas fa-rocket"></i> Enquire Now
            </button>
            <button
              style={{ ...styles.btn, ...styles.btnOutlineLight }}
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="fas fa-chevron-down"></i> Explore Products
            </button>
          </div>
          <div style={styles.heroStats}>
            {ECOMMERCE_DATA.stats.map((stat, idx) => (
              <div key={idx} style={styles.heroStat}>
                <strong style={styles.heroStatValue}>{stat.value}</strong>
                <span style={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.storeCard}>
            <div style={styles.storeCardHeader}>
              <span style={styles.storeCardTitle}>Store Dashboard</span>
              <span style={styles.storeCardStatus}>● Live</span>
            </div>
            <div style={styles.storeMetrics}>
              <div style={styles.storeMetric}>
                <span style={styles.metricLabel}>Today's Sales</span>
                <span style={styles.metricValue}>₹28,450</span>
              </div>
              <div style={styles.storeMetric}>
                <span style={styles.metricLabel}>Orders</span>
                <span style={styles.metricValue}>47</span>
              </div>
              <div style={styles.storeMetric}>
                <span style={styles.metricLabel}>Conversion</span>
                <span style={styles.metricValue}>3.8%</span>
              </div>
            </div>
            <div style={styles.storeDivider}></div>
            <div style={styles.storeRows}>
              <div style={styles.storeRow}>
                <span style={styles.rowLabel}>Pending Orders</span>
                <span style={styles.rowValue}>12</span>
                <span style={styles.rowStatus}>Action needed</span>
              </div>
              <div style={styles.storeRow}>
                <span style={styles.rowLabel}>Active Promotions</span>
                <span style={styles.rowValue}>4</span>
                <span style={styles.rowStatus}>Running</span>
              </div>
              <div style={styles.storeRow}>
                <span style={styles.rowLabel}>New Customers</span>
                <span style={styles.rowValue}>23</span>
                <span style={styles.rowStatus}>This week</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={consultModalOpen}
        onClose={() => setConsultModalOpen(false)}
        initialSubject={ECOMMERCE_DATA.name}
      />

      {/* ----- PRODUCTS SHOWCASE (9 Products Grid) ----- */}
      <section id="products" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>9 Products, One Ecosystem</span>
          <h2>Power your <span style={{ color: '#EC4899' }}>online store</span></h2>
          <p>From storefront to checkout, inventory to analytics – everything you need to sell online.</p>
        </div>
        <div style={styles.productsGrid}>
          {ECOMMERCE_DATA.products.map((product, idx) => (
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

      {/* ----- CUSTOMER JOURNEY WORKFLOW SECTION ----- */}
      <section style={styles.workflowSection}>
        <div style={styles.workflowBg}></div>
        <div style={styles.workflowContent}>
          <div style={styles.workflowHeader}>
            <span style={styles.tag}>The Customer Journey</span>
            <h2 style={styles.workflowHeaderTitle}>
              From <span style={{ color: '#EC4899' }}>Visit</span> to <span style={{ color: '#F59E0B' }}>Repeat Purchase</span>
            </h2>
            <p style={styles.workflowHeaderSubtext}>
              See how our products connect to create a seamless shopping experience.
            </p>
          </div>
          <div style={styles.workflowSteps}>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>1</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-store"></i></div>
              <h4 style={styles.workflowStepTitle}>Storefront</h4>
              <p style={styles.workflowStepParagraph}>Showcase products</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>2</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-shopping-cart"></i></div>
              <h4 style={styles.workflowStepTitle}>Add to Cart</h4>
              <p style={styles.workflowStepParagraph}>Product selection</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>3</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-credit-card"></i></div>
              <h4 style={styles.workflowStepTitle}>Checkout</h4>
              <p style={styles.workflowStepParagraph}>Payment & shipping</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>4</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-box-open"></i></div>
              <h4 style={styles.workflowStepTitle}>Fulfillment</h4>
              <p style={styles.workflowStepParagraph}>Order & ship</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>5</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-heart"></i></div>
              <h4 style={styles.workflowStepTitle}>Retention</h4>
              <p style={styles.workflowStepParagraph}>Reviews & repeat</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----- INTEGRATIONS ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Integrations</span>
          <h2>Connect with your <span style={{ color: '#EC4899' }}>favorite tools</span></h2>
          <p>E-commerce works seamlessly with the tools you already use.</p>
        </div>
        <div style={styles.integrationsGrid}>
          {ECOMMERCE_DATA.integrations.map((integration, idx) => (
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
          <h2>Choose your <span style={{ color: '#EC4899' }}>store suite</span></h2>
          <p>Start with a free trial – no credit card required.</p>
        </div>
        <div style={styles.pricingGrid}>
          {ECOMMERCE_DATA.pricing.map((plan, idx) => (
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
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Enquire Now'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ----- FINAL CTA ----- */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaContentTitle}>
            Ready to <span style={{ color: '#F9A8D4' }}>launch</span> your online store?
          </h2>
          <p style={styles.ctaContentSubtext}>
            Join 4,200+ store owners that use BentureAI E-commerce to grow their business.
          </p>
          <button
            style={{ ...styles.btn, ...styles.btnWhite }}
            onClick={() => setConsultModalOpen(true)}
          >
            <i className="fas fa-rocket"></i> Enquire Now
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
              You are about to subscribe to <strong>{ECOMMERCE_DATA.name} – {selectedPlan.name}</strong>
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
// 3. STYLES (Playful Retail Pink/Rose Design)
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

  // ---- Hero (Vibrant Pink/Retail) ----
  hero: {
    position: 'relative',
    background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 30%, #4C0519 65%, #831843 100%)',
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
    background: 'radial-gradient(ellipse at 30% 20%, rgba(236,72,153,0.12) 0%, transparent 70%)',
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
    color: '#F9A8D4',
    marginBottom: 20,
  },
  heroBadgeIcon: { fontSize: '0.7rem', color: '#F9A8D4' },
  heroTitle: {
    fontSize: '3.4rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 1.1,
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #EC4899, #F43F5E, #FB7185)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroTagline: {
    fontSize: '1.3rem',
    color: '#F9A8D4',
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

  // ---- Hero Visual (Store Dashboard Card) ----
  heroVisual: {
    position: 'relative',
    zIndex: 2,
  },
  storeCard: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  storeCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  storeCardTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#E2E8F0',
  },
  storeCardStatus: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#F9A8D4',
  },
  storeMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginBottom: 16,
  },
  storeMetric: {
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 12,
    padding: '12px',
    textAlign: 'center',
  },
  metricLabel: {
    display: 'block',
    fontSize: '0.7rem',
    color: '#94A3B8',
    marginBottom: 2,
  },
  metricValue: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#F1F5F9',
  },
  storeDivider: {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '12px 0',
  },
  storeRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  storeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 12px',
    background: 'rgba(255,255,255,0.02)',
    borderRadius: 8,
  },
  rowLabel: {
    fontSize: '0.8rem',
    color: '#94A3B8',
  },
  rowValue: {
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#E2E8F0',
  },
  rowStatus: {
    fontSize: '0.7rem',
    fontWeight: 500,
    color: '#F9A8D4',
    background: 'rgba(236,72,153,0.12)',
    padding: '2px 10px',
    borderRadius: 20,
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
    color: '#EC4899',
    background: '#FCE7F3',
    padding: '4px 16px',
    borderRadius: 20,
    marginBottom: 12,
  },

  // ---- Products Grid (9 products - 3x3) ----
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 24,
  },
  productCard: {
    background: 'white',
    borderRadius: 16,
    padding: '24px 20px',
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
    fontSize: '0.9rem',
    fontWeight: 700,
    color: '#0f172a',
    marginBottom: 4,
  },
  productDesc: {
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: 1.5,
  },

  // ---- Workflow Section ----
  workflowSection: {
    position: 'relative',
    padding: '64px 0',
    margin: '0 0 64px',
    backgroundColor: '#4C0519',
    borderRadius: 0,
    overflow: 'hidden',
  },
  workflowBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 100%, rgba(236,72,153,0.06) 0%, transparent 70%)',
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
    color: '#D1D5DB',
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
    background: 'rgba(236,72,153,0.2)',
    color: '#F9A8D4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    margin: '0 auto 12px',
    border: '1px solid rgba(236,72,153,0.2)',
  },
  workflowStepIcon: {
    fontSize: '1.8rem',
    color: '#F9A8D4',
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
    color: '#831843',
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
    color: '#EC4899',
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
    borderColor: '#EC4899',
    background: '#FDF2F8',
    boxShadow: '0 8px 32px rgba(236,72,153,0.08)',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#EC4899',
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
    color: '#EC4899',
    marginRight: 8,
  },

  // ---- CTA ----
  ctaSection: {
    maxWidth: 1200,
    margin: '64px auto',
    padding: '64px 40px',
    background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 30%, #4C0519 65%, #831843 100%)',
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
    background: '#EC4899',
    color: 'white',
    boxShadow: '0 4px 20px rgba(236,72,153,0.35)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#EC4899',
    border: '2px solid #EC4899',
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
    color: '#EC4899',
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
    background: '#EC4899',
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
export default EcommerceLandingPage;