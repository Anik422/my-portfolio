import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLock, FaTools } from 'react-icons/fa';
import data from '../data/data.json';
import { ProjectModal } from './ProjectModal';
import { TechIcon } from './TechIcon';

const Projects = () => {
  const { projects } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(null);


  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="projects" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Project content */}
              <div className="p-6 relative z-10 h-full flex flex-col">
                {/* Project header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.type || 'Web Application'} • {project.year || '2023'}
                    </p>
                  </div>
                  {project.private && (
                    <div className="flex items-center gap-1 text-xs bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded-full">
                      <FaLock className="text-xs" /> Private
                    </div>
                  )}
                </div>
                
                {/* Project description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Technologies used */}
                <div className="mt-auto">
                  <h4 className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    <FaTools className="text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        <TechIcon lang={tech} />
                        <span>{tech}</span>
                      </motion.div>
                    ))}
                    {project.technologies.length > 4 && (
                      <div className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        +{project.technologies.length - 4} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;