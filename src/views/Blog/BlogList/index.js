import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import indexStyle from './index.module.scss';

const BlogList = () => {

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
      id: 1,
      title: '什麼是 MVC/MVVM',
      subTitle: '一種分類方法、一種設計模式，將資料、邏輯、顯示個別區分開來',
      tags: ['MVC', 'MVVM']
    }
  ]

  const tags = articles.reduce((acc, cur) => {
    const result = [ ...acc ];
    const { tags } = cur;
    const newTags = tags.filter(item => !result.includes(item))
    return [ ...result, ...newTags ]
  }, [])

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <div className="basis-full sm:basis-10/12 flex flex-row">
      <div className={`fixed bottom-4 left-4 md:static md:basis-3/12 ${indexStyle.left}`}>
        <div className={`p-4 pt-4 ${screenSize.dynamicWidth < 768 ? 'border-solid border rounded-full' : 'pt-12'}`}>
          {screenSize.dynamicWidth < 768 ? <i className={'fa fa-list'} /> : '文章分類'}
        </div>
        <>
          {
            tags.map(tag => (
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-2 border border-blue-500 hover:border-transparent rounded"
                key={tag}
              >
                {tag}
              </button>
            ))
          }
        </>
      </div>
      <div className={`grow basis-full md:basis-9/12 ${indexStyle.left} w-full md:w-1/3`}>
        <div className={`${screenSize.dynamicWidth > 400 && 'p-4 pt-12'}`}>
          {
            articles.map(({ title, subTitle, tags, id }) => {
              return (
                <div
                  className={`lg:pl-0 ${screenSize.dynamicWidth > 400 ? 'px-4 py-4' : ''} first:pt-0 flex-auto`}
                  key={title}
                >
                  <div className={`rounded shadow-lg hover:shadow-2xl transition-all  border-transparent ${screenSize.dynamicWidth < 400 && 'm-8'}`}>
                    <div
                      className="px-6 pt-4 pb-2 text-base md:text-xl"
                      style={{ borderBottom: '1px solid #EAEAEA' }}
                    >
                      {title}
                    </div>
                    <div className="px-6 pt-4">
                      {subTitle}
                    </div>
                    <div className="px-6 pt-4">
                      <NavLink
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
                        to={`/blog/${id}`}
                      >
                              繼續閱讀
                      </NavLink>
                    </div>
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
  );
};

export default BlogList;