import React from 'react';
import './styles/winningTeam.css';

const WinningTeam = () => {
    const winners = [
        { 
            title: "Stick 'Em", 
            year: "2025 Winner",
            image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000",
            quote: "Every child deserves access to STEAM education. We simplify technology to unlock creativity in students everywhere.",
            author: "Adam & Kai"
        },
        { 
            title: "Korion Health", 
            year: "2024 Winner", 
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
            quote: "The Hult Prize shifted our horizons to think more globally. We really liked the opportunity to travel internationally.",
            author: "Akshaya Anand"
        },
        { 
            title: "Ecobana", 
            year: "2022 Winner", 
            image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&q=80&w=1000",
            quote: "I believe there should be no barriers to young women achieving their dreams. We removed the dilemma of affording period products.",
            author: "Lennox Omondi"
        },
    ];

    return (
        <div className="home-winners-section">
            <h2 className="section-heading-home">Meet Our Global Winners</h2>
            
            <div className="home-winners-grid">
                {winners.map((item, index) => (
                    <div 
                        key={index} 
                        className={`winner-card-wrapper home-animate ${
                            index === 0 ? 'winner-first' : 
                            index === 1 ? 'winner-second' : 
                            'winner-third'
                        }`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="winner-card">
                            <div className="winner-card-front">
                                <div className="winner-lighting-overlay"></div>
                                <div className="winner-image" style={{ backgroundImage: `url(${item.image})` }}></div>
                                <div className="winner-info">
                                    <h3 className="winner-title">{item.title}</h3>
                                    <span className="winner-year">{item.year}</span>
                                </div>
                            </div>
                            <div className="winner-card-back">
                                <div className="winner-lighting-overlay"></div>
                                <p className="winner-quote">"{item.quote}"</p>
                                <span className="winner-author">- {item.author}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WinningTeam;