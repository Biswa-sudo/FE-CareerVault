// ============================================================
// InventoryLandingPage.js
// Landing page for BentureAI's Inventory & Operations suite (12 products).
// Industrial, warehouse-inspired design with green/teal tones.
// ============================================================

import React, { useState } from 'react';

// ============================================================
// 1. DATA – Inventory & Operations Products
// ============================================================
const INVENTORY_DATA = {
  id: 'inventory',
  name: 'Inventory & Operations',
  tagline: 'Full control over your supply chain',
  description:
    'BentureAI Inventory & Operations is a complete warehouse management ecosystem with 12 interconnected products. From stock tracking to purchase orders, warehouse management to supplier relationships – everything you need to optimise your supply chain and reduce operational costs.',
  stats: [
    { label: 'Products', value: '12' },
    { label: 'Items Tracked', value: '8.5M+' },
    { label: 'Businesses Using', value: '7,500+' },
    { label: 'Customer Rating', value: '4.7★' },
  ],
  products: [
    { name: 'Inventory', desc: 'Full inventory management with valuation', icon: 'fa-warehouse', color: '#059669' },
    { name: 'Stock', desc: 'Real-time stock levels and movements', icon: 'fa-cubes', color: '#0D9488' },
    { name: 'Warehouses', desc: 'Multi-location warehouse setup', icon: 'fa-warehouse', color: '#2563EB' },
    { name: 'Stock Transfers', desc: 'Transfer inventory between locations', icon: 'fa-arrows-alt-h', color: '#EA580C' },
    { name: 'Purchasing', desc: 'Procurement and order management', icon: 'fa-shopping-cart', color: '#7C3AED' },
    { name: 'Suppliers', desc: 'Vendor database and performance', icon: 'fa-truck', color: '#0891B2' },
    { name: 'Purchase Orders', desc: 'Create and manage POs', icon: 'fa-file-import', color: '#DC2626' },
    { name: 'Goods Received', desc: 'Incoming inventory with quality checks', icon: 'fa-box-open', color: '#059669' },
    { name: 'Stock Adjustments', desc: 'Corrections and write-offs', icon: 'fa-pen-fancy', color: '#6D28D9' },
    { name: 'Low Stock', desc: 'Alerts and reordering suggestions', icon: 'fa-triangle-exclamation', color: '#EA580C' },
    { name: 'Inventory Reports', desc: 'Turnover analysis and forecasting', icon: 'fa-chart-simple', color: '#0D9488' },
    { name: 'Batch Tracking', desc: 'Track batches and serial numbers', icon: 'fa-qrcode', color: '#1E293B' },
  ],
  integrations: ['ERP Systems', 'Barcode Scanners', 'Shopify', 'QuickBooks', 'Xero', 'Zapier', 'REST APIs', 'EDI'],
  pricing: [
    {
      name: 'Operations Starter',
      price: 179,
      currency: '₹',
      period: '/month',
      features: ['Up to 5 users', '1 warehouse', 'Basic stock tracking', 'Purchase orders', 'Email support'],
      popular: false,
    },
    {
      name: 'Operations Pro',
      price: 449,
      currency: '₹',
      period: '/month',
      features: [
        'All 12 products included',
        'Unlimited warehouses',
        'Batch & serial tracking',
        'Advanced forecasting',
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
        'On-premise option',
        'SLA guarantees',
      ],
      popular: false,
    },
  ],
};

// ============================================================
// 2. LANDING PAGE COMPONENT
// ============================================================
const InventoryLandingPage = () => {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePurchase = (plan) => {
    setSelectedPlan(plan);
    setPaymentModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert(`✅ Payment successful for ${INVENTORY_DATA.name} (${selectedPlan?.name || 'Operations Pro'})`);
    setPaymentModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <div style={styles.container}>
      {/* ----- HERO SECTION (Industrial Green) ----- */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <i className="fas fa-truck-fast" style={styles.heroBadgeIcon}></i> Trusted by 7,500+ businesses
          </div>
          <h1 style={styles.heroTitle}>
            <span style={styles.heroHighlight}>Inventory</span> & Operations
          </h1>
          <p style={styles.heroTagline}>{INVENTORY_DATA.tagline}</p>
          <p style={styles.heroDescription}>{INVENTORY_DATA.description}</p>
          <div style={styles.heroActions}>
            <button
              style={{ ...styles.btn, ...styles.btnPrimary }}
              onClick={() => handlePurchase(INVENTORY_DATA.pricing[1])}
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
            {INVENTORY_DATA.stats.map((stat, idx) => (
              <div key={idx} style={styles.heroStat}>
                <strong style={styles.heroStatValue}>{stat.value}</strong>
                <span style={styles.heroStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.heroVisual}>
          <div style={styles.inventoryCard}>
            <div style={styles.inventoryCardHeader}>
              <span style={styles.inventoryCardTitle}>Warehouse Dashboard</span>
              <span style={styles.inventoryCardStatus}>● Live</span>
            </div>
            <div style={styles.inventoryMetrics}>
              <div style={styles.inventoryMetric}>
                <span style={styles.metricLabel}>Total SKUs</span>
                <span style={styles.metricValue}>1,847</span>
              </div>
              <div style={styles.inventoryMetric}>
                <span style={styles.metricLabel}>In Stock</span>
                <span style={styles.metricValue}>12,493</span>
              </div>
              <div style={styles.inventoryMetric}>
                <span style={styles.metricLabel}>Low Stock</span>
                <span style={styles.metricValue}>23</span>
                <span style={styles.metricBadge}>Alert</span>
              </div>
            </div>
            <div style={styles.inventoryDivider}></div>
            <div style={styles.inventoryRows}>
              <div style={styles.inventoryRow}>
                <span style={styles.rowLabel}>Receiving</span>
                <span style={styles.rowValue}>8 orders</span>
                <span style={styles.rowStatus}>In progress</span>
              </div>
              <div style={styles.inventoryRow}>
                <span style={styles.rowLabel}>Picking</span>
                <span style={styles.rowValue}>24 orders</span>
                <span style={styles.rowStatus}>Active</span>
              </div>
              <div style={styles.inventoryRow}>
                <span style={styles.rowLabel}>Shipping</span>
                <span style={styles.rowValue}>16 orders</span>
                <span style={styles.rowStatus}>Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- PRODUCTS SHOWCASE (12 Products Grid) ----- */}
      <section id="products" style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>12 Products, One Ecosystem</span>
          <h2>Optimise your <span style={{ color: '#059669' }}>supply chain</span></h2>
          <p>From stock to warehouse, purchasing to forecasting – every tool you need to run operations smoothly.</p>
        </div>
        <div style={styles.productsGrid}>
          {INVENTORY_DATA.products.map((product, idx) => (
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

      {/* ----- OPERATIONS WORKFLOW SECTION ----- */}
      <section style={styles.workflowSection}>
        <div style={styles.workflowBg}></div>
        <div style={styles.workflowContent}>
          <div style={styles.workflowHeader}>
            <span style={styles.tag}>The Operations Workflow</span>
            <h2 style={styles.workflowHeaderTitle}>
              From <span style={{ color: '#10B981' }}>Requisition</span> to <span style={{ color: '#FCD34D' }}>Delivery</span>
            </h2>
            <p style={styles.workflowHeaderSubtext}>
              See how our products connect to create a seamless supply chain.
            </p>
          </div>
          <div style={styles.workflowSteps}>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>1</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-file-import"></i></div>
              <h4 style={styles.workflowStepTitle}>Purchase Order</h4>
              <p style={styles.workflowStepParagraph}>Create & approve</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>2</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-box-open"></i></div>
              <h4 style={styles.workflowStepTitle}>Goods Received</h4>
              <p style={styles.workflowStepParagraph}>Quality check</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>3</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-cubes"></i></div>
              <h4 style={styles.workflowStepTitle}>Stock</h4>
              <p style={styles.workflowStepParagraph}>Update inventory</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>4</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-arrows-alt-h"></i></div>
              <h4 style={styles.workflowStepTitle}>Transfer</h4>
              <p style={styles.workflowStepParagraph}>Location management</p>
              <div style={styles.workflowArrow}><i className="fas fa-arrow-down"></i></div>
            </div>
            <div style={styles.workflowStep}>
              <div style={styles.workflowStepNum}>5</div>
              <div style={styles.workflowStepIcon}><i className="fas fa-truck"></i></div>
              <h4 style={styles.workflowStepTitle}>Delivery</h4>
              <p style={styles.workflowStepParagraph}>Ship & track</p>
            </div>
          </div>
        </div>
      </section>

      {/* ----- INTEGRATIONS ----- */}
      <section style={styles.section}>
        <div style={styles.sectionHeader}>
          <span style={styles.tag}>Integrations</span>
          <h2>Connect with your <span style={{ color: '#059669' }}>favorite tools</span></h2>
          <p>Inventory & Operations works seamlessly with the tools you already use.</p>
        </div>
        <div style={styles.integrationsGrid}>
          {INVENTORY_DATA.integrations.map((integration, idx) => (
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
          <h2>Choose your <span style={{ color: '#059669' }}>operations suite</span></h2>
          <p>Start with a free trial – no credit card required.</p>
        </div>
        <div style={styles.pricingGrid}>
          {INVENTORY_DATA.pricing.map((plan, idx) => (
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
            Ready to <span style={{ color: '#6EE7B7' }}>optimise</span> your operations?
          </h2>
          <p style={styles.ctaContentSubtext}>
            Join 7,500+ businesses that use BentureAI Inventory & Operations to run their supply chain.
          </p>
          <button
            style={{ ...styles.btn, ...styles.btnWhite }}
            onClick={() => handlePurchase(INVENTORY_DATA.pricing[1])}
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
              You are about to subscribe to <strong>{INVENTORY_DATA.name} – {selectedPlan.name}</strong>
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
// 3. STYLES (Industrial, Warehouse-Inspired Design)
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

  // ---- Hero (Industrial Green Gradient) ----
  hero: {
    position: 'relative',
    background: 'linear-gradient(145deg, #064e3b 0%, #065f46 25%, #0f172a 60%, #1e1b4b 100%)',
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
    background: 'radial-gradient(ellipse at 70% 30%, rgba(16,185,129,0.08) 0%, transparent 70%)',
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
    color: '#6EE7B7',
    marginBottom: 20,
  },
  heroBadgeIcon: { fontSize: '0.7rem', color: '#6EE7B7' },
  heroTitle: {
    fontSize: '3.4rem',
    fontWeight: 800,
    letterSpacing: '-0.02em',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 1.1,
  },
  heroHighlight: {
    background: 'linear-gradient(135deg, #34D399, #10B981, #059669)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroTagline: {
    fontSize: '1.3rem',
    color: '#6EE7B7',
    marginBottom: 12,
  },
  heroDescription: {
    fontSize: '1rem',
    color: '#9CA3AF',
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

  // ---- Hero Visual (Inventory Card) ----
  heroVisual: {
    position: 'relative',
    zIndex: 2,
  },
  inventoryCard: {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
    padding: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  inventoryCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  inventoryCardTitle: {
    fontWeight: 600,
    fontSize: '0.95rem',
    color: '#E2E8F0',
  },
  inventoryCardStatus: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#34D399',
  },
  inventoryMetrics: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginBottom: 16,
  },
  inventoryMetric: {
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
  metricBadge: {
    display: 'inline-block',
    fontSize: '0.6rem',
    fontWeight: 700,
    color: '#FEF3C7',
    background: 'rgba(245,158,11,0.2)',
    padding: '2px 8px',
    borderRadius: 20,
    marginTop: 4,
  },
  inventoryDivider: {
    height: 1,
    background: 'rgba(255,255,255,0.06)',
    margin: '12px 0',
  },
  inventoryRows: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  inventoryRow: {
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
    color: '#34D399',
    background: 'rgba(52,211,153,0.12)',
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
    color: '#059669',
    background: '#ECFDF5',
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
    backgroundColor: '#064e3b',
    borderRadius: 0,
    overflow: 'hidden',
  },
  workflowBg: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 70%)',
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
    background: 'rgba(16,185,129,0.2)',
    color: '#34D399',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    margin: '0 auto 12px',
    border: '1px solid rgba(16,185,129,0.2)',
  },
  workflowStepIcon: {
    fontSize: '1.8rem',
    color: '#34D399',
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
    color: '#065f46',
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
    color: '#059669',
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
    borderColor: '#059669',
    background: '#ECFDF5',
    boxShadow: '0 8px 32px rgba(5,150,105,0.08)',
  },
  popularBadge: {
    position: 'absolute',
    top: -12,
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#059669',
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
    color: '#059669',
    marginRight: 8,
  },

  // ---- CTA ----
  ctaSection: {
    maxWidth: 1200,
    margin: '64px auto',
    padding: '64px 40px',
    background: 'linear-gradient(145deg, #064e3b 0%, #065f46 35%, #0f172a 70%, #1e1b4b 100%)',
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
    color: '#9CA3AF',
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
    background: '#059669',
    color: 'white',
    boxShadow: '0 4px 20px rgba(5,150,105,0.35)',
  },
  btnOutline: {
    background: 'transparent',
    color: '#059669',
    border: '2px solid #059669',
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
    color: '#059669',
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
    background: '#059669',
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
export default InventoryLandingPage;