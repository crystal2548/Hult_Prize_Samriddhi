import globalWinners from '../data/globalWinnersData.js';

const WinningTeam = () => {
    const winners = globalWinners;

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