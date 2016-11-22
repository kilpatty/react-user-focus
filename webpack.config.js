/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/ReactUserFocus.js',

  output: {
    path: path.join(__dirname),
    filename: 'ReactUserFocus.js',
    libraryTarget: 'umd',
    library: 'reactUserFocus'
  },
  externals: {
   'react': 'var React',
   'react/addons': 'var React'
  },

  module: {
    loaders: [
      {
        test: /(\.js)|(\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
