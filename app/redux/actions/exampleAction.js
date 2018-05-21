import 'isomorphic-fetch';
import {
    FETCH_DATA,
    UPDATE_LIST
} from '../constants/exampleConstants';



// ACTIONS : Basic
export function isFetching() {
    return { type: FETCH_DATA }
}

export function updateData( possibleMsgs ) {
    return {
        type: UPDATE_LIST,
        possibleMsgs
    }
}


// ACTIONS : Fetch Handlers (Actual fetch methods)
export function fetchData() {
    return function ( dispatch ) {
        dispatch( isFetching() ); //Sets 'isFetchingData: true'
        const url = '/example/getPossibleMsgs'

        // TODO : replace this with async await pattern! (will prob need await imported on client side)
        return fetch( url )
            .then( ( res ) => {
                  if ( res.status >= 400 ) {
                    throw new Error( 'Bad response from server' );
                  }
                  return res.json();
            })
            .then( possibleMsgs => {
                dispatch( updateData( possibleMsgs ) ); //Update possibleMsgs + 'isFetchingData: false'
            })
    }
}