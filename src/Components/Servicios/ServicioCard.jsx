import React from 'react';

const ServicioCard = (props) => {
  let servicio = props.servicio;
  return (
    <div className="card d-flex flex-column justify-content-around align-items-center">
      <div className="card-body text-center">
        <img className="" src={servicio.img} alt="Diseño UX-UI" />
        <h5 className="card-title ">{servicio.title}</h5>
        <p>{servicio.description}</p>
      </div>
      <a
        href={servicio.link}
        className="btn btn-outline "
        role="button"
        aria-pressed="true"
      >
        Conoce más
      </a>
    </div>
  );
};

export default ServicioCard;
