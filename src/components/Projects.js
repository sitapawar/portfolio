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
      className="arts-page"
    >
    <div className="arts-page">
      <div className="gallery-header">
        {/* <h5>Interests</h5> */}
        <h1>Projects</h1>
        <p className="lead">always exploring new mediums</p>
      </div>

    </div>
    </motion.div>
  );
}
