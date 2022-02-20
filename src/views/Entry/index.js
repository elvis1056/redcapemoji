import React from 'react';

import SkillSection from './components/SkillSection';
import indexStyle from './index.module.scss';
import { Footer } from 'layouts/Main/Footer';

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
                <ul className={'mt-4 list-none'}>
                  <li>
                    <ul className={`list-none ${indexStyle.description_text_block}`}>
                      <li><b>NAME</b></li>
                      <li>{'I\'M ELVIS LIN'}</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={`list-none ${indexStyle.description_text_block}`}>
                      <li><b>PHONE </b></li>
                      <li>+886 975 371 151</li>
                    </ul>
                  </li>
                  <li>
                    <ul className={`list-none ${indexStyle.description_text_block}`}>
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
      <SkillSection />
      <Footer />
    </main>
  );
};

export default Entry;