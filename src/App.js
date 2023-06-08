import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* Este Switch define las rutas para diferentes páginas en la
        aplicación. Cuando la URL actual coincide con una de las rutas
        definidas, se renderiza el componente correspondiente. // La ruta "/" se
        corresponde con el componente Home, "/about-us" con el componente
        AboutUs, "/product" con el componente Products, y "/contact" con el
        componente Contact.*/}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/product" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
