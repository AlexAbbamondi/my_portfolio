import React, { useRef } from 'react';
import { Link } from 'react-scroll';

import signature from "../assets/images/my-signature.webp";
import Halo from './halo';
import { motion } from 'framer-motion';

const Hero = () => {
    const myRef = useRef(null);

    return (
        <section className="hero" id="Hero" ref={myRef}>
            <Halo myRef={myRef} />
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Hi! My Name is Alex.
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true, amount: 0.5 }}
                >

                    <span>Web</span> Developer<br />
                    <span>& Tech</span> SEO Specialist

                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    Welcome to my portfolio! I'm a full-stack web developer with 4+ years of experience, specializing in front-end development. Skilled in <span>WordPress, React, AWS, and technical SEO</span>, I build and optimize websites for better performance and user engagement, utilizing custom development and SEO strategies.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <img src={signature} className="signature" alt="Alex Abbamondi signature" width="422" height="110" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                <Link
                    className="button"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Get in Touch
                </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
