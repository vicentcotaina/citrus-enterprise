import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';

function Home() {
  return (
    <>
      <HeroSection
        title="Naranjas de la china"
        subtitle="Son una pantomima"
        mediaPath="videos/video-3.mp4"
      />
      <Cards />
    </>
  );
}

export default Home;
