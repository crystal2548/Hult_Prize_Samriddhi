import React, { useEffect, useState } from 'react';
import './styles/developer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaCode } from 'react-icons/fa';
import { getDevelopers } from '../lib/developerStore';

const Developer = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getDevelopers().then((data) => setDevelopers(data));
  }, []);

  return (
    <div className="dev-wrapper">
      {/* Background Elements */}
      <div className="dev-hero-glow" style={{ top: '-20%', left: '-10%' }}></div>
      <div className="dev-hero-glow" style={{ bottom: '-20%', right: '-10%', animationDelay: '2s', background: 'radial-gradient(circle, rgba(0, 243, 255, 0.1), transparent 70%)' }}></div>

      {/* Hero Section */}
      <section className="dev-hero">
        <div className="dev-hero-inner">
          <div className="dev-hero-badge">
            <FaCode style={{ marginRight: '8px' }} />
            v1.0.0
          </div>
          <h1 className="dev-hero-title">
            Builders of <br /> the Future
          </h1>
          <span className="dev-hero-code">
            &lt;Code meets Creativity /&gt;
          </span>
          <p className="dev-hero-subtitle">
            Meet the technical minds and creative souls who engineered the Hult Prize Samriddhi platform.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="dev-cards-section">
        <div className="dev-cards-container">
          <h2 className="dev-section-title">The Squad</h2>
          
          <div className="dev-grid">
            {developers.map((dev) => (
              <div key={dev.id} className="dev-card">
                <div className="dev-img-container">
                  <div className="dev-img-border"></div>
                  <img src={dev.image} alt={dev.name} className="dev-img" />
                </div>
                
                <h3 className="dev-name">{dev.name}</h3>
                <span className="dev-role">{dev.role}</span>
                
                <p className="dev-bio">{dev.bio}</p>
                
                <div className="dev-stack">
                  {dev.stack.map((tech, index) => (
                    <span key={index} className="dev-tech">{tech}</span>
                  ))}
                </div>
                
                <div className="dev-socials">
                  {dev.socials.github && (
                    <button onClick={() => window.open(dev.socials.github, '_blank')} className="dev-social-btn">
                      <FaGithub />
                    </button>
                  )}
                  {dev.socials.linkedin && (
                    <button onClick={() => window.open(dev.socials.linkedin, '_blank')} className="dev-social-btn">
                      <FaLinkedin />
                    </button>
                  )}
                  {dev.socials.twitter && (
                    <button onClick={() => window.open(dev.socials.twitter, '_blank')} className="dev-social-btn">
                      <FaTwitter />
                    </button>
                  )}
                  {dev.socials.website && (
                    <button onClick={() => window.open(dev.socials.website, '_blank')} className="dev-social-btn">
                      <FaGlobe />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Developer;
