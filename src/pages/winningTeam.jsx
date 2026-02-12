import React, { useEffect, useState } from 'react';

// import globalWinners from '../data/globalWinnersData.js';
import { getAllWinners } from '../lib/services/winners.service.js';
const WinningTeam = () => {
    const [winner, setwinner] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getWinners() {
            try {
                const data = await getAllWinners();
                if (!data) {
                    return
                }
                setwinner(data);
                // console.log(winner);
            }
            catch (err) {
                console.log(err);
            }
        }

        getWinners();
    }, [])
    const winnersInfo = winner;

    return (
        <div className="home-winners-section">
            <h2 className="section-heading-home">Meet Our Winners</h2>

            <div className="home-winners-grid">
                {winnersInfo.map((item, index) => (
                    <div
                        key={index}
                        className={`winner-card-wrapper home-animate winner-first`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="winner-card">
                            <div className="winner-card-front">
                                <div className="winner-lighting-overlay"></div>
                                <div className="winner-image" style={{ backgroundImage: item.image ? `url(${item.image})` : 'none' }}></div>
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