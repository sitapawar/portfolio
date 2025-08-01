import React from 'react';
import './style.css';

export default function Cyrano() {
  return (
    <div className="project-container">
      <header className="project-header">
        <p className="project-subtitle">Spring 2025 &middot; Directing, Project Management, Design</p>
        <h1 className="project-title">Cyrano De Bergerac</h1>
        <hr className="project-divider" />
      </header>

      <section className="project-section">
        <p className="project-paragraph">
          Directing PW’s mainstage production was an exciting challenge that allowed me to combine my love of language, art, and collaboration in order to lead and learn from an incredibly talented team of actors, artists, and technicians.
          <br /><br />
          Cyrano de Bergerac has been the only play I’ve had any interest in directing. It really does it all: wit and romance, action and honor, tragedy and comedy. The play explores true love, true friendship, and slightly less-true love across a range of situations from ridiculous to devastating.
        </p>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/1091292070?&portrait=0&byline=0&autopause=0&player_id=0&app_id=58479"
            title="Cyrano de Bergerac (Pt I)"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/1092171793?&portrait=0&byline=0&autopause=0&player_id=0&app_id=58479"
            title="Cyrano de Bergerac (Pt II)"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="project-section">
        <div className="cyrano-gallery">
          {[
            'whisper.WebP',
            'swordsss.WebP',
            'bakery.WebP',
            'deGuiche.WebP',
            'set.WebP',
            'CyranoFinalPoster2.WebP',
            'CyranoFinalPoster1.WebP'
          ].map((img, index) => (
            <div className="cyrano-gallery-item" key={index}>
              <img src={`/arts/${img}`} alt={`Cyrano Image ${index + 1}`} />
              {img === 'CyranoFinalPoster1.WebP' && (
                <p>
                  Poster Design by <a href="https://witherwax.org/">Catie Witherwax</a>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
