import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Arts from './components/Arts';
import Books from './components/Books';

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/arts" element={<Arts />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default AppWrapper;
