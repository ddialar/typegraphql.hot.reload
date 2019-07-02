const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                exclude: [path.resolve(__dirname, '../node_modules')],
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@logger': path.resolve(__dirname, '../src/core/common/logger'),
            '@resolvers': path.resolve(__dirname, '../src/modules/graphql/resolvers')
        }
    },
    target: 'node'
};