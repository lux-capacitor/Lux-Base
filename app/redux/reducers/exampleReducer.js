//Initial state
const initialState = {
	isFetchingData: false,
	possibleMsgs: []
}


// Assigns state changes and enacts them in the redux store
function exampleReducer( state = initialState, action ) {
	switch( action.type ) {
		case 'FETCH_DATA':
			return Object.assign( {}, state, { 
				isFetchingData: true
			} );

		case 'UPDATE_LIST':
			return Object.assign( {}, state, {
				isFetchingData: false,
				possibleMsgs: action.possibleMsgs
			} );

		default:
			return state;
	}
}

export default exampleReducer;