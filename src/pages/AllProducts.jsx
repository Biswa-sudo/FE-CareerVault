import React, { useState } from "react";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Scissors, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  QrCode,
  BriefcaseBusiness,
  MessageSquareText
} from "lucide-react";

const SERVICES = [
  // Career & Learning
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
  },
  {
    id: "career-vault-ai",
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
  },

  // Digital Design & Engineering
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
  },

];

export default function AllProducts() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [clientInfo, setClientInfo] = useState({ name: "", email: "", phone: "", notes: "" });
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const categories = ["All","Career & Learning", "Digital Design & Web"];

  const toggleService = (service) => {
    if (selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const totalAmount = selectedServices.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert("Please select at least one service to proceed.");
      return;
    }
    // Build a payment redirect for the existing /payment page.
    // The backend accepts an `amount` (paise) and `plan`/`description` in the create-order payload.
    const paise = Math.round(totalAmount * 100);
    const title = selectedServices.map((s) => s.title).join(' + ');
    const description = selectedServices.map((s) => s.description).join(' | ');

    console.log('[AllProducts] Payment redirect:', { totalAmount, paise, title });

    const params = new URLSearchParams({
      plan: 'custom-bundle',
      amount: String(paise),
      title,
      description,
    });

    const paymentUrl = `/payment?${params.toString()}`;
    console.log('[AllProducts] Redirecting to:', paymentUrl);

    // Redirect to the payment page which will start Razorpay checkout with the provided amount
    window.location.href = paymentUrl;
  };

  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-indigo-400 font-semibold tracking-wider text-xs uppercase bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            DesignDons Studio Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-4 text-white">
            Digital Engineering & Precision Fabrication
          </h1>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            Select the services you need, customize your package, and initiate your project securely.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                    : "bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Services & Checkout Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => {
              const isSelected = selectedServices.some((s) => s.id === service.id);
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all duration-200 relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-slate-900/90 border-indigo-500 shadow-xl shadow-indigo-950/50 ring-1 ring-indigo-500"
                      : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60"
                  }`}
                >
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2.5 rounded-xl ${isSelected ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">{service.unit}</span>
                        <span className="text-xl font-bold text-white">₹{service.price.toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-xs text-indigo-400 mb-2 font-medium">{service.category}</p>
                    <p className="text-sm text-slate-400 mb-4">{service.description}</p>
                  </div>

                  {/* Features & Action Button */}
                  <div>
                    <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-4">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-2 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30"
                          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {isSelected ? "Selected ✓" : "+ Add to Package"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Checkout Summary Panel */}
          <div className="lg:col-span-4 sticky top-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>

              {selectedServices.length === 0 ? (
                <div className="py-8 text-center border-2 border-dashed border-slate-800 rounded-xl mb-6">
                  <p className="text-sm text-slate-400">No services selected yet.</p>
                  <p className="text-xs text-slate-500 mt-1">Click on any card to add it to your order.</p>
                </div>
              ) : (
                <div className="space-y-3 mb-6 max-h-56 overflow-y-auto pr-1">
                  {selectedServices.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-slate-950/60 p-3 rounded-lg border border-slate-800/60">
                      <div className="pr-2">
                        <p className="text-sm font-medium text-slate-200 line-clamp-1">{item.title}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleService(item);
                          }}
                          className="text-xs text-rose-400 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-white">₹{item.price.toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Total Calculation */}
              <div className="border-t border-slate-800 pt-4 mb-6">
                <div className="flex justify-between text-sm text-slate-400 mb-1">
                  <span>Subtotal</span>
                  <span>₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white mt-2 pt-2 border-t border-slate-800/50">
                  <span>Total Payable</span>
                  <span className="text-indigo-400 text-xl">₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Client Info Form */}
              <form onSubmit={handlePayment} className="space-y-4">

                <button
                  type="submit"
                  disabled={selectedServices.length === 0}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                    selectedServices.length > 0
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30"
                      : "bg-slate-800 text-slate-500 cursor-not-allowed"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  Pay ₹{totalAmount.toLocaleString("en-IN")}
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-500">
                  🔒 Secure transaction via UPI & encrypted gateway
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}