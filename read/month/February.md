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

2018-02-06 23:39:18
- arguments: 返回函数所接收的所有参数
```
function sum() {
    return arguments;
}
function sum(1,2,3,4); // [1,2,3,4]
```

- parseInt()
- 宿主环境
- 作用域： 变量在函数内定义，函数以外的地方不可见；变量定义在 if 或 for 代码块，在代码块之外是可见的。

- 匿名函数

- 练习
    - !!"false" // true
    - 10 % 0 // NaN
    - undefined == null // true
    - a  = 3e+3; a++ // 3000
    - var v = v || 10 // undefined