import React from 'react';

interface LaptopMockupProps {
  children: React.ReactNode;
}

const LaptopMockup: React.FC<LaptopMockupProps> = ({ children }) => {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
      {/* MacBook Screen Bezel */}
      <div className="macbook-mockup relative flex w-full flex-col overflow-hidden">
        {/* Notch camera dot */}
        <div className="macbook-notch-mockup" />

        {/* Safari Browser Header */}
        <div className="relative z-50 flex h-9 w-full shrink-0 select-none items-center justify-between border-b border-white/5 bg-zinc-900 px-4">
          {/* Window dots */}
          <div className="flex w-20 items-center gap-1.5">
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="block h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Address input */}
          <div className="flex max-w-[260px] items-center gap-1.5 truncate rounded-md border border-white/5 bg-zinc-950/80 px-8 py-1 text-[9px] font-medium tracking-wide text-zinc-500">
            <svg
              className="h-2.5 w-2.5 shrink-0 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>

            <span className="truncate">localhost:3000/projects</span>
          </div>

          <div className="flex w-20 justify-end gap-1.5 text-[10px] font-bold text-zinc-600">
            <span>⌥</span>
            <span>⌘</span>
          </div>
        </div>

        {/* Gloss glass glare layer */}
        <div className="device-reflection" />
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-white/[0.025] via-transparent to-transparent" />

        {/* Scrollable projects viewport */}
        <div className="device-screen-scrollbar relative h-[min(52svh,450px)] min-h-[340px] w-full overflow-y-auto bg-[#050507]">
          {children}
        </div>
      </div>

      {/* MacBook Bottom Base Bezel */}
      <div className="macbook-base-mockup h-3 w-[103%] shrink-0" />
    </div>
  );
};

export default LaptopMockup;