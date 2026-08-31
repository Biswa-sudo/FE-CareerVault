// ============================================================
// CareerVaultPro.js – Integrated Dashboard
// Fix: Added missing 'Play' import
// ============================================================

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';
// import { useEffect, useState } from 'react'
import { getSubscriptionStatus } from '../lib/localStorage'
import PrePurchaseDashboard from './CvDashboardBeforeBuy'

// ============================================================
// 1. ALL IMPORTS – including 'Play' and others
// ============================================================
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
  Play,           // <-- THIS FIXES THE ERROR
} from 'lucide-react';

// Custom LinkedIn icon (if you ever need it)
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// ============================================================
// 2. IMPORT COMPONENTS (make sure these files exist)
// ============================================================
import AIInterview from './AIInterview';
import SkillAnalysis from './SkillAnalysis';

// Import their CSS files
import './AIInterview.css';
import './SkillAnalysis.css';

// ============================================================
// 3. MOCK DATA
// ============================================================
const FEATURES = [
  {
    id: 'cv-analysis',
    icon: Upload,
    title: 'AI CV Analysis',
    description:
      'Upload your CV and get a comprehensive AI-powered analysis of your skills, experience gaps, and career potential.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'ats-content',
    icon: ClipboardCheck,
    title: 'ATS Content Generation',
    description:
      'AI generates ATS-optimized content for your CV, cover letters, and professional profiles – keyword‑rich and recruiter‑friendly.',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
  },
  {
    id: 'template-content',
    icon: LayoutTemplate,
    title: 'Multi‑Template Content',
    description:
      'Generate tailored content for all our professional templates – resumes, cover letters, LinkedIn profiles, and portfolios.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'skill-path',
    icon: Compass,
    title: 'AI Career Path',
    description:
      'Based on your CV analysis, AI creates a personalized learning path with recommended courses, projects, and skills to become interview‑ready.',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'interview-coach',
    icon: Mic2,
    title: 'AI Interview Coach',
    description:
      'Practice with an AI interview coach that adapts to your skill level. Get real‑time feedback and build confidence.',
    color: 'from-rose-500 to-pink-500',
    bgColor: 'bg-rose-50',
  },
  {
    id: 'portfolio-generator',
    icon: PenTool,
    title: 'Portfolio Content Generator',
    description:
      'AI creates compelling project descriptions, case studies, and portfolio content that showcases your work effectively.',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
  },
];

const MOCK_ATS_CONTENT = {
  headline: 'Senior Full Stack Developer with 4+ years of experience building scalable web applications.',
  summary:
    'Passionate Full Stack Developer specializing in React, Node.js, and cloud architecture. Proven track record of delivering high‑impact solutions for enterprise clients.',
  keySkills: ['React.js', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'TypeScript', 'GraphQL'],
  achievements: [
    'Led development of 5+ enterprise applications',
    'Improved system performance by 40%',
    'Mentored 8 junior developers',
    'Reduced deployment time by 60%',
  ],
};

// ============================================================
// 4. MAIN COMPONENT
// ============================================================
export default function CareerVaultPro() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [checkingSubscription, setCheckingSubscription] = useState(true)
  const [hasPro, setHasPro] = useState(false)

  useEffect(() => {
    let cancelled = false

    const check = async () => {
      try {
        const access = await getSubscriptionStatus(3, 'career-vault-pro')
        if (!cancelled) setHasPro(Boolean(access))
      } catch (err) {
        if (!cancelled) setHasPro(false)
      } finally {
        if (!cancelled) setCheckingSubscription(false)
      }
    }

    check()

    return () => {
      cancelled = true
    }
  }, [])

  if (checkingSubscription) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-sm text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!hasPro) {
    return <PrePurchaseDashboard />
  }

  // ---- Handlers ----
  const handleUploadModalOpen = () => {
    setIsUploadModalOpen(true);
    setUploadFile(null);
    setAnalysisComplete(false);
    setUploadProgress(0);
  };

  const handleUploadModalClose = () => {
    setIsUploadModalOpen(false);
    setUploadFile(null);
    setAnalysisComplete(false);
    setUploadProgress(0);
    setIsAnalyzing(false);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploadFile(file);
    setIsAnalyzing(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setAnalysisComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  // ---- Render: Dashboard Tab ----
  const renderDashboardTab = () => (
    <div className="space-y-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-indigo-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI-Powered Career Platform
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Your AI-Powered <br />
            <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">
              Career Acceleration
            </span>{' '}
            Platform
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mb-8">
            Upload your CV once. Let AI analyze your skills, generate ATS‑friendly content,
            create portfolio‑worthy descriptions, and coach you to interview success.
          </p>
          <div className="flex flex-wrap gap-4">
              <button
                className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 flex items-center gap-2"
                onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault-pro')}`)}
              >
                <Upload className="w-5 h-5" />
                Upload Your CV Now
              </button>
              {/* <button
                className="bg-white/10 backdrop-blur text-white hover:bg-white/20 px-8 py-3 rounded-xl font-semibold border border-white/20 transition-all flex items-center gap-2"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See How It Works
              </button> */}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Accelerate
            </span>{' '}
            Your Career
          </h2>
          <p className="text-slate-600">Powered by cutting‑edge AI, designed for modern job seekers.</p>
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
                  <Icon className={`w-6 h-6 text-indigo-600`} />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* How It Works */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl font-bold text-slate-800 mt-2 mb-4">
          From CV Upload to Interview Success in{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4 Simple Steps</span>
        </h2>
        <p className="text-slate-600">Upload your CV once, and let AI do the heavy lifting.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            step: '1',
            icon: Upload,
            title: 'Upload CV',
            desc: 'Upload your existing CV. AI parses and analyzes every detail.',
            color: 'from-blue-500 to-cyan-500',
          },
          {
            step: '2',
            icon: Brain,
            title: 'AI Analysis',
            desc: 'AI identifies your skills, experience gaps, and career potential.',
            color: 'from-indigo-500 to-purple-500',
          },
          {
            step: '3',
            icon: ClipboardCheck,
            title: 'Content Generation',
            desc: 'Get ATS‑optimized content for templates, portfolio, and more.',
            color: 'from-purple-500 to-pink-500',
          },
          {
            step: '4',
            icon: Mic2,
            title: 'Interview Ready',
            desc: 'Practice with AI coach, build confidence, and land the job.',
            color: 'from-emerald-500 to-teal-500',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold`}>
              {item.step}
            </div>
            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} bg-opacity-10 flex items-center justify-center mx-auto mb-4`}>
              <item.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Pricing / CTA */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl shadow-indigo-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="bg-gradient-to-r from-yellow-200 to-amber-200 bg-clip-text text-transparent">Supercharge</span> Your Career?
          </h2>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto mb-8">
            Join thousands of professionals who have accelerated their careers with Career Vault Pro.
          </p>
          <button
            className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:scale-105 inline-flex items-center gap-3"
            onClick={() => navigate(`/payment?plan=${encodeURIComponent('career-vault-pro')}`)}
          >
            <Upload className="w-5 h-5" />
            Upload Your CV Now
          </button>
          {/* <p className="text-indigo-200 text-sm mt-4">No credit card required • 14‑day free trial</p> */}
        </div>
      </div>
    </div>
  );

  // ---- Render: ATS Content Tab ----
  const renderATSContentTab = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <ClipboardCheck className="w-6 h-6 text-indigo-600" />
          <h2 className="text-xl font-bold text-slate-800">AI‑Generated ATS Content</h2>
        </div>
        <p className="text-slate-600 mb-6">
          Based on your uploaded CV, AI has generated the following ATS‑optimized content. Use it in your CV, cover letters, and LinkedIn profile to pass screening.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Headline</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800">
              {MOCK_ATS_CONTENT.headline}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Professional Summary</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800">
              {MOCK_ATS_CONTENT.summary}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Key Skills</label>
            <div className="flex flex-wrap gap-2">
              {MOCK_ATS_CONTENT.keySkills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm border border-indigo-100">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Achievements</label>
            <ul className="space-y-1">
              {MOCK_ATS_CONTENT.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" />
                  {ach}
                </li>
              ))}
            </ul>
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
    </div>
  );

  // ---- Render: Upload Modal ----
  const renderUploadModal = () => {
    // Custom close icon (since 'X' might not be imported)
    const CloseIcon = () => (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    );

    return (
      <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
          <button
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            onClick={handleUploadModalClose}
          >
            <CloseIcon />
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800">Upload Your CV</h2>
            <p className="text-slate-600 text-sm mt-1">
              Let AI analyze your skills and generate career‑boosting content
            </p>
          </div>

          {!analysisComplete ? (
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:border-indigo-400 transition-colors">
              <input
                type="file"
                accept=".pdf,.docx,.doc,.txt"
                onChange={handleFileUpload}
                className="hidden"
                id="cv-upload"
              />
              <label htmlFor="cv-upload" className="cursor-pointer block">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-indigo-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Click to upload or drag & drop</p>
                    <p className="text-sm text-slate-500">PDF, DOCX, or TXT (max 10MB)</p>
                  </div>
                </div>
              </label>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Analysis Complete!</h3>
              <p className="text-slate-600 text-sm mt-2">
                We've analyzed your CV and generated personalized content.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 mt-4 text-left">
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Skills identified: 12</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>ATS content generated: 3 versions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Career path created</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Interview prep ready</span>
                </div>
              </div>
              <button
                className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:scale-105 transition-all"
                onClick={handleUploadModalClose}
              >
                View Your Dashboard →
              </button>
            </div>
          )}

          {isAnalyzing && (
            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                <span>AI is analyzing your CV...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                />
              </div>
              <p className="text-xs text-slate-400 mt-2 text-center">
                {uploadProgress < 30 && 'Parsing your CV structure...'}
                {uploadProgress >= 30 && uploadProgress < 60 && 'Analyzing skills and experience...'}
                {uploadProgress >= 60 && uploadProgress < 90 && 'Generating personalized content...'}
                {uploadProgress >= 90 && 'Almost there! Finalizing your profile...'}
              </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  // ---- Main Render ----
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-800">
                Career Vault{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Pro
                </span>
              </h1>
              <span className="text-xs bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full shadow-md shadow-indigo-200">
                <Sparkles className="w-3 h-3 inline mr-1" />
                AI-Powered
              </span>
            </div>
            <p className="text-slate-600 mt-1">
              Upload CV → AI Analysis → ATS Content → Interview Ready
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl text-sm font-semibold border border-indigo-200 hover:bg-indigo-200 transition flex items-center gap-2"
              onClick={handleUploadModalOpen}
            >
              <Upload className="w-4 h-4" />
              Upload CV
            </button>
            {/* <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-200 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Upgrade
            </Button> */}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 border-b border-slate-200 mb-8 overflow-x-auto">
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
            onClick={() => setActiveTab('ats-content')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'ats-content'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <ClipboardCheck className="w-4 h-4" />
            ATS Content
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
            onClick={() => setActiveTab('skill-analysis')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'skill-analysis'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Skill Analysis
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'dashboard' && renderDashboardTab()}
          {activeTab === 'ats-content' && renderATSContentTab()}
          {activeTab === 'interviewer' && <AIInterview />}
          {activeTab === 'skill-analysis' && <SkillAnalysis />}
        </div>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && renderUploadModal()}
    </div>
  );
}