import React from 'react';
import Slider from 'react-slick'; // Importing the slider component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Custom CSS for additional styling
import { Link } from 'react-router-dom';

const Home = () => {
  // Slider settings for smooth transitions
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // For smooth transitions
    cssEase: 'linear',
    arrows: true,
  };

  return (
    <div className="home">
      {/* Hero Slider */}
      <div className="hero-section">
      <Slider {...sliderSettings}>
        <div className="hero-slide">
          <img src="/Images/gym.png" alt="Welcome to Future Gym" className="slider-image" />
          <div className="hero-content">
            <h1 style={{color: "white"}}>Welcome to Future Gym</h1>
            <p>Your journey to fitness starts here.</p><br></br>
            <Link to="/login" className="cta-btn">Discover Courses</Link>
          </div>
        </div>
        <div className="hero-slide">
          <img src="/Images/photo1.jpg" alt="Personalized Training" className="slider-image" />
          <div className="hero-content">
            <h1 style={{color: "white"}}>Workout Planing</h1>
            <p>Get the best workout plans from our expert trainers.</p><br></br>
            <Link to="/contact" className="cta-btn">Contact Us</Link>
          </div>
        </div>
        <div className="hero-slide">
          <img src="/Images/gym1.png" alt="Personalized Training" className="slider-image" />
          <div className="hero-content">
            <h1 style={{color: "white"}}>Personalized Training</h1>
            <p>Get the best training from our expert coaches.</p><br></br>
            <Link to="/contact" className="cta-btn">Contact Us</Link>
          </div>
        </div>
      </Slider>
    </div>

      {/* Training Categories */}
      <div className="training-categories">
        <div className="category">
          <img src="/Images/strength.png" alt="Strength Training" />
          <div className="category-content">
            <h2>Strength Training</h2>
            <p>Build muscle and increase strength with our specialized programs.</p>
            <Link to="/about" className="category-btn">Learn More</Link>
          </div>
        </div>
        <div className="category">
          <img src="/Images/cardio.png" alt="Cardio" />
          <div className="category-content">
            <h2>Cardio</h2>
            <p>Improve your cardiovascular health with high-energy workouts.</p>
            <Link to="/about" className="category-btn">Learn More</Link>
          </div>
        </div>
        <div className="category">
          <img src="/Images/yoga.png" alt="Yoga" />
          <div className="category-content">
            <h2>Yoga</h2>
            <p>Find balance and flexibility with our yoga classes.</p>
            <Link to="/about" className="category-btn">Learn More</Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <img src="/Images/train.png" alt="Personal Training" />
            <h3>Personal Training</h3>
            <p>One-on-one sessions with our expert trainers.</p>
          </div>
          <div className="service">
            <img src="/Images/group.png" alt="Group Classes" />
            <h3>Group Classes</h3>
            <p>Join our vibrant group sessions for a fun workout.</p>
          </div>
          <div className="service">
            <img src="/Images/advice.png" alt="Nutrition Advice" />
            <h3>Nutrition Advice</h3>
            <p>Get personalized nutrition advice to complement your training.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section">
        <h2>Pricing Plans</h2>
        <div className="pricing">
          <div className="plan">
            <h3>Basic Plan</h3>
            <p>Rs.1000/month</p>
            <ul>
              <li>Access to all gym facilities</li>
              <li>Basic group classes</li>
              <li>Standard support</li>
            </ul>
            <Link to="/signup" className="plan-btn">Get Started</Link>
          </div>
          <div className="plan">
            <h3>Premium Plan</h3>
            <p>Rs.5000/month</p>
            <ul>
              <li>Access to all gym facilities</li>
              <li>All group classes</li>
              <li>1 personal training session per month</li>
            </ul>
            <Link to="/login" className="plan-btn">Get Started</Link>
          </div>
          <div className="plan">
            <h3>Ultimate Plan</h3>
            <p>Rs.7000/month</p>
            <ul>
              <li>Access to all gym facilities</li>
              <li>All group classes</li>
              <li>Weekly personal training sessions</li>
            </ul>
            <Link to="/login" className="plan-btn">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
