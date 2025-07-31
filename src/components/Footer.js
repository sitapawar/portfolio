// components/Footer.js
import React from 'react';
import './style.css'; // optional styling
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()}. Designed and Developed by Sita Pawar. <ThemeToggle></ThemeToggle></p>      
      
    </footer>
  );
}
