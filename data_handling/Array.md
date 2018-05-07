# 基本数据处理 · 数组
- 增
    - [array](../read/img/array.jpg)
- 删
    - `array.splice(start,delCount)`
- 改
    - `array[key] = value`
- 查
    - 过滤：`array.filter()`
    - 循坏： `array.forEach()`
    - 数据转换： `array.map()`
    - 聚合数据： `array.reduce()`
    ```js
    const array = [1,2,3,4,5];
    function sum(array) {
        return array.reduce(function(left, right) {
            return left + right;
        })
    }

    function multi(array) {
        return array.reduce(function(left, right) {
            return left * right
        })
    }

    console.log(sum(array)); //=> 15
    console.log(multi(array)); //=> 120
    ```