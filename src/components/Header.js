import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Arrow from "../assets/images/up-arrow.png";
import Resume from "../assets/pdf/Web_Developer_Resume.pdf";
import Logo from "../assets/images/Logo.png"

const StyledHeader = styled.header`
  background-color: ${(props) => (props.isspecificpage ? 'var(--hero-navbar-bg)' : '')};
`;

const Header = ({ onToggle, showNavbar }) => {
  const location = useLocation();
  const isspecificpage = location.pathname === '/projects';

  const [navBackground, setNavBackground] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleNavLinkClick = () => onToggle();

  const handleScrollToTop = () => scroll.scrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavBackground(scrollPosition > 50);
      setShowScrollTopButton(scrollPosition > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "Skills", offset: -120 },
    { to: "Experience", offset: -70 },
    { to: "Projects", offset: -70 },
    { to: "Contact", offset: -70 }
  ];

  return (
    <StyledHeader 
  className={`header ${navBackground ? 'scrolled' : ''}`} 
  isspecificpage={isspecificpage ? 'true' : undefined}
>

      <div className="header-container">
        <div className="logo">
        <img src={Logo} alt="" width="60" height="60" />
        </div>
        <nav className={`navbar ${showNavbar ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={link.offset}
                  duration={1000}
                  onClick={handleNavLinkClick}
                >
                  {link.to}
                </Link>
              </li>
            ))}
            <li>
              <a className="button header-button" href={Resume} rel="noopener noreferrer" target="_blank">RESUME</a>
            </li>
          </ul>
        </nav>
        <div id="hamburger" className={`hamburger ${showNavbar ? 'toggle' : ''}`} onClick={onToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showScrollTopButton && (
        <button className="back-to-top" onClick={handleScrollToTop}>
          <img src={Arrow} alt="Back to top" width="30" height="30" />
        </button>
      )}
    </StyledHeader>
  );
};

export default Header;