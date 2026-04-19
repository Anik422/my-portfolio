import React, { Suspense, lazy } from 'react';
import Header from './components/Header';

// Lazy load components for better performance
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Footer = lazy(() => import('./components/Footer'));

// Loading component
const Loading = () => (
  <div className="py-20 text-center text-gray-600 dark:text-gray-400">
    <div className="inline-block">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<Loading />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Education />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;