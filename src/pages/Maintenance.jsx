import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench } from 'lucide-react';
import './styles/maintenance.css';

const Maintenance = () => {
  return (
    <div className="maintenance-wrapper">
      <div className="maintenance-glow" style={{ top: '-10%', left: '-10%' }} />
      <div className="maintenance-glow" style={{ bottom: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(0, 243, 255, 0.15), transparent 70%)' }} />
      
      <motion.div 
        className="maintenance-content"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="maintenance-icon-wrapper">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Settings size={64} className="maintenance-icon primary" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="maintenance-icon-secondary-wrapper"
          >
            <Wrench size={32} className="maintenance-icon secondary" />
          </motion.div>
        </div>

        <h1 className="maintenance-title">We'll be right back</h1>
        <p className="maintenance-subtitle">
          Our team is currently performing scheduled maintenance to upgrade the platform. 
          Please check back later!
        </p>
        
        <div className="maintenance-badge">
          <span className="pulse-dot"></span>
          System Upgrading
        </div>
      </motion.div>
    </div>
  );
};

export default Maintenance;
