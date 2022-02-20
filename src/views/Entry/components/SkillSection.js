import React, { useEffect } from 'react';

import WOW from 'wow.js';
import { isString } from 'lodash';

// ? styles
import skillStyle from './skill.module.scss';

const SkillSection = () => {

  const data = [
    {
      key: 'html',
      icon: 'fab fa-html5',
      title: 'HTML / HTML5',
      desLists: [
        {
          key: 'html1',
          skillTitle: '善用語意化標籤'
        },
        {
          key: 'html2',
          skillTitle: 'RWD 響應式網站規劃'
        }

      ]
    },
    {
      key: 'css',
      icon: 'fab fa-css3-alt',
      title: 'CSS / CSS3',
      desLists: [
        {
          key: 'css1',
          skillTitle: '善用整合三方庫',
          skills: [
            'Material UI',
            'Fabric UI',
            'Tailwind',
            'Bootstrap'
          ]
        },
        {
          key: 'css2',
          skillTitle: '字型檔整合 ( 不使用 CDN )'
        },
        {
          key: 'css3',
          skillTitle: '整合 FontAwesome Icon'
        },
        {
          key: 'css4',
          skillTitle: 'Sass / Scss + css module'
        },
        {
          key: 'css5',
          skillTitle: 'CSS 一致性 駝峰 BEM 命名'
        },
        {
          key: 'css6',
          skillTitle: 'Flexbox、Grid System'
        }
      ]
    },
    {
      key: 'js',
      icon: 'fab fa-js-square',
      title: 'JavaScript',
      desLists: [
        {
          key: 'js1',
          skillTitle: '了解 JavaScript 基礎與 ES6 語言特性'
        },
        {
          key: 'js2',
          skillTitle: '自定義 Pure function'
        },
        {
          key: 'js3',
          skillTitle: '透過 Fetch / axios / AJAX 串接 RESTful API'
        }
      ]
    },
    {
      key: 'frameworks',
      icon: 'fas fa-crop-alt',
      title: 'Frameworks',
      desLists: [
        {
          key: 'fw1',
          skillTitle: 'Base Components 建構與規劃'
        },
        {
          key: 'fw2',
          skillTitle: 'lodash / moment 等三方插件庫應用'
        },
        {
          key: 'fw3',
          skillTitle: 'ESLint + prettier 維持程式碼品質'
        }
      ]
    },
    {
      key: 'tools',
      icon: 'fas fa-tools',
      title: 'Tools',
      desLists: [
        {
          key: 'tool1',
          skillTitle: 'git 版本控制'
        },
        {
          key: 'tool2',
          skillTitle: '透過 google 自行解決問題'
        },
        {
          key: 'tool3',
          skillTitle: 'NPM NVM'
        }
      ]
    },
    {
      key: 'others',
      icon: 'fas fa-list',
      title: 'Others',
      desLists: [
        {
          key: 'o1',
          skillTitle: 'AWS 部署自己網站',
          skills: [
            'Ngnix',
            'Docker',
            'AWS'
          ]
        },
        {
          key: 'o2',
          skillTitle: '具有 GitHub Pages 部署靜態網頁經驗'
        },
        {
          key: 'o3',
          skillTitle: 'Go + github page 部署部落格'
        }
      ]
    }
  ]

  useEffect(() => {
    new WOW().init();
  }, [])

  return (
    <section className={`${skillStyle.container} pt-10 pb-10 dark:bg-secondary-default transition-all ease-in-out duration-500`}>
      <div className="flex">
        <div className="basis-1/12" />
        <div className="flex flex-col w-full flex-wrap md:flex-row">
          {
            data.map(({ key, icon, title, desLists }) => {
              return (
                <div
                  className="w-full md:w-1/3 animate__animated animate__fadeInUp wow"
                  key={key}
                >
                  <div className="px-4 py-4 h-full">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg h-full">
                      <div className={`px-4 py-5 flex-auto ${skillStyle.icon_wrapper} dark:bg-secondary-dark dark:text-slate-200`}>
                        <div className={'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-slate-400 to-slate-600 bg-slate-400'}>
                          <i className={`${icon} ${skillStyle.icon}`} /></div>
                        <h6 className="text-xl font-semibold">{title}</h6>
                        {
                          desLists !== undefined &&
                          <p className="mt-2 mb-4 ml-4 text-blueGray-400">
                            <ul>
                              {
                                desLists.map(
                                  ({ key, skillTitle, skills }) => {
                                    if (skills) {
                                      return (
                                        <>
                                          <li>{skillTitle}</li>
                                          <ul>
                                            {
                                              isString(skills)
                                                ?
                                                <li
                                                  className={'mt-2'}
                                                  key={key}
                                                >
                                                  {skills}
                                                </li>
                                                :
                                                skills.map((item) => {
                                                  return (
                                                    <li
                                                      className={'mt-2 ml-4'}
                                                      key={item}
                                                    >
                                                      {item}
                                                    </li>
                                                  )
                                                })
                                            }
                                          </ul>
                                        </>
                                      )
                                    }
                                    return (
                                      <li
                                        className={'mt-2'}
                                        key={key}
                                      >
                                        {skillTitle}
                                      </li>
                                    )
                                  }
                                )
                              }
                            </ul>
                          </p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="basis-1/12" />
      </div>
    </section>
  );
}

export default SkillSection;