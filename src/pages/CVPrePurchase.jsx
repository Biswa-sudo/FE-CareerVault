// ============================================================
// CareerVaultPrePurchase.jsx
// Pre-Purchase Dashboard for Career Vault
// Showcases: CV Builder, Templates, Document Storage, Portfolio
// ============================================================

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

import {
  Sparkles,
  FileText,
  Upload,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Users,
  Globe2,
  BriefcaseBusiness,
  MessageSquareText,
  Zap,
  CreditCard,
  FolderOpen,
  Plus,
  Download,
  Edit,
  Trash2,
  Eye,
  ChevronRight,
  LayoutTemplate,
  HardDrive,
  Award,
  BookOpen,
  GraduationCap,
  Briefcase,
  Code,
  Mic2,
  Brain,
  Target,
  Trophy,
  Crown,
  Lock,
  X,
  Play,
  Star,
  Rocket,
  Building,
  PenTool,
  FileCheck,
  FolderKanban,
  User,
  Mail,
  Phone,
  MapPin,
  Globe,
} from 'lucide-react';

// ============================================================
// 1. FEATURES DATA
// ============================================================
const FEATURES = [
  {
    id: 'cv-builder',
    icon: PenTool,
    title: 'Professional CV Builder',
    description: 'Create stunning, ATS-friendly CVs with our easy-to-use builder. Choose from multiple professional templates and customize every section.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
  {
    id: 'templates',
    icon: LayoutTemplate,
    title: 'Expert Templates',
    description: 'Access a curated collection of professional CV templates designed for different industries and career levels. Stand out from the crowd.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    id: 'document-storage',
    icon: HardDrive,
    title: 'Secure Document Storage',
    description: 'Store all your career documents – CVs, cover letters, portfolios, certificates – in one secure, encrypted location. Access them anytime.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    id: 'portfolio',
    icon: FolderKanban,
    title: 'Public Portfolio Page',
    description: 'Create a stunning public portfolio page showcasing your work, skills, and achievements. Share it with recruiters and employers.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
//   {
//     id: 'ai-optimization',
//     icon: Brain,
//     title: 'AI CV Optimization',
//     description: 'Get AI-powered suggestions to improve your CV. Optimize keywords, highlight achievements, and increase your chances of getting interviews.',
//     color: 'from-rose-500 to-pink-500',
//     bgColor: 'bg-rose-50',
//     textColor: 'text-rose-600',
//   },
  {
    id: 'one-click-export',
    icon: Download,
    title: 'One-Click PDF Export',
    description: 'Export your CV and documents as professional PDF files instantly. Ready to send to employers or print.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
];

// ============================================================
// 2. MOCK STATS
// ============================================================
const MOCK_STATS = {
  cvsCreated: 8,
  documentsStored: 14,
  portfolioViews: 342,
  templatesUsed: 4,
};

// ============================================================
// 3. TEMPLATE PREVIEWS
// ============================================================
const TEMPLATE_PREVIEWS = [
  { name: 'Classic Professional', icon: '📄', color: 'from-slate-500 to-slate-700' },
  { name: 'Modern Executive', icon: '📋', color: 'from-indigo-500 to-purple-500' },
  { name: 'Creative Portfolio', icon: '🎨', color: 'from-rose-500 to-pink-500' },
  { name: 'Tech Developer', icon: '💻', color: 'from-blue-500 to-cyan-500' },
];

// ============================================================
// 4. PRICING PLANS
// ============================================================
const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 49,
    currency: '₹',
    period: '/month',
    description: 'Perfect for job seekers starting their career',
    features: [
      'Create up to 5 CVs',
      'Access to 10 templates',
      'Basic document storage (50MB)',
      'PDF export',
      'Email support',
    ],
    popular: false,
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: 99,
    currency: '₹',
    period: '/month',
    description: 'Most popular for serious job seekers',
    features: [
      'Unlimited CVs',
      'Access to all 20+ templates',
      'Premium document storage (500MB)',
      'AI CV optimization',
      'Public portfolio page',
      'Priority support',
      'One-click PDF export',
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
      'Custom templates',
      'Dedicated account manager',
      '24/7 phone support',
      'Bulk pricing',
      'White-label options',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

// ============================================================
// 5. MAIN COMPONENT
// ============================================================
export default function CareerVaultPrePurchase() {
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

  // ---- Render: Locked Widget Overlay ----
  const LockedWidget = ({ children }) => (
    <div className="relative group rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-indigo-300/50">
        <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl text-center max-w-[200px]">
          <Lock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-800">Unlock This Feature</p>
          <p className="text-xs text-slate-500 mb-3">Get full access to all tools</p>
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
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
            <BriefcaseBusiness className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Unlock Career Vault Pro</h2>
          <p className="text-slate-600 mt-2 max-w-xl mx-auto">
            Create unlimited CVs, access all templates, get AI optimization, and build your professional portfolio.
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
                onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
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
        <p className="text-xs text-slate-400 text-center mt-4">Secure payment • 7-day free trial • Cancel anytime</p>
      </div>
    </div>
  );

  // ---- Quick Action Card ----
  const QuickActionCard = ({ icon: Icon, title, description, color = 'indigo', onClick }) => {
    const colorMap = {
      indigo: 'from-indigo-500 to-purple-600',
      blue: 'from-blue-500 to-cyan-600',
      emerald: 'from-emerald-500 to-teal-600',
      amber: 'from-amber-500 to-orange-600',
      rose: 'from-rose-500 to-pink-600',
    };

    return (
      <div onClick={onClick} className="cursor-pointer group">
        <div className="bg-white rounded-xl border border-slate-200 p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 h-full">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorMap[color]} text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
          <p className="text-sm text-slate-600 mb-4">{description}</p>
          <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
            Get Started
            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    );
  };

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* ----- TOP BANNER ----- */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 text-center">
        <p className="text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
          <Crown className="w-4 h-4" />
          Build professional CVs, store documents, and create your portfolio.
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            className="bg-white text-indigo-600 px-4 py-0.5 rounded-full font-semibold text-xs hover:bg-indigo-50 transition shadow-md flex items-center gap-1"
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
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Career
              </span>{' '}
              Vault
            </h1>
            <p className="text-slate-500 text-sm mt-1">Build, store, and showcase your professional identity.</p>
          </div>
          <button
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-md shadow-indigo-200 hover:scale-105 transition-all flex items-center gap-2"
          >
            Buy Now
          </button>
        </div>

        {/* ----- HERO / VALUE PROP ----- */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-indigo-200 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FileText className="w-8 h-8" />
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">Professional CV Builder</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Create CVs That <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Get Noticed</span>
            </h2>
            <p className="text-indigo-100 text-base md:text-lg max-w-2xl mx-auto">
              Build professional, ATS-friendly CVs with expert templates. Store documents securely,
              create your portfolio, and showcase your best self to recruiters.
            </p>
           
          </div>
        </div>

        {/* ----- STATS ROW ----- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: FileText, label: 'CVs Created', value: MOCK_STATS.cvsCreated },
            { icon: HardDrive, label: 'Documents Stored', value: MOCK_STATS.documentsStored },
            { icon: Eye, label: 'Portfolio Views', value: MOCK_STATS.portfolioViews },
            { icon: LayoutTemplate, label: 'Templates Used', value: MOCK_STATS.templatesUsed },
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

        {/* ----- FEATURES GRID ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Everything you need to <span className="text-indigo-600">advance your career</span>
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

        {/* ----- TEMPLATE PREVIEWS ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Templates</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Choose from <span className="text-indigo-600">Professional Designs</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Expert-crafted templates for every industry and career level</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TEMPLATE_PREVIEWS.map((template, idx) => (
                <LockedWidget key={idx}>
                  <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center shadow-sm hover:shadow-md transition-all">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${template.color} flex items-center justify-center text-3xl mx-auto mb-3`}>
                      {template.icon}
                    </div>
                    <p className="text-sm font-semibold text-slate-800">{template.name}</p>
                    <p className="text-xs text-slate-500 mt-1">Professional Design</p>
                  </div>
                </LockedWidget>
              ))}
          </div>
        </div>

        {/* ----- QUICK ACTIONS ----- */}
        <div className="mb-10">
          <div className="text-center mb-8">
            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Actions</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mt-2">
              Get started with <span className="text-indigo-600">Career Vault</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickActionCard
              icon={Plus}
              title="Create New CV"
              description="Build a professional CV with our templates"
              color="indigo"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            />
            <QuickActionCard
              icon={Upload}
              title="Upload Document"
              description="Store your documents securely"
              color="blue"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            />
            <QuickActionCard
              icon={LayoutTemplate}
              title="Browse Templates"
              description="Choose from professional designs"
              color="emerald"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            />
            <QuickActionCard
              icon={FolderKanban}
              title="Create Portfolio"
              description="Showcase your work to recruiters"
              color="amber"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            />
          </div>
        </div>

        {/* ----- TRUST SECTION ----- */}
        <div className="mb-10 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">5,000+</span>
              </div>
              <p className="text-xs text-slate-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">DPIIT</span>
              </div>
              <p className="text-xs text-slate-600">Recognized Startup</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <Globe2 className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">🇮🇳</span>
              </div>
              <p className="text-xs text-slate-600">Built for Bharat</p>
            </div>
          </div>
        </div>

        {/* ----- CALL TO ACTION ----- */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl shadow-indigo-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Ready to Build Your <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Professional Career</span>?
            </h2>
            <p className="text-indigo-100 text-base max-w-2xl mx-auto mb-6">
              Create stunning CVs, store documents securely, and showcase your portfolio. Join thousands of professionals who trust Career Vault.
            </p>
            <button
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl font-bold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 inline-flex items-center gap-3"
              onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault')}`)}
            >
              <Rocket className="w-5 h-5" />
              Get It Now
            </button>
            <p className="text-indigo-200 text-sm mt-3">No credit card required • 7-day free trial • Cancel anytime</p>
          </div>
        </div>
      </div>

      {/* ----- MODALS ----- */}
      {isUpgradeModalOpen && renderUpgradeModal()}
      {isCheckoutModalOpen && renderCheckoutModal()}
    </div>
  );
}