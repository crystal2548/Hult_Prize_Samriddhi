import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { TeamOutlined, TrophyOutlined, RocketOutlined, CalendarOutlined, BulbOutlined, GlobalOutlined } from '@ant-design/icons';
import './styles/teamsProject.css';

const TeamsProject = () => {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Count-up animation function
  const animateNumbers = useCallback(() => {
    const counters = document.querySelectorAll('.tpp-stat-number');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
        }
      };
      updateCounter();
    });
  }, []);

  // Count-up animation
  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  // Trigger animation when hasAnimated becomes true
  useEffect(() => {
    if (hasAnimated) {
      animateNumbers();
    }
  }, [hasAnimated, animateNumbers]);

  // Year cards data
  const yearCards = [
    {
      year: '2026',
      theme: 'Innovation for Tomorrow',
      status: 'Upcoming',
      teams: 0,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      description: 'Registration opens Q1 2026',
      participants: 0
    },
    {
      year: '2025',
      theme: 'Climate Action',
      status: 'In Progress',
      teams: 3,
      image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=800&h=600&fit=crop',
      description: 'Ongoing competition focused on environmental sustainability',
      participants: 15
    },
    {
      year: '2024',
      theme: 'Food Security',
      status: 'Completed',
      teams: 6,
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      description: 'Addressing global hunger and sustainable agriculture',
      participants: 30
    },
    {
      year: '2023',
      theme: 'Youth Employment',
      status: 'Completed',
      teams: 5,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      description: 'Creating opportunities for young entrepreneurs',
      participants: 25
    }
  ];

  const getStatusColor = (status) => {
    if (status === 'Completed') return '#10b981';
    if (status === 'In Progress') return '#3b82f6';
    return '#6b7280';
  };

  return (
    <div className="tpp-wrapper">
      
      {/* Hero Section */}
      <section className="tpp-hero">
        <div className="tpp-hero-bg"></div>
        <div className="tpp-hero-inner">
          <p className="tpp-hero-label">SAMRIDDHI COLLEGE</p>
          <h1 className="tpp-hero-title">Teams & Projects</h1>
          <p className="tpp-hero-subtitle">
            Empowering students to create impactful solutions for global challenges through innovation and entrepreneurship
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="tpp-stats-section" ref={statsRef}>
        <div className="tpp-stats-container">
          <Row gutter={[48, 48]}>
            <Col xs={24} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="14">0+</div>
                <div className="tpp-stat-label">Total Teams</div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="70">0+</div>
                <div className="tpp-stat-label">Students Engaged</div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="4">0</div>
                <div className="tpp-stat-label">Years of Impact</div>
              </div>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="350">0+</div>
                <div className="tpp-stat-label">Total Participants</div>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Year Cards Section */}
      <section className="tpp-cards-section">
        <div className="tpp-cards-container">
          <h2 className="tpp-section-heading">Explore by Year</h2>
          <p className="tpp-section-subheading">Browse through our journey across different competition years</p>
          
          <Row gutter={[24, 24]}>
            {yearCards.map((yearData) => (
              <Col xs={24} sm={12} lg={6} key={yearData.year}>
                <Card 
                  className="tpp-year-card"
                  hoverable
                  onClick={() => navigate(`/teamproject/${yearData.year}`)}
                  cover={
                    <div className="tpp-year-img-box">
                      <img 
                        alt={`Hult Prize ${yearData.year}`}
                        src={yearData.image}
                        className="tpp-year-img"
                      />
                      <div className="tpp-year-badge" style={{ background: getStatusColor(yearData.status) }}>
                        {yearData.year} {yearData.status}
                      </div>
                    </div>
                  }
                >
                  <div className="tpp-year-content">
                    <h3 className="tpp-year-name">{yearData.theme}</h3>
                    
                    <p className="tpp-year-description">{yearData.description}</p>
                    
                    <div className="tpp-year-info">
                      <div className="tpp-info-item">
                        <TeamOutlined className="tpp-info-icon" />
                        <span className="tpp-info-text">{yearData.teams} Teams</span>
                      </div>
                      
                      <div className="tpp-info-item">
                        <GlobalOutlined className="tpp-info-icon" />
                        <span className="tpp-info-text">{yearData.participants} Students</span>
                      </div>
                      
                      {yearData.status === 'Completed' && (
                        <div className="tpp-info-item">
                          <TrophyOutlined className="tpp-info-icon" />
                          <span className="tpp-info-text">Winners Announced</span>
                        </div>
                      )}
                    </div>

                    <div className="tpp-card-footer">
                      <span className="tpp-view-link">View Details →</span>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tpp-cta-section">
        <div className="tpp-cta-container">
          <div className="tpp-cta-content">
            <BulbOutlined className="tpp-cta-icon" />
            <h2 className="tpp-cta-title">Ready to Make an Impact?</h2>
            <p className="tpp-cta-text">
              Join the next generation of social entrepreneurs and help solve the world's biggest challenges
            </p>
            <button className="tpp-cta-button" onClick={() => navigate('/contact')}>
              Get Involved
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamsProject;