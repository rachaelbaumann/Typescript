import {FriendsList} from "./FriendsList";

let pansy: FriendsList = new FriendsList("Pansy", 6, "imacat@gmail.com", true);
let sheila: FriendsList = new FriendsList("Sheila", 40, "shiela@maxtrain.com", false);
let emilie: FriendsList = new FriendsList("Emilie", 38, "emilie@maxtrain.com", false);
let angie: FriendsList = new FriendsList("Angie", 37, "angie@maxtrain.com", false);
let lance: FriendsList = new FriendsList("Lance", 50, "lance@maxtrain.com", false);

// console.log(lance.about());

let friends: FriendsList[] = [pansy, sheila, emilie, angie, lance];

// console.log(pansy.about());

for (let amigas of friends) {
console.log(amigas.about());
}