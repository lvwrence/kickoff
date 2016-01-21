var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/js/main.js',
  resolve: {
    root: path.resolve(__dirname, 'src/js')
  },
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}
    ],
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'src/index.html', to: 'index.html'},
    ])
  ]
};
