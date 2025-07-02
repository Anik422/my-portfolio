import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaChevronDown, FaArrowRight } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import data from '../data/data.json';
import logo from '../assets/logo.svg';

const Navbar = ({ darkMode, toggleDarkMode, scrollTo, activeSection, isMobile }) => {
  const { name } = data.personalInfo;
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const navItems = ['home', 'skills', 'experience', 'projects', 'education'];

  const handleScroll = (name) => {
    scrollTo(name);
    setMenuOpen(false);
  }


  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleScroll('home'); }} 
          className="flex items-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-blue-600 dark:text-blue-400 flex items-center gap-2"
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            {name}
          </motion.div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <motion.div
              key={item}
              onHoverStart={() => setHoveredLink(item)}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative"
            >
              <button
                onClick={() => scrollTo(item)}
                className={`capitalize px-3 py-2 rounded-md transition-colors ${
                  activeSection === item
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-300'
                }`}
              >
                {item}
              </button>
              <AnimatePresence>
                {hoveredLink === item && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    exit={{ width: 0 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-blue-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-300 text-lg" />
            ) : (
              <FaMoon className="text-gray-800 text-lg" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-600 dark:text-gray-300 mr-5"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-800 shadow-md overflow-hidden"
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 flex flex-col">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleScroll(item)}
                  whileTap={{ scale: 0.95 }} // Add tap effect
                  whileFocus={{ scale: 0.95 }} // Add focus effect
                  whileHover={{ x: 5 }}
                  className={`capitalize px-3 py-4 text-left border-b border-gray-100 dark:border-gray-700 flex items-center ${
                    activeSection === item
                      ? 'text-blue-600 dark:text-blue-400 font-medium'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  <FaArrowRight className="mr-2 text-xs opacity-70" />
                  {item}
                </motion.button>
              ))}
              <motion.button
                onClick={toggleDarkMode}
                whileHover={{ x: 5 }}
                className="capitalize px-3 py-4 text-left border-b border-gray-100 dark:border-gray-700 flex items-center text-gray-600 dark:text-gray-300"
              >
                <FaArrowRight className="mr-2 text-xs opacity-70" />
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;