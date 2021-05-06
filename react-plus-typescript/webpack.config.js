const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        port: 3000
    }
};