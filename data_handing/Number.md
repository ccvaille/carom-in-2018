# 基本数据处理 · 数字
- 幂运算(3 * 3 * 3)
    - Math.pow(base, exponent)
    ```js
    console.log(Math.pow(3,3)) //=> 27
    ```
- 对数运算（幂运算的逆转运算）
    - Math.log(x): 
        - [Math.log(x)](./img/equation-1.svg)
    - [换底公式](./img/equation.svg)
    ```js
    function getBaseLog(base, x) {
        return Math.log(x) / Math.log(base);
    }

    console.log(getBaseLog(2, 1024)); //=> 10
    ```
- 求和运算
    - 运用循环计算
    ```js
    let Sum = 0;
    const List = [1,2,3,4,5,6,7,8,9,10];

    for(let i = 0; i < List.length; i++) {
        Sum += List[i]
    }

    console.log(Sum); //=> 55
    ```