import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

export default function Account({ onEdit }) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const profileUrl = user?.email
    ? `${window.location.origin}/profile/${encodeURIComponent(user.email)}`
    : null

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Account</h1>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0">{user?.email}</span>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-xl space-y-5">
        <div>
          <span className="text-sm text-gray-500">Name</span>
          <p className="font-medium text-gray-900">{user?.name || 'Not set'}</p>
        </div>

        <div>
          <span className="text-sm text-gray-500">Email</span>
          <p className="font-medium text-gray-900">{user?.email || 'Not set'}</p>
        </div>

        <div>
          <span className="text-sm text-gray-500">Public Profile URL</span>
          <div className="flex items-center gap-3">
            <p className="font-medium text-blue-600 break-all">
              {profileUrl || 'bentureai.com/profile/your-email'}
            </p>
            {profileUrl ? (
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 bg-indigo-600 text-white rounded-xl text-sm hover:bg-indigo-700 transition"
              >
                Open
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-400 rounded-xl text-sm cursor-not-allowed"
              >
                Open
              </button>
            )}
          </div>
        </div>

        {user?.name && (<div className="pt-2 border-t border-gray-200 flex flex-wrap items-center gap-3">
          <h2 className="text-base font-semibold text-gray-900 mb-0">Account Actions</h2>
          <Button
            variant="primary"
            onClick={() => (onEdit ? onEdit() : navigate('/account-settings'))}
            className="mt-0"
          >
            Edit Profile
          </Button>
          <Button variant="danger" onClick={logout} className="mt-0">
            Logout
          </Button>
        </div>)}
      </div>
    </div>
  );
}
