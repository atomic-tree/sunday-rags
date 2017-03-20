var webpack = require('webpack');

module.exports = {
  entry: './src/app.client',
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    rules: [{
      test: /\.js$/,
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
