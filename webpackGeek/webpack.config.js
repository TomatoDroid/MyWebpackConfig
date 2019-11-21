'use strict'

const path = require('path')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /.(png|jpg|svg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /.(ttf|woff|woff2|eot|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /.(png|jpg|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240
                        }
                    }
                ]
            }
        ]
    }
}