import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import learningAnimation from '../../src/lottie/learning.json';
import moneyAnimation from '../../src/lottie/money.json';
import streakAnimation from '../../src/lottie/streak.json';

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
    description: 'Learning with FinLearn is fun, and research shows that it works! With quick, bite-sized lessons, you\'ll earn points and unlock new levels while gaining real-world financial skills. Our gamified approach keeps you motivated with streaks, achievements, and daily challenges.',
    animation: learningAnimation,
    textPosition: 'left',
    accentColor: '#58CC02',
  },
  {
    id: 'real-world',
    headline: 'practical. relevant. powerful.',
    title: 'Real-World Financial Skills',
    description: 'Make decisions in realistic scenarios and see the outcomes instantly. From budgeting your first paycheck to understanding credit cards and investing, you\'ll practice skills that directly apply to your life. No fluff—just practical knowledge that builds confidence.',
    animation: moneyAnimation,
    textPosition: 'right',
    accentColor: '#1CB0F6',
  },
  {
    id: 'build-habits',
    headline: 'consistent. rewarding. life-changing.',
    title: 'Build Habits That Stick',
    description: 'Daily streaks and reminders keep you on track to financial freedom. Our habit-building system uses behavioral science to help you form lasting money management habits. Small daily actions lead to massive long-term results.',
    animation: streakAnimation,
    textPosition: 'left',
    accentColor: '#FF9600',
  },
];

const FeatureRow = ({ feature, index }: { feature: Feature; index: number }) => {
  const isTextLeft = feature.textPosition === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
            isTextLeft ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Text Content */}
          <motion.div
            className={`space-y-6 ${isTextLeft ? 'md:order-1' : 'md:order-2'}`}
            initial={{ opacity: 0, x: isTextLeft ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Headline */}
            <h3
              className="text-2xl md:text-3xl font-bold tracking-tight"
              style={{ color: feature.accentColor }}
            >
              {feature.headline}
            </h3>

            {/* Title */}
            <h4 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              {feature.title}
            </h4>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {feature.description}
            </p>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-xl font-bold text-white shadow-lg transition-all"
              style={{
                backgroundColor: feature.accentColor,
                boxShadow: `0 4px 0 ${feature.accentColor}80, 0 8px 16px ${feature.accentColor}30`,
              }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Animation */}
          <motion.div
            className={`relative ${isTextLeft ? 'md:order-2' : 'md:order-1'}`}
            initial={{ opacity: 0, x: isTextLeft ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background Blob */}
              <div
                className="absolute inset-0 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: feature.accentColor }}
              />
              
              {/* Lottie Animation */}
              <div className="relative z-10 w-full h-full p-8">
                <Lottie
                  animationData={feature.animation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
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
    <section id="features" className="bg-white overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center pt-24 pb-8 px-6"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-4">
          Why We're Different
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Learning That Actually Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We combine behavioral science, gamification, and real-world scenarios 
          to make financial literacy stick.
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
