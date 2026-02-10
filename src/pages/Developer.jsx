import React, { useEffect } from 'react';
import './styles/developer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaCode } from 'react-icons/fa';

const developers = [
  {
    id: 1,
    name: "Developer Name 1",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&fit=crop",
    bio: "Building scalable systems and robust architectures. Passionate about clean code and performance.",
    stack: ["React", "Node.js", "MongoDB", "AWS"],
    socials: { github: "#", linkedin: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "Developer Name 2",
    role: "Frontend Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&fit=crop",
    bio: "Crafting pixel-perfect user interfaces and immersive web experiences with modern CSS.",
    stack: ["React", "Tailwind", "Framer Motion", "Three.js"],
    socials: { github: "#", linkedin: "#", website: "#" }
  },
  {
    id: 3,
    name: "Developer Name 3",
    role: "Backend Specialist",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&fit=crop",
    bio: "Designing efficient APIs and secure database schemas. Logic is my language.",
    stack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    socials: { github: "#", linkedin: "#" }
  },
  {
    id: 4,
    name: "Designer Name",
    role: "UI/UX Visionary",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&fit=crop",
    bio: "Translating complex ideas into intuitive and beautiful user journeys.",
    stack: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    socials: { linkedin: "#", website: "#", twitter: "#" }
  }
];

const Developer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
                    <a href={dev.socials.github} target="_blank" rel="noopener noreferrer" className="dev-social-link">
                      <FaGithub />
                    </a>
                  )}
                  {dev.socials.linkedin && (
                    <a href={dev.socials.linkedin} target="_blank" rel="noopener noreferrer" className="dev-social-link">
                      <FaLinkedin />
                    </a>
                  )}
                  {dev.socials.twitter && (
                    <a href={dev.socials.twitter} target="_blank" rel="noopener noreferrer" className="dev-social-link">
                      <FaTwitter />
                    </a>
                  )}
                  {dev.socials.website && (
                    <a href={dev.socials.website} target="_blank" rel="noopener noreferrer" className="dev-social-link">
                      <FaGlobe />
                    </a>
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
