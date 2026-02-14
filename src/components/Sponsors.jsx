import React from 'react';
import yearData from '../data/yearData.js';
import './styles/sponsors.css';

const Sponsors = ({ year }) => {
    // Collect sponsors based on props
    const allSponsors = [];

    // If year is provided, show only that year's sponsors
    if (year) {
        if (yearData[year] && yearData[year].sponsors) {
            allSponsors.push(...yearData[year].sponsors);
        }
    } else {
        // If no year provided (default to current year / home page), show 2026 sponsors
        // or you can choose to show ALL unique sponsors across all years if that's the requirement.
        // The user said: "home page display the sponsers of the current year"
        // Assuming current year is 2026 based on yearData structure in previous diffs.
        const currentYear = '2026';
        if (yearData[currentYear] && yearData[currentYear].sponsors) {
            allSponsors.push(...yearData[currentYear].sponsors);
        }
    }

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
