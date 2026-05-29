import React from 'react';
import { motion } from 'framer-motion';

interface Laptop3DProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const Laptop3D: React.FC<Laptop3DProps> = ({ isActive, onClick, children }) => {
  const handleClick = () => {
    if (!isActive) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && !isActive) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`group relative mx-auto aspect-[16/10] w-[min(92vw,780px)] outline-none transition-all duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] ${
        isActive
          ? 'z-50 cursor-default scale-[1.02]'
          : 'z-20 cursor-pointer hover:scale-[1.025]'
      }`}
      style={{
        perspective: '1500px',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Laptop Lid / Screen */}
      <motion.div
        className="absolute bottom-[8%] left-0 z-30 flex h-[86%] w-full origin-bottom flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-[7px] shadow-[0_30px_90px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)]"
        initial={false}
        animate={{
          rotateX: isActive ? -7 : 68,
          y: isActive ? 0 : 10,
          filter: isActive ? 'brightness(1)' : 'brightness(0.82)',
        }}
        transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'visible',
        }}
      >
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[14px] border border-white/5 bg-[#050507]">
          {/* Browser Header */}
          <div className="pointer-events-none relative z-50 flex h-8 shrink-0 select-none items-center justify-between border-b border-white/5 bg-zinc-900/95 px-4">
            <div className="flex w-20 items-center gap-1.5">
              <span className="block h-2.5 w-2.5 rounded-full border border-[#e0443e] bg-[#ff5f56]" />
              <span className="block h-2.5 w-2.5 rounded-full border border-[#dfa224] bg-[#ffbd2e]" />
              <span className="block h-2.5 w-2.5 rounded-full border border-[#1aab29] bg-[#27c93f]" />
            </div>

            <div className="flex max-w-[42%] items-center gap-1.5 truncate rounded-md border border-white/5 bg-zinc-950/80 px-4 py-0.5 text-[9px] font-medium tracking-wide text-zinc-500">
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

            <div className="flex w-20 justify-end gap-1 text-[10px] font-bold text-zinc-600">
              <span>⌥</span>
              <span>⌘</span>
            </div>
          </div>

          {/* Camera Dot */}
          <div className="absolute top-1 left-1/2 z-[60] flex h-1.5 w-1.5 -translate-x-1/2 items-center justify-center rounded-full bg-zinc-800">
            <div className="h-0.5 w-0.5 rounded-full bg-blue-900/60" />
          </div>

          {/* Reflections */}
          <div className="pointer-events-none absolute inset-0 z-40 bg-gradient-to-br from-white/[0.055] via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_42%)]" />

          {/* Screen Content */}
          <div
            className={`device-screen-scrollbar relative flex-1 overflow-y-auto bg-[#050507] ${
              isActive
                ? 'pointer-events-auto'
                : 'pointer-events-none overflow-hidden select-none'
            }`}
            style={{
              maskImage:
                'linear-gradient(to bottom, black calc(100% - 18px), transparent 100%)',
              WebkitMaskImage:
                'linear-gradient(to bottom, black calc(100% - 18px), transparent 100%)',
            }}
          >
            {children}
          </div>

          {/* Inactive Cover */}
          {!isActive && (
            <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/72 p-6 text-center backdrop-blur-[2px] transition-colors duration-500 group-hover:bg-black/58">
              <motion.div
                initial={{ y: 3 }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut',
                }}
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-blue-400 shadow-[0_12px_40px_rgba(59,130,246,0.18)] transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </motion.div>

              <span className="text-sm font-bold tracking-[0.22em] text-white/90 uppercase">
                Case Studies
              </span>

              <span className="mt-2 max-w-[260px] text-xs leading-relaxed text-zinc-400">
                Click to open the display and explore the project gallery.
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Laptop Base */}
      <div
        className="absolute bottom-0 left-[3%] z-10 flex h-[56%] w-[94%] origin-top flex-col justify-between rounded-b-[28px] border border-white/10 bg-gradient-to-b from-zinc-700 via-zinc-900 to-zinc-950 p-4 shadow-[0_35px_70px_rgba(0,0,0,0.9),inset_0_2px_2px_rgba(255,255,255,0.16)]"
        style={{
          transform: 'rotateX(78deg) translateZ(-28px)',
          transformOrigin: 'top center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Keyboard Bed */}
        <div className="flex h-[60%] w-full flex-col justify-between rounded-xl border border-black/40 bg-black/30 p-2 shadow-[inset_0_2px_8px_rgba(0,0,0,0.65)]">
          <div className="flex w-full gap-[3px]">
            {Array.from({ length: 14 }).map((_, index) => (
              <div
                key={`row-1-${index}`}
                className={`h-4 flex-grow rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${
                  index === 0 ? 'w-8' : ''
                }`}
              />
            ))}
          </div>

          <div className="flex w-full gap-[3px]">
            {Array.from({ length: 14 }).map((_, index) => (
              <div
                key={`row-2-${index}`}
                className="h-4 flex-grow rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>

          <div className="flex w-full gap-[3px]">
            {Array.from({ length: 13 }).map((_, index) => (
              <div
                key={`row-3-${index}`}
                className="h-4 flex-grow rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>

          <div className="flex w-full gap-[3px]">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={`row-4-${index}`}
                className="h-4 flex-grow rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              />
            ))}
          </div>

          <div className="flex w-full gap-[3px]">
            <div className="h-4 w-12 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 w-8 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 w-8 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 flex-[8] rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 w-8 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 w-8 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
            <div className="h-4 w-12 rounded-[4px] border border-white/5 bg-zinc-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
          </div>
        </div>

        {/* Trackpad */}
        <div className="mx-auto mt-3 h-[24%] w-[34%] rounded-xl border border-white/8 bg-black/25 shadow-[inset_0_1px_8px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.08)]" />
      </div>

      {/* Front Lip / Hinge */}
      <div
        className="pointer-events-none absolute bottom-[7.5%] left-[5%] z-20 h-3 w-[90%] rounded-full bg-zinc-950 shadow-[0_5px_10px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.08)]"
      />

      {/* Ground Shadow */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 h-12 w-[76%] -translate-x-1/2 rounded-full bg-black/60 blur-2xl" />
    </div>
  );
};

export default Laptop3D;