import { Flex, Button } from "antd";
import { Link, Outlet,  } from "react-router-dom"; //useNavigate
import React from "react";

const RootLayout = () => {
//   const token = localStorage.getItem("accessToken");
//   const navigate = useNavigate();

  return (
    <div>
      <header>
        {/* left side one */}
        <Flex className="bg-pink-600 bg-opacity-90"
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
          <div style={{ fontWeight: "bold", color: "white", fontFamily:'sans-serif', fontSize: '24px' }}>Hult Prize Samriddhi College</div>
          {/* right side  */}
          <Flex gap={30} style={{ alignItems: "center" }}>
           
              <>
                <Link to="/" style={{ color: "white",}}>Home</Link>
                {/* <Link to="/profile" style={{ color: "white",}}>Profile</Link> */}
                {/* <Link to="/complain" style={{ color: "white",}}>Complain</Link> */}
                <Link to="/about" style={{ color: "white",}}>About</Link>
                <Link to="/teamproject" style={{ color: "white",}}>Teams&Projects</Link>
                <Link to="/winners" style={{ color: "white",}}>Winners</Link>
                <Link to="/sponsers" style={{ color: "white",}}>Sponsers</Link>
                <Link to="/contact" style={{ color: "white",}}>Contact</Link>
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