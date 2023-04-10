import React from 'react';
import '../App.css';
import './HeroSection.css';
function HeroSection({ mediaPath, title, subtitle }) {
  return (
    <div className="hero-container">
      <video src={mediaPath} autoPlay loop muted></video>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export default HeroSection;
