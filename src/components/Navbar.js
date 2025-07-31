import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import logo from '../mylogo.png';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // Collapse menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-left" onClick={() => handleNavigate('/')}>
        {/* <img src={logo} alt="Logo" className="navbar-logo" /> */}
        <span className="navbar-title">Sita.</span>
      </div>

      <div
        className={`navbar-menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div><div></div><div></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => handleNavigate('/projects')}><b>projects.</b></li>
        <li onClick={() => handleNavigate('/arts')}><b>arts.</b></li>
        <li onClick={() => handleNavigate('/about')}><b>about.</b></li>
      </ul>
    </nav>
  );
}
