export default {
  firstStyle: `/*
 * 大家好，我是 touryung
 * 这是我的简历，一起看看吧!
 */

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .5s;
}

/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222, 222, 222); 
  background: rgb(0, 43, 54);
  overflow: hidden;
}

/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 40vw;
  height: 90vh;
}

/* 
 * 文字颜色太单调了
 * 加上高端大气上档次的「代码高亮」
 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 放到右边去 */
.styleEditor {
  transform: translateX(57vw);
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed;
  left: 0;
  top: 0;
  padding: .5em;
  margin: .5em 40px;
  width: 40vw;
  height: 90vh;
  border: 1px solid;
  background: white;
  color: #222;
  overflow: auto;
}

/* 好了，我开始写简历了 */`,
  secondStyle: `\n\n/* 
 * 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，需要渲染成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 */`,
  thirdStyle: `\n\n/* 再对 HTML 加点样式 */
.resumeEditor{
  padding: 2em;
}

.resumeEditor h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}

.resumeEditor ul, .resumeEditor ol {
  list-style: none;
}

.resumeEditor ul > li::before{
  content: '•';
  margin-right: .5em;
}

.resumeEditor ol {
  counter-reset: section;
}

.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}

.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
/* 结束啦 */`,
};
