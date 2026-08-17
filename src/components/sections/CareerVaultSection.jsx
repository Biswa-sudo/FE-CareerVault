"use client";

import React from "react";

const CareerVaultSection = () => {
  const handleSubscribe = (plan) => {
    // Determine amount and plan key based on selection
    const isPro = String(plan || '').toLowerCase().includes('pro') || String(plan).toLowerCase().includes('+ ai');
    const planKey = isPro ? 'career-vault-pro' : 'career-vault';
    const amount = isPro ? '19900' : '9900';

    const params = new URLSearchParams({
      plan: planKey,
      amount: amount,
      title: isPro ? 'Career Vault + AI (Pro)' : 'Career Vault',
      description: 'Career Vault access',
    });

    window.location.href = `/payment?${params.toString()}`;
  };

  const basicFeatures = [
    "Store all essential career documents",
    "Create and manage your CV",
    "Save up to 5 CVs",
    "Edit or download documents anytime",
    "Create your professional Career Vault profile",
    "Share your profile with recruiters",
    "Set one CV as your Primary CV",
    "Recruiters can download your Primary CV",
  ];

  const aiFeatures = [
    "Everything in Career Vault",
    "AI-powered CV analysis",
    "Skill-based interview preparation",
    "Personalized interview questions",
    "Practice technical & HR questions",
    "Track interview practice progress",
    "Identify skill & preparation gaps",
    "AI-powered preparation guidance",
  ];

  return (
    <section className="career-vault-section py-5">
      <div className="container">

        {/* Header */}
        <div className="career-vault-header text-center mx-auto">
          <span className="career-vault-badge">
            💼 BENTUREAI CAREER VAULT
          </span>

          <h2 className="career-vault-title">
            Everything You Need
            <br />
            <span>For Your Next Career Move.</span>
          </h2>

          <p className="career-vault-description">
            Store your important career documents, build professional CVs,
            create a shareable profile, and prepare for your next interview —
            all in one place.
          </p>
        </div>

        {/* Feature Highlight */}
        {/* <div className="career-highlight">
          <div className="row align-items-center g-4">

            <div className="col-lg-7">
              <div className="highlight-content">

                <span className="highlight-label">
                  YOUR CAREER. ORGANIZED.
                </span>

                <h3>
                  Your Career Documents.
                  <br />
                  <span>Your CVs. Your Profile.</span>
                </h3>

                <p>
                  Never search through your phone, email, Google Drive or
                  WhatsApp for an old CV or important document again.
                </p>

                <div className="highlight-points">
                  <div>
                    <span>✓</span>
                    Store certificates, experience letters & documents
                  </div>

                  <div>
                    <span>✓</span>
                    Create and manage multiple CVs
                  </div>

                  <div>
                    <span>✓</span>
                    Share one professional profile with recruiters
                  </div>

                  <div>
                    <span>✓</span>
                    Keep your Primary CV ready to download
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-5">
              <div className="profile-preview">

                <div className="profile-top">
                  <div className="profile-avatar">
                    BP
                  </div>

                  <div>
                    <h6>Professional Profile</h6>
                    <small>Available for opportunities</small>
                  </div>

                  <span className="online-dot"></span>
                </div>

                <div className="profile-info">
                  <h4>Your Name</h4>
                  <p>Senior Software Developer</p>
                </div>

                <div className="profile-stats">
                  <div>
                    <strong>5</strong>
                    <span>CVs</span>
                  </div>

                  <div>
                    <strong>12</strong>
                    <span>Documents</span>
                  </div>

                  <div>
                    <strong>1</strong>
                    <span>Primary CV</span>
                  </div>
                </div>

                <button className="profile-download-btn">
                  Download Primary CV ↓
                </button>

                <div className="profile-url">
                  bentureai.com/profile/your-name
                </div>

              </div>
            </div>

          </div>
        </div> */}

        {/* Pricing */}
        <div className="pricing-wrapper">

          <div className="row g-4 align-items-stretch">

            {/* Basic Plan */}
            <div className="col-lg-6">
              <div className="career-plan basic-plan">

                <div className="plan-header">
                  <div>
                    <span className="plan-label">
                      CAREER VAULT
                    </span>

                    <h3>
                      Career Vault
                    </h3>
                  </div>

                  <div className="plan-icon">
                    📁
                  </div>
                </div>

                <p className="plan-description">
                  Keep your entire career organized and ready whenever
                  you apply for your next opportunity.
                </p>

                <div className="price-area">
                  <span className="old-price">₹2,499</span>

                  <div>
                    <span className="currency">₹</span>
                    <span className="price">99</span>
                    <span className="duration">/ year</span>
                  </div>
                </div>

                <div className="save-badge">
                  Save ₹3,900
                </div>

                <div className="features-list">
                  {basicFeatures.map((feature, index) => (
                    <div className="feature-item" key={index}>
                      <span className="check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="plan-button secondary-button"
                  onClick={() => handleSubscribe("Career Vault")}
                >
                  Get Career Vault for ₹99
                  <span>→</span>
                </button>

                <div className="plan-note">
                  🔒 Secure payment • 1-year access
                </div>

              </div>
            </div>

            {/* AI Plan */}
            <div className="col-lg-6">
              <div className="career-plan ai-plan">

                <div className="popular-badge">
                  ⭐ MOST POPULAR
                </div>

                <div className="plan-header">
                  <div>
                    <span className="plan-label">
                      CAREER VAULT + AI
                    </span>

                    <h3>
                      Career Vault Pro
                    </h3>
                  </div>

                  <div className="plan-icon ai-icon">
                    ✨
                  </div>
                </div>

                <p className="plan-description">
                  Manage your career documents and let AI help you prepare
                  for your next interview based on your skills and CV.
                </p>

                <div className="price-area">
                  <span className="old-price">₹3,999</span>

                  <div>
                    <span className="currency">₹</span>
                    <span className="price">199</span>
                    <span className="duration">/ year</span>
                  </div>
                </div>

                <div className="save-badge ai-save">
                  Full Career + AI Preparation
                </div>

                <div className="features-list">
                  {aiFeatures.map((feature, index) => (
                    <div className="feature-item" key={index}>
                      <span className="check ai-check">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className="plan-button primary-button"
                  onClick={() => handleSubscribe("Career Vault Pro")}
                >
                  Get Career Vault + AI for ₹199
                  <span>→</span>
                </button>

                <div className="plan-note">
                  🔒 Secure payment • 1-year access
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="career-bottom-cta">
          <div>
            <h3>
              Your next opportunity could be closer than you think.
            </h3>

            <p>
              Keep your career ready. Keep your documents ready.
              Keep yourself interview-ready.
            </p>
          </div>

          <button
            onClick={() => handleSubscribe("Career Vault Pro")}
          >
            Start Your Career Vault →
          </button>
        </div>

      </div>

      <style jsx>{`

        .career-vault-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(255, 193, 7, 0.12),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #f7f9ff 0%,
              #eef3ff 100%
            );
        }

        .career-vault-header {
          max-width: 800px;
          margin-bottom: 55px;
        }

        .career-vault-badge {
          display: inline-block;
          padding: 8px 17px;
          margin-bottom: 18px;
          border-radius: 50px;
          background: #e8efff;
          color: #163968;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .career-vault-title {
          margin-bottom: 20px;
          color: #102a56;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -2px;
        }

        .career-vault-title span {
          color: #ffb800;
        }

        .career-vault-description {
          max-width: 700px;
          margin: auto;
          color: #667085;
          font-size: 18px;
          line-height: 1.7;
        }

        /* Highlight */

        .career-highlight {
          position: relative;
          overflow: hidden;
          margin-bottom: 45px;
          padding: 45px;
          border-radius: 28px;
          background: #102a56;
          box-shadow: 0 25px 60px rgba(16, 42, 86, 0.18);
        }

        .career-highlight::after {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          right: -130px;
          top: -170px;
          border-radius: 50%;
          background: rgba(255, 193, 7, 0.12);
        }

        .highlight-content {
          position: relative;
          z-index: 2;
        }

        .highlight-label {
          color: #ffc107;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .highlight-content h3 {
          margin: 12px 0 16px;
          color: #ffffff;
          font-size: 38px;
          line-height: 1.15;
          font-weight: 800;
        }

        .highlight-content h3 span {
          color: #ffc107;
        }

        .highlight-content > p {
          max-width: 600px;
          color: #c6d3e8;
          font-size: 16px;
          line-height: 1.7;
        }

        .highlight-points {
          margin-top: 25px;
        }

        .highlight-points div {
          margin-bottom: 12px;
          color: #e7edf7;
          font-size: 14px;
        }

        .highlight-points span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 23px;
          height: 23px;
          margin-right: 10px;
          border-radius: 50%;
          background: #ffc107;
          color: #102a56;
          font-size: 12px;
          font-weight: 800;
        }

        /* Profile Preview */

        .profile-preview {
          position: relative;
          z-index: 2;
          padding: 25px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.09);
          backdrop-filter: blur(12px);
        }

        .profile-top {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .profile-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background: #ffc107;
          color: #102a56;
          font-weight: 800;
        }

        .profile-top h6 {
          margin: 0;
          color: #ffffff;
        }

        .profile-top small {
          color: #aebdd4;
          font-size: 11px;
        }

        .online-dot {
          width: 9px;
          height: 9px;
          margin-left: auto;
          border-radius: 50%;
          background: #39d98a;
        }

        .profile-info {
          padding: 22px 0 15px;
        }

        .profile-info h4 {
          margin: 0 0 5px;
          color: #ffffff;
          font-size: 22px;
        }

        .profile-info p {
          margin: 0;
          color: #b8c6dc;
          font-size: 13px;
        }

        .profile-stats {
          display: flex;
          gap: 8px;
          margin-bottom: 18px;
        }

        .profile-stats div {
          flex: 1;
          padding: 12px 5px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.08);
          text-align: center;
        }

        .profile-stats strong,
        .profile-stats span {
          display: block;
        }

        .profile-stats strong {
          color: #ffc107;
          font-size: 19px;
        }

        .profile-stats span {
          color: #aebdd4;
          font-size: 10px;
        }

        .profile-download-btn {
          width: 100%;
          padding: 12px;
          border: 0;
          border-radius: 10px;
          background: #ffffff;
          color: #102a56;
          font-size: 13px;
          font-weight: 700;
        }

        .profile-url {
          margin-top: 12px;
          color: #8fa5c7;
          font-size: 10px;
          text-align: center;
        }

        /* Pricing */

        .pricing-wrapper {
          margin-bottom: 45px;
        }

        .career-plan {
          position: relative;
          height: 100%;
          padding: 35px;
          border-radius: 25px;
          background: #ffffff;
          border: 1px solid #e4e9f2;
          box-shadow: 0 18px 45px rgba(16, 42, 86, 0.08);
        }

        .ai-plan {
          border: 2px solid #ffbf19;
          box-shadow: 0 20px 55px rgba(255, 184, 0, 0.15);
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          right: 25px;
          padding: 7px 14px;
          border-radius: 50px;
          background: #ffc107;
          color: #102a56;
          font-size: 11px;
          font-weight: 800;
        }

        .plan-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .plan-label {
          color: #8792a7;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .plan-header h3 {
          margin: 6px 0 0;
          color: #102a56;
          font-size: 28px;
          font-weight: 800;
        }

        .plan-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 16px;
          background: #edf2ff;
          font-size: 25px;
        }

        .ai-icon {
          background: #fff5d6;
        }

        .plan-description {
          min-height: 65px;
          margin: 20px 0;
          color: #707b8f;
          font-size: 14px;
          line-height: 1.6;
        }

        .price-area {
          padding: 18px 0;
          border-top: 1px solid #edf0f5;
          border-bottom: 1px solid #edf0f5;
        }

        .old-price {
          display: block;
          color: #9ba5b5;
          font-size: 17px;
          text-decoration: line-through;
        }

        .currency {
          color: #102a56;
          font-size: 25px;
          font-weight: 700;
          vertical-align: top;
        }

        .price {
          color: #102a56;
          font-size: 68px;
          font-weight: 800;
          letter-spacing: -3px;
        }

        .duration {
          margin-left: 5px;
          color: #7c8799;
          font-size: 13px;
        }

        .save-badge {
          display: inline-block;
          margin: 15px 0 5px;
          padding: 6px 12px;
          border-radius: 50px;
          background: #e9f8ef;
          color: #16803c;
          font-size: 11px;
          font-weight: 800;
        }

        .ai-save {
          background: #fff4d1;
          color: #966900;
        }

        .features-list {
          margin: 18px 0 25px;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 11px;
          color: #475467;
          font-size: 13px;
          line-height: 1.4;
        }

        .check {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #e8f7ee;
          color: #16a34a;
          font-size: 11px;
          font-weight: 800;
        }

        .ai-check {
          background: #fff3ce;
          color: #e09b00;
        }

        .plan-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          width: 100%;
          padding: 15px 20px;
          border: 0;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .secondary-button {
          background: #102a56;
          color: #ffffff;
        }

        .primary-button {
          background: #ffc107;
          color: #102a56;
        }

        .plan-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(16, 42, 86, 0.15);
        }

        .primary-button:hover {
          background: #ffca2c;
        }

        .plan-note {
          margin-top: 12px;
          color: #98a2b3;
          font-size: 10px;
          text-align: center;
        }

        /* Bottom CTA */

        .career-bottom-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 30px 35px;
          border-radius: 20px;
          background: #102a56;
        }

        .career-bottom-cta h3 {
          margin: 0 0 7px;
          color: #ffffff;
          font-size: 22px;
          font-weight: 800;
        }

        .career-bottom-cta p {
          margin: 0;
          color: #b9c7dd;
          font-size: 13px;
        }

        .career-bottom-cta button {
          flex-shrink: 0;
          padding: 14px 22px;
          border: 0;
          border-radius: 11px;
          background: #ffc107;
          color: #102a56;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .career-highlight {
            padding: 35px 25px;
          }

          .career-plan {
            padding: 28px;
          }
        }

        @media (max-width: 767px) {
          .career-vault-title {
            font-size: 40px;
          }

          .career-highlight {
            padding: 30px 20px;
          }

          .highlight-content h3 {
            font-size: 30px;
          }

          .career-bottom-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .career-bottom-cta button {
            width: 100%;
          }
        }

        @media (max-width: 575px) {
          .career-vault-title {
            font-size: 34px;
          }

          .career-vault-description {
            font-size: 16px;
          }

          .career-plan {
            padding: 24px 20px;
          }

          .price {
            font-size: 58px;
          }

          .plan-header h3 {
            font-size: 24px;
          }

          .profile-preview {
            padding: 20px;
          }
        }

      `}</style>
    </section>
  );
};

export default CareerVaultSection;