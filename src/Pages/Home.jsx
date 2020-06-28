import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Nosotros from '../Components/Nosotros/Nosotros';
import Servicios from '../Components/Servicios/Servicios';
import Valor from '../Components/Valor/Valor';
import Logos from '../Components/Logos/Logos';
import Contacto from '../Components/Contacto/Contacto';

import '../Styles/index.css';
import '../Styles/carousel.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      msg: '',
      form: {
        name: '',
        email: '',
        msg: '',
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('https://nodos.dev/email/contac_me.php', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        msg: this.state.msg,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        this.setState({
          msg: 'Gracias por escribirnos, pronto nos comunicaremos con usted.',
        });
        return res.json();
      } else {
        this.setState({
          error: {
            message: 'A ocurrido un error, por favor intente más tarde',
          },
        });
      }
    });
  };

  render() {
    return (
      <>
        <Banner />
        <Nosotros />
        <Servicios />
        <Valor />
        <Logos />
        <Contacto
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          formValues={this.state.form}
          error={this.state.error}
          msg={this.state.msg}
        />
      </>
    );
  }
}

export default Home;
