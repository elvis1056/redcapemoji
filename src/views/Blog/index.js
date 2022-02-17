import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'layouts/Main/Footer';
// import indexStyle from './index.module.scss';

const Blog = () => {
  return (
    <div>
      <section>
        <div className="flex flex-row">
          <div className="basis-1/12" />
          <div className="basis-10/12">
            <Outlet />
          </div>
          <div className="basis-1/12" />
        </div>
      </section>
      <Footer />
    </div>
  )
  // return (
  // <>
  //   <Outlet />
  //   <Route
  //     element={<BlogList />}
  //     exact
  //     path="/"
  //   />
  //   <Route
  //     element={<BlogArtical />}
  //     exact
  //     path="/aaa"
  //   />
  // </>
  // );
};

export default Blog;