import { Button, Drawer } from "antd";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
import { Menu, X } from "lucide-react";

import "./styles/navbar.css";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "Profile", path: "/profile" },
    // { name: "Complain", path: "/complain" },
    { name: "About", path: "/about" },
    { name: "Teams & Projects", path: "/teamproject" },
    { name: "Winners", path: "/winners" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="navbar-header">
        <div className="navbar-container">
          {/* left side - Logo */}
          <div className="navbar-logo-section">
            <img src={logo} alt="LOGO" width={60} height={60} />
            <div className="navbar-logo-divider"></div>
            <img src={SamriddhiLogo} alt="SamriddhiLogo" width={60} height={60} />
          </div>
          

          {/* right side - Mobile Menu Button */}
          <div className="mobile-menu-btn-container">
             <Button 
               type="text" 
               onClick={toggleMobileMenu} 
               icon={<Menu color="white" size={24} />} 
               style={{ border: 'none' }}
             />
          </div>

          {/* right side - Desktop Menu */}
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

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="text-white font-bold">Menu</span>
          </div>
        }
        placement="right"
        onClose={closeMobileMenu}
        open={mobileMenuOpen}
        styles={{
          header: {
            backgroundColor: '#000',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            color: 'white'
          },
          body: {
            backgroundColor: '#000',
            padding: 0
          },
          mask: {
            backdropFilter: 'blur(4px)'
          }
        }}
        closeIcon={<X color="white" />}
      >
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={`mobile-nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mobile-menu-separator">
            <Link to="/joinus" onClick={closeMobileMenu} className="mobile-join-us-link">
              <Button
                type="primary"
                block
                size="large"
                className="join-us-btn"
              >
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
