import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'layouts/Main/Footer';
// import indexStyle from './index.module.scss';

const Blog = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <div>
      <section
        className="transition-all ease-in-out duration-500 dark:bg-secondary-default dark:text-slate-200"
        style={{ height: 'calc(100vh - 150px)' }}
      >
        <div className="flex flex-row">
          <div className="basis-1/12" />
          <div className="basis-10/12">
            <Outlet
              context={
                [
                  screenSize
                ]
              }
            />
          </div>
          <div className="basis-1/12" />
        </div>
      </section>
      {screenSize.dynamicWidth > 768 && <Footer />}
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