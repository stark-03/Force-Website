import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png';

const SocialIcon = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label}
    style={{ color: 'var(--white)', opacity: 0.85, transition: 'opacity 0.2s' }}
    onMouseEnter={e => e.currentTarget.style.opacity = 1}
    onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
  >
    {children}
  </a>
);

export default function Footer() {
  const legalLinks = [
    { label: 'Terms & Conditions',                     to: '/legal/terms' },
    { label: 'Privacy Policy',                         to: '/legal/privacy' },
    { label: 'Refund Policy',                          to: '/legal/refund' },
    { label: 'Program Participation Agreement',        to: '/legal/participation' },
    { label: 'Student Conduct & Community Policy',     to: '/legal/conduct' },
    { label: 'Child Safety & Minor Protection Policy', to: '/legal/child-safety' },
  ];

  return (
    <footer style={{ background: 'var(--navy)', color: 'var(--white)', paddingTop: 64, paddingBottom: 0 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48, paddingBottom: 48 }} className="footer-grid">
          {/* Col 1 — Brand */}
          <div>
            <img src={logo} alt="FORCE Scholar" style={{ height: 88, width: 'auto', marginBottom: 12, filter: 'brightness(0) invert(1)' }} />
            <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.9, marginBottom: 12 }}>
              Career Exploration Lab for high-school students.
            </p>
            <a href="mailto:hello@forcescholar.com" style={{ fontSize: 14, opacity: 0.85, textDecoration: 'underline' }}>
              hello@forcescholar.com
            </a>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.7, color: 'var(--white)' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['Home', '/'], ['Program', '/program'], ['Contact Us', '/contact']].map(([l, to]) => (
                <Link key={to} to={to} style={{ fontSize: 15, opacity: 0.85, transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.85}
                >{l}</Link>
              ))}
              <a href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer"
                style={{ fontSize: 15, opacity: 0.85, transition: 'opacity 0.2s' }}>Schedule a Call</a>
            </div>
          </div>

          {/* Col 3 — Community */}
          <div>
            <h4 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.7, color: 'var(--white)' }}>
              Community
            </h4>
            <a
              href="https://wa.me/918660274897?text=I%20want%20to%20identify%20my%20child's%20interests%20and%20strengths"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-block', background: 'var(--teal)', color: 'var(--white)', padding: '10px 18px', borderRadius: 5, fontSize: 14, fontWeight: 600, marginBottom: 24, fontFamily: 'Barlow, sans-serif' }}
            >
              Join 500+ FORCE Parents on WhatsApp
            </a>
            <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
              <SocialIcon href="https://www.instagram.com/forcescholar/" label="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@forcescholar" label="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://www.linkedin.com/company/forcescholar/" label="LinkedIn">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h4 style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20, opacity: 0.7, color: 'var(--white)' }}>
              Legal
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {legalLinks.map(({ label, to }) => (
                <Link key={to} to={to}
                  style={{ fontSize: 13, opacity: 0.75, transition: 'opacity 0.2s', lineHeight: 1.4, color: 'inherit' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 1}
                  onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
                >{label}</Link>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', padding: '20px 0', textAlign: 'center' }}>
          <p style={{ fontSize: 13, opacity: 0.7 }}>© 2026 FORCE Scholar. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
