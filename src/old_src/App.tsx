import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { colors } from '@/styles/duolingo-theme';

// Sections import 
import { FeaturesSection } from './sections/FeaturesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { Footer } from './sections/Footer';
import { Navbar } from './sections/Navbar';
import { VideoSection } from '@/sections/VideoSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { CTASection } from './sections/CTASection';
import { HeroSection } from '@/sections/HeroSection';
import { FullScreenPage } from './components/ui/FullScreenPage';

// Define your pages array
const PAGES = [
  { id: 'hero', component: HeroSection, hasStart: true },
  { id: 'video', component: VideoSection, hasStart: true },
  { id: 'features', component: FeaturesSection, hasStart: false },
  { id: 'how-it-works', component: HowItWorksSection, hasStart: false },
  { id: 'testimonials', component: TestimonialsSection, hasStart: false },
  { id: 'cta', component: CTASection, hasStart: true },
  { id: 'footer', component: Footer, hasStart: false },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [started, setStarted] = useState(false);

  // Navigate to specific page
  const goToPage = useCallback((index: number, dir: number) => {
    if (index >= 0 && index < PAGES.length) {
      setDirection(dir);
      setCurrentPage(index);
    }
  }, []);

  // Handle scroll/wheel events
  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 800; // ms between scrolls

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime < scrollCooldown) return;

      if (e.deltaY > 0 && currentPage < PAGES.length - 1) {
        goToPage(currentPage + 1, 1);
        lastScrollTime = now;
      } else if (e.deltaY < 0 && currentPage > 0) {
        goToPage(currentPage - 1, -1);
        lastScrollTime = now;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, goToPage]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && currentPage < PAGES.length - 1) {
        goToPage(currentPage + 1, 1);
      } else if (e.key === 'ArrowUp' && currentPage > 0) {
        goToPage(currentPage - 1, -1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, goToPage]);

  const handleStart = () => {
    setStarted(true);
    goToPage(0, 1); // Go to first page of app
  };

  // If not started, show landing mode with navbar + scrollable content
  if (!started) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div onClick={() => goToPage(0, 1)}>
          <HeroSection onStart={handleStart} />
        </div>
        <VideoSection onStart={handleStart} />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection onStart={handleStart} />
        <Footer />
      </div>
    );
  }

  // Full-screen page mode
  return (
    <div className="fixed inset-0 bg-white overflow-hidden">
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {PAGES.map((page, index) => (
          <button
            key={page.id}
            onClick={() => goToPage(index, index > currentPage ? 1 : -1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentPage 
                ? 'bg-[#58cc02] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${page.id}`}
          />
        ))}
      </div>

      {/* Scroll indicators */}
      {currentPage > 0 && (
        <button
          onClick={() => goToPage(currentPage - 1, -1)}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronUp className="w-6 h-6 text-gray-600" />
        </button>
      )}
      
      {currentPage < PAGES.length - 1 && (
        <button
          onClick={() => goToPage(currentPage + 1, 1)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
        >
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </button>
      )}

      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <FullScreenPage
          key={currentPage}
          isActive={true}
          direction={direction}
        >
          {(() => {
            const PageComponent = PAGES[currentPage].component;
            const hasStart = PAGES[currentPage].hasStart;
            
            return (
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-1 flex flex-col justify-center">
                    <PageComponent 
                      onStart={hasStart ? handleStart : undefined} 
                    />
                </div>
              </div>
            );
          })()}
        </FullScreenPage>
      </AnimatePresence>

      {/* Back to landing button */}
      <button
        onClick={() => setStarted(false)}
        className="fixed top-6 left-6 z-50 px-4 py-2 rounded-xl font-bold text-white shadow-lg hover:scale-105 transition-transform"
        style={{ backgroundColor: colors.green.DEFAULT }}
      >
        ← Back
      </button>
    </div>
  );
}

export default App;