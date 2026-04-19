import React, { useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  FaCode,
  FaAward,
  FaStar,
  FaExternalLinkAlt,
  FaTrophy,
  FaChevronRight,
  FaDatabase,
  FaRobot,
  FaBrain,
  FaLayerGroup,
  FaServer,
  FaGitAlt,
  FaMedal,
  FaLightbulb,
  FaCheckCircle,
} from 'react-icons/fa';
import data from '../data/data.json';
import { TechIcon } from './TechIcon';

const CATEGORY_META = {
  languages: { label: 'Languages', icon: FaCode, accent: 'from-blue-500 to-cyan-500' },
  webDevelopment: { label: 'Web Development', icon: FaLayerGroup, accent: 'from-violet-500 to-fuchsia-500' },
  databases: { label: 'Databases', icon: FaDatabase, accent: 'from-emerald-500 to-teal-500' },
  automation: { label: 'Automation', icon: FaRobot, accent: 'from-amber-500 to-orange-500' },
  aiPowered: { label: 'AI & LLMs', icon: FaBrain, accent: 'from-indigo-500 to-pink-500' },
  devOps: { label: 'DevOps & Tools', icon: FaGitAlt, accent: 'from-rose-500 to-red-500' },
};

const TECH_LABELS = {
  'Bootstrap 5': 'Bootstrap 5',
  'Selenium WebDriver': 'Selenium WebDriver',
  'Beautiful Soup': 'Beautiful Soup',
  'GitHub Copilot': 'GitHub Copilot',
  'Claude AI': 'Claude AI',
  'React 19': 'React 19',
  Postman: 'Postman',
};

const Skills = () => {
  const { skills } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const categories = useMemo(() => {
    const entries = [];
    entries.push({ key: 'languages', items: skills.languages || [] });
    if (skills.technologies && typeof skills.technologies === 'object' && !Array.isArray(skills.technologies)) {
      Object.entries(skills.technologies).forEach(([key, items]) => {
        if (Array.isArray(items) && items.length) entries.push({ key, items });
      });
    }
    return entries.filter((e) => CATEGORY_META[e.key]);
  }, [skills]);

  const [activeTab, setActiveTab] = useState(categories[0]?.key || 'languages');
  const activeCategory = categories.find((c) => c.key === activeTab) || categories[0];

  const totalTech = useMemo(
    () => categories.reduce((sum, c) => sum + c.items.length, 0),
    [categories]
  );

  const aiTools = Array.isArray(skills?.technologies?.aiPowered) ? skills.technologies.aiPowered : [];

  const aiFocusItems = [
    {
      icon: FaLightbulb,
      title: 'LLM Product Integration',
      description:
        'Integrated GPT-4o conversational analytics into SaaS workflows for natural-language project insights and executive reporting.',
      highlights: ['GPT-4o', 'Analytics Assistant', 'Business Context'],
    },
    {
      icon: FaRobot,
      title: 'AI-Powered Automation',
      description:
        'Built scheduler-driven automation pipelines for 120+ sources with AI-generated metadata and robust ingestion orchestration.',
      highlights: ['APScheduler', '120+ Sources', 'AI Titling'],
    },
    {
      icon: FaBrain,
      title: 'RAG & Knowledge Pipelines',
      description:
        'Designed retrieval-focused processing flows for regulatory and operational content to support reliable downstream AI query systems.',
      highlights: ['RAG Pipeline', 'Dedup', 'Async Processing'],
    },
    {
      icon: FaServer,
      title: 'AI Engineering Stack',
      description:
        'Production-oriented integration experience across leading AI platforms with secure API patterns and measurable business outcomes.',
      highlights: aiTools.length ? aiTools.slice(0, 3) : ['OpenAI API', 'Azure AI', 'Claude AI'],
    },
  ];

  const stats = [
    { label: 'Technologies', value: `${totalTech}+`, icon: FaLayerGroup, color: 'text-blue-500' },
    { label: 'Problems Solved', value: '1,000+', icon: FaTrophy, color: 'text-amber-500' },
    { label: 'Coding Platforms', value: `${skills.problemSolving.platforms.length}`, icon: FaMedal, color: 'text-emerald-500' },
    { label: 'Certifications', value: `${skills.certificates.length}`, icon: FaAward, color: 'text-purple-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const getTechLabel = (tech) => TECH_LABELS[tech] || tech;

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      {/* Ambient background orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-400/20 dark:bg-purple-600/10 blur-3xl"
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants}>
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
              What I Bring
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Skills &amp; Expertise
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Full-stack engineering with applied AI, automation, and a deep foundation in algorithms.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative group bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700/60 rounded-2xl p-5 shadow-elevation hover:shadow-elevation-lg transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gray-100 dark:bg-gray-700/60 ${s.color}`}>
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800 dark:text-white leading-none">{s.value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Tech stack card with tabs */}
          <motion.div
            variants={itemVariants}
            className="relative bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700/60 shadow-elevation overflow-hidden mb-10"
          >
            <div className="px-6 md:px-8 pt-6 md:pt-8 pb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                  <FaLayerGroup />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Technical Stack</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Explore tools by category</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700/60 -mx-1 px-1 pb-0">
                {categories.map((c) => {
                  const meta = CATEGORY_META[c.key];
                  const Icon = meta.icon;
                  const isActive = activeTab === c.key;
                  return (
                    <button
                      key={c.key}
                      onClick={() => setActiveTab(c.key)}
                      className={`relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                        isActive
                          ? 'text-gray-900 dark:text-white'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon className={isActive ? 'text-blue-600 dark:text-blue-400' : ''} />
                      <span>{meta.label}</span>
                      <span
                        className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                            : 'bg-gray-100 text-gray-500 dark:bg-gray-700/60 dark:text-gray-400'
                        }`}
                      >
                        {c.items.length}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className={`absolute left-0 right-0 -bottom-px h-0.5 bg-gradient-to-r ${meta.accent}`}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab content */}
            <div className="px-6 md:px-8 py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
                >
                  {activeCategory?.items.map((tech, idx) => (
                    <motion.div
                      key={`${activeTab}-${tech}`}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.035, type: 'spring', stiffness: 120 }}
                      whileHover={{ y: -4, scale: 1.03 }}
                      className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-700/60 hover:border-blue-400 dark:hover:border-blue-500/60 hover:shadow-md transition-all"
                    >
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${CATEGORY_META[activeTab].accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="text-3xl relative z-10">
                        <TechIcon lang={tech} />
                      </div>
                      <span className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 text-center relative z-10">
                        {getTechLabel(tech)}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* AI Engineering Focus */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950/40 dark:via-gray-900 dark:to-cyan-950/30 rounded-3xl border border-indigo-200/60 dark:border-indigo-900/40 shadow-elevation p-6 md:p-8 mb-10 overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/30">
                  <FaStar className="text-xl" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">AI Engineering Focus</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Applied AI across SaaS analytics, automation, and RAG systems
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {aiFocusItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                      whileHover={{ y: -4 }}
                      className="group relative bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-indigo-100 dark:border-indigo-900/40 p-5 hover:shadow-lg hover:border-indigo-300 dark:hover:border-indigo-700 transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-cyan-100 dark:from-indigo-900/60 dark:to-cyan-900/40 text-indigo-600 dark:text-indigo-300">
                          <Icon />
                        </div>
                        <h4 className="font-semibold text-gray-800 dark:text-white pt-1">{item.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.slice(0, 3).map((h) => (
                          <span
                            key={h}
                            className="text-[11px] px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200 font-medium"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Achievements: problem solving + certifications */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Problem solving */}
            <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-6 md:p-8 shadow-elevation-lg overflow-hidden">
              <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, delay: 0.6 }}
                className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300/20 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                    <FaTrophy className="text-yellow-300 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">Problem Solving</h3>
                    <p className="text-sm text-blue-100">{skills.problemSolving.description}</p>
                  </div>
                </div>

                <div className="mb-5 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <FaCheckCircle className="text-yellow-300" />
                    {skills.problemSolving.problemsSolved}
                  </div>
                </div>

                <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <FaChevronRight className="text-yellow-300 text-xs" /> Coding Platforms
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {skills.problemSolving.platforms.map((platform, index) => {
                    const match = platform.match(/(.*?)\s*\[(.*?)\]/);
                    const name = match ? match[1] : platform;
                    const url = match ? match[2] : null;

                    return (
                      <motion.a
                        key={index}
                        href={url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center gap-3 p-3 rounded-xl border border-white/10 transition-all ${
                          url ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5'
                        } backdrop-blur-sm`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                            url
                              ? 'bg-gradient-to-br from-yellow-300 to-amber-500 text-gray-900'
                              : 'bg-white/20 text-white'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <span className="font-medium text-white text-sm flex-1 truncate">{name}</span>
                        {url && <FaExternalLinkAlt className="text-xs text-blue-100 opacity-70" />}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="relative bg-white dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-700/60 shadow-elevation overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-purple-400/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/20">
                    <FaAward className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Certifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified skill credentials</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {skills.certificates.map((cert, index) => {
                    const match = cert.match(/(.*?)\s*\[(.*?)\]/);
                    const name = match ? match[1] : cert;
                    const url = match ? match[2] : null;

                    return (
                      <motion.a
                        key={index}
                        href={url || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                          url
                            ? 'cursor-pointer bg-gray-50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700/60 hover:border-purple-400 dark:hover:border-purple-500/60 hover:shadow-md'
                            : 'bg-gray-50 dark:bg-gray-900/40 border-gray-200 dark:border-gray-700/60'
                        }`}
                      >
                        <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-purple-500/20">
                          <FaAward className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-gray-800 dark:text-white truncate">{name}</div>
                          {url && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                              <FaExternalLinkAlt className="opacity-70" />
                              <span>View certificate</span>
                            </div>
                          )}
                        </div>
                        {url && (
                          <FaChevronRight className="text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                        )}
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
