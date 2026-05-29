import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, slideInLeft, slideInRight, scaleUp, wobble } from '../utils/animations';
import heroBanner from '../assets/Hero_Banner.png';
import screen2_1 from '../assets/Screen2_1.png';
import screen2_2 from '../assets/Screen2_2.png';

// ─── Section 1: Hero ────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${heroBanner})`, backgroundSize: 'cover', backgroundPosition: 'center right', zIndex: 0 }} />
      {/* Stronger gradient on the left so text doesn't sit on the face */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(47,80,97,0.95) 0%, rgba(47,80,97,0.75) 40%, rgba(47,80,97,0.2) 65%, transparent 100%)', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          style={{ maxWidth: 480 }}
        >
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: '#7ecfda' }}>
            Career Development Lab
          </motion.span>

          <motion.h1
            variants={staggerContainer}
            style={{ fontSize: 'clamp(42px, 5.5vw, 68px)', fontWeight: 900, color: '#fff', marginBottom: 24, lineHeight: 1.1 }}
          >
            <motion.span variants={fadeUp} style={{ display: 'block' }}>Identify your child's</motion.span>
            <motion.span variants={fadeUp} style={{ display: 'block' }}>Interests and Strengths.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} style={{ fontSize: 18, color: 'rgba(255,255,255,0.88)', marginBottom: 36, fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 400 }}>
            Career Development Lab for high-school students to build unique 21st century careers.
          </motion.p>

          <motion.a
            variants={scaleUp}
            href="https://calendly.com/forcescholar/lets-connect"
            target="_blank"
            rel="noreferrer"
            className="btn btn-coral"
            style={{ fontSize: 17, padding: '15px 32px' }}
          >
            Get Started →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2: Two Types of Students ───────────────────────────────────────
const pills1 = ['Design', 'Psychology', 'Filmmaking', 'Climate Science', 'Entrepreneurship', 'Music'];
const pills2 = ['Academic Excellence', 'Top Grades (99/100)', 'Strong Fundamentals', 'Consistent Performer'];

// Positions inside the image bounds (no negatives — overflow:hidden clips outside)
const pillPositionsInside = [
  { top: '8%',  left: '6%'  },
  { top: '8%',  right: '6%' },
  { top: '36%', left: '4%'  },
  { top: '52%', right: '4%' },
  { bottom: '14%', left: '6%'  },
  { bottom: '6%',  right: '6%' },
];

function StudentCard({ num, title, quote, img, pills }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)' }}
      style={{ background: 'var(--white)', borderRadius: 5, overflow: 'hidden', boxShadow: 'var(--shadow-card)', flex: '1 1 340px', maxWidth: 520 }}
    >
      {/* Image area — pills live INSIDE here so no bleed */}
      <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        <motion.img
          src={img}
          alt={title}
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Subtle overlay so pill text is readable */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(47,80,97,0.25)' }} />


        {pills.map((p, i) => (
          <motion.div
            key={p}
            variants={wobble}
            animate="animate"
            transition={{ delay: i * 0.5 }}
            style={{
              position: 'absolute',
              ...pillPositionsInside[i % pillPositionsInside.length],
              background: 'rgba(255,255,255,0.92)',
              border: '1px solid var(--teal)',
              color: 'var(--navy)',
              borderRadius: 5,
              padding: '5px 13px',
              fontSize: 12,
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
            }}
          >
            {p}
          </motion.div>
        ))}
      </div>

      <div style={{ padding: '28px 28px 32px' }}>
        <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 36, color: 'var(--coral)', opacity: 0.25 }}>{num}</span>
        <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--navy)', margin: '8px 0 12px' }}>{title}</h3>
        <p style={{ fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 16, color: 'var(--navy)', lineHeight: 1.55 }}>"{quote}"</p>
      </div>
    </motion.div>
  );
}

function TwoStudents() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow">The Career Confusion</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>We see 2 types of students.</motion.h2>
        </motion.div>

        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center' }}>
          <StudentCard num="01." title="Confused by too many interests." quote="I love design, psychology, climate science and film-making. How do I choose?" img={screen2_1} pills={pills1} />
          <StudentCard num="02." title="Clueless because no interest feels clear yet." quote="I'm good at school but I don't know what I should study further." img={screen2_2} pills={pills2} />
        </div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} style={{ textAlign: 'center', marginTop: 56, fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 20, color: 'var(--teal)' }}>
          Both need direction.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 3: Problem Statement ───────────────────────────────────────────
function ProblemStatement() {
  return (
    <section style={{ background: '#EEF7F8', padding: '100px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.4 }} variants={staggerContainer}>
          <motion.p variants={fadeUp} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, color: 'var(--navy)', marginBottom: 32, lineHeight: 1.7 }}>
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

// ─── Section 4: Career Exploration Intro ────────────────────────────────────
function CareerExploration() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ maxWidth: 700, margin: '0 auto' }}>
          <motion.span variants={fadeUp} className="eyebrow">Our Approach</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginBottom: 20 }}>
            Introducing<br />Career Exploration.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 17, color: 'var(--black)', marginBottom: 48, lineHeight: 1.7 }}>
            A structured program for high-school students to understand who they are, what they are good at, and then turn that self-awareness into making confident career choices.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={scaleUp}
          style={{ position: 'relative', maxWidth: 800, margin: '0 auto', borderRadius: 5, overflow: 'hidden', boxShadow: `0 0 0 3px var(--coral), var(--shadow-hover)` }}
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

// ─── Section 5: Three Pillars ────────────────────────────────────────────────
const pillars = [
  { icon: '🎯', title: 'Career Guidance', body: '1:1 mentorship helping students understand their interests, strengths, values, and learning patterns to build meaningful career pathways.' },
  { icon: '📖', title: 'Harvard-style Case Studies', body: 'Students explore interdisciplinary careers by solving real-world problems across Science, Technology, Engineering, Management, and Humanities/Arts.' },
  { icon: '🤖', title: 'AI based Workshops', body: 'Students develop critical thinking, communication, AI literacy, decision-making, and problem-solving skills through hands-on learning experiences.' },
];

function ThreePillars() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 60 }}>
          <motion.span variants={fadeUp} className="eyebrow">How It Works</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>Three pillars.<br />One goal.</motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={staggerContainer}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}
          className="pillars-grid"
        >
          {pillars.map(p => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
              style={{ background: 'var(--white)', borderRadius: 5, padding: '36px 28px', borderTop: '3px solid var(--teal)', boxShadow: 'var(--shadow-card)', willChange: 'transform' }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 700, fontSize: 20, color: 'var(--navy)', marginBottom: 12 }}>{p.title}</h3>
              <p style={{ fontSize: 15, color: 'var(--black)', lineHeight: 1.7 }}>{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp} style={{ textAlign: 'center', marginTop: 48, fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: 18, color: 'var(--navy)' }}>
          Three interconnected pillars, one overarching goal — Confident Career Choices.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) { .pillars-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .pillars-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

// ─── Section 6A: The New Rule ────────────────────────────────────────────────
function NewRule() {
  return (
    <section className="section" style={{ background: 'var(--navy)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={staggerContainer}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--teal)' }}>The New Rule</motion.span>
          <motion.h2
            variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
            style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 900, fontSize: 'clamp(40px, 7vw, 80px)', color: 'var(--coral)', lineHeight: 1.1, marginBottom: 28 }}
          >
            Career Exploration<br />runs in parallel to<br />Academics.
          </motion.h2>
          <motion.div variants={fadeUp} style={{ width: 60, height: 3, background: 'var(--teal)', margin: '0 auto 24px' }} />
          <motion.p variants={fadeUp} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 18, color: 'rgba(255,255,255,0.85)', marginBottom: 36 }}>
            Students should not wait until grade 10 to discover who they are.
          </motion.p>
          <motion.a
            variants={scaleUp}
            href="https://wa.me/918660274897?text=I%20need%20to%20know%20more%20about%20FORCE%20Scholar"
            target="_blank"
            rel="noreferrer"
            className="btn btn-coral"
            style={{ fontSize: 16 }}
          >
            Talk to Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6B: Testimonials — portrait video + auto-rotating carousel ─────
const quotes = [
  { text: 'FORCE changed the way we talk about careers at home.', attr: 'Grade 10, CBSE, Dubai' },
  { text: 'For the first time, my daughter could clearly explain why she was interested in something.', attr: 'Grade 9, IGCSE, India' },
  { text: "What stood out to us was how seriously they treated each student's individuality.", attr: 'Year 8, IB, Qatar' },
  { text: 'FORCE created the kind of learning environment we always wished schools would provide.', attr: 'Grade 10, ICSE, India' },
  { text: 'They helped our child feel seen.', attr: 'A Level, IGCSE, Kuwait' },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span variants={fadeUp} className="eyebrow" style={{ color: 'var(--coral)' }}>Parents Speak</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginBottom: 16 }}>Real Stories. Real Impact.</motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: 16, color: 'var(--black)', maxWidth: 520, margin: '0 auto' }}>
            Parents share how FORCE is helping their children discover clarity, confidence, and direction for the future.
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 56, alignItems: 'center' }} className="testi-grid">
          {/* Portrait video */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInLeft} style={{ flexShrink: 0 }}>
            <div style={{ width: 260, borderRadius: 5, overflow: 'hidden', boxShadow: 'var(--shadow-hover)' }}>
              <video
                controls
                style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }}
              >
                <source src="/V2-Sandy-Testimonial.mp4" type="video/mp4" />
              </video>
            </div>
            <p style={{ marginTop: 12, fontSize: 13, color: 'var(--navy)', fontStyle: 'italic', textAlign: 'center', opacity: 0.7 }}>
              "Hear from parents about their journey with FORCE."
            </p>
          </motion.div>

          {/* Auto-rotating carousel */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={slideInRight}>
            <div style={{ position: 'relative', minHeight: 220 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: 'var(--white)',
                    borderLeft: '4px solid var(--coral)',
                    borderRadius: 5,
                    padding: '36px 36px',
                    boxShadow: 'var(--shadow-hover)',
                    position: 'absolute',
                    width: '100%',
                  }}
                >
                  <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 20, color: 'var(--navy)', lineHeight: 1.65, marginBottom: 20, fontWeight: 400 }}>
                    "{quotes[current].text}"
                  </p>
                  <span style={{ fontSize: 14, color: 'var(--teal)', fontWeight: 600, fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    — {quotes[current].attr}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: 8, marginTop: 240, paddingTop: 8 }}>
              {quotes.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    background: i === current ? 'var(--coral)' : 'rgba(47,80,97,0.2)',
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p initial="hidden" whileInView="visible" viewport={{ once: false }} variants={fadeUp}
          style={{ textAlign: 'center', marginTop: 56, fontFamily: 'Barlow, sans-serif', fontStyle: 'italic', fontWeight: 700, fontSize: 22, color: 'var(--teal)' }}>
          More than a program. A partnership in your child's future.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Section 7: Co-Founders ──────────────────────────────────────────────────
const founders = [
  {
    name: 'Ankitt Sushilanand',
    title: 'Co-Founder | Harvard Graduate School of Education',
    bio: "Ankitt's work sits at the intersection of education, adolescent development, and real-world learning. After beginning his journey in engineering and spending nearly a decade leading global teams across industries in the United States, he shifted his focus toward understanding how young people learn, grow, and make decisions about their future.\n\nHe went on to earn a Master's in Education (M.Ed.) from the Harvard Graduate School of Education, where he focused on learning sciences, mentorship, and adolescent development. At FORCE, Ankitt designs learning experiences that combine career exploration, interdisciplinary thinking, and real-world problem solving.",
    pills: ['Harvard M.Ed.', 'Learning Sciences', 'Adolescent Development', 'Career Exploration', 'Real-World Learning'],
    animation: slideInLeft,
  },
  {
    name: 'Nidhi Gani',
    title: 'Co-Founder | Digital Health & Cybersecurity | Harvard Innovation Labs',
    bio: "Nidhi has worked across biotechnology, regulatory affairs, digital health, cybersecurity, and global innovation ecosystems in the United States. Her experience spans Fortune 500 environments, startup ecosystems, and interdisciplinary research spaces.\n\nAs a Professor of Digital Health and Cybersecurity at Northeastern University, she has taught and mentored graduate students. At FORCE, Nidhi helps students understand how real industries work, what future careers demand, and how their interests can connect to meaningful pathways.",
    pills: ['Harvard Innovation Lab', 'Northeastern Faculty', 'Digital Health', 'Innovation Ecosystems', 'Future Careers', 'Interdisciplinary Learning'],
    animation: slideInRight,
  },
];

function CoFounders() {
  return (
    <section className="section" style={{ background: 'var(--platinum)' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer} style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.span variants={fadeUp} className="eyebrow">The Team</motion.span>
          <motion.h2 variants={fadeUp} style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>The people behind FORCE.</motion.h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
          {founders.map((f, idx) => (
            <div key={f.name} style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'start' }} className={`founder-grid ${idx % 2 === 1 ? 'founder-reverse' : ''}`}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={f.animation}>
                <div style={{ width: '100%', height: 400, background: 'linear-gradient(135deg, var(--navy) 0%, var(--teal) 100%)', borderRadius: 5, marginBottom: 20 }} />
                <h3 style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--navy)', marginBottom: 6 }}>{f.name}</h3>
                <p style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 14, color: 'var(--teal)', fontWeight: 500 }}>{f.title}</p>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
                {f.bio.split('\n\n').map((para, i) => (
                  <motion.p key={i} variants={fadeUp} style={{ fontSize: 16, color: 'var(--black)', lineHeight: 1.75, marginBottom: 20 }}>{para}</motion.p>
                ))}
                <motion.div variants={staggerContainer} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 }}>
                  {f.pills.map(p => (
                    <motion.span key={p} variants={fadeUp} style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontWeight: 500, fontSize: 13, border: '1px solid var(--teal)', color: 'var(--teal)', borderRadius: 5, padding: '5px 14px', display: 'inline-flex' }}>
                      {p}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (min-width: 769px) {
          .founder-reverse { direction: rtl; }
          .founder-reverse > * { direction: ltr; }
        }
      `}</style>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
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
