const path = require("path")
const webpack = require("webpack")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        index: './src/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.json', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    devServer: {
        index: 'index.html',
        contentBase: path.join(__dirname, "public"), // Расположение статических файлов
        watchContentBase: true, // Изменение файлов вызывает полную перезагрузку страницы.
        compress: true, // Включить сжатие gzip
        hot: true, // Горячая замена модуля
        open: true,
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            "@babel/preset-typescript"
                        ]
                    }
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'public/robots.txt' },
                { from: 'public/favicon.ico' },
                { from: 'public/manifest.json' }
            ]
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
        })
    ],
}