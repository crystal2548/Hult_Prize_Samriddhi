import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

import homeStatsData from '../data/homeStatsData.js';

const StatsSection = () => {
    // Official Data from Hult Prize Website
    const statsData = homeStatsData;
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="home-stats-section" ref={sectionRef}>
            <div className="home-stats-grid">
                {statsData.map((item, index) => (
                    <div key={index} className="home-stat-item home-animate">
                        <div className="home-stat-number">
                            {isVisible && (
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    separator=","
                                    prefix={item.prefix || ""}
                                    suffix={item.suffix || ""}
                                />
                            )}
                        </div>
                        <div className="home-stat-label">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StatsSection;