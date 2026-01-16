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
 * Aesthetic: Bold, Minimalist, High-Impact
 * Following the Amplify/Goalfest design system
 */

const MISSION_ITEMS = [
  {
    icon: <Target className="icon-primary" size={32} />,
    title: "The Mission",
    desc: "To challenge students to solve the world's most pressing issues through social entrepreneurship, providing a platform where ideas turn into global movements.",
  },
  {
    icon: <Lightbulb className="icon-primary" size={32} />,
    title: "The Vision",
    desc: "Empowering the youth of Samriddhi College to become leaders of change, creating sustainable businesses that prioritize people and planet over pure profit.",
  },
  {
    icon: <Users className="icon-primary" size={32} />,
    title: "Community",
    desc: "A vibrant ecosystem of mentors, alumni, and students working together to refine business models and maximize local impact in Nepal.",
  },
];

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-blur" />

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-subtitle">
              Behind the Movement
            </span>
            <h1 className="hero-title">
              WE ARE THE <br />{" "}
              <span className="text-stroke">
                CHANGEMAKERS.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="story-content"
          >
            <h2 className="story-heading">
              Our Story
            </h2>
            <p className="story-text-primary">
              Established as an official campus chapter in 2023, Hult Prize at
              Samriddhi College began with a simple question:
              <span className="story-highlight">
                {" "}
                "Can students really change the world?"
              </span>
            </p>
            <p className="story-text-secondary">
              What started as a small group of ambitious students has grown into
              a massive community of innovators. We've hosted multiple editions,
              mentored over 150+ teams, and seen our winners represent Samriddhi
              at national and international levels.
            </p>
            <div className="pt-6">
              <button className="journey-btn group">
                View Our Journey{" "}
                <ArrowUpRight
                  size={16}
                  className="btn-icon"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="video-card-container"
          >
            <div className="video-card">
              <div className="gradient-overlay" />
              <div className="video-content">
                <div className="text-center">
                  <Zap
                    size={48}
                    className="zap-icon"
                  />
                  <p className="impact-text">
                    Impact First.
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Stat */}
            <div className="floating-stat">
              <p className="stat-label">
                Total Reach
              </p>
              <p className="stat-value">500+ Lives</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision Cards */}
      {/* <section className="mission-section">
        <div className="mission-grid">
          {MISSION_ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="mission-card"
            >
              <div className="mb-8">{item.icon}</div>
              <h3 className="card-title">
                {item.title}
              </h3>
              <p className="card-desc">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Global Impact CTA */}
      {/* <section className="global-section">
        <div className="global-content">
          <Globe size={64} className="globe-icon" />
          <h2 className="global-title">
            PART OF A <span className="text-highlight">GLOBAL</span> MOVEMENT.
          </h2>
          <p className="global-text">
            Hult Prize Samriddhi is more than a college event. We are a node in
            a worldwide network of 3,000+ universities striving for a better
            future.
          </p>
          <div className="divider" />
          <p className="location-text">
            Samriddhi College • Bhaktapur, Nepal
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;
