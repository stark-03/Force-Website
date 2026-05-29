import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, slideInLeft, slideInRight, scaleUp, wobble } from '../utils/animations';
import heroBanner from '../assets/Hero_Banner.png';
import screen2_1 from '../assets/Screen2_1.png';
import screen2_2 from '../assets/Screen2_2.png';

// ─── SVG Icons ────────────────────────────────────────────────────────────────
const IconCompass = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);
const IconBook = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const IconSpark = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9z"/>
  </svg>
);

// ─── Section 1: Hero ─────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '94vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: 'cover', backgroundPosition: 'center right', zIndex: 0,
      }} />
      {/* Gradient that reveals the image on the right */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(47,80,97,0.96) 0%, rgba(47,80,97,0.80) 40%, rgba(47,80,97,0.22) 70%, transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: 560 }}>

          {/* Floating pill badge */}
          <motion.div variants={fadeUp} style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.22)', borderRadius: 40,
            padding: '9px 18px', marginBottom: 32,
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: 'var(--coral)',
              display: 'inline-block', boxShadow: '0 0 10px rgba(229,127,128,0.9)',
            }} />
            <span style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13,
              color: 'rgba(255,255,255,0.9)', letterSpacing: '0.09em', textTransform: 'uppercase',
            }}>Career Development Lab</span>
          </motion.div>

          {/* H1 — two lines, second in coral */}
          <motion.h1 variants={staggerContainer} style={{
            fontSize: 'clamp(46px, 6.5vw, 80px)',
            fontWeight: 900, color: '#fff',
            marginBottom: 26, lineHeight: 1.06, letterSpacing: '-0.025em',
          }}>
            <motion.span variants={fadeUp} style={{ display: 'block' }}>Identify your</motion.span>
            <motion.span variants={fadeUp} style={{ display: 'block', color: 'var(--coral)' }}>child's strengths.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontSize: 18, color: 'rgba(255,255,255,0.8)',
            marginBottom: 40, fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400, lineHeight: 1.72, maxWidth: 440,
          }}>
            Career Development Lab for high-school students to build unique 21st century careers.
          </motion.p>

          {/* CTA pair */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer"
              className="btn btn-coral" style={{ fontSize: 16, padding: '15px 34px' }}>
              Get Started →
            </a>
            <a href="https://wa.me/918660274897?text=I%20need%20to%20know%20more%20about%20FORCE%20Scholar"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 15,
                color: 'rgba(255,255,255,0.78)', borderBottom: '1px solid rgba(255,255,255,0.36)',
                paddingBottom: 2, textDecoration: 'none', transition: 'color 0.2s',
              }}>
              Chat on WhatsApp
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll pulse */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: 34, left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        }}
      >
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.38))' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(255,255,255,0.45)' }} />
      </motion.div>

      <style>{`@media (max-width: 768px) { .hero-inner { padding: 60px 24px !important; } }`}</style>
    </section>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────
function StatsBand() {
  const stats = [
    { num: '6-Week', label: 'Structured Journey' },
    { num: '25+', label: 'Careers Explored' },
    { num: '1:1', label: 'Mentorship Included' },
    { num: '100%', label: 'Live & Online' },
  ];
  return (
    <section style={{ background: 'var(--teal)', padding: '48px 0' }}>
      <div className="container">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} style={{
              textAlign: 'center', padding: '4px 24px',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            }}>
              <p style={{
                fontFamily: 'Barlow, sans-serif', fontWeight: 900,
                fontSize: 'clamp(26px, 3vw, 44px)', color: '#fff', lineHeight: 1.1, marginBottom: 6,
              }}>{s.num}</p>
              <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'rgba(255,255,255,0.72)' }}>{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stats-grid > div { border-right: none !important; padding: 16px 12px !important; }
          .stats-grid > div:nth-child(1),
          .stats-grid > div:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.18) !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 2: Two Types of Students ────────────────────────────────────────
const pills1 = ['Design', 'Psychology', 'Filmmaking', 'Climate Science', 'Entrepreneurship', 'Music'];
const pills2 = ['Academic Excellence', 'Top Grades (99/100)', 'Strong Fundamentals', 'Consistent Performer'];

const pillPositions = [
  { top: '8%',  left: '6%'  },
  { top: '8%',  right: '6%' },
  { top: '36%', left: '4%'  },
  { top: '52%', right: '4%' },
  { bottom: '14%', left: '6%' },
  { bottom: '7%',  right: '6%' },
];

function StudentCard({ num, title, quote, img, pills, accentColor, accentBg }) {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 24px 72px rgba(47,80,97,0.18)' }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'var(--white)', borderRadius: 5, overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
        flex: '1 1 340px', maxWidth: 520,
        borderTop: `4px solid ${accentColor}`,
      }}
    >
      {/* Image with overlays */}
      <div style={{ position: 'relative', height: 370, overflow: 'hidden' }}>
        <motion.img
          src={img} alt={title}
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Bottom gradient — only for legibility, not to obscure */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
          background: 'linear-gradient(to top, rgba(47,80,97,0.45), transparent)',
        }} />

        {/* Floating pills */}
        {pills.map((p, i) => (
          <motion.div
            key={p}
            variants={wobble}
            animate="animate"
            transition={{ delay: i * 0.5 }}
            style={{
              position: 'absolute',
              ...pillPositions[i % pillPositions.length],
              background: 'rgba(255,255,255,0.94)',
              border: `1.5px solid ${accentColor}`,
              color: 'var(--navy)',
              borderRadius: 5, padding: '5px 14px',
              fontSize: 12, fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600,
              whiteSpace: 'nowrap', backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 14px rgba(0,0,0,0.15)', zIndex: 2,
            }}>{p}</motion.div>
        ))}
      </div>

      {/* Text */}
      <div style={{ padding: '28px 32px 36px', position: 'relative', overflow: 'hidden' }}>
        {/* Watermark number */}
        <span aria-hidden="true" style={{
          position: 'absolute', right: -8, bottom: -20,
          fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 110,
          color: accentBg, lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>{num}</span>

        <h3 style={{
          fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22,
          color: 'var(--navy)', marginBottom: 14, lineHeight: 1.2, position: 'relative',
        }}>{title}</h3>
        <p style={{
          fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 600,
          fontSize: 16, color: 'var(--navy)', lineHeight: 1.65, opacity: 0.78, position: 'relative',
        }}>"{quote}"</p>
      </div>
    </motion.div>
  );
}

function TwoStudents() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.span variants={fadeUp} className="eyebrow">The Career Confusion</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>We see 2 types of students.</motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 17, color: 'var(--black)', maxWidth: 500, margin: '16px auto 0', lineHeight: 1.7, fontFamily: 'IBM Plex Sans, sans-serif', opacity: 0.8 }}>
            Both share one thing — they need direction, not just information.
          </motion.p>
        </motion.div>

        <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap', justifyContent: 'center' }}>
          <StudentCard
            num="01" title="Confused by too many interests."
            quote="I love design, psychology, climate science and film-making. How do I choose?"
            img={screen2_1} pills={pills1}
            accentColor="var(--teal)" accentBg="rgba(66,151,160,0.06)"
          />
          <StudentCard
            num="02" title="Clueless because no interest feels clear yet."
            quote="I'm good at school but I don't know what I should study further."
            img={screen2_2} pills={pills2}
            accentColor="var(--coral)" accentBg="rgba(229,127,128,0.06)"
          />
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} variants={scaleUp} style={{ textAlign: 'center', marginTop: 72 }}>
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 900,
            fontSize: 'clamp(24px, 3vw, 38px)', color: 'var(--teal)', letterSpacing: '-0.01em',
          }}>Both need direction.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 3: Problem Statement ────────────────────────────────────────────
function ProblemStatement() {
  return (
    <section style={{ background: '#EEF7F8', padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} variants={staggerContainer}>
          <motion.p variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20,
            color: 'var(--navy)', marginBottom: 32, lineHeight: 1.7,
          }}>
            After years of school, many students still struggle to answer a simple question:
          </motion.p>
          <motion.h2
            variants={scaleUp}
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: 'clamp(48px, 8vw, 88px)',
              color: 'var(--coral)',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            "What am I good at?"
          </motion.h2>
          <motion.div variants={fadeUp} style={{ width: 100, height: 4, background: 'var(--coral)', margin: '0 auto', borderRadius: 2 }} />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4: Career Exploration ───────────────────────────────────────────
function CareerExploration() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ maxWidth: 700, margin: '0 auto 56px' }}>
          <motion.span variants={fadeUp} className="eyebrow">Our Approach</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginBottom: 20 }}>
            Introducing<br />Career Exploration.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 17, color: 'var(--black)', lineHeight: 1.75, opacity: 0.85 }}>
            A structured program for high-school students to understand who they are, what they are good at, and then turn that self-awareness into making confident career choices.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={scaleUp}
          style={{
            position: 'relative', maxWidth: 820, margin: '0 auto',
            borderRadius: 5, overflow: 'hidden',
            boxShadow: '0 0 0 4px var(--coral), 0 24px 80px rgba(47,80,97,0.2)',
          }}
        >
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/Oh6zcYHigqY"
              title="Career Exploration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5: Three Pillars ─────────────────────────────────────────────────
const pillars = [
  {
    icon: <IconCompass />, title: 'Career Guidance', num: '01',
    body: '1:1 mentorship helping students understand their interests, strengths, values, and learning patterns to build meaningful career pathways.',
    band: 'linear-gradient(135deg, #4297A0 0%, #2e7d86 100%)',
  },
  {
    icon: <IconBook />, title: 'Harvard-style Case Studies', num: '02',
    body: 'Students explore interdisciplinary careers by solving real-world problems across Science, Technology, Engineering, Management, and Humanities/Arts.',
    band: 'linear-gradient(135deg, #E57F80 0%, #c96a6b 100%)',
  },
  {
    icon: <IconSpark />, title: 'AI based Workshops', num: '03',
    body: 'Students develop critical thinking, communication, AI literacy, decision-making, and problem-solving skills through hands-on learning experiences.',
    band: 'linear-gradient(135deg, #2F5061 0%, #1e3a4a 100%)',
  },
];

function ThreePillars() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow">How It Works</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}>Three pillars. One goal.</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
          className="pillars-grid"
        >
          {pillars.map(p => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -10, boxShadow: '0 24px 72px rgba(47,80,97,0.18)' }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'var(--white)', borderRadius: 5,
                boxShadow: 'var(--shadow-card)',
                willChange: 'transform', overflow: 'hidden',
              }}
            >
              {/* Colored top band */}
              <div style={{
                background: p.band, padding: '32px 28px 28px',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Large ghost number in band */}
                <span aria-hidden="true" style={{
                  position: 'absolute', right: -4, bottom: -16,
                  fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 96,
                  color: 'rgba(255,255,255,0.12)', lineHeight: 1,
                  userSelect: 'none', pointerEvents: 'none',
                }}>{p.num}</span>

                {/* Icon in white-tinted circle */}
                <div style={{
                  width: 56, height: 56, borderRadius: 5,
                  background: 'rgba(255,255,255,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', marginBottom: 20,
                }}>{p.icon}</div>

                <p style={{
                  fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700, fontSize: 11,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                }}>{p.num}</p>
              </div>

              {/* White text section */}
              <div style={{ padding: '28px 28px 36px' }}>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 21, color: 'var(--navy)', marginBottom: 12, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--black)', lineHeight: 1.78, opacity: 0.82 }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: 56, fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--navy)', opacity: 0.75 }}>
          Three interconnected pillars, one overarching goal —{' '}
          <span style={{ color: 'var(--teal)', fontWeight: 800 }}>Confident Career Choices.</span>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 6A: The New Rule ─────────────────────────────────────────────────
function NewRule() {
  return (
    <section style={{ background: 'var(--navy)', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Large watermark word */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        fontFamily: 'Barlow, sans-serif', fontWeight: 900,
        fontSize: 'clamp(100px, 16vw, 230px)',
        color: 'rgba(255,255,255,0.025)', lineHeight: 1, whiteSpace: 'nowrap',
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.04em',
      }}>PARALLEL</div>

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>The New Rule</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 900,
              fontSize: 'clamp(40px, 7vw, 80px)',
              color: 'var(--coral)', lineHeight: 1.08, marginBottom: 32,
            }}
          >
            Career Exploration<br />runs in parallel to<br />Academics.
          </motion.h2>
          <motion.div variants={fadeUp} style={{ width: 56, height: 3, background: 'var(--teal)', margin: '0 auto 28px', borderRadius: 2 }} />
          <motion.p variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18,
            color: 'rgba(255,255,255,0.72)', marginBottom: 44,
            maxWidth: 560, margin: '0 auto 44px',
          }}>
            Students should not wait until grade 10 to discover who they are.
          </motion.p>
          <motion.a
            variants={scaleUp}
            href="https://wa.me/918660274897?text=I%20need%20to%20know%20more%20about%20FORCE%20Scholar"
            target="_blank" rel="noreferrer"
            className="btn btn-coral" style={{ fontSize: 16 }}
          >
            Talk to Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6B: Testimonials ─────────────────────────────────────────────────
const quotes = [
  { text: 'FORCE changed the way we talk about careers at home.', attr: 'Grade 10, CBSE, Dubai' },
  { text: 'For the first time, my daughter could clearly explain why she was interested in something.', attr: 'Grade 9, IGCSE, India' },
  { text: "What stood out to us was how seriously they treated each student's individuality.", attr: 'Year 8, IB, Qatar' },
  { text: 'FORCE created the kind of learning environment we always wished schools would provide.', attr: 'Grade 10, ICSE, India' },
  { text: 'They helped our child feel seen.', attr: 'A Level, IGCSE, Kuwait' },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const prev = () => go((current - 1 + quotes.length) % quotes.length);
  const next = () => go((current + 1) % quotes.length);

  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setCurrent(c => (c + 1) % quotes.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--coral)' }}>Parents Speak</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16 }}>Real Stories. Real Impact.</motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 16, color: 'var(--black)', maxWidth: 520, margin: '0 auto', fontFamily: 'IBM Plex Sans, sans-serif', opacity: 0.82 }}>
            Parents share how FORCE is helping their children discover clarity, confidence, and direction for the future.
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }} className="testi-grid">
          {/* Portrait video */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInLeft}>
            <div style={{
              borderRadius: 5, overflow: 'hidden',
              boxShadow: 'var(--shadow-deep)',
              border: '4px solid var(--white)',
            }}>
              <video controls playsInline style={{ width: '100%', display: 'block' }}>
                <source src="/V2-Sandy-Testimonial.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{
              marginTop: 14, fontSize: 13, color: 'var(--navy)',
              fontStyle: 'italic', textAlign: 'center', opacity: 0.55,
              fontFamily: 'IBM Plex Sans, sans-serif',
            }}>"Hear from parents about their journey with FORCE."</p>
          </motion.div>

          {/* Quote carousel */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight} style={{ paddingTop: 8 }}>
            <div style={{ overflow: 'hidden' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ x: direction * 48, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction * -48, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'var(--white)',
                    borderLeft: '4px solid var(--coral)',
                    borderRadius: 5, padding: '40px 40px 36px',
                    boxShadow: 'var(--shadow-hover)',
                  }}
                >
                  <span style={{
                    display: 'block', fontFamily: 'Georgia, serif',
                    fontSize: 80, lineHeight: 0.65, color: 'var(--coral)',
                    opacity: 0.18, marginBottom: 20, userSelect: 'none',
                  }}>"</span>
                  <p style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20,
                    color: 'var(--navy)', lineHeight: 1.68, marginBottom: 24, fontWeight: 400,
                  }}>
                    {quotes[current].text}
                  </p>
                  <span style={{ fontSize: 14, color: 'var(--teal)', fontWeight: 600, fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    — {quotes[current].attr}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots + arrows row — both below the card */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
              {/* Dots */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {quotes.map((_, i) => (
                  <button key={i} onClick={() => go(i)} style={{
                    width: i === current ? 28 : 8, height: 8,
                    background: i === current ? 'var(--coral)' : 'rgba(47,80,97,0.18)',
                    borderRadius: 4, border: 'none', cursor: 'pointer',
                    transition: 'all 0.3s', padding: 0,
                  }} />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div style={{ display: 'flex', gap: 10 }}>
                {[{ fn: prev, label: '‹' }, { fn: next, label: '›' }].map(({ fn, label }) => (
                  <button
                    key={label}
                    onClick={fn}
                    style={{
                      width: 40, height: 40, borderRadius: '50%',
                      border: '2px solid var(--coral)', background: 'transparent',
                      color: 'var(--coral)', fontSize: 20, fontWeight: 700,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--coral)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--coral)'; }}
                  >{label}</button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: 72, fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: 'var(--teal)' }}>
          More than a program. A partnership in your child's future.
        </motion.p>
      </div>

      <style>{`@media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}

// ─── Section 7: Co-Founders ───────────────────────────────────────────────────
const founders = [
  {
    name: 'Ankitt Sushilanand',
    initials: 'AS',
    title: 'Co-Founder | Harvard Graduate School of Education',
    bio: "Ankitt's work sits at the intersection of education, adolescent development, and real-world learning. After beginning his journey in engineering and spending nearly a decade leading global teams across industries in the United States, he shifted his focus toward understanding how young people learn, grow, and make decisions about their future.\n\nHe went on to earn a Master's in Education (M.Ed.) from the Harvard Graduate School of Education, where he focused on learning sciences, mentorship, and adolescent development. At FORCE, Ankitt designs learning experiences that combine career exploration, interdisciplinary thinking, and real-world problem solving.",
    pills: ['Harvard M.Ed.', 'Learning Sciences', 'Adolescent Development', 'Career Exploration', 'Real-World Learning'],
    photoAnim: slideInLeft,
    bioAnim: slideInRight,
  },
  {
    name: 'Nidhi Gani',
    initials: 'NG',
    title: 'Co-Founder | Digital Health & Cybersecurity | Harvard Innovation Labs',
    bio: "Nidhi has worked across biotechnology, regulatory affairs, digital health, cybersecurity, and global innovation ecosystems in the United States. Her experience spans Fortune 500 environments, startup ecosystems, and interdisciplinary research spaces.\n\nAs a Professor of Digital Health and Cybersecurity at Northeastern University, she has taught and mentored graduate students. At FORCE, Nidhi helps students understand how real industries work, what future careers demand, and how their interests can connect to meaningful pathways.",
    pills: ['Harvard Innovation Lab', 'Northeastern Faculty', 'Digital Health', 'Innovation Ecosystems', 'Future Careers', 'Interdisciplinary Learning'],
    photoAnim: slideInRight,
    bioAnim: slideInLeft,
  },
];

function FounderPhoto({ f }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={f.photoAnim}>
      <div style={{
        width: '100%', height: 400,
        background: 'linear-gradient(135deg, var(--navy) 0%, #1e4a6e 55%, var(--teal) 100%)',
        borderRadius: 5, marginBottom: 22,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative concentric rings */}
        <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)' }} />
        <div style={{ position: 'absolute', width: 190, height: 190, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.11)' }} />
        <div style={{ position: 'absolute', width: 110, height: 110, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)' }} />

        {/* Initials */}
        <span style={{
          fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 84,
          color: 'rgba(255,255,255,0.22)', letterSpacing: '-0.02em', position: 'relative', zIndex: 1,
        }}>{f.initials}</span>
        <span style={{
          fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11,
          color: 'rgba(255,255,255,0.36)', marginTop: 10,
          letterSpacing: '0.12em', textTransform: 'uppercase', position: 'relative', zIndex: 1,
        }}>Photo Coming Soon</span>
      </div>
      <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--navy)', marginBottom: 6 }}>{f.name}</h3>
      <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--teal)', fontWeight: 500, lineHeight: 1.5 }}>{f.title}</p>
    </motion.div>
  );
}

function FounderBio({ f }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
      {f.bio.split('\n\n').map((para, i) => (
        <motion.p key={i} variants={fadeUp} style={{ fontSize: 16, color: 'var(--black)', lineHeight: 1.82, marginBottom: 22, opacity: 0.88 }}>{para}</motion.p>
      ))}
      <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
        {f.pills.map(p => (
          <motion.span key={p} variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 13,
            border: '1.5px solid var(--teal)', color: 'var(--teal)',
            borderRadius: 5, padding: '6px 14px', display: 'inline-flex',
            background: 'rgba(66,151,160,0.07)',
          }}>{p}</motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}

function CoFounders() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.span variants={fadeUp} className="eyebrow">The Team</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>The people behind FORCE.</motion.h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
          {founders.map((f, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div key={f.name}
                style={{
                  display: 'grid',
                  gridTemplateColumns: isReversed ? '1fr 320px' : '320px 1fr',
                  gap: 64, alignItems: 'start',
                }}
                className="founder-grid"
              >
                {isReversed
                  ? <><FounderBio f={f} /><FounderPhoto f={f} /></>
                  : <><FounderPhoto f={f} /><FounderBio f={f} /></>
                }
              </div>
            );
          })}
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .founder-grid { grid-template-columns: 1fr !important; gap: 36px !important; } }`}</style>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <TwoStudents />
      <ProblemStatement />
      <CareerExploration />
      <ThreePillars />
      <NewRule />
      <Testimonials />
      <CoFounders />
    </>
  );
}
