import React from 'react';
import './styles/support.css';
import AnimatedCounter from '../components/AnimatedCounter';

const Support = () => {
  const supportWays = [
    {
      icon: "💰",
      title: "Financial Support",
      description: "Sponsor our events, provide prize money, or fund specific initiatives to help students bring their ideas to life.",
      cta: "Become a Sponsor"
    },
    {
      icon: "🎓",
      title: "Mentorship",
      description: "Share your expertise and guide student teams through their entrepreneurial journey.",
      cta: "Mentor a Team"
    },
    {
      icon: "🏢",
      title: "In-Kind Donations",
      description: "Provide venues, equipment, software licenses, or other resources that support our activities.",
      cta: "Donate Resources"
    },
    {
      icon: "📢",
      title: "Spread the Word",
      description: "Help us reach more students and potential supporters by sharing our mission on social media.",
      cta: "Share Our Story"
    }
  ];

  const impactAreas = [
    {
      amount: <AnimatedCounter end={500} prefix="$" />,
      impact: "Covers workshop materials and training resources for 50 students"
    },
    {
      amount: <AnimatedCounter end={1000} prefix="$" separator="," />,
      impact: "Funds prize money for our On-Campus competition winners"
    },
    {
      amount: <AnimatedCounter end={2500} prefix="$" separator="," />,
      impact: "Sponsors a complete season of events and mentorship programs"
    },
    {
      amount: <AnimatedCounter end={5000} prefix="$" separator="," />,
      impact: "Enables regional summit participation and international networking"
    }
  ];

  return (
    <div className="support-page">
      {/* Hero Section */}
      <div className="support-hero">
        <div className="support-hero-content">
          <p className="support-hero-label animate-fade-in-down">Make an Impact</p>
          <h1 className="support-hero-title animate-fade-in-up animate-delay-200">Support Us</h1>
          <p className="support-hero-subtitle animate-fade-in-up animate-delay-400">
            Help us empower the next generation of social entrepreneurs
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="support-content">
        {/* Introduction */}
        <div className="support-intro">
          <h2 className="support-intro-title">
            Why Your Support Matters
          </h2>
          <p className="support-intro-text">
            Your support directly impacts students' ability to develop innovative solutions for global
            challenges. Every contribution, whether financial or in-kind, helps create opportunities for
            young entrepreneurs to learn, compete, and make a real difference in their communities.
          </p>
        </div>

        {/* Ways to Support */}
        <div className="support-section">
          <h2 className="support-section-title">Ways to Support</h2>
          <div className="support-ways-grid">
            {supportWays.map((way, index) => (
              <div key={index} className="support-way-card">
                <div className="support-way-icon">{way.icon}</div>
                <h3 className="support-way-title">{way.title}</h3>
                <p className="support-way-text">{way.description}</p>
                <button className="support-way-cta">
                  {way.cta} →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Impact of Donations */}
        <div className="support-section">
          <h2 className="support-section-title">Your Impact</h2>
          <div className="support-impact-grid">
            {impactAreas.map((item, index) => (
              <div key={index} className="support-impact-card">
                <div className="support-impact-amount">{item.amount}</div>
                <p className="support-impact-text">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="support-testimonial">
          <div className="support-testimonial-content">
            <div className="support-testimonial-icon">💬</div>
            <p className="support-testimonial-quote">
              "The support we received from sponsors and mentors was instrumental in developing our project.
              It wasn't just about funding—it was about believing in our vision and helping us turn it into reality."
            </p>
            <p className="support-testimonial-author">- Former Hult Prize Participant</p>
          </div>
        </div>

        {/* Recognition */}
        <div className="support-section">
          <h2 className="support-section-title">Supporter Recognition</h2>
          <div className="support-recognition-grid">
            <div className="support-recognition-card">
              <div className="support-recognition-icon">🏆</div>
              <h3 className="support-recognition-title">Platinum Supporters</h3>
              <p className="support-recognition-text">
                $5,000+ - Logo on all materials, speaking opportunity at events, dedicated social media recognition
              </p>
            </div>

            <div className="support-recognition-card">
              <div className="support-recognition-icon">🥈</div>
              <h3 className="support-recognition-title">Gold Supporters</h3>
              <p className="support-recognition-text">
                $2,500+ - Logo on event materials, social media mentions, website recognition
              </p>
            </div>

            <div className="support-recognition-card">
              <div className="support-recognition-icon">🥉</div>
              <h3 className="support-recognition-title">Silver Supporters</h3>
              <p className="support-recognition-text">
                $1,000+ - Logo on select materials, website listing, newsletter mentions
              </p>
            </div>
          </div>
        </div>

        {/* Corporate Partnership */}
        <div className="support-corporate">
          <h3 className="support-corporate-title">Corporate Partnership Opportunities</h3>
          <p className="support-corporate-text">
            For companies looking to make a larger impact, we offer customized partnership packages that
            align with your corporate social responsibility goals while providing meaningful benefits:
          </p>
          <div className="support-corporate-grid">
            <div className="support-corporate-item">
              <span className="support-corporate-check">✓</span>
              <span>Direct access to talented student innovators for recruitment</span>
            </div>
            <div className="support-corporate-item">
              <span className="support-corporate-check">✓</span>
              <span>Brand visibility across campus and social media channels</span>
            </div>
            <div className="support-corporate-item">
              <span className="support-corporate-check">✓</span>
              <span>Opportunity to co-host events and workshops</span>
            </div>
            <div className="support-corporate-item">
              <span className="support-corporate-check">✓</span>
              <span>Speaking opportunities at our flagship events</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="support-cta">
          <h3 className="support-cta-title">Ready to Support?</h3>
          <p className="support-cta-text">
            Get in touch with us to discuss how you can support the next generation of social entrepreneurs.
            Together, we can create lasting change.
          </p>
          <div className="support-cta-buttons">
            <a href="/contact" className="support-cta-btn-primary">
              Contact Us
            </a>
            <a href="/contact" className="support-cta-btn-secondary">
              Download Sponsorship Package
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;