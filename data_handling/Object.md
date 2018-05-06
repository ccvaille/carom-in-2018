# 基本数据处理 · 对象字面量
- 基本
```js
const coolfe = {
    name： ‘coolfe’,
    age: 25,
    job: 'fe'
}
```
- **动态属性**∂∂
```js
const prefix = 'coolfe';
const sourceVersion = 1;
const latesVersion = 25;

const Live = {
    [prefix + sourceVersion] : 1993,
    [prefix + latesVersion] : 2018
}

console.log(Live.coolfe25); //=> 2018
```

- 读取内容
    - `obj.key`
    - `obj[key]`
        - key 要放引号里面，数字默认会转化成字符串，可以忽略不写，要不会被当成变量
    ```js
    const foo = 'bar';
    const obj = {
        foo: 1,
        bar: 2
    }
    console.log(obj.foo); //=> 1
    console.log(obj['foo']); //=> 1
    console.log(obj[foo]); //=> 2
    ```
- 修改内容
    - `obj.key = value`