
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
import AboutPage from './AboutPage';
import ServicesPage from './ServicesPage';
import ManagePage from './pages/ManagePage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import WebServicesMarketingPage from './pages/WebServicesMarketingPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#';
      setCurrentPath(hash);
      
      if (['#/about', '#/services', '#/manage', '#/privacy', '#/terms', '#/web-services'].some(path => hash.startsWith(path))) {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    // Give the DOM a moment to settle before observing
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [currentPath]);

  const renderContent = () => {
    if (currentPath.startsWith('#/blog/')) {
      const postId = currentPath.replace('#/blog/', '');
      return <BlogPostPage postId={postId} />;
    }
    if (currentPath === '#/manage') {
      return <ManagePage />;
    }
    if (currentPath === '#/web-services') return <WebServicesMarketingPage />;
    if (currentPath === '#/about') return <AboutPage />;
    if (currentPath === '#/services') return <ServicesPage />;
    if (currentPath === '#/privacy') return <PrivacyPage />;
    if (currentPath === '#/terms') return <TermsPage />;

    return (
      <main className="animate-in fade-in duration-500">
        <Hero />
        
        <div id="services-section" className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <Services />
        </div>

        <div id="recent-work-section" className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <Projects />
        </div>

        <div className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <AIConsultant />
        </div>

        <div id="about-section" className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <About />
        </div>

        <div id="tips-section" className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <Blog />
        </div>

        <div id="contact-section" className="reveal opacity-0 translate-y-10 transition-all duration-700 ease-out">
          <Contact />
        </div>
      </main>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200">
      {/* Hide navbar on manage page for cleaner admin look */}
      {currentPath !== '#/manage' && <Navbar />}
      
      <div>
        {renderContent()}
      </div>

      {currentPath !== '#/manage' && <Footer />}

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-cyan-900/10 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
