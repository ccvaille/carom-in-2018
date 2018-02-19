// es5
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.changeName = function(newName) {
//     this.name = newName;
// }
// var Coolfe = new Person('coolfe');
// console.log(Coolfe.name);
// Coolfe.changeName('happycoolfe');
// console.log(Coolfe.name);

// es6 class
// class Person {
//     constructor(name) {
//         this.name = name; // 对象实例化时执行
//     }
//     changeName(newName) {
//         this.name = newName; // 实例调用时执行
//     }
// }
// var Coolfe = new Person('coolfe');
// console.log(Coolfe.name);
// Coolfe.changeName('happycoolfe');
// console.log(Coolfe.name);


// es6 对象字面量
// var Person = {
//     name: 'coolfe',
//     sayName: function() {
//         console.log(`My name is ${this.name}`);
//     }
// }
// Person.sayName();
// let plzTalk = Person.sayName.bind(Person);
// plzTalk();


class A {
    constructor(name) {
        this.name = name || 'aa';
    }
    alertName() {
        console.log(`${this.name}1`);
    }
}

class B extends A {
    output() {
        console.log(`${this.name}2`);
    }
}

let boy = new B;
console.log(boy.name);
boy.output();
boy.alertName();