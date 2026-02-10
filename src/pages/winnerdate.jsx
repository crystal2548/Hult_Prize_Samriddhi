import React from 'react';
import "../pages/styles/home.css";

const WinnerData = ({ first, second, third, heading }) => {
    const winners = [
        { ...first, place: "1st Place", color: "text-amber-400" },
        { ...second, place: "2nd Place", color: "text-gray-300" },
        { ...third, place: "3rd Place", color: "text-orange-400" },
    ];

    return (
        <div className="home-winners-section" style={{ padding: '60px 24px', background: 'transparent' }}>
            {heading && (
                <h2 className="section-heading-home" style={{ marginBottom: '40px' }}>
                    {heading}
                </h2>
            )}

            <div className="home-winners-grid">
                {winners.map((item, index) => (
                    <div
                        key={index}
                        className={`winner-card-wrapper home-animate ${index === 0 ? 'winner-first' :
                            index === 1 ? 'winner-second' :
                                'winner-third'
                            }`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className="winner-card">
                            <div className="winner-card-front">
                                <div className="winner-lighting-overlay"></div>
                                {/* Placeholder Gradient since no image is provided yet */}
                                <div className="winner-image" style={{
                                    backgroundImage: `url(${item.image})`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {/* <h3 className={`winner-title ${item.color}`} style={{ fontSize: '2rem' }}>{item.place}</h3> */}
                                </div>
                                <div className="winner-info">
                                    <h3 className="winner-title">{item.title}</h3>
                                </div>
                            </div>
                            <div className="winner-card-back">
                                <div className="winner-lighting-overlay"></div>
                                <p className="winner-quote" style={{ fontSize: '14px' }}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WinnerData;