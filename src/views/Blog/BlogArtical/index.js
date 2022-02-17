import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import ReactMarkdown from 'react-markdown';

import { articlesIdArray, dataIndex } from './data';

import indexStyle from './index.module.scss';

import gfm from 'remark-gfm';

const BlogArtical = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [contentIndex, setContentIndex] = useState([]);

  const [isIndexOpen, setIsIndexOpen] = useState(false);

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

  const getData = async (articleId) => {
    const file = await import(`./md/article-${articleId}.md`);
    const response = await fetch(file.default);
    const text = await response.text();
    setContent(text)
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  useEffect(() => {
    if (articlesIdArray.includes(Number(id))) {
      setContentIndex(dataIndex[id])
      getData(id)
    } else {
      navigate('/blog')
    }
  }, [id])

  return (
    <div className="basis-full sm:basis-10/12 flex flex-row">
      {
        (isIndexOpen && screenSize.dynamicWidth < 768) &&
          <div
            className="fixed bottom-12 left-4 mt-4 mb-8 py-4 px-4 border border-solid border-gray-500 rounded bg-primary-dark text-slate-50"
            style={{ maxHeight: '300px', overflow: 'auto' }}
          >
            <RecursiveRender
              data={contentIndex}
              onClose={() => setIsIndexOpen(!isIndexOpen)}
            />
          </div>
      }
      <div className={`fixed bottom-4 left-4 md:static md:basis-3/12 ${screenSize.dynamicWidth < 768 ? '' : 'mx-8'}`}>
        <div
          className={`p-4 pt-4 ${screenSize.dynamicWidth < 768 ? 'border-solid border rounded-full' : 'pt-12'}`}
          style={screenSize.dynamicWidth < 768 ? { padding: '0.5rem' } : {}}
        >
          {
            screenSize.dynamicWidth < 768
              ?
              <i
                className={'fa fa-list'}
                onClick={() => setIsIndexOpen(!isIndexOpen)}
              />
              : ''
          }
        </div>
        {
          screenSize.dynamicWidth > 768 &&
          <div className="mt-4 mb-8 py-4 px-4 border border-solid border-gray-500 rounded">
            <div className="pb-4">文章引索</div>
            <div className={`${indexStyle.line_divider}`}>
              {/* <span className={`${indexStyle.line_divider_text}`}>aaa</span> */}
            </div>
            <div className={`${indexStyle.divider}`}>
              <span />
            </div>
            <div className="pt-2">
              <RecursiveRender data={contentIndex} />
            </div>
          </div>
        }
      </div>
      <div
        className={'grow basis-full md:basis-9/12 w-full md:w-1/3'}
        style={{ height: 'calc(100vh - 150px)', overflow: 'auto' }}
      >
        <div className={`${screenSize.dynamicWidth < 768 ? 'pt-4' : 'pt-12'}`} />
        <ReactMarkdown
        /* eslint-disable-next-line */
          children={content}
          className={`${indexStyle.react_markdown}`}
          components={{
            h1({ children, className, ...props }) {
              return (
                <h1
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h1>
              )
            },
            h2({ children, className, ...props }) {
              return (
                <h2
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h2>
              )
            },
            h3({ children, className, ...props }) {
              return (
                <h3
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h3>
              )
            },
            h4({ children, className, ...props }) {
              return (
                <h4
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h4>
              )
            },
            h5({ children, className, ...props }) {
              return (
                <h5
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h5>
              )
            },
            h6({ children, className, ...props }) {
              return (
                <h6
                  className={`${indexStyle.anchor} ${className}`}
                  id={`${children}`}
                  {...props}
                >
                  {children}
                </h6>
              )
            }
          }}
          remarkPlugins={[gfm]}
        />
      </div>
    </div>
  );
};

function RecursiveRender(props) {
  const { data = [], onClose } = props;

  return(
    <>
      {
        data.map(item => (
          <ul
            key={item.title}
          >
            <li style={{ paddingTop: 10 }}>
              <div>
                <a
                  href={`#${item.title}`}
                  onClick={() => onClose()}
                >
                  <span>
                    {item.title}
                  </span>
                </a>
              </div>
            </li>
            {
              !isEmpty(item.data) &&
              <li style={{ paddingLeft: 10 }}>
                <RecursiveRender
                  {...props}
                  data={item.data}
                />
              </li>
            }
          </ul>
        ))
      }
    </>
  );
}

RecursiveRender.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  onClose: PropTypes.func
};

export default BlogArtical;