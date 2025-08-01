import React from 'react';
import './style.css';

export default function Zounds() {
  return (
    <div className="project-container">
      <header className="project-header">
        {/* <h5 className="section-tag">Projects</h5> */}
        {/* <img src="../images/zoundsHeader.png" alt="Project Header" className="project-hero-image" /> */}
        <p className="project-subtitle">Summer 2025 &middot; Design, Development, Data Analysis and Visualization</p>
        <h1 className="project-title">Zounds: Value Mapping Quiz</h1>
        <hr className="project-divider" />
        <p className="project-links">
          <a href="https://github.com/sitapawar/zounds" target="_blank" rel="noopener noreferrer">GitHub</a>
          &nbsp;&middot;&nbsp;
          <a href="https://oh-zounds.vercel.app/" target="_blank" rel="noopener noreferrer">View Site</a>
        </p>
      </header>

      <section className="project-section">
        <h2>About</h2>
        <p className="project-paragraph">
          <strong>Zounds</strong> is an interactive, visually expressive quiz that invites users to explore their alignment
          with values like Love, Honor, Duty, and Reason — inspired by my favorite classical novels, poems, and plays.
          <br /><br />
          Users answer a series of questions and receive a plotted chart of value alignments, normalized and visualized on
          a 2D graph. The app also tracks response statistics and stores submissions via Supabase.
          <br /><br />
          "Zounds" is an archaic expression of surprise or indignation.
        </p>
      </section>

      <section className="project-section">
        <h2>Process</h2>
        <p className="project-paragraph">
          I designed the site in Figma, built it using React, stored and accessed the data in Supabase,
          and created the data visualizations using the d3.js library.
        </p>
        <img src="/images/projects/zoundsLayout2.png" alt="Project Layout" className="project-image-full" />
      </section>
    </div>
  );
}
