// https://webpack.js.org/configuration/
// https://webpack.js.org/guides/development/#webpack-dev-middleware

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/app.client',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      stylesheets: path.resolve(__dirname, 'src/stylesheets')
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  target: 'web',
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true,
    modules: true,
    publicPath: true,
    reasons: true
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    }, {
      test: /\.json$/,
      exclude: /(node_modules)/,
      use: 'json-loader'
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader']
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader']
    }]
  }
};