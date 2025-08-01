import React from 'react';
import './style.css';
import { motion } from 'framer-motion';


export default function About() {

  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="arts-page"
        >
         
<div class="about-section">
<div class="centered-profile">
  <img src="/images/headshot2.jpg" alt="Headshot of Sita Pawar" class="circle-headshot" />
  <div class="profile-links">
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
    <span>·</span>
    <a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a>
    <span>·</span>
    <a href="/books">Books I Love</a>
  </div>
</div>


  <div class="about-text">
    <p>
    I’m Sita! I've graduated from Brown University with a degree in Computer Science and passion for designing and developing creative, accessible technology. I have experience in product management, design, development, UI/UX, and data science and visualization. <br></br><br></br>
					I enjoy exploring the intersections of technology, design, and narrative. 
					From UX design and development 
					for a hieroglyph recognition model to data visualization for Italian Renaissance epic poetry or impact investments, I love finding new ways to integrate my interests to create innovative, cohesive products with strong narratives.  
					
					{/* I’m passionate about data privacy, fairness, and accessibility and apply these frameworks to my work in order to create sustainable and transparent products. --> */}
					<br></br><br></br>In my free time, I love reading, mountain biking, painting, theater, and playing Ultimate Frisbee. Someday I hope to retire to a small castle in Scotland.
</p>
  </div>
</div>



    {/*  */}
    </motion.div>
  );
}
