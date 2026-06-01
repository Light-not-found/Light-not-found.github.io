import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface AboutProps {
  isInViewport?: boolean;
}

const highlights = [
  {
    label: 'Education',
    value: 'HBO-ICT',
    icon: GraduationCap,
  },
  {
    label: 'Location',
    value: 'Amsterdam',
    icon: MapPin,
  },
  {
    label: 'Focus',
    value: 'Software',
    icon: Code2,
  },
  {
    label: 'Mindset',
    value: 'Creative',
    icon: Sparkles,
  },
];

const About: React.FC<AboutProps> = ({ isInViewport = false }) => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  if (isInViewport) {
    return (
      <div className="flex min-h-full flex-col text-left">
        {/* Profile Header */}
        <div className="mb-4 flex flex-col items-center text-center">
          <div className="relative mb-3">
            <div className="h-24 w-24 rounded-full border border-blue-500 bg-zinc-950 p-[2px] shadow-[0_0_40px_rgba(59,130,246,0.18)]">
              <div className="h-full w-full overflow-hidden rounded-full border border-zinc-900 bg-zinc-950">
                <img
                  src="/me.png"
                  alt="Devan Smit"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <span className="absolute -right-1 -bottom-1 rounded-full border border-zinc-950 bg-blue-500 px-2 py-0.5 text-[9px] font-extrabold text-white uppercase">
            </span>
          </div>

          <h2 className="font-heading mb-1 text-2xl font-bold tracking-tight text-white">
            Devan Smit
          </h2>

          <p className="mb-3 text-[10px] font-bold tracking-[0.18em] text-blue-400 uppercase">
            Software Engineering Student
          </p>

          <p className="max-w-[260px] text-center text-[11px] leading-relaxed text-zinc-500">
            Building clean digital products with a focus on software,
            usability, and purposeful problem-solving.
          </p>
        </div>

        {/* Main Bio Card */}
        <div className="mb-3 rounded-2xl border border-white/8 bg-white/[0.035] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)]">
          <p className="text-xs leading-relaxed text-zinc-400">
            I am a driven{' '}
            <strong className="font-semibold text-white">
              HBO-ICT student
            </strong>{' '}
            at the Amsterdam University of Applied Sciences, specializing in
            Software Engineering.
          </p>
        </div>

        <div className="mb-4 rounded-2xl border border-white/8 bg-white/[0.025] p-4">
          <p className="text-xs leading-relaxed text-zinc-400">
            My interests sit around{' '}
            <span className="font-semibold text-blue-400">
              software development
            </span>
            ,{' '}
            <span className="font-semibold text-blue-400">data analytics</span>
            , and creating digital tools that feel clear, functional, and
            useful.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-2 gap-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-xl border border-white/8 bg-zinc-900/60 p-3"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Icon size={14} strokeWidth={2.2} />
                </div>

                <span className="block text-[8px] font-bold tracking-widest text-zinc-500 uppercase">
                  {item.label}
                </span>

                <span className="block truncate text-[11px] font-semibold text-zinc-200">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative overflow-hidden bg-zinc-900/30 py-32"
    >
      {/* Seamless Dot Pattern Overlay */}
      <div className="mask-fade-y pointer-events-none absolute inset-0 bg-dot-pattern opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
            Profile
          </span>

          <h2 className="font-heading m-0 text-[clamp(2.5rem,6vw,3.5rem)] leading-tight text-gradient">
            About Me
          </h2>
        </motion.div>

        <div className="grid items-start gap-10 md:grid-cols-[1.5fr_1fr] lg:gap-16">
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-lg text-zinc-400"
          >
            <p>
              I am a driven{' '}
              <strong className="text-white">HBO-ICT student</strong> at the
              Amsterdam University of Applied Sciences, specializing in Software
              Engineering. My journey in tech is fueled by a profound interest
              in software development, data analytics, and the latest
              innovations in digital architecture.
            </p>

            <p>
              I strive to combine deep technical knowledge with a creative,
              problem-solving mindset to devise digital solutions that are not
              only functional but truly impactful. My goal is to bridge the gap
              between complex technical requirements and elegant user
              experiences.
            </p>
          </motion.div>

          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass group relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/me.png"
                alt="Devan Smit"
                className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;