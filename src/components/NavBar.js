import React from 'react';
import { Link } from "react-router-dom";

import './style/navbar.scss';

const NavBar = ({ hasBackground }) => {
  return (
    <div className={hasBackground ? 'navigation-bar' : 'navigation-bar-no-background' }>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>        
  );
}

export default NavBar;