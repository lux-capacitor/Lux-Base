const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const CleanWebpackPlugin = require( 'clean-webpack-plugin' );

// ENVR : Are We Prod or Dev? (term "mode" comes from webpack 4)
const envrConfig = {
  mode: 'dev',
  minify: false
}

//PLUGINS : BASE + IMAGE HANDLER! (straight copy for now :p )
let plugins = [
  new ExtractTextPlugin( 'styles.css' ),
  new CopyWebpackPlugin([
    { 
      from:'app/img', 
      to:'img' 
    } 
  ])
];


//PLUGINS : PROD-ONLY : Minify Scripts
if ( envrConfig.minify ) {
  plugins = plugins.concat( [
    // new CleanWebpackPlugin([ 'dist' ]), // Supposed to clean dist folder, doens't recompile sadly on start
    new webpack.DefinePlugin({ //From Reactjs.org docs 
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: envrConfig.minify,
      compress: {
        warnings: false
      }
    })
  ] );
}


//CONFIG : Webpack Setup
const config = {
  // devtool: 'source-map', //Sourcemaps for dev builds

  entry: [
    'babel-polyfill', //Add babel into bundle
    './app/AppWrapper.jsx'
  ],

  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      { //--JSX JUGGLER
        test: /\.jsx?$/,
        use: [ 'babel-loader' ],
        include: path.join( __dirname, 'app' )
      },

      { //--FONT FLINGER
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },

      { //--SCSS SMUSHER
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            { 
              loader: 'css-loader', 
              options: { 
                importLoaders: 1,
                minimize: envrConfig.minify
              } 
            },
            'postcss-loader',
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins //Plugins Arr built up top
};


module.exports = config;






