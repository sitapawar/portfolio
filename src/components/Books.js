import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const books = [
  { img: '/Books/exhalation.WebP', alt: 'Exhalation' },
  { img: '/Books/orlando.WebP', alt: 'Orlando Furioso' },
  { img: '/Books/tomorrow.WebP', alt: 'Tomorrow, and Tomorrow, and Tomorrow' },
  { img: '/Books/Mistborn.WebP', alt: 'Misborn' },
  { img: '/Books/unmaskingai.WebP', alt: 'Unmasking AI' },
  { img: '/Books/pride.WebP', alt: 'Pride and Prejudice' },
  { img: '/Books/sirenscall.WebP', alt: 'Siren Call' },
  { img: '/Books/cahokiaJazz.WebP', alt: 'Cahokia Jazz' },
  { img: '/Books/mockingjay.WebP', alt: 'Mockingjay' },
  { img: '/Books/johnPaul.WebP', alt: 'John & Paul' },
  { img: '/Books/caesar.WebP', alt: 'Julius Caesar' },
  { img: '/Books/hailmary.WebP', alt: 'Project Hail Mary' },


];


export default function Books() {

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
        <h1>Books</h1>
        <p className="lead">Narratives that influence me.</p><p className="lead"><i>Including many I just love :)</i></p>
      </div>
    
        <div className="bookshelf">
        {books.map((book, index) => (
          <div className="book-slot" key={index}>
            <img src={book.img} alt={book.alt} className="book-cover" />
          </div>
        ))}
      </div>

    </div></motion.div>
  );
}
