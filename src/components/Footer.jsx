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
      className="py-12 px-4 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white"
    >
      <div className="container mx-auto">
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
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope /> Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaGithub /> GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
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
            <h3 className="text-xl font-bold mb-2">Anik Saha</h3>
            <p className="text-gray-400">Software Engineer | Problem Solver</p>
          </motion.div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-1">
            Made with by Anik Saha
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
