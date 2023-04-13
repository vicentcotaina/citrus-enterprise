import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection';
import Cards from '../components/Cards/Cards';

function Home() {
  return (
    <>
      <HeroSection
        title="EUROALMONDS"
        subtitle="Sabores cítricos de excelencia, cultivados con experiencia"
        mediaPath="videos/video-3.mp4"
      />
      <Cards />
    </>
  );
}

export default Home;
