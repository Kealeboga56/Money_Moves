// Duolingo-inspired Color Palette
export const colors = {
  // Primary Brand Colors
  green: {
    DEFAULT: '#017280',
    light: '#0090BF',
    dark: '#023C85',
    hover: '#0E677C',
  },
  blue: {
    DEFAULT: '#1CB0F6',
    light: '#7CD5FF',
    dark: '#1899D6',
    hover: '#14D7DB',
  },
  purple: {
    DEFAULT: '#854Dba',
    light: '#A560E8',
    dark: '#6B3D95',
  },
  orange: {
    DEFAULT: '#FF9600',
    light: '#FFB020',
    dark: '#E68600',
  },
  red: {
    DEFAULT: '#FF4B4B',
    light: '#FF6B6B',
    dark: '#E04343',
  },
  yellow: {
    DEFAULT: '#FFC800',
    light: '#FFD93D',
    dark: '#E6B400',
  },
  pink: {
    DEFAULT: '#FF7CA8',
    light: '#FF9CBD',
    dark: '#E66B94',
  },
  
  // Neutrals
  gray: {
    50: '#F7F7F7',
    100: '#E5E5E5',
    200: '#D4D4D4',
    300: '#AFAFAF',
    400: '#8C8C8C',
    500: '#6B6B6B',
    600: '#4B4B4B',
    700: '#3C3C3C',
    800: '#2D2D2D',
    900: '#1F1F1F',
  },
  
  // Background
  background: '#FFFFFF',
  surface: '#F7F7F7',
  
  // Text
  text: {
    primary: '#4B4B4B',
    secondary: '#6B6B6B',
    muted: '#8C8C8C',
  },
};

// Duolingo-style shadows
export const shadows = {
  button: '0 4px 0 #13045A',
  buttonBlue: '0 4px 0 #1899D6',
  buttonRed: '0 4px 0 #E04343',
  card: '0 2px 8px rgba(0, 0, 0, 0.1)',
  floating: '0 4px 12px rgba(0, 0, 0, 0.15)',
  pressed: '0 0 0 #89D6E8',
};

// Duolingo-style border radius
export const radius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  full: '9999px',
};

// Duolingo-style animations
export const animations = {
  bounce: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: 'spring', stiffness: 500, damping: 15 },
  },
  slideUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  shake: {
    animate: {
      x: [-5, 5, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  },
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
  },
};
