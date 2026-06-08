// Spikelabs-style easing — strong deceleration, feels purposeful
const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.45, ease: EASE } },
};

// Mask-reveal: parent must have overflow:hidden — text clips up like a masthead
export const textReveal = {
  hidden: { y: '110%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.72, ease: EASE } },
};

// Stagger variants — use whichever cadence fits the section density
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
};

export const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.58, ease: EASE } },
};

export const revealFromBottom = {
  hidden: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 0.88, ease: EASE },
  },
};

// Animated connecting line — scaleY from top
export const drawLine = {
  hidden: { scaleY: 0, opacity: 0 },
  visible: { scaleY: 1, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// Floating pill — each pill should get its own delay via transition prop
export const wobble = {
  animate: {
    y: [0, -7, 2, -4, 0],
    rotate: [0, 1.5, -0.8, 0.6, 0],
    transition: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
  },
};
