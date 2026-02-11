import React from 'react';
import './styles/ourstory.css';
import AnimatedCounter from '../components/AnimatedCounter';

const OurStory = () => {
  return (
    <div className="ourstory-page">
      {/* Hero Section */}
      <div className="ourstory-hero">
        <div className="ourstory-hero-content">
          <p className="ourstory-hero-label animate-fade-in-down">About Us</p>
          <h1 className="ourstory-hero-title animate-fade-in-up animate-delay-200">Our Story</h1>
          <p className="ourstory-hero-subtitle animate-fade-in-up animate-delay-400">
            The journey of empowering social entrepreneurs at Samriddhi College
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="ourstory-content">
        <div className="ourstory-sections">
          <div className="ourstory-section">
            <h2>How It All Began</h2>
            <p>
              Hult Prize at Samriddhi College was founded with a vision to transform students into
              changemakers. Since our inception, we've been dedicated to creating a platform where
              innovative ideas meet real-world impact, empowering the next generation of social
              entrepreneurs to tackle the world's most pressing challenges.
            </p>
          </div>

          <div className="ourstory-section">
            <h2>Our Journey</h2>
            <p>
              Over the years, we've grown from a small group of passionate students to a thriving
              community of innovators, mentors, and changemakers. Our teams have competed at national
              and international levels, bringing home recognition and making a tangible difference in
              communities across Nepal and beyond.
            </p>
          </div>

          <div className="ourstory-section">
            <h2>Looking Forward</h2>
            <p>
              As we continue to grow, our commitment remains unchanged: to nurture talent, foster
              innovation, and create sustainable solutions for global challenges. We're building a
              legacy of impact, one project at a time, one entrepreneur at a time.
            </p>
          </div>

          {/* Stats Section */}
          <div className="ourstory-stats">
            <div className="ourstory-stat">
              <div className="ourstory-stat-number">
                <AnimatedCounter end={4} suffix="+" />
              </div>
              <div className="ourstory-stat-label">Years Active</div>
            </div>
            <div className="ourstory-stat">
              <div className="ourstory-stat-number">
                <AnimatedCounter end={14} suffix="+" />
              </div>
              <div className="ourstory-stat-label">Teams Formed</div>
            </div>
            <div className="ourstory-stat">
              <div className="ourstory-stat-number">
                <AnimatedCounter end={70} suffix="+" />
              </div>
              <div className="ourstory-stat-label">Students Engaged</div>
            </div>
            <div className="ourstory-stat">
              <div className="ourstory-stat-number">
                 <AnimatedCounter end={350} suffix="+" />
              </div>
              <div className="ourstory-stat-label">Total Participants</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;