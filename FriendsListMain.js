"use strict";
exports.__esModule = true;
var FriendsList_1 = require("./FriendsList");
var pansy = new FriendsList_1.FriendsList("Pansy", 6, "imacat@gmail.com", true);
var sheila = new FriendsList_1.FriendsList("Sheila", 40, "shiela@maxtrain.com", false);
var emilie = new FriendsList_1.FriendsList("Emilie", 38, "emilie@maxtrain.com", false);
var angie = new FriendsList_1.FriendsList("Angie", 37, "angie@maxtrain.com", false);
var lance = new FriendsList_1.FriendsList("Lance", 50, "lance@maxtrain.com", false);
console.log(lance.about());
var friends = [pansy, sheila, emilie, angie, lance];
console.log(pansy.about());
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var amigas = friends_1[_i];
    console.log(amigas.about());
}
