// ============================================================
// SpokenEnglishPrePurchase.jsx
// Clean, focused dashboard showcasing BentureAI Spoken English
// Highlights: Practice, Scenarios, Speech Recognition, Levels
// ============================================================

import React, { useState,useEffect } from 'react';
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
  Briefcase as BriefcaseIcon,
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

  // Limited-time offer countdown.
  // It starts at 3 days, 12 hours, 45 minutes and 20 seconds,
  // ticks every second, and automatically resets when it reaches zero.
  const OFFER_DURATION_SECONDS = (3 * 24 * 60 * 60) + (12 * 60 * 60) + (45 * 60) + 20;
  const [offerSecondsLeft, setOfferSecondsLeft] = useState(OFFER_DURATION_SECONDS);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOfferSecondsLeft((previous) =>
        previous <= 1 ? OFFER_DURATION_SECONDS : previous - 1
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const offerDays = Math.floor(offerSecondsLeft / 86400);
  const offerHours = Math.floor((offerSecondsLeft % 86400) / 3600);
  const offerMinutes = Math.floor((offerSecondsLeft % 3600) / 60);
  const offerSeconds = offerSecondsLeft % 60;

  const handleUpgradeClick = (plan) => {
    setSelectedPlan(plan);
    setIsUpgradeModalOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handlePaymentSubmit = () => {
    alert('🚀 Redirecting to secure checkout...');
    setIsCheckoutModalOpen(false);
  };

  useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const utmData = {
    utm_source: params.get("utm_source"),
    utm_medium: params.get("utm_medium"),
    utm_campaign: params.get("utm_campaign"),
    utm_content: params.get("utm_content"),
    utm_term: params.get("utm_term"),
    fbclid: params.get("fbclid"),
  };

  // Only save if the visitor actually came with attribution data
  if (
    utmData.utm_source ||
    utmData.utm_medium ||
    utmData.utm_campaign ||
    utmData.utm_content ||
    utmData.utm_term ||
    utmData.fbclid
  ) {
    localStorage.setItem("bentureai_attribution", JSON.stringify(utmData));
  }
}, []);

  useEffect(() => {
  if (window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: "BentureAI Spoken English",
      content_category: "Education",
    });
  }
}, []);

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
  const goToPayment = () =>
    navigate(`/payment?plan=${encodeURIComponent('spoken-english')}`);

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pb-10 lg:pt-14">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
            {/* Copy */}
            <div className="relative z-10 max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-xs font-bold text-emerald-700 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                AI-Powered Learning
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-900 sm:text-5xl lg:text-[58px]">
                <span className="text-emerald-600">Spoken</span> English
              </h1>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[46px]">
                Practice. Speak. Excel.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                From hesitant words to confident conversations —
                <span className="font-semibold text-slate-800"> BentureAI </span>
                guides you every step of the way.
              </p>

              <div className="mt-7 grid max-w-xl grid-cols-3 gap-2 sm:gap-3">
                {[
                  { icon: MessageSquare, title: "Speak", sub: "Naturally" },
                  { icon: BarChart3, title: "Build", sub: "Confidence" },
                  { icon: Star, title: "Real-Life", sub: "Practice" },
                ].map(({ icon: Icon, title, sub }) => (
                  <div
                    key={title}
                    className="flex items-center gap-2 rounded-2xl border border-white bg-white/80 px-3 py-3 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-bold text-slate-700 sm:text-sm">
                      {title}<br />
                      <span className="font-medium text-slate-500">{sub}</span>
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={goToPayment}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Start Learning Now <ArrowRight className="h-4 w-4" />
                </button>
               
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["A", "R", "S", "P"].map((letter, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-xs leading-5 text-slate-500">
                  Join <span className="font-extrabold text-emerald-600"> learners</span><br />
                  growing with BentureAI
                </p>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative min-h-[390px] lg:min-h-[470px]">
              <div className="absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/50 blur-[1px] sm:h-[390px] sm:w-[390px]" />
              <div className="absolute right-2 top-10 z-20 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Users className="h-5 w-5 text-emerald-600" />
                  Better Conversations
                </div>
              </div>
              <div className="absolute right-0 top-28 z-20 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <BriefcaseIcon className="h-5 w-5 text-teal-600" />
                  More Opportunities
                </div>
              </div>
              <div className="absolute right-4 top-48 z-20 hidden rounded-2xl border border-white bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Trophy className="h-5 w-5 text-amber-500" />
                  A Confident You
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 h-[410px] w-[410px] -translate-x-1/2 -translate-y-[46%] overflow-hidden rounded-[42%] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 shadow-inner sm:h-[500px] sm:w-[500px]">
                <img
                  src="/spoken-english-hero.webp"
                  alt="Confident learner using BentureAI Spoken English"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute left-3 top-16 z-30 rounded-2xl rounded-bl-md bg-emerald-500 px-4 py-3 text-sm font-bold text-white shadow-xl sm:left-8">
                Hello!<br />
                <span className="font-medium">I can speak<br />English now!</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-1 rounded-[26px] bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 p-5 text-white shadow-2xl shadow-orange-200 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold">
                  Limited Time Offer
                </span>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Get 1 Year Access for Just <span className="text-yellow-100">₹99</span>
                </h2>
                <p className="mt-1 text-sm text-orange-50">
                  Instead of ₹99/month, pay only ₹99 for the entire year. That's <b>92% off!</b>
                </p>
                <p className="mt-0.5 text-xs text-orange-100">Offer valid for a limited period.</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  [offerDays, "Days"],
                  [offerHours, "Hours"],
                  [offerMinutes, "Mins"],
                  [offerSeconds, "Secs"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    className="min-w-[52px] rounded-xl bg-white/90 px-2 py-2 text-center text-orange-600 shadow-sm tabular-nums"
                  >
                    <div className="text-lg font-extrabold leading-none">
                      {String(num).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[9px] font-bold">{label}</div>
                  </div>
                ))}
              </div>
              <button
                onClick={goToPayment}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-orange-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
              >
                <Rocket className="h-4 w-4" /> Claim Annual Offer <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">Why BentureAI</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Everything you need to <span className="text-emerald-600">master spoken English</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">A complete learning experience designed for real progress</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${feature.bgColor} transition group-hover:scale-105`}>
                    <Icon className={`h-6 w-6 ${feature.textColor}`} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-5 text-slate-500">{feature.description}</p>
                  </div>
                </div>
                <div className="mt-4 flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-br from-emerald-50 to-cyan-50 px-4 sm:px-6 lg:px-0">
        <div className="px-4 py-12 sm:px-8 lg:px-10">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">Learning Path</span>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From <span className="text-emerald-600">Beginner</span> to <span className="text-emerald-600">Fluent</span>
            </h2>
            <p className="mt-2 text-sm text-slate-500">Step-by-step levels designed to build your confidence</p>
          </div>

          <div className="relative mt-8 grid gap-3 md:grid-cols-5 md:justify-items-center">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dashed border-emerald-300 md:block" />
            {LEARNING_PATH.map((step, idx) => (
              <div key={idx} className="relative z-10 w-full max-w-[220px] rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{step.icon}</div>
                  <div>
                    <div className="text-[11px] font-extrabold text-slate-400">0{idx + 1}</div>
                    <div className="text-xs font-extrabold text-emerald-600">{step.level}</div>
                  </div>
                </div>
                <div className="mt-4 text-sm font-extrabold text-slate-900">{step.label}</div>
                <div className="mt-1 text-xs leading-4 text-slate-500">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-600">Scenarios</span>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Practice for <span className="text-emerald-600">Every Situation</span>
          </h2>
          <p className="mt-2 text-sm text-slate-500">Real-life practice to make you ready for the real world</p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {SCENARIOS.map((scenario, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="text-3xl">{scenario.icon}</div>
              <div className="mt-2 text-xs font-extrabold text-slate-800">{scenario.name}</div>
              <div className="mt-1 text-[10px] leading-4 text-slate-400">{scenario.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL + STATS */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
          <div className="flex items-center gap-4 rounded-3xl bg-gradient-to-r from-sky-50 to-cyan-50 p-5 sm:p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xl font-extrabold text-slate-600 ring-4 ring-white">
              R
            </div>
            <div>
              <div className="text-2xl leading-none text-sky-500">“</div>
              <p className="text-sm italic leading-5 text-slate-600">
                BentureAI helped me go from shy to confident. Now I can speak English in my job interviews without fear.
              </p>
              <p className="mt-2 text-xs font-bold text-slate-500">— Rohan, College Student</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              // { value: "50K+", label: "Happy Learners", icon: Users, tone: "text-emerald-600", bg: "bg-emerald-50" },
              { value: "4.8/5", label: "Average Rating", icon: Star, tone: "text-purple-600", bg: "bg-purple-50" },
              { value: "92%", label: "Reported Improvement", icon: BarChart3, tone: "text-orange-600", bg: "bg-orange-50" },
            ].map(({ value, label, icon: Icon, tone, bg }) => (
              <div key={label} className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${bg} ${tone}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className={`mt-3 text-xl font-extrabold ${tone}`}>{value}</div>
                <div className="mt-0.5 text-[10px] font-medium text-slate-500 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 px-6 py-12 text-center text-white shadow-2xl shadow-emerald-200 sm:px-10">
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-100">Your English journey starts here</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Start Speaking <span className="text-yellow-200">Today</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-emerald-50">
              Join thousands of learners who have transformed their spoken English with BentureAI.
              From basic sentences to fluent conversations — your journey starts here.
            </p>
            <button
              onClick={goToPayment}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-extrabold text-emerald-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              <Rocket className="h-4 w-4" /> Get Started Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {isUpgradeModalOpen && renderUpgradeModal()}
      {isCheckoutModalOpen && renderCheckoutModal()}
    </div>
  );
}