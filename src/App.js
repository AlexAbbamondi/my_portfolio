import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectsPage from './components/pages/ProjectsPage'; // Import the new projects page

import './App.scss';
import ProjectsSection from './components/pages/ProjectsPageStyle';

function App() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

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

  return (
    <Router>
      <div className="App">
        <Header onToggle={handleShowNavbar} showNavbar={showNavbar} />
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
            <Route path="/projects" element={<ProjectsPage />} component={ProjectsSection} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
