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
    name: 'Smaakmanipulatie (Taste Manipulation)',
    description: 'An interactive, provocative Dark Tech prototype developed for the Lectoraat Fashion Research & Technology at AUAS (Hogeschool van Amsterdam). Designed to expose how digital recommendation engines transition from personalization to active manipulation, this project technically implements the "mere exposure effect" through seven deliberate deceptive patterns. By tracking user behavior and silently adjusting style feeds, the system forces a critical dilemma: do we still choose what we find beautiful, or has the algorithm manufactured our taste?',
    tech: ['React Native', 'OpenAI Vision', 'Deceptive UX Patterns', 'Data Dashboards'],
    image: '/smaakmanipulatie-1.png',
    allImages: [
      {
        url: '/smaakmanipulatie-1.png',
        desc: 'The entry point. Before the user does anything, the app positions itself as an intelligent, personal tool. The "3 scans over" counter introduces scarcity before consent is even given — the algorithm is already shaping behaviour.'
      },
      {
        url: '/smaakmanipulatie-2.png',
        desc: 'Account creation is framed as the start of a personal style journey. In reality, it is the first moment data is collected and the profile begins. The user does not yet know what that profile will be used for.'
      },
      {
        url: '/smaakmanipulatie-3.png',
        desc: 'Step 1 of 6. The app requests access to the user\'s contacts under the name "Sociale Initialisatie." Skipping is possible, but the option is labelled as accepting a limited experience. The cost of refusal is made to feel personal.'
      },
      {
        url: '/smaakmanipulatie-4.png',
        desc: 'The app asks for a home address to improve "hyperlocal style accuracy." The connection to taste is vague — the connection to logistics and targeting is not. Personalisation is used to justify data the system needs, not the user.'
      },
      {
        url: '/smaakmanipulatie-5.png',
        desc: 'After onboarding, the home screen shows the calibration score: 98.4%. The number suggests precision and completion. What it actually represents is how thoroughly the user has been profiled. The feed is now ready to begin.'
      },
      {
        url: '/smaakmanipulatie-6.png',
        desc: 'Gender and body type are collected as profiling categories. The framing is neutral — "for the perfect fit" — but the data directly determines which styles are surfaced and repeated. The mere exposure effect begins here.'
      },
      {
        url: '/smaakmanipulatie-7.png',
        desc: 'A loading screen that stalls at 98%. Cancellation is possible but barely visible. The screen uses waiting as a commitment device — time spent creates obligation. This is the moment the user is locked in without realising it.'
      },
      {
        url: '/smaakmanipulatie-8.png',
        desc: 'The suggestion feed. Items are shown repeatedly, in varying orders, with increasing familiarity. The dislike option is smaller and less prominent than the like. Over time, exposure shapes preference — the algorithm trains taste, not the user.'
      },
      {
        url: '/smaakmanipulatie-9.png',
        desc: 'Rejecting a suggestion triggers a mandatory donation. The action of not wanting something becomes a transaction. Refusal is no longer neutral — it has a cost attached. The system removes the option of simply saying no.'
      },
      {
        url: '/smaakmanipulatie-10.png',
        desc: 'Liking a suggestion immediately processes a payment of 149.99 from the linked account. The confirmation appears after the fact. A 5-second cancellation window exists but is not the primary action on screen. The choice has already been made.'
      },
      {
        url: '/smaakmanipulatie-11.png',
        desc: 'The order is placed and dispatched to the registered address — automatically, based on interaction signals. The user\'s swipe behaviour, not a deliberate purchase decision, determined the outcome. This is the end of the funnel the app never announced.'
      }
    ]
  },
  {
    id: 2,
    label: 'Team Project',
    name: 'Rhino Elections',
    description: 'A civic data platform built to make Dutch election results accessible and comparable for anyone. The assignment asked how technology could bring citizens closer to European politics — our answer was transparency through data. Built with a Vue.js frontend and a Spring Boot REST API consuming official Kiesraad XML data, with JWT authentication, forum discussions, and Docker deployment.',
    tech: ['Vue.js', 'Spring Boot', 'JWT Auth', 'Docker'],
    image: '/elections-1.png',
    allImages: [
      {
        url: '/elections-1.png',
        desc: 'The starting point for the platform. The headline frames the intent directly: all data on Dutch elections, in one place. Key figures from the most recent election are surfaced immediately — year, number of parties, total candidates. The mission section states it plainly: clarity, transparency, and independent decision-making.'
      },
      {
        url: '/elections-2.png',
        desc: 'The seat distribution view for the 2023 Tweede Kamerverkiezingen. A hemicycle diagram maps 150 seats across all parties. Below it, a filterable table breaks down votes and seats per party by region. The data comes directly from the Kiesraad XML feed, parsed and aggregated in the backend without database queries.'
      },
      {
        url: '/elections-3.png',
        desc: 'The comparison view lets users put two election years side by side — here 2021 and 2023, filtered to a specific kieskring. Biggest gainers and losers are surfaced automatically. Parties that appeared or disappeared between elections are listed separately. The goal was to make political shifts legible without needing prior knowledge.'
      },
      {
        url: '/elections-4.png',
        desc: 'A login is required to participate in forum discussions. The platform is readable without an account — authentication gates contribution, not access. Registration and login share the same screen. JWT tokens handle session management without Spring Security, as required by the assignment.'
      },
      {
        url: '/elections-5.png',
        desc: 'The profile page, where users can update their username, bio, avatar, and email. A success message confirms the change without a page reload. The forum feature depends on identity — this screen is where that identity is managed.'
      }
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
