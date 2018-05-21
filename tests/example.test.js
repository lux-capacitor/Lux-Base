/*		  TEST SUITE
 * Example test to get you started!
 ---------------------------------------*/
const getPossibleMsgs = require( '../server/controllers/example/example-methods.js' ).getPossibleMsgs;


//Test - GetPossibleMsgs() function in example-methods.js
test( 'TEST : Example API - GET : getPossibleMsgs()', () => {
  
  expect( getPossibleMsgs() )
  .toEqual( [ 
	  'HEY!', 'QUIT THAT!', 'STAPH!', 'WOW..', 
	  'REALLY..?', 'MONSTER!', 'Y U NO LISTEN?!', 
	  'OW THAT HURT', 'WTF!', 'X___x', 'ERROR, GO AWAY', 
	  '(┛◉Д◉)┛彡', 'ಠ_ಠ', ' ಠ╭╮ಠ' 
	] );
});