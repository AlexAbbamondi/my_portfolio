import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail, validateName, validateForm } from '../utils/validation';
import { motion } from 'framer-motion';

import '../styles/contact.scss'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!validateName(formData.name)) {
      validationErrors.name = 'Invalid Name';
    }
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid Email';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Use emailjs to send the email
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          console.log('Email successfully sent!', result.text);
        }, (error) => {
          console.log('Failed to send email. Error:', error.text);
        });
    }
  };

  return (
    <section className="contact" id="Contact">
      <div className="contact-content">
        <div className="contact-flex-container">
          <motion.div
            className="contact-text-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .1 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h2>Let’s Collaborate to Create a Seamless, High-Performing Web Experience.</h2>
            <p>Get in touch to discuss your project! Whether you need front-end development, responsive web design, or SEO optimization, I’m here to help. Fill out the form below, and I’ll get back to you as soon as possible. Let's bring your vision to life!</p>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: .3 }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <form onSubmit={handleSubmit}>
              <h3>Connect With Me</h3>
              <div className="input-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              </div>

              <div className="input-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" />
              </div>

              <input type="submit" value="Send" id="Submit" />
              <p>I respect your privacy. Your information is used solely to respond to your inquiry.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;