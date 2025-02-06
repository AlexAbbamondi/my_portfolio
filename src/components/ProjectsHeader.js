import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import Resume from "../assets/pdf/Web_Developer_Resume.pdf";
import Logo from "../assets/images/Logo.png";

const ProjectHeader = ({ onToggle, showNavbar }) => {

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
                        <li><Link to="/#Skills" className="home-link">Skills</Link></li>
                        <li><Link to="/#Experience" className="home-link">Experience</Link></li>
                        <li><Link to="/#Projects" className="home-link">Projects</Link></li>
                        <li><Link to="/#Contact" className="home-link">Contact</Link></li>
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
        </header>
    );
};

export default ProjectHeader;
