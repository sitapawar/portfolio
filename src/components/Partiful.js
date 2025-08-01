import React, { useState } from 'react';
import './style.css';

export default function Partiful() {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    '/images/projects/RSVP_Socials.mp4',
    '/images/projects/fill_profile.mp4',
    '/images/projects/hi-fi-1.png',
    '/images/projects/hi-fi-2.png'
  ];

  const isVideo = (src) => src.endsWith('.mp4');
  const nextSlide = () => setSlideIndex((slideIndex + 1) % slides.length);
  const prevSlide = () => setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setSlideIndex(index);

  return (
    <div className="project-container">
      <header className="project-header">
        <p className="project-subtitle">April 2024 &middot; App Design</p>
        <h1 className="project-title">Partiful</h1>
        <hr className="project-divider" />
        <p className="project-links">
          <a href="https://www.figma.com/file/PxpPT6LunJKscrRHJoAKVW/Final-Partiful-Profiles">Figma</a> &middot;{' '}
          <a href="https://partiful.com">Partiful</a>
        </p>
      </header>

      <section className="project-section">
        <h2>Introduction</h2>
        <p className="project-paragraph">
          As part of a course on UI/UX, my group worked with Partiful to redesign the profile screen to encourage profile completion...
        </p>
        <p className="project-paragraph">
          The problem we addressed was: "How can we encourage users to fill out their profiles?"
        </p>
      </section>

      <section className="project-section">
        <h2>Wireframes</h2>
        <ol className="project-list">
          <li>More calls to action for editing profile</li>
          <li>Emphasizing social connectivity to boost user engagement</li>
        </ol>
        <img src="/images/projects/wireframe1.1.png" alt="Initial Wireframe" className="project-image-full" />
      </section>

      <section className="project-section">
        <h2>User Interview Summary</h2>
        <ul className="project-list">
          <li>Most users had never filled out their profiles</li>
          <li>They didn’t realize they had one or didn’t see the point</li>
        </ul>
        <p className="project-paragraph">
          Incentives like mutual visibility and feature unlocks proved appealing in interviews.
        </p>
      </section>

      <section className="project-section">
        <h2>Updated Wireframes</h2>
        <p className="project-paragraph">
          Based on feedback, we added cleaner layout, prioritized features, and more CTAs.
        </p>
        <img src="/images/projects/wireframes-updated.png" alt="Updated Wireframe" className="project-image-full" />
      </section>

      <section className="project-section">
        <h2>Hi-Fi Design Choices</h2>
        <ul className="project-list">
          <li>Verified-style complete check marks</li>
          <li>Gatekeeping social links until user adds their own</li>
          <li>Progress bar for profile completion</li>
          <li>Party anthems (music links)</li>
          <li>Fun, informative pop-ups</li>
          <li>Unlockable profile backgrounds</li>
        </ul>
        <p className="project-paragraph">
          <a href="https://www.loom.com/share/fae1799f3d6247379169fb14690153f7?sid=dfafaf9e-85c6-4ec1-a695-0b5bd2cb54c9">View Loom Walkthrough</a>
        </p>
      </section>

      <section className="project-section">
        <h2>High Fidelity Mockups</h2>
        <div className="slideshow-wrapper">
          <div className="slideshow-container">
            <button onClick={prevSlide} className="slideshow-button left">&#10094;</button>
            {isVideo(slides[slideIndex]) ? (
              <video controls autoPlay muted className="slide-image">
                <source src={slides[slideIndex]} type="video/mp4" />
              </video>
            ) : (
              <img src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} className="slide-image" />
            )}
            <button onClick={nextSlide} className="slideshow-button right">&#10095;</button>
          </div>
          <div className="slideshow-dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === slideIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Final Feedback</h2>
        <p className="project-paragraph">
          The founders liked our profile completion incentives and the "party anthem" feature. They also asked about mutual display simplification and suggested design variants for guest lists and CTAs.
        </p>
      </section>
    </div>
  );
}
