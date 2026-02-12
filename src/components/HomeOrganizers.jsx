import React, { useEffect, useState } from 'react';
import './styles/homeOrganizers.css';
// import organizersData from '../data/organizersData.js';
import { LinkedinFilled } from '@ant-design/icons';

import { getAllOrganizers } from '../lib/services/organizations.service.js';

const HomeOrganizers = () => {
    const [organizers, setOrganizers] = useState([]);
    const [loading, setLoading] = useState(false);

    // Define role hierarchy (lower number = higher position)
    const roleHierarchy = {
        'campus director': 1,
        'deputy campus director': 2,
        'event management': 3,
        'event manager': 3,
        'event co-ordinator': 3,
        'event coordinator': 3,
        'marketing and communication lead': 4,
        'marketing and communication': 4,
        'technical head': 5,
        'team\'s startup adviser': 6,
        'team\'s startup advisor': 6,
        'startup team advisor': 6,
        'graphic designer': 7,
        'graphics designer': 7,
        'content & social media manager': 8,
        'social media manager': 8,
        'social media': 8,
        'content creator': 8,
        'content writer': 8,
        'video editor': 9,
        'photographer': 10,
        'volunteer head': 11,
        'volunteering lead': 11,
        'logistics head': 12,
        'logistic head': 12,
        'sponsor manager': 13,
        'sponsor co-ordinator': 13,
        'sponsor coordinator': 13,
        'correspondence': 14,
    };

    const sortByRoleHierarchy = (members) => {
        return [...members].sort((a, b) => {
            const roleA = a.role?.toLowerCase().trim() || '';
            const roleB = b.role?.toLowerCase().trim() || '';

            const rankA = roleHierarchy[roleA] || 999;
            const rankB = roleHierarchy[roleB] || 999;

            // Debug: log roles and their ranks
            // console.log(`${a.name}: "${roleA}" = rank ${rankA}`);

            return rankA - rankB;
        });
    };

    useEffect(() => {
        async function getOrganizers() {
            try {
                const data = await getAllOrganizers();
                if (!data) {
                    return
                }
                // Sort organizers by role hierarchy
                const sortedData = sortByRoleHierarchy(data);
                setOrganizers(sortedData);
                // console.log(organizers);
            }
            catch (err) {
                console.log(err);
            }
        }

        getOrganizers();
    }, [])
    return (
        <section className="home-organizers-section">
            <div className="home-organizers-container">
                <div className="home-organizers-header">
                    <h2 className="home-organizers-title">Meet Our Organizing Committee</h2>
                    <p className="home-organizers-subtitle">
                        The dedicated team behind Hult Prize at Samriddhi College
                    </p>
                </div>

                <div className="home-organizers-grid">
                    {organizers.map((member, index) => (
                        <div key={index} className="home-organizer-card">
                            <div className="organizer-img-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="organizer-img"
                                    loading='lazy'
                                />
                                <div className="organizer-social-overlay">
                                    <a href={member.linkedin} target="_blank" className="organizer-social-link"><LinkedinFilled /></a>
                                </div>
                            </div>
                            <div className="organizer-info">
                                <h3 className="organizer-name">{member.name}</h3>
                                <p className="organizer-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeOrganizers;
