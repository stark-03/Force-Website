import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  // Close menu on route change or when navbar hides
  useEffect(() => setMenuOpen(false), [location]);
  useEffect(() => { if (hidden) setMenuOpen(false); }, [hidden]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Hide after 100px on scroll down; reveal immediately on scroll up
      if (y > lastScrollY.current && y > 100) {
        setHidden(true);
      } else if (y < lastScrollY.current) {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Program', to: '/program' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>
      {/* Fixed nav — Framer Motion owns the y transform entirely */}
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{
          opacity: 1,
          y: hidden ? '-100%' : 0,
        }}
        transition={{
          opacity: { duration: 0.4, ease: 'easeOut' },
          y: { duration: 0.34, ease: [0.4, 0, 0.2, 1] },
        }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: 'var(--white)',
          boxShadow: scrolled
            ? '0 4px 28px rgba(47,80,97,0.13)'
            : '0 2px 12px rgba(47,80,97,0.07)',
          willChange: 'transform',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 112 }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="FORCE Scholar" style={{ height: 100, width: 'auto', display: 'block' }} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-desktop">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  fontFamily: 'IBM Plex Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 15,
                  color: location.pathname === l.to ? 'var(--teal)' : 'var(--navy)',
                  transition: 'color 0.2s',
                }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://calendly.com/forcescholar/lets-connect"
              target="_blank"
              rel="noreferrer"
              className="btn btn-teal"
              style={{ padding: '10px 20px', fontSize: 14 }}
            >
              Schedule a Call
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="nav-hamburger"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 24, height: 2, background: 'var(--navy)', marginBottom: 5, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div style={{ width: 24, height: 2, background: 'var(--navy)', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
            <div style={{ width: 24, height: 2, background: 'var(--navy)', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden', background: 'var(--white)', borderTop: '1px solid rgba(0,0,0,0.06)' }}
            >
              <div className="container" style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {links.map(l => (
                  <Link
                    key={l.to}
                    to={l.to}
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 16, color: 'var(--navy)', padding: '8px 0' }}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="https://calendly.com/forcescholar/lets-connect"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-teal"
                  style={{ alignSelf: 'flex-start', marginBottom: 8 }}
                >
                  Schedule a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          @media (max-width: 768px) {
            .nav-desktop { display: none !important; }
            .nav-hamburger { display: block !important; }
          }
        `}</style>
      </motion.nav>

      {/* Spacer — reserves 112px so content doesn't hide under the fixed nav */}
      <div style={{ height: 112 }} />
    </>
  );
}
