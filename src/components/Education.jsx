import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUniversity, FaGraduationCap, FaSchool, FaAward } from 'react-icons/fa';
import data from '../data/data.json';

const Education = () => {
  const { education } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4  bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800" id="education" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          My Education Journey
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-white dark:bg-gray-700 rounded-xl shadow-lg transform group-hover:scale-105 transition-all duration-300"></div>

              <div className="relative h-full p-6 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-bl-full opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-tr-full opacity-30"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    {index === 0 ? (
                      <FaUniversity className="text-xl" />
                    ) : index === 1 ? (
                      <FaGraduationCap className="text-xl" />
                    ) : (
                      <FaSchool className="text-xl" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{edu.institution}</h3>
                  <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">{edu.degree}</p>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    {edu.duration}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{edu.details}</p>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <h4 className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      <FaAward className="mr-2 text-yellow-500" />
                      Key Coursework
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.coursework}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;