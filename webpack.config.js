const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    'minesweeper': path.resolve(__dirname, './src', 'minesweeper.js'),
    'minesweeper.min': path.resolve(__dirname, './src', 'minesweeper.js'),
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist'),
    library: 'minesweeper.js',
    libraryTarget: 'commonjs2',
    publicPath: '/dist/',
    filename: '[name].js',
    // chunkFilename: '[name].js',
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        path.resolve(__dirname, './src'),
      ],
      exclude: [
        path.resolve(__dirname, './node_modules'),
      ],
      loader: 'babel-loader',
      query: {
        presets: [
          ['@babel/env', {
            'targets': {
              'ie': 9,
            },
          }],
        ],
      },
    }],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  },
  optimization: {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min.js$/,
    })],
  },
};
