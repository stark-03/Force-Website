import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight } from '../utils/animations';

const grades = ['Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', grade: '', message: '' });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const msg = `I need to know more about FORCE Scholar.%0AName: ${form.name}%0AChild's Grade: ${form.grade}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918660274897?text=${msg}`, '_blank');
  };

  const inputStyle = {
    width: '100%',
    padding: '13px 16px',
    borderRadius: 5,
    border: '1px solid rgba(47,80,97,0.2)',
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontSize: 15,
    color: 'var(--navy)',
    background: 'var(--white)',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontFamily: 'IBM Plex Sans, sans-serif',
    fontWeight: 500,
    fontSize: 13,
    color: 'var(--navy)',
    marginBottom: 6,
    display: 'block',
  };

  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="contact-grid">

          {/* Left — Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
            <motion.h1 variants={fadeUp} style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 56px)', color: 'var(--navy)', marginBottom: 20, lineHeight: 1.1 }}>
              Let's talk about<br />your child's future.
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 16, color: 'var(--black)', marginBottom: 48, lineHeight: 1.7 }}>
              Whether you have questions or want to understand if FORCE is the right fit — we're here to help.
            </motion.p>

            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 24 }}>📞</span>
                <div>
                  <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>WhatsApp</p>
                  <p style={{ fontSize: 15, color: 'var(--black)', marginBottom: 10 }}>+91 8660274897</p>
                  <a href="https://wa.me/918660274897?text=I%20need%20to%20know%20more%20about%20FORCE%20Scholar" target="_blank" rel="noreferrer" className="btn btn-teal" style={{ padding: '10px 20px', fontSize: 14 }}>
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 24 }}>📅</span>
                <div>
                  <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>Schedule a Call</p>
                  <p style={{ fontSize: 15, color: 'var(--black)', marginBottom: 10 }}>Book a free 30-minute conversation</p>
                  <a href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer" className="btn btn-coral" style={{ padding: '10px 20px', fontSize: 14 }}>
                    Book a Free Call
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{ fontSize: 24 }}>📧</span>
                <div>
                  <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 14, color: 'var(--navy)', marginBottom: 6 }}>Email</p>
                  <a href="mailto:hello@forcescholar.com" style={{ fontSize: 15, color: 'var(--teal)', fontWeight: 500 }}>hello@forcescholar.com</a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13, color: 'var(--navy)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 16 }}>Follow Us</p>
              <div style={{ display: 'flex', gap: 16 }}>
                {[
                  { href: 'https://www.instagram.com/forcescholar/', label: 'Instagram', icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
                  { href: 'https://www.youtube.com/@forcescholar', label: 'YouTube', icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg> },
                  { href: 'https://www.linkedin.com/company/forcescholar/', label: 'LinkedIn', icon: <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    style={{ width: 44, height: 44, borderRadius: 5, background: 'var(--navy)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--teal)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight}>
            <form onSubmit={handleSubmit} style={{ background: 'var(--platinum)', borderRadius: 5, padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <h2 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 24, color: 'var(--navy)', marginBottom: 4 }}>Send us a message</h2>
              <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--black)', marginBottom: 8 }}>We'll get back to you within 24 hours.</p>

              <div>
                <label style={labelStyle}>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Enter your name" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(47,80,97,0.2)'} />
              </div>

              <div>
                <label style={labelStyle}>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(47,80,97,0.2)'} />
              </div>

              <div>
                <label style={labelStyle}>Phone Number (optional)</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 xxxxx xxxxx" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(47,80,97,0.2)'} />
              </div>

              <div>
                <label style={labelStyle}>Child's Grade *</label>
                <select name="grade" value={form.grade} onChange={handleChange} required style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(47,80,97,0.2)'}>
                  <option value="">Select grade</option>
                  {grades.map(g => <option key={g} value={g}>{g}</option>)}
                </select>
              </div>

              <div>
                <label style={labelStyle}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="I need to..." rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                  onFocus={e => e.target.style.borderColor = 'var(--teal)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(47,80,97,0.2)'} />
              </div>

              <button type="submit" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '15px' }}>
                Send via WhatsApp →
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}
