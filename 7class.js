"use strict";
exports.__esModule = true;
var Greeter = /** @class */ (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.err = function () {
        // this.name = "not ok";
        //Cannot assign to 'name' because it is a read-only property.
    };
    return Greeter;
}());
var obj = new Greeter("another value");
console.log(obj.name);
// g.name = "also not ok";
