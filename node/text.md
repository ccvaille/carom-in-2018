- require('./lib/hello.js'); // 引入 js 的路径
```
// hello.js
module.exports = function my() {
    console.log('coolfe export')
}
//index.js
var hello = require('./lib/hello.js');
hello();
```
```
// hello.js
module.exports.my = function() {
    console.log('coolfe export')
}
//index.js
var hello = require('./lib/hello.js').my;
hello();
```
- curl -i  href  // node 环境下模拟访问链接 href
- on('event',()=>{});
- npm 
    - 登录
        - npm login
    - 查看
        - npm whoami
    - 发布
        - npm publish
    - 更新
        - npm update
- 可以执行的系统命令
    - #!/usr/bin/env node
- 设置可执行命令权限
    - chomd +x bin/happy-coolfe
# demo
- [http.js](./http.js)
- [express.js](./express.js)
- [npm.js](./npm/index.js)