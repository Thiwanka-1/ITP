import React from 'react';
import './ContactUs.css'; // Ensure appropriate styling

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>
        At Future Gym, we're here to assist you with any questions or concerns. Whether you're interested in our training programs, classes, or general information, you can reach out to us through the following channels.
      </p>
      
      {/* Contact Information Section */}
      <div className="contact-info-section">
        <h2>Location</h2>
        <p>
          Future Gym<br />
          123 Fitness Street<br />
          Workout City, ST 12345
        </p>

        <h2>Phone Numbers</h2>
        <p>
          Main Office: (123) 456-7890<br />
          Support: (123) 456-7891<br />
          Membership: (123) 456-7892
        </p>

        <h2>Email Addresses</h2>
        <p>
          General Inquiries: info@futuregym.com<br />
          Support: support@futuregym.com<br />
          Membership: membership@futuregym.com
        </p>

        <h2>Social Media</h2>
        <p>
          Follow us on social media to stay updated with the latest news, events, and special offers.
        </p>
        <ul className="social-media-links">
          <li><a href="https://facebook.com/futuregym" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com/futuregym" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com/futuregym" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>

      {/* Business Hours */}
      <div className="contact-info-section">
        <h2>Business Hours</h2>
        <p>
          Monday to Friday: 6:00 AM - 10:00 PM<br />
          Saturday: 8:00 AM - 8:00 PM<br />
          Sunday: 10:00 AM - 6:00 PM
        </p>
      </div>
      
      {/* Additional Information */}
      <div className="contact-info-section">
        <h2>Additional Information</h2>
        <p>
          If you have any other questions or need specific assistance, please don't hesitate to contact us. We look forward to hearing from you and helping you on your fitness journey.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
