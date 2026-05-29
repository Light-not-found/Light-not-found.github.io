import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const sections = ['about', 'projects', 'skills', 'contact'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-11 left-1/2 z-[250] w-[92%] max-w-3xl -translate-x-1/2 rounded-[100px] border border-white/10 bg-zinc-900/80 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-6"
    >
      <div className="flex w-full items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setActiveTab('home')}
          className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 text-xl font-extrabold tracking-tighter text-white transition-opacity select-none hover:opacity-80"
        >
          D<span className="text-blue-500">S</span>

          {activeTab !== 'home' && (
            <span className="ml-2 hidden rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-bold tracking-normal text-zinc-500 uppercase sm:inline-flex">
              Studio
            </span>
          )}
        </button>

        <nav className="relative flex items-center gap-1">
          {sections.map((section) => (
            <Magnetic key={section} pullFactor={0.15}>
              <button
                type="button"
                onClick={() => setActiveTab(section)}
                className={`relative cursor-pointer rounded-full border-none bg-transparent px-3 py-2 text-sm font-medium capitalize transition-colors duration-300 sm:px-4 ${
                  activeTab === section
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {activeTab === section && (
                  <motion.span
                    layoutId="activeNavBubble"
                    className="pointer-events-none absolute inset-0 z-0 rounded-full bg-white/10"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">{section}</span>
              </button>
            </Magnetic>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;