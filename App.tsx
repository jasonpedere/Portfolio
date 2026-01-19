
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AIConsultant from './components/AIConsultant';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';

const App: React.FC = () => {
  console.log('App component rendering');
  // Use a cleaner path state
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    console.log('App useEffect running');
    const handleHashChange = () => {
      const hash = window.location.hash || '#';
      setCurrentPath(hash);
      
      // If we are navigating to a dedicated page, scroll to top
      if (hash.startsWith('#/about') || hash.startsWith('#/services')) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial reveal observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
    };
  }, []);

  // Dedicated Page Logic
  const renderContent = () => {
    // Explicitly check for our dedicated page routes
    if (currentPath === '#/about') {
      return <AboutPage />;
    }
    if (currentPath === '#/services') {
      return <ServicesPage />;
    }

    // Default: Render the Landing Page (Home)
    return (
      <main>
        <Hero />
        
        <div id="services-section" className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Services />
        </div>

        <div id="recent-work-section" className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Projects />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <AIConsultant />
        </div>

        <div id="about-section" className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <About />
        </div>

        <div id="tips-section" className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Blog />
        </div>

        <div id="contact-section" className="reveal opacity-0 translate-y-10 transition-all duration-1000">
          <Contact />
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      
      <div>
        {renderContent()}
      </div>

      <Footer />

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-cyan-900/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
