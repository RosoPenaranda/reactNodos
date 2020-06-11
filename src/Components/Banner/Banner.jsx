import React from 'react';

import grupoImg from '../../Images/Grupo.png';

const Banner = () => {
  return (
    <section id="inicial" className="container-fluid gradiente_azul">
      <div className="row ">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <div className="contenido text-center align-self-center order-0 ">
            <p class="text-1 texto_blanco">
              Estudio de Diseño <br className="d-none d-lg-block" /> y
              Desarrollo
            </p>
            <p className="text-2 texto_blanco ">
              Construimos soluciones digitales que aportan <br /> al crecimiento
              de tu negocio
            </p>
          </div>
          <img
            className="align-self-center order-1"
            src={grupoImg}
            alt="Grupo"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
