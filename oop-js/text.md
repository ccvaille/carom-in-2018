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
- 继承（super）
  - 使用 super() 呼叫父类的 constructor()
  - 使用 super.functionName() 调用父类中的 static 方法
  - ES6的继承机制，实质是先创造父类的实例对象 this（所以必须先调用 super 方法），然后再用子类的构造函数修改 this。
```
  class Father {
  constructor(familyName){
    this.familyName = familyName;
  }
  static sayHello() {
    console.log('hello');
  }
}



class Son extends Father {
  constructor() {
    super();
    this.height = 170; // 没有上一行的 super() ，这里的 this 就不让用
  }

  static hello() {
    super.sayHello(); // 调用父类的静态方法
  }
}

let tom = new Son('Wang', 160);
console.log(Son.hello());
```
## code
- [demo](./src/main.js)