# 基本数据处理 · 字符串
- 剔除文本中非英文字母
    - 思路一：可以通过 ASCII 码去筛选英文字母和空格( `String.charCodeAt()` )
        - 大写字母 65 ~ 90
        - 小写字母 97 ~ 122 
        - 空格 32
    ```js
    const originalText = 'Hey gril, how is it going?';
    let wordOnlyText = '';

    for(let i = 0; i < originalText.length; i++) {
        const letter = originalText[i]
        const asciiCode = letter.charCodeAt();

        if((asciiCode >= 65 && asciiCode <= 90) || (asciiCode >= 97 && asciiCode <= 122) || asciiCode === 32) {
            wordOnlyText += letter;
        }
    }

    console.log(wordOnlyText); //=> "Hey gril, how is it going"
    ``` 
    - 思路二： 正则表达式
    ```js
    const originalText = 'Hey girl, how is it going?'
    const words = originalText.toLowerCase().match(/\w+/g)

    console.log(words) //=> ["hey", "girl", "how", "is", "it", "going"]
    ```

- 大写字母转换小写字母
    - 思路一： 判断 ASCII 码，大写字母的 ASCII 码加上 32 就是对应小写字母，在通过 `String.fromCharCode(code)去转换字母
    ```js
    let lowerCaseText = '';

    for (let i = 0; i < wordOnlyText.length; i++) {
        const letter = wordOnlyText[i];
        const asciiCode = letter.charCodeAt();
        if (asciiCode >= 65 && asciiCode <= 90) {
            lowerCaseText += String.fromCharCode(asciiCode + 32);
        } else {
            lowerCaseText += letter;
        }
    }

    console.log(lowerCaseText); //=> "hey gril, how is it going"
    ```
    - 思路二：String.toLowerCase()
    ```js
    const lowerCaseText = wordOnlyText.toLowerCase();
    ```
- 文本分割
    - `String.split('')`

- 组装字符串
    - 思路一： + 
    ```js
    const str1 = 'hello';
    const str2 = 'world';
    console.log(str1 + '' + str2); //=> "hello world"
    ```
    - 思路二： `\`
    ```js
    const str1 = 'hello';
    const str2 = 'world';
    const message = `this is coolfe world ${str1} ${str2}`;
    console.log(message); //=>  this is coolfe world hello world
    ```