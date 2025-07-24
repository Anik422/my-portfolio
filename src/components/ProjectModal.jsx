import { FaGithub, FaExternalLinkAlt, FaLock, FaTimes } from 'react-icons/fa';
import { TechIcon } from './TechIcon';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Background Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-2xl mx-4"
          >
            <div className="relative transform overflow-hidden rounded-lg bg-white/90 dark:bg-gray-900/90 text-left shadow-xl backdrop-blur-md border border-white/30 dark:border-gray-700/60">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="h-6 w-6" />
              </button>

              {/* Modal content */}
              <div className="px-6 pb-6 pt-7 sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.type || 'Web Application'} • {project.year || '2023'}
                    </p>
                    <div className="mt-2">
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                        <span className="text-blue-600 dark:text-blue-400">Technologies Used</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 px-3 py-1 bg-white/60 dark:bg-gray-800/60 rounded-full text-sm backdrop-blur-sm border border-white/30 dark:border-gray-600/60 text-gray-800 dark:text-gray-200"
                          >
                            {<TechIcon lang={tech} /> || <span>•</span>}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal footer */}
              <div className="bg-white/40 dark:bg-gray-800/70 px-6 py-4 sm:flex sm:flex-row-reverse gap-3 border-t border-white/30 dark:border-gray-600/50">
                {/* GitHub */}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-2 justify-center rounded-md bg-gray-800 hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 hover:scale-105 transition-all transform cursor-pointer px-4 py-2 text-sm font-semibold text-white shadow-xs w-full sm:w-auto"
                  >
                    <FaGithub /> Source Code
                  </a>
                ) : (
                  <div
                    className="inline-flex items-center gap-2 mb-2 justify-center rounded-md bg-gray-200 dark:bg-gray-700 px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-auto cursor-not-allowed"
                    role="button"
                    aria-disabled="true"
                  >
                    <FaLock /> Private Repository
                  </div>
                )}

                {/* Live Demo */}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mb-2 justify-center rounded-md bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all transform cursor-pointer px-4 py-2 text-sm font-semibold text-white shadow-xs w-full sm:w-auto"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}

                {/* Close */}
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex justify-center rounded-md mb-2 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:scale-105 transition-all transform px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-xs ring-1 ring-gray-300 dark:ring-gray-500 ring-inset w-full sm:w-auto cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
