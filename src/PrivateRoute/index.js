import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = ({ auth }) => {
  return { isAuthenticated: auth.isAuthenticated };
}

export default connect(mapStateToProps)(PrivateRoute);