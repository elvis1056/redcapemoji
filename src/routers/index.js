import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import { RouteWithLayout } from '../components';

const Entry = lazy (async () => await import (/* webpackChunkName: 'Entry' */ '../views/Entry'));
const About = lazy (async () => await import (/* webpackChunkName: 'Entry' */ '../views/About'));
const Blog = lazy (async () => await import (/* webpackChunkName: 'Entry' */ 'views/Blog'));
const BlogList = lazy (async () => await import (/* webpackChunkName: 'Entry' */ 'views/Blog/BlogList'));
const BlogArtical = lazy (async () => await import (/* webpackChunkName: 'Entry' */ 'views/Blog/BlogArtical'));

import { Main as MainLayout } from '../layouts';

// const checkAuth = () => {
//   return true;
// };

// const Layout = () => {
//   return checkAuth () ? <Outlet /> : <Navigate to="/" />;
// };

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading..</div>}>
      <Routes>
        <Route
          element={<MainLayout />}
          path="/"
        >
          <Route
            element={<Entry />}
            path="/"
          />
          <Route
            element={<About />}
            path="/about"
          />
          <Route
            element={<Blog />}
            path="/blog"
          >
            <Route
              element={<BlogList />}
              exact
              index
            />
            <Route
              element={<BlogArtical />}
              exact
              path=":id"
            />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
