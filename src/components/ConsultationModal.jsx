import React, { useState, useEffect, useRef } from 'react';
import { apiRequest } from '../lib/apiClient';

const ConsultationModal = ({ isOpen, onClose, initialSubject = '', onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: initialSubject, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const nameRef = useRef(null);

  useEffect(() => {
    setFormData(prev => ({ ...prev, subject: initialSubject || prev.subject }));
  }, [initialSubject]);

  useEffect(() => {
    if (isOpen && nameRef.current) {
      nameRef.current.focus();
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      await apiRequest('/contact.php', { method: 'POST', body: formData });
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: initialSubject || '', message: '' });
      if (onSuccess) onSuccess();
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 1500);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Unable to send message right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay} onClick={onClose}>
      <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button style={styles.modalClose} onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>
        <h3 style={styles.modalTitle}><i className="fas fa-message" style={styles.modalIcon}></i> Get in touch</h3>
        <p style={styles.modalSub}>Tell us about your needs and we'll get back to you.</p>

        {submitSuccess ? (
          <div style={styles.successMessage}>
            <i className="fas fa-check-circle" style={styles.successMessageIcon}></i>
            <h4 style={styles.successMessageTitle}>Thank you!</h4>
            <p style={styles.successMessageSubtext}>We'll reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            {submitError && (
              <div>
                <div style={styles.error}>{submitError}</div>
                {typeof submitError === 'string' && /failed to fetch/i.test(submitError) && (
                  <div style={{ marginTop: 8 }}>
                    <button
                      type="button"
                      onClick={() => window.location.reload()}
                      style={{ ...styles.btn, ...styles.btnOutline, padding: '8px 12px', borderRadius: 6 }}
                    >
                      Try again
                    </button>
                  </div>
                )}
              </div>
            )}
            <div style={styles.row}>
              <div style={{ flex: 1 }}>
                <label style={styles.label}>Full Name</label>
                <input ref={nameRef} name="name" required value={formData.name} onChange={handleChange} style={styles.input} />
              </div>
              <div style={{ flex: 1, marginLeft: 12 }}>
                <label style={styles.label}>Email</label>
                <input name="email" type="email" required value={formData.email} onChange={handleChange} style={styles.input} />
              </div>
            </div>

            <div>
              <label style={styles.label}>Phone Number</label>
              <input name="phone" required value={formData.phone} onChange={handleChange} style={styles.input} />
            </div>

            <div>
              <label style={styles.label}>Subject</label>
              <input name="subject" required value={formData.subject} onChange={handleChange} style={styles.input} />
            </div>

            <div>
              <label style={styles.label}>Message</label>
              <textarea name="message" rows={4} required value={formData.message} onChange={handleChange} style={styles.textarea} />
            </div>

            <button type="submit" style={{ ...styles.btn, ...(isSubmitting ? styles.btnDisabled : styles.btnPrimary) }} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : '📤 Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

const styles = {
  modalOverlay: {
    position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
  },
  modalCard: { background: 'white', borderRadius: 12, maxWidth: 520, width: '100%', padding: 24, position: 'relative' },
  modalClose: { position: 'absolute', top: 12, right: 12, border: 'none', background: 'transparent', cursor: 'pointer' },
  modalTitle: { margin: 0, marginBottom: 6 },
  modalIcon: { marginRight: 8, color: '#4F46E5' },
  modalSub: { color: '#374151', marginBottom: 12 },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  row: { display: 'flex', gap: 12 },
  label: { display: 'block', fontWeight: 600, marginBottom: 6, color: '#111827' },
  input: { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' },
  textarea: { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #e5e7eb' },
  btn: { padding: '12px 16px', borderRadius: 8, border: 'none', cursor: 'pointer', fontWeight: 700 },
  btnPrimary: { background: '#4F46E5', color: 'white' },
  btnDisabled: { background: '#9CA3AF', color: 'white' },
  successMessage: { textAlign: 'center', padding: 12 },
  successMessageIcon: { fontSize: '2rem', color: '#10B981' },
  successMessageTitle: { margin: 6 },
  successMessageSubtext: { color: '#374151' },
  error: { color: '#b91c1c', fontWeight: 600 },
};

export default ConsultationModal;
