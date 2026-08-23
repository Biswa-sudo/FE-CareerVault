import React, { useState, useCallback } from 'react';
import './NotAuthorized.css'; // We'll create this file next

const NotAuthorized = ({ 
  serviceName = "Premium Service",
  serviceId = "premium-2026",
  onPaymentRedirect,
  onHelpClick,
  onHomeClick,
  customMessage,
  redirectDelay = 400
}) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirectToPayment = useCallback(() => {
    setIsRedirecting(true);

    setTimeout(() => {
      // If custom redirect handler is provided, use it
      if (onPaymentRedirect) {
        onPaymentRedirect();
      } else {
        // Default behavior: open a mock payment page in new tab
        const demoPaymentPage = 
          `data:text/html,
          <html style="background:#f0f7fe;font-family:system-ui;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;">
            <div style="background:white;padding:3rem;border-radius:2rem;box-shadow:0 12px 30px rgba(0,0,0,0.1);text-align:center;max-width:400px;">
              <h2 style="color:#1a3b5a;">💳 Payment Page</h2>
              <p style="color:#2b4c6a;">You are now on the payment page for ${serviceName}.</p>
              <p style="color:#3f688b;font-size:0.95rem;">(This is a demo — in production, redirect to your payment gateway.)</p>
              <button onclick="window.close()" style="margin-top:1.5rem;padding:0.6rem 2rem;border:none;background:#1e3b5c;color:white;border-radius:40px;font-size:1rem;cursor:pointer;">Close</button>
            </div>
          </html>`;

        window.open(demoPaymentPage, '_blank');
        console.log('🔐 Redirect to payment page (simulated)');
      }

      setIsRedirecting(false);
    }, redirectDelay);
  }, [onPaymentRedirect, serviceName, redirectDelay]);

  const handleHelpClick = useCallback(() => {
    if (onHelpClick) {
      onHelpClick();
    } else {
      alert('Contact support: support@service.com');
    }
  }, [onHelpClick]);

  const handleHomeClick = useCallback(() => {
    if (onHomeClick) {
      onHomeClick();
    } else {
      alert('Redirect to home page');
    }
  }, [onHomeClick]);

  return (
    <div className="not-authorized-container">
      <div className="not-authorized-card">
        {/* Lock icon */}
        <div className="lock-icon">
          <i className="fas fa-lock"></i>
        </div>

        <h1>Access Denied</h1>
        <p className="subhead">
          <i className="fas fa-shield-alt" style={{ marginRight: '6px', color: '#4f7ea3' }}></i>
          You are not authorized to view this page
        </p>

        <div className="service-badge">
          <i className="fas fa-crown" style={{ marginRight: '6px' }}></i> {serviceName}
        </div>

        <div className="divider"></div>

        {/* informative message */}
        <div className="message-box">
          <p>
            <i className="fas fa-circle-info"></i>
            <span>
              <strong>Subscription required</strong><br />
              {customMessage || `This content is restricted. To gain access, please complete the payment for ${serviceName}.`}
            </span>
          </p>
        </div>

        {/* Payment button — main CTA */}
        <button 
          className="btn-payment" 
          onClick={handleRedirectToPayment}
          disabled={isRedirecting}
        >
          {isRedirecting ? (
            <>
              <i className="fas fa-spinner fa-pulse"></i> Redirecting...
            </>
          ) : (
            <>
              <i className="fas fa-credit-card"></i> Go to Payment
              <i className="fas fa-arrow-right"></i>
            </>
          )}
        </button>

        {/* extra small footnote */}
        <div className="footnote">
          <span><i className="far fa-clock" style={{ marginRight: '4px' }}></i> Quick & secure</span>
          <a href="#" onClick={(e) => { e.preventDefault(); handleHelpClick(); }}>
            <i className="fas fa-headset"></i> Help
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>
            <i className="fas fa-home"></i> Home
          </a>
        </div>

        {/* hidden note: the actual service name (for clarity) */}
        <div style={{ marginTop: '0.8rem', fontSize: '0.7rem', color: '#8da3b9', letterSpacing: '0.3px' }}>
          <i className="fas fa-tag"></i> Service ID: {serviceId}
        </div>
      </div>
    </div>
  );
};

export default NotAuthorized;