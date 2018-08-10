#  Note
## 入口（entry）
```js
module.exports = {
  entry: {
    main: './src/index.js'
  }
}
```
## 输出（output）
```js
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    }
}
```
## 转换器（loader）
- 解析处理不同类型的文件
    - `{ test: ... }` 匹配特定条件
    - `{ include: ... }` 匹配特定路径
    - `{ exclude: ... }` 排除特定路径
    - `{ and: [...] }` 必须匹配数组中所有条件
    - `{ or: [...] }` 匹配数组中任意一个条件
    - `{ not: [...] }` 排除匹配数组中所有条件
```js
module.exports = {
    module: {
        rules: [
            {
            test: /\.jsx?/, 
            include: [
                path.resolve(__dirname, 'src') 
            ],
            use: 'babel-loader', 
            },
        ],
    }
}
```
## 插件（plugin）
- 满足更多构建中特殊的需求
```js
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyPlugin()
  ],
}
```
## 模块解析规则(resolve)
- 解析相对路径
    - 查找相对当前模块的路径下是否有对应文件或文件夹
    - 是文件则直接加载
    - 是文件夹则继续查找文件夹下的 package.json 文件
    - 有 package.json 文件则按照文件中 main 字段的文件名来查找文件
    - 无 package.json 或者无 main 字段则查找 index.js 文件
- 解析模块名
    - 查找当前文件目录下，父级目录及以上目录下的 node_modules 文件夹，看是否有对应名称的模块
- 解析绝对路径（不建议使用）
    - 直接查找对应路径的文件
```js
module.exports = {
    resolve: {
        alias: {
            utils: path.resolve(__dirname, './src/utils'), // 模糊查询
        },
    }
}
```

## DefinePlugin
- 创建在编译时可以配置的全局常量
```js
module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1.0.0.1'),
        })
    ]
}
console.log(PRODUCTION); // 'true'
```
### webpack 的配置其实是一个 Node.js 的脚本，对外暴露一个配置对象，所以是 module.exports = {}

### JSON.stringify(payload)
- payload 为字符串，则返回代码片段
    - `JSON.stringify('1 + 1') => 2`
- payload 不是字符串，则返回字符串
    - `JSON.stringify(true) => 'true'`

### webpack-dev-server