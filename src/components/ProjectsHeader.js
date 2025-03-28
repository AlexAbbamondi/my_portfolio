import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Arrow from "../assets/images/up-arrow.webp";
import Resume from "../assets/pdf/Web_Developer_Resume.pdf";
import Logo from "../assets/images/Logo.webp";

const DEFAULT_OFFSET = -70;
const SKILLS_OFFSET = -180;

const jumpToSectionWithOffset = (el, offset) => {
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition + offset;

    window.scrollTo(0, offsetPosition);
};

const ProjectHeader = ({ onToggle, showNavbar }) => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    const handleScrollToTop = () => window.scrollTo(0, 0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowScrollTopButton(scrollPosition > window.innerHeight * 0.7);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header style={{ backgroundColor: "#09101c" }} className="header">
            <div className="header-container">
                <div className="logo">
                    <a href='/'>
                        <img src={Logo} alt="" width="60" height="60" />
                    </a>
                </div>
                <nav className={`navbar ${showNavbar ? 'active' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className="home-link">Home</Link></li>
                        <li>
                            <Link 
                                to="/#Skills" 
                                className="home-link"
                                scroll={(el) => jumpToSectionWithOffset(el, SKILLS_OFFSET)}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#Experience" 
                                className="home-link"
                                scroll={(el) => jumpToSectionWithOffset(el, DEFAULT_OFFSET)}
                            >
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#Projects" 
                                className="home-link"
                                scroll={(el) => jumpToSectionWithOffset(el, DEFAULT_OFFSET)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/#Contact" 
                                className="home-link"
                                scroll={(el) => jumpToSectionWithOffset(el, DEFAULT_OFFSET)}
                            >
                                Contact
                            </Link>
                        </li>
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
        </header>
    );
};

export default ProjectHeader;
