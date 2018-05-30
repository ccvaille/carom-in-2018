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

## 继承
- 借助构造函数（经典继承）
    - 基本思想:即在子类型构造函数的内部调用超类型构造函数.
```js
function Father(name) {
    this.color = ['red', 'blue', 'green'];
    this.name = name;
}
function Son() {
    Father.call(this, 'coolfe'); //继承了Father,且向父类型传递参数
}
var instance = new Son();
instance.color.push('black');
console.log(instance.color); //=> ["red", "blue", "green", "black"]

var instance1 = new Son();
console.log(instance1.color); //=> ["red", "blue", "green"]
```
- 组合继承（伪经典继承）
    - 基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.
```js
function Father(name) {
    this.name = name;
    this.color = ['red', 'blue', 'green'];
}
Father.prototype.sayName = function() {
    alert(this.name);
}

function Son(name, age) {
    Father.call(this, name); // 继承属性
    this.age = age;
}
// 继承方法
Son.prototype = new Father();
Son.prototype.sayAge = function() {
    alert(this.age);
}

var instance = new Son('louis', 5);
instance.color.push('black');
console.log(instance.color); //=> ["red", "blue", "green", "black"]
instance.sayName(); // 'louis'
instance.sayAge(); // 5

var instance1 = new Son('coolfe', 25);
console.log(instance1.color); //=> ["red", "blue", "green"]
instance1.sayName(); //'coolfe'
instance1.sayAge(); // 25
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
new M(1,2,3).sum() // => 6;
```
## new 运算符
```js
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
console.log(a)  // undefined
var a = 100

fn('zhangsan')  // 'zhangsan' 20
function fn(name) {
    age = 20
    console.log(name, age)
    var age
}

console.log(b); // 这里报错
// Uncaught ReferenceError: b is not defined
b = 100;
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
console.log(fn.name); // 'coolfe'

---

function Fn() {
    this.name = 'coolfe';
    return {};
}
var fn = new Fn();
console.log(fn.name); // 'undefined'

--- 

function Fn() {
    this.name = 'coolfe';
    return function(){}；
}
var fn = new Fn();
console.log(fn.name); // 因为是匿名函数，所以返回  ’’

---
function Fn() {
    this.name = 'coolfe';
    return 1；
}
var fn = new Fn();
console.log(fn.name); //=> 'coolfe'

---
function Fn() {
    this.name = 'coolfe';
    return null;
}
var fn = new Fn();
console.log(fn.name); // => 'coolfe'

```
### 作为对象属性执行
```js
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}
a.fn();  // this === a
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
b(); // this === window
```
### call、apply、bind 
```js
var a = {
    name: 'A',
    fn: function() {
        console.log(this.name)
    }
}
a.fn.call({name: 'B'}); // this === {name: 'B'}
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

----

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

--- 

// 异步
console.log(100)
setTimeout(function () {
    console.log(200)
}, 1000)
console.log(300)
```