import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Button } from 'semantic-ui-react';

import { logout } from '../../../auth/authActions';
import './navbar.scss';

const AuthButton = withRouter(
  ({ history, logout }) => (
    <Button
      onClick={() => {
        logout(() => history.push("/"));
      }}
    >
      Sign out
    </Button>));

const NavBar = (props) => {
  return (
    <div className={props.hasBackground ? 'navigation-bar' : 'navigation-bar-no-background' }>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AuthButton logout={props.logout}/>
    </div>        
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (cb) =>  dispatch(logout(cb))
  }
}

export default connect(null, mapDispatchToProps)(NavBar);