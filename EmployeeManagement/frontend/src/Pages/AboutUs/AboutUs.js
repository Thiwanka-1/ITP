import React from 'react';
import './AboutUs.css'; // Ensure appropriate styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Future Gym</h1>

      {/* Introduction */}
      <section className="about-section">
        <h2>Welcome to Future Gym</h2>
        <p>
          Future Gym is your destination for achieving your fitness and wellness goals. Located in the heart of the city, we offer a range of facilities and programs designed to help you on your fitness journey. Our state-of-the-art equipment, experienced trainers, and supportive community create an environment where you can thrive.
        </p>
      </section>

      {/* Mission and Values */}
      <section className="about-section">
        <h2>Our Mission and Values</h2>
        <p>
          Our mission is to empower individuals to lead healthier lives through personalized training, innovative fitness programs, and a strong sense of community. We value inclusivity, diversity, and respect for all our members. We believe that fitness is not just about working out; it's about building a lifestyle that promotes well-being and happiness.
        </p>
      </section>

      {/* Services and Facilities */}
      <section className="about-section">
        <h2>Our Services and Facilities</h2>
        <p>
          Future Gym offers a wide range of services to meet your fitness needs. From personal training sessions with certified coaches to group classes in yoga, aerobics, and high-intensity interval training, we have something for everyone. Our facilities include modern gym equipment, a dedicated cardio area, and a wellness center for relaxation and recovery.
        </p>
        <ul>
          <li>Personal training sessions with certified trainers</li>
          <li>Group classes including yoga, aerobics, and HIIT</li>
          <li>Advanced strength training and cardio equipment</li>
          <li>Wellness center with massage therapy and sauna</li>
          <li>Nutrition advice and customized workout plans</li>
        </ul>
      </section>

      {/* The Team */}
      <section className="about-section">
        <h2>Meet Our Team</h2>
        <p>
          Our team is at the core of what makes Future Gym special. Our trainers are certified professionals with diverse backgrounds in fitness, nutrition, and wellness. They are dedicated to helping you achieve your fitness goals while ensuring you have fun along the way. Get to know our team members and discover how they can guide you on your fitness journey.
        </p>
      </section>

      {/* Community and Culture */}
      <section className="about-section">
        <h2>Our Community and Culture</h2>
        <p>
          At Future Gym, we foster a strong sense of community. Our members are like family, and we create opportunities for everyone to connect, support each other, and achieve their fitness goals together. From social events to group workouts, we believe in creating a positive and inclusive environment for all.
        </p>
        <p>
          We regularly host events, workshops, and charity drives to engage our community. We believe that giving back is an essential part of our mission, and we encourage our members to participate in these activities.
        </p>
      </section>

      {/* Sustainability and Social Responsibility */}
      <section className="about-section">
        <h2>Sustainability and Social Responsibility</h2>
        <p>
          Future Gym is committed to sustainability and social responsibility. We use eco-friendly products, recycle waste, and aim to reduce our carbon footprint. We also support local charities and participate in community service projects, demonstrating our commitment to making a positive impact beyond the gym.
        </p>
      </section>

      {/* Call to Action */}
      <section className="about-section">
        <h2>Ready to Join?</h2>
        <p>
          If you're ready to start your fitness journey with us, we'd love to welcome you to Future Gym. Contact us today to learn more about our membership plans and classes. Let's achieve greatness together!
        </p>
        <button onClick={() => window.location.href = '/contact'} className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;
