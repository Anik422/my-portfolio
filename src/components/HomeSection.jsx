import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaChevronDown } from 'react-icons/fa';
import data from '../data/data.json';
import image from '../assets/images/profile.jpg';

const HomeSection = ({ darkMode, toggleDarkMode, scrollTo }) => {
  const { name, title, email, github, linkedin, summary } = data.personalInfo;
  const [typedTitle, setTypedTitle] = useState('');
  const [typedName, setTypedName] = useState('');
  const [animationStyle, setAnimationStyle] = useState(1);

  // Typing animation effects
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

  // Rotate through animation styles
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStyle(prev => (prev % 4) + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const nameVariants = {
    typing: { opacity: 1, transition: { duration: 0.3 } },
    fade: { opacity: [0, 1], transition: { duration: 1 } },
    slide: { y: [50, 0], opacity: [0, 1], transition: { duration: 0.8 } },
    bounce: { 
      y: [60, -10, 0], 
      opacity: [0, 1, 1], 
      transition: { duration: 0.8, times: [0, 0.8, 1] } 
    }
  };

  const titleVariants = {
    typing: { opacity: 1, transition: { duration: 0.3 } },
    fade: { opacity: [0, 1], transition: { duration: 1, delay: 0.3 } },
    slide: { y: [30, 0], opacity: [0, 1], transition: { duration: 0.8, delay: 0.2 } },
    bounce: { 
      y: [40, -5, 0], 
      opacity: [0, 1, 1], 
      transition: { duration: 0.8, delay: 0.2, times: [0, 0.8, 1] } 
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute left-1/4 top-1/3 w-64 h-64 ${
          darkMode ? 'bg-blue-600/10' : 'bg-blue-400/20'
        } rounded-full filter blur-3xl`}
      />

      <motion.div
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, -50, -100, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`absolute right-1/4 bottom-1/3 w-80 h-80 ${
          darkMode ? 'bg-purple-600/10' : 'bg-purple-400/20'
        } rounded-full filter blur-3xl`}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-white dark:border-gray-300 shadow-2xl overflow-hidden relative z-10"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </motion.div>

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute inset-0 rounded-full ${
                darkMode ? 'bg-purple-500/20' : 'bg-blue-500/30'
              } z-0`}
            />

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className={`absolute -top-2 -right-2 w-16 h-16 rounded-full ${
                darkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'
              } border-2 border-dashed border-blue-500/30 z-0`}
            />
          </motion.div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.h1
              key={`name-${animationStyle}`}
              variants={nameVariants}
              initial="hidden"
              animate={
                animationStyle === 1 ? 'typing' :
                animationStyle === 2 ? 'fade' :
                animationStyle === 3 ? 'slide' : 'bounce'
              }
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            >
              {animationStyle === 1 ? (
                <>
                  {typedName}
                  <span className="animate-pulse">|</span>
                </>
              ) : (
                name
              )}
            </motion.h1>

            <motion.div
              key={`title-${animationStyle}`}
              variants={titleVariants}
              initial="hidden"
              animate={
                animationStyle === 1 ? 'typing' :
                animationStyle === 2 ? 'fade' :
                animationStyle === 3 ? 'slide' : 'bounce'
              }
              className={`mb-6 ${animationStyle === 1 ? 'h-10 font-mono' : ''}`}
            >
              <h2 className="text-2xl md:text-3xl text-blue-600 dark:text-blue-300">
                {animationStyle === 1 ? (
                  <>
                    {typedTitle}
                    <span className="animate-pulse">|</span>
                  </>
                ) : (
                  title
                )}
              </h2>
            </motion.div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300"
            >
              {summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                whileHover={{ y: -3, backgroundColor: darkMode ? '#1d4ed8' : '#1e40af' }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <FaEnvelope />
                <span>Email</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3, backgroundColor: darkMode ? '#374151' : '#1f2937' }}
                whileTap={{ scale: 0.95 }}
                href={`https://${github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <FaGithub />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                whileHover={{ y: -3, backgroundColor: darkMode ? '#0a66c2' : '#0a66c2' }}
                whileTap={{ scale: 0.95 }}
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo('skills')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        >
          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
          >
            <FaChevronDown size={24} />
          </motion.div>
          <span className="text-sm mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
            Scroll Down
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;