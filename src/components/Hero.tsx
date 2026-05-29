import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { y: '120%', rotate: 2 },
    show: {
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-24 sm:px-8"
    >
      {/* Seamless Dot Pattern Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-dot-pattern opacity-40 mask-fade-y" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <motion.div variants={containerVariants} initial="hidden" animate="show">
          <div className="mb-6 overflow-hidden">
            <motion.p
              variants={textVariants}
              className="text-lg font-semibold tracking-widest text-blue-500 uppercase"
            >
              Hi, I'm
            </motion.p>
          </div>

          <div className="mb-4 overflow-hidden py-2">
            <motion.h1
              variants={textVariants}
              className="font-heading text-[clamp(3.25rem,9vw,6.25rem)] leading-[0.95] font-bold tracking-[-0.06em] text-gradient"
            >
              Devan Smit.
            </motion.h1>
          </div>

          <div className="mb-10 overflow-hidden">
            <motion.h2
              variants={textVariants}
              className="text-[clamp(1.5rem,4vw,2.5rem)] leading-snug font-medium tracking-tight text-zinc-400"
            >
              Student HBO-ICT
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-14 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            I'm a Software Engineering student at AUAS, dedicated to building
            clean, impactful digital solutions. I bridge the gap between complex
            requirements and elegant user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <Magnetic pullFactor={0.2}>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-zinc-950 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] sm:px-10"
              >
                Check my work
              </a>
            </Magnetic>

            <Magnetic pullFactor={0.2}>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-4 font-semibold text-white transition-all hover:-translate-y-1 hover:border-white hover:bg-white/5 sm:px-10"
              >
                <span>Resume</span>
                <Download size={18} strokeWidth={2.5} />
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;