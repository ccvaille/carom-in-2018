# 《C 程序设计语言第二版》
## 基本语法

- 头部添加
`#include <stdio.h>`
- main 函数
```
# 新版本需要添加 int 类型标记
int main() {}
```
- 函数体
    - 需要 return value

## 执行语言
- Unix
    - `cc filePath`

## 基本数据类型
- int 整数
- float 浮点数
- char 字符
- short 短整形
- long 长整形
- double 双精点浮点型

## Note
- 在 C 语言里面，整数除法操作将执行舍位，结果中的任何小数部分会被舍弃。
    - 可以在整数后面加个一位小数 ‘0’ 解决；
- `define` 符号常量通常用大写字母拼写，且指令行的末尾没有分号；
- 区分文件中有效数据与输入结束符：EOF ( end of file)；
- C 语言要求 for 循环语句必须要有一个循环体，没有可以用 `;` 代替；
- 赋值结合次序是由右至左
```
a = b = c = 0;

a = (b = ( c = 0));
```
- **终端内输入 `EOF`**
```
windows 下输入 Ctrl + Z + Enter 

Linux 和 MAC 下输入 Ctrl + D + Enter
```
- 函数内 `return 0` 表示正常终止，非零表示出现异常情况或出错结束条件
- `void` 说明不返回任何值
-  特殊字符
    - `\0` : 空字符，其值为 0
    - `\n` : 换行符