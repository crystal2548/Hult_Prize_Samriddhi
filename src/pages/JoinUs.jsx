import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles/joinus.css";
import { UserPlus, Briefcase, HeartHandshake } from "lucide-react";

/**
 * JOIN US PAGE COMPONENT
 */

const JoinUsPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    position: "participant",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for applying! We will get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      position: "participant",
      message: "",
    });
  };

  return (
    <div className="joinus-page">
      {/* Hero Section */}
      <section className="joinus-hero-section">
        <div className="joinus-hero-blur" />
        <div className="joinus-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="joinus-hero-subtitle">Be Part of the Story</span>
            <h1 className="joinus-hero-title">
              JOIN THE <br />{" "}
              <span style={{ color: "transparent", WebkitTextStroke: "1px white" }}>
                REVOLUTION.
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities-section">
        <div className="opportunities-grid">
          {/* Participant Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="opportunity-card"
          >
            <UserPlus size={40} color="#E5007E" style={{ marginBottom: "1.5rem" }} />
            <h3 className="op-card-title">Want to Participate?</h3>
            <p className="op-card-desc">
              Join the global competition and make a real impact by addressing pressing global challenges.
            </p>
          </motion.div>

          {/* Sponsor Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="opportunity-card"
          >
            <HeartHandshake size={40} color="#E5007E" style={{ marginBottom: "1.5rem" }} />
            <h3 className="op-card-title">Become a Sponsor?</h3>
            <p className="op-card-desc">
              Support future leaders and gain valuable visibility within our vibrant community and events.
            </p>
          </motion.div>

          {/* Mentor Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="opportunity-card"
          >
            <Briefcase size={40} color="#E5007E" style={{ marginBottom: "1.5rem" }} />
            <h3 className="op-card-title">Become a Mentor?</h3>
            <p className="op-card-desc">
              Guide the next generation of social entrepreneurs with your expertise and insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="application-section">
        <div className="form-container">
          <h2 className="form-title">Apply Now</h2>
          <form className="styled-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="form-input"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="position" className="form-label">Position Applying For</label>
              <select
                id="position"
                name="position"
                className="form-select"
                value={formData.position}
                onChange={handleChange}
              >
                <option value="participant">Participant</option>
                <option value="sponsor">Sponsor</option>
                <option value="mentor">Mentor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a bit about yourself or your organization..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default JoinUsPage;
