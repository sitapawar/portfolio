import React from 'react';
import './style.css';
import { motion } from 'framer-motion';

const books = [
  { img: '/books/exhalation.jpg', alt: 'Exhalation' },
  { img: '/books/orlando.jpg', alt: 'Orlando Furioso' },
  { img: '/books/tomorrow.jpg', alt: 'Tomorrow, and Tomorrow, and Tomorrow' },
  { img: '/books/Mistborn.jpg', alt: 'Misborn' },
  { img: '/books/unmaskingai.jpg', alt: 'Unmasking AI' },
  { img: '/books/pride.jpg', alt: 'Pride and Prejudice' },
  { img: '/books/sirenscall.jpeg', alt: 'Siren Call' },
  { img: '/books/cahokiaJazz.jpg', alt: 'Cahokia Jazz' },
  { img: '/books/mockingjay.jpg', alt: 'Mockingjay' },
  { img: '/books/zealot.jpeg', alt: 'Zealot' },
  { img: '/books/caesar.jpg', alt: 'Julius Caesar' },
  { img: '/books/hailmary.jpg', alt: 'Project Hail Mary' },


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
