var assert = require('assert');
var loginEngine =  require('../engine/engine.login');

describe('LoginEngine', function () {

  describe('isValidUID', function(){

    it('matches', function(){
      var isValid = loginEngine.isValidUID(['happy','sad'], 'happy')
      assert.equal(isValid, true);
    });

    it('doesnot match', function(){
      var isValid = loginEngine.isValidUID(['happy','sad'],'angry')
      assert.equal(isValid, false);
    });

  });

});

describe('STRING CHECK', function () {
 it('verifies string length', function () {
        assert.equal("awesome".length, 7);
    });
 it('verifies the first char of string', function () {
        assert.equal("Awesome".charAt(0), 'A');
        //throw {myError:'use this to fail the test'}
    });
});