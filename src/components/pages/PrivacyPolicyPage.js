import React, { useEffect } from 'react'
import '../../styles/privacy-policy.scss'

export const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="privacy-policy" id="PrivacyPolicy">
            <div className="privacy-policy-content">
                <div className='privacy-policy-intro'>
                    <h1>Privacy Policy</h1>
                    <h2>Introduction</h2>
                    <p>Welcome to my portfolio website! Your privacy is very important to me. This Privacy Policy outlines the types of personal information that is collected and recorded on this website, how it is used, and the steps taken to protect it.</p>

                    <p>By using this website, you agree to the collection and use of information in accordance with this policy.</p>
                </div>
                <h2>Information Collection</h2>
                <h3 className='personal-information-h3'>Personal Information</h3>
                <p>When you contact me via my website's contact form, you may be asked to provide certain personally identifiable information, including but not limited to:</p>

                <ul>
                    <li>Your name</li>
                    <li>Your email address</li>
                    <li>Your message</li>
                </ul>
                <p> This information is used solely to respond to your inquiry and is not shared with third parties unless required by law.</p>

                <h3>Automatically Collected Information</h3>
                <p>Like many websites, this site collects information automatically when you visit, such as your IP address, browser type, and referring pages. This information is used for analytics purposes, to improve the performance and functionality of the website.</p>

                <h3>How We Use Your Information</h3>
                <p>The information collected from you may be used in the following ways:</p>

                <ul>
                    <li>To respond to your inquiries or requests</li>
                    <li>To improve my website and services</li>
                    <li>To send periodic emails, if you have opted in to receive communication</li>
                    <li>I will never sell or trade your personal information to third parties.</li>
                </ul>

                <h3>Cookies</h3>
                <p>Cookies are small files stored on your device that help enhance your experience on the website. These cookies may store your preferences, session data, and improve website functionality. You can choose to disable cookies through your browser settings, but this may affect your experience on the site.</p>

                <h3>Data Retention</h3>
                <p>I retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy. If you no longer wish for me to retain your information, you can request its deletion by contacting me directly.</p>

                <h3>Data Security</h3>
                <p>I take reasonable steps to protect your personal data from unauthorized access or disclosure. However, no method of transmission over the internet is completely secure, and I cannot guarantee absolute security. By using the website, you acknowledge that there are risks involved in transmitting personal data over the internet.</p>

                <h3>Third-Party Links</h3>
                <p>This website may contain links to third-party websites. These third-party sites have their own privacy policies, which I encourage you to review. I am not responsible for the content or practices of these third-party sites.</p>

                <h3>Your Rights</h3>
                <p>Depending on your location, you may have the following rights regarding your personal information:</p>

                <ul>
                    <li>The right to access your personal data</li>
                    <li>The right to correct any inaccurate or incomplete data</li>
                    <li>The right to request the deletion of your personal data</li>
                    <li>The right to object to or restrict the processing of your data</li>
                    <li>The right to data portability</li>
                </ul>
                <p>If you wish to exercise any of these rights or have any questions about your data, please contact me at <a href="mailto:alex.abbamondi@gmail.com">Alex.Abbamondi@gmail.com</a>.</p>

                <h3>Changes to This Privacy Policy</h3>
                <p>I may update this Privacy Policy from time to time. When changes are made, the updated policy will be posted on this page with the date of the latest revision. Please review this page periodically to stay informed about how I am protecting your data.</p>

                <h3>Contact Information</h3>
                <p>If you have any questions about this Privacy Policy or how your data is handled, feel free to contact me at:</p>

                <ul>
                    <li><strong>Email:</strong> <a href="mailto:alex.abbamondi@gmail.com">Alex.Abbamondi@gmail.com</a></li>
                </ul>
            </div>
        </section>
        
    )
}

export default PrivacyPolicy