import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import exampleReducer from '../reducers/exampleReducer';

const loggerMiddleware = createLogger();
const bundledReducer = combineReducers({
  exampleReducer //list all reducers here, comma-separated
});


export default function configureStore( preloadedState ) {
  return createStore(
    bundledReducer,
    preloadedState,
    composeWithDevTools( //Redux dev tools wrapper!
        applyMiddleware(
          thunkMiddleware,
          loggerMiddleware
        )
    )
  )

  // PRODUCTION
  // return createStore(
  //   rootReducer,
  //   preloadedState,
  //   compose( 
  //       applyMiddleware(
  //         thunkMiddleware
  //       )
  //   )
  // )
}