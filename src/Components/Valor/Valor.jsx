import React from 'react';

import ValorImg from '../../Images/Grupo 135.png';

const Valor = () => {
  return (
    <section id="valor" className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          <img className="order-lg-0 order-1" src={ValorImg} alt="Workers" />
          <div className="contenido order-lg-1 order-0 text-center align-self-center">
            <p className="title">Generamos Valor</p>
            <p className="text-1 text-center">
              Aportamos al crecimiento de tu marca,generando valor con el uso de
              buenas prácticas en procesos y programación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valor;
