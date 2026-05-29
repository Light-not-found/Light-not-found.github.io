import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Images } from 'lucide-react';

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
    description:
      'An interactive, provocative Dark Tech prototype developed for the Lectoraat Fashion Research & Technology at AUAS (Hogeschool van Amsterdam). Designed to expose how digital recommendation engines transition from personalization to active manipulation, this project technically implements the "mere exposure effect" through seven deliberate deceptive patterns. By tracking user behavior and silently adjusting style feeds, the system forces a critical dilemma: do we still choose what we find beautiful, or has the algorithm manufactured our taste?',
    tech: [
      'React Native',
      'OpenAI Vision',
      'Deceptive UX Patterns',
      'Data Dashboards',
    ],
    image: '/smaakmanipulatie-1.png',
    allImages: [
      {
        url: '/smaakmanipulatie-1.png',
        desc: 'The entry point. Before the user does anything, the app positions itself as an intelligent, personal tool. The "3 scans over" counter introduces scarcity before consent is even given — the algorithm is already shaping behaviour.',
      },
      {
        url: '/smaakmanipulatie-2.png',
        desc: 'Account creation is framed as the start of a personal style journey. In reality, it is the first moment data is collected and the profile begins. The user does not yet know what that profile will be used for.',
      },
      {
        url: '/smaakmanipulatie-3.png',
        desc: 'Step 1 of 6. The app requests access to the user\'s contacts under the name "Sociale Initialisatie." Skipping is possible, but the option is labelled as accepting a limited experience. The cost of refusal is made to feel personal.',
      },
      {
        url: '/smaakmanipulatie-4.png',
        desc: 'The app asks for a home address to improve "hyperlocal style accuracy." The connection to taste is vague — the connection to logistics and targeting is not. Personalisation is used to justify data the system needs, not the user.',
      },
      {
        url: '/smaakmanipulatie-5.png',
        desc: 'After onboarding, the home screen shows the calibration score: 98.4%. The number suggests precision and completion. What it actually represents is how thoroughly the user has been profiled. The feed is now ready to begin.',
      },
      {
        url: '/smaakmanipulatie-6.png',
        desc: 'Gender and body type are collected as profiling categories. The framing is neutral — "for the perfect fit" — but the data directly determines which styles are surfaced and repeated. The mere exposure effect begins here.',
      },
      {
        url: '/smaakmanipulatie-7.png',
        desc: 'A loading screen that stalls at 98%. Cancellation is possible but barely visible. The screen uses waiting as a commitment device — time spent creates obligation. This is the moment the user is locked in without realising it.',
      },
      {
        url: '/smaakmanipulatie-8.png',
        desc: 'The suggestion feed. Items are shown repeatedly, in varying orders, with increasing familiarity. The dislike option is smaller and less prominent than the like. Over time, exposure shapes preference — the algorithm trains taste, not the user.',
      },
      {
        url: '/smaakmanipulatie-9.png',
        desc: 'Rejecting a suggestion triggers a mandatory donation. The action of not wanting something becomes a transaction. Refusal is no longer neutral — it has a cost attached. The system removes the option of simply saying no.',
      },
      {
        url: '/smaakmanipulatie-10.png',
        desc: 'Liking a suggestion immediately processes a payment of 149.99 from the linked account. The confirmation appears after the fact. A 5-second cancellation window exists but is not the primary action on screen. The choice has already been made.',
      },
      {
        url: '/smaakmanipulatie-11.png',
        desc: 'The order is placed and dispatched to the registered address — automatically, based on interaction signals. The user\'s swipe behaviour, not a deliberate purchase decision, determined the outcome. This is the end of the funnel the app never announced.',
      },
    ],
  },
  {
    id: 2,
    label: 'Team Project',
    name: 'Rhino Elections',
    description:
      'A civic data platform built to make Dutch election results accessible and comparable for anyone. The assignment asked how technology could bring citizens closer to European politics — our answer was transparency through data. Built with a Vue.js frontend and a Spring Boot REST API consuming official Kiesraad XML data, with JWT authentication, forum discussions, and Docker deployment.',
    tech: ['Vue.js', 'Spring Boot', 'JWT Auth', 'Docker'],
    image: '/elections-1.png',
    allImages: [
      {
        url: '/elections-1.png',
        desc: 'The starting point for the platform. The headline frames the intent directly: all data on Dutch elections, in one place. Key figures from the most recent election are surfaced immediately — year, number of parties, total candidates. The mission section states it plainly: clarity, transparency, and independent decision-making.',
      },
      {
        url: '/elections-2.png',
        desc: 'The seat distribution view for the 2023 Tweede Kamerverkiezingen. A hemicycle diagram maps 150 seats across all parties. Below it, a filterable table breaks down votes and seats per party by region. The data comes directly from the Kiesraad XML feed, parsed and aggregated in the backend without database queries.',
      },
      {
        url: '/elections-3.png',
        desc: 'The comparison view lets users put two election years side by side — here 2021 and 2023, filtered to a specific kieskring. Biggest gainers and losers are surfaced automatically. Parties that appeared or disappeared between elections are listed separately. The goal was to make political shifts legible without needing prior knowledge.',
      },
      {
        url: '/elections-4.png',
        desc: 'A login is required to participate in forum discussions. The platform is readable without an account — authentication gates contribution, not access. Registration and login share the same screen. JWT tokens handle session management without Spring Security, as required by the assignment.',
      },
      {
        url: '/elections-5.png',
        desc: 'The profile page, where users can update their username, bio, avatar, and email. A success message confirms the change without a page reload. The forum feature depends on identity — this screen is where that identity is managed.',
      },
    ],
  },
];

interface ProjectsProps {
  onOpenGallery: (images: ProjectImage[]) => void;
  isInViewport?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const clampStyle: React.CSSProperties = {
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

const Projects: React.FC<ProjectsProps> = ({
  onOpenGallery,
  isInViewport = false,
}) => {
  if (isInViewport) {
    return (
      <div className="w-full p-5 text-left sm:p-6">
        <div className="mb-6 flex flex-col gap-3 border-b border-white/5 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-heading mb-2 text-2xl font-bold tracking-tight text-white">
              Featured Projects
            </h3>

            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Case studies, prototypes, and technical builds
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold text-zinc-400">
            <Images size={12} />
            {projects.length} Projects
          </div>
        </div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => onOpenGallery(project.allImages)}
              className="group grid cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/55 transition-all duration-300 hover:border-blue-500/40 hover:bg-zinc-900 md:grid-cols-[320px_1fr]"
            >
              <div className="relative h-56 overflow-hidden bg-zinc-950 md:h-64">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-3 left-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[9px] font-bold tracking-widest text-white uppercase backdrop-blur-md">
                  0{index + 1}
                </div>

                <div className="absolute right-3 bottom-3 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[9px] font-bold tracking-widest text-zinc-200 uppercase opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  View Gallery
                </div>
              </div>

              <div className="flex min-w-0 flex-col p-5">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[9px] font-bold tracking-widest text-blue-400 uppercase">
                    {project.label}
                  </span>

                  <span className="text-[10px] font-semibold text-zinc-600">
                    {project.allImages.length} Screens
                  </span>
                </div>

                <h4 className="font-heading mb-2 text-xl leading-tight font-bold text-white">
                  {project.name}
                </h4>

                <p
                  className="mb-4 text-[11px] leading-relaxed text-zinc-400"
                  style={clampStyle}
                >
                  {project.description}
                </p>

                <ul className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold text-zinc-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                  <span className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
                    Open case study
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-zinc-500 transition-colors group-hover:text-blue-400"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-900/10 py-32"
    >
      <div className="mask-fade-y pointer-events-none absolute inset-0 bg-dot-pattern opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-500 uppercase">
            Case Studies
          </span>

          <h2 className="font-heading m-0 text-[clamp(2.5rem,6vw,3.5rem)] leading-tight text-gradient">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              variants={itemVariants}
              key={project.id}
              onClick={() => onOpenGallery(project.allImages)}
              className="glass group flex cursor-pointer flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-white/20"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#111]">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="translate-y-5 rounded-full bg-white/95 px-6 py-3 text-sm font-bold tracking-widest text-black uppercase transition-transform duration-300 ease-[cubic-bezier(0.2,0,0.2,1)] group-hover:translate-y-0">
                    View Gallery
                  </span>
                </div>
              </div>

              <div className="flex flex-grow flex-col p-10">
                <p className="mb-4 text-xs font-bold tracking-widest text-blue-500 uppercase">
                  {project.label}
                </p>

                <h3 className="font-heading mb-4 text-3xl">{project.name}</h3>

                <p className="mb-8 flex-grow text-zinc-400">
                  {project.description}
                </p>

                <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white"
                    >
                      {tech}
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