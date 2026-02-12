import React, { useEffect, useState } from 'react';
import './styles/homeOrganizers.css';
// import organizersData from '../data/organizersData.js';
import { LinkedinFilled, TwitterOutlined } from '@ant-design/icons';

import { getAllOrganizers } from '../lib/services/organizations.service.js';

const HomeOrganizers = () => {
    const [organizers, setOrganizers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getOrganizers() {
            try {
                const data = await getAllOrganizers();
                if (!data) {
                    return
                }
                setOrganizers(data);
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
