// src/components/Fiverr.js
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import data from "../data/data.json";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Fiverr = () => {
  const { gigsData } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      id="fiverr"
      ref={ref}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-3">
            My <span className="text-green-500">Fiverr</span> Services
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Delivering top-tier development solutions for clients across the
            globe.
          </p>
          <div className="mt-4 w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`grid gap-10 ${
            gigsData.length === 1
              ? "grid-cols-1 justify-items-center" 
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {gigsData.map((gig) => (
            <motion.div
              key={gig.id}
              variants={cardVariants}
              className={`group relative flex flex-col h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-400/20 transition-all duration-500 ${
                gigsData.length === 1 ? "max-w-md w-full" : ""
              }`}
            >
              {/* Image */}
              <div className="overflow-hidden h-44">
                <motion.img
                  src={gig.imageUrl}
                  alt={gig.title}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {gig.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                    {gig.description}
                  </p>
                </div>

                {/* Footer */}
                <div className="mt-5">
                  <a
                    href={gig.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-x-2 font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition"
                  >
                    View on <SiFiverr className="text-lg" />
                    <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Fiverr;
