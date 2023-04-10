import React from 'react';
import '../../App.css';
import ContactForm from '../ContactForm';
import HeroSection from '../HeroSection';
import ContactIcons from '../ContactIcons';

export default function Contact() {
  return (
    <>
      <HeroSection title="CONTÁCTANOS" mediaPath="videos/video-4.mp4" />
      <ContactIcons />
      <ContactForm />
    </>
  );
}
