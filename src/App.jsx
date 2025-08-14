import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import Fiverr from './components/Fiverr'; // <-- এই লাইনটি যোগ করুন

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Skills />
        <Experience />
        <Projects />
        <Fiverr /> {/* <-- এই লাইনটি এখানে যোগ করুন */}
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;