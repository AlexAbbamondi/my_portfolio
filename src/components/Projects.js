import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useLazyLoadBackground from '../utils/useLazyLoadBackground';

import Banyan from '../assets/images/projects/Banyan-Treatment-Center.webp';
import SanMelix from '../assets/images/projects/SanMelix.webp';
import MesoGuide from '../assets/images/projects/Mesothelioma-Guide.webp';
import RedditMonitor from '../assets/images/projects/reddit-monitor.webp';

import newTab from "../assets/images/new-tab.svg";
import GitHub from '../assets/images/github-white.svg';

import '../styles/projects.scss';

const projectData = [
  {
    image: MesoGuide,
    title: "Mesothelioma Guide",
    description: "Asbestos-related cancer treatment and support provider...",
    link: "https://www.mesotheliomaguide.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: Banyan,
    title: "Banyan Treatment Center",
    description: "Substance abuse and mental health treatment facility...",
    link: "https://www.banyantreatmentcenter.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: SanMelix,
    title: "BeeCure",
    description: "A skincare company offering buckwheat honey products to repair and strengthen skin...",
    link: "https://beecure.com/",
    icon: newTab,
    altText: "New Tab Icon"
  },
  {
    image: RedditMonitor,
    title: "Reddit Web Scraper",
    description: "Python script that monitors Reddit for posts containing specified keywords...",
    link: "https://github.com/AlexAbbamondi/Reddit-Monitor",
    icon: GitHub,
    altText: "Github Icon"
  },
];

const Project = ({ title, description, image, link, index, icon, altText }) => {
  const [elementRef, isLoaded] = useLazyLoadBackground();

  return (
    <motion.div
      ref={elementRef}
      className="project"
      style={isLoaded ? { backgroundImage: `url(${image})` } : {}}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <a href={link} target="_blank" rel='noreferrer noopener'>
        <div className="overlay-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={icon} alt={altText} width="35" height="35" loading="lazy" />
        </div>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <div className="projects-content">
        <motion.div
          className="projects-text-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2>My Recent Projects</h2>
          <p>I have worked on a variety of projects, including custom WordPress websites, dynamic React applications, and Python-based apps for tasks like data processing and backend development.</p>
          <p>My experience spans building responsive, user-friendly sites, creating interactive web apps, and developing scalable solutions tailored to client needs.</p>
          <p>These are some of the recent projects I have worked on.</p>
          <div className='projects-page-link-container'>
            <Link to="/projects">View more projects ⟶</Link>
          </div>
        </motion.div>

        <div className="projects-flex-container">
          {projectData.map((project, index) => (
            <Project key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;