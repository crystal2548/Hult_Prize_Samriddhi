import React, { useState, useEffect, useRef } from 'react';
import { Select, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './TeamsProject.css';

const { Option } = Select;

const TeamsProject = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState('all');
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = [];
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach((el, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [index]: true }));
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  // Years data - newest first
  const years = ['2026', '2025', '2024', '2023'];

  // Themes data
  const themes = [
    { value: 'innovation', label: 'Innovation for Tomorrow (2026)' },
    { value: 'climate-action', label: 'Climate Action (2025)' },
    { value: 'food-security', label: 'Food Security (2024)' },
    { value: 'youth-employment', label: 'Youth Employment (2023)' },
  ];

  // Featured teams data
  const teams = [
    {
      name: 'Innovate Nexus',
      tagline: 'Clean Water for All',
      description: 'Developed a low-cost, portable water filtration system using sustainable materials to tackle water scarcity in rural communities.',
      impact: '10,000+ lives affected',
      year: 2024
    },
    {
      name: 'EcoVisionaries',
      tagline: 'Zero Food Waste',
      description: 'Created a community-based composting and food redistribution program to combat urban food waste.',
      impact: '5 tons waste reduced monthly',
      year: 2024
    },
    {
      name: 'EduConnect',
      tagline: 'Education for Every Child',
      description: 'Launched a mobile learning platform providing free educational resources and mentorship for underprivileged children.',
      impact: '2,000+ students reached',
      year: 2025
    },
    {
      name: 'GreenFuture Tech',
      tagline: 'Smart Energy Solutions',
      description: 'Designed a smart home energy management system that optimizes usage and reduces carbon footprint.',
      impact: '30% energy reduction',
      year: 2025
    },
    {
      name: 'HealthBridge Solutions',
      tagline: 'Mental Health Matters',
      description: 'Implemented a peer-support network and digital therapy platform for young adults mental health.',
      impact: '500+ users supported',
      year: 2023
    },
    {
      name: 'AgriHarvest Innovations',
      tagline: 'AI-Powered Farming',
      description: 'Introduced an AI-powered agricultural advisory system helping local farmers increase crop yields.',
      impact: '40% yield increase',
      year: 2023
    },
  ];

  // Judges and mentors
  const judgesMentors = [
    { name: 'Dr. Maya Sharma', role: 'Judge', expertise: 'Social Innovation' },
    { name: 'Mr. Raj Kumar', role: 'Mentor', expertise: 'Entrepreneurship' },
    { name: 'Ms. Alisha Rai', role: 'Judge', expertise: 'Sustainability' },
    { name: 'Eng. Suresh Singh', role: 'Mentor', expertise: 'Technology' },
    { name: 'Dr. Dina Devi', role: 'Judge', expertise: 'Public Health' },
    { name: 'Mr. Pujan Giri', role: 'Mentor', expertise: 'Business Strategy' },
  ];

  // Stats data
  const stats = [
    { number: '100+', label: 'Students Participated' },
    { number: '25+', label: 'Innovative Teams' },
    { number: '4', label: 'Years Running' },
    { number: '$1M', label: 'Grand Prize' },
  ];

  return (
    <div className="teams-page">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container hero-content">
          <h1 className="hero-title">
            Teams & Projects
          </h1>
          <p className="hero-subtitle">
            Empowering students to build startups that change the world
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="stat-item animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filters">
            <div className="filter-group">
              <Select
                defaultValue="all"
                onChange={(value) => setSelectedYear(value)}
                size="large"
                className="filter-select"
                popupClassName="filter-dropdown"
                getPopupContainer={(trigger) => trigger.parentElement}
                placement="bottomLeft"
              >
                <Option value="all">All Years</Option>
                {years.map(year => (
                  <Option key={year} value={year}>{year}</Option>
                ))}
              </Select>
            </div>

            <div className="filter-group">
              <Select
                defaultValue="all"
                onChange={(value) => setSelectedTheme(value)}
                size="large"
                className="filter-select"
                popupClassName="filter-dropdown"
                getPopupContainer={(trigger) => trigger.parentElement}
                placement="bottomLeft"
              >
                <Option value="all">All Themes</Option>
                {themes.map(theme => (
                  <Option key={theme.value} value={theme.value}>{theme.label}</Option>
                ))}
              </Select>
            </div>

            <div className="filter-group">
              <Select
                defaultValue="all"
                onChange={(value) => setSelectedTeam(value)}
                size="large"
                className="filter-select"
                popupClassName="filter-dropdown"
                getPopupContainer={(trigger) => trigger.parentElement}
                placement="bottomLeft"
              >
                <Option value="all">All Teams</Option>
                {teams.map((team, index) => (
                  <Option key={index} value={team.name}>{team.name}</Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="teams-section">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">Featured Teams</h2>
          
          <div className="teams-grid">
            {teams.map((team, index) => (
              <div key={index} className="team-card-wrapper animate-on-scroll">
                <div className="team-card">
                  <div className="team-card-front">
                    <div className="team-year-tag">Year {team.year}</div>
                    <h3 className="team-name">{team.name}</h3>
                    <p className="team-tagline">{team.tagline}</p>
                    <div className="flip-indicator">Hover to learn more</div>
                  </div>
                  <div className="team-card-back">
                    <p className="team-description">{team.description}</p>
                    <div className="team-impact">
                      <strong>Impact:</strong> {team.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section animate-on-scroll">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2 className="section-heading">About Our Initiatives</h2>
              <p className="about-paragraph">
                The Hult Prize at Samriddhi College champions innovative solutions to pressing global challenges. 
                Our teams comprise bright, driven students dedicated to creating scalable and sustainable social enterprises.
              </p>
              <p className="about-paragraph">
                Each project represents a commitment to positive change, fostering entrepreneurship, and addressing 
                critical issues within our communities and beyond.
              </p>
            </div>
            <div className="about-visual">
              <div className="about-shape"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="judges-section">
        <div className="container">
          <h2 className="section-heading animate-on-scroll">Our Esteemed Judges & Mentors</h2>
          
          <div className="judges-grid">
            {judgesMentors.map((person, index) => (
              <div key={index} className="judge-card animate-on-scroll">
                <div className="judge-avatar-wrapper">
                  <Avatar
                    size={110}
                    icon={<UserOutlined />}
                    className="judge-avatar"
                  />
                </div>
                <h4 className="judge-name">{person.name}</h4>
                <p className="judge-role">{person.role}</p>
                <p className="judge-expertise">{person.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section animate-on-scroll">
        <div className="container">
          <div className="contact-content">
            <h3 className="contact-heading">Get In Touch</h3>
            <p className="contact-text">
              For inquiries about teams or projects
            </p>
            <a href="mailto:hultprize@samriddhi.edu" className="contact-button">
              hultprize@samriddhi.edu
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-brand">Hult Prize Samriddhi</h3>
              <p className="footer-text">
                Empowering the next generation of social entrepreneurs
              </p>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">About</h4>
              <ul className="footer-links">
                <li>Our Story</li>
                <li>Mission</li>
                <li>Impact</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li>Past Challenges</li>
                <li>FAQ</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4 className="footer-heading">Connect</h4>
              <ul className="footer-links">
                <li>Partners</li>
                <li>Careers</li>
                <li>Support</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Hult Prize Samriddhi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeamsProject;