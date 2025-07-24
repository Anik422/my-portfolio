import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaDownload, FaChevronDown } from 'react-icons/fa';
import data from '../data/data.json';
import image from '../assets/images/profile.jpg';

const HomeSection = ({ darkMode, toggleDarkMode, scrollTo }) => {
  const { name, title, email, github, linkedin, resume, summary } = data.personalInfo;
  const [typedTitle, setTypedTitle] = useState('');
  const [typedName, setTypedName] = useState('');
  const [animationStyle, setAnimationStyle] = useState(1);

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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Enhanced background with more animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1), 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className={`absolute ${i % 2 === 0 ? 'left-1/4' : 'right-1/4'} ${i % 3 === 0 ? 'top-1/3' : 'bottom-1/3'
              } w-${40 + i * 8} h-${40 + i * 8} ${darkMode
                ? i % 4 === 0 ? 'bg-blue-600/10' : i % 4 === 1 ? 'bg-purple-600/10' : 'bg-indigo-600/10'
                : i % 4 === 0 ? 'bg-blue-400/20' : i % 4 === 1 ? 'bg-purple-400/20' : 'bg-indigo-400/20'
              } rounded-full filter blur-${i % 2 === 0 ? '2xl' : '3xl'}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Enhanced Profile Image with Gradient Border */}
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
              whileHover={{
                scale: 1.05,
                boxShadow: darkMode
                  ? "0 0 30px rgba(192, 132, 252, 0.5)"
                  : "0 0 30px rgba(99, 102, 241, 0.5)"
              }}
              className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
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
              className={`absolute inset-0 rounded-full ${darkMode ? 'bg-purple-500/20' : 'bg-blue-500/30'
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
              className={`absolute -top-2 -right-2 w-16 h-16 rounded-full ${darkMode ? 'bg-blue-500/10' : 'bg-blue-400/20'
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-300 dark:to-purple-300"
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
              <h2 className="text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
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
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 shadow-sm"
            >
              {summary}
            </motion.p>

            <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.5 }}
  className="flex flex-wrap justify-center lg:justify-start gap-3"
>
  {/* Email */}
  <motion.a
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    href={`mailto:${email}`}
    target="_blank"
    className="flex items-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg text-sm font-medium shadow hover:shadow-md transition-all"
  >
    <FaEnvelope className="text-base" />
    <span>Email</span>
  </motion.a>

  {/* GitHub */}
  <motion.a
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    href={github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium shadow hover:shadow-md transition-all"
  >
    <FaGithub className="text-base" />
    <span>GitHub</span>
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    href={linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-blue-700 dark:bg-blue-800 text-white rounded-lg text-sm font-medium shadow hover:shadow-md transition-all"
  >
    <FaLinkedin className="text-base" />
    <span>LinkedIn</span>
  </motion.a>

  {/* Resume */}
  <motion.a
    whileHover={{ y: -2, scale: 1.02 }}
    whileTap={{ scale: 0.97 }}
    href={resume}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-gray-500 text-white rounded-lg text-sm font-medium shadow hover:shadow-md transition-all"
  >
    <FaDownload className="text-base" />
    <span>Resume</span>
  </motion.a>
</motion.div>


          </div>
        </div>

        {/* dark mode toggle  */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:shadow-lg transition-all z-10000 md:hidden"
        >
          {darkMode ?
            <FaSun className="text-yellow-300 text-lg" size={20} />
            :
            <FaMoon className="text-gray-800 text-lg" size={20} />
          }
        </motion.button>



        {/* Enhanced Scroll Down Indicator - Moved lower */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo('skills')}
          className="absolute bottom-0 lg:bottom-[-4rem] left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors"
          >
            <FaChevronDown
              size={24}
              className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors"
            />
          </motion.div>
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm mt-2 text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors"
          >
            Scroll Down
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
