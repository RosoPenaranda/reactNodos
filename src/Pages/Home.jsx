import React, { Component } from 'react';
import Banner from '../Components/Banner/Banner';
import Nosotros from '../Components/Nosotros/Nosotros';
import '../Styles/index.css';

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
      </React.Fragment>
    );
  }
}

export default Home;
