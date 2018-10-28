import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import About from './About';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={() => <PrivateRoute component={Home} />} />
      <Route path="/about" component={() => <PrivateRoute component={About} />} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;