import React from 'react';

import indexStyle from './Footer.module.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Footer = () => {

  return (
    <>
      <section className={`${indexStyle.social_container}`}>
        <ul className={`${indexStyle.social_icons}`}>
          {/* <li> */}
          {
            /*  <a
              className={'fab fa-google'}
              href=""
            >
              {/* <div className={'fab fa-google'} /> */}
          {/* </a> */}
          {/* </li> */}
          <li>
            <a
              className={'fab fa-facebook-square'}
              href="https://www.facebook.com/profile.php?id=100000249132965"
            >
              {/* <div className={'fab fa-google'} /> */}
            </a>
          </li>
          <li>
            <a
              className={'fab fa-github'}
              href="https://github.com/elvis1056"
            >
              {/* <div className={'fab fa-google'} /> */}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Footer;