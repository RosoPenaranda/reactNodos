import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" class="container">
      <div class="row">
        <div class="col text-center">
          <h1 class="mt-5 titulo-1">Contáctanos para darle vida a tus ideas</h1>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          <div class="formulario">
            <form class="text-center border border-light p-5" action="#!">
              <p class="h4 mb-4 titulo">Contacto</p>
              <input
                id="nombre"
                type="text"
                id="defaultContactFormName"
                class="form-control mb-4"
                placeholder="Nombre"
              />
              <input
                type="email"
                id="defaultContactFormEmail"
                class="form-control mb-4"
                placeholder="E-mail"
              />
              <div class="form-group">
                <textarea
                  class="form-control rounded-0"
                  id="exampleFormControlTextarea2"
                  rows="3"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <button
                id="submit"
                class="btn gradiente_azul btn-block"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
