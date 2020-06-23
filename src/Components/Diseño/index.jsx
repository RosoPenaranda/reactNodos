import React from 'react';

import DiseñoImg from '../../Images/diseño.png';

const Diseño = () => {
  return (
    <section id="diseño" className="container-fluid gradiente_azul">
      <div className="row ">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <div className="contenido order-0 ">
            <p className="titulo">Diseño UX-UI</p>
            <div className="texto">
              <p>
                Representamos visualmente tu idea y le damos alma través del
                diseño centrado en las personas:
              </p>
              <ul>
                <li>Investigación, necesidades y objetivos de marca.</li>
                <li>Funcionalidades, contenido y estructura de navegación.</li>
                <li>Diseño de prototipo e interacción.</li>
                <li>Diseño final.</li>
              </ul>
            </div>
          </div>
          <img
            className="align-self-center order-1"
            src={DiseñoImg}
            alt="Grupo"
          />
        </div>
      </div>
    </section>
  );
};

export default Diseño;
