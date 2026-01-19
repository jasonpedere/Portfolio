import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="services-section" className="py-24">
          <Services />
        </div>

        <div id="recent-work-section" className="py-24">
          <Projects />
        </div>

        <div id="about-section" className="py-24">
          <About />
        </div>

        <div id="contact-section" className="py-24">
          <Contact />
        </div>
      </main>

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

