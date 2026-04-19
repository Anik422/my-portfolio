import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa';
import data from '../data/data.json';
import image from '../assets/images/profile.jpg';

const HomeSection = ({ darkMode, toggleDarkMode, scrollTo }) => {
  const { name, title, email, github, linkedin, resume, summary } = data.personalInfo;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center pt-20 pb-20 relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-slate-950' : 'bg-gradient-to-br from-slate-50 to-blue-50'
      }`}
    >
      {/* Subtle Background Animation */}
      <div className={`absolute inset-0 overflow-hidden ${darkMode ? 'opacity-30' : 'opacity-10'}`}>
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-blue-600' : 'bg-blue-400'
          }`}
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
            darkMode ? 'bg-purple-600' : 'bg-purple-400'
          }`}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className={`inline-block px-4 py-2 rounded-full border ${
                darkMode
                  ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                  : 'border-blue-400/30 bg-blue-50 text-blue-600'
              }`}
            >
              <p className="text-sm font-semibold tracking-wide">Welcome to my portfolio</p>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1
                className={`text-5xl md:text-6xl font-bold tracking-tight leading-tight ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}
              >
                Hi, I'm{' '}
                <span
                  className={`bg-clip-text text-transparent bg-gradient-to-r ${
                    darkMode
                      ? 'from-blue-400 via-purple-400 to-pink-400'
                      : 'from-blue-600 via-purple-600 to-pink-600'
                  }`}
                >
                  {name}
                </span>
              </h1>
            </motion.div>

            {/* Title/Role */}
            <motion.div
              variants={itemVariants}
              className={`text-2xl md:text-3xl font-semibold ${
                darkMode ? 'text-gray-300' : 'text-slate-700'
              }`}
            >
              {title}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg leading-relaxed max-w-lg ${
                darkMode ? 'text-gray-400' : 'text-slate-600'
              }`}
            >
              {summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/20'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-600/30'
                }`}
              >
                <FaEnvelope /> Get In Touch
              </motion.a>

              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all border-2 ${
                  darkMode
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FaGithub /> GitHub
              </motion.a>

              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all border-2 ${
                  darkMode
                    ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <FaLinkedin /> LinkedIn
              </motion.a>

              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-all border-2 ${
                  darkMode
                    ? 'border-purple-500 text-purple-400 hover:bg-purple-500/10'
                    : 'border-purple-600 text-purple-600 hover:bg-purple-50'
                }`}
              >
                <FaDownload /> Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            variants={imageVariants}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl ${
                darkMode ? 'shadow-blue-500/20' : 'shadow-blue-600/30'
              }`}
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${
                  darkMode
                    ? 'from-blue-600/20 via-transparent to-purple-600/20'
                    : 'from-blue-600/10 via-transparent to-purple-600/10'
                }`}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo('skills')}
            className={`flex flex-col items-center gap-2 ${
              darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            } transition-colors`}
          >
            <span className="text-sm font-semibold">Scroll to explore</span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <FaChevronDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
