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
        hour12: false,
      };

      const formatter = new Intl.DateTimeFormat('en-US', options);
      setTime(formatter.format(new Date()));
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-zinc-900/30 px-6 py-12 sm:px-8">
      {/* Background Subtle Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-20 mask-fade-y" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 text-sm text-zinc-500 md:flex-row">
          {/* Left: Amsterdam time & location */}
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-wider uppercase sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>

              <span>Amsterdam, NL</span>
            </div>

            <div>{time ? `${time} GMT+2` : 'Loading...'}</div>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-semibold tracking-widest uppercase sm:gap-8 sm:text-xs">
            <a
              href="#about"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="https://www.linkedin.com/in/devan-smit-190480385/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Light-not-found"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 transition-colors duration-300 hover:text-white"
            >
              GitHub
            </a>
          </div>

          {/* Right: Copyright & back to top */}
          <div className="flex items-center gap-6">
            <p className="m-0 text-xs font-medium sm:text-sm">
              &copy; {new Date().getFullYear()} — DS
            </p>

            <Magnetic pullFactor={0.25}>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-all duration-300 hover:border-white hover:bg-white/5"
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