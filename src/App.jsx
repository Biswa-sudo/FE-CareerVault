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
import Documents from './pages/Documents'
import Account from './pages/Account'
import DashboardLayout from './components/Layout/DashboardLayout'
import ProtectedRoute from './routes/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import LandingPageFinal from './pages/LandingPageFinal'
import RecruiterMarketplace from './pages/RecruiterMarketplace'
import AIInterview from './pages/AIInterview'
import PortfolioPage from './pages/PortfolioPage'
import Contact from './pages/Contact'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AccountSettings from './pages/AccountSettings'
import FAQ from './pages/FAQ'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Protected routes inside dashboard layout */}
          <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/editor/:cvId?" element={<Editor />} />
            <Route path="/my-cvs" element={<MyCVs />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/account" element={<Account />} />
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/landing-page-final" element={<LandingPageFinal />} />
            <Route path="/spoken-english" element={<SpokenEnglish />} />
            <Route path="/skill-analysis" element={<SkillAnalysis />} />
            <Route path="/recruiter-marketplace" element={<RecruiterMarketplace />} />
            <Route path="/ai-interview" element={<AIInterview />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/study-groups" element={<StudyGroups />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}
