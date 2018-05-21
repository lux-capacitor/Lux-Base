/* FRONT-END : OS-Node-React : Root Component Wrapper for React-Router + Redux
 *
 *   SUMMARY : 
 *   	First JS file, comes after index.html that is providing our 'react-root' div.
 * 
 *	 FLOW : 
 *		1. Render Initial react component into specified dom element 'react-root'
 *
 *		2. <BrowserRouter> : Wrapper #1 : This component is the wrapping layer
 *				for the react-router module that lets the app be location aware.
 *
 *		3. <Provider store={ store }> : Wrapper #2 : React-Redux wrapping middleware 
 *				that creates a central store, and any component wrapped inside it 
 *				will be able to use reducers to access particular keys in the 
 *				central redux store of properties.
 *
 *		4. <App /> : 1st Parent Component : First component that is actually
 *				rendering visual pieces for the site, all sub-components,
 *				pages, etc will be implemented inside this component and children.
 *
 *
 * For more structural examples, check out onestop.merlin repo, as well
 *	as the react docs : https://reactjs.org/docs/hello-world.html
 ******************************************************************************/
// LIBRARIES + METHODS
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

// COMPONENTS
import App from './App.jsx';


// REDUX : Setup initial data store for redux
const store = configureStore();


// RENDER : Create our first component and wrap it in our middlewares
render((
		<BrowserRouter>
			<Provider store={ store }>
	        	<App />
	      	</Provider>
		</BrowserRouter>
	),
	document.getElementById( 'react-root' )
);