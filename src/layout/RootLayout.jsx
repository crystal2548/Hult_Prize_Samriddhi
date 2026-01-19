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
    <div>
      <header>
        {/* left side one  pink-600*/}
        <Flex className="bg-black bg-opacity-90"
          justify="space-between"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "15px 20px",
            // backgroundColor: "#1e3a64ff",
            borderBottom: "1px solid #d9d9d9",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold", color: "white", fontFamily: 'sans-serif', fontSize: '24px', display: "flex", alignItems: "center" }}>
            <img src={logo} alt="LOGO" width={60} height={60} />
            <div style={{ height: "60px", backgroundColor: "white", width: "2px", margin: "0 10px" }}></div>
            <img src={SamriddhiLogo} alt="SamriddhiLogo" width={60} height={60} />
          </div>
          {/* right side  */}
          <Flex gap={30} style={{ alignItems: "center" }}>

            <>
              <Link to="/" style={{ color: "white", }}>Home</Link>
              {/* <Link to="/profile" style={{ color: "white",}}>Profile</Link> */}
              {/* <Link to="/complain" style={{ color: "white",}}>Complain</Link> */}
              <Link to="/about" style={{ color: "white", }}>About</Link>
              <Link to="/teamproject" style={{ color: "white", }}>Teams&Projects</Link>
              <Link to="/winners" style={{ color: "white", }}>Winners</Link>
              <Link to="/contact" style={{ color: "white", }}>Contact</Link>
              {/* <Button type="primary" onClick={handleLogout} style={{ color: "white",}}>
                  Logout
                </Button> */}
            </>
          </Flex>
        </Flex>
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
