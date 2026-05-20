import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Monitor, Server, Wrench, Lightbulb, BarChart3, Palette, Users, LayoutDashboard } from 'lucide-react';
import Marquee from './Marquee';

interface Skill {
  name: string;
  icon: any;
  isDevicon: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="flex items-center gap-4 group/item cursor-default py-1">
      {/* Fixed icon container for pixel-perfect alignment */}
      <div className="w-8 h-8 flex items-center justify-center shrink-0">
        {skill.isDevicon ? (
          <img 
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`} 
            alt={skill.name} 
            className="w-7 h-7 grayscale brightness-150 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:scale-110 group-hover/item:-translate-y-0.5"
            loading="lazy"
          />
        ) : (
          <span className="text-zinc-500 flex items-center justify-center transition-all duration-300 group-hover/item:text-white group-hover/item:scale-110 group-hover/item:-translate-y-0.5">
            <skill.icon size={22} strokeWidth={2} />
          </span>
        )}
      </div>
      <span className="text-zinc-400 font-medium transition-colors duration-300 group-hover/item:text-white text-[0.95rem] tracking-wide">
        {skill.name}
      </span>
    </div>
  );
};

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const frontendSkills: Skill[] = [
    { name: 'TypeScript', icon: 'typescript', isDevicon: true },
    { name: 'React', icon: 'react', isDevicon: true },
    { name: 'Vue.js', icon: 'vuejs', isDevicon: true },
    { name: 'React Native', icon: 'react', isDevicon: true },
    { name: 'JavaScript', icon: 'javascript', isDevicon: true },
    { name: 'Tailwind CSS', icon: 'tailwindcss', isDevicon: true },
    { name: 'HTML5', icon: 'html5', isDevicon: true },
    { name: 'CSS3', icon: 'css3', isDevicon: true }
  ];

  const backendSkills: Skill[] = [
    { name: 'Java / Spring', icon: 'java', isDevicon: true },
    { name: '.NET / C#', icon: 'dotnetcore', isDevicon: true },
    { name: 'Docker', icon: 'docker', isDevicon: true },
    { name: 'Node.js', icon: 'nodejs', isDevicon: true },
    { name: 'Python', icon: 'python', isDevicon: true },
    { name: 'PostgreSQL', icon: 'postgresql', isDevicon: true },
    { name: 'SQL', icon: 'mysql', isDevicon: true },
    { name: 'Firebase', icon: 'firebase', isDevicon: true }
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git / GitHub', icon: 'git', isDevicon: true },
    { name: 'Linux', icon: 'linux', isDevicon: true },
    { name: 'Data Analytics', icon: BarChart3, isDevicon: false },
    { name: 'Scrum', icon: LayoutDashboard, isDevicon: false },
    { name: 'Design UI/UX', icon: Palette, isDevicon: false },
    { name: 'Figma', icon: 'figma', isDevicon: true },
    { name: 'Collaboration', icon: Users, isDevicon: false },
    { name: 'Innovation', icon: Lightbulb, isDevicon: false }
  ];

  return (
    <section id="skills" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern mask-fade-y pointer-events-none" />
      {/* Background Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full z-0">
        <Marquee text="DEVELOPMENT ARCHITECTURE ENGINEERING " repeat={3} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-16 relative text-center"
        >
          <span className="text-xs text-blue-500 bg-blue-500/10 px-4 py-2 border border-blue-500/20 rounded-full tracking-widest uppercase font-bold backdrop-blur-md">
            Expertise
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] m-0 leading-tight text-gradient font-heading mix-blend-difference">
            Technical Skills
          </h2>
        </motion.div>
        
        <motion.div 
          style={{ y }}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Frontend & Mobile */}
          <motion.div variants={itemVariants} className="glass p-10 rounded-3xl flex flex-col group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-blue-500 bg-blue-500/10 p-3 rounded-xl flex items-center justify-center">
                <Monitor size={24} />
              </span>
              <h3 className="text-xl m-0 uppercase tracking-wide font-heading">Frontend & Mobile</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {frontendSkills.map(skill => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Backend & Systems */}
          <motion.div variants={itemVariants} className="glass p-10 rounded-3xl flex flex-col group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-blue-500 bg-blue-500/10 p-3 rounded-xl flex items-center justify-center">
                <Server size={24} />
              </span>
              <h3 className="text-xl m-0 uppercase tracking-wide font-heading">Backend & Systems</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {backendSkills.map(skill => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>

          {/* Tools & More */}
          <motion.div variants={itemVariants} className="glass p-10 rounded-3xl flex flex-col group hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)] hover:border-white/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-blue-500 bg-blue-500/10 p-3 rounded-xl flex items-center justify-center">
                <Wrench size={24} />
              </span>
              <h3 className="text-xl m-0 uppercase tracking-wide font-heading">Tools & More</h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              {toolsSkills.map(skill => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
