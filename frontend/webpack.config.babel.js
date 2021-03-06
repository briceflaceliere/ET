import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';

const client = {
    entry: './src/app-client.jsx',
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js',
    },
    plugins: [
    ],
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=.babel_cache',
                },
            },
        ],
    },
};

const server = {
    target: 'node',
    node: {
        __dirname: false,
    },
    externals: [nodeExternals({
        modulesFromFile: true,
    })],
    entry: {
        js: './src/server.jsx',
    },
    output: {
        path: path.join(__dirname, 'src'),
        filename: 'server-es5.js',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: 'cacheDirectory=.babel_cache',
                },
            },
        ],
    },
};

export default [client, server];
