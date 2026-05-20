import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import Magnetic from './Magnetic';

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative py-12 px-8 bg-zinc-900/30 border-t border-white/5 overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern mask-fade-y pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-sm">
          
          {/* Left: Amsterdam time & location */}
          <div className="flex items-center gap-6 font-mono text-[10px] sm:text-xs tracking-wider uppercase">
            <div className="flex items-center gap-2">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
              </span>
              <span>Amsterdam, NL</span>
            </div>
            <div>
              {time ? `${time} GMT+2` : 'Loading...'}
            </div>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            <a href="#about" className="text-zinc-400 hover:text-white transition-colors duration-300">About</a>
            <a href="#skills" className="text-zinc-400 hover:text-white transition-colors duration-300">Skills</a>
            <a href="#projects" className="text-zinc-400 hover:text-white transition-colors duration-300">Projects</a>
            <a href="https://www.linkedin.com/in/devan-smit-190480385/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/Light-not-found" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors duration-300">GitHub</a>
          </div>

          {/* Right: Copyright & back to top */}
          <div className="flex items-center gap-6">
            <p className="m-0 font-medium text-xs sm:text-sm">&copy; {new Date().getFullYear()} — DS</p>
            <Magnetic pullFactor={0.25}>
              <a 
                href="#" 
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white/5"
                aria-label="Back to top"
              >
                <ArrowUp size={16} strokeWidth={2.5} />
              </a>
            </Magnetic>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
