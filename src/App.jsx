import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import StudyGroups from './pages/StudyGroups'
import SpokenEnglish from './pages/SpokenEnglish'
import { AuthProvider } from './context/AuthContext'
import SkillAnalysis from './pages/SkillAnalysis'
import Landing from './pages/Landing'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Templates from './pages/Templates'
import Editor from './pages/Editor'
import MyCVs from './pages/MyCVs'
import CVDashboard from './pages/CVDashboard'
import CVDashboardPro from './pages/CVDashboardPro'
import Documents from './pages/Documents'
import Account from './pages/Account'
import DashboardLayout from './components/Layout/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import LandingPageFinal from './pages/LandingPageFinal'
import RecruiterMarketplace from './pages/RecruiterMarketplace'
import AIInterview from './pages/AIInterview'
import PortfolioPage from './pages/PortfolioPage'
import SalesCRM from './pages/SalesCRM'
import InventoryOperations from './pages/InventoryOperations'
import HRMSProductPage from './pages/HRMSProductPage'
import ProjectManagement from './pages/ProjectManagement'
import FinancialLanding from './pages/FinancialLanding'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AccountSettings from './pages/AccountSettings'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'
import AllProducts from './pages/AllProducts'
import CustomAILandingPage from './pages/CustomAI'
import EcommerceLandingPage from './pages/Ecommerce'
import AllGames from './pages/AllGames'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* =====================================================
              PUBLIC ROUTES
          ===================================================== */}

          <Route path="/" element={<Landing />} />

          <Route path="/payment" element={<Payment />} />

          <Route
            path="/payment/success"
            element={<PaymentSuccess />}
          />

          <Route path="/signup" element={<SignUp />} />

          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact />} />

          <Route
            path="/terms-of-service"
            element={<TermsOfService />}
          />

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />

          <Route
            path="/account-settings"
            element={<AccountSettings />}
          />

          <Route path="/faq" element={<FAQ />} />

          <Route path="/about-us" element={<AboutUs />} />

          <Route
            path="/all-products"
            element={<AllProducts />}
          />

          <Route path="/profile/:email" element={<PortfolioPage />} />


          {/* =====================================================
              CAREER VAULT
              Product ID: 1
              Default Plan: career-vault
          ===================================================== */}

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requireSubscription={false}>
                <DashboardLayout><Dashboard /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/account"
            element={
              <ProtectedRoute requireSubscription={false}>
                <DashboardLayout><Account /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            element={
              <ProtectedRoute
                productId={1}
                plan="career-vault"
                requireSubscription={true}
              >
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route
              path="/templates"
              element={<Templates />}
            />

            <Route
              path="/editor/:cvId?"
              element={<Editor />}
            />

            <Route
              path="/my-cvs"
              element={<MyCVs />}
            />
             <Route
              path="/career-vault-dashboard"
              element={<CVDashboard />}
            />
             <Route
              path="/career-vault-pro"
              element={<CVDashboardPro />}
            />
            <Route
              path="/documents"
              element={<Documents />}
            />

            <Route
              path="/landing-page"
              element={<LandingPage />}
            />

            <Route
              path="/landing-page-final"
              element={<LandingPageFinal />}
            />

            <Route
              path="/recruiter-marketplace"
              element={<RecruiterMarketplace />}
            />

            <Route
              path="/portfolio"
              element={<PortfolioPage />}
            />
          </Route>


          {/* =====================================================
              SPOKEN ENGLISH
              Product ID: 2
              Plan: spoken-english
          ===================================================== */}

          <Route
            path="/spoken-english"
            element={
              <ProtectedRoute
                productId={2}
                plan="spoken-english"
                requireSubscription={true}
              >
                <DashboardLayout><SpokenEnglish /></DashboardLayout>
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              BENTURE AI / CAREER VAULT PRO
              Product ID: 3
              Use the slug form so the backend and payment pages resolve the correct service.
          ===================================================== */}

          <Route
            path="/skill-analysis"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><SkillAnalysis /></DashboardLayout>
              </ProtectedRoute>
            }
          />

                 <Route
            path="/hrms"
            element={
              <ProtectedRoute
                productId={3 || 2 ||1}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><HRMSProductPage /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/project-management"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><ProjectManagement /></DashboardLayout>
              </ProtectedRoute>
            }
          />

           <Route
            path="/financial-landing"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><FinancialLanding /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/sales-crm"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><SalesCRM /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/inventory-operations"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><InventoryOperations /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/custom-ai"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><CustomAILandingPage /></DashboardLayout>
              </ProtectedRoute>
            }
          />

           <Route
            path="/e-commerce"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><EcommerceLandingPage /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/games"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><AllGames /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/ai-interview"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><AIInterview /></DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/study-groups"
            element={
              <ProtectedRoute
                productId={3}
                plan="career-vault-pro"
                requireSubscription={true}
              >
                <DashboardLayout><StudyGroups /></DashboardLayout>
              </ProtectedRoute>
            }
          />


          {/* =====================================================
              FALLBACK
          ===================================================== */}

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}