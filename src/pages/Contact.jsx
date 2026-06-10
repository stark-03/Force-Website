import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, scaleUp } from '../utils/animations';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconWhatsApp = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);
const IconCalendar = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconMail = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const grades = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11'];

const countryCodes = [
  { dial: '+91',  label: '🇮🇳 +91'  },
  { dial: '+1',   label: '🇺🇸 +1'   },
  { dial: '+44',  label: '🇬🇧 +44'  },
  { dial: '+971', label: '🇦🇪 +971' },
  { dial: '+974', label: '🇶🇦 +974' },
  { dial: '+965', label: '🇰🇼 +965' },
  { dial: '+966', label: '🇸🇦 +966' },
  { dial: '+61',  label: '🇦🇺 +61'  },
  { dial: '+65',  label: '🇸🇬 +65'  },
  { dial: '+60',  label: '🇲🇾 +60'  },
  { dial: '+64',  label: '🇳🇿 +64'  },
  { dial: '+49',  label: '🇩🇪 +49'  },
  { dial: '+33',  label: '🇫🇷 +33'  },
  { dial: '+81',  label: '🇯🇵 +81'  },
  { dial: '+82',  label: '🇰🇷 +82'  },
];

const contactMethods = [
  {
    icon: <IconWhatsApp />,
    tag: 'Fastest response',
    title: 'Chat on WhatsApp',
    desc: 'Get quick answers to your questions. Our team typically responds within minutes during business hours.',
    detail: '+91 8660274897',
    cta: 'Open WhatsApp',
    href: 'https://wa.me/918660274897?text=I%20want%20to%20identify%20my%20child%27s%20interests%20and%20strengths',
    accent: 'var(--teal)',
    accentBg: 'rgba(66,151,160,0.09)',
    btnClass: 'btn-teal',
  },
  {
    icon: <IconCalendar />,
    tag: 'Recommended',
    title: 'Book a free call',
    desc: 'Schedule a 30-minute conversation with our team to understand if FORCE is the right fit for your child.',
    detail: 'Free · 30 min · Online',
    cta: 'Book on Calendly',
    href: 'https://calendly.com/forcescholar/lets-connect',
    accent: 'var(--teal)',
    accentBg: 'rgba(66,151,160,0.09)',
    btnClass: 'btn-teal',
  },
  {
    icon: <IconMail />,
    tag: 'Always open',
    title: 'Send an email',
    desc: 'Prefer to write? Send us a detailed message and we will get back to you within 24 hours.',
    detail: 'hello@forcescholar.com',
    cta: 'Send an Email',
    href: 'mailto:hello@forcescholar.com',
    accent: 'var(--navy)',
    accentBg: 'rgba(47,80,97,0.07)',
    btnClass: 'btn-navy',
  },
];

// ─── Paste your deployed Apps Script Web App URL here ────────────────────────
const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzwqWpSAuMEipfImftJU9qyjH06Z36tn4AsAIMGdN8BndolK7OORxOGknrO9AwIwxQ/exec';

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '', email: '', countryCode: '+91', phone: '', grade: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!formRef.current.reportValidity()) return;
    setStatus('submitting');
    try {
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          name: form.name,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`,
          grade: form.grade,
          message: form.message,
        }),
      });
      setStatus('success');
      setForm({ name: '', email: '', countryCode: '+91', phone: '', grade: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputBase = {
    width: '100%', padding: '14px 18px', borderRadius: 5,
    border: '1.5px solid rgba(47,80,97,0.14)',
    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15,
    color: 'var(--navy)', background: 'var(--white)',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s',
  };
  const chevron = `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 7L11 1' stroke='%232F5061' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round'/%3E%3C/svg%3E")`;
  const selectStyle = { ...inputBase, cursor: 'pointer', appearance: 'none', backgroundImage: chevron, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' };

  const onFocus = e => { e.target.style.borderColor = 'var(--teal)'; e.target.style.boxShadow = '0 0 0 3px rgba(66,151,160,0.12)'; };
  const onBlur  = e => { e.target.style.borderColor = 'rgba(47,80,97,0.14)'; e.target.style.boxShadow = 'none'; };

  const Label = ({ text, required, optional }) => (
    <label style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--navy)', marginBottom: 8, display: 'block', letterSpacing: '0.02em' }}>
      {text}{required && <span style={{ color: 'var(--teal)', marginLeft: 3 }}>*</span>}
      {optional && <span style={{ fontWeight: 400, color: 'rgba(47,80,97,0.45)', marginLeft: 6 }}>(optional)</span>}
    </label>
  );

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ background: 'var(--navy)', padding: '100px 0 90px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{
          position: 'absolute', right: -40, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 260,
          color: 'rgba(255,255,255,0.03)', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
        }}>TALK</div>
        <div style={{ position: 'absolute', left: -80, top: -80, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(66,151,160,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', left: -44, top: -44, width: 170, height: 170, borderRadius: '50%', border: '1px solid rgba(66,151,160,0.22)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} variants={staggerContainer} style={{ maxWidth: 620 }}>
            <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>Contact Us</motion.span>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 900,
              fontSize: 'clamp(38px, 6vw, 70px)', color: 'var(--white)',
              lineHeight: 1.06, letterSpacing: '-0.025em', marginBottom: 24,
            }}>
              Let's talk about<br />
              <span style={{ color: 'var(--teal)' }}>your child's future.</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18,
              color: 'rgba(255,255,255,0.68)', lineHeight: 1.72,
            }}>
              Whether you have questions or want to understand if FORCE is the right fit — we're here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Three contact method cards ── */}
      <section style={{ background: 'var(--white)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            className="contact-methods"
          >
            {contactMethods.map(m => (
              <motion.div
                key={m.title} variants={fadeUp}
                whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(47,80,97,0.14)' }}
                transition={{ duration: 0.3 }}
                style={{ background: 'var(--white)', borderRadius: 5, borderTop: `3px solid ${m.accent}`, boxShadow: 'var(--shadow-card)', padding: '36px 32px 40px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 5, background: m.accentBg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: m.accent, marginBottom: 20 }}>{m.icon}</div>
                <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: m.accent, marginBottom: 8 }}>{m.tag}</p>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--navy)', marginBottom: 12, lineHeight: 1.2 }}>{m.title}</h3>
                <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, color: 'var(--black)', lineHeight: 1.72, marginBottom: 20, opacity: 0.8, flexGrow: 1 }}>{m.desc}</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', background: m.accentBg, borderRadius: 5, padding: '6px 12px', marginBottom: 24, alignSelf: 'flex-start' }}>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, color: m.accent }}>{m.detail}</span>
                </div>
                <a href={m.href} target="_blank" rel="noreferrer" className={`btn ${m.btnClass}`} style={{ alignSelf: 'flex-start', fontSize: 14, padding: '11px 22px' }}>
                  {m.cta} →
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section style={{ background: 'var(--platinum)', padding: '80px 0 100px' }}>
        <div className="container" style={{ maxWidth: 740, margin: '0 auto' }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 48 }}>
            <motion.span variants={fadeUp} className="eyebrow">Direct Message</motion.span>
            <motion.h2 variants={fadeUp} style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 'clamp(26px, 4vw, 40px)', color: 'var(--navy)' }}>
              Or send us a message directly.
            </motion.h2>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={scaleUp}>
            {/* noValidate so we control validation via reportValidity() */}
            <form ref={formRef} noValidate style={{ background: 'var(--white)', borderRadius: 5, padding: '48px', boxShadow: 'var(--shadow-hover)' }}>

              {/* Row 1 — Name + Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                <div>
                  <Label text="Your Name" required />
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
                <div>
                  <Label text="Email Address" required />
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputBase} onFocus={onFocus} onBlur={onBlur} />
                </div>
              </div>

              {/* Row 2 — Phone (with country code) + Grade */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }} className="form-row">
                <div>
                  <Label text="WhatsApp Number" required />
                  <div style={{ display: 'flex', gap: 8 }}>
                    {/* Country code selector */}
                    <select
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      style={{ ...selectStyle, width: 110, flexShrink: 0, padding: '14px 28px 14px 10px', fontSize: 14 }}
                      onFocus={onFocus} onBlur={onBlur}
                    >
                      {countryCodes.map(c => (
                        <option key={c.dial} value={c.dial}>{c.label}</option>
                      ))}
                    </select>
                    {/* Number input */}
                    <input
                      name="phone" type="tel" required
                      value={form.phone} onChange={handleChange}
                      placeholder="xxxxx xxxxx"
                      style={{ ...inputBase, flex: 1 }}
                      onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                </div>
                <div>
                  <Label text="Child's Grade" required />
                  <select name="grade" value={form.grade} onChange={handleChange} required
                    style={selectStyle} onFocus={onFocus} onBlur={onBlur}>
                    <option value="">Select grade</option>
                    {grades.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 32 }}>
                <Label text="Your Message" optional />
                <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                  placeholder="Tell us about your child, their grade, and any specific questions you have..."
                  style={{ ...inputBase, resize: 'none', lineHeight: 1.65 }}
                  onFocus={onFocus} onBlur={onBlur} />
              </div>

              <div style={{ height: 1, background: 'rgba(47,80,97,0.08)', marginBottom: 24 }} />

              {/* Success state */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                  style={{ textAlign: 'center', padding: '28px 20px', background: 'rgba(66,151,160,0.07)', borderRadius: 5, border: '1.5px solid rgba(66,151,160,0.25)' }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>✅</div>
                  <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--teal)', marginBottom: 6 }}>
                    Message received!
                  </p>
                  <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--navy)', opacity: 0.7, lineHeight: 1.6 }}>
                    We'll get back to you within 24 hours. Keep an eye on your inbox.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: 18, fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'var(--teal)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={status === 'submitting'}
                    className="btn btn-teal"
                    style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px 24px', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Submit'}
                  </button>

                  {status === 'error' && (
                    <p style={{ marginTop: 12, textAlign: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: '#d4183d' }}>
                      Something went wrong. Please try again or reach out on WhatsApp.
                    </p>
                  )}

                  <p style={{ marginTop: 16, textAlign: 'center', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(47,80,97,0.4)', lineHeight: 1.6 }}>
                    We respond within 24 hours · No spam · Just a real conversation
                  </p>
                </>
              )}
            </form>
          </motion.div>

          {/* Social icons */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp} style={{ marginTop: 52, textAlign: 'center' }}>
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: 20, opacity: 0.5 }}>
              Follow FORCE Scholar
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              {[
                { href: 'https://www.instagram.com/forcescholar/', label: 'Instagram', icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                { href: 'https://www.youtube.com/@forcescholar', label: 'YouTube', icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
                { href: 'https://www.linkedin.com/company/forcescholar/', label: 'LinkedIn', icon: <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                  style={{ width: 44, height: 44, borderRadius: 5, background: 'var(--navy)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--teal)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                >{s.icon}</a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-methods { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
          form { padding: 28px !important; }
        }
      `}</style>
    </>
  );
}
