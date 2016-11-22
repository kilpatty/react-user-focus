/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './lib/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
    library: ''
  },
  externals: {
    react: {
              root: 'React',
              commonjs2: 'react',
              commonjs: 'react',
              amd: 'react'
          },
          'react-dom': {
              root: 'ReactDOM',
              commonjs2: 'react-dom',
              commonjs: 'react-dom',
              amd: 'react-dom'
          }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  }
};
