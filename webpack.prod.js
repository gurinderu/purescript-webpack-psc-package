const {smartStrategy} = require('webpack-merge');
const merge = smartStrategy({});
const common = require('./webpack.common.js');
const {BundleAnalyzerPlugin} = require("webpack-bundle-analyzer");

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        })
    ],
    module: {
        rules: [{
            test: /\.purs$/,
            exclude: /node_modules/,
            use: {
                loader: 'purs-loader',
                options: {
                    bundle: false,
                }
            }
        }]
    }
});
