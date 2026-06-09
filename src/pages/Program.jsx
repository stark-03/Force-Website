import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, scaleUp, slideInRight } from '../utils/animations';
import { useOpenCalendly } from '../components/CalendlyModal';

// Contrasting full-stop accent used in headings
const Dot = () => <span style={{ color: 'var(--coral)' }}>.</span>;

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
  const openCalendly = useOpenCalendly();
  const features = [
    'Identify your Career Interests',
    'Explore 30+ careers through Harvard-style case studies',
    'Master AI and 21st-century Skills',
    'Build Interdisciplinary Projects',
  ];
  return (
    <section style={{ background: 'var(--white)', padding: '64px 0 56px' }}>
      <div className="container" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>

          {/* Large uppercase heading — exact Spikelab style */}
          <motion.h1 variants={fadeUp} style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 700,
            fontSize: 'clamp(32px, 4.8vw, 68px)',
            color: 'var(--navy)', lineHeight: 1.02,
            letterSpacing: '-0.02em', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            Career Exploration Lab<br />
            <span style={{ color: 'var(--teal)' }}>STEAM-X</span>
          </motion.h1>

          {/* Centered body text */}
          <motion.p variants={fadeUp} style={{
            fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18,
            color: 'var(--black)', lineHeight: 1.75, opacity: 0.75,
            maxWidth: 620, margin: '0 auto 52px',
          }}>
            A structured 6-week journey that helps students identify their interests, explore interdisciplinary careers, and build future-ready skills.
          </motion.p>

          {/* Full-width teal divider — exact Spikelab */}
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            style={{ height: 3, background: 'var(--teal)', borderRadius: 2, marginBottom: 56, transformOrigin: 'left center' }}
          />

          {/* 2×2 feature grid — Spikelab triangle icon style */}
          <motion.div
            variants={staggerContainer}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 48px', textAlign: 'left', marginBottom: 56 }}
            className="feature-grid"
          >
            {features.map(f => (
              <motion.div key={f} variants={fadeUp} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                {/* Spikelab-style flag/triangle icon in teal */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--teal)" style={{ flexShrink: 0, marginTop: 2 }}>
                  <polygon points="3,3 21,3 13,21" opacity="0.25"/>
                  <polygon points="3,3 21,3 13,21" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeLinejoin="round"/>
                  <polyline points="7,10 12,4 17,10" fill="none" stroke="var(--teal)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 16, color: 'var(--navy)', lineHeight: 1.55 }}>{f}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.button variants={scaleUp} onClick={openCalendly} className="btn btn-teal" style={{ fontSize: 16, padding: '15px 40px' }}>
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>

      <style>{`@media (max-width: 640px) { .feature-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

// ─── Section 2: 5 Stages ──────────────────────────────────────────────────────
const stages = [
  {
    num: '1.',
    title: 'Student Assessments',
    icon: <StageIcon1 />,
    bullets: [
      'Identify Interests, Strengths, Values and Learning Style',
      'Craft a personalized learning plan with guidance from mentor',
    ],
  },
  {
    num: '2.',
    title: 'Career Exploration',
    icon: <StageIcon2 />,
    bullets: [
      'Explore 30+ careers through Harvard-style case studies',
      'Exposure to interdisciplinary careers by solving real-world problems',
    ],
  },
  {
    num: '3.',
    title: '21st-century Skill Development',
    icon: <StageIcon3 />,
    bullets: [
      'Build critical thinking and AI Literacy',
      'Collaborate with peers for professional communication, research, and problem solving skills',
    ],
  },
  {
    num: '4.',
    title: 'Interdisciplinary Projects',
    icon: <StageIcon4 />,
    bullets: [
      'Discover new frontier subjects',
      'Apply learning, use AI to build tools, presentations and solutions',
    ],
  },
  {
    num: '5.',
    title: 'Direction & Pathways',
    icon: <StageIcon5 />,
    bullets: [
      'Build clarity on career pathways',
      'Align career interests to academic decisions',
    ],
  },
];

function Journey() {
  return (
    <section style={{ background: 'var(--teal)', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '34% 66%', alignItems: 'start' }} className="journey-outer">

          {/* Left sticky title panel, no border */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={fadeUp}
            style={{ position: 'sticky', top: 120, paddingRight: 64, paddingBottom: 40 }}
          >
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.7)' }}>The Journey</span>
            <h2 style={{
              fontFamily: 'Barlow, sans-serif', fontWeight: 900,
              fontSize: 'clamp(32px, 3.5vw, 54px)', color: 'var(--white)',
              lineHeight: 1.08, marginBottom: 20, letterSpacing: '-0.02em',
            }}>
              5 Stages of the STEAM-X Career Exploration Lab
            </h2>
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.72 }}>
              A structured journey from self-discovery to future direction.
            </p>
          </motion.div>

          {/* Right borderless 3-column grid, Spikelabs style */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '52px 36px' }} className="stages-grid">
            {stages.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                {/* Big white icon no box, Spikelabs style */}
                <div style={{ color: 'var(--white)', marginBottom: 20, lineHeight: 1 }}>
                  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    {i === 0 && <>
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
                      <rect x="9" y="3" width="6" height="4" rx="1"/>
                      <path d="M9 12l2 2 4-4"/><path d="M9 17h4"/>
                    </>}
                    {i === 1 && <>
                      <circle cx="12" cy="12" r="10"/>
                      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                    </>}
                    {i === 2 && <path d="M12 2L9.1 9.1 2 12l7.1 2.9L12 22l2.9-7.1L22 12l-7.1-2.9z"/>}
                    {i === 3 && <>
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/>
                      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
                    </>}
                    {i === 4 && <polygon points="3 11 22 2 13 21 11 13 3 11"/>}
                  </svg>
                </div>

                <h3 style={{
                  fontFamily: 'Barlow, sans-serif', fontWeight: 800,
                  fontSize: 20, color: 'var(--white)', marginBottom: 14, lineHeight: 1.2,
                }}>
                  {s.num} {s.title}
                </h3>

                <ul style={{ listStyle: 'disc', paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.bullets.map(b => (
                    <li key={b} style={{
                      fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14,
                      color: 'rgba(255,255,255,0.78)', lineHeight: 1.65,
                    }}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .journey-outer { grid-template-columns: 1fr !important; }
          .journey-outer > div:first-child { position: static !important; padding-right: 0 !important; padding-bottom: 40px; }
          .stages-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .stages-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .journey-outer { grid-template-columns: 38% 62% !important; }
          .stages-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 3: Program Details ───────────────────────────────────────────────
const details = [
  {
    title: 'Duration',
    value: '6 Weeks',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
  {
    title: 'Eligibility',
    value: 'Grade 7–11',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    title: 'Learning Mode',
    value: 'Online Live sessions on Zoom',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'Schedule',
    value: 'Sat & Sun, 2 hrs each',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    title: 'Cohort',
    value: 'Small batch (10–15 max)',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    title: 'Communication',
    value: 'Live Zoom Sessions & WhatsApp touchpoints',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
];

function ProgramDetails() {
  return (
    <section style={{ background: 'var(--white)', padding: '72px 0' }}>
      <div className="container">
        {/* Large uppercase heading Spikelabs style */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Barlow, sans-serif', fontWeight: 900,
            fontSize: 'clamp(28px, 3.2vw, 46px)',
            color: 'var(--navy)', textTransform: 'uppercase',
            letterSpacing: '0.02em', marginBottom: 56, textAlign: 'center',
          }}
        >
          Program Details
        </motion.h2>

        {/* 3×2 grey card grid */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
          className="details-grid"
        >
          {details.map((d) => (
            <motion.div
              key={d.title}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } } }}
              style={{
                background: 'var(--platinum)',
                padding: '44px 32px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <div style={{ color: 'var(--navy)', marginBottom: 20 }}>{d.icon}</div>
              <p style={{
                fontFamily: 'Barlow, sans-serif', fontWeight: 700,
                fontSize: 18, color: 'var(--navy)', marginBottom: 8, lineHeight: 1.2,
              }}>{d.title}</p>
              <p style={{
                fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 400,
                fontSize: 15, color: 'rgba(47,80,97,0.65)', lineHeight: 1.6,
              }}>{d.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) { .details-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .details-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 4+5: Is This Right For My Child? + Student Voices (combined) ────
const listItems = [
  'feel confused about their careers',
  'want exposure to different careers',
  'have many interests but no clear direction',
  'are curious about the future',
  'want to build real-world skills',
];

// Student data (shared between thumb + main player)
const students = [
  { name: 'Pravartika', src: 'https://res.cloudinary.com/dsdhu8q1k/video/upload/v1780074882/Pravartika-Testimonial_k3k9zm.mp4' },
  { name: 'Megh',       src: 'https://res.cloudinary.com/dsdhu8q1k/video/upload/v1780074919/Megh-Testimonial_p17cfy.mp4' },
  { name: 'Tanishka',   src: 'https://res.cloudinary.com/dsdhu8q1k/video/upload/v1780074911/Tanishka-Testimonial_wg7zbz.mp4' },
  { name: 'Risha',      src: 'https://res.cloudinary.com/dsdhu8q1k/video/upload/v1780074881/Risha-Testimonial_tvbxxh.mp4' },
];

// Small clickable thumbnail with auto-captured frame
function StudentThumb({ name, src, active, onClick }) {
  const [thumb, setThumb] = useState(null);
  useEffect(() => {
    const vid = document.createElement('video');
    vid.muted = true; vid.playsInline = true; vid.preload = 'metadata'; vid.src = src;
    let done = false;
    const capture = () => {
      if (done) return; done = true;
      const c = document.createElement('canvas');
      c.width = vid.videoWidth || 320; c.height = vid.videoHeight || 180;
      try { c.getContext('2d').drawImage(vid, 0, 0, c.width, c.height); setThumb(c.toDataURL('image/jpeg', 0.8)); } catch {}
      vid.src = '';
    };
    vid.addEventListener('loadedmetadata', () => { vid.currentTime = Math.min(1, (vid.duration || 2) * 0.08); });
    vid.addEventListener('seeked', capture);
    vid.load();
    return () => { vid.src = ''; };
  }, [src]);

  return (
    <button
      onClick={onClick}
      style={{
        flex: 1, aspectRatio: '1 / 1.1', borderRadius: 5, overflow: 'hidden', padding: 0, cursor: 'pointer',
        border: active ? '3px solid var(--teal)' : '3px solid transparent',
        position: 'relative',
        background: 'linear-gradient(135deg, var(--navy) 0%, #1e5c6e 100%)',
        transition: 'border-color 0.2s, transform 0.2s',
        transform: active ? 'scale(1.06)' : 'scale(1)',
        boxShadow: active ? '0 0 0 2px rgba(66,151,160,0.35)' : 'none',
      }}
    >
      {thumb && <img src={thumb} alt={name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
      <div style={{
        position: 'absolute', inset: 0,
        background: active ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.42)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end',
        padding: '0 6px 8px',
      }}>
        <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 12, color: '#fff', lineHeight: 1, textAlign: 'center' }}>{name}</span>
      </div>
    </button>
  );
}

// VideoSlide main player used inside the carousel
function VideoSlide({ name, src, onPlayingChange }) {
  const [playing, setPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    setThumbnail(null); setPlaying(false);
    const vid = document.createElement('video');
    vid.muted = true; vid.playsInline = true; vid.preload = 'metadata'; vid.src = src;
    let done = false;
    const capture = () => {
      if (done) return; done = true;
      const canvas = document.createElement('canvas');
      canvas.width = vid.videoWidth || 640; canvas.height = vid.videoHeight || 360;
      try { canvas.getContext('2d').drawImage(vid, 0, 0, canvas.width, canvas.height); setThumbnail(canvas.toDataURL('image/jpeg', 0.85)); } catch {}
      vid.src = '';
    };
    vid.addEventListener('loadedmetadata', () => { vid.currentTime = Math.min(1, (vid.duration || 2) * 0.08); });
    vid.addEventListener('seeked', capture);
    vid.load();
    return () => { vid.src = ''; };
  }, [src]);

  const handlePlay = () => {
    setPlaying(true); onPlayingChange?.(true);
    setTimeout(() => { if (videoRef.current) { videoRef.current.currentTime = 0; videoRef.current.play(); } }, 50);
  };

  return (
    <div style={{ position: 'relative', background: '#000', aspectRatio: '16/9' }}>
      {!playing && (
        <div onClick={handlePlay} style={{
          position: 'absolute', inset: 0, zIndex: 3, cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          background: thumbnail ? 'transparent' : 'linear-gradient(135deg, var(--navy) 0%, #1e5c6e 50%, var(--teal) 100%)',
        }}>
          {thumbnail && (<>
            <img src={thumbnail} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(28,55,76,0.6)' }} />
          </>)}
          <motion.div whileHover={{ scale: 1.12 }} style={{
            width: 68, height: 68, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: 14, position: 'relative', zIndex: 2,
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><polygon points="6 3 20 12 6 21 6 3"/></svg>
          </motion.div>
          <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', position: 'relative', zIndex: 2 }}>{name}</p>
          <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 3, position: 'relative', zIndex: 2 }}>Student Testimonial · Click to watch</p>
        </div>
      )}
      <video ref={videoRef} src={src} controls playsInline
        onPause={() => { if (!videoRef.current?.ended) onPlayingChange?.(false); }}
        onEnded={() => { setPlaying(false); onPlayingChange?.(false); }}
        style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', background: '#000' }} />
    </div>
  );
}

// Combined: Is This Right For My Child? (left) + Student Voices carousel (right)
function ForMyChild() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    if (videoPlaying) return;
    const t = setInterval(() => { setDirection(1); setCurrent(c => (c + 1) % students.length); }, 6000);
    return () => clearInterval(t);
  }, [videoPlaying]);

  const go = (idx) => { setVideoPlaying(false); setDirection(idx > current ? 1 : -1); setCurrent(idx); };

  return (
    <section className="section" style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', right: -60, transform: 'translateY(-50%)',
        fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 300,
        color: 'rgba(255,255,255,0.025)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.05em',
      }}>?</div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '52% 48%', gap: '0 72px', alignItems: 'start' }} className="mychild-grid">

          {/* LEFT This is for students who… */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', color: 'var(--white)', marginBottom: 32 }}>
              This is for students who…
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {listItems.map((item, i) => (
                <motion.div key={item}
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.06)', borderRadius: 5, padding: '13px 20px' }}
                >
                  <span style={{ color: 'var(--teal)', fontWeight: 700, fontSize: 15, flexShrink: 0 }}>✓</span>
                  <span style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 15, color: 'rgba(255,255,255,0.88)' }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ marginTop: 36, fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 800, fontSize: 19, color: 'var(--teal)', lineHeight: 1.5 }}
            >
              They do not need to have everything figured out.<br />They only need curiosity and willingness to explore.
            </motion.p>
          </motion.div>

          {/* RIGHT Horizontal rolodex video carousel + thumbnail strip */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight} style={{ paddingTop: 8 }}>
            <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 600, fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--teal)', marginBottom: 14 }}>Student Voices</p>

            {/* Main video horizontal rolodex flip (rotateY) */}
            <div style={{ borderRadius: 5, overflow: 'hidden', boxShadow: 'var(--shadow-deep)', perspective: '1000px', marginBottom: 10 }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current}
                  initial={{ rotateY: direction * 55, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: direction * -55, opacity: 0 }}
                  transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                >
                  <VideoSlide name={students[current].name} src={students[current].src} onPlayingChange={setVideoPlaying} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail strip click to switch */}
            <div style={{ display: 'flex', gap: 8 }}>
              {students.map((s, i) => (
                <StudentThumb key={s.name} name={s.name} src={s.src} active={i === current} onClick={() => go(i)} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mychild-grid { grid-template-columns: 1fr !important; gap: 48px 0 !important; }
        }
      `}</style>
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
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>Outcomes</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Students succeed in the<br />Lab with…<Dot /></motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="outcomes-grid">
          {outcomes.map(o => (
            <motion.div key={o} variants={fadeUp}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(47,80,97,0.16)' }}
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                background: 'var(--white)', borderRadius: 5, padding: '32px 28px 28px',
                borderTop: '4px solid var(--teal)',
                boxShadow: '0 4px 24px rgba(47,80,97,0.09)',
                minHeight: 160,
              }}>
              {/* Text — main player */}
              <span style={{
                fontFamily: 'Barlow, sans-serif', fontWeight: 800,
                fontSize: 'clamp(16px, 1.4vw, 20px)',
                color: 'var(--navy)', lineHeight: 1.35, flex: 1,
              }}>{o}</span>
              {/* Teal checkmark badge at bottom */}
              <div style={{
                marginTop: 20, width: 32, height: 32, borderRadius: '50%',
                background: 'var(--teal)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <polyline points="2,7 5.5,10.5 12,3.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
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
              variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] } } }}
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
          Each topic opens up multiple career pathways helping students expand their career vocabulary beyond the usual options.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 8: FAQ ───────────────────────────────────────────────────────────
const faqs = [
  { q: 'What is the FORCE STEAM-X Career Exploration Lab?', a: 'A 6-week live online career exploration program that helps students in grades 7–11 discover their interests, explore interdisciplinary careers, and build future-ready skills through case studies, AI tools, and real-world projects.' },
  { q: 'Who is this program for?', a: 'Grades 7–11 students who are curious, confused, or multi-interested students who want direction, exposure to different careers, and a structured way to explore what they are good at.' },
  { q: 'Is this only for students interested in science and technology?', a: 'No. STEAM-X includes science and technology but also design, business, humanities, media, sustainability, psychology, entrepreneurship, AI, and more. It is built for students with any kind of interest.' },
  { q: 'How is this different from regular career counselling?', a: 'Regular counselling begins with a test. FORCE begins with experiences. Students explore, engage, and reflect building self-awareness through doing, not just answering questionnaires.' },
  { q: 'What will students do during the program?', a: 'Live online sessions including case studies, group discussions, AI-based activities, project work, presentations, and mentor feedback.' },
  { q: 'What kinds of topics and careers will students explore?', a: 'Climate change, AI, sustainability, biotechnology, astronomy, media literacy, economics, entrepreneurship, geopolitics, arts, culture, and many more interdisciplinary fields.' },
  { q: 'Will students learn AI tools?', a: 'Yes. Students use AI for brainstorming, research, feedback, idea development, and project work. We also teach responsible AI use and how to distinguish human thinking from AI output.' },
  { q: 'What skills will my child build?', a: 'Communication, critical thinking, collaboration, creativity, problem-solving, leadership, digital literacy, and media literacy all built through hands-on activities.' },
  { q: 'What outcomes can parents expect after 6 weeks?', a: 'Clearer understanding of interests and strengths, exposure to multiple future-facing careers, AI tool experience, improved communication, and greater confidence in talking about their future.' },
  { q: 'Will my child receive a report or feedback?', a: 'Yes. Parents receive meaningful feedback on participation, observed strengths, interest patterns, and recommended next steps at the end of the program.' },
  { q: 'Is there homework or work outside the live sessions?', a: 'Short reflection tasks, research prompts, AI activities, or project work. The workload is designed to be manageable alongside school commitments.' },
  { q: 'How much time will my child need to commit?', a: '3–5 hours per week, including live sessions and light independent work. Sessions are scheduled on weekends to avoid interfering with school.' },
  { q: 'What are the expectations from students?', a: 'Attend on time, participate actively, respect others, complete assignments, and maintain academic honesty throughout the program.' },
  { q: 'What is the program fee?', a: 'FORCE is designed to be an affordable, high-value alternative to traditional career counseling with a much deeper learning experience built in. The fee includes live sessions, Harvard-style case studies, AI activities, project work, mentor feedback, and parent-facing progress insights. Once we understand your child\'s grade, goals, and support needs, our team will share the most suitable program fee and available payment options. Limited scholarships may be available for eligible families.' },
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Questions parents ask<Dot /></motion.h2>
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
          <motion.a variants={scaleUp} href="https://calendly.com/forcescholar/lets-connect" target="_blank" rel="noreferrer" className="btn btn-teal" style={{ fontSize: 17 }}>
            Book a Discovery Call
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
      <Topics />
      <ProgramDetails />
      <ForMyChild />
      {/* <StudentTestimonials /> */}
      <Outcomes />
      <FAQ />
      <FinalCTA />
    </>
  );
}
