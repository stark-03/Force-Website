import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, slideInLeft, slideInRight, scaleUp } from '../utils/animations';
import { useOpenCalendly } from '../components/CalendlyModal';
import heroBanner from '../assets/Hero_Banner.png';
import screen2_1 from '../assets/Screen2_1.png';
import screen2_2 from '../assets/Screen2_2.png';
import ankittPhoto from '../assets/ankitt.png';
import nidhiPhoto  from '../assets/nidhi.png';
import careerGuidanceImg from '../assets/CareerGuidance_1.png';
import hscsImg from '../assets/HSCS_2.png';
import workshopImg from '../assets/Workshop_1.png';


// Teal full-stop accent used throughout headings
const Dot = () => <span style={{ color: 'var(--coral)' }}>.</span>;

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
  const openCalendly = useOpenCalendly();

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'var(--white)' }}>
      {/* Hero image — visible on the right through the gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: 'cover', backgroundPosition: 'center right', zIndex: 0,
      }} />

      {/* White gradient — opaque left, transparent right so image shows */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, #ffffff 0%, #ffffff 36%, rgba(255,255,255,0.82) 48%, rgba(255,255,255,0.18) 62%, rgba(255,255,255,0) 74%)',
      }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '120px 48px' }}>
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} style={{ maxWidth: 620 }}>

          {/* H1 — first line in misty blue, second in teal */}
          <motion.h1 variants={staggerContainer} style={{
            fontSize: 'clamp(52px, 7.2vw, 92px)',
            fontWeight: 900,
            marginBottom: 30, lineHeight: 1.04, letterSpacing: '-0.03em',
          }}>
            <motion.span variants={fadeUp} style={{ display: 'block', color: 'var(--misty-blue)' }}>Identify your child's</motion.span>
            <motion.span variants={fadeUp} style={{ display: 'block', color: 'var(--teal)' }}>Interests and Strengths<Dot /></motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{
            fontSize: 19, color: 'var(--misty-blue)',
            marginBottom: 44, fontFamily: 'IBM Plex Sans, sans-serif',
            fontWeight: 400, lineHeight: 1.72, maxWidth: 480, opacity: 0.82,
          }}>
            Career Exploration Lab for high-school students to build unique 21st century careers.
          </motion.p>

          {/* CTA pair */}
          <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <button onClick={openCalendly}
              className="btn btn-teal" style={{ fontSize: 16, padding: '15px 34px', minWidth: 220, lineHeight: 1 }}>
              Book a Discovery Call
            </button>
            <Link to="/program"
              className="btn btn-navy" style={{ fontSize: 16, padding: '15px 34px', minWidth: 220, lineHeight: 1, justifyContent: 'center' }}>
              Explore the Program
            </Link>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll pulse — navy tones for light background */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: 34, left: '50%', transform: 'translateX(-50%)',
          zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
        }}
      >
        <div style={{ width: 1, height: 44, background: 'linear-gradient(to bottom, transparent, rgba(47,80,97,0.35))' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(47,80,97,0.4)' }} />
      </motion.div>

      <style>{`@media (max-width: 768px) { .hero-inner { padding: 60px 24px !important; } }`}</style>
    </section>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────
function StatsBand() {
  const stats = [
    { num: '6-Week', label: 'Structured Journey' },
    { num: '30+', label: 'Careers Explored' },
    { num: '1:1', label: 'Mentorship' },
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
  { bottom: '32%', left: '6%' },
  { bottom: '30%', right: '6%' },
];

// Each pill floats independently with unique x/y/duration — like bubbles
const bubbleAnims = [
  { x: [0, 3, -2, 4, 0],  y: [0, -6, 2, -4, 0],  dur: 3.8 },
  { x: [0, -4, 2, -3, 0], y: [0,  5, -3, 3,  0],  dur: 4.3 },
  { x: [0, 2, -4, 1,  0], y: [0, -4, -2, 5,  0],  dur: 3.5 },
  { x: [0, -3, 4, -2, 0], y: [0,  6,  1, -3, 0],  dur: 4.7 },
  { x: [0, 5, -2, -4, 0], y: [0, -5,  4,  1, 0],  dur: 3.2 },
  { x: [0, -4, 3, 5,  0], y: [0,  4, -5,  2, 0],  dur: 4.0 },
];

function StudentCard({ num, headline, subtitle, quote, img, pills, accentColor, accentBg }) {
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
          src={img} alt={headline}
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Deep bottom gradient so quote is always readable */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
          background: 'linear-gradient(to top, rgba(28,50,70,0.88) 0%, rgba(28,50,70,0.5) 55%, transparent 100%)',
          zIndex: 1,
        }} />

        {/* Quote overlaid on the image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '20px 22px 22px', zIndex: 2,
        }}>
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 700,
            fontSize: 15, color: '#fff', lineHeight: 1.55,
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}>"{quote}"</p>
        </div>

        {/* Floating pills — each independent, bubble-like */}
        {pills.map((p, i) => {
          const ba = bubbleAnims[i % bubbleAnims.length];
          return (
            <motion.div
              key={p}
              animate={{ x: ba.x, y: ba.y }}
              transition={{ duration: ba.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.35 }}
              style={{
                position: 'absolute',
                ...pillPositions[i % pillPositions.length],
                background: 'rgba(255,255,255,0.94)',
                border: `1.5px solid ${accentColor}`,
                color: 'var(--navy)',
                borderRadius: 5, padding: '5px 14px',
                fontSize: 12, fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600,
                whiteSpace: 'nowrap', backdropFilter: 'blur(8px)',
                boxShadow: '0 2px 14px rgba(0,0,0,0.15)', zIndex: 3,
              }}>{p}</motion.div>
          );
        })}
      </div>

      {/* Text — headline + subtitle only, quote is now on the image */}
      <div style={{ padding: '24px 32px 32px', position: 'relative', overflow: 'hidden' }}>
        {/* Watermark number */}
        <span aria-hidden="true" style={{
          position: 'absolute', right: -8, bottom: -20,
          fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 110,
          color: accentBg, lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        }}>{num}</span>

        {/* ALLCAPS label + subtitle */}
        <h3 style={{ position: 'relative', lineHeight: 1.15 }}>
          <span style={{
            display: 'block',
            fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 26,
            color: accentColor, letterSpacing: '0.01em',
          }}>{headline}</span>
          <span style={{
            display: 'block',
            fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 15,
            color: 'var(--navy)', marginTop: 6, opacity: 0.75,
          }}>{subtitle}</span>
        </h3>
      </div>
    </motion.div>
  );
}

function TwoStudents() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.span variants={fadeUp} className="eyebrow">The Career Confusion</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>We see 2 types of students<Dot /></motion.h2>
        </motion.div>

        <div style={{ display: 'flex', gap: 44, flexWrap: 'wrap', justifyContent: 'center' }}>
          <StudentCard
            num="01"
            headline="CONFUSED…"
            subtitle="Because of too many interests."
            quote="I love design, psychology, climate science and film-making. How do I choose?"
            img={screen2_1} pills={pills1}
            accentColor="var(--teal)" accentBg="rgba(66,151,160,0.06)"
          />
          <StudentCard
            num="02"
            headline="CLUELESS…"
            subtitle="Because no interest feels clear yet."
            quote="I'm good at school but I don't know what I should study further."
            img={screen2_2} pills={pills2}
            accentColor="var(--teal)" accentBg="rgba(66,151,160,0.06)"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.72, y: 32 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: 'center', marginTop: 80 }}
        >
          <p style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 4.5vw, 58px)', color: 'var(--teal)', letterSpacing: '-0.02em',
          }}>Both need direction<Dot /></p>
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
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}
          variants={staggerContainer}
          style={{
            maxWidth: 780, margin: '0 auto',
            background: 'rgba(255,255,255,0.72)',
            borderRadius: 12,
            padding: 'clamp(48px, 8vw, 80px) clamp(32px, 6vw, 72px)',
            boxShadow: '0 8px 48px rgba(47,80,97,0.08)',
          }}
        >
          {/* Lead-in text */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20,
            color: 'var(--navy)', marginBottom: 36, lineHeight: 1.72, opacity: 0.85,
          }}>
            After years of schooling, many students still struggle to<br />answer one simple question:
          </motion.p>

          {/* Playfair Display italic quote — coral, matching the reference */}
          <motion.h2
            variants={{ hidden: { opacity: 0, scale: 0.75, y: 24 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4.8vw, 62px)',
              color: 'var(--coral)',
              lineHeight: 1.2,
              marginBottom: 12,
              whiteSpace: 'nowrap',
            }}
          >
            "What am I good at?"
          </motion.h2>

          {/* Brush-stroke underline SVG */}
          <motion.div variants={fadeUp} style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 520 22" style={{ width: '72%', maxWidth: 500 }} xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 16 14 C 80 7, 170 18, 260 11 C 350 4, 440 17, 504 10"
                stroke="var(--coral)" strokeWidth="3.5" fill="none"
                strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {/* Body text below */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18,
              color: 'var(--navy)', lineHeight: 1.78, opacity: 0.85,
            }}
          >
            <span style={{ color: 'var(--teal)', fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 19 }}>FORCE</span>
            {' '}helps students discover their interests, strengths, and learning patterns then turn that self-awareness into confident career choices.
          </motion.p>
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
            Introducing<br />Career Exploration<Dot />
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
            boxShadow: '0 0 0 4px var(--teal), 0 24px 80px rgba(47,80,97,0.2)',
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
    img: careerGuidanceImg,
  },
  {
    icon: <IconBook />, title: 'Harvard-style Case Studies', num: '02',
    body: 'Students explore interdisciplinary careers by solving real-world problems across Science, Technology, Engineering, Management, and Humanities/Arts.',
    img: hscsImg,
  },
  {
    icon: <IconSpark />, title: 'AI based Workshops', num: '03',
    body: 'Students develop critical thinking, communication, AI literacy, decision-making, and problem-solving skills through hands-on learning experiences.',
    img: workshopImg,
  },
];

function ThreePillars() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow">How It Works</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.2 }}>
            Three pillars<Dot /> One goal<Dot /><br />
            <span style={{ color: 'var(--teal)', fontSize: 'clamp(22px, 2.8vw, 38px)' }}>Confident Career Choices!</span>
          </motion.h2>
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
              {/* Photo top — with teal overlay + icon */}
              <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                <img
                  src={p.img} alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {/* Teal gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(42,125,134,0.2) 0%, rgba(28,60,80,0.45) 100%)',
                }} />
                {/* Number + icon on top */}
                <div style={{
                  position: 'absolute', inset: 0, padding: '22px 24px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                }}>
                  <p style={{
                    fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 700, fontSize: 11,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)', marginBottom: 10,
                  }}>{p.num}</p>
                  <div style={{
                    width: 48, height: 48, borderRadius: 5,
                    background: 'rgba(255,255,255,0.18)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                  }}>{p.icon}</div>
                </div>
              </div>

              {/* White text section */}
              <div style={{ padding: '24px 28px 32px' }}>
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 21, color: 'var(--navy)', marginBottom: 10, lineHeight: 1.2 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: 'var(--black)', lineHeight: 1.78, opacity: 0.82 }}>{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
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
  const openCalendly = useOpenCalendly();
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
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>The Harvard Theory</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 900,
              fontSize: 'clamp(40px, 7vw, 80px)',
              color: 'var(--teal)', lineHeight: 1.08, marginBottom: 32,
            }}
          >
            Career Exploration must run<br />in parallel to Academics<Dot />
          </motion.h2>
          <motion.div variants={fadeUp} style={{ width: 56, height: 3, background: 'var(--teal)', margin: '0 auto 28px', borderRadius: 2 }} />
          <motion.p variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: 560, margin: '0 auto 44px',
          }}>
            Parents should start career exploration as early as Grade 7, 8, 9…
          </motion.p>
          <motion.button
            variants={scaleUp}
            onClick={openCalendly}
            className="btn btn-teal" style={{ fontSize: 16 }}
          >
            Schedule your first Discovery Call
          </motion.button>
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
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>Parents POV</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16 }}>Real Stories<Dot /> Real Impact<Dot /></motion.h2>
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
                <source src="https://res.cloudinary.com/dsdhu8q1k/video/upload/v1780074880/V2-Sandy-Testimonial_cc3c0g.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{
              marginTop: 14, fontSize: 13, color: 'var(--navy)',
              fontStyle: 'italic', textAlign: 'center', opacity: 0.55,
              fontFamily: 'IBM Plex Sans, sans-serif',
            }}>"Hear from parents about their journey with FORCE."</p>
          </motion.div>

          {/* Quote carousel — rolodex flip */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight} style={{ paddingTop: 8 }}>
            {/* perspective wrapper gives depth to the rotateX flip */}
            <div style={{ perspective: '1000px' }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ rotateX: direction * 72, opacity: 0, transformOrigin: 'center center' }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: direction * -72, opacity: 0 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'var(--white)',
                    borderLeft: '4px solid var(--teal)',
                    borderRadius: 5, padding: '44px 44px 40px',
                    boxShadow: 'var(--shadow-hover)',
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <span style={{
                    display: 'block', fontFamily: 'Georgia, serif',
                    fontSize: 80, lineHeight: 0.65, color: 'var(--teal)',
                    opacity: 0.18, marginBottom: 24, userSelect: 'none',
                  }}>"</span>
                  <p style={{
                    fontFamily: 'Barlow, sans-serif', fontWeight: 800,
                    fontSize: 'clamp(22px, 2.4vw, 30px)',
                    color: 'var(--navy)', lineHeight: 1.4, marginBottom: 28,
                    letterSpacing: '-0.01em',
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
                    background: i === current ? 'var(--teal)' : 'rgba(47,80,97,0.45)',
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
                      border: '2px solid var(--teal)', background: 'transparent',
                      color: 'var(--teal)', fontSize: 20, fontWeight: 700,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--teal)'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--teal)'; }}
                  >{label}</button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: 72, fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 800, fontSize: 'clamp(28px, 3.2vw, 46px)', color: 'var(--teal)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
          More than a program<Dot /> A partnership in your child's future<Dot />
        </motion.p>
      </div>

      <style>{`@media (max-width: 768px) { .testi-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}

// ─── Section 7: Co-Founders ───────────────────────────────────────────────────
// To add real photos: import ankittPhoto from '../assets/ankitt.jpg';
//                     import nidhiPhoto  from '../assets/nidhi.jpg';
// Then set photo: ankittPhoto / nidhiPhoto below.
const founders = [
  {
    name: 'Ankitt Sushilanand',
    initials: 'AS',
    title: 'Co-founder — FORCE',
    titleSub: 'Harvard University',
    photo: ankittPhoto,
    bio: "Ankitt's work sits at the intersection of education, adolescent development, and real-world learning. After beginning his journey in engineering and spending nearly a decade leading global teams across industries in the United States, he shifted his focus toward understanding how young people learn, grow, and make decisions about their future.\n\nHe went on to earn a Master's in Education (M.Ed.) from the Harvard Graduate School of Education, where he focused on learning sciences, mentorship, and adolescent development. At FORCE, Ankitt designs learning experiences that combine career exploration, interdisciplinary thinking, and real-world problem solving.",
    pills: ['Harvard M.Ed.', 'Learning Sciences', 'Adolescent Development', 'Career Exploration', 'Real-World Learning'],
    photoAnim: slideInLeft,
    bioAnim: slideInRight,
  },
  {
    name: 'Nidhi Gani',
    initials: 'NG',
    title: 'Co-founder — FORCE',
    titleSub: 'Harvard Innovation Labs | Northeastern University',
    photo: nidhiPhoto,
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
        width: '100%', height: 420,
        borderRadius: 5, marginBottom: 20,
        position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(135deg, var(--navy) 0%, #1e4a6e 55%, var(--teal) 100%)',
      }}>
        {f.photo ? (
          <img
            src={f.photo} alt={f.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
          />
        ) : (
          /* Gradient placeholder — replace photo: null with the imported image to activate */
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.07)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div style={{ position: 'absolute', width: 190, height: 190, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.11)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <div style={{ position: 'absolute', width: 110, height: 110, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.18)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
            <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 84, color: 'rgba(255,255,255,0.22)', letterSpacing: '-0.02em', position: 'relative' }}>{f.initials}</span>
            <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.36)', marginTop: 10, letterSpacing: '0.12em', textTransform: 'uppercase', position: 'relative' }}>Photo Coming Soon</span>
          </div>
        )}
      </div>

      {/* Name + two-line title */}
      <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--navy)', marginBottom: 4 }}>{f.name}</h3>
      <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--teal)', fontWeight: 600, lineHeight: 1.5 }}>{f.title}</p>
      {f.titleSub && (
        <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13, color: 'var(--navy)', fontWeight: 400, opacity: 0.55, marginTop: 3 }}>{f.titleSub}</p>
      )}
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
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>The people behind FORCE<Dot /></motion.h2>
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

// ─── Find Your Force ──────────────────────────────────────────────────────────
function FindYourForce() {
  const openCalendly = useOpenCalendly();
  return (
    <section style={{ position: 'relative', background: 'var(--teal)', padding: '88px 24px', overflow: 'hidden' }}>
      {/* Subtle hero image bleed at 12% opacity — same feel as Spikelabs */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: 'cover', backgroundPosition: 'center top',
        opacity: 0.12, zIndex: 0,
      }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 28 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative', zIndex: 1,
          background: 'var(--white)',
          borderRadius: 5,
          maxWidth: 820,
          margin: '0 auto',
          padding: 'clamp(52px, 8vw, 96px) clamp(32px, 6vw, 88px)',
          textAlign: 'center',
          boxShadow: 'var(--shadow-deep)',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 900,
            fontSize: 'clamp(34px, 5vw, 62px)',
            color: 'var(--navy)', marginBottom: 24,
            lineHeight: 1.1, letterSpacing: '-0.025em',
          }}
        >
          Find Your Force<Dot />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'IBM Plex Sans, sans-serif',
            fontSize: 18, color: 'var(--black)',
            lineHeight: 1.8, opacity: 0.78,
            maxWidth: 600, margin: '0 auto 48px',
          }}
        >
          Most students are asked to choose their future before they have truly explored it. At FORCE, we help students experience real-world careers, understand their strengths, and build the confidence to make decisive career choices. Career clarity does not come from one test — it comes from guided, structured exploration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={openCalendly}
            className="btn btn-teal"
            style={{ fontSize: 16, padding: '16px 44px' }}
          >
            Book a Discovery Call
          </button>
        </motion.div>
      </motion.div>
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
      <FindYourForce />
    </>
  );
}
