import React from 'react';
import { motion } from 'framer-motion';
import {
  Monitor,
  Server,
  Wrench,
  Lightbulb,
  BarChart3,
  Palette,
  Users,
  LayoutDashboard,
} from 'lucide-react';

interface Skill {
  name: string;
  icon: string | React.ElementType;
  isDevicon: boolean;
}

interface SkillGroup {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: Skill[];
}

interface SkillsProps {
  isInViewport?: boolean;
}

const frontendSkills: Skill[] = [
  { name: 'TypeScript', icon: 'typescript', isDevicon: true },
  { name: 'React', icon: 'react', isDevicon: true },
  { name: 'Vue.js', icon: 'vuejs', isDevicon: true },
  { name: 'React Native', icon: 'react', isDevicon: true },
  { name: 'JavaScript', icon: 'javascript', isDevicon: true },
  { name: 'Tailwind CSS', icon: 'tailwindcss', isDevicon: true },
  { name: 'HTML5', icon: 'html5', isDevicon: true },
  { name: 'CSS3', icon: 'css3', isDevicon: true },
];

const backendSkills: Skill[] = [
  { name: 'Java / Spring', icon: 'java', isDevicon: true },
  { name: '.NET / C#', icon: 'dotnetcore', isDevicon: true },
  { name: 'Docker', icon: 'docker', isDevicon: true },
  { name: 'Node.js', icon: 'nodejs', isDevicon: true },
  { name: 'Python', icon: 'python', isDevicon: true },
  { name: 'PostgreSQL', icon: 'postgresql', isDevicon: true },
  { name: 'SQL', icon: 'mysql', isDevicon: true },
  { name: 'Firebase', icon: 'firebase', isDevicon: true },
];

const toolsSkills: Skill[] = [
  { name: 'Git / GitHub', icon: 'git', isDevicon: true },
  { name: 'Linux', icon: 'linux', isDevicon: true },
  { name: 'Data Analytics', icon: BarChart3, isDevicon: false },
  { name: 'Scrum', icon: LayoutDashboard, isDevicon: false },
  { name: 'Design UI/UX', icon: Palette, isDevicon: false },
  { name: 'Figma', icon: 'figma', isDevicon: true },
  { name: 'Collaboration', icon: Users, isDevicon: false },
  { name: 'Innovation', icon: Lightbulb, isDevicon: false },
];

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    subtitle: 'Interfaces & mobile apps',
    icon: Monitor,
    skills: frontendSkills,
  },
  {
    title: 'Backend',
    subtitle: 'APIs, systems & data',
    icon: Server,
    skills: backendSkills,
  },
  {
    title: 'Tools',
    subtitle: 'Workflow & delivery',
    icon: Wrench,
    skills: toolsSkills,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const },
  },
};

const SkillIcon: React.FC<{ skill: Skill; compact?: boolean }> = ({
  skill,
  compact = false,
}) => {
  if (skill.isDevicon && typeof skill.icon === 'string') {
    return (
      <img
        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
        alt={skill.name}
        loading="lazy"
        className={`shrink-0 grayscale brightness-150 transition-all duration-300 group-hover/item:scale-110 group-hover/item:grayscale-0 group-hover/item:brightness-100 ${
          compact ? 'h-4 w-4' : 'h-6 w-6'
        }`}
      />
    );
  }

  const Icon = skill.icon as React.ElementType;

  return (
    <Icon
      size={compact ? 15 : 20}
      strokeWidth={2}
      className="shrink-0 text-zinc-400 transition-all duration-300 group-hover/item:scale-110 group-hover/item:text-white"
    />
  );
};

const SkillPill: React.FC<{ skill: Skill; compact?: boolean }> = ({
  skill,
  compact = false,
}) => {
  return (
    <div
      className={`group/item flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.035] transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 ${
        compact ? 'px-2.5 py-2' : 'px-3 py-2.5'
      }`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-lg bg-zinc-950/70 ${
          compact ? 'h-6 w-6' : 'h-8 w-8'
        }`}
      >
        <SkillIcon skill={skill} compact={compact} />
      </span>

      <span
        className={`min-w-0 truncate font-medium text-zinc-300 transition-colors duration-300 group-hover/item:text-white ${
          compact ? 'text-[10px]' : 'text-sm'
        }`}
      >
        {skill.name}
      </span>
    </div>
  );
};

const Skills: React.FC<SkillsProps> = ({ isInViewport = false }) => {
  if (isInViewport) {
    return (
      <div className="flex h-full w-full flex-col text-left">
        <div className="mb-5 flex flex-col gap-3 border-b border-white/5 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-heading mb-1 text-2xl font-bold tracking-tight text-white">
              Technical Skills
            </h3>

            <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
              Stack, tools, and technologies
            </p>
          </div>

          <div className="w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[10px] font-bold tracking-widest text-blue-400 uppercase">
            {frontendSkills.length + backendSkills.length + toolsSkills.length}{' '}
            Skills
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <section
                key={group.title}
                className="flex min-h-0 flex-col rounded-2xl border border-white/10 bg-zinc-900/50 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/70"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>

                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-extrabold tracking-wider text-white uppercase">
                      {group.title}
                    </h4>

                    <p className="mt-0.5 truncate text-[10px] font-medium text-zinc-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} compact />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <section id="skills" className="relative overflow-hidden py-32">
      <div className="mask-fade-y pointer-events-none absolute inset-0 bg-grid-pattern opacity-50" />

      <div className="relative z-10 mx-auto max-w-6xl px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative mb-16 flex flex-col items-center gap-3 text-center"
        >
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold tracking-widest text-blue-500 uppercase backdrop-blur-md">
            Expertise
          </span>

          <h2 className="font-heading m-0 text-[clamp(2.5rem,6vw,3.5rem)] leading-tight text-gradient">
            Technical Skills
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
            A practical stack for building interfaces, APIs, prototypes, and
            deployable software products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.section
                variants={itemVariants}
                key={group.title}
                className="glass group flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-8 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                    <Icon size={24} strokeWidth={2.2} />
                  </span>

                  <div>
                    <h3 className="font-heading m-0 text-xl tracking-wide text-white uppercase">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs font-medium text-zinc-500">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.section>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;