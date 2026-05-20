import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isScrolled 
          ? 'top-4 w-[95%] max-w-3xl rounded-[100px] bg-zinc-900/85 backdrop-blur-md shadow-lg shadow-black/50 border border-white/5 px-6 py-3' 
          : 'top-6 w-[90%] max-w-[700px] rounded-[100px] bg-zinc-900/70 backdrop-blur-md border border-white/10 px-6 py-3'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <a href="#" className="text-xl font-extrabold tracking-tighter text-white">
          D<span className="text-blue-500">S</span>
        </a>
        <nav className="hidden md:flex gap-1 items-center relative">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <Magnetic key={section} pullFactor={0.15}>
              <a 
                href={`#${section}`} 
                className={`text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 capitalize relative block ${
                  activeSection === section ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {/* Active sliding background bubble */}
                {activeSection === section && (
                  <motion.span 
                    layoutId="activeNavBubble"
                    className="absolute inset-0 bg-white/10 rounded-full z-0 pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{section}</span>
              </a>
            </Magnetic>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
