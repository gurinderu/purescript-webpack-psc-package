const {smartStrategy} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const merge = smartStrategy({});


const config = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '.'
    },
    module: {
        rules: [{
            test: /\.purs$/,
            exclude: /node_modules/,
            use: {
                loader: 'purs-loader',
                options: {
                    bundle: false,
                    watch: true
                }
            }
        }, {
            test: /\.js$/,
            loader: "source-map-loader",
            exclude: /node_modules|psc-package/
        },]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
	new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = config;

