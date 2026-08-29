import React, { useState, useEffect, useRef } from 'react';

/**
 * A full‑page overlay that masks the underlying content.
 * Use it to indicate that a page (or section) is under development.
 *
 * @param {ReactNode} children - The page content to be masked.
 * @param {string|number|Date} launchDate - Target launch date (anything `new Date()` accepts).
 * @param {boolean} initiallyActive - Whether the overlay is shown on mount (default: true).
 * @param {function} onNotify - Callback when the notify form is submitted (email).
 */
const ComingSoonOverlay = ({
  children,
  launchDate = '2026-12-01T00:00:00',
  initiallyActive = true,
  onNotify = (email) => console.log(`Notify: ${email}`),
}) => {
  // ─── State ──────────────────────────────────────────
  const [isActive, setIsActive] = useState(initiallyActive);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // ─── Countdown logic ───────────────────────────────
  const target = new Date(launchDate).getTime();

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      let diff = target - now;
      if (diff < 0) diff = 0;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [target]);

  // ─── Form submit ────────────────────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onNotify(email.trim());
      setSubscribed(true);
      // Reset after 3s (demo)
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  // ─── Toggle overlay ─────────────────────────────────
  const toggleOverlay = () => setIsActive((prev) => !prev);

  // ─── Keyboard: ESC to hide ─────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape' && isActive) {
        setIsActive(false);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isActive]);

  // ─── Focus trap refs ───────────────────────────────
  const overlayRef = useRef(null);

  // Focus the first input when overlay becomes active
  useEffect(() => {
    if (isActive && overlayRef.current) {
      const input = overlayRef.current.querySelector('input[type="email"]');
      if (input) setTimeout(() => input.focus(), 300);
    }
  }, [isActive]);

  // ─── Render ─────────────────────────────────────────
  return (
    <>
      {/* ── Page content (children) ── */}
      <div
        style={{
          transition: 'filter 0.4s ease',
          filter: isActive ? 'blur(2px) brightness(0.8)' : 'none',
          pointerEvents: isActive ? 'none' : 'auto',
          userSelect: isActive ? 'none' : 'auto',
        }}
      >
        {children}
      </div>

      {/* ── Overlay ── */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: isActive ? 1 : 0,
          visibility: isActive ? 'visible' : 'hidden',
          transition: 'opacity 0.6s ease, visibility 0.6s ease',
          pointerEvents: isActive ? 'auto' : 'none',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Coming Soon"
      >
        {/* Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(10, 10, 30, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
          }}
        />

        {/* Decorative shapes */}
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)',
            pointerEvents: 'none',
            animation: 'floatShape 20s ease-in-out infinite alternate',
          }}
          className="shape shape--1"
        />
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(99,102,241,0.15)',
            pointerEvents: 'none',
            animation: 'floatShape 25s ease-in-out infinite alternate',
            width: '300px',
            height: '300px',
            top: '-80px',
            right: '-60px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(236,72,153,0.12)',
            pointerEvents: 'none',
            animation: 'floatShape 18s ease-in-out infinite alternate',
            width: '200px',
            height: '200px',
            bottom: '-40px',
            left: '-40px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(251,191,36,0.08)',
            pointerEvents: 'none',
            animation: 'floatShape 22s ease-in-out infinite alternate',
            width: '120px',
            height: '120px',
            top: '50%',
            right: '10%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(52,211,153,0.10)',
            pointerEvents: 'none',
            animation: 'floatShape 15s ease-in-out infinite alternate',
            width: '80px',
            height: '80px',
            bottom: '25%',
            left: '8%',
          }}
        />

        {/* Content card */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: '560px',
            width: '90%',
            padding: '3rem 2.5rem',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            borderRadius: '2.5rem',
            border: '1px solid rgba(255,255,255,0.15)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
            transform: isActive ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.96)',
            opacity: isActive ? 1 : 0,
            transition: 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '0.35rem 1.25rem',
              borderRadius: '100px',
              background: 'rgba(99,102,241,0.2)',
              border: '1px solid rgba(99,102,241,0.25)',
              color: '#c7d2fe',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            🚧 Under Development
          </div>

          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
            }}
          >
            Coming{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #818cf8, #c084fc, #f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Soon
            </span>
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1.05rem',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            We're crafting something amazing. This page is temporarily disabled while we
            polish the experience.
          </p>

          {/* Countdown */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '2.25rem',
              flexWrap: 'wrap',
            }}
          >
            {['days', 'hours', 'minutes', 'seconds'].map((unit, idx) => (
              <React.Fragment key={unit}>
                <div
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '1rem',
                    padding: '0.5rem 0.75rem',
                    minWidth: '72px',
                    textAlign: 'center',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      fontSize: '2.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                      lineHeight: 1.2,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {String(timeLeft[unit]).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      marginTop: '0.1rem',
                    }}
                  >
                    {unit}
                  </span>
                </div>
                {idx < 3 && (
                  <span
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'rgba(255,255,255,0.15)',
                      fontSize: '1.5rem',
                      fontWeight: 300,
                    }}
                  >
                    :
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Notify form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '0.75rem',
              maxWidth: '420px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscribed}
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '0.85rem 1.25rem',
                borderRadius: '100px',
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(4px)',
                color: '#ffffff',
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)')}
              onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            />
            <button
              type="submit"
              disabled={subscribed}
              style={{
                padding: '0.85rem 2rem',
                borderRadius: '100px',
                border: 'none',
                background: subscribed
                  ? 'linear-gradient(135deg, #34d399, #059669)'
                  : 'linear-gradient(135deg, #818cf8, #7c3aed)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.95rem',
                fontFamily: 'inherit',
                cursor: subscribed ? 'default' : 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 20px rgba(99,102,241,0.3)',
                whiteSpace: 'nowrap',
              }}
            >
              {subscribed ? '✅ Subscribed!' : 'Notify Me'}
            </button>
          </form>

          <p
            style={{
              marginTop: '2rem',
              color: 'rgba(255,255,255,0.25)',
              fontSize: '0.8rem',
              letterSpacing: '0.02em',
            }}
          >
            ✦ <span style={{ color: 'rgba(255,255,255,0.4)' }}>We'll let you know when we launch</span> ✦
          </p>
        </div>
      </div>

      {/* ── Toggle button (demo) ── */}
      <button
        onClick={toggleOverlay}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 10000,
          padding: '0.75rem 1.5rem',
          borderRadius: '100px',
          border: 'none',
          background: '#1a1a2e',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '0.9rem',
          fontFamily: 'inherit',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        {isActive ? '🔓 Hide Overlay' : '🔒 Show Overlay'}
      </button>

      {/* ── Inject keyframe animations ── */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes floatShape {
              0% { transform: translate(0,0) scale(1) rotate(0deg); }
              33% { transform: translate(30px,-40px) scale(1.1) rotate(120deg); }
              66% { transform: translate(-20px,20px) scale(0.9) rotate(240deg); }
              100% { transform: translate(15px,-15px) scale(1.05) rotate(360deg); }
            }
          `,
        }}
      />
    </>
  );
};

export default ComingSoonOverlay;