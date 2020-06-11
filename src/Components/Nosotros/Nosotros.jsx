import React from 'react';

import DeviceImage from '../../Images/Devices.png';

const Nosotros = () => {
  return (
    <section id="nosotros" className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <img className="order-lg-0 order-1" src={DeviceImage} alt="Devices" />
          <div className="contenido text-center align-self-center order-lg-1 order-0">
            <p className="title">Nosotros</p>
            <p className="text-1 text-center">
              Somos un equipo de diseño y desarrollo web <br />
              que te ayudará a crear bases firmes para construir <br />
              una presencia web poderos, aportando <br />
              al crecimiento de tu negocio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
