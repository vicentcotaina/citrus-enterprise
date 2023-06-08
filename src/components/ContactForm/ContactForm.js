import React, { useState, useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { Tilt } from 'react-tilt';
import { useAuth0 } from '@auth0/auth0-react';

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
};

const ContactForm = () => {
  const { isAuthenticated, user } = useAuth0();

  const form = useRef();

  /* Este código define una función llamada sendEmail que se utiliza para enviar un correo electrónico utilizando la biblioteca emailjs. La función se activa cuando se envía un formulario de correo electrónico, evitando que el evento predeterminado del formulario se dispare. Se utiliza el método sendForm() de emailjs para enviar el formulario. Se le pasan cuatro argumentos a sendForm(): el ID del servicio de correo electrónico que se utilizará para enviar el formulario, el ID de la plantilla de correo electrónico que se utilizará, el formulario que se está enviando, y la clave pública utilizada para la autenticación. Si el correo electrónico se envía con éxito, se registrará un mensaje en la consola, el formulario se restablecerá a su estado original y se actualizará el estado de formSubmitted a true. Si hay un error al enviar el correo electrónico, se registrará un mensaje de error en la consola. Además, se define un estado de componente formSubmitted utilizando el método useState(false), que se actualiza a true cuando el correo electrónico se envía con éxito. Este estado se puede utilizar para proporcionar retroalimentación al usuario después de que se haya enviado el correo electrónico, como mostrar un mensaje de confirmación o redirigir a una página de agradecimiento. */
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="container">
      <div className="contact-form-container">
        <div className="contact-image">
          <Tilt options={defaultOptions}>
            <img src="images/img-1.png" alt="Sobre" />
          </Tilt>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <i className="fas fa-user"></i>
            <input
              className="form-input"
              type="text"
              name="user_name"
              id="name"
              placeholder="Nombre"
              defaultValue={isAuthenticated ? user.name : ''}
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-at"></i>
            <input
              className="form-input"
              type="email"
              name="user_email"
              id="email"
              placeholder="Email"
              defaultValue={isAuthenticated ? user.email : ''}
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-envelope"></i>
            <input
              className="form-input"
              type="text"
              name="message_subject"
              id="subject"
              placeholder="Asunto"
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-message"></i>
            <textarea
              className="form-input"
              name="message"
              id="message"
              rows="5"
              placeholder="Mensaje"
              required
            />
          </div>
          <div className="submit-button-container">
            <button className="submit-button" type="submit">
              ENVIAR
              <i className="fas fa-angles-right"></i>
            </button>
            {formSubmitted && (
              <p className="form-success-message">Thanks for contacting us!</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
