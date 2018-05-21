/*		HELPER METHODS
 ---------------------------*/
const envr = require( '../../config/config-envr' );
const stores = require( '../../config/config-stores' );

/******************************************************************************
 *  HELPER - calcDelay
 *
 * INPUT   : Index : Number of item in array
 *         : Store : String for the store you are using (for plus status)
 *
 * RETURNS : NUM : Amount of delay to induce on the call
 ******************************************************************************/
function calcDelay( index, store ) {
	const isShopifyPlus = stores[store] ? stores[store].shopifyPlus : false;
	const delayFactor = isShopifyPlus ? 4 : 2;
	console.log( `:::DEBUG : Delay Factor : ${ delayFactor }` );
	return round( index / delayFactor * 1000, 2 );
}





/******************************************************************************
 *	HELPER - confirmUpdates
 *
 * INPUT   : array of product objects [{ id, title }, { id, title }]
 * RETURNS : Logs out each ID, will morph when plugged into Tool UI
 ******************************************************************************/
function confirmUpdates( updatedProducts = { 'id' : 'No_Product_Found' }, apiData ) {
	console.log( `\n\n` +
		`***************************************\n` +
		`*    <(''<) ..::RESULTS::.. (>'')>\n` +
		`*`
	);

	//Object was passed
	if ( updatedProducts.id ) { 
		console.log( `* SUCCESS : Product ${updatedProducts.id} : '${updatedProducts.title}' Updated in ${apiData.store}` );
	
	//Array was passed
	} else {
		updatedProducts.forEach( product => {
			console.log( `* SUCCESS : Product ${product.id} : '${product.title}' Updated in Store (${apiData.store})` );
		});
	}

	console.log( '***************************************\n' ); //Closing Wrapper :p
}





/******************************************************************************
 *	HELPER - delayPromise -- USAGE: await delayPromise( 150 ) (in ms)
 *
 * SHOPIFY API LIMITS : 40/sec (80/s for Plus)
 * SHOPIFY LEAK RATE  : -2/sec from pool
 *
 * INPUT   : NUM : Milliseconds of delay to induce on a promise resolve
 * RETURNS : PROMISE : Delayed promise resolution
 ******************************************************************************/
async function delayPromise( amount ) {
	return new Promise( (resolve) => {
	    console.log( `::: DEBUG : Throttling request for ${amount}ms...` );
	    setTimeout( function(){ resolve() }, amount );
	});
}





/******************************************************************************
 *	HELPER - round -- USAGE: help.round( 12.345, 1 )  // 12.3
 *
 * INPUT   : NUM : Number you want rounded
 *         : NUM : Precision of digit you want round to be (1 = 0.1 precision)
 *
 * RETURNS : NUM : Rounded number to specified precision.
 ******************************************************************************/
function round( number, precision ) {
  var factor = Math.pow( 10, precision );
  return Math.round( number * factor ) / factor;
}




module.exports = {
	calcDelay,
	checkMeta,
	confirmUpdates,
	delayPromise,
	removeProductIdentifiers,
	repairMeta,
	round
}