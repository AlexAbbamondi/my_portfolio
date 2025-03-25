import React from 'react'
import { motion } from 'framer-motion';

import HTML from "../assets/images/skills/html.svg"
import CSS from "../assets/images/skills/css.svg"
import JavaScript from "../assets/images/skills/JavaScript.svg"
import jQuery from "../assets/images/skills/jQuery.svg"
import react from "../assets/images/skills/react.svg"
import node from "../assets/images/skills/nodejs.svg"
import python from "../assets/images/skills/python.svg"
import php from "../assets/images/skills/php.png"

import wordpress from "../assets/images/skills/wordpress-icon.svg"
import woocommerce from "../assets/images/skills/woocommerce.svg"
import github from "../assets/images/skills/github.svg"
import cloudflare from "../assets/images/skills/cloudflare-icon.svg"


import aws from "../assets/images/skills/aws.svg"
import ec2 from "../assets/images/skills/ec2.png"
import lightsail from "../assets/images/skills/lightsail.svg"
import s3 from "../assets/images/skills/s3.svg"
import rds from "../assets/images/skills/rds.svg"
import cloudfront from "../assets/images/skills/cloudfront.svg"

import ga4 from "../assets/images/skills/google-analytics-4.svg"
import gsc from "../assets/images/skills/google-search-console.svg"
import semrush from "../assets/images/skills/semrush.png"
import ahrefs from "../assets/images/skills/ahrefs.svg"
import screamingfrog from "../assets/images/skills/screaming-frog.jpeg"
import jsonld from "../assets/images/skills/json-ld.svg"
import googleads from "../assets/images/skills/google-ads.svg"
import nitropack from "../assets/images/skills/nitropack.svg"
import hugo from "../assets/images/skills/hugo.png"

const Skills = () => {
    return (
        <section className='skills' id="Skills">
            <div className="skills-content">

                <motion.div
                    className="skill featured-skill"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="logo-container">
                        <img src={HTML} alt="HTML 5 logo" width="" height="" />
                        <img src={CSS} alt="CSS 3 logo" width="" height="" />
                        <img src={JavaScript} alt="JavaScript logo" width="" height="" />
                        <img src={jQuery} alt="jQuery Logo" width="" height="" />
                        <img src={react} alt="react logo" width="" height="" />
                        <img src={node} alt="node logo" width="" height="" />
                        <img src={python} alt="python logo" width="" height="" />
                        <img src={php} alt="php logo" width="" height="" />
                    </div>
                    <h3>Languages & Frameworks</h3>
                    <p>I have experience with a variety of web development technologies, both front-end and back-end, enabling me to build dynamic, responsive, and full-stack applications.</p>
                    <p className='skills-used'>HTML, CSS, JavaScript, React, Node.js, PHP, Python, Java, C#, MySQL, MongoDB</p>
                </motion.div>
                <div className="skills-flex-container">
                <motion.div
                    className="skill"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                        <div className="logo-container">
                            <img src={wordpress} alt="WordPress logo" width="" height="" loading="lazy" />
                            <img src={woocommerce} alt="WooCommerce logo" width="" height="" loading="lazy" />
                            <img src={github} alt="Github logo" width="" height="" loading="lazy" />
                            <img src={hugo} alt="hugo logo" width="" height="" loading="lazy" />
                            <img src={cloudflare} alt="Cloudflare logo" width="" height="" loading="lazy" />
                            <img src={nitropack} alt="NitroPack logo" width="" height="" loading="lazy" />
                        </div>
                        <h3>CMS & Tools</h3>
                        <p>I leverage a variety of content management systems (CMS) and tools to streamline development, enhance workflow efficiency, and optimize web performance.</p>
                        <p className='skills-used'>WordPress, WooCommerce, Git, Hugo, Cloudflare</p>
                    </motion.div>
                    <motion.div
                    className="skill"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: .2 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                        <div className="logo-container">
                            <img src={aws} alt="AWS logo" width="" height="" loading="lazy" />
                            <img src={ec2} alt="ec2 logo" width="" height="" loading="lazy" />
                            <img src={lightsail} alt="Lightsail logo" width="" height="" loading="lazy" />
                            <img src={s3} alt="S3 Bucket logo" width="" height="" loading="lazy" />
                            <img src={rds} alt="RDS logo" width="" height="" loading="lazy" />
                            <img src={cloudfront} alt="Cloudfront logo" width="" height="" loading="lazy" />
                        </div>
                        <h3>SEO</h3>
                        <p>I have experience in optimizing websites to improve their search engine visibility, user experience, and overall performance.</p>
                        <p className='skills-used'>Technical SEO, Schemas, SEMrush, Ahrefs, GA, Screaming Frog, GSC</p>
                    </motion.div>
                    <motion.div
                    className="skill"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: .4 }}
                    viewport={{ once: true, amount: 0.7 }}
                >
                        <div className="logo-container">
                            <img src={ga4} alt="GA4 logo" width="" height="" loading="lazy" />
                            <img src={gsc} alt="Google Search Console logo" width="" height="" loading="lazy" />
                            <img src={screamingfrog} alt="Screaming Frog logo" width="" height="" loading="lazy" />
                            <img src={jsonld} alt="json-ld logo" width="" height="" loading="lazy" />
                            <img src={googleads} alt="GoogleAds logo" width="" height="" loading="lazy" />
                            <img src={semrush} alt="Semrush logo" width="" height="" loading="lazy" />
                            <img src={ahrefs} alt="ahrefs logo" width="" height="" loading="lazy" />
                        </div>
                        <h3>Cloud</h3>
                        <p>I have hands-on experience with Amazon Web Services (AWS), utilizing a range of cloud computing services to deploy, manage, and scale web applications and infrastructure efficiently.</p>
                        <p className='skills-used'>AWS (EC2, S3, RDS, LightSail, CloudFront)</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Skills