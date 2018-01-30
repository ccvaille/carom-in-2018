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