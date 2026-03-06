// components/FullScreenPage.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface FullScreenPageProps {
  children: ReactNode;
  isActive: boolean;
  direction: number;
}

const pageVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // Smooth phantom curve
    },
  },
  exit: (direction: number) => ({
    y: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export function FullScreenPage({ children, isActive, direction }: FullScreenPageProps) {
  return (
    <motion.div
      className="fixed inset-0 w-full h-full overflow-y-auto bg-white"
      custom={direction}
      variants={pageVariants}
      initial="enter"
      animate={isActive ? "center" : "exit"}
      exit="exit"
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
}