import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const images = [
    {
    src: '/arts/Cyrano.jpg',
    alt: 'Cyrano',
    caption: 'Cyrano de Bergerac (Play)',
    sub: 'WATCH HERE',
    link: 'pages/cyrano.html',
  },
   {
    src: '/arts/PortalPoster.jpg',
    alt: 'Portal Poster',
    caption: 'Animated Short',
    sub: 'WATCH HERE',
    link: 'https://vimeo.com/1086945045?share=copy',
  },{
    src: '/arts/cs128Final.png',
    alt: 'Animation Final',
    caption: 'Animation Study',
    sub: 'WATCH HERE',
    link: 'https://vimeo.com/123456789',

  },
    {
    src: '/arts/turner4.png',
    alt: 'Turner Study',
    caption: 'Turner Study',
    sub: 'The Fighting Temeraire',
  },
  {
    src: '/arts/whales.png',
    alt: 'Sky Whales',
    caption: 'Sky Whales',
    sub: 'Comissioned Digital Illustration',
  },
  {
    src: '/arts/render2.PNG',
    alt: 'Unreal Engine 5 Environment',
    caption: 'Unreal Engine 5 Environment',
    sub: '',
  },
  {
    src: '/arts/fox.webP',
    alt: 'Oxidized Steel Tangram Fox',
    caption: 'Oxidized Steel Tangram Fox',
    sub: '',
  },
  {
    src: '/arts/tarot2.png',
    alt: 'Tarot Inspired Digital Illustration',
    caption: 'Tarot Inspired Digital Illustration',
    sub: 'Comissioned Digital Illustration',
  },

  {
    src: '/arts/pearlEar.png',
    alt: 'Pearl Earring',
    caption: 'Vermeer Study',
    sub: 'The Girl with the Pearl Earring',
  },
  {
    src: '/arts/moya1.png',
    alt: 'Acrylic Portrait',
    caption: 'Acrylic Portrait',
    // sub: 'by Sita Pawar',
  },
  {},{
    src: '/arts/vanity1.jpg',
    alt: 'Vanity',
    caption: 'Acrylic Portrait',
    sub: `inspired by Cowper's "Vanity"`,
  },

];

export default function Arts() {
  const columns = [[], [], []];

  images.forEach((img, i) => {
    columns[i % 3].push(img); // Distribute into 3 columns evenly
  });

  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="arts-page"
            >
    <div className="arts-page">
      <div className="gallery-header">
        {/* <h5>Interests</h5> */}
        <h1>Arts</h1>
        <p className="lead">Always exploring new mediums</p>
      </div>

      <div className="columns-gallery">
        {columns.map((column, i) => (
          <div className="column" key={i}>
            {column.map((img, j) => (
              <div className="gallery-item" key={j}>
                <img src={img.src} alt={img.alt} className="gallery-image" />
                <div className="overlay">
  <div className="text">
    <h4>{img.caption}</h4>
    {img.link ? (
      <p><a href={img.link} target="_blank" rel="noopener noreferrer" className="gallery-link">{img.sub}</a></p>
    ) : (
      img.sub && <p>{img.sub}</p>
    )}
  </div>
</div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div></motion.div>
  );
}
