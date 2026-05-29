import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, slideInRight, scaleUp } from '../utils/animations';

// ─── SVG Icon Library ─────────────────────────────────────────────────────────
const IconCalendar = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IconMentor = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <polyline points="16 11 18 13 22 9"/>
  </svg>
);
const IconGlobe = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconMonitor = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);
const IconUsers = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const IconChart = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

// ─── Stage Icons ──────────────────────────────────────────────────────────────
const StageIcon1 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <path d="M9 12l2 2 4-4"/>
    <path d="M9 17h4"/>
  </svg>
);
const StageIcon2 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const StageIcon3 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9z"/>
  </svg>
);
const StageIcon4 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
  </svg>
);
const StageIcon5 = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 11 22 2 13 21 11 13 3 11"/>
  </svg>
);

// ─── Section 1: Program Hero ──────────────────────────────────────────────────
function ProgramHero() {
  const features = ['Career Guidance', 'Harvard-Style Case Studies', 'AI & Future Skills', 'Real-World Projects'];
  return (
    <section style={{ background: 'var(--navy)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'Barlow, sans-serif', fontWeight: 900,
        fontSize: 'clamp(120px, 18vw, 260px)',
        color: 'rgba(255,255,255,0.025)', lineHeight: 1, whiteSpace: 'nowrap',
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
      }}>STEAM-X</div>

      {/* Decorative circles */}
      <div style={{ position: 'absolute', right: -100, top: -100, width: 360, height: 360, borderRadius: '50%', border: '1px solid rgba(66,151,160,0.12)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', right: -50, top: -50, width: 210, height: 210, borderRadius: '50%', border: '1px solid rgba(66,151,160,0.18)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }} className="hero-grid">

          {/* Left — white text on navy */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
            <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>The Program</motion.span>
            <motion.h1 variants={fadeUp} style={{
              fontSize: 'clamp(32px, 3.8vw, 52px)', fontWeight: 900,
              color: 'var(--white)', marginBottom: 20, lineHeight: 1.08,
              letterSpacing: '-0.02em',
            }}>
              Career Exploration Lab<br />
              <span style={{ color: 'var(--coral)' }}>— STEAM-X</span>
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', marginBottom: 32, lineHeight: 1.75 }}>
              A structured 6-week journey that helps students discover their interests, explore interdisciplinary careers, and build future-ready skills through case studies, AI tools, and real-world projects.
            </motion.p>
            <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 40 }}>
              {features.map(f => (
                <motion.div key={f} variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ color: 'var(--teal)', fontWeight: 800, fontSize: 18, lineHeight: 1 }}>✓</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 16, color: 'rgba(255,255,255,0.88)' }}>{f}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.a variants={scaleUp} href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer" className="btn btn-coral" style={{ fontSize: 16 }}>
              Schedule a Call →
            </motion.a>
          </motion.div>

          {/* Right — white card with teal accent */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight}
            style={{
              background: 'var(--white)',
              borderRadius: 5, overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
            }}>
            {/* Teal top band */}
            <div style={{ background: 'linear-gradient(135deg, var(--teal) 0%, #2e7d86 100%)', padding: '28px 36px' }}>
              <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>
                STEAM-X Program
              </p>
              <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.9)' }}>
                For students in Grades 7–12 who are ready to explore what they are good at and where their interests can take them.
              </p>
            </div>

            {/* Stats rows */}
            <div style={{ padding: '8px 36px 36px' }}>
              {[['6 Weeks', 'Structured journey'], ['Live Online', 'Weekend sessions'], ['Small Cohort', 'Personal attention'], ['1:1 Mentorship', 'Guided growth']].map(([title, sub], i) => (
                <div key={title} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '18px 0',
                  borderBottom: i < 3 ? '1px solid rgba(47,80,97,0.08)' : 'none',
                }}>
                  <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--navy)' }}>{title}</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'rgba(47,80,97,0.5)' }}>{sub}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  );
}

// ─── Section 2: 5 Stages ──────────────────────────────────────────────────────
const stages = [
  { num: '01', title: 'Student Assessments', icon: <StageIcon1 />, bullets: ['Identify interests, strengths & values', 'Guided reflection with mentor conversations'] },
  { num: '02', title: 'Career Exploration', icon: <StageIcon2 />, bullets: ['Explore 25+ interdisciplinary careers', 'Go beyond Science & Tech into Arts & Humanities'] },
  { num: '03', title: 'Skill Development', icon: <StageIcon3 />, bullets: ['Build critical thinking & AI literacy', 'Collaboration, problem-solving & leadership'] },
  { num: '04', title: 'Real-World Projects', icon: <StageIcon4 />, bullets: ['Apply learning through case studies', 'Collaborative presentations & activities'] },
  { num: '05', title: 'Direction & Pathways', icon: <StageIcon5 />, bullets: ['Build clarity on career pathways', 'Connect interests to academic decisions'] },
];

function Journey() {
  return (
    <section style={{ background: 'var(--navy)', padding: '110px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Large decorative number watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: -60, left: -30,
        fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 320,
        color: 'rgba(255,255,255,0.03)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
      }}>05</div>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '36% 64%', alignItems: 'start' }} className="journey-outer">

          {/* Sticky left title panel */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}
            style={{
              position: 'sticky', top: 120,
              paddingRight: 56, paddingBottom: 40,
              borderRight: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {/* Teal accent line */}
            <div style={{ width: 3, height: 44, background: 'var(--teal)', borderRadius: 2, marginBottom: 24 }} />
            <span className="eyebrow" style={{ color: 'var(--teal)' }}>The Journey</span>
            <h2 style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 900,
              fontSize: 'clamp(32px, 3.5vw, 52px)', color: 'var(--white)',
              lineHeight: 1.1, marginBottom: 20,
            }}>
              5 Stages of the STEAM-X Career Exploration Lab
            </h2>
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.72 }}>
              A structured journey from self-discovery to future direction.
            </p>
          </motion.div>

          {/* Right — 2-top + 3-bottom card grid */}
          <div style={{ paddingLeft: 0 }}>
            <div style={{ border: '1px solid rgba(255,255,255,0.14)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="stages-grid">
                {stages.map((s, i) => {
                  const col = [1, 2, 1, 2, 3][i];
                  const row = i < 2 ? 1 : 2;
                  return (
                    <motion.div
                      key={s.num}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false, amount: 0.15 }}
                      whileHover={{ background: 'rgba(255,255,255,0.04)' }}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] } } }}
                      style={{
                        padding: '36px 28px',
                        gridColumn: col, gridRow: row,
                        border: '1px solid rgba(255,255,255,0.1)',
                        margin: '-0.5px',
                        minHeight: 230,
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                        cursor: 'default', transition: 'background 0.25s',
                      }}
                    >
                      {/* Icon in small teal square */}
                      <div style={{
                        width: 40, height: 40, borderRadius: 5,
                        background: 'rgba(66,151,160,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--teal)', marginBottom: 16, flexShrink: 0,
                      }}>{s.icon}</div>

                      <p style={{
                        fontFamily: 'Barlow, sans-serif', fontWeight: 900,
                        fontSize: 12, color: 'var(--coral)', letterSpacing: '0.14em', marginBottom: 7,
                      }}>{s.num}</p>
                      <h3 style={{
                        fontFamily: 'Barlow, sans-serif', fontWeight: 800,
                        fontSize: 17, color: 'var(--white)', marginBottom: 14, lineHeight: 1.25,
                      }}>{s.title}</h3>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                        {s.bullets.map(b => (
                          <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                            <span style={{ color: 'var(--teal)', fontSize: 13, lineHeight: 1.6, flexShrink: 0 }}>—</span>
                            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-outer { grid-template-columns: 1fr !important; }
          .journey-outer > div:first-child { position: static !important; border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.12); padding-right: 0 !important; padding-bottom: 40px; margin-bottom: 8px; }
          .stages-grid { grid-template-columns: 1fr !important; }
          .stages-grid > div { grid-column: auto !important; grid-row: auto !important; min-height: auto !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .journey-outer { grid-template-columns: 40% 60% !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 3: Program Details ───────────────────────────────────────────────
// Alternate band colors across the 6 cards for visual rhythm
const detailBands = [
  'linear-gradient(135deg, #4297A0 0%, #2e7d86 100%)',
  'linear-gradient(135deg, #2F5061 0%, #1e3a4a 100%)',
  'linear-gradient(135deg, #E57F80 0%, #c96a6b 100%)',
  'linear-gradient(135deg, #2F5061 0%, #1e3a4a 100%)',
  'linear-gradient(135deg, #4297A0 0%, #2e7d86 100%)',
  'linear-gradient(135deg, #E57F80 0%, #c96a6b 100%)',
];

const details = [
  { icon: <IconCalendar />, num: '01', title: 'Weekly Live Sessions', body: 'Interactive 2–3 hour weekend sessions designed around case studies, discussions, projects, and skill-building activities.' },
  { icon: <IconMentor />, num: '02', title: '1:1 Mentorship', body: 'Personalized guidance conversations with mentors and educators to help students reflect on their interests, strengths, and next steps.' },
  { icon: <IconGlobe />, num: '03', title: 'Real-World Learning', body: 'Students learn through case studies, projects, debates, discussions, and interdisciplinary exploration instead of passive lectures.' },
  { icon: <IconMonitor />, num: '04', title: 'Conducted Online', body: 'Live sessions via Zoom and collaborative digital tools, allowing students to participate from anywhere.' },
  { icon: <IconUsers />, num: '05', title: 'Small Cohort Model', body: 'Students learn in an interactive community where they can share ideas, ask questions, and receive mentor attention.' },
  { icon: <IconChart />, num: '06', title: 'Parent Progress Insights', body: "Parents receive meaningful feedback on the student's participation, observed strengths, interest patterns, and recommended next steps." },
];

function ProgramDetails() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow">Program Details</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>What's included</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="details-grid">
          {details.map((d, i) => (
            <motion.div key={d.title} variants={fadeUp}
              whileHover={{ y: -10, boxShadow: '0 24px 72px rgba(47,80,97,0.18)' }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--white)', borderRadius: 5,
                boxShadow: 'var(--shadow-card)',
                willChange: 'transform', overflow: 'hidden',
              }}>

              {/* Colored top band */}
              <div style={{
                background: detailBands[i], padding: '28px 24px 24px',
                position: 'relative', overflow: 'hidden',
              }}>
                <span aria-hidden="true" style={{
                  position: 'absolute', right: -4, bottom: -16,
                  fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 80,
                  color: 'rgba(255,255,255,0.12)', lineHeight: 1,
                  userSelect: 'none', pointerEvents: 'none',
                }}>{d.num}</span>

                <div style={{
                  width: 50, height: 50, borderRadius: 5,
                  background: 'rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', marginBottom: 16,
                }}>{d.icon}</div>

                <p style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700,
                  fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                }}>{d.num}</p>
              </div>

              {/* White text section */}
              <div style={{ padding: '24px 24px 32px' }}>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 18, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.2 }}>{d.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--black)', lineHeight: 1.78, opacity: 0.82 }}>{d.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) { .details-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .details-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 4: Is This For My Child? ────────────────────────────────────────
const listItems = [
  'are curious about the future',
  'want exposure to different careers',
  'feel confused about what to pursue',
  'have many interests but no clear direction',
  'want to build real-world skills',
  'enjoy interdisciplinary learning',
  'want to learn how to use AI meaningfully',
  'are looking for mentorship, confidence, and direction',
];

function ForMyChild() {
  return (
    <section className="section" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: -60, transform: 'translateY(-50%)',
        fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 300,
        color: 'rgba(255,255,255,0.025)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
      }}>?</div>

      <div className="container" style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center' }}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>Is This Right For Your Child?</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--white)', marginBottom: 48 }}>This is for students who…</motion.h2>

          <motion.div variants={staggerContainer} style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
            {listItems.map((item, i) => (
              <motion.div key={item}
                variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] } } }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.06)', borderRadius: 5, padding: '15px 22px' }}>
                <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: 16, flexShrink: 0 }}>✓</span>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.88)' }}>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p variants={fadeUp} style={{ marginTop: 52, fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 800, fontSize: 22, color: 'var(--coral)', lineHeight: 1.45 }}>
            They do not need to have everything figured out.<br />They only need curiosity and willingness to explore.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5: Student Testimonials ─────────────────────────────────────────
const students = [
  { name: 'Pravartika', src: '/Pravartika-Testimonial.mp4' },
  { name: 'Megh',       src: '/Megh-Testimonial.mp4' },
  { name: 'Tanishka',   src: '/Tanishka-Testimonial.mp4' },
  { name: 'Risha',      src: '/Risha-Testimonial.mp4' },
];

function VideoSlide({ name, src, onPlayingChange }) {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const videoRef = useRef(null);

  // Capture the first meaningful frame as thumbnail via a hidden video element
  useEffect(() => {
    setThumbnail(null);
    setPlaying(false);

    const vid = document.createElement('video');
    vid.muted = true;
    vid.playsInline = true;
    vid.preload = 'metadata';
    vid.src = src;
    let done = false;

    const capture = () => {
      if (done) return;
      done = true;
      const canvas = document.createElement('canvas');
      canvas.width = vid.videoWidth || 640;
      canvas.height = vid.videoHeight || 360;
      try {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL('image/jpeg', 0.85));
      } catch {
        // Canvas tainted by security policy — gradient fallback stays
      }
      vid.src = '';
    };

    vid.addEventListener('loadedmetadata', () => {
      // Seek to 8% of duration (max 1s) to skip black opening frames
      vid.currentTime = Math.min(1, (vid.duration || 2) * 0.08);
    });
    vid.addEventListener('seeked', capture);
    vid.load();

    return () => { vid.src = ''; };
  }, [src]);

  const handlePlay = () => {
    setPlaying(true);
    onPlayingChange?.(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
    }, 50);
  };

  const handlePause = () => {
    if (!videoRef.current?.ended) onPlayingChange?.(false);
  };
  const handleEnded = () => {
    setPlaying(false);
    onPlayingChange?.(false);
  };

  return (
    <div style={{ position: 'relative', background: '#000', aspectRatio: '16/9' }}>
      {!playing && (
        <div onClick={handlePlay} style={{
          position: 'absolute', inset: 0, zIndex: 3, cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          // Show gradient until real thumbnail is ready
          background: thumbnail ? 'transparent' : 'linear-gradient(135deg, var(--navy) 0%, #1e5c6e 50%, var(--teal) 100%)',
        }}>
          {/* Real video frame — shown once captured */}
          {thumbnail && (
            <>
              <img src={thumbnail} alt="" style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
              }} />
              {/* Dark scrim so play button and name are always legible */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,55,76,0.60)' }} />
            </>
          )}

          {/* Play button */}
          <motion.div whileHover={{ scale: 1.12 }} style={{
            width: 76, height: 76, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)',
            border: '2px solid rgba(255,255,255,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 20, position: 'relative', zIndex: 2,
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
              <polygon points="6 3 20 12 6 21 6 3"/>
            </svg>
          </motion.div>

          <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', position: 'relative', zIndex: 2 }}>{name}</p>
          <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.65)', marginTop: 4, position: 'relative', zIndex: 2 }}>
            Student Testimonial · Click to watch
          </p>
        </div>
      )}
      <video ref={videoRef} src={src} controls playsInline
        onPause={handlePause}
        onEnded={handleEnded}
        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', background: '#000' }} />
    </div>
  );
}

function StudentTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [videoPlaying, setVideoPlaying] = useState(false);

  // Auto-advance is suspended while a video is actively playing
  useEffect(() => {
    if (videoPlaying) return;
    const t = setInterval(() => { setDirection(1); setCurrent(c => (c + 1) % students.length); }, 6000);
    return () => clearInterval(t);
  }, [videoPlaying]);

  const go = (idx) => {
    setVideoPlaying(false); // navigating away always stops the playing state
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + students.length) % students.length);
  const next = () => go((current + 1) % students.length);

  const ArrowBtn = ({ onClick, children, side }) => (
    <button onClick={onClick} style={{
      position: 'absolute', top: '40%', transform: 'translateY(-50%)',
      [side]: -60,
      background: 'var(--white)', border: '2px solid var(--teal)',
      color: 'var(--teal)', borderRadius: '50%',
      width: 48, height: 48, fontSize: 22, fontWeight: 700, cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 10, transition: 'all 0.2s', boxShadow: 'var(--shadow-card)',
    }}
    onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#fff'; }}
    onMouseLeave={e => { e.currentTarget.style.background = 'var(--white)'; e.currentTarget.style.color = 'var(--teal)'; }}
    >{children}</button>
  );

  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span variants={fadeUp} className="eyebrow">Student Voices</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Hear from students.</motion.h2>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: 780, margin: '0 auto' }}>
          <ArrowBtn onClick={prev} side="left">‹</ArrowBtn>
          <ArrowBtn onClick={next} side="right">›</ArrowBtn>

          <div style={{ overflow: 'hidden', borderRadius: 5, boxShadow: 'var(--shadow-deep)' }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <VideoSlide name={students[current].name} src={students[current].src} onPlayingChange={setVideoPlaying} />
                <div style={{ background: 'var(--navy)', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <p style={{ color: 'var(--white)', fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 17 }}>{students[current].name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.48)', fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, marginTop: 2 }}>Student Testimonial</p>
                  </div>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.32)' }}>{current + 1} / {students.length}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 20 }}>
            {students.map((_, i) => (
              <button key={i} onClick={() => go(i)} style={{
                width: i === current ? 28 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer',
                background: i === current ? 'var(--teal)' : 'rgba(47,80,97,0.22)',
                transition: 'all 0.3s', padding: 0,
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Outcomes ──────────────────────────────────────────────────────
const outcomes = [
  'Greater self-awareness',
  'Exposure to 25+ future careers',
  'Stronger communication skills',
  'Interdisciplinary thinking',
  'Hands-on AI tool experience',
  'Real-world project experience',
  'Improved confidence in expressing ideas',
  'Clearer next steps for future exploration',
];

function Outcomes() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--coral)' }}>Outcomes</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>What students gain<br />by the end of the lab.</motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }} className="outcomes-grid">
          {outcomes.map(o => (
            <motion.div key={o} variants={fadeUp}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                background: 'var(--platinum)', borderRadius: 5, padding: '18px 20px',
                borderLeft: '3px solid var(--teal)',
              }}>
              <span style={{ color: 'var(--teal)', fontWeight: 800, fontSize: 18, flexShrink: 0, lineHeight: 1.3 }}>✓</span>
              <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 15, color: 'var(--navy)', lineHeight: 1.45 }}>{o}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) { .outcomes-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .outcomes-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 7: Topics ────────────────────────────────────────────────────────
const topics = ['Artificial Intelligence', 'Climate Change', 'Biotechnology', 'Psychology', 'Cybersecurity', 'Robotics', 'Digital Media', 'Healthcare', 'Sports Science', 'Urban Futures', 'Entrepreneurship', 'Space Technology', 'Human Behavior', 'Sustainability', 'Economics', 'Design & Innovation', 'And more…'];

function Topics() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ marginBottom: 48 }}>
          <motion.span variants={fadeUp} className="eyebrow">What Students Explore</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 44px)', marginBottom: 16 }}>
            Students explore future-facing themes<br />and careers across disciplines.
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 40 }}>
          {topics.map((t, i) => (
            <motion.span key={t}
              variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ scale: 1.06, background: 'var(--navy)', color: 'var(--white)' }}
              style={{
                background: 'var(--teal)', color: 'var(--white)', borderRadius: 5,
                padding: '9px 18px', fontFamily: 'IBM Plex Sans, sans-serif',
                fontWeight: 500, fontSize: 14, cursor: 'default',
                transition: 'background 0.2s, color 0.2s',
              }}
            >{t}</motion.span>
          ))}
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
          style={{ fontSize: 16, color: 'var(--navy)', maxWidth: 560, margin: '0 auto', opacity: 0.8 }}>
          Each topic opens up multiple career pathways — helping students expand their career vocabulary beyond the usual options.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 8: FAQ ───────────────────────────────────────────────────────────
const faqs = [
  { q: 'What is the FORCE STEAM-X Career Exploration Lab?', a: 'A 6-week live online career exploration program that helps students in grades 7–12 discover their interests, explore interdisciplinary careers, and build future-ready skills through case studies, AI tools, and real-world projects.' },
  { q: 'Who is this program for?', a: 'Grades 8–12 students who are curious, confused, or multi-interested — students who want direction, exposure to different careers, and a structured way to explore what they are good at.' },
  { q: 'Is this only for students interested in science and technology?', a: 'No. STEAM-X includes science and technology but also design, business, humanities, media, sustainability, psychology, entrepreneurship, AI, and more. It is built for students with any kind of interest.' },
  { q: 'How is this different from regular career counselling?', a: 'Regular counselling begins with a test. FORCE begins with experiences. Students explore, engage, and reflect — building self-awareness through doing, not just answering questionnaires.' },
  { q: 'What will students do during the program?', a: 'Live online sessions including case studies, group discussions, AI-based activities, project work, presentations, and mentor feedback.' },
  { q: 'What kinds of topics and careers will students explore?', a: 'Climate change, AI, sustainability, biotechnology, astronomy, media literacy, economics, entrepreneurship, geopolitics, arts, culture, and many more interdisciplinary fields.' },
  { q: 'Will students learn AI tools?', a: 'Yes. Students use AI for brainstorming, research, feedback, idea development, and project work. We also teach responsible AI use and how to distinguish human thinking from AI output.' },
  { q: 'What skills will my child build?', a: 'Communication, critical thinking, collaboration, creativity, problem-solving, leadership, digital literacy, and media literacy — all built through hands-on activities.' },
  { q: 'What outcomes can parents expect after 6 weeks?', a: 'Clearer understanding of interests and strengths, exposure to multiple future-facing careers, AI tool experience, improved communication, and greater confidence in talking about their future.' },
  { q: 'Will my child receive a report or feedback?', a: 'Yes. Parents receive meaningful feedback on participation, observed strengths, interest patterns, and recommended next steps at the end of the program.' },
  { q: 'Is there homework or work outside the live sessions?', a: 'Short reflection tasks, research prompts, AI activities, or project work. The workload is designed to be manageable alongside school commitments.' },
  { q: 'How much time will my child need to commit?', a: '3–5 hours per week, including live sessions and light independent work. Sessions are scheduled on weekends to avoid interfering with school.' },
  { q: 'What are the expectations from students?', a: 'Attend on time, participate actively, respect others, complete assignments, and maintain academic honesty throughout the program.' },
  { q: 'What is the program fee?', a: '₹[Insert Fee]. This includes live sessions, case studies, AI activities, project work, feedback, and parent-facing progress insights. Limited scholarships or instalment options may be available.' },
  { q: 'What happens after the 6-week program ends?', a: 'Students can continue with deeper career guidance, personalized mentoring, project development, portfolio-building, or long-term career roadmap planning with FORCE.' },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const active = open || hovered;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: '1px solid rgba(47,80,97,0.1)',
        background: active ? 'rgba(66,151,160,0.06)' : 'transparent',
        borderLeft: `3px solid ${active ? 'var(--teal)' : 'transparent'}`,
        padding: '0 16px 0 14px',
        margin: '0 -17px',
        borderRadius: 5,
        transition: 'background 0.2s, border-left-color 0.2s',
      }}
    >
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', background: 'none', border: 'none', padding: '22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, cursor: 'pointer', textAlign: 'left' }}>
        <span style={{
          fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 17, lineHeight: 1.4,
          color: active ? 'var(--teal)' : 'var(--navy)',
          transition: 'color 0.2s',
        }}>{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300, fontSize: 28, color: 'var(--teal)', flexShrink: 0, lineHeight: 1 }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}>
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, color: 'var(--black)', lineHeight: 1.78, paddingBottom: 22, paddingRight: 32, opacity: 0.85 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span variants={fadeUp} className="eyebrow">Frequently Asked Questions</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Questions parents ask.</motion.h2>
        </motion.div>
        <div>{faqs.map(f => <FAQItem key={f.q} {...f} />)}</div>
      </div>
    </section>
  );
}

// ─── Section 9: Final CTA ──────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="section" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'Barlow, sans-serif', fontWeight: 900,
        fontSize: 'clamp(80px, 14vw, 200px)',
        color: 'rgba(255,255,255,0.025)', lineHeight: 1, whiteSpace: 'nowrap',
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
      }}>FORCE</div>

      <div className="container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 48px)', color: 'var(--white)', marginBottom: 24 }}>
            Still wondering if this is<br />right for your child?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, color: 'rgba(245,245,247,0.78)', lineHeight: 1.78, marginBottom: 40 }}>
            Every student's journey is different. Some need exposure. Some need confidence. Some need help connecting their many interests. Some need a mentor who can observe them closely and help them understand themselves better.
            <br /><br />
            Book a conversation with the FORCE team to understand whether the STEAM-X Career Exploration Lab is the right fit for your child.
          </motion.p>
          <motion.a variants={scaleUp} href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer" className="btn btn-coral" style={{ fontSize: 17 }}>
            Book a Free Conversation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Program() {
  return (
    <>
      <ProgramHero />
      <Journey />
      <ProgramDetails />
      <ForMyChild />
      <StudentTestimonials />
      <Outcomes />
      <Topics />
      <FAQ />
      <FinalCTA />
    </>
  );
}
