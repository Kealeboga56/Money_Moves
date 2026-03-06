import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  Menu, X } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: colors.background }}
          >
            <OwlMascot emotion="happy" size="sm" />
          </div>
          <span className="font-bold text-xl text-gray-800">FinLearn</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-gray-600 hover:text-green-600 font-semibold transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#learn')}
            className="px-6 py-2.5 rounded-xl text-white font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.green.DEFAULT }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
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
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-3 text-gray-600 hover:text-green-600 font-semibold border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#learn')}
                className="w-full mt-4 py-3 rounded-xl text-white font-bold"
                style={{ backgroundColor: colors.green.DEFAULT }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

