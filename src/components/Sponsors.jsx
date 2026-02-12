import React from 'react';
import yearData from '../data/yearData.js';
import './styles/sponsors.css';

const Sponsors = () => {
    // Collect all sponsors from all years
    const allSponsors = [];

    Object.keys(yearData).forEach(year => {
        if (yearData[2026].sponsors && yearData[2026].sponsors.length > 0) {
            yearData[2026].sponsors.forEach(sponsor => {
                // Avoid duplicates by checking if sponsor already exists
                const exists = allSponsors.find(s => s.name === sponsor.name);
                if (!exists) {
                    allSponsors.push(sponsor);
                }
            });
        }
    });

    if (allSponsors.length === 0) {
        return null;
    }

    return (
        <div className="sponsors-section">
            <div className="sponsors-container">
                <h2 className="sponsors-title">Our Sponsors</h2>
                <p className="sponsors-subtitle">
                    Thank you to our amazing sponsors who make this competition possible
                </p>

                <div className="sponsors-grid">
                    {allSponsors.map((sponsor, index) => (
                        <div key={index} className="sponsor-card">
                            <div className="sponsor-logo-wrapper">
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="sponsor-logo"
                                />
                            </div>
                            <p className="sponsor-name">{sponsor.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
