const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: {main:'./js/main.js'},
    output: {
        filename: 'bundle.js',
        chunkFilename: "[name].min.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: [
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]}),
                // use: [ 'style-loader', 'css-loader' ],

            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},

        ]
    },
    plugins: [
         new ExtractTextPlugin("styles.css"),
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