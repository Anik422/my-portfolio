import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import HomeSection from './HomeSection';


const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      return savedMode ? savedMode === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);

  // Check mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'education'];
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

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', newMode);
    }
  };

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      if (isMobile) {
        const start = window.pageYOffset;
        const target = element.offsetTop - 80;
        const distance = target - start;
        const duration = 500;
        let startTime = null;
        
        const animation = (currentTime) => {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, start, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        
        const ease = (t, b, c, d) => {
          t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
        };
        
        requestAnimationFrame(animation);
      } else {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      
      setActiveSection(id);
    }
  };

  return (
    <>
      <Navbar 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        scrollTo={scrollTo} 
        activeSection={activeSection}
        isMobile={isMobile}
      />
      <HomeSection 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        scrollTo={scrollTo}
      />
      {/* <DarkModeToggleButton darkMode={darkMode} toggleDarkMode={toggleDarkMode} /> */}
    </>
  );
};

export default Header;
