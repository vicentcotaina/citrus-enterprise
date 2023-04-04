import React,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            Orange <i className='fa-seedling'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/product' className='nav-links' onClick={closeMobileMenu}>
                Nuestro producto
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Regístrate
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
