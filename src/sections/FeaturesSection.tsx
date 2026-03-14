import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import learningAnimation from '../../src/lottie/learning.json';
import moneyAnimation from '../../src/lottie/money.json';
import streakAnimation from '../../src/lottie/streak.json';
import Man_flying from '../../src/lottie/Businessman_flies.json';

interface Feature {
  id: string;
  headline: string;
  title: string;
  description: string;
  animation: object;
  textPosition: 'left' | 'right';
  accentColor: string;
}

const features: Feature[] = [
  {
    id: 'fun-learning',
    headline: 'free. fun. impactful.',
    title: 'Learning That Feels Like Play',
    description:
      "Learning with FinLearn is fun, and research shows that it works! With quick, bite-sized lessons, you'll earn points and unlock new levels while gaining real-world financial skills.",
    animation: learningAnimation,
    textPosition: 'left',
    accentColor: '#58CC02',
  },
  {
    id: 'real-world',
    headline: 'practical. relevant. powerful.',
    title: 'Real-World Financial Skills',
    description:
      'Make decisions in realistic scenarios and see the outcomes instantly. From budgeting your first paycheck to understanding credit cards and investing.',
    animation: moneyAnimation,
    textPosition: 'right',
    accentColor: '#1CB0F6',
  },
  {
    id: 'build-habits',
    headline: 'consistent. rewarding. life-changing.',
    title: 'Build Habits That Stick',
    description:
      'Daily streaks and reminders keep you on track to financial freedom. Our habit-building system uses behavioral science to help you form lasting money management habits.',
    animation: Man_flying,
    textPosition: 'left',
    accentColor: '#FF9600',
  },
];

const FeatureRow = ({ feature, index }: { feature: Feature; index: number }) => {
  const isTextLeft = feature.textPosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          {/* 
            FIX: Use explicit order classes on ALL breakpoints.
            On mobile: animation always renders first (order-1), text second (order-2).
            On md+: swap based on textPosition.
          */}
          <motion.div
            className={`
              space-y-4 md:space-y-6
              order-2
              ${isTextLeft ? 'md:order-1' : 'md:order-2'}
            `}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight uppercase"
              style={{ color: feature.accentColor }}
            >
              {feature.headline}
            </h3>

            <h4 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {feature.title}
            </h4>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {feature.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-3.5 rounded-xl font-bold text-white shadow-lg transition-all"
              style={{
                backgroundColor: feature.accentColor,
                boxShadow: `0 4px 0 ${feature.accentColor}80, 0 8px 16px ${feature.accentColor}30`,
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Animation Container */}
          {/* 
            FIX: Animation renders first on mobile (order-1),
            then swaps on md+ based on textPosition.
          */}
          <motion.div
            className={`
              order-1
              ${isTextLeft ? 'md:order-2' : 'md:order-1'}
            `}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            {/* 
              FIX: Removed max-w-sm constraint that was too restrictive on phones.
              Use a percentage-based max-width that works across all screen sizes.
            */}
            <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] lg:h-[450px] max-w-[360px] sm:max-w-md mx-auto">
              {/* Background blob */}
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-2xl"
                style={{ backgroundColor: feature.accentColor }}
              />

              {/* Lottie */}
              <div className="relative z-10 w-full h-full p-4 sm:p-6 md:p-8 flex items-center justify-center">
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  autoplay={true}
                  style={{ width: '100%', height: '100%' }}
                  rendererSettings={{
                    preserveAspectRatio: 'xMidYMid meet',
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-white relative overflow-x-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="text-center pt-16 sm:pt-20 md:pt-24 pb-8 px-4 sm:px-6"
      >
        <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-green-100 text-green-700 text-xs sm:text-sm font-bold mb-3 sm:mb-4">
          Why We're Different
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
          Learning That Actually Works
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          We combine behavioral science, gamification, and real-world scenarios to make financial
          literacy stick.
        </p>
      </motion.div>

      {/* Feature Rows */}
      <div className="divide-y divide-gray-100">
        {features.map((feature, index) => (
          <FeatureRow key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;