import { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CalendlyCtx = createContext(() => {});
export const useOpenCalendly = () => useContext(CalendlyCtx);

export function CalendlyProvider({ children }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <CalendlyCtx.Provider value={() => setOpen(true)}>
      {children}
      <AnimatePresence>
        {open && <CalendlyModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </CalendlyCtx.Provider>
  );
}

function CalendlyModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(12, 24, 32, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ scale: 0.88, opacity: 0, y: 28 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 16 }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: 920,
          height: 'min(680px, 88vh)',
          background: '#fff',
          borderRadius: 10,
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 40px 120px rgba(0,0,0,0.45)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 24px',
          borderBottom: '1px solid rgba(47,80,97,0.1)',
          background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 34, height: 34, background: 'var(--teal)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--navy)', lineHeight: 1.2 }}>
                Book a Discovery Call
              </p>
              <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'rgba(47,80,97,0.5)', marginTop: 2 }}>
                FORCE Scholar · 30 min · Free · Video call
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(47,80,97,0.07)', border: 'none',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--navy)', fontSize: 18, lineHeight: 1,
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(47,80,97,0.14)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(47,80,97,0.07)'; }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Calendly iframe */}
        <iframe
          src="https://calendly.com/forcescholar/lets-connect?hide_gdpr_banner=1&background_color=ffffff&text_color=2F5061&primary_color=4297A0"
          title="Schedule a call with FORCE Scholar"
          style={{ flex: 1, border: 'none', display: 'block', width: '100%' }}
          allow="camera; microphone; fullscreen"
        />
      </motion.div>
    </motion.div>
  );
}
