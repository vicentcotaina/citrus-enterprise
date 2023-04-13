import React from 'react';
import './ProductCard.css';

function ProductCard({ text, name }) {
  return (
    <>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <p class="text">{text}</p>
          </div>
        </div>
        <div class="face face2">
          <h2>{name}</h2>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
