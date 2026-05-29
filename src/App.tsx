import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Laptop,
  Smartphone,
  Tablet,
  Terminal,
  Download,
  ArrowUpRight,
  X,
} from 'lucide-react';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import CustomCursor from './components/CustomCursor';
import Magnetic from './components/Magnetic';

import LaptopMockup from './components/LaptopMockup';
import PhoneMockup from './components/PhoneMockup';
import TabletMockup from './components/TabletMockup';
import TerminalMockup from './components/TerminalMockup';

interface ProjectImage {
  url: string;
  desc: string;
}

type ActiveApp = 'none' | 'projects' | 'about' | 'skills' | 'contact';

const dockApps = [
  { id: 'projects' as ActiveApp, icon: Laptop, label: 'Projects' },
  { id: 'about' as ActiveApp, icon: Smartphone, label: 'About' },
  { id: 'skills' as ActiveApp, icon: Tablet, label: 'Skills' },
  { id: 'contact' as ActiveApp, icon: Terminal, label: 'Contact' },
];

const windowVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.2, 0, 0, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.2, ease: [0.4, 0, 1, 1] as const },
  },
};

const App: React.FC = () => {
  const [activeApp, setActiveApp] = useState<ActiveApp>('none');
  const [modalImages, setModalImages] = useState<ProjectImage[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [clock, setClock] = useState('');

  const isHome = activeApp === 'none';

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Amsterdam',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date());

      setClock(t);
    };

    tick();

    const id = setInterval(tick, 30_000);

    return () => clearInterval(id);
  }, []);

  const openGallery = (images: ProjectImage[]) => {
    setModalImages(images);
    setShowModal(true);
  };

  const closeGallery = () => {
    setShowModal(false);
  };

  const handleNavTab = (tab: string) => {
    if (tab === 'home') {
      setActiveApp('none');
      return;
    }

    setActiveApp(tab as ActiveApp);
  };

  const navTab = isHome ? 'home' : activeApp;

  const Dock = ({ mode }: { mode: 'fixed' | 'inline' }) => {
    return (
      <div
        className={`z-[150] flex items-center gap-2 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl ${
          mode === 'fixed'
            ? 'fixed bottom-6 left-1/2 -translate-x-1/2'
            : 'relative mx-auto'
        }`}
      >
        {dockApps.map((app) => {
          const Icon = app.icon;
          const isActive = activeApp === app.id;

          return (
            <Magnetic key={app.id} pullFactor={0.2}>
              <button
                type="button"
                onClick={() => setActiveApp(isActive ? 'none' : app.id)}
                title={app.label}
                className={`group relative flex cursor-pointer flex-col items-center gap-1 transition-all duration-200 ${
                  isActive ? 'scale-110' : 'hover:scale-105'
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 ${
                    isActive
                      ? 'border-blue-500/40 bg-blue-500/15 text-blue-400'
                      : 'border-white/10 bg-zinc-800 text-zinc-400 group-hover:border-white/15 group-hover:bg-zinc-700 group-hover:text-zinc-200'
                  }`}
                >
                  <Icon size={19} strokeWidth={isActive ? 2 : 1.8} />
                </div>

                <span
                  className={`h-1 w-1 rounded-full transition-all duration-200 ${
                    isActive ? 'bg-blue-400' : 'bg-transparent'
                  }`}
                />
              </button>
            </Magnetic>
          );
        })}

        <div className="mx-1 h-8 w-px bg-white/10" />

        <Magnetic pullFactor={0.2}>
          <button
            type="button"
            onClick={() => setActiveApp('none')}
            title="Home"
            className={`group flex cursor-pointer flex-col items-center gap-1 transition-all duration-200 ${
              isHome ? 'scale-110' : 'hover:scale-105'
            }`}
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 ${
                isHome
                  ? 'border-white/20 bg-white/10 text-white'
                  : 'border-white/10 bg-zinc-800 text-zinc-500 group-hover:bg-zinc-700 group-hover:text-zinc-300'
              }`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={isHome ? 2 : 1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>

            <span
              className={`h-1 w-1 rounded-full transition-all ${
                isHome ? 'bg-white/60' : 'bg-transparent'
              }`}
            />
          </button>
        </Magnetic>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-zinc-950 font-body text-white">
      <CustomCursor />

      {/* OS Menu Bar */}
      <div className="pointer-events-none fixed top-0 right-0 left-0 z-[300] flex h-7 items-center justify-between border-b border-white/5 bg-black/70 px-5 text-[10px] font-semibold text-zinc-400 backdrop-blur-md select-none">
        <div className="flex items-center gap-5">
          <span className="font-bold tracking-wide text-white">DS OS</span>
          <span>File</span>
          <span>View</span>
          <span>Window</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Amsterdam, NL</span>
          <span className="text-white">{clock}</span>
        </div>
      </div>

      {/* Floating Navbar */}
      <Navbar activeTab={navTab} setActiveTab={handleNavTab} />

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-dot-pattern opacity-20" />

      {/* Main Stage */}
      <main
        className={`relative z-10 flex justify-center px-6 ${
          isHome
            ? 'min-h-[100svh] items-center pt-44 pb-32'
            : 'min-h-[100svh] items-start pt-36 pb-10'
        }`}
      >
        {isHome ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
            className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.1fr]"
          >
            <div className="flex flex-col">
              <span className="mb-6 inline-block w-fit rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold tracking-[0.18em] text-blue-500 uppercase">
                Interactive Workspace
              </span>

              <h1 className="mb-4 font-heading text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.92] font-extrabold tracking-[-0.055em] text-white">
                Devan
                <br />
                Smit.
              </h1>

              <p className="mb-2 text-lg font-medium tracking-tight text-zinc-400">
                Software Engineering — HBO-ICT, AUAS
              </p>

              <p className="mb-10 max-w-sm text-sm leading-relaxed text-zinc-500">
                I build clean, purposeful digital products. Open an app below to
                explore my work, background, and technical expertise.
              </p>

              <div className="mb-10 flex flex-wrap gap-3">
                {dockApps.map((app) => {
                  const Icon = app.icon;

                  return (
                    <button
                      key={app.id}
                      type="button"
                      onClick={() => setActiveApp(app.id)}
                      className="flex cursor-pointer items-center gap-2 rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-400 transition-all duration-200 hover:border-white/20 hover:bg-zinc-800 hover:text-white"
                    >
                      <Icon size={13} strokeWidth={2} />
                      {app.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-4">
                <Magnetic pullFactor={0.15}>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-zinc-950 transition-colors hover:bg-zinc-100"
                  >
                    Resume
                    <Download size={14} strokeWidth={2.5} />
                  </a>
                </Magnetic>

                <Magnetic pullFactor={0.15}>
                  <a
                    href="https://github.com/Light-not-found"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-zinc-400 transition-all hover:border-white/30 hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight size={14} strokeWidth={2.5} />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div className="hidden grid-cols-2 gap-4 lg:grid">
              {dockApps.map((app, i) => {
                const Icon = app.icon;

                return (
                  <motion.button
                    key={app.id}
                    type="button"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    onClick={() => setActiveApp(app.id)}
                    className="group flex min-h-44 cursor-pointer flex-col items-start gap-3 rounded-2xl border border-white/10 bg-zinc-900/60 p-6 text-left transition-all duration-200 hover:border-white/20 hover:bg-zinc-900"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-800 text-blue-400 transition-colors group-hover:bg-zinc-700">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <div>
                      <div className="mb-0.5 text-sm font-bold text-white">
                        {app.label}
                      </div>

                      <div className="text-[11px] text-zinc-500">
                        {app.id === 'projects' && 'Case studies & prototypes'}
                        {app.id === 'about' && 'Profile & background'}
                        {app.id === 'skills' && 'Stack & technologies'}
                        {app.id === 'contact' && 'Reach out & connect'}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={13}
                      className="ml-auto text-zinc-600 transition-colors group-hover:text-zinc-400"
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        ) : (
          <div className="flex w-full flex-col items-center gap-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApp}
                variants={windowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mx-auto flex w-full max-w-6xl flex-col px-2"
              >
                <div className="mb-3 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const app = dockApps.find((a) => a.id === activeApp);
                      const Icon = app?.icon ?? Laptop;

                      return (
                        <>
                          <div className="flex h-6 w-6 items-center justify-center rounded-lg border border-white/10 bg-zinc-800 text-blue-400">
                            <Icon size={13} strokeWidth={2} />
                          </div>

                          <span className="text-xs font-bold tracking-wider text-zinc-300 uppercase">
                            {app?.label}
                          </span>
                        </>
                      );
                    })()}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveApp('none')}
                    className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-zinc-800 text-zinc-500 transition-all hover:bg-zinc-700 hover:text-white"
                    aria-label="Close app"
                  >
                    <X size={11} strokeWidth={2.5} />
                  </button>
                </div>

                {activeApp === 'projects' && (
                  <div className="flex w-full justify-center">
                    <LaptopMockup>
                      <Projects
                        isInViewport={true}
                        onOpenGallery={openGallery}
                      />
                    </LaptopMockup>
                  </div>
                )}

                {activeApp === 'about' && (
                  <div className="flex w-full justify-center">
                    <PhoneMockup>
                      <About isInViewport={true} />
                    </PhoneMockup>
                  </div>
                )}

                {activeApp === 'skills' && (
                  <div className="flex w-full justify-center">
                    <TabletMockup>
                      <Skills isInViewport={true} />
                    </TabletMockup>
                  </div>
                )}

                {activeApp === 'contact' && (
                  <div className="flex w-full justify-center">
                    <TerminalMockup />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <Dock mode="inline" />
          </div>
        )}
      </main>

      {isHome && <Dock mode="fixed" />}

      <AnimatePresence>
        {isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showModal && (
          <ImageModal images={modalImages} onClose={closeGallery} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;