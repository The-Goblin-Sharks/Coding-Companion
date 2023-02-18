const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, './client/index.html'),
      filename: 'index.html',
    }),
  ],
  entry: '/client/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    proxy: {
      '/**' :'http://localhost:3000',
      '/build' : 'http://localhost:3000',
    },
    // but compress: true should minify your bundle which actually you don't want if you are debugging because it makesthings harder to read
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ['file-loader'],
      },
    ],
  },
};