const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                // use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'},

        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
    ]
};