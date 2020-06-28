import React from 'react';

const Contacto = (props) => {
  return (
    <section id="contacto" className="container">
      <div className="row">
        <div className="col text-center">
          <h1 className="mt-5 titulo-1">
            Contáctanos para darle vida a tus ideas
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="formulario">
            <form
              onSubmit={props.onSubmit}
              className="text-center border border-light p-5"
            >
              <p className="h4 mb-4 titulo">Contacto</p>
              <input
                onChange={props.onChange}
                type="text"
                className="form-control mb-4"
                placeholder="Nombre"
                name="name"
                value={props.formValues.name}
                required
              />
              <input
                className="form-control mb-4"
                placeholder="E-mail"
                onChange={props.onChange}
                type="email"
                name="email"
                value={props.formValues.email}
                required
              />
              <div className="form-group">
                <textarea
                  className="form-control rounded-0"
                  rows="3"
                  placeholder="Mensaje"
                  required
                  onChange={props.onChange}
                  name="msg"
                  value={props.formValues.msg}
                ></textarea>
              </div>
              <button className="btn gradiente_azul btn-block" type="submit">
                Enviar
              </button>
              {props.error && (
                <p className="text-danger">{props.error.message}</p>
              )}
              {props.msg !== '' && <p className="text-primary">{props.msg}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
