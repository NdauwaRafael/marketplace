const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
module.exports = {
    entry: "./marketplace/frontend/src/index.js ",
    output: {
        path: path.resolve(__dirname, "./marketplace/frontend/static/frontend"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({title: 'Marketplace Projects'}),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],
    watchOptions: {
        poll: true
    }
};