import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  generateGuestPassword,
  getPaymentConfig,
  startUpiPayment,
} from '../lib/paymentService';
import {
  getSubscriptionStatus,
  loginUser,
  signUpUser,
} from '../lib/localStorage';
import Button from '../components/ui/Button';
import { resolvePaymentPlan } from '../lib/paymentPlans';
import { isPurchaseService, getEnquiryServiceSubject } from '../lib/serviceAccess';
import {
  MessageSquareText,
  ArrowRight,
  X,
  CheckCircle2,
  ShieldCheck,
  Users,
  Globe2,
  Clock,
  BriefcaseBusiness,
  Sparkles,
  Smartphone,
  Palette,
  Layers,
  Code2,
  Star,
  Crown,
  Trophy,
  Flame,
  Timer,
  Brain,
  Mic,
  GraduationCap,
  BookOpen,
  TrendingUp,
  BadgeCheck,
  Quote,
  Zap,
  Target,
  Rocket,
  Award,
  Lock,
} from 'lucide-react';
import MainNavbar from '../components/Layout/MainNavbar';
import Footer from '../components/Layout/Footer';

const SERVICES = [
  {
    id: 'spoken-english',
    title: 'Spoken English & Fluency',
    category: 'Career & Learning',
    price: 99,
    unit: 'per year',
    description: 'Structured daily interactive speech practice designed to build workplace fluency, eliminate hesitation, and master real-world conversations.',
    icon: MessageSquareText,
    features: [
      'Daily Speaking Drills',
      'Real-World Workplace Scenarios',
      'Pronunciation & Tone Guidance',
      'Confidence Milestones'
    ],
    productId: 3,
    badge: 'Best Value'
  },
  {
    id: 'career-vault',
    title: 'Career Vault',
    category: 'Career & Learning',
    price: 99,
    unit: 'per year',
    description: 'Centralized professional repository to store credentials, build ATS-friendly CVs, manage up to 5 profiles, and generate shareable recruiter links.',
    icon: BriefcaseBusiness,
    features: [
      'Encrypted Document Storage',
      'Manage Up to 5 Active CVs',
      'Public Portfolio Link',
      'One-Click PDF Export'
    ],
    productId: 1,
    badge: 'Popular'
  },
  {
    id: 'career-vault-pro',
    title: 'Career Vault + AI',
    category: 'Career & Learning',
    price: 199,
    unit: 'per year',
    description: 'Complete Career Vault access enhanced with AI-driven CV scoring, role-specific mock interviews, and automated skill-gap analysis.',
    icon: Sparkles,
    features: [
      'AI CV Optimization & Scoring',
      'Role-Based Mock Interviews',
      'Real-Time Answer Feedback',
      'Skill Progression Tracking'
    ],
    productId: 2
  },
  {
    id: 'web-starter',
    title: 'Website Development',
    category: 'Digital Design & Web',
    price: 1999,
    unit: 'starting at',
    description: 'Modern, high-performance responsive web pages optimized for fast load times, core web vitals, and immediate lead conversion.',
    icon: Code2,
    features: [
      'Mobile-First Responsive Layout',
      'On-Page SEO Optimization',
      'Lead Capture & Contact Forms',
      'High-Speed Performance Build'
    ],
    productId: 4
  },
  {
    id: 'custom-web-app',
    title: 'Custom Full-Stack Web App',
    category: 'Digital Design & Web',
    price: 24999,
    unit: 'starting at',
    description: 'Bespoke full-stack applications engineered with React/Next.js, robust database architectures, secure authentication, and payment integration.',
    icon: Layers,
    features: [
      'Custom Architecture & REST/GraphQL APIs',
      'Database & Cloud Storage Setup',
      'Auth, RBAC & Payment Gateways',
      'Complete Source Code Ownership'
    ],
    productId: 5
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    category: 'Digital Design & Web',
    price: 34999,
    unit: 'starting at',
    description: 'Cross-platform iOS and Android applications delivering native performance, smooth animations, and cloud API synchronization.',
    icon: Smartphone,
    features: [
      'Single Codebase iOS & Android',
      'Push Notification Engine',
      'Secure Backend & API Sync',
      'Store Deployment Preparation'
    ],
    productId: 6
  },
  {
    id: 'brand-identity',
    title: 'UI/UX & Brand Identity',
    category: 'Digital Design & Web',
    price: 4999,
    unit: 'flat',
    description: 'Comprehensive product design encompassing user research, Figma interactive prototypes, scalable design systems, and brand assets.',
    icon: Palette,
    features: [
      'Figma UI Kits & Design Systems',
      'Clickable Interactive Prototypes',
      'Vector Logos & Brand Style Guide',
      'Developer-Ready Asset Handoff'
    ],
    productId: 7
  }
];

const spokenEnglishService = SERVICES.find((service) => service.id === 'spoken-english') || SERVICES[0];

/* ---------------------------------- UI DATA --------------------------------- */

const HERO_POINTS = [
  {
    icon: Brain,
    text: 'Practise with our AI — unlimited speaking reps, zero judgement',
  },
  {
    icon: Mic,
    text: 'You start speaking from Day 1, not after "someday"',
  },
  {
    icon: GraduationCap,
    text: 'Built so even a 6th-class student can begin comfortably',
  },
  {
    icon: BookOpen,
    text: 'Huge practice set — daily life to professional career talks',
  },
];

const BENEFITS = [
  {
    icon: Brain,
    title: 'You practise with our AI',
    text: 'Your personal AI speaking partner never judges you, never gets tired and is always available — morning, midnight or between classes.',
  },
  {
    icon: Mic,
    title: 'You start speaking from Day 1',
    text: 'No endless theory. In your very first session you open your mouth and speak. Momentum is what kills hesitation.',
  },
  {
    icon: GraduationCap,
    title: 'Even a 6th-class student can start',
    text: 'The course is designed so a complete beginner can follow along comfortably — simple words, simple sentences, real progress.',
  },
  {
    icon: Layers,
    title: 'Ground level first, then we raise the bar',
    text: 'We build your base perfectly from the ground up. Once the foundation is solid, difficulty increases step by step.',
  },
  {
    icon: BookOpen,
    title: 'A huge real-life practice set',
    text: 'Almost every scenario you will ever need — daily life conversations, office talk, interviews, client calls, travel and more.',
  },
  {
    icon: TrendingUp,
    title: 'Confident in 10 days, pro with practice',
    text: 'Start speaking confidently within 10 days. Keep showing up and you gradually become a pro — fluency becomes a habit.',
  },
];

const ROADMAP = [
  {
    day: 'Day 1–2',
    icon: Target,
    title: 'Break the fear',
    text: 'You speak from the very first session. Simple words, simple sentences, no theory overload.',
  },
  {
    day: 'Day 3–5',
    icon: Mic,
    title: 'Build a rock-solid base',
    text: 'We go to absolute ground level — the way a 6th-class student learns — so nothing is left shaky.',
  },
  {
    day: 'Day 6–10',
    icon: Zap,
    title: 'Speak with confidence',
    text: 'Daily AI practice reps on real situations. By Day 10 you speak confidently without freezing.',
  },
  {
    day: 'Day 11+',
    icon: Rocket,
    title: 'Become a pro',
    text: 'The difficulty bar rises gradually. Keep practising and fluent English becomes your default.',
  },
];

const SCENARIOS = [
  'Introducing yourself',
  'Ordering food',
  'Talking to colleagues',
  'Job interviews',
  'Client calls & meetings',
  'Explaining your work',
  'Phone conversations',
  'Airport & travel',
  'Shopping & bargaining',
  'Bank & government offices',
  'Doctor visits',
  'Making small talk',
  'Group discussions',
  'Salary negotiation',
  'Presentations',
  'Video calls',
];

const TESTIMONIALS = [
  {
    name: 'Rahul S.',
    role: 'B.Tech Student',
    text: 'I used to freeze while speaking. After 10 days of daily AI practice I could hold a full conversation in my college presentation.',
  },
  {
    name: 'Priya M.',
    role: 'Working Professional',
    text: 'The ground-level approach is what worked for me. It never felt like a classroom — I was just speaking every day.',
  },
  {
    name: 'Amit K.',
    role: 'Job Seeker',
    text: 'My interview answers were fine on paper but terrible out loud. This fixed exactly that. Cleared two interviews after this.',
  },
];

const VALUE_STACK = [
  'Unlimited AI speaking practice partner',
  'Ground-level to advanced structured curriculum',
  'Huge real-life scenario practice set',
  'Pronunciation & tone guidance',
  'Confidence milestones & progress tracking',
  'Full 1-year access',
];

const pad = (value) => String(value).padStart(2, '0');

function getTimeLeft() {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  const diff = Math.max(0, end.getTime() - now.getTime());
  return {
    h: Math.floor(diff / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}

function useLaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

/* --------------------------------- COMPONENT -------------------------------- */

export default function SpokenEnglishAdLanding() {
  const { authenticated, authLoading, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [configLoading, setConfigLoading] = useState(true);
  const [error, setError] = useState('');
  const [paymentConfig, setPaymentConfig] = useState(null);
  const [selectedService, setSelectedService] = useState(spokenEnglishService);
  const [showCustomerModal, setShowCustomerModal] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: ''
  });
  const [customerError, setCustomerError] = useState('');
  const [guestCredentials, setGuestCredentials] = useState(null);
  const nameInputRef = useRef(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const rawAmount = searchParams.get('amount');
  const rawPlan = searchParams.get('plan');
  const rawProductId = searchParams.get('product_id');

  const countdown = useLaunchCountdown();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utmData = {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      fbclid: params.get('fbclid'),
    };

    if (
      utmData.utm_source ||
      utmData.utm_medium ||
      utmData.utm_campaign ||
      utmData.utm_content ||
      utmData.utm_term ||
      utmData.fbclid
    ) {
      localStorage.setItem('bentureai_attribution', JSON.stringify(utmData));
    }
  }, []);

  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: 'BentureAI Spoken English',
        content_category: 'Education',
      });
    }
  }, []);

  useEffect(() => {
    if (window.fbq && rawPlan?.trim().toLowerCase() === 'spoken-english') {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'BentureAI Spoken English',
        content_category: 'Education',
        content_ids: ['3'],
        content_type: 'product',
        value: 99,
        currency: 'INR'
      });
    }
  }, [rawPlan]);

  useEffect(() => {
    const stored = sessionStorage.getItem('bentureai_guest_credentials');
    if (!stored) {
      return;
    }

    try {
      const parsed = JSON.parse(stored);
      if (parsed?.email) {
        setGuestCredentials(parsed);
      }
    } catch (e) {
      console.warn('[GuestCheckout] Failed to restore saved credentials.', e);
    }
  }, []);

  useEffect(() => {
    if (!rawPlan && !rawProductId) {
      setSelectedService(spokenEnglishService);
      return;
    }

    const normalizedPlan = rawPlan ? String(rawPlan).trim().toLowerCase() : '';
    const normalizedProductId = rawProductId ? String(rawProductId).trim() : '';

    const matchedService =
      SERVICES.find((service) => service.id === normalizedPlan) ||
      SERVICES.find((service) => String(service.productId) === normalizedProductId) ||
      SERVICES.find((service) => service.id === normalizedPlan.replace(/_/g, '-'));

    if (matchedService) {
      setSelectedService((current) =>
        current && current.id === matchedService.id ? current : matchedService
      );
    } else {
      setSelectedService(spokenEnglishService);
    }
  }, [rawPlan, rawProductId]);

  const selectedPlan = resolvePaymentPlan(rawPlan || 'spoken-english', {
    amount: rawAmount,
    title: searchParams.get('title'),
    description: searchParams.get('description')
  });

  const productId =
    selectedPlan.productId ||
    selectedService?.productId ||
    (rawProductId ? Number(rawProductId) : null);

  const canPurchaseCurrentSelection = selectedService
    ? isPurchaseService(selectedService.id)
    : selectedPlan?.key
      ? isPurchaseService(selectedPlan.key)
      : false;

  const handleEnquireNow = (service) => {
    const serviceName = getEnquiryServiceSubject(
      service?.title || selectedService?.title || selectedPlan?.name || 'Service enquiry'
    );
    navigate(`/contact?subject=${encodeURIComponent(serviceName)}`);
  };

  useEffect(() => {
    let cancelled = false;

    const loadConfig = async () => {
      try {
        const config = await getPaymentConfig();
        if (!cancelled) {
          setPaymentConfig(config);
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error
              ? e.message
              : 'Failed to load payment configuration.'
          );
        }
      } finally {
        if (!cancelled) {
          setConfigLoading(false);
        }
      }
    };

    loadConfig();

    return () => {
      cancelled = true;
    };
  }, []);

  // Lock background scroll when modal is open and restore on close
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (showCustomerModal) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showCustomerModal]);

  // Autofocus name input when modal opens (helps mobile keyboard behavior)
  useEffect(() => {
    if (showCustomerModal && nameInputRef.current) {
      // small delay to ensure element is visible before focusing
      setTimeout(() => {
        try {
          nameInputRef.current.focus();
        } catch (e) {
          // ignore
        }
      }, 80);
    }
  }, [showCustomerModal]);

  useEffect(() => {
    let cancelled = false;

    const checkActiveSubscription = async () => {
      if (!authenticated || !productId) {
        return;
      }

      try {
        const active = await getSubscriptionStatus(productId);
        if (!cancelled && active) {
          navigate('/dashboard', { replace: true });
        }
      } catch (e) {
        console.error('[Payment] Subscription check failed:', e);
      }
    };

    checkActiveSubscription();

    return () => {
      cancelled = true;
    };
  }, [authenticated, productId, navigate]);

  const handleCustomerFormChange = (e) => {
    const { name, value } = e.target;
    setCustomerForm((current) => ({
      ...current,
      [name]: value
    }));
    if (customerError) {
      setCustomerError('');
    }
  };

  const persistGuestCredentials = (data) => {
    const next = {
      name: data.name,
      email: data.email,
      password: data.password,
      userId: data.userId ?? user?.id ?? null,
    };

    setGuestCredentials(next);
    sessionStorage.setItem('bentureai_guest_credentials', JSON.stringify(next));
  };

  const autoCreateGuestAccount = async ({ name, email, phone = '' }) => {
    const password = generateGuestPassword(name, email);
    const payload = { name, email, phone, password };

    try {
      const createdUser = await signUpUser(payload);
      persistGuestCredentials({
        name,
        email,
        password,
        userId: createdUser?.id ?? null,
      });
      return { ...payload, userId: createdUser?.id ?? null };
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err || '');

      if (/already exists|409/i.test(message)) {
        const loggedUser = await loginUser(email, password);
        persistGuestCredentials({
          name,
          email,
          password,
          userId: loggedUser?.id ?? null,
        });
        return { ...payload, userId: loggedUser?.id ?? null };
      }

      throw err;
    }
  };

  const handlePay = async (customerData = null) => {
    const finalCustomerData = customerData || {
      name: customerForm.name,
      email: customerForm.email,
      phone: customerForm.phone,
    };

    let amountToPay = selectedPlan.amount;
    let descriptionToUse = selectedPlan.description;
    let planToUse = selectedPlan.key;
    let productIdToUse = productId;

    if (selectedService) {
      const totalAmount = selectedService.price;
      amountToPay = Math.round(totalAmount * 100);
      descriptionToUse = selectedService.description;
      planToUse = selectedService.id;
      productIdToUse = selectedService.productId || productId;
    }

    setLoading(true);
    setError('');

    if (!productIdToUse) {
      setError('This payment plan is not linked to a product. Please contact support.');
      setLoading(false);
      return;
    }

    if (!planToUse) {
      setError('This payment plan is not configured correctly. Please contact support.');
      setLoading(false);
      return;
    }

    try {
      const attribution = (() => {
        try {
          const stored = localStorage.getItem('bentureai_attribution');
          return stored ? JSON.parse(stored) : null;
        } catch {
          return null;
        }
      })();

      await startUpiPayment({
        amount: amountToPay,
        currency: 'INR',
        description: descriptionToUse,
        plan: planToUse,
        productId: productIdToUse,
        customer: finalCustomerData,
        attribution,
        onSuccess: (result) => {
          if (
            result?.verified &&
            !result?.alreadyProcessed &&
            productIdToUse === 3 &&
            window.fbq
          ) {
            window.fbq('track', 'Purchase', {
              content_name: 'BentureAI Spoken English',
              content_category: 'Education',
              content_ids: ['3'],
              content_type: 'product',
              value: amountToPay / 100,
              currency: 'INR'
            });
          }
        },
        onDismiss: () => {
          setLoading(false);
        }
      });

      navigate('/spoken-english-ad-landing?checkout=success', { replace: true });
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Payment failed. Please try again.';

      if (message !== 'Payment cancelled.') {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const submitCustomerDetails = async () => {
    const trimmedName = customerForm.name.trim();
    const trimmedEmail = customerForm.email.trim();
    const trimmedPhone = customerForm.phone.trim();

    if (!trimmedName || !trimmedEmail) {
      setCustomerError('Please enter your name and email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setCustomerError('Please enter a valid email address.');
      return;
    }

    try {
      setCustomerError('');
      setShowCustomerModal(false);
      await autoCreateGuestAccount({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
      });

      await handlePay({
        name: trimmedName,
        email: trimmedEmail,
        phone: trimmedPhone,
      });
    } catch (err) {
      setCustomerError(err instanceof Error ? err.message : 'Unable to create your account. Please try again.');
      setShowCustomerModal(true);
    }
  };

  const checkoutSuccess = searchParams.get('checkout') === 'success';
  const canShowGuestCredentials = checkoutSuccess && (guestCredentials || (authenticated && user));

  const displayService = selectedService || (selectedPlan.name ? {
    title: selectedPlan.name,
    price: selectedPlan.displayAmount || selectedPlan.amount / 100,
    description: selectedPlan.description,
    unit: 'one-time'
  } : null);

  const displayAmount = selectedService
    ? selectedService.price
    : (selectedPlan.displayAmount || selectedPlan.amount / 100 || 0);

  const displayUnit = selectedService?.unit || 'per year';

  const payDisabled =
    loading || !paymentConfig?.configured || !selectedService || !canPurchaseCurrentSelection;

  if (authLoading || configLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          <p className="text-sm text-slate-600">Loading payment...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {!showCustomerModal && <MainNavbar />}

      <div className="min-h-screen bg-white">
        {/* ------------------------------ OFFER STRIP ------------------------------ */}
        <div className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500">
          <div className="max-w-6xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
            <span className="inline-flex items-center gap-1.5 text-white text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.14em]">
              <Flame className="w-4 h-4" /> Launch Offer Live
            </span>
            <span className="text-white/95 text-[11px] sm:text-sm font-semibold">
              ₹99 for a <span className="underline decoration-white/50 underline-offset-2">full year</span> — later ₹99/month
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 ring-1 ring-white/30 px-2.5 py-1 text-white text-[11px] sm:text-xs font-bold tabular-nums">
              <Timer className="w-3.5 h-3.5" />
              {pad(countdown.h)}:{pad(countdown.m)}:{pad(countdown.s)}
            </span>
          </div>
        </div>
        {/* -------------------- POST-PAYMENT CREDENTIALS PANEL -------------------- */}
        {canShowGuestCredentials && (
          <section className="bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-b border-emerald-100">
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-8">
              <div className="rounded-2xl border border-emerald-200 bg-white p-5 md:p-6 shadow-lg shadow-emerald-100/60">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-100 border border-emerald-200 p-2.5 rounded-xl shrink-0">
                      <BadgeCheck className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-700 font-extrabold">
                        Payment successful
                      </p>
                      <h2 className="mt-0.5 text-xl md:text-2xl font-extrabold text-slate-900">
                        Your account is ready 🎉
                      </h2>
                      <p className="mt-1 text-sm text-slate-600">
                        Save these login details — you&apos;ll need them to access your course.
                      </p>
                    </div>
                  </div>
                  <a
                    href="/account-settings"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 shadow-md shadow-emerald-200 transition-colors whitespace-nowrap"
                  >
                    <Lock className="w-4 h-4" />
                    Change password
                  </a>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 px-3.5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      User ID
                    </p>
                    <p className="mt-1 text-base font-extrabold text-slate-900 break-all">
                      {guestCredentials?.userId ?? user?.id ?? '—'}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 px-3.5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      Email
                    </p>
                    <p className="mt-1 text-base font-extrabold text-slate-900 break-all">
                      {guestCredentials?.email ?? user?.email ?? '—'}
                    </p>
                  </div>
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 px-3.5 py-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      Password
                    </p>
                    <p className="mt-1 text-base font-extrabold text-slate-900 font-mono tracking-tight">
                      {guestCredentials?.password ?? '—'}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200 px-3.5 py-3 flex items-start gap-2.5">
                  <span className="text-amber-600 text-base leading-none mt-0.5">⚠️</span>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Save these now.</strong> For your security, the password is shown only
                    once. Use the <strong>Change password</strong> button above to set your own.
                  </p>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="/dashboard"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-3 text-sm font-bold text-white hover:from-indigo-700 hover:to-purple-700 shadow-md shadow-indigo-200 transition-all"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/login"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Log in later
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* --------------------------------- HERO --------------------------------- */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
          <div className="pointer-events-none absolute -top-32 -right-24 w-[28rem] h-[28rem] bg-indigo-200/40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute top-40 -left-24 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
              {/* -------------------------- LEFT: SALES COPY -------------------------- */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white border border-indigo-200 text-indigo-700 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] shadow-sm mb-5">
                  <Sparkles className="w-4 h-4" />
                  AI-Powered Spoken English
                </div>

                <h1 className="text-[2.15rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900">
                  Speak English confidently in{' '}
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                    just 10 days
                  </span>
                </h1>

                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Practise speaking with our AI every single day — starting from absolute ground level,
                  exactly the way a <strong className="text-slate-800 font-semibold">6th-class student</strong> would
                  begin. No fear. No judgement. No boring grammar dumps.
                  You <strong className="text-slate-800 font-semibold">speak from Day 1</strong>.
                </p>

                <ul className="mt-7 space-y-3">
                  {HERO_POINTS.map((point, idx) => {
                    const Icon = point.icon;
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 rounded-lg bg-indigo-100 border border-indigo-200 p-1.5">
                          <Icon className="w-4 h-4 text-indigo-600" />
                        </span>
                        <span className="text-sm sm:text-[15px] text-slate-700 leading-snug">{point.text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* mini social proof */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <div className="flex -space-x-2.5">
                    {['A', 'R', 'P', 'S'].map((letter, i) => (
                      <span
                        key={i}
                        className="w-9 h-9 rounded-full ring-2 ring-white bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold flex items-center justify-center"
                      >
                        {letter}
                      </span>
                    ))}
                    <span className="w-9 h-9 rounded-full ring-2 ring-white bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                      +5k
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Learners already practising every day
                    </p>
                  </div>
                </div>
              </div>

              {/* --------------------------- RIGHT: CHECKOUT --------------------------- */}
              <div className="lg:sticky lg:top-24">
                <div className="relative bg-white border border-slate-200 rounded-3xl shadow-2xl shadow-indigo-200/50 overflow-hidden">
                  {/* ribbon */}
                  <div className="absolute top-0 right-0 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-[0.14em] px-4 py-1.5 rounded-bl-2xl flex items-center gap-1.5 shadow-md">
                      <Crown className="w-3.5 h-3.5" /> Launch Price
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    {/* service header */}
                    <div className="flex items-start gap-4 pr-16">
                      <div className="bg-indigo-100 p-3 rounded-2xl border border-indigo-200 shrink-0">
                        <MessageSquareText className="w-7 h-7 text-indigo-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                          Selected Course
                        </p>
                        <h2 className="text-lg font-bold text-slate-900 mt-0.5 leading-snug">
                          {displayService?.title ?? 'Spoken English & Fluency'}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-3.5 text-sm text-slate-600 leading-relaxed">
                      {displayService?.description}
                    </p>

                    {/* features */}
                    {selectedService?.features?.length > 0 && (
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedService.features.slice(0, 4).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-[13px] text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* price */}
                    <div className="mt-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-4">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs text-slate-500 line-through">
                            ₹99 / month after launch
                          </p>
                          <div className="flex items-baseline gap-1.5 mt-0.5">
                            <span className="text-4xl font-extrabold text-indigo-600 tracking-tight">
                              ₹{displayAmount.toLocaleString('en-IN')}
                            </span>
                            <span className="text-sm font-semibold text-slate-600">
                              {displayUnit}
                            </span>
                          </div>
                        </div>
                        <span className="rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2.5 py-1 border border-emerald-200 whitespace-nowrap">
                          SAVE ₹1,089
                        </span>
                      </div>
                      <p className="mt-2.5 text-[11px] text-slate-600 flex items-center gap-1.5">
                        <BadgeCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                        One payment • Full year of access
                      </p>
                    </div>

                    {/* error */}
                    {error && (
                      <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600 flex items-center gap-2">
                        <X className="w-4 h-4 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* paying as */}
                    {authenticated && (
                      <div className="mt-4 flex items-center gap-2.5 text-sm bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="bg-indigo-100 p-1.5 rounded-lg shrink-0">
                          <ShieldCheck className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-slate-600 shrink-0">Paying as:</span>
                        <span className="text-slate-800 font-medium truncate">
                          {user?.name || user?.email}
                        </span>
                      </div>
                    )}

                    {/* gateway warning */}
                    {!paymentConfig?.configured && (
                      <div className="mt-4 text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                        <span>⚠️</span>
                        <span>Payment gateway not configured</span>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-5 space-y-3">
                      {selectedService && !canPurchaseCurrentSelection ? (
                        <Button
                          type="button"
                          className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3.5 rounded-xl text-base shadow-lg shadow-amber-200 transition-all duration-200"
                          onClick={() => handleEnquireNow(selectedService)}
                        >
                          <div className="flex items-center justify-center gap-2">
                            Enquire Now
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </Button>
                      ) : (
                        <>
                          <Button
                            type="button"
                            disabled={payDisabled}
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl text-base shadow-lg shadow-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                            onClick={() => setShowCustomerModal(true)}
                          >
                            {loading ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                Opening checkout...
                              </div>
                            ) : (
                              <div className="flex items-center justify-center gap-2">
                                Book Now for ₹{displayAmount.toLocaleString('en-IN')}
                                <ArrowRight className="w-5 h-5" />
                              </div>
                            )}
                          </Button>
                          <p className="text-center text-[11px] font-semibold text-rose-600 flex items-center justify-center gap-1.5">
                            <Flame className="w-3.5 h-3.5" />
                            Launch price — goes up to ₹99/month later
                          </p>
                        </>
                      )}

                      {/* trust row */}
                      <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-1">
                        <div className="flex items-center gap-1.5">
                          <Lock className="w-3.5 h-3.5" />
                          <span>Secured by Razorpay</span>
                        </div>
                        <div className="w-px h-4 bg-slate-200" />
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>Instant access</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* guarantee note under card */}
                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Safe UPI payment · Your details stay private</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------- STATS STRIP ------------------------------ */}
        <section className="border-y border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 text-indigo-600 mb-1.5">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-slate-900">5,000+</span>
                </div>
                <p className="text-xs text-slate-600">Active Users</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-indigo-600 mb-1.5">
                  <Trophy className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-slate-900">Appreciated</span>
                </div>
                <p className="text-xs text-slate-600">Value for money</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-indigo-600 mb-1.5">
                  <Globe2 className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-slate-900">🇮🇳</span>
                </div>
                <p className="text-xs text-slate-600">Built for Bharat</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 text-indigo-600 mb-1.5">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-2xl font-extrabold text-slate-900">100%</span>
                </div>
                <p className="text-xs text-slate-600">Secure Payments</p>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------- BENEFITS ------------------------------- */}
        <section className="bg-gradient-to-b from-white to-indigo-50/50">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                <Award className="w-3.5 h-3.5" /> Why this works
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Everything is designed to make you <span className="text-indigo-600">actually speak</span>
              </h2>
              <p className="mt-3 text-slate-600">
                Most people don&apos;t fail English because it&apos;s hard. They fail because they never speak.
                This program fixes that from Day 1.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-200">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-slate-900">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* -------------------------------- ROADMAP -------------------------------- */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                <Target className="w-3.5 h-3.5" /> Your 10-day path
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                From hesitation to confident in 10 days
              </h2>
              <p className="mt-3 text-slate-600">
                A clear, step-by-step climb — starting at absolute ground level.
              </p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {ROADMAP.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="relative bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-2xl p-6"
                  >
                    <span className="absolute top-5 right-5 text-4xl font-extrabold text-slate-100 select-none">
                      {idx + 1}
                    </span>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white border border-indigo-200 text-indigo-700 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" />
                      {step.day}
                    </div>
                    <h3 className="relative mt-4 text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------- SCENARIOS ------------------------------- */}
        <section className="bg-slate-900 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-800/70 via-purple-800/60 to-slate-900" />
          <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 text-white px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                <BookOpen className="w-3.5 h-3.5" /> Huge practice set
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Practise almost every real-life scenario
              </h2>
              <p className="mt-3 text-white/70">
                From ordering chai to closing a client call — if you&apos;ll face it in real life,
                you&apos;ll practise it here.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2.5">
              {SCENARIOS.map((scenario, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-white/10 ring-1 ring-white/15 text-white/90 text-[13px] font-medium px-4 py-2 backdrop-blur-sm hover:bg-white/20 transition-colors"
                >
                  {scenario}
                </span>
              ))}
              <span className="rounded-full bg-amber-500/20 ring-1 ring-amber-400/40 text-amber-200 text-[13px] font-bold px-4 py-2">
                + many more
              </span>
            </div>

            <div className="mt-12 text-center">
              <button
                type="button"
                disabled={payDisabled}
                onClick={() => setShowCustomerModal(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-bold px-7 py-3.5 shadow-xl hover:bg-slate-100 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                Start practising today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ------------------------------ TESTIMONIALS ----------------------------- */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em]">
                <Star className="w-3.5 h-3.5 fill-emerald-600" /> Real progress
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                People who stopped being afraid to speak
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={idx}
                  className="relative bg-gradient-to-b from-slate-50 to-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                >
                  <Quote className="w-7 h-7 text-indigo-200" />
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-slate-200">
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-xs font-bold flex items-center justify-center">
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-slate-900">{item.name}</p>
                      <p className="text-[11px] text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------- FINAL CTA ------------------------------- */}
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-indigo-900">
          <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-fuchsia-400/20 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 py-16 md:py-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
              <Flame className="w-4 h-4" /> Launch price ends soon
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your first confident English sentence is one click away
            </h2>

            <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
              Get a full year of AI-powered speaking practice for the price of a coffee.
              After the launch offer ends, it becomes ₹99 every month.
            </p>

            {/* value stack */}
            <div className="mt-9 mx-auto max-w-lg rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm p-6 text-left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70 mb-4">
                Everything you get
              </p>
              <ul className="space-y-2.5">
                {VALUE_STACK.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-5 border-t border-white/20 flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/60 line-through">₹99 / month after launch</p>
                  <p className="text-3xl font-extrabold text-white leading-tight">
                    ₹{displayAmount.toLocaleString('en-IN')}
                    <span className="text-sm font-semibold text-white/70"> / year</span>
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/20 ring-1 ring-emerald-300/40 text-emerald-200 text-[10px] font-extrabold px-2.5 py-1">
                  SAVE ₹1,089
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {selectedService && !canPurchaseCurrentSelection ? (
                <button
                  type="button"
                  onClick={() => handleEnquireNow(selectedService)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-extrabold px-8 py-4 text-base shadow-2xl hover:from-amber-300 hover:to-orange-400 transition-all"
                >
                  Enquire Now
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={payDisabled}
                  onClick={() => setShowCustomerModal(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-extrabold px-8 py-4 text-base shadow-2xl hover:from-amber-300 hover:to-orange-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Book Now for ₹{displayAmount.toLocaleString('en-IN')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/70">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" /> Secured by Razorpay
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> Instant access after payment
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" /> 5,000+ learners
              </span>
            </div>
          </div>
        </section>

        {/* spacer so the mobile sticky bar never covers footer content */}
        <div className="h-24 lg:hidden" />
      </div>

      {/* --------------------------- MOBILE STICKY CTA --------------------------- */}
      {!showCustomerModal && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 py-3 shadow-[0_-4px_20px_rgba(15,23,42,0.08)]">
          <div className="flex items-center gap-3">
            <div className="min-w-0">
              <p className="text-[10px] text-slate-400 line-through leading-none">
                ₹99/month later
              </p>
              <p className="text-lg font-extrabold text-slate-900 leading-tight">
                ₹{displayAmount.toLocaleString('en-IN')}
                <span className="text-[11px] font-semibold text-slate-500"> /year</span>
              </p>
            </div>

            {selectedService && !canPurchaseCurrentSelection ? (
              <button
                type="button"
                onClick={() => handleEnquireNow(selectedService)}
                className="flex-1 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-3 text-sm shadow-lg"
              >
                Enquire Now
              </button>
            ) : (
              <button
                type="button"
                disabled={payDisabled}
                onClick={() => setShowCustomerModal(true)}
                className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 text-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Opening...' : 'Book Now'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------- CHECKOUT MODAL ------------------------------ */}
      {showCustomerModal && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-slate-950/70 px-4 py-6 overflow-y-auto">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-auto">
            <div className="flex items-start justify-between gap-3 mb-5">
              <div className="min-w-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em]">
                  <Flame className="w-3 h-3" /> Launch Price
                </span>
                <h3 className="mt-2.5 text-xl font-extrabold text-slate-900 leading-snug">
                  Book your Spoken English plan
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  You are just <strong className="text-slate-800">10 days away</strong> from speaking
                  English confidently.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowCustomerModal(false);
                  setCustomerError('');
                }}
                className="shrink-0 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* order summary */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 px-4 py-3 mb-5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                    {displayService?.title ?? 'Spoken English & Fluency'}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 line-through">
                    ₹99 / month after launch
                  </p>
                </div>
                <p className="text-xl font-extrabold text-indigo-600 whitespace-nowrap">
                  ₹{displayAmount.toLocaleString('en-IN')}
                  <span className="text-[11px] font-semibold text-slate-500"> /yr</span>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  value={customerForm.name}
                  onChange={handleCustomerFormChange}
                  ref={nameInputRef}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={customerForm.email}
                  onChange={handleCustomerFormChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  placeholder="Enter your email"
                />
                <p className="mt-1.5 text-[11px] text-slate-500">
                  Your login details will be sent here.
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Phone number <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={customerForm.phone}
                  onChange={handleCustomerFormChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              {customerError && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-sm text-rose-600">
                  {customerError}
                </div>
              )}

              <Button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3.5 rounded-xl text-base shadow-lg shadow-indigo-200"
                onClick={submitCustomerDetails}
              >
                Proceed to Pay ₹{displayAmount.toLocaleString('en-IN')}
              </Button>

              <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" /> Secure payment
                </span>
                <span className="w-px h-3.5 bg-slate-200" />
                <span className="inline-flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Instant access
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}