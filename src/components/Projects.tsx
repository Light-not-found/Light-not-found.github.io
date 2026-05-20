import React from 'react';
import { motion } from 'framer-motion';

interface ProjectImage {
  url: string;
  desc: string;
}

interface Project {
  id: number;
  label: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  allImages: ProjectImage[];
}

const projects: Project[] = [
  {
    id: 1,
    label: 'School Project',
    name: 'AI Stylist Companion',
    description: 'A sophisticated AI-driven style tool that analyzes user preferences and physical traits to provide personalized fashion recommendations. Built to bridge the gap between AI technology and personal expression.',
    tech: ['Mobile Engineering', 'Computer Vision', 'Style Analysis'],
    image: '/smaakmanipulatie-home.png',
    allImages: [
      { url: '/smaakmanipulatie-home.png', desc: 'Main entry point for the AI Stylist experience' },
      { url: '/smaakmanipulatie-profile.png', desc: 'Detailed user profiling for physical traits and style mapping' },
      { url: '/smaakmanipulatie-3.png', desc: 'Live mirror interface for facial data capture and verification' },
      { url: '/smaakmanipulatie-4.png', desc: 'Personalized stijlsuggesties with actionable shopping links' },
      { url: '/smaakmanipulatie-5.png', desc: 'Successful completion of the style analysis process' }
    ]
  },
  {
    id: 2,
    label: 'School Project',
    name: 'Rhino Elections',
    description: 'A comprehensive election data platform providing clear insights into Dutch political results through data visualization, comparative analysis, and secure user interactions.',
    tech: ['Data Visualization', 'User Management', 'Web Engineering'],
    image: '/elections-1.png',
    allImages: [
      { url: '/elections-1.png', desc: 'Information dashboard showing key election figures and mission' },
      { url: '/elections-2.png', desc: 'Parliamentary seat distribution overview (Hemicycle view)' },
      { url: '/elections-3.png', desc: 'Analytical year-on-year comparison of election outcomes' },
      { url: '/elections-4.png', desc: 'Secure community login and registration interface' },
      { url: '/elections-5.png', desc: 'Integrated profile management with real-time success feedback' }
    ]
  }
];

interface ProjectsProps {
  onOpenGallery: (images: ProjectImage[]) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const Projects: React.FC<ProjectsProps> = ({ onOpenGallery }) => {
  return (
    <section id="projects" className="py-32 relative bg-zinc-900/10 overflow-hidden">
      {/* Seamless Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern mask-fade-y pointer-events-none opacity-40" />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-3 mb-16 relative text-center"
        >
          <span className="text-xs text-blue-500 bg-blue-500/10 px-4 py-2 border border-blue-500/20 rounded-full tracking-widest uppercase font-bold">
            Case Studies
          </span>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] m-0 leading-tight text-gradient font-heading">
            Featured Projects
          </h2>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.article 
              variants={itemVariants}
              key={project.id}
              className="flex flex-col overflow-hidden cursor-pointer group glass rounded-3xl transition-all duration-400 hover:-translate-y-2 hover:border-white/20"
              onClick={() => onOpenGallery(project.allImages)}
            >
              <div className="w-full aspect-[16/10] relative overflow-hidden bg-[#111]">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <span className="px-6 py-3 bg-white/95 text-black rounded-full font-bold text-sm uppercase tracking-widest translate-y-5 transition-transform duration-400 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:translate-y-0">
                    View Gallery
                  </span>
                </div>
              </div>
              <div className="p-10 flex-grow flex flex-col">
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
                  {project.label}
                </p>
                <h3 className="text-3xl mb-4 font-heading">{project.name}</h3>
                <p className="text-zinc-400 mb-8 flex-grow">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                  {project.tech.map((t) => (
                    <li 
                      key={t}
                      className="text-xs font-semibold text-white bg-white/5 px-4 py-2 rounded-full border border-white/10"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
