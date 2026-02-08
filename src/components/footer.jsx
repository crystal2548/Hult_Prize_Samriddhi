import React from 'react';
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
import './styles/navbar.css';
import './styles/footer.css';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">

                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="footer-logo-section">
                        <img src={logo} alt="LOGO" width={60} height={60} />
                        <div className="footer-logo-divider"></div>
                        <img src={SamriddhiLogo} alt="SamriddhiLogo" width={60} height={60} />
                    </div>
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
                        <Link to="/learnMore">Learn More</Link>
                        <a href="">FAQ</a>
                        <Link to="/blog">Blog</Link>
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