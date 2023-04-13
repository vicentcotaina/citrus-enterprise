import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection';
import ProductCards from '../components/ProductCard/ProductCards';

export default function Products() {
  return (
    <>
      <HeroSection title="Productos" mediaPath="videos/video-5.mp4" />
      <ProductCards />
    </>
  );
}
