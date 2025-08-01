import React, { useState } from 'react';
import './style.css';

export default function Amp() {
const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    '/images/projects/desertFlower1.JPEG',
    '/images/projects/closeup2.PNG',
    '/images/projects/girlflower1.PNG',
    '/images/projects/oasis1.PNG',
    // '/images/projects/oasis2.PNG',
    '/images/projects/girlFlower_closeup.PNG',
  ];

  const nextSlide = () => setSlideIndex((slideIndex + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((slideIndex - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setSlideIndex(index);

  return (
    <div className="project-container">
      <header className="project-header">
        <p className="project-subtitle">Summer 2022 &middot; Concept Art, 3D Modeling, Storyboarding</p>
        <h1 className="project-title">Amazon AMP Advert</h1>
        <hr className="project-divider" />
      </header>

      <section className="project-section">
        <h2>Background</h2>
        <p className="project-paragraph">
         As a major Star Wars fan, I first was interested in VFX editing with Adobe AfterEffects in early High School because I wanted to film edits of lightsaber fights with the force, and explosions. Those initial Star Wars edits led me to interning at Blacksmith VFX, a leading post-production company in New York. During my summer at Blacksmith, I was able to explore the post-production process and design timeline. I worked on modeling 3D environments with Unreal Engine 5, designing concept art with Photoshop and Procreate, and creating storyboard drafts. I also had the opportunity to shadow and learn from people working in 2D and 2D rendering and animation, color grading, and more. This blend of practical experience and insights from industry experts provided me with skills and knowledge that have proven invaluable context for my Computer Science coursework in UI-UX, Graphics, and Computer Vision.
        </p>

        <h3>The Project</h3>
        <p className="project-paragraph">
          Over the summer, the primary project I worked on was Blacksmith's commercial for Amazon AMP...
        </p>
        <ol className="project-list">
          <li>Creating and modifying an internal storyboard for exploring designs and scenes</li>
          <li>Creating Concept art for the AMP flower design</li>
          <li>Creating 3D Models and concept art for the desert and Oasis with Unreal E5</li>
        </ol>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/752557245?h=396aec15a5&autoplay=1&byline=0"
            title="Amazon Amp Commercial"
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="project-section">
        <h2>Storyboarding</h2>
        <p className="project-paragraph">
          While Amazon designers had a different storyboard for the shoot itself, I created an internal storyboard that allowed Blacksmith to test out different possible scenes and endings for the short commercial.
        </p>
        <div className="image-grid">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img key={num} src={`/images/projects/storyboard${num}.png`} alt={`Storyboard ${num}`} className="project-image-third" />
          ))}
        </div>
      </section>

      <section className="project-section">
        <h2>Art</h2>
        <h3>Flower Concept Art</h3>
        <p className="project-paragraph">
          A key part of the commercial is the flower in the desert that opens up to reveal the AMP logo. When working on the initial designs for this, I focused on flowers that naturally had both an open and closed state so there would be a reference for the flower's opening movements. I created several references with peonies before we shifted to a design that was a combination of dahlia and sunflower for the final. 
        </p>
        <img src="/images/projects/concept3.JPG" className="project-image-full" alt="Flower Concept" />

        <h3>Wavelength Pattern Design</h3>
        <p className="project-paragraph">
          Another art feature I worked on was creating a pattern that would be used in animation for the wavelength path in the melancholy (sad boi) garden. The intent was to create a design reminiscent of Van Gogh's paint strokes and ripples that could be used in a particle motion-based animation that would allow them to swirl along the pathway in a watery way.
        </p>
        <div className="image-grid">
          {[1, 2, 3].map((num) => (
            <img key={num} src={`/images/projects/wavepath${num}.WebP`} alt={`Wavepath ${num}`} className="project-image-third" />
          ))}
        </div>

        <h3>Unreal Desert Models</h3>
        <p className="project-paragraph">
Unreal Engine allows creators to build real-time 3D content at unprecedented speeds. While it is often used in video game design, it has also been used by shows such as <a href="https://www.unrealengine.com/en-US/blog/forging-new-paths-for-filmmakers-on-the-mandalorian">"The Mandalorian"</a> to engineer stunning environments and backgrounds.  <br></br><br></br>
                  For this commercial, I used Unreal to create a desert environment with light haze and distant mountains. I used Unreal's assets and figures to create a customized oasis reference and different shots of the commercial's main dancer. Once the flower asset was created, I was able to use a rough version of the actual model in my environment. While the team ended up using Matte painting for the final video, the adaptability and speed of Unreal Engine were incredible for finalizing angles and perspectives.    
                            </p>

        <div className="slideshow-wrapper">
          <div className="slideshow-container">
            <button onClick={prevSlide} className="slideshow-button left">&#10094;</button>
            <img src={slides[slideIndex]} alt={`Slide ${slideIndex + 1}`} className="slide-image" />
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
        <h2>Conclusion</h2>
        <p className="project-paragraph">
This chance to work with leading designs and adapt my work based on feedback from Amazon's team and Blacksmiths was an amazing opportunity to develop my skills and learn from the best. I also learned from animators and designers working using motion capture and tracking technology to integrate their 3D models into the film faster or render 3D models based on images of a set. Seeing this in action, motivated me during my Computer Vision course the next semester when I was working on writing code behind that process. Similarly, learning about the color grading and filters that created the effect of the final film, helped me during my class of Graphics, enabling me to contextualize the technology and programming that creates those effects. <br></br><br></br>
                Interning with Blacksmith also provided me with insight into the design and production process, giving me invaluable industry experience working in a highly fast-paced, collaborative environment! 
                      </p>
      </section>
    </div>
  );
}
