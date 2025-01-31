import React from 'react';
import { Link } from 'react-scroll';

import githubIcon from "../assets/images/github-white.svg";
import linkedinIcon from "../assets/images/linkedin.svg";
import signatureImage from "../assets/images/my-signature.png";
import Logo from "../assets/images/Logo.png"

import Resume from "../assets/pdf/Web_Developer_Resume.pdf";

import '../styles/footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const navLinks = [
    { to: "Skills", offset: -120 },
    { to: "Experience", offset: -70 },
    { to: "Projects", offset: -70 },
    { to: "Contact", offset: -70 }
  ];

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
            <img src={Logo} alt="" width="100" height="100" />
          </div>
          <div className="upper-footer-right">
            <nav>
              <p>Links:</p>
              <ul>
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link
                      activeClass="active"
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                    >
                      {link.to}
                    </Link>
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
              <img src={linkedinIcon} alt="LinkedIn" width="25" height="25" />
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