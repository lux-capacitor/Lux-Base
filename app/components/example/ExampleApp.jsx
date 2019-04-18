/* 
 FRONT-END : OS-Node-React : Core 'App' Parent Component
 *
 *   This is the core "App" component in the traditional sense. All actual UI
 *    and front-end-based work will be done inside this component and inward.
 * 
 *    1. Generally, for components that take props in some fashion, you want to 
 *        set the values up in the constructor, as well as doing binds to this 
 *        context here. (In this case, props come from the two wrapping components 
 *        "AppWrapper.js and "index.jsx" )
 *
 *    2. Render : Here, we are using react-router <Route /> to pass url and page
 *        data to the component as if it were a prop (Ex: 'route.location' )
 *
 *    3. We simplify the layout by moving sub-components into their own files, 
 *        so here all we have is a clean structure that implements our various
 *        sub-components "Todo"  
 *

 REACT-ROUTER (v4) : NOTES
 *      'Route' is basically a dynamic wrapper for a component, handing it URL awareness.
 *
 *
 *  PATH-LESS ROUTE: <Route component={ ComponentThatUsesRouteData } />
 *      - This is simplest usage of Route-wrapping component, this basically lets the component it wraps
 *        have access to the props.route properties from within itself.
 * 
 *  STANDARD ROUTE: <Route path="/MyUrl/:myProperty" component={ NamedComponent } />
 *      - Standard usage, passes what component to render on what URL, wont render without the url match
 *
 *  PROPS-PASSED ROUTE: <Route render={ ( route ) => <CompWithProps route={ route } someProp={ data } anotherProp={ moreData } /> } />
 *      - This lets you pass a component that needs to pass its props, but also lets it use Route methods.
 *
 ******************************************************************************/

// CORE 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

// REDUX
import { fetchData } from '../../redux/actions/exampleAction';

// SIMPLE COMPONENTS
import DoNotPushButton from './doNotPushButton.js';
import FooterPanel from './footerPanel.js';

class ExampleApp extends Component {
  constructor( props ) {
    super( props );

    // STATE : Default State for THIS component
    this.state = {
      bgColor: '#212133',
      buttonMsg : `DO NOT PUSH`,
      timesPushed : 0
    }

    // CONTEXT : Proper way to bind component methods to 'this'
    //        *** Avoid putting a .bind in the render() method!
    this.generateMsg = this.generateMsg.bind( this );
    this.generateColor = this.generateColor.bind( this );
    this.pushButton = this.pushButton.bind( this );
  }

  componentDidMount() {
    this.props.dispatch( fetchData() );
  }

  // EXAMPLE - Simple Fetch Function in React Only (if not wanting to use Redux)
  //           Just note, I only wrote the function to sample, not wired up.
  //           Also, be sure to add an error check handler for 400 type errors, etc
  //
  // fetchShopifyApiData( id ) {
  //   Fetch( `http://shopify.com/api/${id}` )
  //     .then( res => {
  //       return res.json();
  //     })
  //     .then( data => {

  //       // SIMPLE - Flat data
  //       this.setState({ timesPushed: data });

  //       // COMPLEX - Nested data
  //       this.setState( state => {
  //         return {
  //           products: data
  //         }
  //       })
  //     });
  // }

  generateMsg() {
    const possibleMsgs = this.props.possibleMsgs || 'OMG STOP!';
    const index = Math.floor( Math.random() * Math.floor( possibleMsgs.length ) );
    return possibleMsgs[ index ];
  }

  generateColor() {
    return '#'+Math.floor( Math.random() * 16777215 ).toString( 16 ); //Hex conversion
  }

  // METHOD: Method Definition in component
  pushButton() {
    const buttonMsg = this.generateMsg();
    const bgColor = this.generateColor();
    this.setState({ 
      bgColor,
      buttonMsg,
      timesPushed: this.state.timesPushed + 1,
    });
  }


  render() {
    const { bgColor, buttonMsg, timesPushed } = this.state; //Destructure to not have to repeat "this.state.timesPushed"
    const counter = timesPushed === 0 ? null : ( <div className='times-pushed'>{ timesPushed }</div> );

    return (
      <div className="example-app-wrapper font1 animate50" data-component="ExampleApp.jsx" style={{ 'background': bgColor }}>
        <DoNotPushButton push={ this.pushButton } buttonMsg={ buttonMsg } />
        
        { counter }
        
        <FooterPanel />
      </div>
    );
  }
}

function mapStateToProps ( state ) {
  const {
    isFetchingData,
    possibleMsgs
  } = state.exampleReducer;

  return {
    isFetchingData,
    possibleMsgs
  }
}

ExampleApp.propTypes = {
  isFetchingData: PropTypes.bool.isRequired,
  possibleMsgs: PropTypes.array.isRequired
}

export default connect( mapStateToProps )( ExampleApp );