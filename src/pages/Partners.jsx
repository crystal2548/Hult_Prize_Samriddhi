import React from 'react';
import './styles/partners.css';

const Partners = () => {
  const sponsors = [
    "Nepal Telecom",
    "Nabil Bank",
    "Vianet Communications",
    "Chaudhary Nepal",
    "Surya Bank",
    "Laxmi Group"
  ];

  const mediaPartners = [
    "Kantipur Publications",
    "The Himalayan Times",
    "Online Khabar",
    "Setopati"
  ];

  return (
    <div className="partners-page">
      {/* Hero Section */}
      <div className="partners-hero">
        <div className="partners-hero-content">
          <p className="partners-hero-label animate-fade-in-down">Meet Our</p>
          <h1 className="partners-hero-title animate-fade-in-up animate-delay-200">Our Partners</h1>
          <p className="partners-hero-subtitle animate-fade-in-up animate-delay-400">
            Working together to empower the next generation of changemakers
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="partners-content">
        {/* Introduction */}
        <div className="partners-intro">
          <h2 className="partners-intro-title">
            Building Success Together
          </h2>
          <p className="partners-intro-text">
            Our success would not be possible without the generous support of our partners and sponsors.
            Together, we're creating opportunities for students to innovate, compete, and make a real
            difference in the world.
          </p>
        </div>

        {/* Valued Sponsors */}
        <div className="partners-section">
          <h3 className="partners-section-title">Our Valued Sponsors</h3>
          <div className="partners-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="partner-card">
                <span className="partner-name">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        <div className="partners-section">
          <h3 className="partners-section-title">Media Partners</h3>
          <div className="partners-grid media-partners-grid">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="partner-card media-partner-card">
                <span className="partner-name media-partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="partners-benefits">
          <h3 className="partners-benefits-title">Why Partner With Us?</h3>
          <div className="partners-benefits-grid">
            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">🎯</div>
              <h4 className="partners-benefit-title">Brand Visibility</h4>
              <p className="partners-benefit-text">
                Reach hundreds of talented students and faculty members while showcasing your commitment to education and innovation.
              </p>
            </div>

            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">💼</div>
              <h4 className="partners-benefit-title">Talent Pipeline</h4>
              <p className="partners-benefit-text">
                Connect with motivated, entrepreneurial students who could be your future employees or business partners.
              </p>
            </div>

            <div className="partners-benefit-card">
              <div className="partners-benefit-icon">🌟</div>
              <h4 className="partners-benefit-title">Social Impact</h4>
              <p className="partners-benefit-text">
                Support social entrepreneurship and sustainable development while strengthening your corporate social responsibility.
              </p>
            </div>
          </div>
        </div>

        {/* Become a Partner CTA */}
        <div className="partners-cta">
          <h3 className="partners-cta-title">Become a Partner</h3>
          <p className="partners-cta-text">
            Join us in empowering the next generation of social entrepreneurs.
            Let's create lasting impact together.
          </p>
          <div className="partners-cta-buttons">
            <a href="/contact" className="partners-cta-btn-primary">
              Partner With Us
            </a>
            <a href="/contact" className="partners-cta-btn-secondary">
              Download Sponsorship Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;