import React from 'react';

import '../../Styles/style.css';

const Navbar = (props) => {
  return (
    <nav
      id="menu"
      className="navbar navbar-blue navbar-expand-lg sombra fixed-top bd-highlight"
    >
      <div className="navbar-brand flex-grow-1 bd-highlight">
        <a className=" texto_blanco text-decoration-none" href="index.php">
          <img id="logo" className="logoIni" src="" alt="Nodos Logo" />
        </a>
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
            <a
              className="nav-link texto_blanco text-decoration-none"
              href="./index.php"
            >
              Nodos
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link texto_blanco text-decoration-none"
              href="./servicios.php"
            >
              Servicios
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link texto_blanco text-decoration-none"
              href="./index.php#contacto"
            >
              Contacto
            </a>
          </li>
          <li className="nav-item dropdown">
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="./index.php">
                Nodos
              </a>
              <a className="dropdown-item" href="./servicios.php">
                Servicios
              </a>
              <a className="dropdown-item" href="./index.php#contacto">
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
