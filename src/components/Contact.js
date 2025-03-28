import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail, validateName, validateMessage } from '../utils/validation';
import { motion } from 'framer-motion';

import CheckMark from '../assets/images/checkmark.svg'

import '../styles/contact.scss';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_KEY);
  }, []);
  
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

    if (!validateName(formData.user_name)) {
      validationErrors.user_name = 'Invalid Name';
    }
    if (!validateEmail(formData.user_email)) {
      validationErrors.user_email = 'Invalid Email';
    }
    if (!validateMessage(formData.message)) {
      validationErrors.message = 'Message Required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_KEY
      )
      .then(
        () => {
          setFormData({ user_name: '', user_email: '', message: '' });
          setErrors('');
          setIsSubmitted(true);
        },
        (error) => {
          setErrors('Something went wrong. Please try again later.');
        }
      );
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
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Let’s Collaborate to Create a Seamless, High-Performing Web Experience.</h2>
            <p>Get in touch to discuss your project! Whether you need front-end development, responsive web design, or SEO optimization, I'’'m here to help.</p>
            <p>Fill out the form, and I'll get back to you as soon as possible. Let's bring your vision to life!</p>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {!isSubmitted ? (
              <form id="contact-form" onSubmit={handleSubmit} ref={form}>
                <h3>Connect With Me</h3>
                <div className="input-field">
                  <label htmlFor="user_name">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                  />
                  {errors.user_name && <span style={{ color: 'red', fontWeight: '500' }}>{errors.user_name}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="user_email">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                  />
                  {errors.user_email && <span style={{ color: 'red', fontWeight: '500' }}>{errors.user_email}</span>}
                </div>

                <div className="input-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <span style={{ color: 'red', fontWeight: '500' }}>{errors.message}</span>}
                </div>

                <input type="submit" value="Send" id="Submit" />
                <p>I respect your privacy. Your information is used solely to respond to your inquiry.</p>
              </form>
            ) : (
              <div className="success-message">
                  <img src={CheckMark} alt='' width='65' height='65'/>
                <div className="success-message-text">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. I'll get back to you soon.</p>
                </div>

              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
