import React, { useEffect } from 'react'
import ProjectsSection from './ProjectsPageStyle';

import Banyan from '../../assets/images/projects/Banyan-Treatment-Center.jpg.webp'
import SanMelix from '../../assets/images/projects/SanMelix.jpg'
import MesoGuide from '../../assets/images/projects/MesoGuide.png'
import CCLA from '../../assets/images/projects/ccla.jpg'
import RedditMonitor from '../../assets/images/projects/reddit-monitor.jpg'
import BarcodeGenerator from '../../assets/images/projects/barcode-generator.jpg'

import newTab from "../../assets/images/new-tab.svg"


const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <ProjectsSection className="projects-page" id="ProjectsPage">
            <div className="projects-content">
                <div className="projects-text-container">
                    <h1>Projects</h1>
                    <p>I have worked on a variety of projects, including custom WordPress websites, dynamic React applications, and Python-based apps for tasks like data processing and backend development.</p>
                    <p>My experience spans building responsive, user-friendly sites, creating interactive web apps, and developing scalable solutions tailored to client needs.</p>
                </div>

                <div className="projects-flex-container">
                    <div className="project" style={{ backgroundImage: 'url(' + MesoGuide + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>Mesothelioma Guide</h3>
                                <p>Asbestos-related cancer treatment and support provider</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                    <div className="project" style={{ backgroundImage: 'url(' + Banyan + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>Banyan Treatment Center</h3>
                                <p>Substance abuse and mental health treatment facility</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                    <div className="project" style={{ backgroundImage: 'url(' + SanMelix + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>beeCure</h3>
                                <p>A skincare company offering buckwheat honey products to repair and strengthen skin</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                    <div className="project" style={{ backgroundImage: 'url(' + RedditMonitor + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>Reddit Web Scraper</h3>
                                <p>Python script that monitors Reddit for posts containing specified keywords and sends email notifications</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                    <div className="project" style={{ backgroundImage: 'url(' + CCLA + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>Community Christian Legal Aid</h3>
                                <p>Faith-based nonprofit providing legal assistance to underserved individuals</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                    <div className="project" style={{ backgroundImage: 'url(' + BarcodeGenerator + ')' }}>
                        <a href="">
                            <div className="overlay-text">
                                <h3>UPC-A barcode Generator</h3>
                                <p>Python script used to generate a UPC-A barcode image from a given 12-digit numerical string</p>
                                <img src={newTab} alt="" width="35" height="35" />
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </ProjectsSection>
    )
}


export default ProjectsPage