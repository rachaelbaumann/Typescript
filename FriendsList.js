"use strict";
exports.__esModule = true;
var FriendsList = /** @class */ (function () {
    function FriendsList(n, a, e, bff) {
        this.name = n;
        this.age = a;
        this.email = e;
        this.bestFriend = bff;
    }
    FriendsList.prototype.about = function () {
        return "name: " + this.name + ", age: " + this.age + ", email: " + this.email + ", bff: " + this.bestFriend;
    };
    return FriendsList;
}());
exports.FriendsList = FriendsList;
