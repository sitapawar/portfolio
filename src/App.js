import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Arts from './components/Arts';
import Books from './components/Books';
import Zounds from './components/Zounds';
import DPT from './components/DPT';
import Amp from './components/Amp';
import Partiful from './components/Partiful';

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
          <Route path="/zounds" element={<Zounds />} />
          <Route path="/dpt" element={<DPT />} />
          <Route path="/amp" element={<Amp />} />
          <Route path="/partiful" element={<Partiful />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default AppWrapper;
