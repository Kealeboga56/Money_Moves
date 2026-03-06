import { motion } from 'framer-motion';
import { colors } from '@/styles/duolingo-theme';

interface OwlMascotProps {
  emotion?: 'happy' | 'sad' | 'excited' | 'neutral' | 'celebrating';
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const OwlMascot = ({ emotion = 'happy', size = 'md', animate = true }: OwlMascotProps) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const getEyeExpression = () => {
    switch (emotion) {
      case 'happy':
        return (
          <>
            <ellipse cx="28" cy="38" rx="10" ry="12" fill="white" />
            <ellipse cx="28" cy="38" rx="6" ry="8" fill={colors.gray[800]} />
            <ellipse cx="68" cy="38" rx="10" ry="12" fill="white" />
            <ellipse cx="68" cy="38" rx="6" ry="8" fill={colors.gray[800]} />
          </>
        );
      case 'sad':
        return (
          <>
            <ellipse cx="28" cy="42" rx="10" ry="10" fill="white" />
            <ellipse cx="28" cy="44" rx="5" ry="6" fill={colors.gray[800]} />
            <ellipse cx="68" cy="42" rx="10" ry="10" fill="white" />
            <ellipse cx="68" cy="44" rx="5" ry="6" fill={colors.gray[800]} />
            <path d="M20 30 Q28 25 36 30" stroke={colors.gray[800]} strokeWidth="2" fill="none" />
            <path d="M60 30 Q68 25 76 30" stroke={colors.gray[800]} strokeWidth="2" fill="none" />
          </>
        );
      case 'excited':
        return (
          <>
            <ellipse cx="28" cy="35" rx="12" ry="14" fill="white" />
            <ellipse cx="28" cy="35" rx="7" ry="9" fill={colors.gray[800]} />
            <ellipse cx="68" cy="35" rx="12" ry="14" fill="white" />
            <ellipse cx="68" cy="35" rx="7" ry="9" fill={colors.gray[800]} />
            <circle cx="22" cy="28" r="3" fill="white" />
            <circle cx="62" cy="28" r="3" fill="white" />
          </>
        );
      case 'celebrating':
        return (
          <>
            <ellipse cx="28" cy="35" rx="11" ry="13" fill="white" />
            <ellipse cx="28" cy="35" rx="6" ry="8" fill={colors.gray[800]} />
            <ellipse cx="68" cy="35" rx="11" ry="13" fill="white" />
            <ellipse cx="68" cy="35" rx="6" ry="8" fill={colors.gray[800]} />
            <path d="M15 25 L20 30" stroke={colors.gray[800]} strokeWidth="2" />
            <path d="M85 25 L80 30" stroke={colors.gray[800]} strokeWidth="2" />
          </>
        );
      default:
        return (
          <>
            <ellipse cx="28" cy="40" rx="10" ry="11" fill="white" />
            <ellipse cx="28" cy="40" rx="6" ry="7" fill={colors.gray[800]} />
            <ellipse cx="68" cy="40" rx="10" ry="11" fill="white" />
            <ellipse cx="68" cy="40" rx="6" ry="7" fill={colors.gray[800]} />
          </>
        );
    }
  };

  const getBeak = () => {
    const baseY = emotion === 'sad' ? 58 : 55;
    return (
      <path 
        d={`M40 ${baseY} L48 ${baseY + 12} L56 ${baseY} Z`} 
        fill={colors.orange.DEFAULT}
      />
    );
  };

  const getMouth = () => {
    if (emotion === 'happy' || emotion === 'celebrating') {
      return (
        <path 
          d="M38 62 Q48 72 58 62" 
          stroke={colors.gray[800]} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
        />
      );
    }
    if (emotion === 'sad') {
      return (
        <path 
          d="M40 68 Q48 62 56 68" 
          stroke={colors.gray[800]} 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
        />
      );
    }
    return null;
  };

  return (
    <motion.div
      className={`${sizeClasses[size]} relative`}
      animate={animate ? {
        y: [0, -5, 0],
        rotate: emotion === 'celebrating' ? [0, -5, 5, 0] : 0,
      } : {}}
      transition={{
        duration: emotion === 'celebrating' ? 0.5 : 2,
        repeat: emotion === 'celebrating' ? 2 : Infinity,
        ease: "easeInOut"
      }}
    >
      <svg viewBox="0 0 96 96" className="w-full h-full">
        {/* Body */}
        <ellipse cx="48" cy="55" rx="40" ry="35" fill={colors.green.DEFAULT} />
        
        {/* Belly */}
        <ellipse cx="48" cy="65" rx="25" ry="20" fill={colors.green.light} />
        
        {/* Ears/Tufts */}
        <path d="M20 30 L15 15 L30 25" fill={colors.green.DEFAULT} />
        <path d="M76 30 L81 15 L66 25" fill={colors.green.DEFAULT} />
        
        {/* Eyes */}
        {getEyeExpression()}
        
        {/* Beak */}
        {getBeak()}
        
        {/* Mouth */}
        {getMouth()}
        
        {/* Wings */}
        <ellipse cx="12" cy="55" rx="8" ry="18" fill={colors.green.dark} />
        <ellipse cx="84" cy="55" rx="8" ry="18" fill={colors.green.dark} />
        
        {/* Feet */}
        <ellipse cx="35" cy="88" rx="8" ry="4" fill={colors.orange.DEFAULT} />
        <ellipse cx="61" cy="88" rx="8" ry="4" fill={colors.orange.DEFAULT} />
      </svg>
      
      {/* Celebration sparkles */}
      {emotion === 'celebrating' && (
        <>
          <motion.div
            className="absolute -top-2 -right-2 text-yellow-400"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute -top-1 -left-3 text-yellow-400"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ⭐
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default OwlMascot;
