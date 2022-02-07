import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import cookies from 'js-cookie';

const checkAuth = () => {
  return false
  // return cookies.get('token') ? true : false
};

export const RouteWithLayout = props => {
  const { layout: Layout, component: Component, auth, ...rest } = props;
  // console.log(auth)
  return (
    auth ?
      checkAuth() ?
        <Route
          {...rest}
          element={matchProps => (
            <Layout>
              <Component {...matchProps} />
            </Layout>
          )}
        />
        :
        <Navigate to="/" />
      :
      <Route
        {...rest}
        element={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
  )
};

RouteWithLayout.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
