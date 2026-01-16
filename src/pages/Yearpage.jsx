import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined, ArrowLeftOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './YearPage.css';

const YearPage = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const [expandedTeams, setExpandedTeams] = useState({});
  const [isVisible, setIsVisible] = useState({});

  // Scroll animations
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observers = [];
    const elements = document.querySelectorAll('.yearpage-animate');
    
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
  }, [year]);

  // ⭐ YEAR-SPECIFIC DATA - Each year has completely different content
  const yearData = {
    '2023': {
      heroImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&auto=format&fit=crop', // Different image for 2023
      globalTheme: 'Youth Employment',
      globalDescription: 'Tackling youth unemployment through sustainable business solutions focused on job creation and skills development.',
      collegeTheme: 'Local Solutions, Global Impact: Addressing Community Youth Employment',
      organizingCommittee: [
        { name: 'Robin Sharma', role: 'Lead Organizer', image: null },
        { name: 'Sanju Kumari', role: 'Event Coordinator', image: null },
        { name: 'Anup Basnet', role: 'Logistics Head', image: null },
        { name: 'Priya Rai', role: 'Marketing Lead', image: null },
        { name: 'Sushil Thapa', role: 'Sponsorship Manager', image: null },
      ],
      teams: [
        {
          name: 'HealthBridge Solutions',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop',
          problemStatement: 'Inadequate mental health support for young adults in rural communities.',
          solutionOverview: 'Implemented a peer-support network and digital therapy platform accessible through mobile devices, providing affordable mental health services.',
          impact: '500+ young adults supported, 85% reported improved mental health',
          tags: ['Mental Health', 'Digital Platform', 'Youth Support']
        },
        {
          name: 'AgriHarvest Innovations',
          image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop',
          problemStatement: 'Inefficient farming practices leading to low crop yields and farmer poverty.',
          solutionOverview: 'Introduced an AI-powered agricultural advisory system helping local farmers increase yields and income through data-driven insights.',
          impact: '200+ farmers reached, 40% average yield increase',
          tags: ['Agriculture', 'AI Technology', 'Sustainability']
        },
        {
          name: 'SkillBridge Connect',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop',
          problemStatement: 'Skills gap preventing youth from accessing quality employment opportunities.',
          solutionOverview: 'Created an online platform connecting unemployed youth with vocational training and job opportunities.',
          impact: '300+ youth trained, 70% employment rate',
          tags: ['Education', 'Employment', 'Skills Training']
        },
      ],
      winners: [
        { 
          place: '1ST PLACE', 
          team: 'AgriHarvest Innovations',
          image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop',
          description: 'Winner for developing an AI-powered agricultural advisory system that helped 200+ farmers increase yields by 40%.'
        },
        { 
          place: '2ND PLACE', 
          team: 'HealthBridge Solutions',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&auto=format&fit=crop',
          description: 'Runner-up for creating accessible mental health support platform for rural communities.'
        },
        { 
          place: '3RD PLACE', 
          team: 'SkillBridge Connect',
          image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop',
          description: 'Third place for bridging skills gap with vocational training platform.'
        },
      ],
      judges: [
        { name: 'Dr. Aisha Singh', role: 'Chief Innovation Officer, TechLead', image: null },
        { name: 'Mr. Bijan Dahal', role: 'Founder & CEO, EcoFuture', image: null },
        { name: 'Ms. Nisha Tamang', role: 'Social Entrepreneur & Consultant', image: null },
        { name: 'Prof. Suresh Rana', role: 'Dean, Samriddhi College', image: null },
      ],
      sponsors: ['Nepal Telecom', 'Nabil Bank', 'Vianet Communications', 'Chaudhary Nepal', 'Surya Bank', 'Laxmi Group'],
      eventPhotos: [
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&auto=format&fit=crop',
      ]
    },
    
    '2024': {
      heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop', // Different image for 2024
      globalTheme: 'Food Security',
      globalDescription: 'Building resilient food systems to ensure access to nutritious food for all communities worldwide.',
      collegeTheme: 'Local Solutions, Global Impact: Addressing Community Food Security',
      organizingCommittee: [
        { name: 'Robin Sharma', role: 'Lead Organizer', image: null },
        { name: 'Sanju Kumari', role: 'Event Coordinator', image: null },
        { name: 'Anup Basnet', role: 'Logistics Head', image: null },
        { name: 'Priya Rai', role: 'Marketing Lead', image: null },
        { name: 'Sushil Thapa', role: 'Sponsorship Manager', image: null },
      ],
      teams: [
        {
          name: 'FreshConnect',
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&auto=format&fit=crop',
          problemStatement: 'Food waste in supply chain and lack of access to fresh produce in urban areas.',
          solutionOverview: 'Platform connecting farmers directly with consumers, reducing waste and ensuring fresh food delivery through blockchain-verified supply chain.',
          impact: '1000+ families served, 5 tons of food waste prevented monthly',
          tags: ['Farm-to-Table', 'Blockchain', 'Waste Reduction']
        },
        {
          name: 'NutriAid',
          image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?w=400&auto=format&fit=crop',
          problemStatement: 'Child malnutrition due to lack of access to nutritious food and nutrition education.',
          solutionOverview: 'Community-based program providing fortified meals and nutrition education to vulnerable families through local partnerships.',
          impact: '500+ children reached, 60% improvement in nutrition levels',
          tags: ['Child Nutrition', 'Education', 'Community']
        },
      ],
      winners: [
        { 
          place: '1ST PLACE', 
          team: 'Coming Soon',
          image: null,
          description: 'Competition in progress. Winners will be announced at the 2024 grand finale.'
        },
        { 
          place: '2ND PLACE', 
          team: 'Coming Soon',
          image: null,
          description: 'Competition in progress. Winners will be announced at the 2024 grand finale.'
        },
        { 
          place: '3RD PLACE', 
          team: 'Coming Soon',
          image: null,
          description: 'Competition in progress. Winners will be announced at the 2024 grand finale.'
        },
      ],
      judges: [
        { name: 'Dr. Aisha Singh', role: 'Chief Innovation Officer', image: null },
        { name: 'Mr. Bijan Dahal', role: 'Founder & CEO, EcoFuture', image: null },
        { name: 'Ms. Nisha Tamang', role: 'Social Entrepreneur', image: null },
        { name: 'Prof. Suresh Rana', role: 'Dean, Samriddhi College', image: null },
        { name: 'Ms. Kamala Devi', role: 'Impact Investor', image: null },
      ],
      sponsors: ['Nepal Telecom', 'Nabil Bank', 'Vianet Communications', 'Coca-Cola Nepal', 'Surya Bank', 'Laxmi Group'],
      eventPhotos: []
    },

    '2025': {
      heroImage: 'https://images.unsplash.com/photo-1569163139394-de4798aa62b4?w=1200&auto=format&fit=crop',
      globalTheme: 'Climate Action',
      globalDescription: 'Developing innovative approaches to combat climate change and environmental degradation.',
      collegeTheme: 'Local Solutions, Global Impact: Climate Change Solutions',
      organizingCommittee: [
        { name: 'Robin Sharma', role: 'Lead Organizer', image: null },
        { name: 'Sanju Kumari', role: 'Event Coordinator', image: null },
        { name: 'Anup Basnet', role: 'Logistics Head', image: null },
        { name: 'Priya Rai', role: 'Marketing Lead', image: null },
        { name: 'Sushil Thapa', role: 'Sponsorship Manager', image: null },
      ],
      teams: [
        {
          name: 'EcoTech Solutions',
          image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&auto=format&fit=crop',
          problemStatement: 'High carbon emissions from traditional energy sources in rural communities.',
          solutionOverview: 'Affordable renewable energy solutions using solar and wind power tailored for off-grid communities.',
          impact: '50+ households powered, 30 tons CO2 reduced annually',
          tags: ['Renewable Energy', 'Solar Power', 'Rural Access']
        },
      ],
      winners: [
        { place: '1ST PLACE', team: 'Coming Soon', image: null, description: 'Competition scheduled for 2025.' },
        { place: '2ND PLACE', team: 'Coming Soon', image: null, description: 'Competition scheduled for 2025.' },
        { place: '3RD PLACE', team: 'Coming Soon', image: null, description: 'Competition scheduled for 2025.' },
      ],
      judges: [
        { name: 'Dr. Aisha Singh', role: 'Chief Innovation Officer', image: null },
        { name: 'Mr. Bijan Dahal', role: 'Founder & CEO', image: null },
        { name: 'Ms. Nisha Tamang', role: 'Social Entrepreneur', image: null },
        { name: 'Prof. Suresh Rana', role: 'Dean', image: null },
      ],
      sponsors: ['Nepal Telecom', 'Nabil Bank', 'Vianet Communications', 'Coca-Cola Nepal'],
      eventPhotos: []
    },

    '2026': {
      heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop',
      globalTheme: 'Innovation for Tomorrow',
      globalDescription: 'Pioneering breakthrough solutions for emerging global challenges using cutting-edge technology.',
      collegeTheme: 'Local Solutions, Global Impact: Tomorrow\'s Solutions',
      organizingCommittee: [
        { name: 'Robin Sharma', role: 'Lead Organizer', image: null },
        { name: 'Sanju Kumari', role: 'Event Coordinator', image: null },
        { name: 'Anup Basnet', role: 'Logistics Head', image: null },
        { name: 'Priya Rai', role: 'Marketing Lead', image: null },
        { name: 'Sushil Thapa', role: 'Sponsorship Manager', image: null },
      ],
      teams: [],
      winners: [
        { place: '1ST PLACE', team: 'Coming Soon', image: null, description: 'Registration opens Q1 2026.' },
        { place: '2ND PLACE', team: 'Coming Soon', image: null, description: 'Registration opens Q1 2026.' },
        { place: '3RD PLACE', team: 'Coming Soon', image: null, description: 'Registration opens Q1 2026.' },
      ],
      judges: [],
      sponsors: [],
      eventPhotos: []
    },
  };

  const currentYearData = yearData[year] || yearData['2024'];

  const toggleTeam = (index) => {
    setExpandedTeams(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="yearpage-modern">
      {/* Back Button */}
      <div className="yearpage-back-section">
        <div className="yearpage-container">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate('/teamproject')}
            className="yearpage-back-btn"
          >
            Back to Teams & Projects
          </Button>
        </div>
      </div>

      {/* Hero with Background Image */}
      <section className="yearpage-hero-section">
        <div className="yearpage-hero-bg" style={{ backgroundImage: `url(${currentYearData.heroImage})` }}>
          <div className="yearpage-hero-overlay"></div>
        </div>
        <div className="yearpage-container">
          <h1 className="yearpage-hero-title yearpage-animate">
            Hult Prize @SAMRIDDHI COLLEGE {year}
          </h1>
        </div>
      </section>

      {/* Theme Cards */}
      <section className="yearpage-themes-section">
        <div className="yearpage-container">
          <div className="yearpage-themes-grid">
            <div className="yearpage-theme-card yearpage-animate">
              <div className="yearpage-theme-label">Global Theme</div>
              <h2 className="yearpage-theme-title">{currentYearData.globalTheme}</h2>
              <p className="yearpage-theme-desc">{currentYearData.globalDescription}</p>
            </div>
            
            <div className="yearpage-theme-card yearpage-animate">
              <div className="yearpage-theme-label">Samriddhi College Theme</div>
              <h2 className="yearpage-theme-title">{currentYearData.collegeTheme}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Organizing Committee */}
      {currentYearData.organizingCommittee.length > 0 && (
        <section className="yearpage-section">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Organizing Committee</h2>
            <div className="yearpage-committee-grid">
              {currentYearData.organizingCommittee.map((member, idx) => (
                <div key={idx} className="yearpage-committee-item yearpage-animate">
                  <Avatar size={100} icon={<UserOutlined />} className="yearpage-avatar" />
                  <h3 className="yearpage-member-name">{member.name}</h3>
                  <p className="yearpage-member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Teams */}
      {currentYearData.teams.length > 0 && (
        <section className="yearpage-section yearpage-section-dark">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Participating Teams & Projects</h2>
            <div className="yearpage-teams-list">
              {currentYearData.teams.map((team, idx) => (
                <div key={idx} className="yearpage-team-card yearpage-animate">
                  <div 
                    className="yearpage-team-header"
                    onClick={() => toggleTeam(idx)}
                  >
                    <div className="yearpage-team-header-content">
                      {team.image && (
                        <div className="yearpage-team-image" style={{ backgroundImage: `url(${team.image})` }}></div>
                      )}
                      <h3 className="yearpage-team-name">{team.name}</h3>
                    </div>
                    <div className="yearpage-team-icon">
                      {expandedTeams[idx] ? <MinusOutlined /> : <PlusOutlined />}
                    </div>
                  </div>
                  
                  {expandedTeams[idx] && (
                    <div className="yearpage-team-details">
                      <div className="yearpage-team-block">
                        <h4>Problem Statement:</h4>
                        <p>{team.problemStatement}</p>
                      </div>
                      <div className="yearpage-team-block">
                        <h4>Solution Overview:</h4>
                        <p>{team.solutionOverview}</p>
                      </div>
                      <div className="yearpage-team-block">
                        <h4>Impact:</h4>
                        <p>{team.impact}</p>
                      </div>
                      <div className="yearpage-team-tags">
                        {team.tags.map((tag, i) => (
                          <span key={i} className="yearpage-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Winners */}
      <section className="yearpage-section">
        <div className="yearpage-container">
          <h2 className="yearpage-section-heading yearpage-animate">Hult Prize {year} Winners</h2>
          <div className="yearpage-winners-grid">
            {currentYearData.winners.map((winner, idx) => (
              <div key={idx} className="yearpage-winner-card yearpage-animate">
                {winner.image && (
                  <div className="yearpage-winner-image" style={{ backgroundImage: `url(${winner.image})` }}></div>
                )}
                <div className="yearpage-winner-content">
                  <div className="yearpage-winner-place">{winner.place}</div>
                  <h3 className="yearpage-winner-team">{winner.team}</h3>
                  <p className="yearpage-winner-desc">{winner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Judges */}
      {currentYearData.judges.length > 0 && (
        <section className="yearpage-section yearpage-section-dark">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Judges & Mentors</h2>
            <div className="yearpage-judges-grid">
              {currentYearData.judges.map((judge, idx) => (
                <div key={idx} className="yearpage-judge-item yearpage-animate">
                  <Avatar size={100} icon={<UserOutlined />} className="yearpage-avatar yearpage-avatar-judge" />
                  <h3 className="yearpage-judge-name">{judge.name}</h3>
                  <p className="yearpage-judge-role">{judge.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sponsors */}
      {currentYearData.sponsors.length > 0 && (
        <section className="yearpage-section">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Our Valued Sponsors</h2>
            <div className="yearpage-sponsors-grid">
              {currentYearData.sponsors.map((sponsor, idx) => (
                <div key={idx} className="yearpage-sponsor-card yearpage-animate">
                  {sponsor}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
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

export default YearPage;