const path = require( 'path' );
const express = require( 'express' );

module.exports = {
  app: function () {
    const app = express();

    // CONFIG : Specify where our index file + static routes for assets exist
    const indexPath = path.join( __dirname, '../../index.html' );
    const publicPath = express.static( path.join( __dirname, '../../dist' ) );

    // ROUTE : Set public assets to /dist folder, so any static asset 
    //			access like:	'/dist/img/mypicture.jpg'
    app.use( '/dist', publicPath );

    // ROUTE : Set root route to the index html file
    app.get( '/', function ( _, res ) { res.sendFile( indexPath ) });
    return app;
  }
}