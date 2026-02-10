import React from 'react';
import './styles/homeOrganizers.css';
import organizersData from '../data/organizersData.js';
import { LinkedinFilled, TwitterOutlined } from '@ant-design/icons';

const HomeOrganizers = () => {
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
                    {organizersData.map((member, index) => (
                        <div key={index} className="home-organizer-card">
                            <div className="organizer-img-wrapper">
                                <img 
                                    src={member.image} 
                                    alt={member.name} 
                                    className="organizer-img"
                                />
                                <div className="organizer-social-overlay">
                                    <a href="#" className="organizer-social-link"><LinkedinFilled /></a>
                                    <a href="#" className="organizer-social-link"><TwitterOutlined /></a>
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
