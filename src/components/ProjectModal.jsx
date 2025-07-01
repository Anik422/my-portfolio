import { FaGithub, FaExternalLinkAlt, FaLock, FaTimes } from 'react-icons/fa';
import { TechIcon } from './TechIcon';

export const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Background backdrop - more transparent with blur effect */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal container */}
            <div className="relative z-10 w-full max-w-2xl mx-4">
                {/* Modal panel with glass morphism effect */}
                <div className="relative transform overflow-hidden rounded-lg bg-white/80 dark:bg-gray-800/80 text-left shadow-xl transition-all backdrop-blur-md border border-white/20 dark:border-gray-700/50">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
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
                                        <span className="text-blue-500">Technologies Used</span>
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center gap-2 px-3 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-sm backdrop-blur-sm border border-white/30 dark:border-gray-600/50"
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
                    <div className="bg-white/30 dark:bg-gray-700/50 px-6 py-4 sm:flex sm:flex-row-reverse gap-3 border-t border-white/30 dark:border-gray-600/50">
                        {project.github ? (
                            <a
                                href={`https://${project.github}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 justify-center rounded-md bg-gray-800/90 hover:bg-gray-700/90 dark:bg-gray-600/90 dark:hover:bg-gray-500/90 px-4 py-2 text-sm font-semibold text-white shadow-xs transition-all w-full sm:w-auto"
                            >
                                <FaGithub /> Source Code
                            </a>
                        ) : (
                            <div className="inline-flex items-center gap-2 justify-center rounded-md bg-gray-100/80 dark:bg-gray-800/80 px-4 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400 w-full sm:w-auto">
                                <FaLock /> Private Repository
                            </div>
                        )}

                        {project.liveDemo && (
                            <a
                                href={`https://${project.liveDemo}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 justify-center rounded-md bg-blue-600/90 hover:bg-blue-500/90 px-4 py-2 text-sm font-semibold text-white shadow-xs transition-all w-full sm:w-auto"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}

                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex justify-center rounded-md bg-white/80 hover:bg-white dark:bg-gray-600/80 dark:hover:bg-gray-500/80 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white shadow-xs ring-1 ring-gray-300/50 dark:ring-gray-500/50 ring-inset transition-all w-full sm:w-auto"
                        >
                            Close
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};