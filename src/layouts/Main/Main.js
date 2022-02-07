import React from 'react';

// ^ plugins
import { Outlet } from 'react-router-dom';

import { Navbar } from './Navbar';

/**
 * @author elvis
 * @level layouts/Main
 * @component Main
 * @description Main Component
*/
const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

Main.propTypes = {

};

export default Main;
