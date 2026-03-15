import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OwlMascot from '@/components/ui/OwlMascot';
import { colors } from '@/styles/duolingo-theme';
import { SectionTransition } from './components/ui/SectionTransition';

//Sections import 
import { FeaturesSection } from './sections/FeaturesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { Footer } from './sections/Footer';
import { Navbar } from './sections/Navbar';
import { VideoSection } from '@/sections/VideoSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { CTASection } from './sections/CTASection';
import { HeroSection } from '@/sections/HeroSection'

// Welcome Screen Component
const WelcomeScreen = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <Navbar />
      
      {/* Hero Section - No divider, highlight background */}
      <SectionTransition 
        variant="highlight" 
        intensity="dramatic"
        direction="up"
      >
        <HeroSection onStart={onStart} />
      </SectionTransition>

      {/* Video Section - With wave divider, alternate background */}
      <SectionTransition 
        delay={0.1}
        variant="alternate"
        showDivider={true}
        dividerStyle="wave"
        direction="right"
      >
        <VideoSection onStart={onStart} />
      </SectionTransition>

      {/* Features Section - No transition wrapper needed if you want it different */}
      <SectionTransition 
        variant="default"
        showDivider={true}
        dividerStyle="slant"
        direction="up"
      >
        <FeaturesSection />
      </SectionTransition>
     
      {/* How It Works - With curve divider */}
      <SectionTransition 
        delay={0.1}
        variant="alternate"
        showDivider={true}
        dividerStyle="curve"
        direction="left"
      >
        <HowItWorksSection />
      </SectionTransition>

      {/* Testimonials - With dots divider */}
      <SectionTransition 
        delay={0.1}
        variant="highlight"
        showDivider={true}
        dividerStyle="dots"
        direction="diagonal"
      >
        <TestimonialsSection />
      </SectionTransition>

      {/* CTA Section - Gradient background */}
      <SectionTransition 
        delay={0.1}
        variant="gradient"
        showDivider={true}
        dividerStyle="wave"
        intensity="dramatic"
      >
        <CTASection onStart={onStart} />
      </SectionTransition>

      {/* Footer */}
      <Footer />

    </div>
  );
};


// Main App Component
function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence mode="wait">
      {!started ? (
        <motion.div
          key="welcome"
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
        >
          <WelcomeScreen onStart={handleStart} />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          className="min-h-screen bg-white flex flex-col items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >


          <div className="text-center p-8">
            <OwlMascot emotion="happy" size="lg" />
            <h1 className="text-3xl font-bold text-gray-800 mt-6 mb-4">
              Welcome to FinLearn!
            </h1>
            <p className="text-gray-600 mb-6">
              The full app experience would load here.
            </p>
            <button
              onClick={() => setStarted(false)}
              className="px-6 py-3 rounded-xl font-bold text-white"
              style={{ backgroundColor: colors.green.DEFAULT }}
            >
              Back to Home
            </button>
          </div>


          
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
