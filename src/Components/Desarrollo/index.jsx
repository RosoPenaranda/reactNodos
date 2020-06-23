import React from 'react';

import DesarrolloImg from '../../Images/desarrollo.png';

const Desarrollo = () => {
  return (
    <section id="desarrollo" className="container-fluid gradiente_azul">
      <div className="row ">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <div className="contenido order-0 order-lg-1">
            <p className="titulo">Desarrollo Web</p>
            <div className="texto">
              <p>Construimos soluciones basadas en:</p>
              <ul>
                <li>Desarrollo de servicios a la medida.</li>
                <li>Desarrollo de aplicaciones.</li>
                <li>Desarrollo de E-commerce.</li>
              </ul>
            </div>
          </div>
          <img
            className="align-self-center order-lg-0 order-1"
            src={DesarrolloImg}
            alt="Grupo"
          />
        </div>
      </div>
    </section>
  );
};

export default Desarrollo;
