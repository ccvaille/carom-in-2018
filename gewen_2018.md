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
    - JS 的数据类型的判断（typeof || instanceof: 用于实例和构造函数的对应）
```js
    typeof null // object
    typeof [1,2] // object
    typeof Symbol() // symbol
    typeof function(){return a} // function
    [1, 2] instanceof Array // true
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
console.log(obj, a, b)// {1a:1,b:[1,2,3.4]} 2 [1,2,3,4]
```
    
- 原型与原型链（继承）
    - 原型和原型链定义
    - 继承写法
- 作用域和闭包
    - 执行上下文
    - this
    - 闭包是什么
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
