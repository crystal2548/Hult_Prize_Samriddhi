import { Button, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
import { Menu, X, Home, Info, UserPlus, Briefcase, Trophy } from "lucide-react";

import "./styles/navbar.css";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(2); // Home is at index 2 (center)
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Teams & Projects", path: "/teamproject" },
    { name: "Winners", path: "/winners" },
    { name: "Contact", path: "/contact" },
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
      <header className="navbar-header">
        <div className="navbar-container">
          {/* Left side - Logo */}
          <div className="navbar-logo-section">
            <img src={logo} alt="LOGO" width={60} height={60} />
            {/* <div className="navbar-logo-divider"></di`v>
            <img src={SamriddhiLogo} alt="SamriddhiLogo`" width={60} height={60} /> */}
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
            <>
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/teamproject" className="nav-link">Teams&Projects</Link>
              <Link to="/winners" className="nav-link">Winners</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/joinus">
                <Button type="primary" className="join-us-btn">
                  Join Us
                </Button>
              </Link>
            </>
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
