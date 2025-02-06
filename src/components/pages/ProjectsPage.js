import React, { useEffect } from 'react';
import ProjectsSection from './ProjectsPageStyle';

import Banyan from '../../assets/images/projects/Banyan-Treatment-Center.jpg.webp';
import SanMelix from '../../assets/images/projects/SanMelix.jpg';
import MesoGuide from '../../assets/images/projects/Mesothelioma-Guide.jpg';
import CCLA from '../../assets/images/projects/CCLA.jpg';
import RedditMonitor from '../../assets/images/projects/reddit-monitor.jpg';
import BarcodeGenerator from '../../assets/images/projects/barcode-generator.jpg';
import PyCrawler from '../../assets/images/projects/PyCrawler.jpg';
import BCBHLaw from '../../assets/images/projects/bcbh-law.jpg';
import VACalc from '../../assets/images/projects/VA-Rating-Calculator.png';
import EverytownUSA from '../../assets/images/projects/Everytown-USA.jpg';
import CCSearch from '../../assets/images/projects/cancer-center-search.png';
import TechBlog from '../../assets/images/projects/tech-blog.png';

import newTab from "../../assets/images/new-tab.svg";

const projectsData = [
  {
    image: MesoGuide,
    title: "Mesothelioma Guide",
    description: "Asbestos-related cancer treatment and support provider",
    link: ""
  },
  {
    image: Banyan,
    title: "Banyan Treatment Center",
    description: "Substance abuse and mental health treatment facility",
    link: ""
  },
  {
    image: SanMelix,
    title: "beeCure",
    description: "A skincare company offering buckwheat honey products to repair and strengthen skin",
    link: ""
  },
  {
    image: BCBHLaw,
    title: "BCBH Law",
    description: "A National Plaintiffs Law Firm Dedicated to Helping the Victims of Asbestos Exposure",
    link: ""
  },
  {
    image: CCLA,
    title: "Community Christian Legal Aid",
    description: "Faith-based nonprofit providing legal assistance to underserved individuals",
    link: ""
  },
  {
    image: RedditMonitor,
    title: "Reddit Web Scraper",
    description: "Python script that monitors Reddit for posts containing specified keywords and sends email notifications",
    link: ""
  },
  {
    image: BarcodeGenerator,
    title: "UPC-A barcode Generator",
    description: "Python script used to generate a UPC-A barcode image from a given 12-digit numerical string",
    link: ""
  },
  {
    image: PyCrawler,
    title: "PyCrawler",
    description: "Python Website Crawler for locating HTML Elements, Media, and Links",
    link: ""
  },
  // {
  //   image: VACalc,
  //   title: "VA Rating Calculator",
  //   description: "This app helps users calculate combined and final disability ratings based on VA disability percentages",
  //   link: ""
  // },
  // {
  //   image: EverytownUSA,
  //   title: "Everytown, USA",
  //   description: "Interactive JavaScript map showcasing locations of asbestos exposure",
  //   link: ""
  // },
  // {
  //   image: CCSearch,
  //   title: "Mesothelioma Treatment Center Locator",
  //   description: "This app helps individuals with mesothelioma easily find specialized treatment centers near them",
  //   link: ""
  // },
  // {
  //   image: TechBlog,
  //   title: "MVC Tech Blog",
  //   description: "This Node.js app with Express lets logged in users view, create, edit, delete, and comment on blog posts",
  //   link: ""
  // }
];

const ProjectCard = ({ image, title, description, link }) => (
  <div className="project" style={{ backgroundImage: `url(${image})` }}>
    <a href={link}>
      <div className="overlay-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={newTab} alt="" width="35" height="35" />
      </div>
    </a>
  </div>
);

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ProjectsSection className="projects-page" id="ProjectsPage">
      <div className="projects-content">
        <div className="projects-text-container">
          <h1>Projects</h1>
          <p>
            I have worked on a variety of projects, including custom WordPress websites, dynamic React applications,
            and Python-based apps for tasks like data processing and backend development.
          </p>
          <p>
            My experience spans building responsive, user-friendly sites, creating interactive web apps, and
            developing scalable solutions tailored to client needs.
          </p>
        </div>

        <div className="projects-flex-container">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </ProjectsSection>
  );
};

export default ProjectsPage;
