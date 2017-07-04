var webpack = require("webpack");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    devServer: {
        hot: true, // Tell the dev-server we're using HMR
        contentBase: BUILD_DIR,
        publicPath: '/',
        public: 'localhost:8083',
        host: '0.0.0.0',
        port: 80
    }
};

module.exports = config;