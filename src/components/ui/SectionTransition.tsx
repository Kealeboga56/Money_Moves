// components/SectionTransition.tsx
import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'diagonal';
  intensity?: 'smooth' | 'snappy' | 'dramatic';
  variant?: 'default' | 'alternate' | 'highlight' | 'gradient';
  showDivider?: boolean;
  dividerStyle?: 'wave' | 'slant' | 'curve' | 'dots';
}

// Define easing as const tuple to satisfy TypeScript
const EASINGS = {
  smooth: [0.22, 1, 0.36, 1] as [number, number, number, number],
  snappy: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  dramatic: [0.16, 1, 0.3, 1] as [number, number, number, number],
};

const getVariants = (direction: string, intensity: 'smooth' | 'snappy' | 'dramatic'): Variants => {
  const distance = {
    smooth: 80,
    snappy: 120,
    dramatic: 200,
  }[intensity];

  const hiddenPositions = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: -distance },
    down: { x: 0, y: distance },
    diagonal: { x: -distance * 0.7, y: distance * 0.7 },
  };

  const start = hiddenPositions[direction as keyof typeof hiddenPositions];

  return {
    hidden: {
      opacity: 0,
      x: start.x,
      y: start.y,
      scale: 0.95,
      rotateZ: intensity === 'dramatic' ? (direction === 'left' ? -5 : 5) : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: intensity === 'snappy' ? 0.5 : 0.7,
        ease: EASINGS[intensity],
      },
    },
  };
};

// Divider Component
const SectionDivider = ({ style }: { style: 'wave' | 'slant' | 'curve' | 'dots' }) => {
  const dividers = {
    wave: (
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 -translate-y-[1px]">
        <svg 
          className="relative block w-full h-8 md:h-12" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-gray-100 dark:text-gray-900"
          />
        </svg>
      </div>
    ),
    slant: (
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[1px]">
        <div className="h-8 md:h-12 bg-gradient-to-br from-gray-100 to-transparent dark:from-gray-900 transform -skew-y-2 origin-top-left"></div>
      </div>
    ),
    curve: (
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[1px]">
        <svg 
          className="relative block w-full h-8 md:h-12" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-current text-gray-100 dark:text-gray-900"
          />
        </svg>
      </div>
    ),
    dots: (
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[1px]">
        <div className="h-8 md:h-12" 
          style={{
            backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.2,
            color: 'currentColor'
          }}
        />
      </div>
    ),
  };

  return dividers[style];
};

export function SectionTransition({ 
  children, 
  className = "",
  delay = 0,
  direction = 'up',
  intensity = 'smooth',
  variant = 'default',
  showDivider = false,
  dividerStyle = 'wave'
}: SectionTransitionProps) {
  const variants = getVariants(direction, intensity);
  
  // Background variants for visual separation
  const bgClasses = {
    default: 'bg-white dark:bg-gray-950',
    alternate: 'bg-gray-50 dark:bg-gray-900',
    highlight: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false,
        amount: 0.25,
        margin: "-50px"
      }}
      variants={variants}
      transition={{ delay }}
      className={`relative ${bgClasses[variant]} ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {showDivider && <SectionDivider style={dividerStyle} />}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}

// Card wrapper with styling
interface CardSlideProps extends SectionTransitionProps {
  glass?: boolean;
  elevated?: boolean;
}

export function CardSlide({
  children,
  className = "",
  glass = false,
  elevated = true,
  ...props
}: CardSlideProps) {
  return (
    <SectionTransition
      {...props}
      className={`
        relative overflow-hidden rounded-2xl
        ${glass 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20' 
          : 'bg-white dark:bg-gray-900'
        }
        ${elevated ? 'shadow-2xl shadow-black/10 dark:shadow-black/30' : 'shadow-lg'}
        ${className}
      `}
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 pointer-events-none"
        initial={{ x: '-200%' }}
        whileInView={{ x: '200%' }}
        transition={{ duration: 1.5, delay: props.delay ? props.delay + 0.3 : 0.3 }}
      />
      <div className="relative z-10 p-8">
        {children}
      </div>
    </SectionTransition>
  );
}

// Stagger container
interface SlideContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function SlideContainer({ 
  children, 
  className = "",
  staggerDelay = 0.1,
}: SlideContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}