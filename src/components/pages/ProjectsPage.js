import React, { useEffect } from 'react';
import ProjectsSection from './ProjectsPageStyle';

import Banyan from '../../assets/images/projects/Banyan-Treatment-Center.jpg.webp';
import SanMelix from '../../assets/images/projects/SanMelix.jpg';
import MesoGuide from '../../assets/images/projects/Mesothelioma-Guide.png';
import CCLA from '../../assets/images/projects/ccla.png';
import RedditMonitor from '../../assets/images/projects/reddit-monitor.png';
import BarcodeGenerator from '../../assets/images/projects/barcode-generator.png';
import PyCrawler from '../../assets/images/projects/PyCrawler.png';
import BCBHLaw from '../../assets/images/projects/bcbh-law.png';
import VACalc from '../../assets/images/projects/VA-Rating-Calculator.png';
import EverytownUSA from '../../assets/images/projects/Everytown-USA.jpg';
import CCSearch from '../../assets/images/projects/cancer-center-search.png';
import TechBlog from '../../assets/images/projects/tech-blog.png';

import newTab from "../../assets/images/new-tab.svg";
import GitHub from '../../assets/images/github-white.svg'

const projectsData = [
  {
    image: MesoGuide,
    title: "Mesothelioma Guide",
    description: "Asbestos-related cancer treatment and support provider",
    link: "",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: Banyan,
    title: "Banyan Treatment Center",
    description: "Substance abuse and mental health treatment facility",
    link: "https://www.banyantreatmentcenter.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: SanMelix,
    title: "BeeCure",
    description: "A skincare company offering buckwheat honey products to repair and strengthen skin",
    link: "https://beecure.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: BCBHLaw,
    title: "BCBH Law",
    description: "A National Plaintiffs Law Firm Dedicated to Helping the Victims of Asbestos Exposure",
    link: "https://www.bcbhlaw.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: CCLA,
    title: "Community Christian Legal Aid",
    description: "Faith-based nonprofit providing legal assistance to underserved individuals",
    link: "https://cclegalaid.org/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: RedditMonitor,
    title: "Reddit Web Scraper",
    description: "Python script that monitors Reddit for posts containing specified keywords and sends email notifications",
    link: "https://github.com/AlexAbbamondi/Reddit-Monitor",
    icon: GitHub,
    altText: "Github Icon"
  },
  {
    image: BarcodeGenerator,
    title: "UPC-A Barcode Generator",
    description: "Python script used to generate a UPC-A barcode",
    link: "https://github.com/AlexAbbamondi/UPC-A_Barcode_Generator",
    icon: GitHub,
    altText: "Github Icon"
  },
  {
    image: PyCrawler,
    title: "PyCrawler",
    description: "Python Website Crawler for locating HTML Elements, Media, and Links",
    link: "https://github.com/AlexAbbamondi/PyCrawler",
    icon: GitHub,
    altText: "Github Icon"
  },
  {
    image: VACalc,
    title: "VA Rating Calculator",
    description: "This app helps users calculate combined and final disability ratings based on VA disability percentages",
    link: "https://www.mesotheliomaguide.com/veterans/va-benefits/va-disability-claims/#root",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: EverytownUSA,
    title: "Everytown, USA",
    description: "Interactive JavaScript map showcasing locations of asbestos exposure",
    link: "https://www.mesotheliomaguide.com/mesothelioma/causes/asbestos/everytown-usa/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: CCSearch,
    title: "Treatment Center Locator",
    description: "This app helps individuals with mesothelioma easily find specialized treatment centers near them",
    link: "https://www.mesotheliomaguide.com/cancer-centers/#root",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: TechBlog,
    title: "MVC Tech Blog",
    description: "This Node.js app with Express lets logged in users view, create, edit, delete, and comment on blog posts",
    link: "https://github.com/AlexAbbamondi/MVC-Tech-Blog",
    icon: GitHub,
    altText: "Github Icon"
  }
];

const ProjectCard = ({ image, title, description, link, icon, altText }) => (
  <div className="project" style={{ backgroundImage: `url(${image})` }}>
    <a href={link} target="_blank" rel='noreferrer noopener'>
      <div className="overlay-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <img src={icon} alt={altText} width="35" height="35" loading="lazy"/>
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
