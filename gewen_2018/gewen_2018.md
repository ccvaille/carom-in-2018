# ES
- 变量类型
    - JS 的数据类型的分类
        - Boolean
        - String
        - Number
        - **Null**
        - **Undefined**
        - Symbol（ES6 新定义）
    - 值类型和引用类型
        - 值类型变量包括 Boolean、String、Number、Undefined、Null[按值传递]
        - 引用类型包括了 Object 类的所有，如 Date、Array、Function[按共享传递]
        - 按值传递的类型，复制一份存入栈内存，这类类型一般不占用太多内存，而且按值传递保证了其访问速度。按共享传递的类型，是复制其引用，而不是整个复制其值（C 语言中的指针），保证过大的对象等不会因为不停复制内容而造成内存的浪费
    - JS 的数据类型的判断（typeof || instanceof: 用于实例和构造函数的对应）
```js
    typeof null // object
    typeof [1,2] // object
    typeof Symbol() // symbol
    typeof function(){return a} // function
    [1, 2] instanceof Array // true
```
```js
// 引用类型
var a = {x: 10, y: 20}
var b = a
b.x = 100
b.y = 200
console.log(a)  // {x: 100, y: 200}
console.log(b)  // {x: 100, y: 200}
```
```js
var obj = {
    a: 1,
    b: [1,2,3]
}
var a = obj.a
var b = obj.b
a = 2
b.push(4)
console.log(obj, a, b)// {a:1,b:[1,2,3.4]} 2 [1,2,3,4]
```
```js
// test
function foo(a){
    a = a * 10;
}
function bar(b){
    b.value = 'new';
}
var a = 1;
var b = {value: 'old'};
foo(a);
bar(b);
console.log(a); // 1
console.log(b); // value: new
```
    
- 原型与原型链（继承）
    - 原型和原型链（原型链中的 this 指向当前触发事件执行的对象）
```js
// 构造函数
function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}
// 创建示例
var f = new Foo('zhangsan')
f.printName = function () {
    console.log(this.name)
}
// 测试
f.printName() // zhangsan
f.alertName() // zhangsan
```
- 作用域和闭包
    - 执行上下文
        - 变量提升
    - this
    - 闭包是什么
```js
// 变量提升
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
- 异步
    - 同步 vs 异步
    - 异步和单线程
    - 前端异步的场景
- ES6/7 新标准的考查
    - 箭头函数
    - Module
    - Class
    - Set 和 Map
    - Promise...
