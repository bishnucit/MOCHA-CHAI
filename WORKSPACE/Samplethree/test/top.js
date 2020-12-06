function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}

var common = require("./common");

describe("top", function () {
    beforeEach(function () {
       console.log("running something before each test");
    });
    importTest("a", './a/a');
    importTest("b", './b/b');
    after(function () {
        console.log("after all tests");
    });
});