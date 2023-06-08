import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Te podría interesar...</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-10.jpg"
              alt="Frutas y verduras"
              text="Revisa nuestro catálogo para ver nuestros productos"
              label="Catálogo"
              path="/product"
            />
            <CardItem
              src="images/img-9.jpg"
              alt="Persona con un ordenador"
              text="Contacta con nosotros para cualquier consulta"
              label="Contacta"
              path="/contact"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              alt="Frutas y verduras"
              text="Descubre más sobre Euroalmonds"
              label="Sobre nosotros"
              path="/about-us"
            />
            <CardItem
              src="images/img-27.jpg"
              alt="Frutas y verduras"
              text="Crea una cuenta en nuestra web"
              label="Cuenta"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
