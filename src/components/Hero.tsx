import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Magnetic from './Magnetic';

const Hero: React.FC = () => {
  // Staggered text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const textVariants = {
    hidden: { y: "120%", rotate: 2 },
    show: { 
      y: 0, 
      rotate: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-8 relative overflow-hidden">
      {/* Seamless Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern mask-fade-y pointer-events-none opacity-40" />
      
      <div className="max-w-4xl mx-auto w-full pt-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden mb-6">
            <motion.p variants={textVariants} className="text-blue-500 font-semibold text-lg tracking-widest uppercase">
              Hi, I'm
            </motion.p>
          </div>
          
          <div className="overflow-hidden mb-4">
            <motion.h1 variants={textVariants} className="text-[clamp(3.5rem,10vw,6.5rem)] leading-none tracking-[-3px] text-gradient font-heading font-bold pb-2">
              Devan Smit.
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-10">
            <motion.h2 variants={textVariants} className="text-[clamp(1.5rem,4vw,2.5rem)] leading-snug text-zinc-400 font-medium tracking-tight">
              Student HBO-ICT
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-2xl text-xl text-zinc-400 mb-14 leading-relaxed"
          >
            I'm a Software Engineering student at AUAS, dedicated to building 
            clean, impactful digital solutions. I bridge the gap between complex 
            requirements and elegant user experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <Magnetic pullFactor={0.2}>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-zinc-950 font-semibold rounded-full transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] block"
              >
                Check my work
              </a>
            </Magnetic>
            
            <Magnetic pullFactor={0.2}>
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white border border-white/10 font-semibold rounded-full transition-all hover:bg-white/5 hover:border-white hover:-translate-y-1 gap-2 block"
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
