- 在面向对象编程条件下，类的方法内部如果含有 this，它默认指向类的实例
- bind 的作用就是把一个对象（作为 bind 的参数传入），绑定到这个函数中的 this 之上
```
var Person = {
  name: 'coolfe',
  talk: function() {
    console.log(`My name is ${this.name}`);
  }
}

Person.talk();
let plzTalk = Person.talk;
plzTalk();
```
```
var Person = {
  name: 'coolfe'
}

let plzTalk = function() {
    console.log(`My name is ${this.name}`);
  };


plzTalk.bind(Person)();
```

- 静态方法（ static method ）可以让我们不用实例化 class 
```
class Person {
  constructor() {

  }
  static sayHello() {
    console.log("Hello");
  }
}

Person.sayHello();
```
- 继承(extends)
```
class Father {
  constructor() {
    this.gender = 'male';
  }
  getFamilyName() {
    console.log(`The family name is Zhang`);
  }
}

class Son extends Father {
  constructor() {
    super();
    this.height = 160;
  }
  getSchoolName() {
    console.log('NO.2 Middle School');
  }
}

let tom = new Son;
console.log(tom.gender);
console.log(tom.height);
tom.getFamilyName();
tom.getSchoolName();
```
## code
- [demo](./src/main.js)