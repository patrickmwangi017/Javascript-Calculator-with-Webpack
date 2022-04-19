const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
entry: {
    main: path.resolve(__dirname, './src/js/calculator.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    
};