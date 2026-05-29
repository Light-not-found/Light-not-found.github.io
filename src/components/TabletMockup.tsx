import React from 'react';

interface TabletMockupProps {
  children: React.ReactNode;
}

const TabletMockup: React.FC<TabletMockupProps> = ({ children }) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="relative mx-auto flex h-[min(60svh,560px)] min-h-[500px] w-[min(86vw,900px)] max-w-[900px] items-center justify-center rounded-[38px] bg-gradient-to-br from-zinc-700 via-zinc-900 to-black p-4 shadow-[0_35px_100px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.16)] select-none">
      {/* Outer metal rim */}
      <div className="pointer-events-none absolute inset-0 rounded-[38px] border border-white/10" />
      <div className="pointer-events-none absolute inset-[5px] rounded-[32px] border border-black/60" />

      {/* Camera dot */}
      <div className="pointer-events-none absolute top-1/2 left-2.5 z-50 h-2 w-2 -translate-y-1/2 rounded-full bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
        <div className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950/70" />
      </div>

      {/* Inner screen */}
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[26px] border border-white/5 bg-[#050507]">
        {/* Tablet status bar */}
        <div className="pointer-events-none relative z-50 flex h-8 w-full shrink-0 items-center justify-between border-b border-white/5 bg-zinc-950/85 px-7 text-[9px] font-bold text-zinc-500">
          <span>{currentTime}</span>

          <div className="flex items-center gap-2">
            <svg
              className="h-2.5 w-2.5 fill-current text-zinc-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.62 10.47 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
            </svg>

            <div className="flex h-2 w-4 shrink-0 items-center rounded-sm border border-zinc-700 p-[1px]">
              <div className="h-full w-full rounded-[1px] bg-green-700/70" />
            </div>
          </div>
        </div>

        {/* Glass/reflection layers */}
        <div className="device-reflection" />
        <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_38%)]" />

        {/* Tablet content area */}
        <div className="device-screen-scrollbar relative min-h-0 flex-1 overflow-y-auto bg-[#050507] p-5 select-text sm:p-6">
          {children}
        </div>

        {/* Tablet home indicator */}
        <div className="pointer-events-none absolute bottom-2 left-1/2 z-40 h-1 w-24 -translate-x-1/2 rounded-full bg-white/15" />
      </div>
    </div>
  );
};

export default TabletMockup;