// ============================================================
// CareerVaultPro.js
// Integrated Career Vault Pro Dashboard
// Includes: AI Trainer, AI Interviewer, Skill Analysis, Portfolio
// ============================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/ui/Button';

// Import icons from lucide-react
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
} from 'lucide-react';

// ============================================================
// IMPORT THE THREE INTEGRATED COMPONENTS
// ============================================================
import AIInterview from './AIInterview';
import SkillAnalysis from './SkillAnalysis';
import PortfolioPage from './PortfolioPage';

// Import their CSS files
import './AIInterview.css';
import './SkillAnalysis.css';
import './PortfolioPage.css';

// ============================================================
// MOCK DATA (same as original CVDashboardPro)
// ============================================================
const TRAINER_TOPICS = [
  {
    id: 'resume-writing',
    name: 'Resume Writing',
    icon: FileText,
    progress: 85,
    status: 'in-progress',
    totalLessons: 12,
    completedLessons: 10,
    color: 'from-blue-500 to-cyan-500',
    description: 'Master the art of crafting compelling resumes',
  },
  {
    id: 'cover-letter',
    name: 'Cover Letter Writing',
    icon: MessageSquare,
    progress: 60,
    status: 'in-progress',
    totalLessons: 8,
    completedLessons: 5,
    color: 'from-indigo-500 to-purple-500',
    description: 'Create persuasive cover letters that stand out',
  },
  {
    id: 'linkedin-optimization',
    name: 'LinkedIn Optimization',
    icon: Star,
    progress: 40,
    status: 'in-progress',
    totalLessons: 10,
    completedLessons: 4,
    color: 'from-blue-600 to-sky-500',
    description: 'Optimize your LinkedIn profile for recruiters',
  },
  {
    id: 'personal-branding',
    name: 'Personal Branding',
    icon: Target,
    progress: 20,
    status: 'not-started',
    totalLessons: 15,
    completedLessons: 3,
    color: 'from-amber-500 to-orange-500',
    description: 'Build a powerful personal brand',
  },
  {
    id: 'networking',
    name: 'Networking Skills',
    icon: Users,
    progress: 10,
    status: 'not-started',
    totalLessons: 9,
    completedLessons: 1,
    color: 'from-emerald-500 to-teal-500',
    description: 'Learn effective networking strategies',
  },
  {
    id: 'salary-negotiation',
    name: 'Salary Negotiation',
    icon: TrendingUp,
    progress: 0,
    status: 'locked',
    totalLessons: 6,
    completedLessons: 0,
    color: 'from-rose-500 to-pink-500',
    description: 'Master the art of salary negotiation',
    locked: true,
  },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    type: 'Project',
    description: 'Full-stack e-commerce platform with payment integration',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    date: '2024-01-01',
    views: 245,
    likes: 34,
  },
  {
    id: 2,
    title: 'AI Resume Analyzer',
    type: 'Project',
    description: 'AI-powered resume analysis tool for job seekers',
    tags: ['Python', 'NLP', 'Machine Learning', 'Flask'],
    date: '2023-12-20',
    views: 189,
    likes: 28,
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    type: 'Project',
    description: 'Cross-platform fitness tracking application',
    tags: ['React Native', 'Firebase', 'Redux'],
    date: '2023-12-05',
    views: 156,
    likes: 22,
  },
  {
    id: 4,
    title: 'Data Analytics Dashboard',
    type: 'Project',
    description: 'Interactive data visualization dashboard',
    tags: ['D3.js', 'React', 'Chart.js', 'Express'],
    date: '2023-11-15',
    views: 132,
    likes: 18,
  },
];

const SKILL_ASSESSMENT = {
  technical: 72,
  communication: 85,
  leadership: 60,
  problemSolving: 78,
  teamwork: 80,
  adaptability: 75,
};

// ============================================================
// MAIN COMPONENT
// ============================================================
export default function CareerVaultPro() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('trainer');

  // ---- Helpers ----
  const renderProgressBar = (progress, color = 'from-indigo-500 to-purple-500') => {
    const percentage = Math.min(progress, 100);
    return (
      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const getStatusBadge = (status) => {
    const statusMap = {
      completed: {
        color: 'bg-emerald-100 text-emerald-700 border-emerald-200',
        icon: CheckCircle2,
        label: 'Completed',
      },
      'in-progress': {
        color: 'bg-amber-100 text-amber-700 border-amber-200',
        icon: Clock,
        label: 'In Progress',
      },
      'not-started': {
        color: 'bg-slate-100 text-slate-600 border-slate-200',
        icon: Circle,
        label: 'Not Started',
      },
      locked: {
        color: 'bg-rose-100 text-rose-600 border-rose-200',
        icon: Lock,
        label: 'Locked',
      },
    };
    return statusMap[status] || statusMap['not-started'];
  };

  const totalProgress =
    TRAINER_TOPICS.reduce((acc, t) => acc + t.progress, 0) / TRAINER_TOPICS.length;
  const completedTopics = TRAINER_TOPICS.filter((t) => t.progress === 100).length;

  // ============================================================
  // RENDER: AI Trainer Tab (Original Content)
  // ============================================================
  const renderTrainerTab = () => (
    <div>
      {/* Skill Assessment */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-8">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-indigo-600" />
          Skill Assessment
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(SKILL_ASSESSMENT).map(([skill, value]) => (
            <div key={skill} className="text-center">
              <div className="relative inline-block">
                <svg className="w-20 h-20 transform -rotate-90">
                  <circle
                    className="text-slate-200"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="32"
                    cx="40"
                    cy="40"
                  />
                  <circle
                    className="text-indigo-600"
                    strokeWidth="6"
                    strokeDasharray={201.06}
                    strokeDashoffset={201.06 - (201.06 * value) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="32"
                    cx="40"
                    cy="40"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold text-slate-800">{value}%</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-1 capitalize">
                {skill.replace(/([A-Z])/g, ' $1').trim()}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-indigo-600" />
        Learning Topics
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {TRAINER_TOPICS.map((topic) => {
          const StatusIcon = getStatusBadge(topic.status).icon;
          const statusInfo = getStatusBadge(topic.status);
          const Icon = topic.icon;

          return (
            <div
              key={topic.id}
              className={`bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition-all ${
                topic.locked ? 'opacity-75' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${topic.color} text-white`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{topic.name}</h4>
                    <p className="text-xs text-slate-500">
                      {topic.completedLessons}/{topic.totalLessons} lessons
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full border ${statusInfo.color} flex items-center gap-1`}
                >
                  <StatusIcon className="w-3 h-3" />
                  {statusInfo.label}
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-3">{topic.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-3">{renderProgressBar(topic.progress, topic.color)}</div>
                <span className="text-sm font-semibold text-slate-700">{topic.progress}%</span>
              </div>
              {!topic.locked && (
                <Button
                  className={`w-full mt-3 text-sm bg-gradient-to-r ${topic.color} text-white hover:opacity-90`}
                >
                  {topic.progress === 0
                    ? 'Start Learning'
                    : topic.progress === 100
                    ? 'Review'
                    : 'Continue'}
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  // ============================================================
  // RENDER: Portfolio Tab (Quick View + Link to Full Portfolio)
  // ============================================================
  const renderPortfolioTab = () => (
    <div>
      {/* Portfolio Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-sm text-slate-600">Total Projects</p>
          <p className="text-2xl font-bold text-slate-800">{PORTFOLIO_ITEMS.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-sm text-slate-600">Total Views</p>
          <p className="text-2xl font-bold text-slate-800">
            {PORTFOLIO_ITEMS.reduce((acc, item) => acc + item.views, 0)}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-sm text-slate-600">Total Likes</p>
          <p className="text-2xl font-bold text-slate-800">
            {PORTFOLIO_ITEMS.reduce((acc, item) => acc + item.likes, 0)}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <p className="text-sm text-slate-600">Profile Views</p>
          <p className="text-2xl font-bold text-slate-800">342</p>
        </div>
      </div>

      {/* Full Portfolio Button */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Full Portfolio Management</h3>
            <p className="text-sm text-slate-600 mt-1">
              Edit your portfolio, add projects, manage your public profile
            </p>
          </div>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200"
            onClick={() => {
              // The PortfolioPage component below will render in this tab
              // This button is just a visual call-to-action
            }}
          >
            <Plus className="w-4 h-4 mr-2" />
            Open Full Portfolio
          </Button>
        </div>
      </div>

      {/* Full PortfolioPage Component */}
      <PortfolioPage />
    </div>
  );

  // ============================================================
  // MAIN RENDER
  // ============================================================
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* ----- HEADER ----- */}
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
              AI-powered career development tools and insights
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200">
              🇮🇳 Built for Bharat
            </span>
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-md shadow-indigo-200">
              <Zap className="w-4 h-4 mr-2" />
              Upgrade
            </Button>
          </div>
        </div>

        {/* ----- Overall Progress Bar ----- */}
        {/* <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 mb-8 text-white shadow-xl shadow-indigo-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="w-5 h-5" />
                <h2 className="text-xl font-bold">Your Career Progress</h2>
              </div>
              <p className="text-indigo-100 text-sm">
                You've completed {completedTopics} of {TRAINER_TOPICS.length} topics
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">{Math.round(totalProgress)}%</div>
                <div className="text-xs text-indigo-200">Overall Progress</div>
              </div>
              <div className="w-24 h-24 relative">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle
                    className="text-indigo-400/30"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="text-white"
                    strokeWidth="6"
                    strokeDasharray={226.19}
                    strokeDashoffset={226.19 - (226.19 * totalProgress) / 100}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="36"
                    cx="48"
                    cy="48"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold">{Math.round(totalProgress)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* ----- TABS ----- */}
        <div className="flex gap-1 border-b border-slate-200 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('trainer')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'trainer'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <Brain className="w-4 h-4" />
            AI Trainer
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
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-4 py-2.5 text-sm font-medium transition-all duration-200 border-b-2 whitespace-nowrap flex items-center gap-2 ${
              activeTab === 'portfolio'
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-300'
            }`}
          >
            <FileText className="w-4 h-4" />
            Portfolio
          </button>
        </div>

        {/* ----- TAB CONTENT ----- */}
        <div className="tab-content">
          {activeTab === 'trainer' && renderTrainerTab()}
          {activeTab === 'interviewer' && <AIInterview />}
          {activeTab === 'skill-analysis' && <SkillAnalysis />}
          {activeTab === 'portfolio' && <PortfolioPage />}
        </div>
      </div>
    </div>
  );
}