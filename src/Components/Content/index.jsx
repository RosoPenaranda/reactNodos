import React from 'react';

import ContentImg from '../../Images/content.png';

const Content = () => {
  return (
    <section id="content" classNameName="container-fluid gradiente_azul">
      <div className="row ">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <div className="contenido order-0 ">
            <p className="titulo">Content Marketing</p>
            <div className="texto">
              <p>Generamos valor y posicionamiento para tu marca basados en:</p>
              <ul>
                <li>SEO técnico y semántico.</li>
                <li>Redacción de contenidos.</li>
                <li>Creación digital de marca.</li>
              </ul>
            </div>
          </div>
          <img
            className="align-self-center order-1"
            src={ContentImg}
            alt="Grupo"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
