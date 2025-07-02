import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';
import data from '../data/data.json';

const Footer = () => {
  const { email, phone, github, linkedin } = data.personalInfo;

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href={`mailto:${email}`} 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope /> Email
              </a>
              <a 
                href={`tel:${phone.replace(/-/g, '')}`} 
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaPhone /> Call
              </a>
              <a 
                href={`${github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a 
                href={`${linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Anik Saha</h3>
            <p className="text-gray-400">Software Engineer | Problem Solver</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500" /> by Anik Saha
          </p>
          <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
