var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
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
