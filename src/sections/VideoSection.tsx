
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const colors = {
  green: '#58CC02',
  greenLight: '#89E219',
  greenDark: '#58A700',
  blue: '#1CB0F6',
  purple: '#CE82FF',
  yellow: '#FF9600',
  pink: '#FF4B8C',
};

// Floating shape component
const FloatingShape = ({ 
  type, 
  color, 
  size, 
  delay, 
  duration,
  left,
  top 
}: { 
  type: 'circle' | 'square' | 'triangle' | 'coin';
  color: string;
  size: number;
  delay: number;
  duration: number;
  left: string;
  top: string;
}) => {
  return (
    <motion.div 
      className="absolute pointer-events-none"
      style={{ left, top }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 0.6, 
        scale: 1,
        y: [-20, 20, -20],
        rotate: type === 'coin' ? [0, 360] : [-10, 10, -10],
      }}
      transition={{
        opacity: { duration: 1.5, delay: delay / 1000, ease: 'easeOut' },
        scale: { duration: 1.5, delay: delay / 1000, ease: 'backOut' },
        y: { duration: duration / 1000, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: duration / 1000, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      {type === 'circle' && (
        <div 
          className="rounded-full"
          style={{ 
            width: size, 
            height: size, 
            background: `linear-gradient(135deg, ${color}, ${color}80)` 
          }}
        />
      )}
      {type === 'square' && (
        <div 
          className="rounded-lg"
          style={{ 
            width: size, 
            height: size, 
            background: `linear-gradient(135deg, ${color}, ${color}60)`,
            transform: 'rotate(45deg)'
          }}
        />
      )}
      {type === 'triangle' && (
        <div 
          style={{
            width: 0,
            height: 0,
            borderLeft: `${size/2}px solid transparent`,
            borderRight: `${size/2}px solid transparent`,
            borderBottom: `${size}px solid ${color}`,
          }}
        />
      )}
      {type === 'coin' && (
        <div 
          className="rounded-full flex items-center justify-center font-bold text-white shadow-lg"
          style={{ 
            width: size, 
            height: size, 
            background: `linear-gradient(135deg, ${colors.yellow}, ${colors.yellow}dd)`,
            fontSize: size * 0.4
          }}
        >
          $
        </div>
      )}
    </motion.div>
  );
};

// Animated counter component
{/*const AnimatedCounter = ({ 
  end, 
  suffix = '', 
  label, 
  icon: Icon,
  color 
}: { 
  end: number;
  suffix?: string;
  label: string;
  icon: React.ElementType;
  color: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Number(current.toFixed(1)));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col items-center p-4"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'backOut' }}
    >
      <div 
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-gray-900">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-500 font-medium mt-1">{label}</div>
    </motion.div>
  );
}; */}


// Word animation component
const AnimatedWord = ({ children, delay, gradient = false }: { children: string; delay: number; gradient?: boolean }) => (
  <motion.span
    className={`inline-block ${gradient ? 'bg-gradient-to-r from-green-500 via-green-400 to-blue-500 bg-clip-text text-transparent' : ''}`}
    initial={{ opacity: 0, y: 50, rotateX: -90 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ 
      duration: 0.8, 
      delay, 
      ease: [0.215, 0.61, 0.355, 1] 
    }}
  >
    {children}
  </motion.span>
);

// Main Hero Section
export const VideoSection = ({ onStart: _onStart }: { onStart: () => void }) => {
  return (
    <section 
      id="learn"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-blue-50/30"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.5" fill="#58CC02" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Shapes */}
      <FloatingShape type="circle" color={colors.green} size={80} delay={0} duration={4000} left="5%" top="15%" />
      <FloatingShape type="coin" color={colors.yellow} size={60} delay={500} duration={3500} left="85%" top="20%" />
      <FloatingShape type="square" color={colors.blue} size={50} delay={1000} duration={4500} left="90%" top="60%" />
      <FloatingShape type="circle" color={colors.purple} size={40} delay={1500} duration={3800} left="8%" top="70%" />
      <FloatingShape type="triangle" color={colors.pink} size={35} delay={800} duration={4200} left="75%" top="80%" />
      <FloatingShape type="coin" color={colors.yellow} size={45} delay={1200} duration={3600} left="15%" top="85%" />
      <FloatingShape type="square" color={colors.greenLight} size={55} delay={600} duration={4000} left="92%" top="35%" />
      <FloatingShape type="circle" color={colors.blue} size={30} delay={1800} duration={4400} left="3%" top="45%" />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold mb-8 shadow-lg shadow-green-500/25"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Trusted by UCT students</span>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Master money before it’s real
          </motion.p>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
            <AnimatedWord delay={0.2}>Your HOME to learn strategy</AnimatedWord>{' '}
            <AnimatedWord delay={0.3}>compete</AnimatedWord>{' '}
            <AnimatedWord delay={0.4}>and master.</AnimatedWord>
            <br />
            <AnimatedWord delay={0.5} gradient>MONEY</AnimatedWord>
          </h1>



          {/* CTA Buttons */}
          {/*<motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button
              onClick={() => onStart?.()}
              className="group px-8 py-4 rounded-2xl font-bold text-lg text-white flex items-center justify-center gap-3 shadow-xl"
              style={{ backgroundColor: colors.green, boxShadow: `0 10px 30px ${colors.green}40` }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={22} fill="currentColor" />
              Start Playing
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 rounded-2xl font-bold text-lg text-gray-700 bg-white border-2 border-gray-200 hover:border-green-400 hover:text-green-600 flex items-center justify-center gap-2 shadow-lg transition-colors"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <TrendingUp size={22} />
              View Curriculum
            </motion.button>
          </motion.div>
          */}

          
          {/* Stats Grid */}

          {/* Ratings
                    <motion.div 
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: 'backOut' }}
          >
            <AnimatedCounter 
              end={50} 
              suffix="K+" 
              label="Active Learners" 
              icon={Users}
              color={colors.green}
            />
            <AnimatedCounter 
              end={4.9} 
              suffix="" 
              label="App Rating" 
              icon={Star}
              color={colors.yellow}
            />
            <AnimatedCounter 
              end={100} 
              suffix="%" 
              label="Free Forever" 
              icon={Sparkles}
              color={colors.blue}
            />
          </motion.div>
          
          */}

        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-gray-400 rounded-full"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default VideoSection;
