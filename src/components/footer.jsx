import React from 'react';
import { Link } from 'react-router-dom';
import './styles/footer.css';
import logo from '../assets/logo.png';
import SamriddhiLogo from '../assets/SamriddhiLogo.png';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer className="footer-container">
            <div className="footer-content-wrapper">
                {/* Brand Section */}
                <div className="footer-brand">
                    <div className="navbar-logo-section">
                        <img src={logo} alt="LOGO" className="navbar-logo" onClick={() => navigate('/')} />
                        <div className="navbar-logo-divider"></div>
                        <img src={SamriddhiLogo} alt="SamriddhiLogo" className="navbar-logo" onClick={() => navigate('/')} />
                    </div>
                    <p className="footer-tagline">
                        Empowering the next generation of social entrepreneurs.
                    </p>
                </div>

                {/* Links Section */}
                <div className="footer-links-section">
                    {/* About Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">About</h3>
                        <Link
                            to="/our-story"
                            className="footer-link"
                        >
                            Our Story
                        </Link>
                        <Link
                            to="/mission"
                            className="footer-link"
                        >
                            Mission
                        </Link>
                        <Link
                            to="/impact"
                            className="footer-link"
                        >
                            Impact
                        </Link>
                    </div>

                    {/* Resources Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Resources</h3>
                        <Link
                            to="/learnMore"
                            className="footer-link"
                        >
                            Learn More
                        </Link>
                        <Link
                            to="/faq"
                            className="footer-link"
                        >
                            FAQ
                        </Link>
                        <Link
                            to="/blog"
                            className="footer-link"
                        >
                            Blog
                        </Link>
                    </div>

                    {/* Connect Section */}
                    <div className="footer-column">
                        <h3 className="footer-heading">Connect</h3>
                        <Link
                            to="/partners"
                            className="footer-link"
                        >
                            Partners
                        </Link>
                        <Link
                            to="/contact"
                            className="footer-link"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/developer"
                            className="footer-link"
                        >
                            Developers
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                © {new Date().getFullYear()} Hult Prize at Samriddhi College. All rights reserved.
            </div>
        </footer >
    );
};

export default Footer;