import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import logo from '../assets/Logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Program', to: '/program' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: 'var(--white)',
        boxShadow: scrolled ? '0 2px 20px rgba(47,80,97,0.12)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 112 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="FORCE Scholar" style={{ height: 100, width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop Nav */}
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

      {/* Mobile Drawer */}
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
  );
}
