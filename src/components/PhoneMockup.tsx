import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children }) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="relative mx-auto flex h-[min(68svh,660px)] min-h-[560px] w-[min(82vw,330px)] flex-col rounded-[52px] border-[10px] border-zinc-800 bg-zinc-950 shadow-[0_35px_100px_rgba(0,0,0,0.9),inset_0_0_0_1px_rgba(255,255,255,0.08)] select-none">
      {/* Outer highlight */}
      <div className="pointer-events-none absolute inset-[-10px] rounded-[58px] border border-white/10" />
      <div className="pointer-events-none absolute inset-[-5px] rounded-[54px] border border-black/50" />

      {/* Side buttons */}
      <div className="pointer-events-none absolute top-24 -left-[13px] h-10 w-1 rounded-l-full bg-zinc-700" />
      <div className="pointer-events-none absolute top-36 -left-[13px] h-16 w-1 rounded-l-full bg-zinc-700" />
      <div className="pointer-events-none absolute top-36 -right-[13px] h-20 w-1 rounded-r-full bg-zinc-700" />

      {/* Screen */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[40px] bg-[#050507]">
        {/* Status bar */}
        <div className="pointer-events-none relative z-50 flex h-10 w-full shrink-0 items-center justify-between border-b border-white/5 bg-zinc-950/85 px-6 text-[9px] font-bold text-zinc-400">
          <span>{currentTime}</span>

          <div className="flex items-center gap-1.5">
            <svg
              className="h-2.5 w-2.5 fill-current text-zinc-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.62 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>

            <svg
              className="h-2.5 w-2.5 fill-current text-zinc-500"
              viewBox="0 0 24 24"
            >
              <path d="M2 22h20V2z" />
            </svg>

            <div className="flex h-2 w-4 shrink-0 items-center rounded-sm border border-zinc-600 p-[1px]">
              <div className="h-full w-[80%] rounded-[1px] bg-zinc-400" />
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="pointer-events-none absolute top-2 left-1/2 z-[70] flex h-6 w-24 -translate-x-1/2 items-center justify-center rounded-full border border-white/5 bg-black shadow-[0_4px_16px_rgba(0,0,0,0.65)]">
          <div className="absolute left-4 h-1.5 w-1.5 rounded-full bg-blue-500/80" />
          <div className="h-1.5 w-10 rounded-full bg-zinc-900" />
          <div className="absolute right-4 h-1.5 w-1.5 rounded-full bg-zinc-800" />
        </div>

        {/* Reflection */}
        <div className="device-reflection" />
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tr from-white/[0.018] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.045),transparent_36%)]" />

        {/* Scrollable app screen */}
        <div className="device-screen-scrollbar relative min-h-0 flex-1 overflow-y-auto bg-[#050507] px-4 pt-5 pb-9 select-text">
          {children}
        </div>

        {/* Home indicator */}
        <div className="pointer-events-none absolute bottom-3 left-1/2 z-50 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

export default PhoneMockup;