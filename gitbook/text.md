- 安装 && init
    - npm i -g gitbook-cli
    - gitbook init
    - gitbook serve ./content ./docs  // docs 文件夹的内容，就是编译后的输出
-  npm 脚本
    - npm init -y //把项目变成一个 nodejs 的项目
```
"scripts": {
  "start": "gitbook serve ./content ./docs"
  "build": "gitbook build ./content ./docs"
},
```