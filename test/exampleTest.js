/*		  TEST SUITE
 * Example tests go here
 ---------------------------------------*/
var assert = require('assert');

//Sample
describe( 'Array', function() {
  describe( '#indexOf()', function() {
    it( 'should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});