import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import OwlMascot from '@/components/ui/OwlMascot';
import { colors } from '@/styles/duolingo-theme';



import Lottie from 'lottie-react';
import flame_money from '../../src/lottie/money_flame.json';

export const HeroSection = ({ onStart: _onStart }: { onStart: () => void }) => {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex-1 flex items-center justify-center px-6 py-12 pt-32"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        {/* LEFT — Owl (hidden on small, visible on lg+) */}
        {/*         <motion.div
          className="hidden lg:flex flex-shrink-0 items-center justify-center"
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        >
          <OwlMascot emotion="excited" size="lg" />
        </motion.div>
        */}

          
        <Lottie
          animationData={flame_money}
          loop={true}
          className="w-48 h-48" // adjust size as needed
        />
        {/* RIGHT — Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">

          {/* Owl visible only on mobile, centered */}
          <motion.div
            className="lg:hidden mb-8"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <OwlMascot emotion="excited" size="lg" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Learn finance the{' '}
            <span style={{ color: colors.green.DEFAULT }}>fun</span> way!
          </motion.h1>

          <motion.p
            className="text-gray-500 text-lg mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Make smart money decisions and watch your financial confidence grow!
          </motion.p>

          {/* Features */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <Sparkles size={18} className="text-green-500" />
              <span className="text-sm font-bold text-green-700">Free forever</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              <span className="text-lg">🎮</span>
              <span className="text-sm font-bold text-blue-700">Learn by playing</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full border border-purple-100">
              <span className="text-lg">🏆</span>
              <span className="text-sm font-bold text-purple-700">Earn rewards</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 w-full max-w-sm lg:max-w-xs"
          >
            <motion.button
              onClick={() =>
                window.open(
                  'https://ai.studio/apps/6b9defed-4803-4eec-8b08-1e4178d67c08',
                  '_blank'
                )
              }
              className="flex-1 py-4 rounded-2xl font-bold text-lg uppercase tracking-wide text-white transition-all duration-200 shadow-lg"
              style={{
                backgroundColor: colors.green.DEFAULT,
                boxShadow: `0 4px 0 #01082D, 0 10px 20px ${colors.green.DEFAULT}40`,
              }}
              whileHover={{
                translateY: -2,
                boxShadow: `0 6px 0 #01082D, 0 12px 24px ${colors.green.DEFAULT}50`,
              }}
              whileTap={{ translateY: 2, boxShadow: 'none' }}
            >
              PLAY
              <ArrowRight size={20} className="inline ml-2" />
            </motion.button>
          </motion.div>

          <motion.p
            className="text-gray-400 text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Already have an account?{' '}
            <span className="text-green-500 font-bold cursor-pointer hover:underline">
              Sign in
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;