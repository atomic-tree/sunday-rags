var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.client.jsx',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  },
  module: {
    rules: [{
      test: /\.js(x?)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: ['latest', 'react', 'stage-0']
        }
      }]
    }]
  }
};
