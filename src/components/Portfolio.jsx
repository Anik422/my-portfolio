import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaChevronUp } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiHackerrank, SiCodechef } from 'react-icons/si';
import { TechIcon } from './TechIcon';
import data from '../data/data.json';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      setShowScrollToTop(window.scrollY > 300);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'problem-solving', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const renderDuration = (startDate, endDate) => {
    const start = formatDate(startDate);
    const end = endDate === 'Present' ? 'Present' : formatDate(endDate);
    return `${start} - ${end}`;
  };

  return (
    <div className="font-sans bg-gray-50 text-gray-800 min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-10">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">Anik Saha</div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'problem-solving', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize ${activeSection === section ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-500'}`}
                >
                  {section.replace('-', ' ')}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button would go here */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.personalInfo.name}</h1>
            <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">{data.personalInfo.title}</h2>
            <p className="text-lg mb-8 text-gray-700">{data.personalInfo.summary}</p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${data.personalInfo.email}`} className="flex items-center text-gray-700 hover:text-blue-600">
                <FaEnvelope className="mr-2" /> {data.personalInfo.email}
              </a>
              <a href={`tel:${data.personalInfo.phone.replace(/-/g, '')}`} className="flex items-center text-gray-700 hover:text-blue-600">
                <FaPhone className="mr-2" /> {data.personalInfo.phone}
              </a>
            </div>
            <div className="flex mt-6 space-x-4">
              <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaGithub size={24} />
              </a>
              <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
              {/* Placeholder for profile image */}
              <div className="text-6xl font-bold text-blue-300">AS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Programming Languages</h3>
            <div className="flex flex-wrap gap-4">
              {data.skills.languages.map((lang) => (
                <div key={lang} className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="mr-2"><TechIcon lang={lang} /></span>
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Technologies & Frameworks</h3>
            <div className="flex flex-wrap gap-4">
              {data.skills.technologies.map((tech) => (
                <div key={tech} className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                  <span className="mr-2"><TechIcon lang={tech} /></span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Section */}
      <section id="problem-solving" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Problem Solving</h2>
          <p className="text-lg mb-8 text-center max-w-3xl mx-auto">{data.skills.problemSolving.description}</p>
          <p className="text-lg mb-12 font-medium text-center text-blue-600">{data.skills.problemSolving.problemsSolved}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.skills.problemSolving.platforms.map((platform) => {
              const [name, url] = platform.split(' [');
              const cleanUrl = url ? url.replace(']', '') : '';
              let icon = null;
              
              if (name.includes('LeetCode')) icon = <SiLeetcode className="text-orange-500" />;
              else if (name.includes('Codeforces')) icon = <SiCodeforces className="text-red-500" />;
              else if (name.includes('HackerRank')) icon = <SiHackerrank className="text-green-500" />;
              else if (name.includes('CodeChef')) icon = <SiCodechef className="text-gray-700" />;
              else if (name.includes('AtCoder')) icon = <TechIcon lang="AtCoder" />;
              else if (name.includes('Stack Overflow')) icon = <TechIcon lang="Stack Overflow" />;
              else;
              
              return (
                <a 
                  key={name} 
                  href={cleanUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
                >
                  <div className="mr-4 text-2xl">{icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-blue-600 text-sm">{cleanUrl}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1"></div>
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-600">{renderDuration(exp.startDate, exp.endDate)}</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-4">{exp.company}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{project.type}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="flex items-center bg-gray-100 px-2 py-1 rounded text-sm">
                          <span className="mr-1"><TechIcon lang={tech} /></span>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.year}</span>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <FaGithub className="mr-1" /> View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {data.education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:justify-between mb-2">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <span className="text-gray-600">{edu.duration}</span>
                </div>
                <h4 className="text-lg text-blue-600 mb-3">{edu.institution}</h4>
                <p className="text-gray-700 mb-3">{edu.details}</p>
                <div>
                  <h5 className="font-medium mb-1">Relevant Coursework:</h5>
                  <p className="text-gray-600">{edu.coursework}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-blue-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-md mx-auto bg-white text-gray-800 rounded-lg shadow-xl p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaEnvelope className="mr-4 text-blue-600" size={20} />
                <a href={`mailto:${data.personalInfo.email}`} className="hover:underline">{data.personalInfo.email}</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-4 text-blue-600" size={20} />
                <a href={`tel:${data.personalInfo.phone.replace(/-/g, '')}`} className="hover:underline">{data.personalInfo.phone}</a>
              </div>
              <div className="flex items-center">
                <FaGithub className="mr-4 text-blue-600" size={20} />
                <a href={data.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub Profile</a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="mr-4 text-blue-600" size={20} />
                <a href={data.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} {data.personalInfo.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Scroll to top"
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;

