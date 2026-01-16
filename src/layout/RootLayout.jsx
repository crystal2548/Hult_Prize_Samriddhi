import { Flex, Button } from "antd";
import { Link, Outlet } from "react-router-dom"; //useNavigate
import React from "react";
import logo from "../assets/logo.png";
import SamriddhiLogo from "../assets/SamriddhiLogo.png";
const RootLayout = () => {
  //   const token = localStorage.getItem("accessToken");
  //   const navigate = useNavigate();

  return (
    <div>
      <header>
        {/* left side one  pink-600*/}
        <Flex
          className="bg-black bg-opacity-90"
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
          <div
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "sans-serif",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="LOGO" width={60} height={60} />
            <div
              style={{
                height: "60px",
                backgroundColor: "white",
                width: "2px",
                margin: "0 10px",
              }}
            ></div>
            <img
              src={SamriddhiLogo}
              alt="SamriddhiLogo"
              width={60}
              height={60}
            />
          </div>
          {/* right side  */}
          <Flex gap={30} style={{ alignItems: "center" }}>
            <>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
              {/* <Link to="/profile" style={{ color: "white",}}>Profile</Link> */}
              {/* <Link to="/complain" style={{ color: "white",}}>Complain</Link> */}
              <Link to="/about" style={{ color: "white" }}>
                About
              </Link>
              <Link to="/teamproject" style={{ color: "white" }}>
                Teams&Projects
              </Link>
              <Link to="/winners" style={{ color: "white" }}>
                Winners
              </Link>
              <Link to="/contact" style={{ color: "white" }}>
                Contact
              </Link>
              <Link to="/joinus">
                <Button type="primary" style={{ backgroundColor: "#E5007E", borderColor: "#E5007E", fontWeight: "bold" }}>Join Us</Button>
              </Link>
              {/* <Button type="primary" onClick={handleLogout} style={{ color: "white",}}>
                  Logout
                </Button> */}
            </>
          </Flex>
        </Flex>
      </header>
      <main>
        {/* for rendering other react pages defined inside root layout */}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
