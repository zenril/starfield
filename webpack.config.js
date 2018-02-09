var path = require('path');
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry:  {
        app : './app/src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'app/build'),
        filename: 'app.bundle.js',
        publicPath: '/app/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                } 
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
            },
            {
                loader: 'url-loader',
                test: /\.(svg|ogg)$/,
                options: {
                    limit: 250,
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    node: {
        fs: 'empty',
        child_process: 'empty',
    },
    devtool: 'source-map',
    plugins: [
        
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: '../../index.html',
            template: 'app/src/templates/index.tmpl',
            inject:true
        }),
        new CleanWebpackPlugin(["public"]),
        new ExtractTextPlugin("[name].css")
    ]
};