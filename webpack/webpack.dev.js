const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodemonPlugin          = require('nodemon-webpack-plugin');
const Dotenv                 = require('dotenv-webpack');
const merge                  = require('webpack-merge');
const nodeExternals          = require('webpack-node-externals');
const path                   = require('path');
const webpack                = require('webpack');
const common                 = require('./webpack.common.js');

module.exports = merge.smart(common, {
    devtool: 'inline-source-map',
    entry: ['webpack/hot/poll?1000', path.join(__dirname, '../src/server.ts')],
    externals: [
        nodeExternals({
            whitelist: ['webpack/hot/poll?1000']
        })
    ],
    mode: 'development',
    plugins: [
        new Dotenv({
            path: './config/development.env'
        }),
        new NodemonPlugin({
            watch: path.resolve('./dist'),
            script: './dist/bundle.js',
            verbose: true,
            ext: 'js'
        }),
        new CleanWebpackPlugin(), 
        new webpack.HotModuleReplacementPlugin()
    ],
    watch: true
});