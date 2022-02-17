import React from 'react';

// ? styles
import skillStyle from './skill.module.scss';

const SkillSection = () => {

  const data = [
    {
      key: 'html',
      icon: 'fab fa-html5',
      title: 'HTML / HTML5',
      desList: [
        {
          key: 'html1',
          str: '善用語意化標籤'
        },
        {
          key: 'html2',
          str: 'RWD 響應式網頁規劃'
        }
      ]
    },
    {
      key: 'css',
      icon: 'fab fa-css3-alt',
      title: 'CSS / CSS3',
      desList: [
        {
          key: 'css1',
          str: '善用 Material UI / Fabric UI 整合三方庫'
        },
        {
          key: 'css2',
          str: '字型檔整合 ( 不使用 CDN )'
        },
        {
          key: 'css3',
          str: '整合 FontAwesome Icon'
        },
        {
          key: 'css4',
          str: 'Sass 預處理管理 CSS'
        }
      ]
    },
    {
      key: 'js',
      icon: 'fab fa-js-square',
      title: 'JavaScript',
      desList: [
        {
          key: 'js1',
          str: '了解 JavaScript 基礎與 ES6 語言特性'
        },
        {
          key: 'js2',
          str: '自定義 Pure function'
        },
        {
          key: 'js3',
          str: '透過 Fetch / axios / AJAX 串接 RESTful API'
        }
      ]
    },
    {
      key: 'frameworks',
      icon: 'fas fa-crop-alt',
      title: 'Frameworks',
      desList: [
        {
          key: 'fw1',
          str: 'Base Components 建構與規劃'
        },
        {
          key: 'fw2',
          str: 'lodash / moment 等三方插件庫應用'
        },
        {
          key: 'fw3',
          str: 'ESLint + prettier 維持程式碼品質'
        }
      ]
    },
    {
      key: 'tools',
      icon: 'fas fa-tools',
      title: 'Tools',
      desList: [
        {
          key: 'tool1',
          str: 'git 版本控制'
        },
        {
          key: 'tool2',
          str: '透過 google 自行解決問題'
        },
        {
          key: 'tool3',
          str: 'NPM NVM'
        }
      ]
    },
    {
      key: 'others',
      icon: 'fas fa-list',
      title: 'Others',
      desList: [
        {
          key: 'o1',
          str: 'AWS 部署自己網站'
        },
        {
          key: 'o2',
          str: '具有 GitHub Pages 部署靜態網頁經驗'
        }
      ]
    }
  ]

  return (
    <section className={`${skillStyle.container} pt-10 pb-10 dark:bg-secondary-default`}>
      <div className="flex">
        <div className="basis-1/12" />
        <div className="flex flex-col w-full flex-wrap md:flex-row">
          {
            data.map(({ key, icon, title, desList }) => {
              return (
                <div
                  className="w-full md:w-1/3"
                  key={key}
                >
                  <div className="px-4 py-4 h-full">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg h-full">
                      <div className={`px-4 py-5 flex-auto ${skillStyle.icon_wrapper} dark:bg-secondary-dark dark:text-slate-200`}>
                        <div className={'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gradient-to-b from-slate-400 to-slate-600 bg-slate-400'}>
                          <i className={`${icon} ${skillStyle.icon}`} /></div>
                        <h6 className="text-xl font-semibold">{title}</h6>
                        {
                          desList !== undefined &&
                        <p className="mt-2 mb-4 text-blueGray-400">
                          {
                            desList.map(
                              ({ key, str }) => (
                                <li
                                  className={'mt-2'}
                                  key={key}
                                >
                                  {str}
                                </li>
                              )
                            )
                          }
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