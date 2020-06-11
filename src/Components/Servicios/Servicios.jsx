import React from 'react';

import WebImg from '../../Images/icons8-web-design-96.png';
import DesarrolloImg from '../../Images/icons8-code-96.png';
import MarketingImg from '../../Images/icons8-idea-sharing-96.png';
import ServicioCard from './ServicioCard';

const Servicios = () => {
  let servicios = [
    {
      img: WebImg,
      title: 'Diseño UX-UI',
      description:
        'Te brindamos soluciones de Diseño y Experiencia de Usuario basados en la identidad de tu marca.',
      link: '',
    },
    {
      img: DesarrolloImg,
      title: 'Desarrollo Web',
      description:
        'Construimos y desarrollamos aplicaciones web y móviles centrados en la experiencia de usuario.',
      link: '',
    },
    {
      img: MarketingImg,
      title: 'Content Marketing',
      description:
        'Generamos contenido para tu marca  y optimizamos tu sitio web',
      link: '',
    },
  ];

  return (
    <section id="servicios" className="container-fluid gradiente_azul">
      <div className="row">
        <div className="col text-center">
          <h1 className="texto_blanco">Servicios</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-around align-items-center flex-wrap">
          {servicios.map((servicio) => {
            return <ServicioCard servicio={servicio} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
