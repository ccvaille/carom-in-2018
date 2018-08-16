## note
- 将 `canvas` 放进 web 页面里面时，第一件事要看页面是否已经加载并且所有的 HTML 元素都已经展开
```js
window.addEventListener('load', function() {}, false);
```
- Web 的坐标系统
    - 原点在屏幕（浏览器屏幕）的左上角
    - 原点沿 x 轴向右是正值
    - 原点沿 y 轴向下是正值