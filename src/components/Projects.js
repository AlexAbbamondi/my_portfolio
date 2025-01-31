import React from 'react';
import { Link } from 'react-router-dom';

import Banyan from '../assets/images/projects/Banyan-Treatment-Center.jpg.webp';
import SanMelix from '../assets/images/projects/SanMelix.jpg';
import MesoGuide from '../assets/images/projects/MesoGuide.png';
import RedditMonitor from '../assets/images/projects/reddit-monitor.jpg'

import newTab from "../assets/images/new-tab.svg";

import '../styles/projects.scss';

const projectData = [
  {
    title: "Mesothelioma Guide",
    description: "Asbestos-related cancer treatment and support provider",
    image: MesoGuide,
    link: "",
  },
  {
    title: "Banyan Treatment Center",
    description: "Substance abuse and mental health treatment facility",
    image: Banyan,
    link: "",
  },
  {
    title: "beeCure",
    description: "A skincare company offering buckwheat honey products to repair and strengthen skin",
    image: SanMelix,
    link: "",
  },
  {
    title: "Reddit Web Scraper",
    description: "Python script that monitors Reddit for posts containing specified keywords and sends email notifications",
    image: RedditMonitor,
    link: "",
  },
];

const Project = ({ title, description, image, link }) => (
  <div className="project" style={image ? { backgroundImage: `url(${image})` } : {}}>
    {image ? (
      <a href={link}>
        <div className="overlay-text">
          <h3>{title}</h3>
          <p>{description}</p>
          <img src={newTab} alt="" width="35" height="35" />
        </div>
      </a>
    ) : (
      <img src={image} alt={description} className="hover-image" />
    )}
  </div>
);

const Projects = () => {
  return (
    <section className="projects" id="Projects">
      <div className="projects-content">
        <div className="projects-text-container">
          <h2>My Recent Projects</h2>
          <p>I have worked on a variety of projects, including custom WordPress websites, dynamic React applications, and Python-based apps for tasks like data processing and backend development.</p>
          <p>My experience spans building responsive, user-friendly sites, creating interactive web apps, and developing scalable solutions tailored to client needs.</p>
          <p>These are some of the recent projects I have worked on.</p>
          <Link to="/projects">View more projects ⟶</Link>
        </div>

        <div className="projects-flex-container">
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;