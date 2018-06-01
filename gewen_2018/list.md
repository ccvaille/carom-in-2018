# 数据类型
- Boolean
- String
- Number
- Undefined
- Null
- Symbol
- Object

## 怎么判断数组或对象
- Object.prototype.toString.call()
- Array.isArray()


# 原型链和继承
## 原型链
- 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针(constructor)，而实例都包含一个指向原型对象的内部指针([[prototype]])，所以，让原型对象等于另一个类型的实例，就构成了实例与原型的链条，这就是原型链
- 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（即它的构造函数的prototype）中寻找

## 确定原型与实例的关系
- instanceof 
    - `instance instanceof Father`
- isPrototypeOf()
    - `Father.prototype.isPrototypeOf(instance)`

## 确定属性是不是对象本身的属性
- hasOwnProperty()

## 原型链的缺陷
- 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
- 问题二: 在创建子类型(例如创建Son)的实例时,不能向超类型(例如Father)的构造函数中传递参数.
- 有鉴于此, 实践中很少会单独使用原型链

```js
// 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
function Father() {
    this.colors = ['red', 'blue'];
}
function Son() {}

Son.prototype = new Father();

var instance1 = new Son();
instance1.colors.push('black');
console.log(instance1.colors);
// => ["red", "blue", "black"]

var instance2 = new Son();
console.log(instance2.colors);
// => ["red", "blue", "black"]

```

## 继承
- 借助构造函数（经典继承）
    - 基本思想:即在子类型构造函数的内部调用超类型构造函数。

```js
function Father(name) {
    this.color = ['red', 'blue', 'green'];
    this.name = name;
}
function Son() {
    //继承了Father,且向父类型传递参数
    Father.call(this, 'coolfe'); 
}
var instance = new Son();
instance.color.push('black');
console.log(instance.color); 
//=> ["red", "blue", "green", "black"]

var instance1 = new Son();
console.log(instance1.color); 
//=> ["red", "blue", "green"]
```

- 组合继承（伪经典继承）
    - 基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承。

```js
function Father(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
Father.prototype.sayName = function() {
    alert(this.name);
}

function Son(name, age) {
    // 继承属性
    Father.call(this, name); 
    this.age = age;
}
// 继承方法
Son.prototype = new Father();
Son.prototype.sayAge = function() {
    alert(this.age);
}

var instance = new Son('louis', 5);
instance.color.push('black');
console.log(instance.color); 
//=> ["red", "blue", "green", "black"]
instance.sayName(); 
// 'louis'
instance.sayAge(); 
// 5

var instance1 = new Son('coolfe', 25);
console.log(instance1.color); 
//=> ["red", "blue", "green"]
instance1.sayName(); 
//'coolfe'
instance1.sayAge(); 
// 25


var i2 = new Son('0',0);
console.log(i2.color);
i2.sayName();
i2.sayAge();
```

- ES6 

```js
class P {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    sum() {
        console.log(this.x + this.y)
    }
}

class M extends P {
    constructor(x,y,z) {
        super(x,y);
        this.z = z;
    }
    sum() {
        console.log(this.x + this.y + this.z)        
    }
}
new M(1,2,3).sum() 
// => 6;
```

## new 运算符

```js
var obj = new F();

var obj  = {};
obj.__proto__ = F.prototype;
F.call(obj);
```

## 原型链中 this
- 只有在函数执行的时候， this 才被绑定

# 作用域和闭包
## 执行上下文
- 在一段 JS 脚本（即一个 `<script>` 标签中）执行之前，要先解析代码（所以说 JS 是解释执行的脚本语言），解析的时候会先创建一个 `全局执行上下文` 环境，先把代码中即将执行的（内部函数的不算，因为你不知道函数何时执行）`变量、函数声明`都拿出来。变量先暂时赋值为undefined，函数则先声明好可使用。这一步做完了，然后再开始正式执行程序。再次强调，这是在代码执行之前才开始的工作。
- 下面代码为什么 a 是 undefined，而 b 却报错了，实际 JS 在代码执行之前，要「全文解析」，发现 var a，知道有个 a 的变量，存入了执行上下文，而 b 没有找到 var 关键字，这时候没有在执行上下文提前「占位」，所以代码执行的时候，提前报到的 a 是有记录的，只不过值暂时还没有赋值，即为 undefined，而 b 在执行上下文没有找到，自然会报错（没有找到 b 的引用）。

```js
console.log(a)  
// undefined
var a = 100

fn('zhangsan')  
// 'zhangsan' 20
function fn(name) {
    age = 20
    console.log(name, age)
    var age
}

console.log(b); 
// 这里报错
b = 100;
// Uncaught ReferenceError: b is not defined
```
## this
- this 的指向在函数定义时无法确定，只有在函数才能确定 this 的最终指向，即调用它的对象
- 严格模式下 this 默认指向不是 window ，而是 undefined
### 作为构造函数执行

```js
// 构造函数如果返回一个对象，那么this指向就是这个对象，如果返回的不是对象，则还是指向构造函数生成的对象，特殊情况 null 虽然也是对象，但是返回 null 的话不会改变 this 指向;
function Fn() {
    this.name = 'coolfe';
}
var fn = new Fn();
console.log(fn.name); 
// 'coolfe'

function Fn() {
    this.name = 'coolfe';
    return {};
}
var fn = new Fn();
console.log(fn.name); 
// 'undefined'


function Fn() {
    this.name = 'coolfe';
    return function(){}；
}
var fn = new Fn();
console.log(fn.name); 
// 因为是匿名函数，所以返回  ’’

function Fn() {
    this.name = 'coolfe';
    return 1；
}
var fn = new Fn();
console.log(fn.name); 
//=> 'coolfe'


function Fn() {
    this.name = 'coolfe';
    return null;
}
var fn = new Fn();
console.log(fn.name); 
// => 'coolfe'

```
### 作为对象属性执行
```js
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}
a.fn();  
// this === a
```
### 作为普通函数执行
```js
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}
var b = a.fn;
b(); 
// this === window
```
### call、apply、bind 
```js
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}
a.fn.call({name: 'B'}); 
// this === {name: 'B'}
```

#### 自己实现 bind()
```js
var a = {
    name: 'coolfe',
    sayName: function(x, y) {
        console.log(this.name);
        console.log(x);
        console.log(y);
    }
}
function bind(fn, context) {
    return function() {
        fn.apply(context, arguments);
    }
}

var b = bind(a.sayName, a);
b(1,2);

// => 'coolfe'
// => '1'
// => '2'

```

## 作用域
- es5
    - JS 没有块级作用域，只有全局作用域和函数作用域
- es6
    - let 块级作用域

```js
if (true) {
    var name = 'zhangsan'
}
console.log(name) // => 'zhangsan'

if (true) {
    let name = 'zhangsan'
}
console.log(name)  // 报错，因为 let 定义的 name 是在 if 这个块级作用域
```

- 作用域链
    - 当前作用域没有定义的变量，会向父级作用域寻找，直至找到全局作用域。这种一层层关系，就是作用域链

## 闭包
> 有权访问另一个函数作用域中的变量的函数

- 应用场景
    - 函数作为返回值
    - 函数作为参数传递
- 优点
    - 可以读取函数内部的变量
    - 可以让局部变量保存在内存中，实现变量数据共享
- 缺点
    - 内存消耗大

```js
// 函数作为返回值
function F1() {
    var a = 100;
    return function (){
        console.log(a);
    }
}
var f1 = F1();
var a = 200;
f1(); //=> 100

// 函数作为参数传递
function F1() {
    var a = 100;
    return function() {
        console.log(a); // 100
    }
}
function F2(f1) {
    var a = 200;
    console.log(f1()); // undefined
}
var f1 = F1();
F2(F1);
```

### for 循环间隔 500 毫秒输出

```js
// 闭包
for(var i = 0; i < 5; i++) {
    setTimeout(function(a) {
        console.log(a);
    }(i))
}

// let
for(let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    })
}

// sleep
async function fn(){
    for(let i = 0; i < 5; i++) {
        await new Promise((resolve, reject) => {
            setTimeout(resolve, 500)
        });
        console.log(i);
    }
}
fn();
```

# 同步、异步与事件循环
- JS 是单线程运行，所以需要异步
- 异步应用场景
    - setTimeout / setInterval
    - 网络请求 如 Ajax `<img>` 加载
    - Promise 对象

```js
// 同步
console.log(100)
alert(200)  // 1秒钟之后点击确认
console.log(300)


// 异步
console.log(100)
setTimeout(function () {
    console.log(200)
}, 1000)
console.log(300)
```

## 事件循环
- JS 引擎遇到一个异步事件后并不会一直等待返回结果，而是把事件挂起，继续执行其他任务。当异步事件返回结果后， JS 会把事件加入事件队列里面，同步任务都在主线程上执行，形成一个执行栈，等主线程处于闲置时，主线程回去查找事件队列是否有任务，有的话会把它取出放进执行栈，如此反复形成循环。

- 首先判断是同步任务还是异步任务，同步任务直接进入主线程，异步任务会先进入 Event Table 并注册回调函数，回调函数执行好了，回调函数会进入 Event Queue 里面，然后 事件循坏会一直循坏判断 Stack 是否为空，为空的话 Event Queue 里面的函数会依次到 Stack 执行

- 不同的异步任务被分为两类：微任务（micro task）和宏任务（macro task）
    - 事件循环的顺序，决定js代码的执行顺序。进入整体代码(宏任务)后，开始第一次循环。接着执行所有的微任务。然后再次从宏任务开始，找到其中一个任务队列执行完毕，再执行所有的微任务
    - 同一次事件循环中，微任务永远在宏任务之前执行
    - 宏任务
        - setInterval()
        - setTimeout()
    - 微任务
        - new Promise()
        - process.nextTick

```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
// 1，7，6，8，2，4，3，5，9，11，10，12
```
```js
const first = () => (new Promise((resovle,reject)=>{
    console.log(3);
    let p = new Promise((resovle, reject)=>{
         console.log(7);
        setTimeout(()=>{
           console.log(5);
           resovle(6); 
        },0)
        resovle(1);
    }); 
    resovle(2);
    p.then((arg)=>{
        console.log(arg);
    });

}));

first().then((arg)=>{
    console.log(arg);
});
console.log(4);
//=> 3, 7, 4, 1, 2, 5
```
# React 和 Redux
## React
- 优点
    - 隔绝了 DOM 操作
    - 模块化，组件化
    - 性能优化，虚拟 DOM
    - 只负责  View 层，数据流由其他框架做
- 声明

```js
// react.component
import React from 'react';
class Crowd extends React.Component {
    componentDidMount() {
    }
    render(){}
}
// 无状态组件
const Todo = (props) => (
    <li
        onClick= {props.onClick}
    >
     {props.text}
    </li>
)
```
- 生命周期
    - getDefaultProps()
    - getInitialState()
    - componentWillMount()
        - 在这个方法中 setState 不会发生重新渲染(re-render)
    - render
    - componentDidMount
        - 真实 DOM 已经生成，可以对 DOM 进行操作
    - componentWillReceiveProps(nextProps）(Props 改变)
    - shouldComponentUpdate(nextProps, nextState)（state）改变 => componentWillUpdate(nextProps, nextState) => render => componentDidUpdate(prevProps, prevState)
    - componentWillUnmount（卸载）
        - 取消网络请求
        - 清楚无效计时器
- setState()


```js
this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});
```
- vdom diff
- 传统算法遍历树的子节点比较的复杂度是O(n³)，vdom diff使用下面的策略将其降为O(n)：
    - 1）只比较同级节点，因为跨级的场景很少
    - 2）同层节点的位置变换，对于不同层的节点，只有简单的创建和删除
    - 3）列表使用 key 进行移位算法


## Redux
- Redux-thunk
    - api
        - Provider:使用 react 的 context 属性透传 props 下去
        - connect：连接 component 和 store，把 store 写进 props 
    -  可以让 action 先不返回 action 对象，而是返回一个函数，函数传递 dispatch 和getState 两个方法，然后在函数里 dispatch action，解决异步 action

# Webpack
- 核心概念
    - 1）入口：模块依赖分析入口
    - 2）出口：打包生成的bundles输出的目录及文件名
    - 3）loaders：webpack本身只理解js，但是在webpack概念里，所有文件即模块，loaders可以让webpack去理解和处理非js的文件，比如CSS/LESS，字体，图片，html等，test属性标记哪些文件应该被转换，use属性表示转换时使用哪个loader
    - 4）plugins：处理一个更广的任务，require 对应插件，然后 new 一个实例即可
- 多入口配置

```js
entry: {
    pageone: './src/pageOne/index.js',
    pagetwo: './src/pageTwo/index.js'
}
```

- 常用插件
    - extract-text-webpack-plugins:抽离 CSS 样式，防止将样式打包在 js 里引起样式加载错乱
    - webpack-parallel-uglify-plugin：提升打包性能
    - string-replace-webpack-plugin: 将指定字符串替换为对应代码
    - html-webpack-plugin: 用以生成模板
    - open-brower-webpack-plugin: 自动打开浏览器
    - ParallelUglifyPlugin： 并行运行UglifyJS插件，这可以有效减少构建时间
- 性能优化
    - 'cache-loader'
- 异步按需加载
- `require.ensure(dependencies, callback, chunkName)`

```js
output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    sourceMapFilename: '[file].map',
    publicPath: '/static/',
    //加这个！
    chunkFilename: '[name].[chunkhash:5].chunk.js',
}

<Route
    path='index'
    getComponent={(location, cb) => {
        require.ensure([], require => {
            cb(null, require('components/Index').default);
        }, 'index');
    }} />
```

# Js 安全知识
## CSRF
- 跨站请求伪造
- 登陆成功一个网站后，访问恶意页面后，页面发了一个恶意请求，浏览器会默认带登陆成功的 cookie 过去，就能完成攻击
- 验证 Referer 字段
- 添加 token
- 添加验证码 

## XSS
- 跨站脚本攻击
- 过滤特殊字符

# 性能优化
- content 方面
    - 减少 HTTP请求：合并文件、CSS精灵、inline Image
    - 非必须组件延迟加载
    - 减少DOM元素数量
    - 减少iframe数量
- Server方面
    - 使用CDN
    - 添加Expires或者Cache-Control响应头
    - 避免空src的img标签
- css方面
    - 将样式表放到页面顶部
- Javascript方面
    - 将脚本放到页面底部
    - 将javascript和css从外部引入
    - 压缩javascript和css
    - 删除不需要的脚本
    - 减少DOM访问
    - 合理设计事件监听器

# 从浏览器地址栏输入url到显示页面的步骤(以HTTP为例)
- 在浏览器地址栏输入URL
- 浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤
    - 如果资源未缓存，发起新请求
    - 如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。
    - 检验新鲜通常有两个HTTP头进行控制Expires和Cache-Control：
        - HTTP1.0提供Expires，值为一个绝对时间表示缓存新鲜日期
        - HTTP1.1增加了Cache-Control: max-age=,值为以秒为单位的最大新鲜时间
- 浏览器解析URL获取协议，主机，端口，path
- 浏览器组装一个HTTP（GET）请求报文
- 浏览器获取主机ip地址，过程如下：
    - 浏览器缓存
    - 本机缓存
    - hosts文件
    - 路由器缓存
    - ISP DNS缓存
    - DNS递归查询（可能存在负载均衡导致每次IP不一样）
- 打开一个socket与目标IP地址，端口建立TCP链接，三次握手如下：
    - 客户端发送一个TCP的SYN=1，Seq=X的包到服务器端口
    - 服务器发回SYN=1， ACK=X+1， Seq=Y的响应包
    - 客户端发送ACK=Y+1， Seq=Z
    - TCP链接建立后发送HTTP请求
- TCP链接建立后发送HTTP请求
- 服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序
- 服务器检查HTTP请求头是否包含缓存验证信息如果验证缓存新鲜，返回304等对应状态码
- 处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作
- 服务器将响应报文通过TCP连接发送回浏览器
- 浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手如下：
    - 主动方发送Fin=1， Ack=Z， Seq= X报文
    - 被动方发送ACK=X+1， Seq=Z报文
    - 被动方发送Fin=1， ACK=X， Seq=Y报文
    - 主动方发送ACK=Y， Seq=X报文
- 浏览器检查响应状态吗：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同
- 如果资源可缓存，进行缓存
- 对响应进行解码（例如gzip压缩）
- 根据资源类型决定如何处理（假设资源为HTML文档）
- 解析HTML文档，构件DOM树，下载资源，构造CSSOM树，执行js脚本，这些操作没有严格的先后顺序，以下分别解释
- 构建DOM树：
    - Tokenizing：根据HTML规范将字符流解析为标记
    - Lexing：词法分析将标记转换为对象并定义属性和规则
    - DOM construction：根据HTML标记关系将对象组成DOM树
- 解析过程中遇到图片、样式表、js文件，启动下载
- 构建CSSOM树：
    - Tokenizing：字符流转换为标记流
    - Node：根据标记创建节点
    - CSSOM：节点创建CSSOM树
- 根据DOM树和CSSOM树构建渲染树:
    - 从DOM树的根节点遍历所有可见节点，不可见节点包括：1）script,meta这样本身不可见的标签。2)被css隐藏的节点，如display: none
    - 对每一个可见节点，找到恰当的CSSOM规则并应用
    - 发布可视节点的内容和计算样式
- js解析如下：
- 浏览器创建Document对象并解析HTML，将解析到的元素和文本节点添加到文档中，此时document.readystate为loading
- HTML解析器遇到没有async和defer的script时，将他们添加到文档中，然后执行行内或外部脚本。这些脚本会同步执行，并且在脚本下载和执行时解析器会暂停。这样就可以用document.write()把文本插入到输入流中。同步脚本经常简单定义函数和注册事件处理程序，他们可以遍历和操作script和他们之前的文档内容
- 当解析器遇到设置了async属性的script时，开始下载脚本并继续解析文档。脚本会在它下载完成后尽快执行，但是解析器不会停下来等它下载。异步脚本禁止使用document.write()，它们可以访问自己script和之前的文档元素
- 当文档完成解析，document.readState变成interactive
- 所有difer脚本会按照在文档出现的顺序执行，延迟脚本能访问完整文档树，禁止使用document.write()
- 浏览器在Document对象上触发DOMContentLoaded事件
- 此时文档完全解析完成，浏览器可能还在等待如图片等内容加载，等这些内容完成载入并且所有异步脚本完成载入和执行，document.readState变为complete,window触发load事件
- 显示页面（HTML解析过程中会逐步显示页面）

# 跨域
现代浏览器可使用HTML5规范的CORS功能，只要目标服务器返回HTTP头部**Access-Control-Allow-Origin: ***即可像普通ajax一样访问跨域资源