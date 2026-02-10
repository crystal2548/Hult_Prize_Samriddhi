import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/LearnMore.css';

const LearnMore = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="learn-page-wrapper">
      
      {/* Hero Section */}
      <section className="learn-hero-section">
        <div className="learn-hero-overlay"></div>
        <div className="learn-hero-content">
          <p className="learn-hero-label">ABOUT THE COMPETITION</p>
          <h1 className="learn-hero-title">Hult Prize</h1>
          <p className="learn-hero-subtitle">
            The world's largest student movement for social good
          </p>
        </div>
      </section>

      {/* What is Hult Prize */}
      <section className="learn-section">
        <div className="learn-container">
          <div className="learn-content-block">
            <h2 className="learn-section-title">What is Hult Prize?</h2>
            <p className="learn-text">
              The Hult Prize is a global competition that challenges students to solve the world's 
              most pressing issues through social entrepreneurship. Since 2010, the Hult Prize has 
              mobilized over 1 million students from 100+ countries to create sustainable business 
              solutions aligned with the United Nations Sustainable Development Goals.
            </p>
            <p className="learn-text">
              Each year, teams compete for the chance to win $1,000,000 USD in seed funding to 
              launch their social enterprise. Beyond the prize money, participants gain access to 
              mentorship, networking opportunities, and a global platform to showcase their innovations.
            </p>
          </div>

          <div className="learn-stats-grid">
            <div className="learn-stat-card">
              <div className="learn-stat-number">$1M</div>
              <div className="learn-stat-label">Prize Funding</div>
            </div>
            <div className="learn-stat-card">
              <div className="learn-stat-number">1M+</div>
              <div className="learn-stat-label">Students Engaged</div>
            </div>
            <div className="learn-stat-card">
              <div className="learn-stat-number">100+</div>
              <div className="learn-stat-label">Countries</div>
            </div>
            <div className="learn-stat-card">
              <div className="learn-stat-number">14+</div>
              <div className="learn-stat-label">Years Running</div>
            </div>
          </div>
        </div>
      </section>

      {/* Hult Prize @ Samriddhi */}
      <section className="learn-section learn-section-dark">
        <div className="learn-container">
          <div className="learn-split-content">
            <div className="learn-split-text">
              <h2 className="learn-section-title">Hult Prize @ Samriddhi College</h2>
              <p className="learn-text">
                We are proud to be the official Hult Prize OnCampus program at Samriddhi College. 
                As a local hub, we bring this prestigious global competition directly to our students, 
                providing them with the resources, mentorship, and platform needed to compete on the world stage.
              </p>
              <p className="learn-text">
                Our mission is to empower Samriddhi students to develop innovative solutions for local 
                and global challenges, fostering a culture of social entrepreneurship and sustainable innovation.
              </p>
              
              <div className="learn-highlights">
                <div className="learn-highlight-item">
                  <div className="learn-highlight-icon">🎓</div>
                  <div className="learn-highlight-text">
                    <h3>Official OnCampus Program</h3>
                    <p>Recognized Hult Prize campus chapter</p>
                  </div>
                </div>
                <div className="learn-highlight-item">
                  <div className="learn-highlight-icon">🌟</div>
                  <div className="learn-highlight-text">
                    <h3>Expert Mentorship</h3>
                    <p>Guidance from industry leaders and entrepreneurs</p>
                  </div>
                </div>
                <div className="learn-highlight-item">
                  <div className="learn-highlight-icon">🚀</div>
                  <div className="learn-highlight-text">
                    <h3>Global Pathway</h3>
                    <p>Direct route to regional and global finals</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-split-image">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=800&fit=crop" 
                alt="Students collaborating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Competition Journey */}
      <section className="learn-section">
        <div className="learn-container">
          <h2 className="learn-section-title learn-centered">The Competition Journey</h2>
          <p className="learn-section-subtitle">From campus to global stage</p>

          <div className="learn-journey-grid">
            <div className="learn-journey-card">
              <div className="learn-journey-number">01</div>
              <h3 className="learn-journey-title">OnCampus</h3>
              <p className="learn-journey-text">
                Compete at Samriddhi College. Teams pitch their ideas, receive mentorship, 
                and the winning team advances to regional competition.
              </p>
            </div>

            <div className="learn-journey-card">
              <div className="learn-journey-number">02</div>
              <h3 className="learn-journey-title">Regional Finals</h3>
              <p className="learn-journey-text">
                Campus winners compete against other universities in their region. Top teams 
                earn a spot at the Hult Prize Accelerator.
              </p>
            </div>

            <div className="learn-journey-card">
              <div className="learn-journey-number">03</div>
              <h3 className="learn-journey-title">Accelerator</h3>
              <p className="learn-journey-text">
                Selected teams receive intensive training, mentorship, and resources to 
                refine their business models over 6 weeks.
              </p>
            </div>

            <div className="learn-journey-card">
              <div className="learn-journey-number">04</div>
              <h3 className="learn-journey-title">Global Finals</h3>
              <p className="learn-journey-text">
                The top 6 teams pitch to a panel of judges and compete for the $1M USD prize 
                at the United Nations headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="learn-section learn-section-dark">
        <div className="learn-container">
          <h2 className="learn-section-title learn-centered">Our Success Stories</h2>
          <p className="learn-section-subtitle">Samriddhi students making an impact</p>

          <div className="learn-stories-grid">
            <div className="learn-story-card">
              <div className="learn-story-year">2023</div>
              <h3 className="learn-story-title">AgriHarvest Innovations</h3>
              <p className="learn-story-desc">
                Developed an AI-powered agricultural advisory system that helped 200+ local farmers 
                increase their crop yields by 40%, demonstrating the power of technology in traditional farming.
              </p>
              <div className="learn-story-impact">
                <span>200+ Farmers Reached</span>
                <span>40% Yield Increase</span>
              </div>
            </div>

            <div className="learn-story-card">
              <div className="learn-story-year">2024</div>
              <h3 className="learn-story-title">FreshConnect</h3>
              <p className="learn-story-desc">
                Created a blockchain-verified farm-to-table platform connecting local farmers with urban 
                consumers, reducing food waste and ensuring fresh produce delivery to 1000+ families.
              </p>
              <div className="learn-story-impact">
                <span>1000+ Families Served</span>
                <span>5 Tons Waste Prevented</span>
              </div>
            </div>

            <div className="learn-story-card">
              <div className="learn-story-year">2025</div>
              <h3 className="learn-story-title">EcoTech Solutions</h3>
              <p className="learn-story-desc">
                Providing affordable renewable energy solutions using solar and wind power for off-grid 
                rural communities, reducing carbon emissions and powering sustainable development.
              </p>
              <div className="learn-story-impact">
                <span>50+ Households Powered</span>
                <span>30 Tons CO2 Reduced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="learn-section">
        <div className="learn-container">
          <h2 className="learn-section-title learn-centered">Why Participate?</h2>
          
          <div className="learn-benefits-grid">
            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">💡</div>
              <h3>Develop Real Solutions</h3>
              <p>Work on solving actual problems that affect millions of people worldwide</p>
            </div>

            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">🤝</div>
              <h3>Build Your Network</h3>
              <p>Connect with mentors, investors, and fellow changemakers from around the globe</p>
            </div>

            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">🎯</div>
              <h3>Gain Recognition</h3>
              <p>Showcase your innovation on an international platform and build your reputation</p>
            </div>

            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">💰</div>
              <h3>Access Funding</h3>
              <p>Compete for $1M prize money and access to investors and accelerator programs</p>
            </div>

            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">📚</div>
              <h3>Learn by Doing</h3>
              <p>Gain practical entrepreneurship skills through hands-on experience and mentorship</p>
            </div>

            <div className="learn-benefit-card">
              <div className="learn-benefit-icon">🌍</div>
              <h3>Make an Impact</h3>
              <p>Create lasting change in your community and beyond through sustainable solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="learn-cta-section">
        <div className="learn-container">
          <div className="learn-cta-box">
            <h2 className="learn-cta-title">Ready to Learn More?</h2>
            <p className="learn-cta-text">
              Visit the official Hult Prize website to explore past winners, learn about the global 
              competition process, and discover how you can be part of this incredible movement.
            </p>
            <div className="learn-cta-buttons">
              <a 
                href="https://www.hultprize.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="learn-cta-btn learn-cta-primary"
              >
                Visit Hult Prize →
              </a>
              <button 
                onClick={() => navigate('/contact')}
                className="learn-cta-btn learn-cta-secondary"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default LearnMore;