const path = require('path');
const webpack = require('webpack');
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        base: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                use: 'babel-loader',
            },
            // {
            //     test: /\.less/,
            //     include: [
            //         path.resolve(__dirname, 'src'),
            //     ],
            //     use: [
            //         'style-loader',
            //         'css-loader',
            //         'less-loader'
            //     ],
            // },
            {
                test: /\.(css|less)$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ]
                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new uglifyjsWebpackPlugin(), // 压缩 JS 代码
        new htmlWebpackPlugin({ // 创建 HTML 文件
            filename: 'index.html',
            template: 'assets/index.html'
        }),
        new extractTextWebpackPlugin('[name].css'),
        new webpack.DefinePlugin({ // 内置插件，创建全局常亮
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('1.0.0.1'),
        })
    ],
    resolve: {
        alias: {
            utils: path.resolve(__dirname, './src/utils'), // 模糊查询
            utils$: path.resolve(__dirname, './src/utils'), // 精准查询
        },
        extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.css'], // 补全后缀名查找
        modules: [
            path.resolve(__dirname, 'node_modules') // 简化模块的查找,提升构建速度
        ]
    }
}