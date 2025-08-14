import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaTasks, FaCalendarAlt } from "react-icons/fa";
import data from "../data/data.json";

const Experience = () => {
  const { experience } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Function to format date range
  const formatDateRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate === "Present" ? new Date() : new Date(endDate);

    const startStr = start.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    const endStr =
      endDate === "Present"
        ? "Present"
        : end.toLocaleDateString("en-US", { month: "short", year: "numeric" });

    // Calculate duration in years and months
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    let durationStr = "";
    if (years > 0) durationStr += `${years} yr${years > 1 ? "s" : ""}`;
    if (remainingMonths > 0) {
      if (years > 0) durationStr += " ";
      durationStr += `${remainingMonths} mo${remainingMonths > 1 ? "s" : ""}`;
    }

    return {
      formatted: `${startStr} - ${endStr}`,
      duration: durationStr || "0 mo",
    };
  };

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800"
      id="experience"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
        >
          Professional Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-blue-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experience.map((exp, index) => {
              const { formatted, duration } = formatDateRange(
                exp.startDate,
                exp.endDate
              );

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Glow effect */}
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 blur transition duration-300"></div>

                  <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl">
                        <FaBriefcase className="text-blue-600 dark:text-blue-300 text-xl" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                              {exp.company}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                              {exp.position}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <FaCalendarAlt />
                            <span>{formatted}</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-md text-xs">
                              {duration}
                            </span>
                          </div>
                        </div>

                        {exp.location && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description}
                      </p>
                    )}

                    <div className="mt-4">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        <FaTasks className="text-blue-500" />
                        Key Achievements & Responsibilities
                      </h4>

                      <ul className="space-y-3 pl-2">
                        {exp.achievements.map((achieve, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.15 + idx * 0.08,
                            }}
                            className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 mt-1.5 w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {achieve}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {exp.technologies && (
                      <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.15 + idx * 0.05,
                              }}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
