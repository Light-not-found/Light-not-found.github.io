import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-zinc-900/30">
      {/* Seamless Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern mask-fade-y pointer-events-none opacity-60" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-16 relative text-center"
        >
          <span className="text-xs text-blue-500 bg-blue-500/10 px-4 py-2 border border-blue-500/20 rounded-full tracking-widest uppercase font-bold">
            Profile
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] m-0 leading-tight text-gradient font-heading">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-zinc-400 space-y-8"
          >
            <p>
              I am a driven <strong className="text-white">HBO-ICT student</strong> at the Amsterdam University of Applied Sciences, 
              specializing in Software Engineering. My journey in tech is fueled by a profound interest 
              in software development, data analytics, and the latest innovations in digital architecture.
            </p>
            <p>
              I strive to combine deep technical knowledge with a creative, problem-solving mindset 
              to devise digital solutions that are not only functional but truly impactful. 
              My goal is to bridge the gap between complex technical requirements and elegant user experiences.
            </p>
          </motion.div>
          
          <motion.div 
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square max-w-sm mx-auto w-full border border-white/10 glass group">
              <img 
                src="/me.png" 
                alt="Devan Smit" 
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
