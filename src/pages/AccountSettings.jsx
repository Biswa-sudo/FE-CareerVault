import React, { useState } from 'react';
import './AccountSettings.css';
import MainNavbar from '../components/Layout/MainNavbar';
    

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // User data state
  const [userData, setUserData] = useState({
    name: 'Biswaranjan Pradhan',
    email: 'biswa@email.com',
    phone: '+91 98765 43210',
    location: 'Odisha, India',
    bio: 'Full Stack Developer passionate about building impactful products.'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    marketingEmails: false,
    recruiterAlerts: true,
    studyGroupNotifications: true,
    interviewReminders: true
  });

  const [planData, setPlanData] = useState({
    plan: 'Pro',
    price: '₹249/month',
    nextBilling: 'August 18, 2026',
    status: 'Active'
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleProfileSave = () => {
    setIsEditing(false);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    alert('✅ Password changed successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      alert('🗑️ Account deletion request submitted. You will receive a confirmation email.');
      setShowDeleteModal(false);
    }
  };

  const plans = [
    { id: 'free', name: 'Free', price: '₹0', features: ['1 Resume', '3 AI Interviews/mo'] },
    { id: 'starter', name: 'Starter', price: '₹99/mo', features: ['5 Resumes', '15 AI Interviews/mo', 'ATS Optimization'] },
    { id: 'pro', name: 'Pro', price: '₹249/mo', features: ['10 Resumes', '50 AI Interviews/mo', 'Video Profiles'] },
    { id: 'premium', name: 'Premium', price: '₹499/mo', features: ['Unlimited Resumes', 'Unlimited Interviews', '1-on-1 Coaching'] }
  ];

  return (
    <>
    <MainNavbar />
    <div className="account-settings">
      {/* ===== MAIN CONTENT ===== */}
      <main className="main-content">
        {/* Header */}
        <header className="page-header">
          <div className="header-left">
            <h1 className="page-title">⚙️ Account Settings</h1>
            <p className="page-subtitle">Manage your profile, security, and preferences</p>
          </div>
          <div className="header-right">
            <span className="badge">🔵 {planData.plan} Plan</span>
          </div>
        </header>

        {/* ===== TABS ===== */}
        <div className="settings-tabs">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
          <button 
            className={`tab-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            🔔 Notifications
          </button>
          <button 
            className={`tab-btn ${activeTab === 'subscription' ? 'active' : ''}`}
            onClick={() => setActiveTab('subscription')}
          >
            💳 Subscription
          </button>
          <button 
            className={`tab-btn ${activeTab === 'danger' ? 'active' : ''}`}
            onClick={() => setActiveTab('danger')}
          >
            ⚠️ Danger Zone
          </button>
        </div>

        {/* ===== TAB: PROFILE ===== */}
        {activeTab === 'profile' && (
          <div className="tab-content">
            <div className="settings-card">
              <div className="settings-card-header">
                <h3>👤 Profile Information</h3>
                <p>Update your personal information</p>
              </div>

              {saveSuccess && (
                <div className="success-message">✅ Profile updated successfully!</div>
              )}

              <div className="settings-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      value={userData.name}
                      onChange={(e) => setUserData({...userData, name: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      value={userData.email}
                      onChange={(e) => setUserData({...userData, email: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input 
                      type="text" 
                      value={userData.phone}
                      onChange={(e) => setUserData({...userData, phone: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input 
                      type="text" 
                      value={userData.location}
                      onChange={(e) => setUserData({...userData, location: e.target.value})}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Bio</label>
                  <textarea 
                    rows="3"
                    value={userData.bio}
                    onChange={(e) => setUserData({...userData, bio: e.target.value})}
                    disabled={!isEditing}
                  />
                </div>

                <div className="form-actions">
                  {!isEditing ? (
                    <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
                      ✏️ Edit Profile
                    </button>
                  ) : (
                    <>
                      <button className="btn btn-primary" onClick={handleProfileSave}>
                        💾 Save Changes
                      </button>
                      <button className="btn btn-outline" onClick={() => setIsEditing(false)}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: SECURITY ===== */}
        {activeTab === 'security' && (
          <div className="tab-content">
            <div className="settings-card">
              <div className="settings-card-header">
                <h3>🔒 Security</h3>
                <p>Manage your password and security settings</p>
              </div>

              <form className="settings-form" onSubmit={handlePasswordChange}>
                <div className="form-group">
                  <label>Current Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter current password"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>New Password</label>
                    <input 
                      type="password" 
                      placeholder="Enter new password"
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input 
                      type="password" 
                      placeholder="Confirm new password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="password-requirements">
                  <p>Password must contain:</p>
                  <ul>
                    <li>✓ At least 8 characters</li>
                    <li>✓ At least one uppercase letter</li>
                    <li>✓ At least one number</li>
                    <li>✓ At least one special character</li>
                  </ul>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    🔄 Update Password
                  </button>
                </div>
              </form>
            </div>

            <div className="settings-card">
              <div className="settings-card-header">
                <h4>🔑 Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <div className="two-factor-status">
                <span className="status-badge disabled">❌ Disabled</span>
                <button className="btn btn-outline btn-small">Enable 2FA</button>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: NOTIFICATIONS ===== */}
        {activeTab === 'notifications' && (
          <div className="tab-content">
            <div className="settings-card">
              <div className="settings-card-header">
                <h3>🔔 Notification Preferences</h3>
                <p>Choose what updates you want to receive</p>
              </div>

              <div className="notification-list">
                <div className="notification-item">
                  <div className="notification-info">
                    <span className="notif-icon">📧</span>
                    <div>
                      <strong>Email Updates</strong>
                      <p>Receive product updates and announcements</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.emailUpdates}
                      onChange={() => handleNotificationChange('emailUpdates')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <span className="notif-icon">📨</span>
                    <div>
                      <strong>Marketing Emails</strong>
                      <p>Promotions, tips, and special offers</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.marketingEmails}
                      onChange={() => handleNotificationChange('marketingEmails')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <span className="notif-icon">🤝</span>
                    <div>
                      <strong>Recruiter Alerts</strong>
                      <p>When recruiters view or message your profile</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.recruiterAlerts}
                      onChange={() => handleNotificationChange('recruiterAlerts')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <span className="notif-icon">👥</span>
                    <div>
                      <strong>Study Group Notifications</strong>
                      <p>Session reminders, group activity, and updates</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.studyGroupNotifications}
                      onChange={() => handleNotificationChange('studyGroupNotifications')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>

                <div className="notification-item">
                  <div className="notification-info">
                    <span className="notif-icon">🎯</span>
                    <div>
                      <strong>Interview Reminders</strong>
                      <p>Reminders for upcoming interview practice sessions</p>
                    </div>
                  </div>
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={notifications.interviewReminders}
                      onChange={() => handleNotificationChange('interviewReminders')}
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: SUBSCRIPTION ===== */}
        {activeTab === 'subscription' && (
          <div className="tab-content">
            <div className="settings-card">
              <div className="settings-card-header">
                <h3>💳 Current Plan</h3>
                <p>Manage your subscription and billing</p>
              </div>

              <div className="subscription-details">
                <div className="sub-info">
                  <span className="sub-label">Plan</span>
                  <span className="sub-value">{planData.plan}</span>
                </div>
                <div className="sub-info">
                  <span className="sub-label">Price</span>
                  <span className="sub-value">{planData.price}</span>
                </div>
                <div className="sub-info">
                  <span className="sub-label">Next Billing</span>
                  <span className="sub-value">{planData.nextBilling}</span>
                </div>
                <div className="sub-info">
                  <span className="sub-label">Status</span>
                  <span className="sub-status active">{planData.status}</span>
                </div>
              </div>

              <div className="sub-actions">
                <button className="btn btn-primary">💳 Update Payment Method</button>
                <button className="btn btn-outline">📄 View Invoice History</button>
                <button className="btn btn-outline">⬇️ Downgrade</button>
              </div>
            </div>

            <div className="settings-card">
              <div className="settings-card-header">
                <h4>📊 Usage</h4>
                <p>Your current plan usage</p>
              </div>

              <div className="usage-bars">
                <div className="usage-item">
                  <span>Resumes</span>
                  <div className="usage-bar">
                    <div className="usage-fill" style={{ width: '80%' }}></div>
                  </div>
                  <span className="usage-text">8/10</span>
                </div>
                <div className="usage-item">
                  <span>AI Interviews</span>
                  <div className="usage-bar">
                    <div className="usage-fill" style={{ width: '42%' }}></div>
                  </div>
                  <span className="usage-text">21/50</span>
                </div>
                <div className="usage-item">
                  <span>Documents</span>
                  <div className="usage-bar">
                    <div className="usage-fill" style={{ width: '30%' }}></div>
                  </div>
                  <span className="usage-text">3/10</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===== TAB: DANGER ZONE ===== */}
        {activeTab === 'danger' && (
          <div className="tab-content">
            <div className="danger-zone">
              <div className="danger-card">
                <div className="danger-icon">⚠️</div>
                <div className="danger-content">
                  <h3>Delete Account</h3>
                  <p>
                    Permanently delete your account and all associated data. 
                    This action cannot be undone.
                  </p>
                </div>
                <button 
                  className="btn btn-danger"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Delete Account
                </button>
              </div>

              <div className="danger-card">
                <div className="danger-icon">📤</div>
                <div className="danger-content">
                  <h3>Export Data</h3>
                  <p>
                    Download all your data including resumes, documents, and profile information.
                  </p>
                </div>
                <button className="btn btn-outline">📥 Export Data</button>
              </div>

              <div className="danger-card">
                <div className="danger-icon">🚪</div>
                <div className="danger-content">
                  <h3>Log Out All Devices</h3>
                  <p>
                    Sign out from all active sessions on all devices.
                  </p>
                </div>
                <button className="btn btn-outline">🚪 Log Out All</button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ===== DELETE ACCOUNT MODAL ===== */}
      {showDeleteModal && (
        <div className="modal-overlay" onClick={() => setShowDeleteModal(false)}>
          <div className="modal modal-danger" onClick={(e) => e.stopPropagation()}>
            <div className="modal-danger-icon">⚠️</div>
            <h2>Delete Account</h2>
            <p className="modal-danger-text">
              Are you sure you want to delete your account? This action is <strong>permanent</strong> 
              and cannot be undone. All your data, including resumes, documents, and profile 
              information, will be permanently removed.
            </p>
            <div className="modal-danger-confirm">
              <input type="text" placeholder='Type "DELETE" to confirm' />
            </div>
            <div className="modal-actions">
              <button className="btn btn-outline" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleDeleteAccount}>
                🗑️ Yes, Delete My Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default AccountSettings;