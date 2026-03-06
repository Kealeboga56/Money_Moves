// components/SectionTransition.tsx
import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down' | 'diagonal';
  intensity?: 'smooth' | 'snappy' | 'dramatic';
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

export function SectionTransition({ 
  children, 
  className = "",
  delay = 0,
  direction = 'up',
  intensity = 'smooth'
}: SectionTransitionProps) {
  const variants = getVariants(direction, intensity);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false,
        amount: 0.25,
        margin: "-50px"
      }}
      variants={variants}
      transition={{ delay }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
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