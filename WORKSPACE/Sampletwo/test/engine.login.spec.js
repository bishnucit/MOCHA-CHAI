var assert = require('assert');
var loginEngine =  require('../engine/engine.login');

var expect = require('chai').expect;
var should = require('chai').should();

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();


beforeEach('Userlist is set to test hooks', function(){
    console.log('call beforeEach hook before each test is run');
    loginEngine.loadUserList(['happy','sad']);
    //throw {error: 'Thrwoing Error to fail'}
  });

describe('LoginEngine', function () {

  describe('isValidUID', function(){

    it('matches', function(){
      var isValid = loginEngine.isValidUID(['happy','sad'], 'happy')
      assert.equal(isValid, true);
    });

    it('matches - using chai', function(){
        var isValid = loginEngine.isValidUID(['happy','sad'], 'happy')
        //assert.equal(isValid, true);
        expect(isValid).to.be.true;
      });

    it('doesnot match', function(){
      var isValid = loginEngine.isValidUID(['happy','sad'],'angry')
      assert.equal(isValid, false);
    });

    it('doesnot match using chai', function(){
        var isValid = loginEngine.isValidUID(['happy','sad'],'angry')
        //assert.equal(isValid, false);
        isValid.should.equal(false);
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


describe('isValidUIDAsync', function(){

    it('return true on match', function(done){
        loginEngine.isValidUIDAsync(['happy','sad'], 'happy',
      function(isValid){
          assert.equal(isValid, true);
          done();
      });
    });


    it('return true on match - using chai', function(done){
        loginEngine.isValidUIDAsync(['happy','sad'], 'happy',
        function(isValid){
            //assert.equal(isValid, true);
            isValid.should.equal(true);
            done();
        });
      });

});


describe('isAuthorizedPromise', function(){

    it('return true using promise', function(){
      return loginEngine.isValidPromise('happy').should.eventually.be.true;
    });

});



describe('Animal Test', function(){
    it('should show unique name', function(){
      var dog = {name:'Lassy', Breed:'Spaniel'}

      dog.should.have.property('name');
    });

    it('should show unique name with value lassy', function(){
      var dog = {name:'Lassy', Breed:'Spaniel'}
      dog.should.have.property('name').equal('Lassy');
    });

    it('should compare', function(){
      var dog = {name:'Lassy', Breed:'Spaniel'}
      var dog1 = {name:'Lassy', Breed:'Spaniel'}

      // car.should.equal(car1);
      dog.should.deep.equal(dog1);
    });

    it('should handle null', function(){
      var dog = null;
      //car.should.not.exist;
      should.not.exist(dog);
    });
  });

