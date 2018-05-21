/* FRONT-END : OS-Node-React : Simple Component (JS, not JSX)
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

const FooterPanel = props => {
	return (
    <section id="example-footer" className='example'>
      <p id="username-msg">Questions? Poke
        <a className="username animate50" href="http://lux-capacitor.com" target="_blank"> @Lux.Capacitor</a>
      </p>
      <div id="avatar"></div>
    </section>
	);
}

export default FooterPanel;