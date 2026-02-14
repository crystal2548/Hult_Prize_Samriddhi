import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined, ArrowLeftOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import './styles/Yearpage.css';
import yearData from '../data/yearData.js';
import Sponser from '../components/Sponsors.jsx';

const YearPage = () => {
  const { year } = useParams();
  const navigate = useNavigate();
  const [expandedTeams, setExpandedTeams] = useState({});

  // Scroll animations
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [year]);

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
      <section className="yearpage-hero-section" style={{ backgroundColor: currentYearData.heroBgColor || '#FFFFFF' }}>
        <div className="yearpage-hero-bg" style={{ backgroundImage: `url(${currentYearData.heroImage})` }}>
          <div className="yearpage-hero-overlay"></div>
        </div>
        <div className="yearpage-container">
          <h1 className="yearpage-hero-title yearpage-animate">
            Hult Prize at SAMRIDDHI COLLEGE {year}
          </h1>
        </div>
      </section>

      {/* Global Theme - SINGLE CARD */}
      <section className="yearpage-themes-section">
        <div className="yearpage-container">
          <div className="yearpage-single-theme">
            <div className="yearpage-theme-card yearpage-animate">
              <div className="yearpage-theme-label">Global Theme</div>
              <h2 className="yearpage-theme-title">{currentYearData.globalTheme}</h2>
              <p className="yearpage-theme-desc">{currentYearData.globalDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams - SECTION 1 */}
      {currentYearData.teams && currentYearData.teams.length > 0 && (
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
                      {team.members && team.members.length > 0 && (
                        <div className="yearpage-team-block">
                          <h4>Team Members:</h4>
                          <div className="yearpage-team-members">
                            {team.members.join(', ')}
                          </div>
                        </div>
                      )}
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

      {/* Winners - SECTION 2 */}
      <section className="yearpage-section">
        <div className="yearpage-container">
          <h2 className="yearpage-section-heading yearpage-animate">Hult Prize {year} Winners</h2>
          <div className="yearpage-winners-grid">
            {currentYearData.winners && currentYearData.winners.map((winner, idx) => (
              <div
                key={idx}
                className={`yearpage-winner-card yearpage-animate ${idx === 0 ? 'yearpage-winner-first' :
                  idx === 1 ? 'yearpage-winner-second' :
                    'yearpage-winner-third'
                  }`}
              >
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

      {/* Judges - SECTION 3 */}
      {currentYearData.judges && currentYearData.judges.length > 0 && (
        <section className="yearpage-section yearpage-section-dark">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Judges & Mentors</h2>
            <div className="yearpage-judges-grid">
              {currentYearData.judges.map((judge, idx) => (
                <div key={idx} className="yearpage-judge-item yearpage-animate">
                  <Avatar size={100} src={judge.image} icon={<UserOutlined />} className="yearpage-avatar yearpage-avatar-judge" />
                  <h3 className="yearpage-judge-name">{judge.name}</h3>
                  <p className="yearpage-judge-role">{judge.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Organizing Committee - SECTION 4 */}
      {currentYearData.organizingCommittee && currentYearData.organizingCommittee.length > 0 && (
        <section className="yearpage-section">
          <div className="yearpage-container">
            <h2 className="yearpage-section-heading yearpage-animate">Organizing Committee</h2>
            <div className="yearpage-committee-grid">
              {currentYearData.organizingCommittee.map((member, idx) => (
                <div key={idx} className="yearpage-committee-item yearpage-animate">
                  <Avatar size={100} src={member.image} icon={<UserOutlined />} className="yearpage-avatar" />
                  <h3 className="yearpage-member-name">{member.name}</h3>
                  <p className="yearpage-member-role">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Sponser year={year} />
    </div>
  );

};

export default YearPage;