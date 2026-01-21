import React from 'react'
// import { Carousel } from 'antd';
import Stats from "../components/stats.jsx";
import WinningTeam from "./winningTeam.jsx";
import CardData from "../components/carddata.jsx";
import "./styles/home.css";
import left from '../assets/Left.svg'
import right from '../assets/Right.svg'

const contentStyle = {
  margin: 0,
  // height: '600px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',

};

const Home = () => {

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="home-hero-section">
        <div className="home-hero-bg">
            <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            >
            <source src="/hultweb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
        
        <div className="home-hero-overlay"></div>
        
        {/* Decorative Shapes */ }
        <img className="home-hero-left-shape" src={left} alt="LEFT" />
        <img className="home-hero-right-shape" src={right} alt="RIGHT" />

        <div className="home-hero-content">
            <h1 className="home-hero-title">
                One million to change the world
            </h1>
            <p className="home-hero-subtitle">
                Join the world's largest student startup competition.
            </p>
           {/* Overlay Content */}
           {/* <CardData /> */}
        </div>
      </div>

      {/* <CardData /> */}
      <div className="home-animate visible delay-2">
        <Stats />
      </div>
      <div className="home-animate visible delay-3">
        <WinningTeam />
      </div>

      <div className="home-contact-wrapper home-animate visible delay-3">
        <div className="home-section">
            <div className="home-contact-card home-section-inner">
                <h2 className="home-contact-title">Hult Prize at Samriddhi College</h2>
                <p className="home-contact-text">Contact: hultprize@samriddhi.edu</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Home
