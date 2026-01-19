import { Flex, Button, Drawer } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
import { Menu, X } from "lucide-react";

const RootLayout = () => {
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
    <div className="font-sans">
      <header className="bg-black/90 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex items-center gap-3 justify-around !px-2">
                <img
                  src={logo}
                  alt="Hult Prize Logo"
                  className=" w-12 h-12 object-contain transition-transform group-hover:scale-105"
                  style={{ width: '60px', height: '60px' }}
                />
                <div className="h-8 w-0.5 bg-white/20 hidden sm:block"></div>
                <img
                  src={SamriddhiLogo}
                  alt="Samriddhi Logo"
                  className="w-12 h-12 object-contain transition-transform group-hover:scale-105"
                  style={{ width: '60px', height: '60px' }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#E5007E] ${location.pathname === link.path ? "text-[#E5007E]" : "text-gray-300"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/joinus">
                <Button
                  type="primary"
                  className="bg-[#E5007E] hover:bg-[#c0006a] border-[#E5007E] font-bold shadow-lg shadow-[#E5007E]/20"
                >
                  Join Us
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
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
        <div className="flex flex-col p-4 space-y-2 bg-black h-full">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMobileMenu}
              className={`px-4 py-3 rounded-lg text-lg font-medium transition-all ${location.pathname === link.path
                ? "bg-[#E5007E]/10 text-[#E5007E]"
                : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-white/10">
            <Link to="/joinus" onClick={closeMobileMenu} className="block">
              <Button
                type="primary"
                block
                size="large"
                className="bg-[#E5007E] hover:bg-[#c0006a] border-[#E5007E] font-bold h-12"
              >
                Join Us
              </Button>
            </Link>
          </div>
        </div>
      </Drawer>

      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
