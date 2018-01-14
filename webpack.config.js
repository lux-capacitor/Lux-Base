var path = require('path');

module.exports = {
  devtool: 'eval',

  //Where is the dev server to run at?
  entry: [
    'webpack-dev-server/client?http://localhost:9001',
    './app/index.jsx'
  ],

  //Where do I output the bundled js? 
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'bundle.js',
    publicPath: '/app/'
  },

  //What types of files are we loading?
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        include: path.join( __dirname, 'app' )
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  }
}