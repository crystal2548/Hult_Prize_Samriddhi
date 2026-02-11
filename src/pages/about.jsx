import React from "react";
import { motion } from "framer-motion";
import "./styles/about.css";
import {
  Target,
  Lightbulb,
  Users,
  Globe,
  ArrowUpRight,
  Zap,
} from "lucide-react";

/**
 * ABOUT PAGE COMPONENT
 * Refactored to match TeamsProject Design System
 */

const MISSION_ITEMS = [
  {
    icon: <Target className="abt-card-icon" size={40} />,
    title: "The Mission",
    desc: "To challenge students to solve the world's most pressing issues through social entrepreneurship, providing a platform where ideas turn into global movements.",
  },
  {
    icon: <Lightbulb className="abt-card-icon" size={40} />,
    title: "The Vision",
    desc: "Empowering the youth of Samriddhi College to become leaders of change, creating sustainable businesses that prioritize people and planet over pure profit.",
  },
  {
    icon: <Users className="abt-card-icon" size={40} />,
    title: "Community",
    desc: "A vibrant ecosystem of mentors, alumni, and students working together to refine business models and maximize local impact in Nepal.",
  },
];

const AboutPage = () => {
  return (
    <div className="abt-wrapper">
      {/* Hero Section */}
      <section className="abt-hero">
        <div className="abt-hero-bg" />
        <div className="abt-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="abt-hero-label">SAMRIDDHI COLLEGE</p>
            <h1 className="abt-hero-title">
              WE ARE THE <br />
              <span className="text-stroke">CHANGEMAKERS</span>
            </h1>
            <p className="abt-hero-subtitle">
              Empowering the next generation of social entrepreneurs to build scalable, sustainable, and impactful businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="abt-story-section">
        <div className="abt-story-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="abt-story-content"
          >
            <h2 className="abt-section-heading">Our Story</h2>
            <p className="abt-text-primary">
              Established as an official campus chapter in 2023, Hult Prize at
              Samriddhi College began with a simple question:
              <span className="abt-text-highlight"> "Can students really change the world?"</span>
            </p>
            <p className="abt-text-primary">
              What started as a small group of ambitious students has grown into
              a massive community of innovators. We've hosted multiple editions,
              mentored over 150+ teams, and seen our winners represent Samriddhi
              at national and international levels.
            </p>
            <div>
              <button className="abt-journey-btn">
                View Our Journey <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="abt-video-card-container"
          >
            <div className="abt-video-card">
              <div className="abt-video-overlay" />
              <div className="abt-impact-content">
                <Zap size={48} className="abt-zap-icon" />
                <p className="abt-impact-label">Impact First.</p>
              </div>
            </div>
            {/* Floating Stat */}
            <div className="abt-floating-stat">
              <p className="abt-stat-label">Total Reach</p>
              <p className="abt-stat-value">500+ Lives</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision Cards */}
      <section className="abt-mission-section">
        <div className="abt-mission-grid">
          {MISSION_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="abt-mission-card"
            >
              {item.icon}
              <h3 className="abt-card-title">{item.title}</h3>
              <p className="abt-card-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Impact CTA */}
      <section className="abt-global-section">
        <div className="abt-global-content">
          <Globe size={64} className="abt-globe-icon" />
          <h2 className="abt-global-title">
            PART OF A <span className="abt-text-highlight">GLOBAL</span> MOVEMENT
          </h2>
          <p className="abt-global-text">
            Hult Prize Samriddhi is more than a college event. We are a node in
            a worldwide network of 3,000+ universities striving for a better
            future.
          </p>
          <div className="abt-divider" />
          <p className="abt-location-text">
            Samriddhi College • Bhaktapur, Nepal
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
