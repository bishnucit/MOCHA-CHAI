var common = require("../common");
var options = common.options;
var assert = common.assert;

it("blah a", function () {
    console.log(options.foo);
    assert.isTrue(false);
});