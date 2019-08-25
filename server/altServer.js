/*
 *                SERVER - Express Based, Node-Powered
 *****************************************************************************/
// const Server = require( './helpers/expressServer.js' ); // Wrapped Express Server Init
const express = require( 'express' );
const cookieParser = require('cookie-parser'); // PARSE : Helps read Cookie headers into "req.cookies" with an object keyed by the cookie names.
const bodyParser = require( 'body-parser' );   // PARSE : Helps read body JSON from POST requests
const path = require( 'path' ); // URL : Path Helper
require( 'dotenv' ).config(); // ENV VARS : Sets up and loads in the .env file to server





/*   INITALIZE : Specify Port, init server, setup client-side locations
 *****************************************************************************/
const port = process.env.PORT || 8080;                                  // PORT : Configure port to listen on
const app = express();                                                  // EXPRESS : Start a new server namespace of "app"
const indexPath = path.join( __dirname, '../index.html' );              // INDEX.HTML : Set path for site's core index file
const clientPath = express.static( path.join( __dirname, '../dist' ) ); // CLIENT ASSETS : Set path for all client-side asset urls





/*   MIDDLEWARE : Specify Port and Init Express Server
 *****************************************************************************/
// POST JSON : Handler for POST body consumption
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

// COOKIES : Handler for piping header cookies into a cookie object on req
app.use( cookieParser() );

// DEV - WEBPACK : Hot Reloading : Dev Builds only 
if ( process.env.NODE_ENV !== 'production' ) {
  const webpack = require( 'webpack' );
  const webpackDevMiddleware = require( 'webpack-dev-middleware' );
  const webpackHotMiddleware = require( 'webpack-hot-middleware' );
  const config = require( '../webpack.config' );
  const compiler = webpack( config )

  app.use( webpackHotMiddleware( compiler ) )
  app.use( webpackDevMiddleware( compiler, {
    noInfo: true,
    publicPath: config.output.publicPathdist
  } ) )
}




/*   START : Activates express server and listens on configured port
 *****************************************************************************/
app.listen( port )
console.log( `Up and running @ http://localhost:${port}` );





/*   ROUTER : Read in order of execution, setup url routes in your app
 *****************************************************************************/
// API : Define API Routes + Map to controllers
const ExampleController = require( './controllers/example/ExampleController.js' );
app.use( '/example', ExampleController );


// CLIENT : Set root '/' Index route + Client side Misc routes that are not api calls
app.get( '/', ( _, res ) => { res.sendFile( indexPath ) } ); // Root of site serves 
app.use( clientPath ); // Serve all assets from dist folder without need for /dist in client-side urls (like in index.html)