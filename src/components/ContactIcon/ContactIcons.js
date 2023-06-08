import React from 'react';
import './ContactIcons.css';
import IconInfo from './IconInfo';

function ContactIcons() {
  return (
    <ul className="contact-icons">
      <li>
        <IconInfo
          icon="fas fa-location-dot"
          text="Rua 5 do October N53, Alcacer Do Sal"
        />
      </li>
      <li>
        <IconInfo
          icon="fas fa-phone"
          text={
            <p>
              <b>Dirección</b> (+34) 609619786 <br />
              <b>Administración</b> (+34) 643179510
            </p>
          }
        />
      </li>
      <li>
        <IconInfo
          icon="fas fa-paper-plane"
          text={
            <p>
              lucasperezfayos@gmail.com <br /> gestioneuroalmonds@gmail.com
            </p>
          }
        />
      </li>
    </ul>
  );
}

export default ContactIcons;
