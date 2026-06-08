import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppCTA from './components/WhatsAppCTA';
import { CalendlyProvider } from './components/CalendlyModal';
import Home from './pages/Home';
import Program from './pages/Program';
import Contact from './pages/Contact';
import {
  TermsAndConditions,
  PrivacyPolicy,
  RefundPolicy,
  ParticipationAgreement,
  StudentConductPolicy,
  ChildSafetyPolicy,
} from './pages/Legal';
import './index.css';

const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} variants={pageVariants} initial="hidden" animate="visible" exit="exit">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms" element={<TermsAndConditions />} />
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/refund" element={<RefundPolicy />} />
          <Route path="/legal/participation" element={<ParticipationAgreement />} />
          <Route path="/legal/conduct" element={<StudentConductPolicy />} />
          <Route path="/legal/child-safety" element={<ChildSafetyPolicy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CalendlyProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppCTA />
      </CalendlyProvider>
    </BrowserRouter>
  );
}

export default App;
