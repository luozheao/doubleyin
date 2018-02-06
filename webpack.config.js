const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
var path = require('path');
var buildDir = path.resolve(__dirname,'./js');
module.exports = {
    entry: {main:'./javascript/main.js'},
    output: {
        path:buildDir,
        filename: 'bundle.js',
        chunkFilename: "[name].min.js"
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:9090
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // use: ExtractTextPlugin.extract({fallback: "style-loader", use: [
                //         {
                //             loader: 'css-loader',
                //             options:{
                //                 minimize: true //css压缩
                //             }
                //         }
                //     ]}),
              use: [ 'style-loader', 'css-loader' ],

            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?limit=1111118192&name=images/[name].[ext]?[hash:8]'},

        ]
    },
    plugins: [
         // new ExtractTextPlugin("styles.css"),
         new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),

    ]
};