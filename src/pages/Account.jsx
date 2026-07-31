// Account.jsx
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPaymentDate } from '../lib/localStorage';
import Button from '../components/ui/Button';

// Dummy course data – replace with real data from your backend
const DUMMY_COURSES = [
  { id: 1, title: 'AI Prompt Engineering', progress: 100, status: 'Completed', icon: '💻' },
  { id: 2, title: 'Mastering Job Interviews', progress: 75, status: 'In Progress', icon: '🎤' },
  { id: 3, title: 'Spoken English for Professionals', progress: 40, status: 'In Progress', icon: '💬' },
  { id: 4, title: 'Resume Optimization with AI', progress: 100, status: 'Completed', icon: '📄' },
  { id: 5, title: 'Automation Skills for Work', progress: 0, status: 'Not Started', icon: '⚙️' },
];

export default function Account() {
  const { user, logout } = useAuth();
  const [paymentDate, setPaymentDate] = useState(null);
  const [billingLoading, setBillingLoading] = useState(true);
  const [billingError, setBillingError] = useState('');

  useEffect(() => {
    const loadPaymentDate = async () => {
      try {
        const date = await getPaymentDate();
        setPaymentDate(date);
      } catch (error) {
        setBillingError(error instanceof Error ? error.message : 'Failed to load billing details.');
      } finally {
        setBillingLoading(false);
      }
    };

    loadPaymentDate();
  }, []);

  const nextBilling = paymentDate
    ? new Date(new Date(paymentDate).setFullYear(new Date(paymentDate).getFullYear() + 1)).toLocaleDateString()
    : 'N/A';

  const [activeTab, setActiveTab] = useState('dashboard');

  // Stats for Dashboard
  const completed = DUMMY_COURSES.filter(c => c.progress === 100).length;
  const inProgress = DUMMY_COURSES.filter(c => c.progress > 0 && c.progress < 100).length;
  const notStarted = DUMMY_COURSES.filter(c => c.progress === 0).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Account</h1>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0">{user?.email}</span>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          {['dashboard', 'courses', 'profile', 'subscription'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors
                ${activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
              `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div>
        {activeTab === 'dashboard' && (
          <DashboardTab
            completed={completed}
            inProgress={inProgress}
            notStarted={notStarted}
            courses={DUMMY_COURSES}
          />
        )}
        {activeTab === 'courses' && <CoursesTab courses={DUMMY_COURSES} />}
        {activeTab === 'profile' && <ProfileTab user={user} logout={logout} />}
        {activeTab === 'subscription' && <SubscriptionTab nextBilling={nextBilling} billingLoading={billingLoading} billingError={billingError} />}
      </div>
    </div>
  );
}

// ----- Tab Components -----

const DashboardTab = ({ completed, inProgress, notStarted, courses }) => {
  const recent = courses.slice(0, 3);
  return (
    <div>
      <p className="text-gray-500 mb-6">Welcome back! Here's your progress summary.</p>

      {/* Stats cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Completed" value={completed} color="blue" icon="✅" />
        <StatCard label="In Progress" value={inProgress} color="yellow" icon="🔄" />
        <StatCard label="Not Started" value={notStarted} color="gray" icon="⏳" />
        <StatCard label="AI Interviews" value="12" color="green" icon="🤖" />
      </div>

      <h3 className="text-lg font-semibold mb-3">Recent Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recent.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const StatCard = ({ label, value, color, icon }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    gray: 'bg-gray-100 text-gray-700',
    green: 'bg-green-100 text-green-700',
  };
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <span className={`text-2xl ${colorMap[color] || 'bg-gray-100'} p-2 rounded-full`}>{icon}</span>
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const isComplete = course.progress === 100;
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{course.icon}</span>
        <h4 className="font-medium">{course.title}</h4>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${course.progress}%` }}></div>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">{course.status}</span>
        <span className="text-gray-500">{course.progress}%</span>
      </div>
      <button className="mt-3 w-full text-sm rounded-lg py-1.5 border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors">
        {isComplete ? 'View Certificate' : 'Continue'}
      </button>
    </div>
  );
};

const CoursesTab = ({ courses }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
          Browse More Courses
        </button>
      </div>
    </div>
  );
};

const ProfileTab = ({ user, logout }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profile Information</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-lg space-y-4">
        <div>
          <span className="text-sm text-gray-500">Name</span>
          <p className="font-medium">{user?.name || 'Not set'}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Email</span>
          <p className="font-medium">{user?.email || 'Not set'}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Public Profile URL</span>
          <p className="font-medium text-blue-600">
            bentureai.com/profile/{user?.name?.toLowerCase().replace(/\s/g, '') || 'username'}
          </p>
        </div>
        <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Edit Profile
        </button>
        <hr />
        <div>
          <h4 className="font-medium text-red-600">Account Actions</h4>
          <Button variant="danger" onClick={logout} className="mt-2">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

const SubscriptionTab = ({ nextBilling, billingLoading, billingError }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Subscription</h2>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 max-w-lg space-y-3">
        {billingLoading && <p className="text-sm text-gray-500">Loading billing data...</p>}
        {billingError && <p className="text-sm text-red-600">{billingError}</p>}
        <div>
          <span className="text-sm text-gray-500">Plan</span>
          <p className="font-medium text-green-600">Pro – Active</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Next Billing</span>
          <p className="font-medium">{nextBilling}</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">Payment Method</span>
          <p className="font-medium">Visa •••• 1234</p>
        </div>
        <button className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          Manage Billing
        </button>
      </div>
    </div>
  );
};