import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import OwlMascot from '@/components/ui/OwlMascot';
import { colors } from '@/styles/duolingo-theme';

// Navigation Component
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Learn', href: '#learn' },
    { name: 'About', href: '#about' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo - Floating Pill Style */}
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-[0_4px_0_0_rgba(0,0,0,0.1)] border-2 border-gray-100 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:translate-y-[2px] transition-all cursor-pointer"
        >
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: colors.background }}
          >
            <OwlMascot emotion="happy" size="sm" />
          </div>
          <span className="font-bold text-xl text-gray-800">FinLearn</span>
        </div>

        {/* Desktop Navigation - Floating Pills */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="px-5 py-2.5 rounded-xl bg-white text-gray-600 font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.08)] border-2 border-gray-100 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.08)] hover:translate-y-[2px] hover:text-green-600 active:shadow-none active:translate-y-[4px] transition-all"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#home')}
            className="px-6 py-2.5 rounded-xl text-white font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all ml-2"
            style={{ backgroundColor: colors.green.DEFAULT }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button - Floating Style */}
        <button 
          className="md:hidden p-3 bg-white rounded-xl shadow-[0_4px_0_0_rgba(0,0,0,0.1)] border-2 border-gray-100 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.1)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden px-6 pb-4"
          >
            <div className="bg-white rounded-2xl shadow-[0_8px_0_0_rgba(0,0,0,0.08)] border-2 border-gray-100 p-2 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-600 hover:text-green-600 font-bold hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#home')}
                className="w-full mt-2 py-3 rounded-xl text-white font-bold shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] transition-all"
                style={{ backgroundColor: colors.green.DEFAULT }}
              >
                Get STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;