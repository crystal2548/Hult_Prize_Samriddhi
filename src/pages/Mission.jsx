import React from 'react';
import './styles/mission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      {/* Hero Section */}
      <div className="mission-hero">
        <div className="mission-hero-content">
          <p className="mission-hero-label animate-fade-in-down">Our Purpose</p>
          <h1 className="mission-hero-title animate-fade-in-up animate-delay-200">Mission</h1>
          <p className="mission-hero-subtitle animate-fade-in-up animate-delay-400">
            Empowering the next generation of social entrepreneurs
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-content">
        <div className="mission-statement">
          <h2 className="mission-statement-title">
            Our Mission Statement
          </h2>
          <p className="mission-statement-text">
            To cultivate a thriving ecosystem of social innovation at Samriddhi College,
            where students develop entrepreneurial skills, create sustainable solutions,
            and drive positive change in communities worldwide.
          </p>
        </div>

        {/* Core Values */}
        <div className="mission-values-grid">
          <div className="mission-value-card">
            <div className="mission-value-icon">💡</div>
            <h3 className="mission-value-title">Innovation</h3>
            <p className="mission-value-text">
              Fostering creative thinking and breakthrough solutions to address global challenges.
            </p>
          </div>

          <div className="mission-value-card">
            <div className="mission-value-icon">🤝</div>
            <h3 className="mission-value-title">Collaboration</h3>
            <p className="mission-value-text">
              Building partnerships and networks that amplify our collective impact.
            </p>
          </div>

          <div className="mission-value-card">
            <div className="mission-value-icon">🌍</div>
            <h3 className="mission-value-title">Impact</h3>
            <p className="mission-value-text">
              Creating measurable, sustainable change that transforms lives and communities.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mission-actions-section">
          <h2 className="mission-actions-title">What We Do</h2>

          <div className="mission-actions-grid">
            <div className="mission-action-item">
              <div className="mission-action-icon">✓</div>
              <div className="mission-action-content">
                <h3>Empower Students</h3>
                <p>
                  Provide resources, mentorship, and platforms for students to develop their entrepreneurial potential.
                </p>
              </div>
            </div>

            <div className="mission-action-item">
              <div className="mission-action-icon">✓</div>
              <div className="mission-action-content">
                <h3>Drive Innovation</h3>
                <p>
                  Encourage creative problem-solving aligned with UN Sustainable Development Goals.
                </p>
              </div>
            </div>

            <div className="mission-action-item">
              <div className="mission-action-icon">✓</div>
              <div className="mission-action-content">
                <h3>Build Community</h3>
                <p>
                  Create a supportive network of like-minded changemakers and social entrepreneurs.
                </p>
              </div>
            </div>

            <div className="mission-action-item">
              <div className="mission-action-icon">✓</div>
              <div className="mission-action-content">
                <h3>Compete Globally</h3>
                <p>
                  Represent Samriddhi College on international stages and bring global perspectives home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;