import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { logout } from '../auth/authActions';
import './style/navbar.scss';

const NavBar = (props) => {
  return (
    <div className={props.hasBackground ? 'navigation-bar' : 'navigation-bar-no-background' }>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <div onClick={() => props.logout()}>logout</div>
    </div>        
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () =>  dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(NavBar);