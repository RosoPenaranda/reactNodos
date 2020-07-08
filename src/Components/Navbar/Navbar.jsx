import React from 'react';

import '../../Styles/style.css';

import NodosLogoBlue from '../../Images/logoazul.png';
import NodosLogoWithe from '../../Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-blue navbar-expand-lg sombra fixed-top bd-highlight"
    >
      <div className="navbar-brand flex-grow-1 bd-highlight">
        <Link
          to="/"
          id="LogoWhite"
          className="texto_blanco text-decoration-none"
        >
          <img className="logoIni " src={NodosLogoWithe} alt="Nodos Logo" />
        </Link>
        <Link
          to="/"
          id="LogoBlue"
          className="d-none texto_blanco text-decoration-none"
        >
          <img className="logoIni" src={NodosLogoBlue} alt="Nodos Logo" />
        </Link>
      </div>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link texto_blanco text-decoration-none">
              Nodos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/servicios"
              className="nav-link texto_blanco text-decoration-none"
            >
              Servicios
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="/#contacto"
              className="nav-link texto_blanco text-decoration-none"
            >
              Contacto
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/" className="dropdown-item">
                Nodos
              </Link>
              <Link to="/servicios" className="dropdown-item">
                Servicios
              </Link>
              <a href="/index.html#contacto" className="dropdown-item">
                Contacto
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
