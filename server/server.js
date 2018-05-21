/*
 *                SERVER - Express Based, Node-Powered
 *****************************************************************************/
const Server = require( './helpers/expressServer.js' ); // Wrapped Express Server Init
const bodyParser = require( 'body-parser' );  // Lets us parse body JSON from POST requests
const path = require( 'path' ); // URL Path Helper

const port = process.env.PORT || 8080; // Port config
const app = Server.app();              // Our Wrapped Express Server start method


//MIDDLEWARE : POST JSON : Handler for POST body consumption
app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );

// MIDDLEWARE : DEV - WEBPACK : Hot Reloading : Dev Builds only 
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



// SERVER : AWAKEN!
app.listen( port )
console.log( `Listening at http://localhost:${port}` );




/******************************************************************************
 *                 ROUTER : API + Front End
 ******************************************************************************/
const ExampleController = require( './controllers/example/ExampleController.js' );
app.use( '/example', ExampleController );


// FRONT-END : Let any route NOT /api pass through to the react application!
app.get( '*', function( req, res ) {
  res.sendFile( path.resolve( __dirname, '../', 'index.html' ) );
});