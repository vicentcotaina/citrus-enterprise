import React from 'react';
import ProductCard from './ProductCard';

function ProductCards() {
  return (
    <div className="container">
      <ProductCard
        text="Variedad de naranja conocida por su jugosidad y delicioso sabor.
              Tiene una piel gruesa y rugosa de color naranja brillante, y su
              pulpa es de color naranja intenso. Es popular para hacer jugos y
              se consume como fruta fresca."
        name="Lane Late"
      />
      <ProductCard
        text="Variedad de naranja dulce de España, con piel delgada y lisa, color naranja brillante, pulpa jugosa y sabrosa. Se destaca por su alto contenido de jugo y sabor equilibrado con notas ácidas y dulces."
        name="Orogrós"
      />
      <ProductCard
        text="Popular y ampliamente cultivada variedad de naranja dulce, con piel gruesa y rugosa de color naranja brillante. Su pulpa es jugosa y sabrosa, y se destaca por su equilibrio entre acidez y dulzura. Es versátil para su consumo en fresco, así como para hacer jugos y postres."
        name="Valenciana"
      />
      <ProductCard
        text="Variedad de naranja que se caracteriza por su forma redondeada, su piel gruesa y rugosa de color naranja intenso. Su pulpa es jugosa, de sabor dulce y suave, y no contiene semillas."
        name="Navelate"
      />
      <ProductCard
        text="Variedad de naranja que se caracteriza por su forma redondeada, su piel delgada y suave de color naranja brillante. Su pulpa es jugosa, de sabor dulce y tiene un alto contenido de jugo."
        name="Valencia Late"
      />
      <ProductCard
        text="Variedad de naranja que se caracteriza por su forma redondeada, su piel gruesa y suave de color naranja intenso. Su pulpa es jugosa, de sabor dulce y tiene un alto contenido de acidez."
        name="Salustiana"
      />
      <ProductCard
        text="Variedad de naranja que se caracteriza por su forma redondeada con una protuberancia en la base (llamada 'ombligo' o 'navel'), su piel gruesa y suave de color naranja brillante. Su pulpa es jugosa, de sabor dulce y suave, y no contiene semillas."
        name="Navel"
      />
      {/*  */}
      <ProductCard text="" name="Fino" />
      <ProductCard text="" name="Verna" />
      <ProductCard text="" name="Meyer" />
      <ProductCard text="" name="Clementina" />
      <ProductCard text="" name="Satsuma" />
      <ProductCard text="" name="Okitsu" />
      <ProductCard text="" name="Ortanique" />
      <ProductCard text="" name="Persa" />
      <ProductCard text="" name="Kaffir" />
      <ProductCard text="" name="Marsh" />
      <ProductCard text="" name="Ruby Red" />
      <ProductCard text="" name="Star Ruby" />
      <ProductCard text="" name="Hass" />
      <ProductCard text="" name="Bacon" />
      <ProductCard text="" name="Fuerte" />
    </div>
  );
}

export default ProductCards;
