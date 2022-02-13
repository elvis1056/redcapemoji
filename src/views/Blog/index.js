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

  const articles = [
    {
      title: 'for...in vs for...of',
      tags: ['JavaScript', 'for']
    },
    {
      title: 'for...in vs for...of',
      tags: ['JavaScript', 'for']
    }
  ]

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
          <div className="sm:basis-1/12" />
          <div className="basis-full sm:basis-10/12 flex flex-row">
            <div className={`fixed bottom-4 left-4 md:static md:basis-3/12 ${indexStyle.left}`}>
              <div className={`p-4 pt-12 ${screenSize.dynamicWidth < 768 && 'border-solid border rounded-full pt-4'}`}>
                {screenSize.dynamicWidth < 768 ? <i className={'fa fa-list'} /> : '文章分類'}
              </div>
            </div>
            <div className={`grow md:basis-9/12 ${indexStyle.left} w-full md:w-1/3`}>
              <div className="p-4 pt-6">
                {
                  articles.map(({ title, tags }) => {
                    return (
                      <div
                        className="lg:pl-0 px-4 py-4 first:pt-0 flex-auto"
                        key={title}
                      >
                        <div className="rounded shadow-lg hover:shadow-2xl transition-all  border-transparent">
                          <div className="px-6 pt-4 text-base md:text-xl">{title}</div>
                          <div className="px-6 pt-4 pb-2">
                            {
                              tags.map(tag => (
                                <span
                                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                  key={tag}
                                >
                                  {tag}
                                </span>
                                // <button
                                //   className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                //   key={tag}
                                // >
                                //   {tag}
                                // </button>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="sm:basis-1/12" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;