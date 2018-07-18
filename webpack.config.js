const path = require( 'path' );
const webpack = require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin');
require( 'dotenv' ).config(); // ENV VARS : Sets up and loads in the .env file to server


/*  ENVR : Are We Prod or Dev? (term "mode" comes from webpack 4)
 *****************************************************************************/
const envr = {
  mode: process.env.NODE_ENV, //Options : 'production' or 'development'
  minify: process.env.NODE_ENV === 'production'
}



/*  PLUGINS : ALL : Also sets where pipe certain actions results
 *****************************************************************************/
let plugins = [
  new ExtractTextPlugin( 'styles.css' ),
  new CopyWebpackPlugin([
    { 
      from:'app/img',  //Basic straight copy
      to:'img' 
    } 
  ])
];

/*  PLUGINS : PROD-ONLY : Minify Scripts and stylesheets
 *****************************************************************************/
if ( envr.mode === 'production' ) {
  plugins = plugins.concat([
    new webpack.DefinePlugin({ //From Reactjs.org, string escaped string is intended.
      'process.env.NODE_ENV': '\'production\''
    }),

    new webpack.optimize.UglifyJsPlugin({
      minimize: envr.minify,
      compress: {
        warnings: false
      }
    })
  ]);
}





/*  WEBPACK : Build configuration for application webpacking
 *****************************************************************************/
module.exports = {
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
              loader: 'css-loader', //So we can minimize
              options: { 
                importLoaders: 1,
                minimize: envr.minify
              } 
            },
            'postcss-loader', //Auto-prefixing built-in
            'sass-loader'
          ]
        })
      }
    ]
  },

  plugins //Plugins Arr built up top
};