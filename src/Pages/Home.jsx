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
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Banner />
        <Nosotros />
        <Servicios />
        <Valor />
        <Logos />
        <Contacto />
      </React.Fragment>
    );
  }
}

export default Home;
