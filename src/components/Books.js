import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const books = [
  { img: '/books/exhalation.WebP', alt: 'Exhalation' },
  { img: '/books/orlando.WebP', alt: 'Orlando Furioso' },
  { img: '/books/tomorrow.WebP', alt: 'Tomorrow, and Tomorrow, and Tomorrow' },
  { img: '/books/Mistborn.WebP', alt: 'Misborn' },
  { img: '/books/unmaskingai.WebP', alt: 'Unmasking AI' },
  { img: '/books/pride.WebP', alt: 'Pride and Prejudice' },
  { img: '/books/sirenscall.WebP', alt: 'Siren Call' },
  { img: '/books/cahokiaJazz.WebP', alt: 'Cahokia Jazz' },
  { img: '/books/mockingjay.WebP', alt: 'Mockingjay' },
  { img: '/books/zealot.WebP', alt: 'Zealot' },
  { img: '/books/caesar.WebP', alt: 'Julius Caesar' },
  { img: '/books/hailmary.WebP', alt: 'Project Hail Mary' },


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
        <p className="lead">Narratives that influence me.</p><p className="lead"><i>Including some I just love :)</i></p>
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
