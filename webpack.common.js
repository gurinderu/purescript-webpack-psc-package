const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.purs$/,
            exclude: /node_modules/,
            use: {
                loader: 'purs-loader',
                options: {
                    src: [
                        'src/**/*.purs'
                    ],
                    pscPackage: true,
                }
            }
        }]
    },
    resolve: {
        modules: [
            'node_modules',
            '.psc-package'
        ],
        extensions: [
            '.purs',
            '.js'
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Example'
        }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[chunkhash].bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
         runtimeChunk: 'single',
         splitChunks: {
             cacheGroups: {
                 vendor: {
                     test: /[\\/]node_modules[\\/]/,
                     name: 'vendors',
                     enforce: true,
                     chunks: 'all'
                 }
             }
         }
     }
};


