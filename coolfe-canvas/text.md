## note
- 将 `canvas` 放进 web 页面里面时，第一件事要看页面是否已经加载并且所有的 HTML 元素都已经展开
```js
window.addEventListener('load', function() {}, false);
```