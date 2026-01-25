import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [previousSection, setPreviousSection] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClick = (section) => {
    setPreviousSection(activeSection);
    setActiveSection(section);
    if (window.innerWidth < 1200) setIsNavOpen(false);
  };

  return (
    <div className="main-container">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleNavClick}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <div className="main-content">
        <Home active={activeSection === 'home'} isBack={previousSection === 'home'} />
        <About active={activeSection === 'about'} isBack={previousSection === 'about'} setActiveSection={handleNavClick} />
        <Services active={activeSection === 'services'} isBack={previousSection === 'services'} />
        <Projects active={activeSection === 'projects'} isBack={previousSection === 'projects'} />
        <Contact active={activeSection === 'contact'} isBack={previousSection === 'contact'} />
      </div>
      <StyleSwitcher />
    </div>
  );
}

export default App;
