import React from 'react';
import './style.css';
import AbstractOverlay from './abstractOverlay';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    
    
    <div className="home-page-wrapper">
      <AbstractOverlay/>
<motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >


      <div className="home-screen">
        <div className="titleText">
          <br /><br /><br /><br />
          <h2>Data. Design. Narrative.</h2>
          <h1>Sita Pawar</h1>
          <br /><br />
          <button
              className="start-button"
              onClick={() => navigate('/projects')}
            ><b>My Work</b></button>

          {/* Uncomment if you want to include social icons */}
          {/* 
          <div className="social-links">
            <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          */}
        </div>
      </div>

      {/* <Footer /> */}
      </motion.div>
    </div>
    
  );
}
