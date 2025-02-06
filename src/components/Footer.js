import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

import githubIcon from "../assets/images/github-white.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import signatureImage from "../assets/images/my-signature.png";
import Logo from "../assets/images/Logo.png"

import Resume from "../assets/pdf/Web_Developer_Resume.pdf";

import '../styles/footer.scss';


import { HashLink as RouterLink } from 'react-router-hash-link';

const Footer = ({ navLinks }) => {
  const year = new Date().getFullYear();

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Adjust the offset value as needed
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="Footer">
      <div className="footer-container">
        <div className="upper-footer">
          <div className="upper-footer-left">
            <p>Alex Abbamondi is a web developer and SEO expert specializing in WordPress and React.</p>
            <a className="button" href={Resume} rel="noopener noreferrer" target="_blank">RESUME</a>
            <img src={signatureImage} alt="Signature" width="211" height="55" />
          </div>
          <div className="upper-footer-middle">
            <ScrollLink
              to="Hero"
              spy={true}
              smooth={true}
              duration={1000}
              offset={-70} // Offset can be adjusted based on your layout
            >
              <img src={Logo} alt="" width="150" height="150" />
            </ScrollLink>
          </div>
          <div className="upper-footer-right">
            <nav>
              <p>Links:</p>
              <ul>
                {navLinks.map(link => (
                  <li key={link.to}>
                    <RouterLink smooth to={link.to} scroll={scrollWithOffset}>
                      {link.to.replace('/', '').replace('#', '')}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="lower-footer">
          <div className="lower-footer-left">
            <p>Alex Abbamondi • © {year} • All Rights Reserved • <a href="#">Privacy Policy</a></p>
          </div>
          <div className="lower-footer-right">
            <a href="https://www.linkedin.com/in/alexabbamondi/" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" width="35" height="35" />
            </a>
            <a href="https://github.com/AlexAbbamondi/" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
