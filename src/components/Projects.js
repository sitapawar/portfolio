import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="projects-page"
    >
      <div className="gallery-header">
        <h1>Portfolio</h1>
        {/* <p className="lead">Selected works in design, development, and data storytelling</p> */}
      </div>

      <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
        {/* Zounds */}
        <div id="folio-wrapper">
  <div className="project-card">
    <img src="/images/zounds.png" alt="Zounds" />
    <a href="pages/Zounds.html" className="project-hover">
      <h3 className="project-title">zounds.</h3>
      <span className="project-subtitle">React, Product Design, Data Visualization, Database Management</span>
    </a>
  </div>

  <div className="project-card">
    <img src="/images/DPTSquare2.png" alt="DPT Site" />
    <a href="pages/DPT.html" className="project-hover">
      <h3 className="project-title">DIGITAL PYRAMID TEXTS (DPT)</h3>
      <span className="project-subtitle">Front End Design, Development, Data</span>
    </a>
  </div>
{/* Amazon Amp */}
<div className="project-card">
  <img src="images/amp3.png" alt="Amazon Amp" />
  <a href="pages/amp.html" className="project-hover">
    <h3 className="project-title">AMAZON AMP</h3>
    <span className="project-subtitle">Storyboarding, Concept Art, 3D Modeling</span>
  </a>
</div>

{/* Lunar Folklore */}
<div className="project-card">
  <img src="images/moonThumnail.png" alt="Lunar Data Vis" />
  <a href="https://sitapawar.github.io/lunar-folklore/" className="project-hover" rel="noopener noreferrer">
    <h3 className="project-title">LUNAR FOLKLORE DATA VIS</h3>
    <span className="project-subtitle">Data Visualization, Data Analysis, Narrative</span>
  </a>
</div>

{/* Open Source Shakespeare */}
<div className="project-card">
  <img src="images/oss2.png" alt="Responsive Redesign" />
  <a href="pages/oss.html" className="project-hover">
    <h3 className="project-title">OPEN SOURCE SHAKESPEARE</h3>
    <span className="project-subtitle">Responsive Redesign and Development</span>
  </a>
</div>

{/* Partiful */}
<div className="project-card">
  <img src="images/partiful1.png" alt="Partiful" />
  <a href="pages/partiful.html" className="project-hover">
    <h3 className="project-title">PARTIFUL</h3>
    <span className="project-subtitle">Profile Design and Prototyping</span>
  </a>
</div>
</div>
</div>


    </motion.div>
  );
}
