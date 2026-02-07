import { Button, Drawer } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
import { Menu, X, Home, Info, UserPlus, Briefcase, Trophy } from "lucide-react";

import "./styles/navbar.css";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Home is at index 2 (center)
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Scroll handler for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Teams & Projects", path: "/teamproject" },
    { name: "Winners", path: "/winners" },
  ];

  // Mobile bottom navbar items
  const mobileNavItems = [
    { name: "Winners", path: "/winners", icon: <Trophy /> },
    { name: "Projects", path: "/teamproject", icon: <Briefcase /> },
    { name: "Home", path: "/", icon: <Home /> }, // Center position
    { name: "Register", path: "/joinus", icon: <UserPlus /> },
    { name: "About", path: "/about", icon: <Info /> },
  ];

  // Update active index when location changes
  useEffect(() => {
    const index = mobileNavItems.findIndex((item) => item.path === location.pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Desktop/Top Navbar */}
      <header className={`navbar-header ${!isVisible ? 'navbar-hidden' : ''}`}>
        <div className="navbar-container">
          {/* Left side - Logo */}
          <div className="navbar-logo-section">
            <img src={logo} alt="LOGO" width={60} height={60} onClick={() => navigate('/')} />
            <div className="navbar-logo-divider"></div>
            <img src={SamriddhiLogo} alt="SamriddhiLogo`" width={60} height={60} onClick={() => window.open('https://samriddhicollege.edu.np', '_blank')} />
          </div>

          {/* Right side - Mobile Menu Button (Hidden, using bottom nav instead) */}
          <div className="mobile-menu-btn-container">
            <Button
              type="text"
              onClick={toggleMobileMenu}
              icon={<Menu color="white" size={24} />}
              style={{ border: "none" }}
            />
          </div>

          {/* Right side - Desktop Menu */}
          <div className="navbar-desktop-menu">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/joinus">
              <Button type="primary" className="join-us-btn">
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navbar - Only visible on mobile */}
      <div className="mobile-navbar-container">
        <nav className="mobile-navbar">
          {/* Animated Background Indicator */}
          <div
            className="active-indicator"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          >
            <div className="indicator-circle"></div>
          </div>

          {mobileNavItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`mobile-nav-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="nav-icon">{item.icon}</div>
              <span className="nav-label">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
