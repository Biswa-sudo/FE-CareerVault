import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getPaymentConfig, startUpiPayment } from '../lib/paymentService';
import { getSubscriptionStatus } from '../lib/localStorage';
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
  Trophy
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

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const rawAmount = searchParams.get('amount');
  const rawPlan = searchParams.get('plan');
  const rawProductId = searchParams.get('product_id');

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

      navigate('/payment/success', { replace: true });
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Payment failed. Please try again.';

      if (message !== 'Payment cancelled.') {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const submitCustomerDetails = () => {
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

    setCustomerError('');
    setShowCustomerModal(false);
    handlePay({
      name: trimmedName,
      email: trimmedEmail,
      phone: trimmedPhone,
    });
  };

  const displayService = selectedService || (selectedPlan.name ? {
    title: selectedPlan.name,
    price: selectedPlan.displayAmount || selectedPlan.amount / 100,
    description: selectedPlan.description,
    unit: 'one-time'
  } : null);

  const displayAmount = selectedService
    ? selectedService.price
    : (selectedPlan.displayAmount || selectedPlan.amount / 100 || 0);

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
      <MainNavbar />
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-2 rounded-full border border-amber-200 text-sm font-medium mb-4">
              <Star className="w-4 h-4 fill-amber-500" />
              Spoken English Program
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">
              Build fluency with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                daily spoken English practice
              </span>
            </h1>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 shadow-lg shadow-indigo-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="flex items-start gap-5">
                  <div className="bg-indigo-100 p-3.5 rounded-xl border border-indigo-200">
                    <MessageSquareText className="w-8 h-8 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
                      Selected Course
                    </p>
                    {displayService ? (
                      <>
                        <h2 className="text-xl font-bold text-slate-800">{displayService.title}</h2>
                        <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-lg">
                          {displayService.description}
                        </p>
                      </>
                    ) : (
                      <div className="flex items-center gap-3 text-slate-500">
                        <span>No service selected</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService?.features?.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end justify-center border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-6">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-600">Total</span>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-indigo-600">₹{displayAmount.toLocaleString('en-IN')}</span>
                      <p className="text-xs text-slate-500">{selectedService?.unit || 'per year'}</p>
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600 flex items-center gap-2">
                      <X className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <div className="space-y-3.5 w-full">
                    {authenticated && (
                      <div className="flex items-center gap-2.5 text-sm bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="bg-indigo-100 p-1.5 rounded-lg">
                          <ShieldCheck className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-slate-600">Paying as:</span>
                        <span className="text-slate-800 font-medium truncate">{user?.name || user?.email}</span>
                      </div>
                    )}

                   

                    {!paymentConfig?.configured && (
                      <div className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                        <span>⚠️</span>
                        <span>Payment gateway not configured</span>
                      </div>
                    )}

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
                      <Button
                        type="button"
                        disabled={loading || !paymentConfig?.configured || !selectedService || !canPurchaseCurrentSelection}
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
                            Book Now
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        )}
                      </Button>
                    )}

                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
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
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <Users className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">5,000+</span>
              </div>
              <p className="text-xs text-slate-600">Active Users</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">DPIIT</span>
              </div>
              <p className="text-xs text-slate-600">Recognized Startup</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <Globe2 className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">🇮🇳</span>
              </div>
              <p className="text-xs text-slate-600">Built for Bharat</p>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">100%</span>
              </div>
              <p className="text-xs text-slate-600">Secure Payments</p>
            </div>
          </div>
        </div>
      </div>

      {showCustomerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">Checkout</p>
                <h3 className="text-xl font-bold text-slate-800">Book your Spoken English plan</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowCustomerModal(false);
                  setCustomerError('');
                }}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close form"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={customerForm.name}
                  onChange={handleCustomerFormChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={customerForm.email}
                  onChange={handleCustomerFormChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone number <span className="text-slate-400">(optional)</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={customerForm.phone}
                  onChange={handleCustomerFormChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-indigo-400 focus:bg-white"
                  placeholder="Enter your phone number"
                />
              </div>

              {customerError && (
                <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-600">
                  {customerError}
                </div>
              )}

              <Button
                type="button"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl text-base shadow-lg shadow-indigo-200"
                onClick={submitCustomerDetails}
              >
                Proceed to Pay ₹{displayAmount.toLocaleString('en-IN')}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
