/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
// import { fakeAuth } from './Login';

const fakeAuth = {
  isAuthenticated: true,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
