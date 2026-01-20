import React from 'react';
import './styles/footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">

                {/* Brand Section */}
                <div className="footer-brand">
                    <h1 className="footer-logo">
                        Hult Prize Samriddhi
                    </h1>
                    <p className="footer-tagline">
                        Empowering the next generation of social entrepreneurs.
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-links-section">
                <div className="footer-column">
                    <h3 className="footer-heading">About</h3>
                    <a href="">Our Story</a>
                    <a href="">Mission</a>
                    <a href="">Impact</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Resources</h3>
                    <a href="">Past Challenges</a>
                    <a href="">FAQ</a>
                    <a href="">Blog</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">Connect</h3>
                    <a href="">Partners</a>
                    <a href="">Careers</a>
                    <a href="">Support</a>
                </div>
                </div>
            </div>
            <br />
            <hr />
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} Hult Prize Samriddhi. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;