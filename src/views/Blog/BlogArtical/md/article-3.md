
# 學習 React-markdown

## 以下列出幾點注意事項

安裝版本 8.0.0

`
npm install react-markdown@8.0.0
`

受到 Webpack 版本影響

> 若使用 Webpack 4 以前的版本，需安裝 react-markdown 4 版本(包含以前)

> 若使用 Webpack 5 以後的版本，需安裝 react-markdown 5 版本(包含以前)

#

---

#

### 使用客製化 components ( Use custom components )

```sh

此處只 show h1 標籤

若要添加別的標籤可更改 h1 這個標籤做使用

<ReactMarkdown
  ...
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
    }
  }}
/>
```

#

---

#

### 錨點 css

透過 anchor 添加至想要添加的 react markdown components

這時就可以達到移動引索的效果

這裡僅列出 css

透過「偽元素」的方式來製作

```sh

// some style sheet

// index.css

.anchor:before {
  content: '';
  display: block;
  position: relative;
  width: 0;
  height: 2em;
  margin-top: -2em
}

```

#

---

#

參考文章

[https://github.com/remarkjs/react-markdown](https://github.com/remarkjs/react-markdown)

[https://github.com/yrgoldteeth/darkdowncss/blob/master/darkdown.css](https://github.com/yrgoldteeth/darkdowncss/blob/master/darkdown.css)

[https://tw511.com/a/01/24129.html](https://tw511.com/a/01/24129.html)
