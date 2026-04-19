import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaDownload, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import data from '../data/data.json';
import image from '../assets/images/profile.jpg';


const HomeSection = ({ darkMode, toggleDarkMode, scrollTo }) => {
  const { name, title, email, github, linkedin, resume, summary } = data.personalInfo;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-slate-900 dark:to-black"
    >
      {/* 3D Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-t from-transparent via-purple-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Card with 3D Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              style={{
                perspective: '1000px',
              }}
              animate={{
                rotateX: (mousePosition.y - 50) * 0.05,
                rotateY: (mousePosition.x - 50) * 0.05,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 30 }}
              className="relative w-80 h-80"
            >
              {/* 3D Card Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-purple-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
              >
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
              </motion.div>

              {/* Image container with 3D depth */}
              <motion.div
                className="absolute inset-4 rounded-2xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-900/30" />
              </motion.div>



              {/* Rotating border effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, linear: true }}
                className="absolute -inset-2 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 bg-clip-border"
              />
            </motion.div>
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Animated greeting */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-blue-400 text-lg font-semibold">Welcome to my portfolio</span>
            </motion.div>

            {/* Name - 3D Text Effect */}
            <motion.div
              animate={{
                textShadow: [
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                  '0 0 40px rgba(168, 85, 247, 0.7)',
                  '0 0 20px rgba(59, 130, 246, 0.5)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                {name}
              </h1>
            </motion.div>

            {/* Title - Animated letters */}
            <motion.h2 className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              {title}
            </motion.h2>

            {/* Summary with smooth animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              {summary}
            </motion.p>

            {/* Call-to-action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {/* Primary CTA */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all flex items-center gap-2"
              >
                <FaEnvelope /> Get In Touch
              </motion.a>

              {/* GitHub Button */}
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-400 text-blue-400 font-bold rounded-lg hover:bg-blue-400/10 transition-all flex items-center gap-2"
              >
                <FaGithub /> GitHub
              </motion.a>

              {/* LinkedIn Button */}
              <motion.a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-bold rounded-lg hover:bg-blue-500/10 transition-all flex items-center gap-2"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>

              {/* Resume Button */}
              <motion.a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-bold rounded-lg hover:bg-purple-400/10 transition-all flex items-center gap-2"
              >
                <FaDownload /> Resume
              </motion.a>
            </motion.div>


          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollTo('skills')}
            className="flex flex-col items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span className="text-sm font-semibold">Scroll to explore</span>
            <FaChevronDown className="text-xl animate-pulse" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
