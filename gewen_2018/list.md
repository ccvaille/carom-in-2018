# 原型链和继承
## 原型链
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针(constructor)，而实例都包含一个指向原型对象的内部指针([[prototype]])，所以，让原型对象等于另一个类型的实例，就构成了实例与原型的链条，这就是原型链

## 确定原型与实例的关系
- instanceof 
    - `instance instanceof Father`
- isPrototypeOf()
    - `Father.prototype.isPrototypeOf(instance)`

## 原型链的缺陷
- 问题一: 当原型链中包含引用类型值的原型时,该引用类型值会被所有实例共享;
- 问题二: 在创建子类型(例如创建Son)的实例时,不能向超类型(例如Father)的构造函数中传递参数.
- 有鉴于此, 实践中很少会单独使用原型链

## 继承
- 借助构造函数（经典继承）
> 基本思想:即在子类型构造函数的内部调用超类型构造函数.
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
> 基本思路: 使用原型链实现对原型属性和方法的继承,通过借用构造函数来实现对实例属性的继承.
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