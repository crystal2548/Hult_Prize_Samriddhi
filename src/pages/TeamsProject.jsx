import React, { useState } from 'react';
import { Select, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './TeamsProject.css';

const { Option } = Select;

const TeamsProject = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState('all');
  const [selectedTeam, setSelectedTeam] = useState('all');

  // Years data - newest first (2026 to 2023)
  const years = ['2026', '2025', '2024', '2023'];

  // Themes data
  const themes = [
    { value: 'innovation', label: 'Innovation for Tomorrow (2026)' },
    { value: 'climate-action', label: 'Climate Action (2025)' },
    { value: 'food-security', label: 'Food Security (2024)' },
    { value: 'youth-employment', label: 'Youth Employment (2023)' },
  ];

  // Featured teams data (sample)
  const teams = [
    {
      name: 'Innovate Nexus',
      description: 'Developed a low-cost, portable water filtration system using sustainable materials to tackle water scarcity in rural communities.',
      year: 2024
    },
    {
      name: 'EcoVisionaries',
      description: 'Created a community-based composting and food redistribution program to combat urban food waste.',
      year: 2024
    },
    {
      name: 'EduConnect',
      description: 'Launched a mobile learning platform providing free educational resources and mentorship for underprivileged children.',
      year: 2025
    },
    {
      name: 'GreenFuture Tech',
      description: 'Designed a smart home energy management system that optimizes usage and reduces carbon footprint.',
      year: 2025
    },
    {
      name: 'HealthBridge Solutions',
      description: 'Implemented a peer-support network and digital therapy platform for young adults mental health.',
      year: 2023
    },
    {
      name: 'AgriHarvest Innovations',
      description: 'Introduced an AI-powered agricultural advisory system helping local farmers increase crop yields.',
      year: 2023
    },
  ];

  // Judges and mentors data
  const judgesMentors = [
    { name: 'Dr. Maya Sharma', role: 'Judge' },
    { name: 'Mr. Raj Kumar', role: 'Mentor' },
    { name: 'Ms. Alisha Rai', role: 'Judge' },
    { name: 'Eng. Suresh Singh', role: 'Mentor' },
    { name: 'Dr. Dina Devi', role: 'Judge' },
    { name: 'Mr. Pujan Giri', role: 'Mentor' },
  ];

  return (
    <div className="teams-page">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Teams & Projects</h1>
          <p className="hero-description">
            Empowering student entrepreneurs to solve the world's biggest challenges
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filters">
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
      </section>

      {/* Teams Section */}
      <section className="teams-section">
        <div className="container">
          <h2 className="section-title">Featured Teams</h2>
          
          <div className="teams-grid">
            {teams.map((team, index) => (
              <div key={index} className="team-card">
                <h3 className="team-name">{team.name}</h3>
                <p className="team-description">{team.description}</p>
                <span className="team-year">Year {team.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">About Our Initiatives</h2>
          <div className="about-content">
            <p>
              The Hult Prize at Samriddhi College champions innovative solutions to pressing global challenges. 
              Our teams comprise bright, driven students dedicated to creating scalable and sustainable social enterprises.
            </p>
            <p>
              Each project represents a commitment to positive change, fostering entrepreneurship, and addressing 
              critical issues within our communities and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Judges Section */}
      <section className="judges-section">
        <div className="container">
          <h2 className="section-title">Our Esteemed Judges & Mentors</h2>
          
          <div className="judges-grid">
            {judgesMentors.map((person, index) => (
              <div key={index} className="judge-item">
                <Avatar
                  size={100}
                  icon={<UserOutlined />}
                  className="judge-avatar"
                />
                <h4 className="judge-name">{person.name}</h4>
                <p className="judge-role">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h3 className="contact-title">Get In Touch</h3>
          <p className="contact-text">
            For inquiries about teams or projects, please contact us at
          </p>
          <a href="mailto:hultprize@samriddhi.edu" className="contact-email">
            hultprize@samriddhi.edu
          </a>
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