import React from 'react';
import './style.css';

export default function ProjectTemplate() {
  return (
    <div className="project-container">
      <header className="project-header">
        <p className="project-subtitle">Fall 2024 - Present &middot; Product Management, Design, Development</p>
        <h1 className="project-title">Digital Pyramid Text Project</h1>
        <hr className="project-divider" />
        <p className="project-links">
          Github is private due to sensitive materials, reach out for code sample
          <br />
          <a href="https://www.brown.edu/news/2024-12-19/christelle-alvarez" target="_blank" rel="noopener noreferrer">Brown University Coverage of DPT</a>
        </p>
      </header>

      <section className="project-section">
        <h2>Introduction</h2>
        <p className="project-paragraph">
          As one of 16 Data Science Fellows at Brown, I was partnered with Dr. Christelle Alvarez to support her data driven Egyptology research. The Fellowship provided course work on communication and consulting strategies, project management, and interdisciplinary leadership, while the faculty partnership with Dr. Alvarez was an opportunity for professional experience designing and developing a product in an interdisciplinary field.
          <br /><br />
          Dr. Alvarez works with Nikos Vasilakis and his research team in Brown's CS department to develop an AI model that can identify and classify hieroglyphs.
          <br /><br />
          My involvement with the project has centered around:
        </p>
        <ul className="project-list">
          <li>Parsing and analyzing the English translations of these pyramid texts</li>
          <li>Designing DPT's website</li>
          <li>Developing the front end interface for engaging with the classification model</li>
        </ul>
        <p className="project-paragraph">
          I've also worked on data cleaning, analysis, and visualization for Dr. Alvarez's research on the pyramids and their histories.
        </p>
        <img src="/images/projects/dptDesign2.png" alt="DPT Homepage Design" className="project-image-full" />
      </section>

      <section className="project-section">
        <h2>Analysing the Translations</h2>
        <p className="project-paragraph">
          I developed a Python pipeline to process a PDF translation of the Pyramid Texts from six of the pyramids. This converts the text of the translation into a structured JSON format, tagging each text segment with its identification code and location information.
          <br /><br />
          I also parsed the transliterations of the text into a similar JSON structure, ensuring both datasets share a common key for integration.
          <br /><br />
          This structure supports advanced search capabilities, helping Dr. Alvarez and other Egyptologists identify text fragments. It also creates a foundation for more sophisticated text analysis that can reveal patterns across the Pyramid Texts. The current prototype is functional, with a rough, temporary interface as the full site is still being developed.
        </p>
        <img src="/images/projects/pdfTranslitImage.png" alt="Pyramid Text Translation PDF Image" className="project-image-full" />
        <p className="project-subcaption"><i>Image of James P Allen's Translation of the Pyramid Texts</i></p>
        <img src="/images/projects/EgyptPrototype.png" alt="Searchable Prototype" className="project-image-full" />
        <p className="project-subcaption"><i>Searchable Prototype</i></p>
      </section>

      <section className="project-section">
        <h2>Designing the Site</h2>
        <p className="project-paragraph">
          Collaborating with the CS team developing the deep learning classification model, I designed the user interface for the model using Figma. This interface allows users to search the walls of hieroglyphs for a specific symbol through multiple methods: typing the hieroglyph’s code, entering the word’s translation, uploading an image, or drawing the symbol directly.
          <br /><br />
          This interface is a component of the larger Digital Pyramid Texts (DPT) site, which also provides access to searchable translations mentioned earlier, historical statistics, and visualizations about the pyramids' history.
        </p>
        <img src="/images/projects/DPTdesign2.png" alt="Searchable Translation Final Design" className="project-image-full" />
      </section>
    </div>
  );
}
