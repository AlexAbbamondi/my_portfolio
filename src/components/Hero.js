import React, { useRef } from 'react';
import { Link } from 'react-scroll';

import signature from "../assets/images/my-signature.png";
import Halo from './nightsky';

const Hero = () => {
    const myRef = useRef(null);

    return (
        <section className="hero" ref={myRef}>
            <Halo myRef={myRef} />
            <div className="hero-content">
                <h1>Hi! My Name is Alex.</h1>
                <h2>
                    <span>Web</span> Developer<br/>
                    <span>& Tech</span> SEO Specialist
                </h2>
                <p>Welcome to my portfolio! I'm a full-stack web developer with 4+ years of experience, specializing in front-end development. Skilled in <span>WordPress, React, AWS, and technical SEO</span>, I build and optimize websites for better performance and user engagement, utilizing custom development and SEO strategies.</p>
                <img src={signature} className="signature" alt="" width="" height="" />
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
            </div>
        </section>
    );
}

export default Hero;
