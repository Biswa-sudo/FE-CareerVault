import { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { getPaymentConfig, startUpiPayment } from '../lib/paymentService';
import { getSubscriptionStatus } from '../lib/localStorage';
import Button from '../components/ui/Button';
import { resolvePaymentPlan } from '../lib/paymentPlans';
import { isPurchaseService, getEnquiryServiceSubject } from '../lib/serviceAccess';
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  BriefcaseBusiness,
  MessageSquareText,
  ArrowRight,
  X,
  CheckCircle2,
  Zap,
  Users,
  Globe2,
  Clock,
  Star,
  Crown,
  Trophy
} from "lucide-react";
import Navbar from '../components/Layout/Navbar';
import MainNavbar from '../components/Layout/MainNavbar';

// Define all available services
const SERVICES = [
  {
    id: "career-vault",
    title: "Career Vault",
    category: "Career & Learning",
    price: 99,
    unit: "per year",
    description: "Centralized professional repository to store credentials, build ATS-friendly CVs, manage up to 5 profiles, and generate shareable recruiter links.",
    icon: BriefcaseBusiness,
    features: [
      "Encrypted Document Storage",
      "Manage Up to 5 Active CVs",
      "Public Portfolio Link",
      "One-Click PDF Export"
    ],
    productId: 1,
    badge: "Popular"
  },
  {
    id: "career-vault-pro",
    title: "Career Vault + AI",
    category: "Career & Learning",
    price: 199,
    unit: "per year",
    description: "Complete Career Vault access enhanced with AI-driven CV scoring, role-specific mock interviews, and automated skill-gap analysis.",
    icon: Sparkles,
    features: [
      "AI CV Optimization & Scoring",
      "Role-Based Mock Interviews",
      "Real-Time Answer Feedback",
      "Skill Progression Tracking"
    ],
    productId: 2,
    badge: "Best Value"
  },
  {
    id: "spoken-english",
    title: "Spoken English & Fluency",
    category: "Career & Learning",
    price: 99,
    unit: "per year",
    description: "Structured daily interactive speech practice designed to build workplace fluency, eliminate hesitation, and master real-world conversations.",
    icon: MessageSquareText,
    features: [
      "Daily Speaking Drills",
      "Real-World Workplace Scenarios",
      "Pronunciation & Tone Guidance",
      "Confidence Milestones"
    ],
    productId: 3
  },
  {
    id: "web-starter",
    title: "Website Development",
    category: "Digital Design & Web",
    price: 1999,
    unit: "starting at",
    description: "Modern, high-performance responsive web pages optimized for fast load times, core web vitals, and immediate lead conversion.",
    icon: Code2,
    features: [
      "Mobile-First Responsive Layout",
      "On-Page SEO Optimization",
      "Lead Capture & Contact Forms",
      "High-Speed Performance Build"
    ],
    productId: 4
  },
  {
    id: "custom-web-app",
    title: "Custom Full-Stack Web App",
    category: "Digital Design & Web",
    price: 24999,
    unit: "starting at",
    description: "Bespoke full-stack applications engineered with React/Next.js, robust database architectures, secure authentication, and payment integration.",
    icon: Layers,
    features: [
      "Custom Architecture & REST/GraphQL APIs",
      "Database & Cloud Storage Setup",
      "Auth, RBAC & Payment Gateways",
      "Complete Source Code Ownership"
    ],
    productId: 5
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    category: "Digital Design & Web",
    price: 34999,
    unit: "starting at",
    description: "Cross-platform iOS and Android applications delivering native performance, smooth animations, and cloud API synchronization.",
    icon: Smartphone,
    features: [
      "Single Codebase iOS & Android",
      "Push Notification Engine",
      "Secure Backend & API Sync",
      "Store Deployment Preparation"
    ],
    productId: 6
  },
  {
    id: "brand-identity",
    title: "UI/UX & Brand Identity",
    category: "Digital Design & Web",
    price: 4999,
    unit: "flat",
    description: "Comprehensive product design encompassing user research, Figma interactive prototypes, scalable design systems, and brand assets.",
    icon: Palette,
    features: [
      "Figma UI Kits & Design Systems",
      "Clickable Interactive Prototypes",
      "Vector Logos & Brand Style Guide",
      "Developer-Ready Asset Handoff"
    ],
    productId: 7
  },
];

export default function UnifiedPayment() {
  const { authenticated, authLoading, user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [configLoading, setConfigLoading] = useState(true);
  const [error, setError] = useState('');
  const [paymentConfig, setPaymentConfig] = useState(null);
  
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const rawAmount = searchParams.get('amount');
  const rawPlan = searchParams.get('plan');
  const rawProductId = searchParams.get('product_id');

  useEffect(() => {
    if (!rawPlan && !rawProductId) {
      return;
    }

    const normalizedPlan = rawPlan ? String(rawPlan).trim().toLowerCase() : '';
    const normalizedProductId = rawProductId ? String(rawProductId).trim() : '';

    const matchedService =
      SERVICES.find((service) => service.id === normalizedPlan) ||
      SERVICES.find((service) => String(service.productId) === normalizedProductId) ||
      SERVICES.find((service) => service.id === normalizedPlan.replace(/_/g, '-'));

    if (matchedService) {
      setSelectedService((current) => (
        current && current.id === matchedService.id ? current : matchedService
      ));
    }
  }, [rawPlan, rawProductId]);

  const selectedPlan = resolvePaymentPlan(rawPlan, {
    amount: rawAmount,
    title: searchParams.get('title'),
    description: searchParams.get('description'),
  });

  const productId =
    selectedPlan.productId ||
    (rawProductId ? Number(rawProductId) : null);

  const canPurchaseCurrentSelection =
    selectedService ? isPurchaseService(selectedService.id)
      : selectedPlan?.key ? isPurchaseService(selectedPlan.key) : false;

  const handleEnquireNow = (service) => {
    const serviceName = getEnquiryServiceSubject(service?.title || selectedService?.title || selectedPlan?.name || 'Service enquiry');
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

  const handlePay = async () => {
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
      setError(
        'This payment plan is not linked to a product. Please contact support.'
      );
      setLoading(false);
      return;
    }

    if (!planToUse) {
      setError(
        'This payment plan is not configured correctly. Please contact support.'
      );
      setLoading(false);
      return;
    }

    try {
      await startUpiPayment({
        amount: amountToPay,
        currency: 'INR',
        description: descriptionToUse,
        plan: planToUse,
        productId: productIdToUse,

        onDismiss: () => {
          setLoading(false);
        },
      });

      navigate('/payment/success', {
        replace: true,
      });
    } catch (e) {
      const message =
        e instanceof Error
          ? e.message
          : 'Payment failed. Please try again.';

      if (message !== 'Payment cancelled.') {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  const loginRedirect = `/login?redirect=${encodeURIComponent(
    location.pathname + location.search
  )}`;

  const selectService = (service) => {
    if (selectedService && selectedService.id === service.id) {
      setSelectedService(null);
    } else {
      setSelectedService(service);
    }
  };

  const categories = ["All", "Career & Learning", "Digital Design & Web"];
  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const displayService = selectedService || (selectedPlan.name ? {
    title: selectedPlan.name,
    price: selectedPlan.displayAmount || selectedPlan.amount / 100,
    description: selectedPlan.description,
    unit: "one-time"
  } : null);

  const displayAmount = selectedService 
    ? selectedService.price 
    : (selectedPlan.displayAmount || selectedPlan.amount / 100 || 0);

  if (authLoading || configLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
          <p className="text-sm text-slate-600">Loading payment...</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <MainNavbar />
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header with brand - matches home page */}
        <div className="flex items-center justify-between mb-10">
          <Link to="/" className="flex items-center gap-2 group">
            {/* <div className="bg-indigo-100 p-2 rounded-xl group-hover:bg-indigo-200 transition-all">
              <span className="text-2xl font-bold text-slate-800">Hyper</span>
              <span className="text-2xl font-bold text-indigo-600">=</span>
            </div> */}
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-600 hidden sm:inline">
              <span className="text-indigo-600 font-semibold">5,000+</span> Users
            </span>
            <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full border border-indigo-200">
              🇮🇳 Built for Bharat
            </span>
          </div>
        </div>

        {/* Hero Section - matches home page style */}
        <div className="text-center mb-12">
          {/* <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-4 py-2 rounded-full border border-amber-200 text-sm font-medium mb-4">
            <Zap className="w-4 h-4 fill-amber-500" />
            LIMITED TIME OFFER
          </div> */}
          <h3 className="text-2xl md:text-5xl font-extrabold tracking-tight text-slate-800 mb-3">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Career Tool
            </span>
          </h3>
          {/* <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Everything you need for your next career move — all in one place.
          </p> */}
        </div>

        {/* Payment Summary Card - Light theme */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 mb-10 shadow-lg shadow-indigo-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: Selected Service */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-5">
                <div className="bg-indigo-100 p-3.5 rounded-xl border border-indigo-200">
                  {selectedService ? (
                    <selectedService.icon className="w-8 h-8 text-indigo-600" />
                  ) : (
                    <ShieldCheck className="w-8 h-8 text-indigo-600" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
                    Selected Service
                  </p>
                  {displayService ? (
                    <>
                      <h2 className="text-xl font-bold text-slate-800">{displayService.title}</h2>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed max-w-lg">
                        {displayService.description}
                      </p>
                      {selectedService && (
                        <button
                          onClick={() => setSelectedService(null)}
                          className="inline-flex items-center gap-1.5 text-xs text-rose-600 hover:text-rose-700 mt-3 transition-colors font-medium"
                        >
                          <X className="w-3.5 h-3.5" />
                          Change selection
                        </button>
                      )}
                    </>
                  ) : (
                    <div className="flex items-center gap-3 text-slate-500">
                      <span>No service selected</span>
                      <span className="text-xs text-slate-400">↓ Choose from below</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Amount & Pay Button */}
            <div className="flex flex-col items-end justify-center border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-6">
              <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-slate-600">Total</span>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-indigo-600">₹{displayAmount.toLocaleString("en-IN")}</span>
                    {selectedService && (
                      <p className="text-xs text-slate-500">{selectedService.unit}</p>
                    )}
                  </div>
                </div>
                
                {error && (
                  <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-600 flex items-center gap-2">
                    <X className="w-4 h-4" />
                    {error}
                  </div>
                )}

                {!authenticated ? (
                  <div className="space-y-2.5">
                    <Link to={loginRedirect}>
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md shadow-indigo-200">
                        Log in to Continue
                      </Button>
                    </Link>
                    <Link to={`/signup?redirect=${encodeURIComponent(location.pathname + location.search)}`}>
                      <Button variant="secondary" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 rounded-xl border border-slate-200">
                        Create Free Account
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3.5 w-full">
                    <div className="flex items-center gap-2.5 text-sm bg-slate-50 p-3 rounded-xl border border-slate-200">
                      <div className="bg-indigo-100 p-1.5 rounded-lg">
                        <ShieldCheck className="w-4 h-4 text-indigo-600" />
                      </div>
                      <span className="text-slate-600">Paying as:</span>
                      <span className="text-slate-800 font-medium truncate">{user?.name || user?.email}</span>
                    </div>
                    
                    {!paymentConfig?.configured && (
                      <div className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                        <span>⚠️</span>
                        Payment gateway not configured
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
                        onClick={handlePay}
                      >
                        {loading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            Opening checkout...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2">
                            Pay ₹{displayAmount.toLocaleString("en-IN")}
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
                      <div className="w-px h-4 bg-slate-200"></div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Instant access</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Light theme matching home page cards */}
        <div className="mt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  All Services
                </span>
              </h2>
              <p className="text-sm text-slate-600 mt-1">Select a service to get started</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category === "All" ? "🔥 All" : category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => {
              const isSelected = selectedService && selectedService.id === service.id;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => selectService(service)}
                  className={`group relative rounded-2xl p-5 border transition-all duration-300 cursor-pointer bg-white ${
                    isSelected
                      ? "border-indigo-500 shadow-xl shadow-indigo-100 ring-2 ring-indigo-500/30"
                      : "border-slate-200 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50"
                  }`}
                >
                  {/* Badge */}
                  {service.badge && (
                    <div className="absolute -top-2.5 right-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-[10px] font-bold text-white shadow-lg shadow-amber-200">
                      {service.badge}
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl transition-all duration-200 ${
                        isSelected ? "bg-indigo-100" : "bg-slate-100 group-hover:bg-indigo-50"
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          isSelected ? "text-indigo-600" : "text-slate-600 group-hover:text-indigo-600"
                        }`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-800">{service.title}</h3>
                        <p className="text-xs text-slate-500">{service.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-bold text-slate-800">₹{service.price.toLocaleString("en-IN")}</span>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{service.unit}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.features.slice(0, 2).map((feat, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-indigo-500" />
                        {feat}
                      </span>
                    ))}
                    {service.features.length > 2 && (
                      <span className="text-[10px] bg-slate-100 px-2.5 py-1 rounded-lg text-slate-500">
                        +{service.features.length - 2} more
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();

                      if (isPurchaseService(service.id)) {
                        selectService(service);
                        return;
                      }

                      handleEnquireNow(service);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-200"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {isPurchaseService(service.id) ? (
                      isSelected ? (
                        <span className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Selected
                        </span>
                      ) : (
                        "Select Service"
                      )
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Enquire Now
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Section - Light theme */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-indigo-600 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl font-bold text-slate-800">100%</span>
              </div>
              <p className="text-xs text-slate-600">Secure Payments</p>
            </div>
          </div>
        </div>

        {/* Footer - Light theme */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-700 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-slate-700 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-slate-700 transition-colors">Contact</Link>
            <Link to="/terms" className="hover:text-slate-700 transition-colors">Terms</Link>
          </div>
          <p>© 2026 Hyper. All rights reserved.</p>
        </div>
      </div>
    </div>
    </>
  );
}