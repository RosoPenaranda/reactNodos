import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = (props) => (
  <React.Fragment>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
)

export default Layout;