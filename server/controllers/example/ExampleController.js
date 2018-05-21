const express = require('express');
const router = express.Router();
const methods = require( './example-methods' );

/*****************************************************************************
 * EXAMPLE ROUTE : 
 * 		This controller is declared in 'server.js' and then is able to define
 *		sub-routes on the that parent route from server.js as shown below.
 *
 * NOTE : 
 *  	It's good practice to put fetch / util methods in different file like we 
 *		do with "example-methods" so that the logic is cleanly split apart. 
 *		Controller routes should help prepare data, but most logic should be in 
 * 		reusable methods in individual, relevant files.
 *
 *****************************************************************************/



/* Endpoint : GET : '/example/getPossibleMsgs'
 *		- RETURN : ARRAY : Array of messages to use on button text
 *****************************************************************************/
router.get( '/getPossibleMsgs', function( req, res ) {
	const possibleMsgs = methods.getPossibleMsgs();

    // RESPOND : Send res from requested route to client
    res.send( possibleMsgs );
  })

module.exports = router;