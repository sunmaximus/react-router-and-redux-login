import React, { Component } from 'react';
import '../styles/home.scss'

import { Link } from "react-router-dom";

class HomeComponent extends Component {

  render() {
    return (
      <div className='home__container'>
        <h3>Welcome {this.props.user.firstName}</h3>
      </div>
    );
  }
}

export default HomeComponent;