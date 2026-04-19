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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 10px 25px rgba(0, 0, 0, 0.05)',
                    '0 20px 50px rgba(59, 130, 246, 0.15)',
                    '0 10px 25px rgba(0, 0, 0, 0.05)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl transform group-hover:scale-105 transition-all duration-300"
              />

              <motion.div
                animate={{
                  borderColor: [
                    'rgba(229, 231, 235, 1)',
                    'rgba(59, 130, 246, 0.5)',
                    'rgba(229, 231, 235, 1)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative h-full p-6 border-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden shadow-elevation hover:shadow-elevation-lg transition-all"
              >
                {/* Decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-0 right-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-bl-full opacity-30"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                  className="absolute bottom-0 left-0 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-tr-full opacity-30"
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360]
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-14 h-14 mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-300 shadow-md"
                  >
                    {index === 0 ? (
                      <FaUniversity className="text-xl" />
                    ) : index === 1 ? (
                      <FaGraduationCap className="text-xl" />
                    ) : (
                      <FaSchool className="text-xl" />
                    )}
                  </motion.div>

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
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;