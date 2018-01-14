// Load up the application styles
require( './css/app.scss' );

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(
	<App />, 
	document.getElementById( 'react-root' )
);