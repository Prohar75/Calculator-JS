const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
    devServer: {
    static: path.join(__dirname, 'dist'),
    port: 9000,
  },
  mode: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    
  ],
  module: {

    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      
    ],
    
  },
};