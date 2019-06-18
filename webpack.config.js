const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const VENDOR_LIBS = [
    'axios',
    // './src/assets/style.css',
    // './src/static/js/start.min.js',
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-thunk'
];
const devServer = {
    port : 3000,
    open : true,
    disableHostCheck : true,
    historyApiFallback : true,
    overlay : true,
    stats : 'minimal',
    inline : true,
    compress : true,
    contentBase : '/'
};

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: '/node_modules/'
            },
            {
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                test: /\.css$/i
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/i, 
                loader: "file-loader?name=./img/[name].[ext]"
            },
            {
                test: /\.(eot|ttf|woff2|woff|svg)$/i, 
                loader: "file-loader"
            }
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            '$' : 'jquery',
            'jQuery' : 'jquery',
            'window.$' : 'jquery',
            'window.jQuery' : 'jquery'
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     names : ['vendor', 'manifest']
        // }),
        new HtmlWebpackPlugin({
            template : 'src/index.html'
        }),
        new ExtractTextPlugin("assets/css/styles.[chunkhash].css"),
        new CopyPlugin([
            { from: 'src/assets', to: 'assets'}
        ]),
    ],
    optimization: {
        splitChunks:{
            chunks: 'all'
        }
    },
    devServer
}