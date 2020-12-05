const assert = require('assert');
//const delay = 3000;

describe('mocha-test 1', () => {
  console.log('Started mocha-test 1 ...');
  it('will be started immediately but finished with delay', () => {
    assert.ok(true);
    console.log('... Finished mocha-test 1');
  });
});

describe("a test", function(){
    var foo = false;

    beforeEach(function(){

      // simulate async call w/ setTimeout
      setTimeout(function(){
        foo = true;
      }, 50);

    });

    it("should pass", function(){
      assert.ok(true)
    });

  });

