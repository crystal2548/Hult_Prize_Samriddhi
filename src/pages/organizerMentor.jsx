import React from 'react'
import './styles/organizerMentor.css'
import { User } from 'lucide-react'

import organizersData from '../data/organizersData.js';

const organizers = organizersData;

const OrganizerMentor = () => {
    return (
        <div className='organizer-mentor-page'>
            <div className='organizer-container'>
                <h1 className='section-title'>Our Organizing Committee</h1>
                
                <div className='organizer-grid'>
                    {organizers.map((member, index) => (
                        <div key={index} className='organizer-card'>
                            <div className='image-placeholder'>
                                <User size={48} className="placeholder-icon" />
                            </div>
                            <h3 className='member-name'>{member.name}</h3>
                            <p className='member-role'>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OrganizerMentor;
