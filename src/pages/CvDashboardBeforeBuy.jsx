// ============================================================
// PrePurchaseDashboard.jsx (FIXED)
// All icons are imported. No more ReferenceError.
// ============================================================

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

// ----- ALL ICONS IMPORTED -----
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
  X,                 // <-- added X (used in modals)
  FileSearch,        // <-- this was missing!
} from 'lucide-react';

// ============================================================
// 1. MOCK DATA – Impressive pre-filled data
// ============================================================
const DEMO_STATS = {
  sessions: 24,
  avgScore: 88,
  questionsAnswered: 156,
  streak: 12,
};

const DEMO_SKILLS = [
  { name: 'React.js', value: 92 },
  { name: 'Node.js', value: 85 },
  { name: 'Python', value: 78 },
  { name: 'AWS', value: 72 },
  { name: 'Docker', value: 68 },
];

const DEMO_STRENGTHS = ['Frontend Development', 'API Design', 'Problem Solving'];
const DEMO_GAPS = ['System Design', 'Cloud Architecture', 'AI/ML'];

const DEMO_ATS_CONTENT = {
  headline: 'Senior Full Stack Developer with 4+ years of experience...',
  skills: ['React.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'],
};

const DEMO_INTERVIEW_SESSIONS = [
  { title: 'Frontend Interview', date: 'Today, 10:30 AM', score: '92%' },
  { title: 'System Design', date: 'Yesterday, 4:00 PM', score: '78%' },
  { title: 'Behavioral Round', date: 'Dec 15, 2023', score: '85%' },
];

// ============================================================
// 2. PRICING PLANS
// ============================================================
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 99,
    currency: '₹',
    period: '/month',
    description: 'Perfect for job seekers starting their journey',
    features: [
      '3 CV analyses per month',
      '5 ATS content generations',
      'Access to 5 templates',
      'Basic AI Interview Coach',
      'Email support',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: 299,
    currency: '₹',
    period: '/month',
    description: 'Most popular for serious career growth',
    features: [
      'Unlimited CV analyses',
      'Unlimited ATS content',
      'Access to all 20+ templates',
      'Full AI Interview Coach',
      'Career path generation',
      'Priority support',
      'Portfolio content generator',
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
      'Team management',
      'Custom template creation',
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
export default function PrePurchaseDashboard() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-300/50">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center max-w-[200px]">
          <Lock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800">Unlock this feature</p>
          <p className="text-xs text-slate-500 mb-3">Get full access to all tools</p>
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-1 mx-auto"
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
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Unlock Career Vault Pro</h2>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto">
            Get unlimited access to all AI tools, templates, and features. Start your free trial today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border-2 p-6 text-center transition-all hover:shadow-xl ${
                plan.popular ? 'border-indigo-600 shadow-lg shadow-indigo-100 relative' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
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
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 hover:scale-105'
                    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
                onClick={() => handleUpgradeClick(plan)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">14‑day free trial • Cancel anytime • No credit card required</p>
      </div>
    </div>
  );

  // ---- Render: Checkout Modal ----
  const renderCheckoutModal = () => (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-slate-800">
            <CreditCard className="w-5 h-5 inline mr-2 text-indigo-600" />
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
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
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
            className="flex-1 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 hover:scale-105 transition-all"
            onClick={handlePaymentSubmit}
          >
            <CheckCircle2 className="w-4 h-4 inline mr-2" />
            Pay Now
          </button>
        </div>
        <p className="text-xs text-slate-400 text-center mt-4">Secure payment • 14‑day free trial • Cancel anytime</p>
      </div>
    </div>
  );

  // ---- Render: CV Analysis Widget (Mock) ----
  const renderCvAnalysisWidget = () => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-blue-50">
            <FileSearch className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-semibold text-slate-800">CV Analysis</h3>
        </div>
        <span className="text-xs text-slate-400">Last analyzed: Today</span>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1">
          <div className="text-sm text-slate-500">Match Score</div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-800">88%</span>
            <div className="flex-1 bg-slate-200 rounded-full h-2">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{ width: '88%' }} />
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-slate-500">File</div>
          <div className="text-sm font-medium text-slate-700">Resume_2024.pdf</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-100">
          ✅ {DEMO_STRENGTHS.length} Strengths
        </span>
        <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-100">
          📈 {DEMO_GAPS.length} Gaps
        </span>
        <span className="text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
          💡 3 Recommendations
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {DEMO_SKILLS.slice(0, 4).map((skill, idx) => (
          <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
            {skill.name}
          </span>
        ))}
        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">+1 more</span>
      </div>
    </div>
  );

  // ---- Render: ATS Content Widget (Mock) ----
  const renderAtsContentWidget = () => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-50">
            <ClipboardCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h3 className="font-semibold text-slate-800">ATS Content</h3>
        </div>
        <button className="text-xs text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1">
          View All <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="mb-3">
        <div className="text-sm text-slate-500">Headline</div>
        <p className="text-sm text-slate-800 font-medium truncate">{DEMO_ATS_CONTENT.headline}</p>
      </div>

      <div>
        <div className="text-sm text-slate-500">Key Skills</div>
        <div className="flex flex-wrap gap-1.5 mt-1">
          {DEMO_ATS_CONTENT.skills.slice(0, 4).map((skill, idx) => (
            <span key={idx} className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
          <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full">+2</span>
        </div>
      </div>
    </div>
  );

  // ---- Render: Interview Coach Widget (Mock) ----
  const renderInterviewWidget = () => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-rose-50">
            <Mic2 className="w-5 h-5 text-rose-600" />
          </div>
          <h3 className="font-semibold text-slate-800">Interview Coach</h3>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">High Readiness</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="text-center p-2 bg-slate-50 rounded-xl">
          <div className="text-lg font-bold text-slate-800">{DEMO_STATS.sessions}</div>
          <div className="text-[10px] text-slate-500">Sessions</div>
        </div>
        <div className="text-center p-2 bg-slate-50 rounded-xl">
          <div className="text-lg font-bold text-slate-800">{DEMO_STATS.avgScore}%</div>
          <div className="text-[10px] text-slate-500">Avg Score</div>
        </div>
        <div className="text-center p-2 bg-slate-50 rounded-xl">
          <div className="text-lg font-bold text-emerald-600">{DEMO_STATS.avgScore + 4}%</div>
          <div className="text-[10px] text-slate-500">Best Score</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {['JavaScript', 'React', 'System Design', 'Behavioral'].map((topic, idx) => (
          <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );

  // ---- Render: Skill Analysis Widget (Mock) ----
  const renderSkillAnalysisWidget = () => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 rounded-xl bg-amber-50">
          <BarChart3 className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="font-semibold text-slate-800">Skill Analysis</h3>
      </div>

      <div className="space-y-3">
        {DEMO_SKILLS.map((skill, idx) => (
          <div key={idx}>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-700">{skill.name}</span>
              <span className="font-semibold text-slate-800">{skill.value}%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-1.5">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // ---- Render: Recent Activity (Mock) ----
  const renderRecentActivity = () => (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-slate-500" />
          <h3 className="font-semibold text-slate-800">Recent Activity</h3>
        </div>
        <button className="text-xs text-indigo-600 font-medium hover:text-indigo-800 flex items-center gap-1">
          View All <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800 text-sm">CV Analyzed</span>
              <span className="text-xs text-slate-400">2 hours ago</span>
            </div>
            <p className="text-sm text-slate-500">Resume_2024.pdf – 12 skills identified</p>
          </div>
        </div>
        <div className="flex items-start gap-3 pb-4 border-b border-slate-100">
          <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600">
            <ClipboardCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800 text-sm">ATS Content Generated</span>
              <span className="text-xs text-slate-400">5 hours ago</span>
            </div>
            <p className="text-sm text-slate-500">Senior Full Stack Developer – 3 versions</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-rose-50 text-rose-600">
            <Mic2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-slate-800 text-sm">Interview Practice</span>
              <span className="text-xs text-slate-400">1 day ago</span>
            </div>
            <p className="text-sm text-slate-500">System Design – Score: 85%</p>
          </div>
        </div>
      </div>
    </div>
  );

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* ----- TOP BANNER – Upgrade CTA ----- */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 text-center">
        <p className="text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
          <Crown className="w-4 h-4" />
          🚀 You're viewing a demo. 
          <button
            onClick={() => setIsUpgradeModalOpen(true)}
            className="bg-white text-indigo-600 px-4 py-0.5 rounded-full font-semibold text-xs hover:bg-indigo-50 transition shadow-md flex items-center gap-1"
          >
            Unlock Full Access <ArrowRight className="w-3 h-3" />
          </button>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* ----- HEADER ----- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
                Career Vault{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <span className="text-xs bg-gradient-to-r from-amber-400 to-orange-500 text-white px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Demo
              </span>
            </div>
            <p className="text-slate-600 text-sm mt-0.5">
              Your AI-powered career acceleration platform
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                GU
              </div>
              <span>Guest User</span>
            </div>
            <button
              onClick={() => setIsUpgradeModalOpen(true)}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-indigo-200 transition flex items-center gap-2"
            >
              <Crown className="w-4 h-4" />
              Upgrade to Pro
            </button>
          </div>
        </div>

        {/* ----- STATS ROW ----- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Trophy, label: 'Sessions Completed', value: DEMO_STATS.sessions },
            { icon: TrendingUp, label: 'Average Score', value: `${DEMO_STATS.avgScore}%` },
            { icon: BarChart3, label: 'Questions Answered', value: DEMO_STATS.questionsAnswered },
            { icon: Award, label: 'Day Streak', value: `${DEMO_STATS.streak} days` },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
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

        {/* ----- TAB NAVIGATION (Demonstrating full product) ----- */}
        <div className="flex gap-1 border-b border-slate-200 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'dashboard'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('interviewer')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'interviewer'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Mic2 className="w-4 h-4" />
            AI Interviewer
          </button>
          <button
            onClick={() => setActiveTab('ats')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'ats'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <ClipboardCheck className="w-4 h-4" />
            ATS Content
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'skills'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Skill Analysis
          </button>
        </div>

        {/* ----- TAB CONTENT (All widgets are partially locked) ----- */}
        <div className="space-y-6">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LockedWidget featureName="CV Analysis">
                  {renderCvAnalysisWidget()}
                </LockedWidget>
                <LockedWidget featureName="ATS Content">
                  {renderAtsContentWidget()}
                </LockedWidget>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LockedWidget featureName="Interview Coach">
                  {renderInterviewWidget()}
                </LockedWidget>
                <LockedWidget featureName="Skill Analysis">
                  {renderSkillAnalysisWidget()}
                </LockedWidget>
              </div>
              <LockedWidget featureName="Activity Feed">
                {renderRecentActivity()}
              </LockedWidget>
            </>
          )}

          {/* AI Interviewer Tab */}
          {activeTab === 'interviewer' && (
            <div className="space-y-6">
              <LockedWidget featureName="AI Interviewer">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Mic2 className="w-5 h-5 text-rose-600" />
                    AI Interview Coach – Practice Sessions
                  </h3>
                  <div className="space-y-3">
                    {DEMO_INTERVIEW_SESSIONS.map((session, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                        <div>
                          <p className="font-semibold text-slate-800">{session.title}</p>
                          <p className="text-xs text-slate-500">{session.date}</p>
                        </div>
                        <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                          {session.score}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold shadow-md shadow-rose-200 hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Mic2 className="w-4 h-4" />
                    Start Mock Interview
                  </button>
                </div>
              </LockedWidget>
            </div>
          )}

          {/* ATS Content Tab */}
          {activeTab === 'ats' && (
            <div className="space-y-6">
              <LockedWidget featureName="ATS Content Generation">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <ClipboardCheck className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-xl font-bold text-slate-800">AI‑Generated ATS Content</h2>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Based on your uploaded CV, AI has generated the following ATS‑optimized content.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700">Headline</label>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800">
                        {DEMO_ATS_CONTENT.headline}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700">Key Skills</label>
                      <div className="flex flex-wrap gap-2">
                        {DEMO_ATS_CONTENT.skills.map((skill, idx) => (
                          <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm border border-indigo-100">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold shadow-md shadow-indigo-200 hover:scale-105 transition-all flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Export as PDF
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-6 py-2 rounded-xl font-semibold hover:bg-slate-200 transition flex items-center gap-2">
                      <Plus className="w-4 h-4" />
                      Generate for Target Role
                    </button>
                  </div>
                </div>
              </LockedWidget>
            </div>
          )}

          {/* Skill Analysis Tab */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <LockedWidget featureName="Full Skill Analysis">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <BarChart3 className="w-6 h-6 text-amber-600" />
                    <h2 className="text-xl font-bold text-slate-800">Skill Assessment</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-3">💪 Strengths</h4>
                      <ul className="space-y-2">
                        {DEMO_STRENGTHS.map((s, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-3">📈 Areas to Improve</h4>
                      <ul className="space-y-2">
                        {DEMO_GAPS.map((s, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                            <Target className="w-4 h-4 text-amber-500" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-800">AI-Generated Career Path Available</span>
                    </div>
                    <p className="text-xs text-indigo-600 mt-1">5 recommended courses to bridge your skill gaps</p>
                  </div>
                </div>
              </LockedWidget>
            </div>
          )}
        </div>

        {/* ----- CALL TO ACTION SECTION ----- */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Supercharge</span> Your Career?
              </h2>
              <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
                Get unlimited access to AI CV analysis, ATS content generation, interview coaching, and more.
              </p>
              <button
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 inline-flex items-center gap-3"
                onClick={() => setIsUpgradeModalOpen(true)}
              >
                <Crown className="w-5 h-5" />
                Start Free Trial
              </button>
              <p className="text-indigo-200 text-sm mt-4">No credit card required • 14‑day free trial</p>
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