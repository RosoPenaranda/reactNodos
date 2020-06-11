import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Nosotros from '../Components/Nosotros/Nosotros';
import '../Styles/index.css';
import Servicios from '../Components/Servicios/Servicios';

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
      </React.Fragment>
    );
  }
}

export default Home;
