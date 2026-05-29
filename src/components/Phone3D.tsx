import React from 'react';
import { motion } from 'framer-motion';

interface Phone3DProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Phone3D: React.FC<Phone3DProps> = ({ isActive, onClick, children }) => {
  // Simple top-bar status items
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

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
      {/* 3D Volumetric Depth Layers (Stacked along Z-axis to create metal rim depth) */}
      {/* Back Plate */}
      <div 
        className="absolute inset-0 rounded-[40px] bg-zinc-900 border border-zinc-800 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
        style={{
          transform: 'translateZ(-6px)',
          width: '310px',
          height: '620px',
        }}
      />
      {/* Inner Rim Layer 1 */}
      <div 
        className="absolute inset-0 rounded-[40px] bg-zinc-800"
        style={{
          transform: 'translateZ(-4px)',
          width: '310px',
          height: '620px',
        }}
      />
      {/* Inner Rim Layer 2 */}
      <div 
        className="absolute inset-0 rounded-[40px] bg-zinc-700"
        style={{
          transform: 'translateZ(-2px)',
          width: '310px',
          height: '620px',
        }}
      />
      {/* Inner Rim Layer 3 */}
      <div 
        className="absolute inset-0 rounded-[40px] bg-zinc-600"
        style={{
          transform: 'translateZ(0px)',
          width: '310px',
          height: '620px',
        }}
      />

      {/* Front Plate (Screen Bezel & Active Viewport) */}
      <div 
        className={`phone-rim relative rounded-[40px] flex flex-col items-center justify-between p-3 select-none transition-all duration-700 ${
          isActive ? 'shadow-[0_25px_60px_-10px_rgba(59,130,246,0.3)]' : ''
        }`}
        style={{
          transform: 'translateZ(4px)',
          width: '310px',
          height: '620px',
        }}
      >
        {/* Sleek Bezel Screen Container */}
        <div className="w-full h-full rounded-[30px] bg-[#09090b] relative overflow-hidden flex flex-col border border-white/5 shadow-2xl">
          
          {/* OS Header / Status Bar */}
          <div className="h-9 w-full bg-black/40 backdrop-blur-md flex items-center justify-between px-5 text-[10px] font-bold text-white/90 z-40 shrink-0 pointer-events-none select-none">
            <span>{currentTime}</span>
            {/* Battery / Signal Mockups */}
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.62 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
              </svg>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M2 22h20V2z"/>
              </svg>
              <div className="w-5 h-2.5 border border-white/40 rounded-sm p-[1px] flex items-center">
                <div className="h-full w-4/5 bg-white rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* iPhone Dynamic Island */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-full z-50 flex items-center justify-between px-3 text-[8px] border border-white/5 pointer-events-none">
            <span className="w-1.5 h-1.5 bg-blue-500/80 rounded-full animate-pulse" />
            <span className="text-[7px] text-zinc-500 font-semibold tracking-wider">DEV OS v1.0</span>
            <span className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
          </div>

          {/* Gloss/Glare Overlay */}
          <div className="device-reflection" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 via-purple-500/0 to-white/[0.03] pointer-events-none z-30" />

          {/* Home Indicator line at the bottom */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-40 pointer-events-none" />

          {/* Actual Screen Scrollable Content */}
          <div 
            className={`w-full flex-grow overflow-y-auto device-screen-scrollbar bg-[#050507] ${
              isActive ? 'pointer-events-auto' : 'pointer-events-none overflow-hidden select-none'
            }`}
            style={{
              // Soft fade overlay on the very bottom inside scroll window
              maskImage: 'linear-gradient(to bottom, black calc(100% - 20px), transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black calc(100% - 20px), transparent 100%)',
            }}
          >
            {/* The child component (About Page) */}
            <div className="px-5 pt-8 pb-16">
              {children}
            </div>
          </div>

          {/* Passive / Locked Overlay cover when device is not active */}
          {!isActive && (
            <div className="absolute inset-0 bg-black/60 z-30 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] transition-opacity duration-500 hover:bg-black/45 group">
              <motion.div 
                initial={{ y: 5 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 mb-3 group-hover:scale-110 group-hover:bg-white/15 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10 17 15 12 10 7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
              </motion.div>
              <span className="text-xs font-bold text-white/90 uppercase tracking-widest">About Me</span>
              <span className="text-[10px] text-zinc-400 mt-1">Click to unlock & read</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Phone3D;
