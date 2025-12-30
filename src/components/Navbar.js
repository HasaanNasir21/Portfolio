import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, Mail, Download } from 'lucide-react';
import { Button } from './ui/Button';
import { useScrollspy } from '../hooks/useScrollspy';
import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobileMenuOpen, setMobileMenuOpen } = useStore();
  
  const sections = ['home', 'about', 'skills', 'projects', 'contact'];
  const activeSection = useScrollspy(sections, 100);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-dark-900/95 backdrop-blur-md border-b border-dark-700/50 shadow-lg" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                HN
              </div>
              <div className="hidden sm:block">
                <div className="text-white font-bold text-lg">Hasaan Nasir</div>
                <div className="text-primary-400 text-xs">Senior Python Architect & AI Engineer</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2",
                    activeSection === item.id
                      ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                      : "text-dark-300 hover:text-white hover:bg-dark-800/50"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button
                size="sm"
                onClick={() => scrollToSection('contact')}
              >
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-dark-900/95 backdrop-blur-md border-l border-dark-700/50 z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-dark-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                      HN
                    </div>
                    <div>
                      <div className="text-white font-semibold">Hasaan Nasir</div>
                      <div className="text-primary-400 text-xs">Senior Python Architect</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-dark-800/50 text-white hover:bg-dark-700/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 py-6">
                  <div className="space-y-2 px-6">
                    {navItems.map((item, index) => (
                      <motion.button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-300",
                          activeSection === item.id
                            ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                            : "text-dark-300 hover:text-white hover:bg-dark-800/50"
                        )}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-dark-700/50 space-y-4">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      window.open('/resume.pdf', '_blank');
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button
                    className="w-full"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Start Your Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 z-50 origin-left"
        style={{
          scaleX: isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default Navbar;