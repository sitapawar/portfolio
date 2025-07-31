import React from 'react';
import './style.css';

export default function AbstractOverlay() {
  return (
    <div className="abstract-overlay">
      <svg className="abstract-lines" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path d="M50,100 C200,0 800,200 700,500 S200,900 100,600" />
        <path d="M800,100 C600,300 900,600 400,800" />
        <path d="M100,900 Q300,500 900,900" />
      </svg>
    </div>
  );
}
