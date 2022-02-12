import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [stickyClass, setStickyClass] = useState('relative');

  const menuData = [
    {
      name: 'about'
    },
    {
      name: 'blog'
    }
  ]

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full bg-primary-default flex flex-wrap items-center justify-between px-2 py-3 z-9999 ${stickyClass}`}
        // style={{ maxHeight: '50px' }}
      >
        <div className="w-full px-4 mx-auto flex flex-wrap items-center justify-between max-h-screen-70 overflow-y-auto">
          <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start text-white text-lg px-12 font-bold">
            <NavLink to="/" >
              Elvis
            </NavLink>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
            >
              <i className={`text-white ${navbarOpen ? 'fas fa-times animate-bounce ' : 'fas fa-bars'}`} />
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none'
              + (navbarOpen ? ' block rounded bg-primary-light mt-4 lg:shadow-lg' : ' hidden')
            }
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto lg:items-center">
              {
                menuData.map(({ name }) => (
                  <NavLink
                    className="text-white hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase"
                    key={name}
                    style={({ isActive }) => isActive ? {} : undefined}
                    to={name}
                  >
                    {name}
                  </NavLink>
                ))
              }
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:items-center">
              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=100000249132965"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="text-blueGray-500 lg:text-white fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>
              <li>
                <a
                  className="text-blueGray-800 hover:text-blueGray-600 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/elvis1056"
                >
                  <i className="text-blueGray-500  lg:text-white fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <h1 className="text-3xl font-bold underline bg-slate-500">
        Elvis
      </h1> */}
    </>
  );
}

export default Navbar;