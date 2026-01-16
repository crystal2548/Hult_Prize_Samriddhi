import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/teamsProject.css";
import {
  Filter,
  ExternalLink,
  Droplets,
  Leaf,
  BookOpen,
  Zap,
  HeartPulse,
  Search,
  ArrowRight,
} from "lucide-react";

/**
 * TEAMS & PROJECTS COMPONENT
 * Aesthetic: Bold Typography, Modular Grid, High Contrast
 * Design Reference: Amplify / Visily Export Layout
 */

const CATEGORIES = ["All", "Environment", "Education", "Health", "Technology"];

const TEAMS = [
  {
    id: 1,
    name: "Innovate Nexus",
    category: "Environment",
    problem: "Lack of accessible clean water in rural communities.",
    solution:
      "Developed a low-cost, portable water filtration system using sustainable materials.",
    icon: <Droplets className="text-[#E5007E]" />,
    status: "Finalist",
  },
  {
    id: 2,
    name: "EcoVisionaries",
    category: "Environment",
    problem: "Excessive food waste in urban areas.",
    solution:
      "Created a community-based composting and food redistribution program.",
    icon: <Leaf className="text-[#E5007E]" />,
    status: "Winner 2024",
  },
  {
    id: 3,
    name: "EduConnect",
    category: "Education",
    problem:
      "Limited access to quality education for underprivileged children.",
    solution:
      "Launched a mobile learning platform providing free educational resources and mentorship.",
    icon: <BookOpen className="text-[#E5007E]" />,
    status: "Semi-Finalist",
  },
  {
    id: 4,
    name: "GreenFuture Tech",
    category: "Technology",
    problem: "High energy consumption in residential buildings.",
    solution:
      "Designed a smart home energy management system that optimizes usage.",
    icon: <Zap className="text-[#E5007E]" />,
    status: "Incubating",
  },
  {
    id: 5,
    name: "HealthBridge Sol",
    category: "Health",
    problem: "Inefficient patient record management in rural clinics.",
    solution:
      "A blockchain-based secure health record system for remote healthcare providers.",
    icon: <HeartPulse className="text-[#E5007E]" />,
    status: "Prototype",
  },
];

const TeamsProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTeams =
    activeCategory === "All"
      ? TEAMS
      : TEAMS.filter((team) => team.category === activeCategory);

  return (
    <div className="teams-page">
      {/* Header Section */}
      <section className="header-section">
        <div className="header-container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="header-subtitle">The Incubator</span>
            <h1 className="header-title">
              TEAMS & <br /> <span className="text-stroke">PROJECTS.</span>
            </h1>
          </motion.div>

          {/* Filter Bar */}
          <div className="filter-bar">
            <div className="filter-buttons">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-btn ${
                    activeCategory === cat
                      ? "filter-btn-active"
                      : "filter-btn-inactive"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="search-container">
              <Search className="search-icon" size={16} />
              <input
                type="text"
                placeholder="Search projects..."
                className="search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section">
        <div className="projects-grid-container">
          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filteredTeams.map((team) => (
                <motion.div
                  layout
                  key={team.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="project-card group"
                >
                  <div className="card-header">
                    <div className="card-icon-wrapper">{team.icon}</div>
                    <span className="status-badge">{team.status}</span>
                  </div>

                  <h3 className="project-name">{team.name}</h3>

                  <div className="card-content">
                    <div>
                      <h4 className="content-label">The Problem</h4>
                      <p className="problem-text">{team.problem}</p>
                    </div>
                    <div>
                      <h4 className="content-label">The Solution</h4>
                      <p className="solution-text">"{team.solution}"</p>
                    </div>
                  </div>

                  <div className="card-footer">
                    <span className="category-tag">{team.category}</span>
                    <button className="link-btn">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Featured Callout */}
      <section className="callout-section">
        <div className="callout-container">
          <div className="callout-box">
            <div className="callout-content">
              <h2 className="callout-title">
                HAVE A <br /> REVOLUTIONARY <br />{" "}
                <span className="text-highlight">IDEA?</span>
              </h2>
              <p className="callout-desc">
                We provide the mentorship, resources, and platform to help you
                turn your project into a global startup.
              </p>
              <button className="submit-btn group">
                Submit Your Team <ArrowRight size={16} className="btn-arrow" />
              </button>
            </div>
            <div className="stats-grid">
              <div className="stat-box stat-box-dark">
                <p className="stat-number">40+</p>
                <p className="stat-label">Active Teams</p>
              </div>
              <div className="stat-box stat-box-highlight">
                <p className="stat-number stat-number-highlight">$1M</p>
                <p className="stat-label">Grand Prize</p>
              </div>
              <div className="stat-box stat-box-dark">
                <p className="stat-number">10+</p>
                <p className="stat-label">Expert Mentors</p>
              </div>
              <div className="stat-box stat-box-dark">
                <p className="stat-number">2026</p>
                <p className="stat-label">Next Cohort</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsProjects;
