"use strict";
exports.__esModule = true;
var stuffy = /** @class */ (function () {
    function stuffy(n, t, c) {
        this.name = n;
        this.type = t;
        this.color = c;
    }
    Object.defineProperty(stuffy.prototype, "nombre", {
        // mamke var public
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    stuffy.prototype.about = function () {
        return "name: " + this.name + ", type: " + this.type + ", color: " + this.color;
    };
    return stuffy;
}());
exports.stuffy = stuffy;
