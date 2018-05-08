# 复杂数据处理 · 树形
- Object
```js
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        return `name is ${this.name}`
    }
}

const me = new Person('coolfe');
console.log(me.hello());
```