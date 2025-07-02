import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaBook } from 'react-icons/fa';
import data from '../data/data.json';

const Education = () => {
  const { education } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800" id="education" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400"
        >
          Education
        </motion.h2>
        
        <div className="relative">
          {/* Timeline bar */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-6`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
                  <FaGraduationCap className="text-white text-xs" />
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} mt-8`}>
                  <div className={`p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'bg-white dark:bg-gray-700' : 'bg-blue-50 dark:bg-gray-700'}`}>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{edu.institution}</h3>
                    <p className="text-blue-600 dark:text-blue-300 font-medium mb-2">{edu.degree}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{edu.duration}</p>
                    <p className="text-gray-700 dark:text-gray-200 mb-3">{edu.details}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <FaBook className="flex-shrink-0" />
                      <span className="font-medium">Coursework:</span> {edu.coursework}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;