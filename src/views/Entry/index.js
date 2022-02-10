import React from 'react';

// import Test from './components/test';
import indexStyle from './index.module.scss';

const Entry = () => {
  return (
    <main style={{ height: '60vh' }}>
      <section
        className={`${indexStyle.container}`}
        style={{ position: 'relative' }}
      >
        <div className={`${indexStyle.bg} fixed`} />
        <div className={`${indexStyle.section_wrapper} flex flex-row`}>
          <div className="basis-1/12" />
          <div
            className={`basis-10/12 text-white flex flex-col pt-0 pb-0 ${indexStyle.main} md:flex-row md:pt-12 md:pb-8`}
            // style={{ height: '100%' }}
          >
            <div className={`basis-5/12 p-12 ${indexStyle.left}`}>
              <div className={`flex flex-col grow ${indexStyle.description}`}>
                <h1>Elvis Lin 大鈞</h1>
                <h4>A bit about Me</h4>
                <ul className={'mt-4'}>
                  <li>
                    <ul className={`${indexStyle.description_text_block}`}>
                      <li><b>NAME</b></li>
                      <li>{'I\'M ELVIS LIN'}</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={`${indexStyle.description_text_block}`}>
                      <li><b>PHONE </b></li>
                      <li>+886 975 371 151</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={`${indexStyle.description_text_block}`}>
                      <li><b>E-MAIL </b></li>
                      <li><a href="mailto:john800116@gmail.com">john800116@gmail.com</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`basis-7/12 p-4 ${indexStyle.right} md:p-12`}>
              <div className={'flex grow'}>
                <div>
                  <img src={'/assets/img/bg-head.jpeg'} />
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/12" />
          {/* <img
            className="w-full"
            src="/assets/img/bg-home-cafe.jpeg"
            style={{ filter: 'blur(4px)', position: 'absolute', top: 0 }}
          /> */}
        </div>
      </section>
      {/* <Test /> */}
      {/* <Test /> */}
      {/* <Test /> */}
      <section className={`${indexStyle.social_about_container}`}>
        <div className={`${indexStyle.social_about_wrapper} flex flex-row`}>
          <div className="basis-1/2">
            <img className={`${indexStyle.head}`} />
          </div>
          <div className="basis-1/2" />
        </div>
      </section>
      <section className={`${indexStyle.social_container}`}>
        <ul className={`${indexStyle.social_icons}`}>
          <li>
            <a
              className={'fab fa-google'}
              href="#"
            >
              {/* <div className={'fab fa-google'} /> */}
            </a>
          </li>
          <li>
            <a
              className={'fab fa-github'}
              href="#"
            >
              {/* <div className={'fab fa-google'} /> */}
            </a>
          </li>
          <li>
            <a
              className={'fab fa-facebook-square'}
              href="#"
            >
              {/* <div className={'fab fa-google'} /> */}
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Entry;