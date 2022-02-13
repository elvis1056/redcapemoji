import React from 'react';

import { Footer } from 'layouts/Main/Footer';
import indexStyle from './index.module.scss';

const About = () => {
  const items = [
    {
      title: 'Elvis',
      description:
      `
        1 年多前端工程師網站開發，平時喜歡喜歡旅行、思考，樂於嘗試不同可能。
        喜歡互相交流與溝通，也利用私人時間增加業外知識，透過社群與科技走進世界
      `,
      image: '/assets/img/headshot.jpeg',
      socials: [
        { icon: 'twitter', link: '#pablo' },
        { icon: 'facebook', link: '#pablo' },
        { icon: 'dribbble', link: '#pablo' }
      ],
      list: [
        {
          icon: 'fas fa-atom',
          text: '善用 React 框架及 Redux'
        }
        // {
        //   icon: 'fas fa-list',
        //   text: ''
        // }
      ]
    }
  ]
  return (
    <>
      <section>
        <div className={`flex flex-wrap -mx-4 ${indexStyle.container}`}>
          <div className="relative">
            <div className="relative w-full overflow-hidden">
              {items.map((prop, key) => {
                return (
                  <div
                    className={'relative float-left w-full transform duration-500 transition-all ease-in-out'}
                    // className={classnames(
                    //   'relative float-left w-full transform duration-500 transition-all ease-in-out',
                    //   {
                    //     hidden: key !== open,
                    //     block: key === open,
                    //     'opacity-0 scale-95': key === open && oldInTransition,
                    //     'opacity-100 scale-100': key === open && newInTransition
                    //   }
                    // )}
                    key={key}
                  >
                    <div className="container mx-auto px-4">
                      <div className="flex flex-wrap -mx-4">
                        <div className="px-12 md:py-12 relative w-full md:w-5/12 ml-auto">
                          <div className="p-6">
                            <img
                              alt="..."
                              className="w-full rounded-lg shadow-xl transform"
                              src={prop.image}
                            />
                          </div>
                        </div>
                        <div className="md:pt-12 px-4 relative w-full md:w-7/12 mr-auto flex align-center items-center">
                          <div className="p-4 pt-6 md:p-0">
                            <h2 className="text-2xl font-bold mt-0 mb-2">
                              {prop.title}
                            </h2>
                            <p className="mt-3 text-lg leading-relaxed text-blueGray-500">
                              {prop.description}
                            </p>
                            <ul className="mt-6 list-none">
                              {prop.list &&
                            prop.list.map((listProp, listKey) => {
                              return (
                                <li
                                  className="py-2"
                                  key={listKey}
                                >
                                  <div className={`flex items-center ${indexStyle.icon_wrapper}`}>
                                    <span
                                      className={
                                        'inline-flex text-center rounded-full mr-3 items-center justify-center text-sm w-8 h-8 text-white-500 bg-stone-200'
                                      }
                                    >
                                      <i className={`${listProp.icon} ${indexStyle.icon}`} />
                                    </span>
                                    <h6 className="text-md text-blueGray-500">
                                      {listProp.text}
                                    </h6>
                                  </div>
                                </li>
                              );
                            })}
                            </ul>
                            {/* <div className="py-6 pl-12 text-left">
                            {prop.socials &&
                            prop.socials.map((socialsProp, socialsKey) => {
                              return (
                                <div
                                  color={socialsProp.icon}
                                  href={socialsProp.link}
                                  key={socialsKey}
                                >
                                  <i className={'fab fa-' + socialsProp.icon} />
                                </div>
                              );
                            })}
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;