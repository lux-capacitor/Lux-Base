/* FRONT-END : OS-Node-React : Simple : DoNotPushButton.js component
 *
 *   This is an example of the simplest form of component in the React. You'll 
 *    probably notice that React isn't directly used, but will be during compile.
 * 
 *    1. Generally, these components will start with a lowercase letter to denote the
 *        fact that they are "dumb" or "simple" components. 
 *
 *    2. No usage of lifecycle methods in here typically, very simple component
 *
 *    3. Takes in props that can be validated as we do in classical jsx samples.
 *
 ******************************************************************************/
import React from 'react';
import PropTypes from 'prop-types';

const DoNotPushButton = props => {
	return (
	    <div className='do-not-push-button example animate50' 
	    	data-component="DoNotPushButton.js" 
	    	onClick={ props.push }>

	    	<div className='prevent-text-select'></div>
			<span>{ props.buttonMsg }</span>
	    </div>
	);
}

DoNotPushButton.propTypes = {
	buttonMsg: PropTypes.string.isRequired,
	push: PropTypes.func.isRequired
}

export default DoNotPushButton;