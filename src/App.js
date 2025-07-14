
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/projects';
import Team from './components/Team';
import Contact from './components/contact';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App font-sans text-gray-900 bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center text-sm py-6">
        © 2025 WebThrive. Made with ❤️ by the team.
      </footer>
    </div>
  );
}

export default App;

