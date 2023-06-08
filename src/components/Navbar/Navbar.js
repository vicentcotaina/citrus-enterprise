import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../Button/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // El siguiente código utiliza el hook useState de React para definir dos variables de estado y dos funciones.
  // La variable de estado click indica si el menú móvil está abierto o cerrado, y la variable de estado button indica si el botón del menú está visible o no.
  // La función handleClick se utiliza para alternar el valor de la variable click cada vez que se llama, lo que permite mostrar u ocultar el menú móvil.
  // La función closeMobileMenu establece el valor de la variable click en false, lo que cierra el menú móvil cuando se hace clic en un elemento del menú.
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Este código define una función llamada showButton que utiliza la variable window.innerWidth para determinar si el ancho de la ventana es menor o igual a 1024 píxeles.
  // Si el ancho de la ventana es menor o igual a 1024 píxeles, la función llama a setButton(false), lo que establece el valor de la variable de estado button en false.
  // De lo contrario, la función llama a setButton(true), lo que establece el valor de la variable de estado button en true.
  // Esta técnica se utiliza a menudo para mejorar la experiencia del usuario en dispositivos móviles, donde el espacio en pantalla es limitado.
  // La función showButton probablemente se llamará cada vez que se cargue o cambie el tamaño de la ventana.
  const showButton = () => {
    if (window.innerWidth <= 1024) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Este código utiliza el hook useEffect de React para llamar a la función showButton cuando se carga el componente en el DOM.
  // El segundo argumento de useEffect es un arreglo vacío [], lo que indica que la función showButton solo se debe llamar una vez, cuando se carga el componente por primera vez.
  // La función showButton probablemente se utiliza para controlar el comportamiento de un botón en función del ancho de la ventana.
  // Al llamar a showButton una vez cuando se carga el componente, se asegura que el botón tenga el comportamiento adecuado desde el principio, sin necesidad de que el usuario realice ninguna acción adicional.
  useEffect(() => {
    showButton();
  }, []);

  // Este código agrega un evento 'resize' al objeto global de JavaScript 'window', que se dispara cuando se cambia el tamaño de la ventana del navegador.
  // Cuando se dispara el evento, se llama a la función 'showButton', que probablemente se utiliza para controlar el comportamiento de un botón en función del ancho de la ventana.
  // Al agregar el evento 'resize' y llamar a 'showButton', se asegura que el botón tenga el comportamiento adecuado cuando el usuario cambia el tamaño de la ventana del navegador.
  // Esto puede ser útil para mejorar la experiencia del usuario en dispositivos móviles, donde el tamaño de la ventana puede cambiar frecuentemente debido a la orientación o el tamaño de la pantalla.
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            EUROALMONDS <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/product"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Nuestros productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contacto
              </Link>
            </li>
            {!isAuthenticated ? (
              <li>
                <Link
                  className="nav-links-mobile"
                  onClick={() => {
                    closeMobileMenu();
                    loginWithRedirect();
                  }}
                >
                  Iniciar sesión
                </Link>
              </li>
            ) : (
              <Link
                className="nav-links-mobile"
                onClick={() => {
                  logout();
                }}
              >
                Cerrar sesión
              </Link>
            )}
          </ul>
          {button && !isAuthenticated ? (
            <Button
              buttonStyle="btn--outline"
              onClick={() => loginWithRedirect()}
            >
              LOGIN
            </Button>
          ) : (
            button && (
              <Button buttonStyle="btn--outline" onClick={() => logout()}>
                LOGOUT
              </Button>
            )
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
