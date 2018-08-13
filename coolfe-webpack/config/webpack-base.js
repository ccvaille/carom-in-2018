const path = require('path');
const htmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            // {
            //     test: /\.js | \.jsx$/,
            //     include: [
            //         path.resolve(__dirname, 'src'),
            //     ],
            //     use: 'babel-loader',
            // },
            {
                test: /\.jsx?/,
                include: [
                    path.resolve(__dirname, '../src')
                ],
                use: 'babel-loader'
            },
            {
                test: /.*\.(gif|png|jpe?g|svg|webp)$/i,
                use: [
                    {
                        loader:'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWepackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../assets/index.html')
        })
    ]
}