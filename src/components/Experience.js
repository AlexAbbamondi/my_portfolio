import React, { useState } from 'react';
import "../styles/experience.scss";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="experience" id="Experience">
      <div className="experience-content">
        <h2>Where I've Worked</h2>
        <div className="job-flex-container">
          {jobs.map((job, index) => (
            <div className={`job ${activeIndex === index ? 'open' : ''}`} key={index}>
              <div
                className="job-title-flex"
                onClick={() => toggleAccordion(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="job-title-number">
                  <p>{`0${index + 1}`}</p>
                </div>
                <div className="job-title-name">
                  <h3>{job.title}</h3>
                  <span>@ {job.company}</span>
                  <p>{job.dates}</p>
                </div>
                <div className="job-accordian-icon-container">
                  <div className={`job-accordian-icon ${activeIndex === index ? 'open' : ''}`}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
              </div>

              {/* Remove inline display control */}
              <ul className={`job-description-list ${activeIndex === index ? 'visible' : ''}`}>
                {job.descriptions.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Consolidated Job Data
const jobs = [
  {
    title: 'Full-Stack Web Developer',
    company: 'BCBH Technology Services',
    dates: 'Feb 2022 – Present',
    descriptions: [
      'Developed and maintained 4 WordPress sites, primary attention on MesotheliomaGuide.com, with a focus on performance and SEO.',
      'Utilized AWS (EC2, S3, RDS, CloudFront) and Python for backend management.',
      'Created interactive React applications to enhance user engagement.',
      'Implemented technical SEO strategies, including schema and metadata optimizations.',
      'Managed security and caching using Cloudflare.',
    ],
  },
  {
    title: 'Front-End Web Developer',
    company: 'Banyan Treatment Centers',
    dates: 'Mar 2021 – Feb 2022',
    descriptions: [
      'Managed 14 WordPress sites, ensuring top performance and SEO best practices.',
      'Built custom e-commerce solutions using WooCommerce and Printful.',
      'Optimized websites with HTML, CSS, JavaScript, and Photoshop for design.',
    ],
  },
  {
    title: 'Front-End Web Developer',
    company: 'SanMelix Laboratories',
    dates: 'Sep 2020 – Mar 2021',
    descriptions: [
      'Developed a WordPress site for a buckwheat honey wound care product, utilizing Photoshop, HTML, and CSS.',
    ],
  },
];

export default Experience;
