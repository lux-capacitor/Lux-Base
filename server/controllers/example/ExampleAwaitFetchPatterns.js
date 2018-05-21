/* GET REQUESTS
 *    Default API = 'envr.sourceApiBaseUrl'
 *------------------------------------*/
const fetch = require( 'isomorphic-fetch' );
const envr = require( '../../config/config-envr' );
const help = require( '../helpers/helper-methods' );
const { defaults, getApiData } = envr;
const { calcDelay, delayPromise } = help;





/******************************************************************************
 *	 AGGREGATOR - batchFetchProductsMeta							    	GET
 *	
 * GET     : ARRAY : Product Array to fetch meta for, merge with products
 * RETURNS : ARRAY : All Products + Metafields merged in
 ******************************************************************************/
async function batchFetchProductsMeta( allProducts, urls ) {
	await Promise.all(
		allProducts.map( ( product, index ) => {
			const delayAmount = calcDelay( index, urls.destinationApi.store );

		    return fetchProductMetaById( product, urls.destinationApiBaseUrl, delayAmount )
		    	.then( res => {
		        	product.metafields = res.metafields;
		        	return product; //Return full product object with metafields now attached
		    });

		})
	).catch( err => {
		throw new Error( err );
	});

	return allProducts;
}






/******************************************************************************
 *	 SHOPIFY API CALL - fetchAllStoreProducts								GET
 *	
 * GET     : STRING : Gather all Products in a Store
 * RETURNS : ARRAY  : Array of product objects in store (first 250 products)
 *					 (Doc has no pagination sample, need store w/ 250+ items)
 ******************************************************************************/
async function fetchAllStoreProducts( apiUrl ) {
	try {
		const response = await fetch( `${apiUrl}/admin/products.json?limit=250` )
		const cleanRes = await response.json();
		return cleanRes.products;
	}

	catch ( error ) {
		console.log( `fetchAllStoreProducts() -- Failed request :\n${ error.message }` );
		throw new Error( error );
	}
}






/******************************************************************************
 *  AGGREGATOR - fetchAllProductsWithMeta (up to 250 items for now)
 *  
 *  Gathers store products, their metadata, merges and returns array of products
 * 		1. Get all products in store
 * 		2. Get metadata for each product and merge with product object
 * 		3. Return single JSON object of all complete store products
 *
 ******************************************************************************/
async function fetchAllProductsWithMeta( urls ) {
	// FETCH : PRODUCTS : Fetch all products from store (NOTE: res <= 250 products)
	return fetchAllStoreProducts( urls.destinationApiBaseUrl )
		
		// FETCH : METAFIELDS : Fetch metafields for each product, add to allProducts array
		.then( allProducts => {
			console.log(`::: STATUS : FETCH : Metadata for all products in Store (${urls.destinationApi.store})` );
			return batchFetchProductsMeta( allProducts, urls );
		
		}).catch( err => {
			console.err( err ); //Silently log failure instead of stopping
		});
}



/******************************************************************************
 *	 SHOPIFY API CALL - fetchProductById									GET
 *	
 * GET     : Fetch single product object by its ID
 * RETURNS : OBJECT : product object in store
 ******************************************************************************/
async function fetchProductById( productId = defaults.targetProductId, apiUrl ) {
	
	try {
		const res = await fetch( `${apiUrl}/admin/products/${productId}.json` )
		const foundProductObj = await res.json();

		// ERRORS : API call succeed, but not what we want in data
		if ( !foundProductObj || !foundProductObj.product ) {
			const theError = foundProductObj || 'fetchProductById() -- No Response was Returned X__x';
			throw new Error( theError );
		}

		return foundProductObj.product;
	}

	catch( err ) {
		console.log( `fetchProductById() -- Failed request :\n${ error.message }` );
		throw new Error( error );
	}
}





/******************************************************************************
 *	 SHOPIFY API CALL - fetchProductMetaById								GET
 *	
 * GET     : Fetch single product's metadata by ID
 * RETURNS : OBJECT : of product's metadata
 ******************************************************************************/
async function fetchProductMetaById( product = { id: defaults.targetProductId, title: 'no_product_specified'}, apiUrl, delayAmount = 0 ) {
	try {
		await delayPromise( delayAmount ); 
		const res = await fetch( `${apiUrl}/admin/products/${product.id}/metafields.json` );
		const productMetadata = await res.json();

		// ERRORS : Did we get an answer?
		if ( !productMetadata || !productMetadata.metafields ) { //API call succeed, but not what we want in data
			throw new Error( productMetadata );
		}

		return productMetadata;
	}

	catch( err ) {
		console.log( `fetchProductMetaById() -- Failed request :\n${ error.message }` );
		throw new Error( error );
	}
}







module.exports = {
	batchFetchProductsMeta,
	fetchAllProductsWithMeta,
	fetchAllStoreProducts,
	fetchProductById,
	fetchProductMetaById,
	fetchProductsWithMetaKey
}