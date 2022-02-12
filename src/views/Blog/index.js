import React, { useState, useEffect } from 'react';

import { Footer } from 'layouts/Main/Footer';
import indexStyle from './index.module.scss';

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
    <>
      <section className={`${indexStyle.container}`}>
        <div className={`${indexStyle.section_wrapper} flex flex-row`}>
          <div className="basis-1/12" />
          <div className="basis-10/12 flex flex-row">
            <div className={`fixed bottom-20 md:static md:basis-3/12 p-4 ${indexStyle.left}`}>
              {screenSize.dynamicWidth < 786 ? <i className={'fa fa-list'} /> : '索引'}
            </div>
            <div className={`grow md:basis-9/12 p-4 ${indexStyle.left} w-full md:w-1/3`}>文章</div>
          </div>
          <div className="basis-1/12" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;