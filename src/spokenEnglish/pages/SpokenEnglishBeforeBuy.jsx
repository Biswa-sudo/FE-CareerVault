// ============================================================
// SpokenEnglishPrePurchase.jsx
// Clean, focused dashboard showcasing BentureAI Spoken English
// Highlights: Practice, Scenarios, Speech Recognition, Levels
// ============================================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

import {
  Sparkles,
  Mic2,
  Target,
  Trophy,
  Clock,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  TrendingUp,
  BookOpen,
  Star,
  Zap,
  ChevronRight,
  Award,
  Lock,
  Crown,
  CreditCard,
  X,
  Play,
  Users,
  Globe,
  Headphones,
  GraduationCap,
  Flame,
  RotateCw,
  ChevronDown,
  MessageSquare,
  Volume2,
  Brain,
  Rocket,
  Shield,
  Heart,
} from 'lucide-react';

// ============================================================
// 1. FEATURES DATA – What BentureAI Spoken English Offers
// ============================================================
const FEATURES = [
  {
    id: 'practice',
    icon: Mic2,
    title: 'Practice & Learn at Once',
    description: 'Speak, listen, and learn simultaneously. BentureAI combines practice with learning so you improve naturally with every session.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'scenarios',
    icon: Target,
    title: 'Scenario-Based Practice',
    description: 'Practice real-life situations – interviews, meetings, presentations, travel, and daily conversations. Build confidence for every scenario.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    id: 'speech-recognition',
    icon: Volume2,
    title: 'AI Speech Recognition',
    description: 'Our advanced speech recognition analyzes your accent, pronunciation, and fluency. Get instant feedback and improve your accent naturally.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    id: 'levels',
    icon: GraduationCap,
    title: 'Progressive Levels',
    description: 'Start from beginner and advance step by step. Clear every level by speaking – from basic sentences to fluent conversations.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    id: 'inclusive',
    icon: Users,
    title: 'For Everyone',
    description: 'Designed for absolute beginners – even a 4th-grade student can start speaking. No prior knowledge required.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
  },
  {
    id: 'progressive',
    icon: TrendingUp,
    title: 'Gradual Excellence',
    description: 'Master basic sentences first, then progressively tackle complex conversations. The bar raises gradually to make you excellent.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
];

// ============================================================
// 2. LEARNING PATH – Beginner to Advanced
// ============================================================
const LEARNING_PATH = [
  { level: 'Beginner', label: 'Basic Sentences', icon: '🌱', description: 'Start with simple words and everyday phrases' },
  { level: 'Elementary', label: 'Simple Conversations', icon: '🌿', description: 'Practice short dialogues and common situations' },
  { level: 'Intermediate', label: 'Confident Speaking', icon: '🌳', description: 'Speak with confidence in various contexts' },
  { level: 'Advanced', label: 'Fluent Communication', icon: '🚀', description: 'Master complex topics and professional conversations' },
  { level: 'Expert', label: 'Native-Like Fluency', icon: '🏆', description: 'Achieve near-native fluency and natural expression' },
];

// ============================================================
// 3. SCENARIOS
// ============================================================
const SCENARIOS = [
  { name: 'Job Interview', icon: '💼', description: 'Practice common interview questions and answers' },
  { name: 'Business Meeting', icon: '📊', description: 'Speak confidently in professional settings' },
  { name: 'Travel', icon: '✈️', description: 'Handle travel situations with ease' },
  { name: 'Daily Life', icon: '🏠', description: 'Master everyday conversations and interactions' },
  { name: 'Presentations', icon: '🎤', description: 'Deliver presentations with clarity and confidence' },
  { name: 'Social Gatherings', icon: '🎉', description: 'Build relationships through effective communication' },
];

// ============================================================
// 4. PRICING PLANS
// ============================================================
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 79,
    currency: '₹',
    period: '/month',
    description: 'Start your English learning journey',
    features: [
      '3 practice sessions per week',
      'Basic speech recognition',
      '5 scenario categories',
      'Progress tracking',
      'Email support',
    ],
    popular: false,
    cta: 'Enquire Now',
  },
  {
    name: 'Professional',
    price: 199,
    currency: '₹',
    period: '/month',
    description: 'Most popular for fast progress',
    features: [
      'Unlimited practice sessions',
      'Advanced speech recognition',
      'All scenario categories',
      'Real-time accent feedback',
      'Level-based progression',
      'Certificate of completion',
      'Priority support',
      'Personalized learning path',
    ],
    popular: true,
    cta: 'Enquire Now',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: '',
    description: 'For schools and organizations',
    features: [
      'Everything in Professional',
      'Team/classroom dashboard',
      'Custom lesson plans',
      'Dedicated account manager',
      '24/7 phone support',
      'Bulk pricing',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

// ============================================================
// 5. MAIN COMPONENT
// ============================================================
export default function SpokenEnglishPrePurchase() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleUpgradeClick = (plan) => {
    setSelectedPlan(plan);
    setIsUpgradeModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert('🚀 Redirecting to secure checkout...');
    setIsCheckoutModalOpen(false);
  };

  // ---- Render: Locked Widget Overlay (fixed) ----
  const LockedWidget = ({ children }) => (
    <div className="relative group rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-300/50">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center max-w-[200px]">
          <Lock className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800">Unlock This Feature</p>
          <p className="text-xs text-slate-500 mb-3">Get full access to all tools</p>
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-1 mx-auto"
          >
            <Crown className="w-3 h-3" />
            Upgrade
          </button>
        </div>
      </div>
      {/* children can be rendered underneath, but we keep it simple */}
      {children}
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
            Get unlimited speaking practice, real-time feedback, and personalized learning paths.
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
                onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-4">7-day free trial • Cancel anytime • No credit card required</p>
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
        <p className="text-xs text-slate-400 text-center mt-4">Secure payment • 7-day free trial • Cancel anytime</p>
      </div>
    </div>
  );

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white">
      {/* ----- TOP BANNER ----- */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2.5 text-center">
        <p className="text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
          <Crown className="w-4 h-4" />
          Start your spoken English journey today.
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
            className="bg-white text-emerald-600 px-4 py-0.5 rounded-full font-semibold text-xs hover:bg-emerald-50 transition shadow-md flex items-center gap-1"
          >
            Unlock Full Access <ArrowRight className="w-3 h-3" />
          </button>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* ----- HEADER ----- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Spoken
              </span>{' '}
              English
            </h1>
            <p className="text-slate-500 text-sm mt-1">Practice. Speak. Excel. Powered by BentureAI.</p>
          </div>
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
            className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md shadow-emerald-200 hover:scale-105 transition-all flex items-center gap-2"
          >
            Buy Now
          </button>
        </div>

        {/* ----- HERO / VALUE PROP ----- */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-emerald-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Mic2 className="w-8 h-8" />
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">AI-Powered</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Speak English with <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Confidence</span>
            </h2>
            <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
              Practice spoken English and learn effortlessly. From basic sentences to fluent conversations — 
              BentureAI guides you every step of the way.
            </p>
            <button
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
              className="mt-6 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-xl font-bold shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Proceed to Buy
            </button>
            {/* <p className="text-emerald-200 text-sm mt-3">No credit card required • 7-day free trial</p> */}
          </div>
        </div>

        {/* ----- FEATURES GRID ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Why BentureAI</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Everything you need to <span className="text-emerald-600">master spoken English</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className={`p-3 rounded-xl ${feature.bgColor} w-fit mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ----- LEARNING PATH ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Learning Path</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              From <span className="text-emerald-600">Beginner</span> to <span className="text-emerald-600">Fluent</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Progressive levels designed to raise the bar gradually</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {LEARNING_PATH.map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{step.icon}</div>
                <div className="text-xs font-bold text-emerald-600 mb-1">{step.level}</div>
                <div className="text-sm font-semibold text-slate-800">{step.label}</div>
                <div className="text-xs text-slate-500 mt-1">{step.description}</div>
                {idx < LEARNING_PATH.length - 1 && (
                  <div className="hidden md:block text-slate-300 text-xs mt-2">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ----- SCENARIOS ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Scenarios</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Practice for <span className="text-emerald-600">Every Situation</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Build confidence in any context</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SCENARIOS.map((scenario, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md transition-all">
                <div className="text-2xl mb-1">{scenario.icon}</div>
                <div className="text-xs font-semibold text-slate-800">{scenario.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- CALL TO ACTION ----- */}
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl shadow-emerald-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Start Speaking <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Today</span>
            </h2>
            <p className="text-emerald-100 text-base max-w-2xl mx-auto mb-6">
              Join thousands of learners who have transformed their spoken English with BentureAI.
              From basic sentences to fluent conversations — your journey starts here.
            </p>
            <button
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-xl font-bold shadow-lg shadow-emerald-500/30 transition-all hover:scale-105 inline-flex items-center gap-3"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`)}
            >
              <Rocket className="w-5 h-5" />
             Get It Now
            </button>
            {/* <p className="text-emerald-200 text-sm mt-3">No credit card required • 7-day free trial • Cancel anytime</p> */}
          </div>
        </div>
      </div>

      {/* ----- MODALS ----- */}
      {isUpgradeModalOpen && renderUpgradeModal()}
      {isCheckoutModalOpen && renderCheckoutModal()}
    </div>
  );
}