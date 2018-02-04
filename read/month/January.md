2018.01.28 21:31:12
- i++ 和 ++i
```
var a = 123; 
var b = a++;
var c = ++a;
console.log(b,a,c); // 123,125,125
```
- typeof Infinity 
    - number
- \n 换行符
```
var s = '\n1\n2\n3';
console.log(s); 
// 1
// 2
// 3 
```
2018-01-30 23:58:31
- 逻辑运算符的优先顺序
    - ！> && > ||
- NaN !== NaN
- 1 * undefined = NaN
- 1 * null = = 
- 转换成布尔值为 false 
    - “”
    - null
    - undefined
    - 0
    - NaN
    - false

2018-02-04 23:42:17
- 数组
    - 删除（delete）
        - 不能真正删除，只是把值设置成 undefined, 被删除后数组长度不会受影响
    - 判断变量是否存在
    ```
    if(typeof name !== "undefined") {
        //...
    }
    ```
    - for-in
    ```
    var a = ['a','b','c'];
    for (var i in a) {
        console.log('index '+ a[i])
    }
    ```
- switch 语法
```
switch(n) {
    case 1: 
        代码块1；
        break;
    case 2:
        代码块2；
        break;
    default:
        console.log('defult text');
}
```

- 练习
    - !!"false" // true
    - 10 % 0 // NaN
    - undefined == null // true
    - a  = 3e+3; a++ // 3000
    - var v = v || 10 // undefined