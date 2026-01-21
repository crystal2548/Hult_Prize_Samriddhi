import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
    // Official Data from Hult Prize Website
    const statsData = [
        { value: 130, suffix: "+", label: "Participating Countries" },
        { value: 50, suffix: "K+", label: "Entrepreneurs" },
        { value: 200, suffix: "K+", label: "Annual Participants" },
        { value: 1, prefix: "$", suffix: "M", label: "Annual Prize Funding" }
    ];

    return (
        <div className="home-stats-section">
            <div className="home-stats-grid">
                {statsData.map((item, index) => (
                    <div key={index} className="home-stat-item home-animate">
                        <div className="home-stat-number">
                            <CountUp 
                                start={0} 
                                end={item.value} 
                                duration={2.5} 
                                separator="," 
                                prefix={item.prefix || ""} 
                                suffix={item.suffix || ""} 
                                enableScrollSpy 
                                scrollSpyOnce
                            />
                        </div>
                        <div className="home-stat-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StatsSection;