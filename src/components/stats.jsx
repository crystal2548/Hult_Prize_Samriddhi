import React from 'react';
import CountUp from 'react-countup';

import homeStatsData from '../data/homeStatsData.js';

const StatsSection = () => {
    // Official Data from Hult Prize Website
    const statsData = homeStatsData;

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