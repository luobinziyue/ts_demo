const {CleanWebpackPlugin} = require('clean-webpack-plugin') //清理指定的文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin') //热启动
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx']
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader', //使用ts-loader来解析ts类型文件
            exclude: /node_modules/
        }

        ]
    },
    devtool: process.env.NODE_ENV==='production'?false:'inline-source-map',//调试时定位到代码的工具
    devServer: { //本地开发webpack-dev-server参数配置
        contentBase: './dist',//本地开发基于那个目录来运行
        stats: 'errors-only',
        host: 'localhost',
        port: 8089,

    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['./dist']
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html'
        })
    ]



}
