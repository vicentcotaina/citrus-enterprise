import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactIcons from '../components/ContactIcon/ContactIcons';

export default function Contact() {
  return (
    <>
      <HeroSection title="Contáctanos" mediaPath="videos/video-4.mp4" />
      <ContactIcons />
      <ContactForm />
    </>
  );
}
