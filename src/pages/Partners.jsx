import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './styles/partners.css';
import yearData from '../data/yearData';
import AnimatedCounter from '../components/AnimatedCounter';


const Partners = () => {
  const allSponsors = useMemo(() => {
    const sponsorsMap = new Map();

    Object.keys(yearData)
      .sort((a, b) => b - a)
      .forEach(yearKey => {
        const year = yearData[yearKey];
        if (year.sponsors) {
          year.sponsors.forEach(sponsor => {
            // Use name as key to remove duplicates, prefer the one with a logo
            if (!sponsorsMap.has(sponsor.name) || (sponsor.logo && !sponsorsMap.get(sponsor.name).logo)) {
              sponsorsMap.set(sponsor.name, sponsor);
            }
          });
        }
      });

    return Array.from(sponsorsMap.values());
  }, []);

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
    <div className="partners-page">
      {/* Hero Section */}
      <div className="partners-hero">
        <div className="partners-hero-content">
          <p className="partners-hero-label animate-fade-in-down">Meet Our</p>
          <h1 className="partners-hero-title animate-fade-in-up animate-delay-200">Partners & Supporters</h1>
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
          <h3 className="partners-section-title">Our Valued Sponsors & Partners</h3>
          <div className="partners-grid">
            {allSponsors.map((sponsor, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo-box">
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
                <span className="partner-name">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Media Partners */}
        {/* Media Partners Section Removed */}

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

        {/* Support Section Divider */}
        <div className="support-divider">
          <h2 className="support-divider-title">Ways to Support Us</h2>
          <p className="support-divider-text">
            Your support directly impacts students' ability to develop innovative solutions for global
            challenges. Every contribution, whether financial or in-kind, helps create opportunities for
            young entrepreneurs to learn, compete, and make a real difference in their communities.
          </p>
        </div>

        {/* Ways to Support */}
        <div className="partners-section">
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
        <div className="partners-section">
          <h3 className="partners-section-title">Your Impact</h3>
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
        {/* <div className="partners-section">
          <h3 className="partners-section-title">Supporter Recognition</h3>
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
        </div> */}

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

        {/* Unified CTA */}
        <div className="partners-cta">
          <h3 className="partners-cta-title">Ready to Partner or Support?</h3>
          <p className="partners-cta-text">
            Join us in empowering the next generation of social entrepreneurs.
            Let's create lasting impact together.
          </p>
          <div className="partners-cta-buttons">
            <Link to="/contact" className="partners-cta-btn-primary">
              Get In Touch
            </Link>
            {/* <Link to="/contact" className="partners-cta-btn-secondary">
              Download Partnership Package
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
