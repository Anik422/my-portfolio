import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaDownload, FaChevronDown } from 'react-icons/fa';
import data from '../data/data.json';
import image from '../assets/images/profile.jpg';

const HomeSection = ({ darkMode, toggleDarkMode, scrollTo }) => {
  const { name, title, email, github, linkedin, resume, summary } = data.personalInfo;
  const [typedTitle, setTypedTitle] = useState('');
  const [typedName, setTypedName] = useState('');
  const [animationStyle, setAnimationStyle] = useState(1);
  const [particleCount, setParticleCount] = useState(20);

  useEffect(() => {
    if (animationStyle === 1) {
      let nameIndex = 0;
      let titleIndex = 0;

      const nameInterval = setInterval(() => {
        if (nameIndex < name.length) {
          setTypedName(name.substring(0, nameIndex + 1));
          nameIndex++;
        } else {
          clearInterval(nameInterval);
        }
      }, 100);

      const titleInterval = setInterval(() => {
        if (titleIndex < title.length) {
          setTypedTitle(title.substring(0, titleIndex + 1));
          titleIndex++;
        } else {
          clearInterval(titleInterval);
        }
      }, 50);

      return () => {
        clearInterval(nameInterval);
        clearInterval(titleInterval);
      };
    } else {
      setTypedName(name);
      setTypedTitle(title);
    }
  }, [name, title, animationStyle]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStyle(prev => (prev % 4) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Dynamic particle generation
  useEffect(() => {
    const interval = setInterval(() => {
      setParticleCount(prev => (prev % 30) + 15);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nameVariants = {
    typing: { opacity: 1, transition: { duration: 0.3 } },
    fade: { 
      opacity: [0, 1], 
      scale: [0.8, 1.1, 1],
      transition: { duration: 1.2 } 
    },
    slide: { 
      y: [50, -10, 0], 
      opacity: [0, 1], 
      rotateX: [90, -5, 0],
      transition: { duration: 1, ease: "easeOut" } 
    },
    bounce: {
      y: [80, -20, 5, 0],
      opacity: [0, 0.7, 1, 1],
      scale: [0.5, 1.2, 0.9, 1],
      transition: { duration: 1.2, times: [0, 0.4, 0.8, 1] }
    }
  };

  const titleVariants = {
    typing: { opacity: 1, transition: { duration: 0.3 } },
    fade: { 
      opacity: [0, 1], 
      scale: [0.9, 1.05, 1],
      transition: { duration: 1, delay: 0.3 } 
    },
    slide: { 
      y: [30, -5, 0], 
      opacity: [0, 1], 
      rotateY: [45, -5, 0],
      transition: { duration: 0.8, delay: 0.2 } 
    },
    bounce: {
      y: [50, -10, 0],
      opacity: [0, 1, 1],
      scale: [0.7, 1.1, 1],
      transition: { duration: 1, delay: 0.3, times: [0, 0.7, 1] }
    }
  };

  // Generate random particles
  const generateParticles = () => {
    return [...Array(particleCount)].map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 10,
      opacity: Math.random() * 0.3 + 0.1,
      color: i % 6 === 0 ? 'blue' : i % 6 === 1 ? 'purple' : i % 6 === 2 ? 'indigo' : i % 6 === 3 ? 'cyan' : i % 6 === 4 ? 'pink' : 'violet'
    }));
  };

  const particles = generateParticles();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Dynamic Animated Background */}
      <motion.div 
        animate={{
          background: darkMode 
            ? [
                'linear-gradient(45deg, #0f172a, #1e293b, #334155)',
                'linear-gradient(135deg, #1e1b4b, #312e81, #3730a3)',
                'linear-gradient(225deg, #581c87, #7c3aed, #a855f7)',
                'linear-gradient(315deg, #0f172a, #1e293b, #334155)'
              ]
            : [
                'linear-gradient(45deg, #dbeafe, #e0e7ff, #f1f5f9)',
                'linear-gradient(135deg, #fef3c7, #fde68a, #f59e0b)',
                'linear-gradient(225deg, #fce7f3, #f3e8ff, #e9d5ff)',
                'linear-gradient(315deg, #dbeafe, #e0e7ff, #f1f5f9)'
              ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence>
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ 
                x: `${particle.x}vw`, 
                y: `${particle.y}vh`,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: [
                  `${particle.x}vw`,
                  `${(particle.x + 30) % 100}vw`,
                  `${(particle.x + 60) % 100}vw`,
                  `${particle.x}vw`
                ],
                y: [
                  `${particle.y}vh`,
                  `${(particle.y + 20) % 100}vh`,
                  `${(particle.y + 40) % 100}vh`,
                  `${particle.y}vh`
                ],
                rotate: [0, 180, 360],
                scale: [0, 1, 0.5, 1],
                opacity: [0, particle.opacity, particle.opacity * 0.5, particle.opacity]
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute w-${Math.floor(particle.size/4)} h-${Math.floor(particle.size/4)} bg-${particle.color}-${darkMode ? '400' : '500'}/${Math.floor(particle.opacity * 100)} rounded-full filter blur-sm`}
            />
          ))}
        </AnimatePresence>

        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              x: [
                `${20 + (i * 15) % 80}vw`,
                `${40 + (i * 20) % 60}vw`,
                `${60 + (i * 10) % 40}vw`,
                `${20 + (i * 15) % 80}vw`
              ],
              y: [
                `${10 + (i * 8) % 80}vh`,
                `${30 + (i * 12) % 70}vh`,
                `${50 + (i * 6) % 50}vh`,
                `${10 + (i * 8) % 80}vh`
              ],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.5, 0.8, 1]
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute ${
              i % 3 === 0 ? 'w-8 h-8 rounded-full' : 
              i % 3 === 1 ? 'w-6 h-6 rotate-45' : 
              'w-10 h-4 rounded-full'
            } ${
              darkMode 
                ? `bg-gradient-to-r from-${i % 2 === 0 ? 'blue' : 'purple'}-500/20 to-${i % 2 === 0 ? 'purple' : 'cyan'}-500/20`
                : `bg-gradient-to-r from-${i % 2 === 0 ? 'blue' : 'purple'}-400/30 to-${i % 2 === 0 ? 'purple' : 'pink'}-400/30`
            } backdrop-blur-sm border border-white/10`}
          />
        ))}

        {/* Ripple Effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`ripple-${i}`}
            animate={{
              scale: [0, 2, 0],
              opacity: [0.5, 0.2, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
            className={`absolute ${
              i % 2 === 0 ? 'top-1/4 left-1/4' : 'bottom-1/4 right-1/4'
            } w-32 h-32 rounded-full border-2 ${
              darkMode ? 'border-blue-400/30' : 'border-purple-500/40'
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Super Enhanced Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Multiple Rotating Rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`ring-${i}`}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20 + (i * 5), repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                }}
                className={`absolute -inset-${4 + i * 2} rounded-full border-2 border-dashed ${
                  darkMode ? 'border-blue-500/20' : 'border-purple-500/30'
                } opacity-60`}
              />
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              whileHover={{
                scale: 1.08,
                rotateY: 10,
                boxShadow: darkMode
                  ? "0 0 50px rgba(192, 132, 252, 0.6), 0 0 100px rgba(79, 70, 229, 0.3)"
                  : "0 0 50px rgba(99, 102, 241, 0.6), 0 0 100px rgba(168, 85, 247, 0.3)"
              }}
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
            >
              {/* Animated Gradient Border */}
              <motion.div 
                animate={{
                  background: [
                    'linear-gradient(0deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                    'linear-gradient(120deg, #8b5cf6, #06b6d4, #f59e0b, #8b5cf6)',
                    'linear-gradient(240deg, #06b6d4, #f59e0b, #ef4444, #06b6d4)',
                    'linear-gradient(360deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full p-1"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <motion.img
                    animate={{
                      scale: [1, 1.05, 1],
                      filter: [
                        'hue-rotate(0deg) saturate(100%)',
                        'hue-rotate(30deg) saturate(110%)',
                        'hue-rotate(0deg) saturate(100%)'
                      ]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Orbs around image */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                animate={{
                  x: [
                    Math.cos((i * 45) * Math.PI / 180) * 120,
                    Math.cos((i * 45 + 180) * Math.PI / 180) * 120,
                    Math.cos((i * 45) * Math.PI / 180) * 120
                  ],
                  y: [
                    Math.sin((i * 45) * Math.PI / 180) * 120,
                    Math.sin((i * 45 + 180) * Math.PI / 180) * 120,
                    Math.sin((i * 45) * Math.PI / 180) * 120
                  ],
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${
                  i % 3 === 0 ? 'from-blue-400 to-cyan-400' :
                  i % 3 === 1 ? 'from-purple-400 to-pink-400' :
                  'from-yellow-400 to-orange-400'
                } shadow-lg`}
              />
            ))}

            {/* Pulsing Background Aura */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute inset-0 rounded-full ${
                darkMode ? 'bg-gradient-radial from-purple-500/20 to-transparent' : 'bg-gradient-radial from-blue-500/30 to-transparent'
              } z-0`}
            />
          </motion.div>

          {/* Enhanced Content with Multiple Animation Layers */}
          <div className="text-center lg:text-left">
            {/* Animated Name with Particle Effects */}
            <motion.div className="relative mb-4">
              <motion.h1
                key={`name-${animationStyle}`}
                variants={nameVariants}
                initial="hidden"
                animate={
                  animationStyle === 1 ? 'typing' :
                  animationStyle === 2 ? 'fade' :
                  animationStyle === 3 ? 'slide' : 'bounce'
                }
                className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 dark:from-blue-300 via-purple-300 to-cyan-300 relative z-10"
              >
                {animationStyle === 1 ? (
                  <>
                    {typedName}
                    <motion.span 
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-blue-500"
                    >
                      |
                    </motion.span>
                  </>
                ) : (
                  <motion.span
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(59, 130, 246, 0.5)',
                        '0 0 20px rgba(139, 92, 246, 0.7)',
                        '0 0 30px rgba(6, 182, 212, 0.5)',
                        '0 0 10px rgba(59, 130, 246, 0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {name}
                  </motion.span>
                )}
              </motion.h1>

              {/* Text Particle Effects */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={`text-particle-${i}`}
                  animate={{
                    x: [0, (i % 2 === 0 ? 20 : -20), 0],
                    y: [0, -30, 0],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeOut"
                  }}
                  className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} top-0 w-2 h-2 rounded-full ${
                    i % 3 === 0 ? 'bg-blue-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-cyan-400'
                  }`}
                />
              ))}
            </motion.div>

            {/* Animated Title with Background Effects */}
            <motion.div className="relative mb-6">
              <motion.div
                key={`title-${animationStyle}`}
                variants={titleVariants}
                initial="hidden"
                animate={
                  animationStyle === 1 ? 'typing' :
                  animationStyle === 2 ? 'fade' :
                  animationStyle === 3 ? 'slide' : 'bounce'
                }
                className={`${animationStyle === 1 ? 'h-10 font-mono' : ''} relative z-10`}
              >
                <motion.h2 
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 via-purple-400 to-pink-400"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  {animationStyle === 1 ? (
                    <>
                      {typedTitle}
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-purple-500"
                      >
                        |
                      </motion.span>
                    </>
                  ) : (
                    title
                  )}
                </motion.h2>
              </motion.div>

              {/* Background Wave Effect */}
              <motion.div
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute bottom-0 left-0 h-1 ${
                  darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'
                } rounded-full`}
              />
            </motion.div>

            {/* Enhanced Summary with Animated Background */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-8"
            >
              <motion.div
                animate={{
                  background: darkMode
                    ? [
                        'rgba(30, 41, 59, 0.4)',
                        'rgba(51, 65, 85, 0.4)',
                        'rgba(71, 85, 105, 0.4)',
                        'rgba(30, 41, 59, 0.4)'
                      ]
                    : [
                        'rgba(255, 255, 255, 0.4)',
                        'rgba(248, 250, 252, 0.4)',
                        'rgba(241, 245, 249, 0.4)',
                        'rgba(255, 255, 255, 0.4)'
                      ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 dark:border-gray-700/30"
              >
                <motion.p
                  animate={{
                    color: darkMode 
                      ? ['#d1d5db', '#f3f4f6', '#e5e7eb', '#d1d5db']
                      : ['#374151', '#1f2937', '#4b5563', '#374151']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                >
                  {summary}
                </motion.p>
              </motion.div>
              
              {/* Floating Elements around Summary */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={`summary-float-${i}`}
                  animate={{
                    x: [0, (i % 2 === 0 ? 10 : -10), 0],
                    y: [0, (i % 2 === 0 ? -10 : 10), 0],
                    rotate: [0, 360],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 1.5,
                    ease: "easeInOut"
                  }}
                  className={`absolute ${
                    i === 0 ? 'top-2 right-2' :
                    i === 1 ? 'bottom-2 left-2' :
                    i === 2 ? 'top-2 left-2' :
                    'bottom-2 right-2'
                  } w-3 h-3 rounded-full ${
                    i % 2 === 0 ? 'bg-blue-400/50' : 'bg-purple-400/50'
                  }`}
                />
              ))}
            </motion.div>

            {/* Super Enhanced Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              {/* Email Button */}
              <motion.a
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  boxShadow: { duration: 3, repeat: Infinity },
                  hover: { duration: 0.2 }
                }}
                href={`mailto:${email}`}
                target="_blank"
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white rounded-lg text-sm font-semibold shadow-lg transition-all"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaEnvelope className="text-base" />
                </motion.div>
                <span className="relative z-10">Email</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(107, 114, 128, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  backgroundColor: [
                    'rgb(31, 41, 55)',
                    'rgb(55, 65, 81)',
                    'rgb(31, 41, 55)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 text-white rounded-lg text-sm font-semibold shadow-lg transition-all"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaGithub className="text-base" />
                </motion.div>
                <span className="relative z-10">GitHub</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 opacity-0 group-hover:opacity-30"
                  animate={{ scale: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(29, 78, 216, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background: [
                    'linear-gradient(45deg, #1d4ed8, #2563eb)',
                    'linear-gradient(45deg, #2563eb, #3b82f6)',
                    'linear-gradient(45deg, #1d4ed8, #2563eb)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 text-white rounded-lg text-sm font-semibold shadow-lg transition-all"
              >
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaLinkedin className="text-base" />
                </motion.div>
                <span className="relative z-10">LinkedIn</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-25"
                  animate={{ 
                    background: [
                      'linear-gradient(0deg, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.2))',
                      'linear-gradient(180deg, rgba(79, 70, 229, 0.2), rgba(59, 130, 246, 0.2))',
                      'linear-gradient(0deg, rgba(59, 130, 246, 0.2), rgba(79, 70, 229, 0.2))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>

              {/* Resume Button */}
              <motion.a
                whileHover={{ 
                  y: -5, 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(75, 85, 99, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  background: [
                    'linear-gradient(135deg, #4b5563, #6b7280)',
                    'linear-gradient(135deg, #6b7280, #9ca3af)',
                    'linear-gradient(135deg, #4b5563, #6b7280)'
                  ]
                }}
                transition={{ duration: 3.5, repeat: Infinity }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 text-white rounded-lg text-sm font-semibold shadow-lg transition-all"
              >
                <motion.div
                  animate={{ 
                    y: [0, -3, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <FaDownload className="text-base" />
                </motion.div>
                <span className="relative z-10">Resume</span>
                
                {/* Animated Download Arrow Effect */}
                <motion.div
                  animate={{ 
                    y: [-20, 20],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white/70"
                >
                  ↓
                </motion.div>
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gray-500 to-slate-500 opacity-0 group-hover:opacity-30"
                  animate={{ 
                    background: [
                      'radial-gradient(circle at 0% 50%, rgba(156, 163, 175, 0.3), transparent)',
                      'radial-gradient(circle at 100% 50%, rgba(156, 163, 175, 0.3), transparent)',
                      'radial-gradient(circle at 0% 50%, rgba(156, 163, 175, 0.3), transparent)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Dark Mode Toggle with Advanced Animations */}
        <motion.button
          whileHover={{ 
            scale: 1.15,
            rotate: 15,
            boxShadow: darkMode 
              ? "0 0 30px rgba(251, 191, 36, 0.5)" 
              : "0 0 30px rgba(99, 102, 241, 0.5)"
          }}
          whileTap={{ scale: 0.85 }}
          animate={{
            boxShadow: [
              "0 0 0px rgba(99, 102, 241, 0)",
              darkMode 
                ? "0 0 20px rgba(251, 191, 36, 0.3)" 
                : "0 0 20px rgba(99, 102, 241, 0.3)",
              "0 0 0px rgba(99, 102, 241, 0)"
            ],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            boxShadow: { duration: 3, repeat: Infinity },
            rotate: { duration: 4, repeat: Infinity }
          }}
          onClick={toggleDarkMode}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-r from-gray-200 to-white dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 shadow-xl hover:shadow-2xl transition-all z-50 border-2 border-white/30 dark:border-gray-500/30 md:hidden"
        >
          <AnimatePresence mode="wait">
            {darkMode ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <FaSun className="text-yellow-400 text-xl" />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <FaMoon className="text-gray-700 text-xl" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Orbiting Particles around Toggle */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`toggle-particle-${i}`}
              animate={{
                x: [
                  Math.cos((i * 120) * Math.PI / 180) * 25,
                  Math.cos((i * 120 + 180) * Math.PI / 180) * 25,
                  Math.cos((i * 120) * Math.PI / 180) * 25
                ],
                y: [
                  Math.sin((i * 120) * Math.PI / 180) * 25,
                  Math.sin((i * 120 + 180) * Math.PI / 180) * 25,
                  Math.sin((i * 120) * Math.PI / 180) * 25
                ],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className={`absolute w-2 h-2 rounded-full ${
                darkMode ? 'bg-yellow-400/60' : 'bg-indigo-500/60'
              } pointer-events-none`}
            />
          ))}
        </motion.button>

        {/* Super Enhanced Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={() => scrollTo('skills')}
          className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        >
          {/* Animated Ring Background */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute w-20 h-20 rounded-full border-2 border-dashed ${
              darkMode ? 'border-blue-400/30' : 'border-purple-500/40'
            }`}
          />

          {/* Multiple Bouncing Arrows */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`arrow-${i}`}
              animate={{
                y: [0, 15, 0],
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className={`absolute ${
                i === 0 ? 'z-30' : i === 1 ? 'z-20 opacity-60' : 'z-10 opacity-30'
              }`}
            >
              <div className={`w-16 h-16 rounded-full ${
                darkMode 
                  ? 'bg-gradient-to-b from-blue-500/20 to-purple-500/20' 
                  : 'bg-gradient-to-b from-blue-400/30 to-purple-400/30'
              } backdrop-blur-sm flex items-center justify-center group-hover:${
                darkMode ? 'from-blue-400/30 to-purple-400/30' : 'from-blue-500/40 to-purple-500/40'
              } transition-all duration-300 border border-white/20`}>
                <FaChevronDown
                  size={20 + i * 2}
                  className={`${
                    darkMode ? 'text-blue-300' : 'text-purple-600'
                  } group-hover:${
                    darkMode ? 'text-blue-200' : 'text-purple-700'
                  } transition-colors`}
                />
              </div>
            </motion.div>
          ))}

          {/* Animated Text with Glow */}
          <motion.span
            animate={{ 
              opacity: [0.6, 1, 0.6],
              textShadow: darkMode 
                ? [
                    '0 0 5px rgba(147, 197, 253, 0.3)',
                    '0 0 15px rgba(147, 197, 253, 0.6)',
                    '0 0 5px rgba(147, 197, 253, 0.3)'
                  ]
                : [
                    '0 0 5px rgba(168, 85, 247, 0.3)',
                    '0 0 15px rgba(168, 85, 247, 0.6)',
                    '0 0 5px rgba(168, 85, 247, 0.3)'
                  ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className={`mt-20 text-sm font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            } group-hover:${
              darkMode ? 'text-gray-100' : 'text-gray-800'
            } transition-colors tracking-wider uppercase`}
          >
            <motion.span
              animate={{ letterSpacing: ['0.1em', '0.2em', '0.1em'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Explore More
            </motion.span>
          </motion.span>

          {/* Floating Dots Animation */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`dot-${i}`}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className={`absolute top-${16 + i * 3} w-1 h-1 rounded-full ${
                darkMode ? 'bg-blue-400/60' : 'bg-purple-500/60'
              }`}
            />
          ))}

          {/* Ripple Effect on Hover */}
          <motion.div
            className={`absolute inset-0 rounded-full border-2 ${
              darkMode ? 'border-blue-400/20' : 'border-purple-500/30'
            } opacity-0 group-hover:opacity-100`}
            animate={{
              scale: [1, 1.5, 2],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.div>

        {/* Ambient Light Effects */}
        <motion.div
          animate={{
            background: darkMode
              ? [
                  'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1), transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1), transparent 50%)',
                  'radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.1), transparent 50%)',
                  'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1), transparent 50%)'
                ]
              : [
                  'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05), transparent 50%)',
                  'radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.05), transparent 50%)',
                  'radial-gradient(circle at 20% 80%, rgba(236, 72, 153, 0.05), transparent 50%)',
                  'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.05), transparent 50%)'
                ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 pointer-events-none"
        />
      </div>
    </section>
  );
};

export default HomeSection;