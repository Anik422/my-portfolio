import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaFileDownload,
} from "react-icons/fa";
import data from "../data/data.json";

const Footer = () => {
  const { email, github, linkedin, resume } = data.personalInfo;

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-16 px-4 bg-gradient-to-b from-slate-100 via-white to-slate-100 dark:from-gray-900 dark:via-black dark:to-black text-slate-800 dark:text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.3 }}
        className="absolute bottom-10 left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg dark:bg-white/10 dark:hover:bg-white/20"
              >
                <FaEnvelope /> Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg dark:bg-white/10 dark:hover:bg-white/20"
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg dark:bg-white/10 dark:hover:bg-white/20"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200/70 hover:bg-slate-200 transition-all shadow-md hover:shadow-lg dark:bg-white/10 dark:hover:bg-white/20"
              >
                <FaFileDownload /> Resume
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Anik Saha</h3>
            <p className="text-slate-600 dark:text-gray-300">Software Engineer | Problem Solver | Full-Stack Developer</p>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-slate-300/80 dark:border-gray-700/50 mt-12 pt-8 text-center text-slate-500 dark:text-gray-400"
        >
          <motion.p
            animate={{
              color: ['#9ca3af', '#e5e7eb', '#9ca3af']
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center justify-center gap-2"
          >
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            ><FaHeart /></motion.span> by Anik Saha
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3"
          >
            © {new Date().getFullYear()} All rights reserved. Crafted with passion.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
