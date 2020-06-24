const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './src/index.html'
      })
    ]
}
