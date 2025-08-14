import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaTools, FaAward, FaStar, FaExternalLinkAlt, FaTrophy, FaChevronRight } from 'react-icons/fa';
import data from '../data/data.json';
import { TechIcon } from './TechIcon';

const Skills = () => {
  const { skills } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 px-4  bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800" id="skills" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          >
            Skills & Expertise
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technologies - now using Languages' style */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Animated background elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-300 z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-purple-500 group-hover:scale-125 transition-transform duration-300 z-0"></div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header section */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl shadow-sm"
                >
                  <FaTools className="text-blue-600 dark:text-blue-300 text-2xl" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Technologies</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tools & frameworks I work with</p>
                </div>
              </div>

              {/* Technologies grid - now using flex layout */}
              <div className="flex flex-wrap gap-3 relative z-10">
                {skills.technologies.map((tech, index) => (
                  <motion.div
                    key={`tech-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.07 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(219, 234, 254, 0.7)",
                      borderColor: "rgba(96, 165, 250, 0.5)",
                      dark: {
                        backgroundColor: "rgba(30, 58, 138, 0.3)",
                        borderColor: "rgba(129, 140, 248, 0.5)"
                      }
                    }}
                    className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm 
                   hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all 
                   border border-gray-200 dark:border-gray-600/50"
                  >
                    <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
                      <TechIcon lang={tech} className="text-xl text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Languages - now using Technologies' style */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-purple-500 group-hover:scale-125 transition-transform z-0"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-pink-500 group-hover:scale-125 transition-transform z-0"></div>

              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-pink-50/30 dark:from-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Header section */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl shadow-sm">
                  <FaCode className="text-purple-600 dark:text-purple-300 text-2xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Languages</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Programming languages I'm proficient in</p>
                </div>
              </div>

              {/* Languages grid - now using grid layout */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 relative z-10">
                {skills.languages.map((lang, idx) => (
                  <motion.div
                    key={`lang-${idx}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: 0.05 * idx,
                      ease: "easeOut"
                    }}
                    className="flex flex-col items-center px-3 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg shadow-sm 
                   hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all 
                   border border-gray-200 dark:border-gray-600/50
                   text-sm md:text-base gap-2 hover:shadow-md"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "rgba(168, 85, 247, 0.5)" // purple-500
                    }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <TechIcon lang={lang} className="text-xl text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{lang}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Problem Solving */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 p-8 rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400/20 rounded-full filter blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
                  <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                    <FaTrophy className="text-yellow-300 text-3xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Problem Solving & Achievements</h3>
                    <p className="mt-2 text-blue-100 max-w-3xl">{skills.problemSolving.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-4 text-lg text-white flex items-center gap-2">
                      <FaChevronRight className="text-yellow-300" />
                      Coding Platforms
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-3 p-4 rounded-xl transition-all ${url ?
                              'bg-white/10 hover:bg-white/20 cursor-pointer backdrop-blur-sm' :
                              'bg-white/5'}`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${url ?
                              'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white' :
                              'bg-white/20'}`}>
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <span className="font-medium text-white">
                                {name}
                              </span>
                              {url && (
                                <div className="text-xs text-blue-100 flex items-center gap-1 mt-1">
                                  <FaExternalLinkAlt className="opacity-70" />
                                  <span>View profile</span>
                                </div>
                              )}
                            </div>
                          </motion.a>
                        );
                      })}
                    </div>
                    <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                      <p className="font-medium text-white text-center">
                        {skills.problemSolving.problemsSolved}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold mb-4 text-lg text-white flex items-center gap-2">
                      <FaChevronRight className="text-yellow-300" />
                      Certifications
                    </h4>
                    <div className="space-y-4">
                      {skills.certificates.map((cert, index) => {
                        const match = cert.match(/(.*?)\s*\[(.*?)\]/);
                        const name = match ? match[1] : cert;
                        const url = match ? match[2] : null;

                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative"
                          >
                            <div className={`bg-white/10 p-5 rounded-xl transition-all backdrop-blur-sm ${url ?
                              'hover:bg-white/20 cursor-pointer' : ''}`}>
                              <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shrink-0">
                                    <FaAward className="text-white text-lg" />
                                  </div>
                                  <span className="text-white font-medium">{name}</span>
                                </div>
                                {url && (
                                  <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                                    <FaExternalLinkAlt className="text-xs opacity-80 group-hover:opacity-100 transition-opacity" />
                                  </div>
                                )}
                              </div>
                            </div>
                            {url && (
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10"
                                aria-label={`View ${name} certificate`}
                              />
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;