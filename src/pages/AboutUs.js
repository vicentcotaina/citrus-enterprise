import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection/HeroSection';
import Section from '../components/Section/Section';

export default function AboutUs() {
  return (
    <>
      <HeroSection title="Sobre nosotros" mediaPath="videos/video-5.mp4" />
      <Section
        lightBg={true}
        description="Euroalmonds es una empresa con una amplia trayectoria de más de 30 años en el mercado de España y Portugal. Nos especializamos en la producción y comercialización de cítricos, incluyendo naranjas, mandarinas, limones y aguacates. Nos enorgullecemos de nuestra vasta experiencia en el sector, lo que nos ha permitido establecernos como líderes en la industria."
        img="images/img-2.png"
        alt="Logo"
      />
      <Section
        lightBg={false}
        lightText={true}
        lightTextDesc={true}
        description={
          <p>
            Nuestra empresa se dedica a la producción y distribución de cítricos
            de alta calidad, cultivados en nuestros propios campos con técnicas
            modernas y sostenibles. Trabajamos de la mano con agricultores
            locales y expertos en el campo para garantizar que nuestros
            productos sean frescos, sabrosos y de la mejor calidad posible.
            <br />
            <br />
            Valoramos nuestras relaciones con nuestros clientes y colaboradores,
            y buscamos establecer asociaciones a largo plazo basadas en la
            confianza y la satisfacción mutua. Estamos comprometidos con la
            mejora continua y la innovación en nuestra industria, y siempre
            estamos buscando formas de crecer y expandirnos.
          </p>
        }
        img="images/img-4.png"
        imgStart={true}
        alt="Persona cultivando"
      />
      <Section
        lightBg={true}
        description={
          <p>
            En Euroalmonds, nos apasiona lo que hacemos y creemos en la
            importancia de ofrecer productos naturales y saludables a nuestros
            clientes. Nuestro compromiso con la calidad, la excelencia en el
            servicio al cliente y el respeto por el medio ambiente nos ha
            permitido construir una reputación sólida en el mercado.
            <br />
            <br />
            ¡Gracias por elegir Euroalmonds! Esperamos seguir siendo su
            proveedor confiable de cítricos frescos y deliciosos durante muchos
            años más.
          </p>
        }
        img="images/img-3.png"
        alt="Persona con corazones"
      />
    </>
  );
}
