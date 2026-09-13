import React, { useState, useEffect } from 'react';
import './AccountSettings.css';
import MainNavbar from '../components/Layout/MainNavbar';
import { useAuth } from '../context/AuthContext';
import { getAllSubscriptions, updateUserPassword } from '../lib/localStorage';
import Footer from '../components/Layout/Footer';
    

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // User data state
  const { user, updateProfile } = useAuth();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: ''
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
    plan: 'Free',
    price: '₹0',
    nextBilling: null,
    status: 'Inactive'
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleProfileSave = async () => {
    try {
      await updateProfile({
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        location: userData.location,
        bio: userData.bio,
      });

      setIsEditing(false);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unable to save profile.');
    }
  };

  useEffect(() => {
    if (user) {
      setUserData(prev => ({
        ...prev,
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        location: user.location || '',
        bio: user.bio || ''
      }));

      // load subscription info
      (async () => {
        try {
          const subs = await getAllSubscriptions();
          if (Array.isArray(subs) && subs.length > 0) {
            // prefer an active subscription
            const active = subs.find(s => s.status === 'active') || subs[0];
            setPlanData({
              plan: active.plan || active.planId || 'Unknown',
              price: active.price ? `₹${(active.price / 100).toFixed(0)}` : active.amount ? `₹${(active.amount / 100).toFixed(0)}` : '₹0',
              nextBilling: active.nextBilling || active.expiresAt || active.paymentDate || null,
              status: active.status || 'inactive'
            });
          }
        } catch (err) {
          // ignore — keep default free plan
        }
      })();
    }
  }, [user]);

  const planDisplay = (() => {
    const p = planData?.plan;
    if (!p) return 'Free';
    if (typeof p === 'string') return p;
    if (typeof p === 'object') return p.name || p.slug || p.id || 'Unknown';
    return String(p);
  })();

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
      alert('Please fill in all password fields.');
      return;
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('New password and confirm password do not match.');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    try {
      await updateUserPassword(passwordData.currentPassword, passwordData.newPassword);
      alert('✅ Password changed successfully!');
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unable to update password.');
    }
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
        <main className="main-content">
          <header className="page-header">
            <div className="header-left">
              <h1 className="page-title">⚙️ Account Settings</h1>
              <p className="page-subtitle">Manage your profile, security, and preferences</p>
            </div>
            {/* <div className="header-right">
              <span className="badge">🔵 {planDisplay} Plan</span>
            </div> */}
          </header>

          

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
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
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
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="form-group">
                      <label>Location</label>
                      <input
                        type="text"
                        value={userData.location}
                        onChange={(e) => setUserData({ ...userData, location: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      rows="3"
                      value={userData.bio}
                      onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
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

              <div className="settings-card" style={{ marginTop: '24px' }}>
                <div className="settings-card-header">
                  <h3>🔒 Change Password</h3>
                  <p>Update your account password securely</p>
                </div>

                <form onSubmit={handlePasswordChange} className="settings-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Current Password</label>
                      <input
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                        placeholder="Enter current password"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>New Password</label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        placeholder="Enter new password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Confirm New Password</label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        placeholder="Confirm new password"
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="btn btn-primary" type="submit">
                      🔐 Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}


        </main>
      </div>
      <Footer />
    </>
  );
};

export default AccountSettings;