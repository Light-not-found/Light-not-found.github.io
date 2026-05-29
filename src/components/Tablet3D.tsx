import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Tablet3DProps {
  isActive: boolean;
  onClick: () => void;
  skillsComponent: React.ReactNode;
  contactComponent: React.ReactNode;
  initialTab?: 'skills' | 'contact';
}

const Tablet3D: React.FC<Tablet3DProps> = ({ 
  isActive, 
  onClick, 
  skillsComponent, 
  contactComponent,
  initialTab = 'skills'
}) => {
  const [activeApp, setActiveApp] = useState<'skills' | 'contact'>(initialTab);
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Sync state if initialTab changes
  React.useEffect(() => {
    setActiveApp(initialTab);
  }, [initialTab]);

  return (
    <div 
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] ${
        isActive ? 'z-50' : 'hover:scale-[1.03] z-20'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* 3D Chamfered Metal Backing Layers */}
      {/* Back layer */}
      <div 
        className="absolute inset-0 rounded-[32px] bg-zinc-900 border border-zinc-800 shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"
        style={{
          transform: 'translateZ(-5px)',
          width: '420px',
          height: '310px',
        }}
      />
      {/* Middle layer */}
      <div 
        className="absolute inset-0 rounded-[32px] bg-zinc-850"
        style={{
          transform: 'translateZ(-2.5px)',
          width: '420px',
          height: '310px',
        }}
      />
      {/* Base layer */}
      <div 
        className="absolute inset-0 rounded-[32px] bg-zinc-800"
        style={{
          transform: 'translateZ(0px)',
          width: '420px',
          height: '310px',
        }}
      />

      {/* FRONT GLASS PANEL & BEZEL */}
      <div 
        className={`tablet-rim relative rounded-[32px] flex flex-col items-center justify-between p-3 select-none transition-all duration-700 ${
          isActive ? 'shadow-[0_25px_60px_-15px_rgba(139,92,246,0.3)]' : ''
        }`}
        style={{
          transform: 'translateZ(3px)',
          width: '420px',
          height: '310px',
        }}
      >
        {/* Screen Outer */}
        <div className="w-full h-full rounded-[22px] bg-[#09090b] relative overflow-hidden flex flex-col border border-white/5">
          
          {/* OS Header Status Bar (Tablet Style) */}
          <div className="h-8 w-full bg-zinc-950/60 backdrop-blur-md flex items-center justify-between px-5 text-[9px] font-bold text-white/90 z-40 shrink-0 pointer-events-none select-none">
            <div className="flex items-center gap-1">
              <span>{currentTime}</span>
              <span className="text-[7px] text-zinc-500 font-semibold">DEV OS TABLET</span>
            </div>
            
            {/* Status Icons */}
            <div className="flex items-center gap-2">
              <span>LTE</span>
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.62 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
              <div className="w-5 h-2.5 border border-white/40 rounded-sm p-[1px] flex items-center">
                <div className="h-full w-full bg-green-500 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Gloss overlay */}
          <div className="device-reflection" />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-white/[0.02] to-white/[0.01] pointer-events-none z-30" />

          {/* OS Dock / App Selector segment bar */}
          <div className="h-11 w-full bg-zinc-900 border-b border-white/5 flex items-center justify-center px-4 shrink-0 z-40 relative">
            <div className="flex bg-zinc-950 p-1 rounded-lg border border-white/5 text-[10px] font-bold w-full max-w-[280px]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveApp('skills');
                }}
                className={`flex-grow py-1 rounded-md text-center tracking-wider transition-colors uppercase ${
                  activeApp === 'skills' 
                    ? 'bg-white text-zinc-950 font-extrabold shadow' 
                    : 'text-zinc-400 hover:text-white'
                } ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                Expertise
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveApp('contact');
                }}
                className={`flex-grow py-1 rounded-md text-center tracking-wider transition-colors uppercase ${
                  activeApp === 'contact' 
                    ? 'bg-white text-zinc-950 font-extrabold shadow' 
                    : 'text-zinc-400 hover:text-white'
                } ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                Connect
              </button>
            </div>
          </div>

          {/* Interactive Screen Viewport */}
          <div 
            className={`w-full flex-grow overflow-y-auto device-screen-scrollbar bg-[#050507] ${
              isActive ? 'pointer-events-auto' : 'pointer-events-none overflow-hidden select-none'
            }`}
            style={{
              maskImage: 'linear-gradient(to bottom, black calc(100% - 20px), transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 20px), transparent 100%)',
            }}
          >
            {/* Display active app */}
            <div className="p-5">
              {activeApp === 'skills' ? skillsComponent : contactComponent}
            </div>
          </div>

          {/* Home indicator bar */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/20 rounded-full z-40 pointer-events-none" />

          {/* Screen Lock Dim Cover */}
          {!isActive && (
            <div className="absolute inset-0 bg-black/75 z-30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] transition-opacity duration-500 hover:bg-black/55 group">
              <motion.div
                initial={{ y: 3 }}
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-3 group-hover:scale-110 group-hover:bg-white/15 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 animate-pulse">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </motion.div>
              <span className="text-sm font-bold text-white/90 uppercase tracking-widest">Skills & Contact</span>
              <span className="text-xs text-zinc-400 mt-1">Click to wake screen & view apps</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Tablet3D;
