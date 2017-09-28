const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd =  ExtractTextPlugin.extract({    
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.resolve(__dirname, './public'),

        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        stats: 'minimal',
        open: true,
        port: 3001, 
        hot: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },

    devtool: isProd ?  false : 'cheap-inline-module-source-map',


    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            disable: !isProd
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            minify: {
                collapseWhitespace: true,
            },
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Tether: 'tether'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        
    ]
};