### CSS 世界
- 术语
    - 属性值： 属性冒号后面的所有内容统一成属性值
    - 声明： 属性名 + 属性值 (color： red)
    - 声明块： { height: 20px; color: red}
    - 规则集： .vocabulary { height: 20px; color: red}
    - 属性选择器： 拥有 [] 的选择器： [title]
    - 伪类选择器： 前面有个冒号的选择器： :first-child
    - 伪元素选择器： 有连续两个冒号的选择： ::before
    - 后代选择器： 空格
    - 相邻后代选择器： >
    - 兄弟选择器： ~
    - 相邻兄弟选择器： +
- 标签
    - 块级元素
    - 内联级元素
- display
    - block = block-block
    - inline-block (外在的是内联盒子，内在盒子是块级容器盒子,width 和 height 都是应用在内在盒子里)
    - ...
- width/height
    - 默认情况下，绝对定位元素的宽高由内部尺寸决定。
        - 一种情况除外：**当 left/top 或 top/bottom 对立方位的属性值同时存在的的时候，元素的宽度表现为 “格式化宽度”，其宽度大小相对于最近的具有定位特性的祖先元素计算**
        ```
        // 假设他的父集定位元素 width = 1000px; 那么 div 的宽度为 1000 - 20 -20;
        div {
            position: absolute;
            left: 20px;
            right: 20px;
        }
        ```
    - 首选最小宽度
        - 中文最小宽度为 14px(每个汉字的宽度)
        - 英文为连续的英文字符单元决定，一般 - ? 空格 都会终止
    - 最大宽度
        - 
- 常用代码块
```
.clear:after{
    content: '';
    display: table; // 也可以是 block
    clear: both;
}
```

### 不常用的属性和属性值
    - word-break: break-all // 允许在单词内换行

#### 参考链接
- [单行居中，多行居左 DEMO](http://demo.cssworld.cn/3/2-5.php "单行居中，多行居左 DEMO")
- [凹凸效果](http://demo.cssworld.cn/3/2-6.php "凹凸效果")