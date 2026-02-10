import React from 'react';
import './styles/impact.css';

const Impact = () => {
  return (
    <div className="impact-page">
      {/* Hero Section */}
      <div className="impact-hero">
        <div className="impact-hero-content">
          <p className="impact-hero-label animate-fade-in-down">Making a Difference</p>
          <h1 className="impact-hero-title animate-fade-in-up animate-delay-200">Our Impact</h1>
          <p className="impact-hero-subtitle animate-fade-in-up animate-delay-400">
            Creating lasting change through social entrepreneurship
          </p>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="impact-content">
        <div className="impact-metrics">
          <div className="impact-metric">
            <div className="impact-metric-number">350+</div>
            <div className="impact-metric-label">Students Impacted</div>
          </div>

          <div className="impact-metric">
            <div className="impact-metric-number">14+</div>
            <div className="impact-metric-label">Innovative Projects</div>
          </div>

          <div className="impact-metric">
            <div className="impact-metric-number">70+</div>
            <div className="impact-metric-label">Active Participants</div>
          </div>

          <div className="impact-metric">
            <div className="impact-metric-number">4+</div>
            <div className="impact-metric-label">Years of Impact</div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="impact-stories">
          <h2 className="impact-stories-title">
            Areas of Impact
          </h2>

          {/* Community Development */}
          <div className="impact-story">
            <div className="impact-story-content">
              <h3>Community Development</h3>
              <p>
                Our teams have developed innovative solutions addressing local challenges, from
                improving agricultural practices to creating accessible healthcare systems. These
                projects have directly benefited communities across Nepal.
              </p>
              <ul className="impact-story-list">
                <li>
                  <span>•</span>
                  <span>Sustainable farming initiatives</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Healthcare accessibility projects</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Educational empowerment programs</span>
                </li>
              </ul>
            </div>
            <div className="impact-story-visual">
              <span>🌱</span>
            </div>
          </div>

          {/* Student Empowerment */}
          <div className="impact-story">
            <div className="impact-story-visual">
              <span>🎓</span>
            </div>
            <div className="impact-story-content">
              <h3>Student Empowerment</h3>
              <p>
                Beyond competitions, we've created a lasting impact on our participants' lives.
                Students gain valuable skills in entrepreneurship, leadership, and social innovation
                that shape their future careers and perspectives.
              </p>
              <ul className="impact-story-list">
                <li>
                  <span>•</span>
                  <span>Entrepreneurial skill development</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Leadership training opportunities</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Global networking experiences</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Recognition */}
          <div className="impact-story">
            <div className="impact-story-content">
              <h3>Global Recognition</h3>
              <p>
                Our teams have represented Samriddhi College on international platforms, bringing
                recognition to our institution and inspiring others to join the social entrepreneurship
                movement. We've connected with global networks and brought best practices back home.
              </p>
              <ul className="impact-story-list">
                <li>
                  <span>•</span>
                  <span>International competition participation</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Global mentorship connections</span>
                </li>
                <li>
                  <span>•</span>
                  <span>Cross-cultural collaboration</span>
                </li>
              </ul>
            </div>
            <div className="impact-story-visual">
              <span>🌍</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="impact-cta">
          <h3>Want to Create Impact?</h3>
          <p>
            Join us in our mission to create lasting change through social entrepreneurship.
            Every idea has the potential to transform lives.
          </p>
          <button className="impact-cta-btn">
            Get Involved
          </button>
        </div>
      </div>
    </div>
  );
};

export default Impact;