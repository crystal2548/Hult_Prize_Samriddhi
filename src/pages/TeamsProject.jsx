import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col } from 'antd';
import { TeamOutlined, TrophyOutlined, RocketOutlined, CalendarOutlined, BulbOutlined, GlobalOutlined } from '@ant-design/icons';
import './styles/teamsProject.css';
import { getTeamProjectCards } from '../lib/yearContentStore.js';

const TeamsProject = () => {
  const navigate = useNavigate();
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const [yearCards, setYearCards] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadCards() {
      const cards = await getTeamProjectCards();
      if (active) {
        setYearCards(cards);
      }
    }

    loadCards();

    return () => {
      active = false;
    };
  }, []);

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
            <Col xs={12} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="46">0+</div>
                <div className="tpp-stat-label">Total Teams</div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="40">0+</div>
                <div className="tpp-stat-label">Active Participants</div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="4">0</div>
                <div className="tpp-stat-label">Years of Impact</div>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <div className="tpp-stat-box">
                <div className="tpp-stat-number" data-target="180">0+</div>
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
                      </div>short
                    </div>
                  }
                >
                  <div className="tpp-year-content">
                    {yearData.theme && yearData.theme !== yearData.globalTheme && (
                      <h3 className="tpp-year-name">{yearData.theme}</h3>
                    )}

                    {yearData.globalTheme && (
                      <div className="tpp-global-theme">
                        <GlobalOutlined className="tpp-global-theme-icon" />
                        <div>
                          <span className="tpp-global-theme-label">Global Theme</span>
                          <p className="tpp-global-theme-title">{yearData.globalTheme}</p>
                        </div>
                      </div>
                    )}

                    <p className="tpp-year-description">{yearData.description}</p>

                    <div className="tpp-year-info">
                      <div className="tpp-info-item">
                        <TeamOutlined className="tpp-info-icon" />
                        <span className="tpp-info-text">{yearData.teams} Teams</span>
                      </div>

                      <div className="tpp-info-item">
                        <GlobalOutlined className="tpp-info-icon" />
                        <span className="tpp-info-text">{yearData.participants ?? yearData.participations} Students</span>
                      </div>

                      {
                        <div className="tpp-info-item">
                          <TrophyOutlined className="tpp-info-icon" />
                          <span className="tpp-info-text">{yearData.status}</span>
                        </div>
                      }
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
            <button className="tpp-cta-button" onClick={() => navigate('/joinUs')}>
              Get Involved
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TeamsProject;
