## 面试刷题
- es6
- node
- webpack
- flex
- svg
- 红宝书原型链相关
- 页面加载优化
- 安全相关：xss csrf

## Q
-  如何阻止 a 标签的默认事件
    - javascript:; || javascript:void(0)
- HTML 语义化是什么
    - 使用正确的标签，便于浏览器和搜索引擎解析，更利于 SEO
- 如何理解 BEM 系统命名
    - Block Element Modifier
- 如何理解 渐进增强 和 优雅降级
    - 保证尽可能多的用户都能正常使用网站
```
    .transition { /*渐进增强写法*/
  -webkit-transition: all .5s;
     -moz-transition: all .5s;
       -o-transition: all .5s;
          transition: all .5s;
}
.transition { /*优雅降级写法*/
          transition: all .5s;
       -o-transition: all .5s;
     -moz-transition: all .5s;
  -webkit-transition: all .5s;
}

```
- 说下 React 的生命周期
    - componentWillMount render 之前调用
    - render
    - componentDidMount render 之后调用
    - ...
- css 优先级
    - 类型选择器、伪元素(::before)
    - 类选择器，属性选择器，伪类(:hove)
    - ID
    - important
- 解构赋值 是什么
```
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```
- box-sizing
    - content-box
    - border-box
- rem与em的区别
    - em 相对于父级元素字体大小
    - rem 相对于 <html> 
- viewport
- let var const
- meta标签
1. 图片懒加载的实现
2. 闭包实现，叠加函数。
3. 正则的考察
4. XSS和CSRF原理和预防。
5. 深拷贝与浅拷贝。
6. 兼容所有浏览器的事件绑定函数。
7. jQuer或者zepto源码阅读，实现事件绑定。
8. ==运算符的考察，类型转换。
9. JS事件代理的理解
10. this指向
11. 正则
12. http长链接，浏览器缓存
13. 前端性能优化
14. HTML5 Es6特性
15. 输入url到页面呈现过程
16. Xss csrf

## 参考链接
- [Front-end Job Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions 'Front-end Job Interview Questions')