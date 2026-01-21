import React from 'react';
import { Card, Col, Row } from 'antd';

const StatsSection = () => {
    // Official Data from Hult Prize Website
    const statsData = [
        { value: "130+", label: "Participating Countries" },
        { value: "50K+", label: "Entrepreneurs" },
        { value: "200K+", label: "Annual Participants" },
        { value: "$1M", label: "Annual Prize Funding" }
    ];

    return (
        <div className="home-stats-section">
            <div className="home-stats-grid">
                {statsData.map((item, index) => (
                    <div key={index} className="home-stat-item home-animate">
                        <div className="home-stat-number">{item.value}</div>
                        <div className="home-stat-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StatsSection;