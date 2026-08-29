// ============================================================
// SpokenEnglishPrePurchase.jsx
// Pre-Purchase Dashboard for Spoken English product
// Mirrors the real dashboard UI with mock data and upgrade CTAs
// ============================================================

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

// ----- ALL ICONS (including RotateCw) -----
import {
  Sparkles,
  Brain,
  Mic2,
  Target,
  Trophy,
  Clock,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  FileText,
  MessageSquare,
  Star,
  Zap,
  ChevronRight,
  Calendar,
  Award,
  BookOpen,
  Circle,
  Lock,
  Eye,
  Heart,
  ExternalLink,
  Plus,
  Loader2,
  Upload,
  FileCheck,
  ClipboardCheck,
  LayoutTemplate,
  PenTool,
  Compass,
  Play,
  Crown,
  CreditCard,
  X,
  Volume2,
  Languages,
  Speech,
  Type,
  Globe,
  Headphones,
  Video,
  BookMarked,
  GraduationCap,
  Lightbulb,
  Flame,
  ChevronDown,
  RotateCw,        // <-- ADDED THIS
} from 'lucide-react';

// ============================================================
// 1. MOCK DATA (Mirrors real dashboard structure)
// ============================================================
const MOCK_USER = {
  name: 'Guest User',
  languagePreference: 'english',
};

// Mock subjects (matches the structure of your real courseData)
const MOCK_SUBJECTS = [
  {
    id: 1,
    name: 'Business English',
    icon: '💼',
    description: 'Master professional communication for meetings, emails, and presentations.',
    progress: 75,
    isUnlocked: true,
    totalLessons: 12,
    completedLessons: 9,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    name: 'Interview Preparation',
    icon: '🎯',
    description: 'Practice common interview questions and build confidence.',
    progress: 90,
    isUnlocked: true,
    totalLessons: 10,
    completedLessons: 9,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 3,
    name: 'Everyday Conversation',
    icon: '🗣️',
    description: 'Improve your daily communication skills for real-life situations.',
    progress: 60,
    isUnlocked: true,
    totalLessons: 15,
    completedLessons: 9,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    name: 'Public Speaking',
    icon: '🎤',
    description: 'Develop confidence and clarity for presentations and speeches.',
    progress: 40,
    isUnlocked: true,
    totalLessons: 8,
    completedLessons: 3,
    color: 'from-rose-500 to-pink-500',
  },
  {
    id: 5,
    name: 'Grammar Fundamentals',
    icon: '📚',
    description: 'Master English grammar rules and improve your writing and speaking.',
    progress: 95,
    isUnlocked: true,
    totalLessons: 14,
    completedLessons: 13,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 6,
    name: 'Advanced Vocabulary',
    icon: '🧠',
    description: 'Expand your vocabulary with advanced words and phrases.',
    progress: 70,
    isUnlocked: false,
    totalLessons: 12,
    completedLessons: 0,
    color: 'from-purple-500 to-pink-500',
    locked: true,
  },
];

const MOCK_STATS = {
  sessions: 18,
  fluencyScore: 82,
  pronunciationAccuracy: 86,
  wordsLearned: 342,
  streak: 8,
  avgScore: 88,
};

const MOCK_RECENT_ACTIVITY = [
  { type: 'lesson', title: 'Business Presentation', date: 'Today, 2:30 PM', score: '92%' },
  { type: 'challenge', title: 'Interview Practice', date: 'Yesterday, 4:00 PM', score: '85%' },
  { type: 'lesson', title: 'Everyday Conversation', date: '2 days ago', score: '78%' },
];

// ============================================================
// 2. PRICING PLANS
// ============================================================
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 79,
    currency: '₹',
    period: '/month',
    description: 'Start your English learning journey',
    features: [
      '3 speaking sessions per week',
      'Basic pronunciation analysis',
      'Vocabulary flashcards',
      'Grammar practice',
      'Email support',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: 199,
    currency: '₹',
    period: '/month',
    description: 'Most popular for fast progress',
    features: [
      'Unlimited speaking sessions',
      'Advanced pronunciation analysis',
      'Real-time feedback',
      'Business English modules',
      'Mock interviews',
      'Fluency tracking',
      'Priority support',
      'Certificate of completion',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'For teams and organizations',
    features: [
      'Everything in Professional',
      'Team management dashboard',
      'Custom lesson plans',
      'Dedicated account manager',
      '24/7 phone support',
      'API access',
      'White-label options',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

// ============================================================
// 3. MAIN COMPONENT
// ============================================================
export default function SpokenEnglishPrePurchase() {
  const { user } = useAuth();
  const [languagePreference, setLanguagePreference] = useState('english');
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  // ---- Handlers ----
  const handleUpgradeClick = (plan) => {
    setSelectedPlan(plan);
    setIsUpgradeModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert('🚀 Redirecting to secure checkout...');
    setIsCheckoutModalOpen(false);
  };

  // ---- Render: Locked Widget Overlay ----
  const LockedWidget = ({ children, featureName = 'advanced feature' }) => (
    <div className="relative group rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-300/50">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center max-w-[200px]">
          <Lock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800">Unlock this feature</p>
          <p className="text-xs text-slate-500 mb-3">Get full access to all tools</p>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-1 mx-auto"
          >
            <Crown className="w-3 h-3" />
            Upgrade
          </button>
        </div>
      </div>
      <div className="opacity-40 pointer-events-none select-none">{children}</div>
    </div>
  );

  // ---- Render: Upgrade Modal ----
  const renderUpgradeModal = () => (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative">
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
          onClick={() => setIsUpgradeModalOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
            <Mic2 className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Unlock Spoken English Pro</h2>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto">
            Get unlimited speaking practice, real-time feedback, and personalized learning paths. Start your free trial today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 p-6 text-center transition-all hover:shadow-xl ${
                plan.popular ? 'border-emerald-500 shadow-lg shadow-emerald-100 relative' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
              <div className="mt-2">
                <span className="text-3xl font-bold text-slate-800">
                  {plan.currency}
                  {plan.price}
                </span>
                {plan.period && <span className="text-slate-500 text-sm">{plan.period}</span>}
              </div>
              <p className="text-sm text-slate-600 mt-1">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-left">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200 hover:scale-105'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
                onClick={() => handleUpgradeClick(plan)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">7‑day free trial • Cancel anytime • No credit card required</p>
      </div>
    </div>
  );

  // ---- Render: Checkout Modal ----
  const renderCheckoutModal = () => (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">
            <CreditCard className="w-5 h-5 inline mr-2 text-emerald-600" />
            Complete Purchase
          </h3>
          <button className="text-slate-400 hover:text-slate-600" onClick={() => setIsCheckoutModalOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-slate-600">You are subscribing to</p>
          <p className="text-xl font-bold text-slate-800">
            {selectedPlan?.name || 'Professional'}
            <span className="text-sm font-normal text-slate-500 ml-2">
              {selectedPlan?.currency}
              {selectedPlan?.price}
              {selectedPlan?.period}
            </span>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
            <input
              type="text"
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            className="flex-1 py-3 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
            onClick={() => setIsCheckoutModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-200 hover:scale-105 transition-all"
            onClick={handlePaymentSubmit}
          >
            <CheckCircle2 className="w-4 h-4 inline mr-2" />
            Pay Now
          </button>
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">Secure payment • 7‑day free trial • Cancel anytime</p>
      </div>
    </div>
  );

  // ---- Render: Subject Card (Mock) ----
  const renderSubjectCard = (subject) => {
    const isLocked = subject.locked || false;
    const progress = subject.progress || 0;

    return (
      <div className={`bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all ${isLocked ? 'opacity-75' : ''}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${subject.color} flex items-center justify-center text-2xl text-white`}>
            {subject.icon}
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-slate-800 text-sm">{subject.name}</h4>
            <p className="text-xs text-slate-500">{subject.completedLessons}/{subject.totalLessons} lessons</p>
          </div>
          {isLocked ? (
            <Lock className="w-4 h-4 text-slate-400" />
          ) : (
            <span className="text-xs font-semibold text-emerald-600">{progress}%</span>
          )}
        </div>
        <p className="text-xs text-slate-600 mb-3 line-clamp-2">{subject.description}</p>
        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${subject.color} rounded-full transition-all`}
            style={{ width: `${isLocked ? 0 : progress}%` }}
          />
        </div>
        {isLocked && (
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="mt-3 w-full text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-1.5 rounded-lg font-medium hover:scale-105 transition-transform flex items-center justify-center gap-1"
          >
            <Crown className="w-3 h-3" />
            Unlock Subject
          </button>
        )}
      </div>
    );
  };

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* ----- TOP BANNER – Upgrade CTA ----- */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2.5 text-center">
        <p className="text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
          <Crown className="w-4 h-4" />
          🎯 You're viewing a demo. 
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-white text-emerald-600 px-4 py-0.5 rounded-full font-semibold text-xs hover:bg-emerald-50 transition shadow-md flex items-center gap-1"
          >
            Unlock Full Access <ArrowRight className="w-3 h-3" />
          </button>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* ----- HEADER (matches your dashboard) ----- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Spoken
              </span>{' '}
              English
            </h1>
            <p className="text-muted mb-0 text-sm text-slate-500">Select your spoken-language preference and follow the instructions.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <label htmlFor="spoken-language-select-demo" className="mb-0 fw-semibold text-sm text-slate-600">Language:</label>
            <select
              id="spoken-language-select-demo"
              className="form-select bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"
              value={languagePreference}
              onChange={(e) => setLanguagePreference(e.target.value)}
            >
              <option value="english">English</option>
              <option value="odia">Odia</option>
              <option value="hindi">Hindi</option>
            </select>
          </div>
        </div>

        {/* ----- STATS ROW ----- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Mic2, label: 'Speaking Sessions', value: MOCK_STATS.sessions },
            { icon: TrendingUp, label: 'Fluency Score', value: `${MOCK_STATS.fluencyScore}%` },
            { icon: BookOpen, label: 'Words Learned', value: MOCK_STATS.wordsLearned },
            { icon: Flame, label: 'Day Streak', value: `${MOCK_STATS.streak} days` },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ----- ACTION BUTTONS (matches your dashboard) ----- */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md shadow-emerald-200 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Continue Learning
          </button>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-white border border-slate-200 text-slate-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-slate-50 transition flex items-center gap-2"
          >
            <RotateCw className="w-4 h-4" />
            Reset Progress
          </button>
          <span className="text-xs text-slate-400 ml-2">⚡ Features locked – upgrade to access</span>
        </div>

        {/* ----- PROGRESS SUMMARY (Locked) ----- */}
        <LockedWidget featureName="Progress Summary">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">88%</div>
                <div className="text-xs text-slate-500">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">5/6</div>
                <div className="text-xs text-slate-500">Subjects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">92%</div>
                <div className="text-xs text-slate-500">Avg. Lesson Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-800">8</div>
                <div className="text-xs text-slate-500">Day Streak</div>
              </div>
            </div>
          </div>
        </LockedWidget>

        {/* ----- SUBJECT GRID (matches your dashboard) ----- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_SUBJECTS.map((subject) => (
            <div key={subject.id}>
              {subject.locked ? (
                <LockedWidget featureName={`${subject.name} Subject`}>
                  {renderSubjectCard(subject)}
                </LockedWidget>
              ) : (
                <div className="relative">
                  {renderSubjectCard(subject)}
                  <div className="absolute inset-0 bg-emerald-600/5 backdrop-blur-[1px] rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setIsUpgradeModalOpen(true)}
                      className="bg-white/90 backdrop-blur-md text-slate-800 px-4 py-2 rounded-xl font-semibold shadow-lg flex items-center gap-2 text-sm"
                    >
                      <Play className="w-4 h-4" />
                      Start Learning
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ----- RECENT ACTIVITY ----- */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-500" />
              <h3 className="font-semibold text-slate-800">Recent Activity</h3>
            </div>
            <button className="text-xs text-emerald-600 font-medium hover:text-emerald-800 flex items-center gap-1">
              View All <ChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {MOCK_RECENT_ACTIVITY.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {activity.type === 'lesson' ? '📚' : '🎯'} {activity.title}
                  </p>
                  <p className="text-xs text-slate-500">{activity.date}</p>
                </div>
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  {activity.score}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ----- CALL TO ACTION ----- */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-emerald-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Master</span> Spoken English?
              </h2>
              <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
                Get unlimited speaking practice, real-time feedback, and personalized learning paths.
              </p>
              <button
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 inline-flex items-center gap-3"
                onClick={() => setIsUpgradeModalOpen(true)}
              >
                <Crown className="w-5 h-5" />
                Start Free Trial
              </button>
              <p className="text-emerald-200 text-sm mt-4">No credit card required • 7‑day free trial</p>
            </div>
          </div>
        </div>
      </div>

      {/* ----- MODALS ----- */}
      {isUpgradeModalOpen && renderUpgradeModal()}
      {isCheckoutModalOpen && renderCheckoutModal()}
    </div>
  );
}