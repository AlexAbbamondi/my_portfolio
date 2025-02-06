import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import HeaderWrapper from './components/HeaderWrapper'; // Import the HeaderWrapper
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/pages/ProjectsPage';

import './App.scss';

function App() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setIsBlurred(!isBlurred);
  };

  const handleMainClick = () => {
    if (showNavbar) {
      setShowNavbar(false);
      setIsBlurred(false);
    }
  };

  const getNavLinks = () => {
    const basePath = location.pathname === '/projects' ? '/' : '';
    return [
      { to: `${basePath}#Skills`, offset: -120 },
      { to: `${basePath}#Experience`, offset: -70 },
      { to: `${basePath}#Projects`, offset: -70 },
      { to: `${basePath}#Contact`, offset: -70 }
    ];
  };

  return (

    <div className="App">
      <HeaderWrapper onToggle={handleShowNavbar} showNavbar={showNavbar} />
      <main className={`main ${isBlurred ? 'blur' : ''}`} onClick={handleMainClick}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
      <Footer navLinks={getNavLinks()} />
    </div>

  );
}

export default App;
