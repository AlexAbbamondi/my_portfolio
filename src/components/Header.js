import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Arrow from "../assets/images/up-arrow.webp";
import Resume from "../assets/pdf/Web_Developer_Resume.pdf";
import Logo from "../assets/images/Logo.webp";

const StyledHeader = styled.header`
  background-color: ${(props) => (props.isspecificpage ? 'var(--hero-navbar-bg)' : '')};
`;

const Header = ({ onToggle, showNavbar }) => {
  const location = useLocation();
  const isspecificpage = location.pathname === '/projects' || location.pathname === '/privacy-policy';

  const [navBackground, setNavBackground] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const handleNavLinkClick = () => onToggle();

  const handleScrollToTop = () => scroll.scrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setNavBackground(scrollPosition > 50);
      setShowScrollTopButton(scrollPosition > window.innerHeight * 0.7);
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
      isspecificpage={isspecificpage ? true : undefined} // Pass undefined if false
    >
      <div className="header-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <ScrollLink
            to="Hero"
            spy={true}
            smooth={true}
            duration={1000}
            offset={-70}
          >
            <img src={Logo} alt="Logo" width="65" height="65" />
          </ScrollLink>
        </motion.div>

        <nav className={`navbar ${showNavbar ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link, index) => (

                <motion.li
                  key={link.to} // Added key prop here
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ScrollLink
                    activeClass="active"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={1000}
                    onClick={handleNavLinkClick}
                  >
                    {link.to}
                  </ScrollLink>
                </motion.li>

            ))}
            <motion.li
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: .8 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <a className="button header-button" href={Resume} rel="noopener noreferrer" target="_blank">RESUME</a>
            </motion.li>
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
