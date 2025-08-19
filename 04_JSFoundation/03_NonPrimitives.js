// @ Object

let username = {
  first_name: "Ayush",
  last_name: "Rawat",
  isLoggedIn: true,
};

console.log(username);
console.log(typeof username);

username;

console.log(username.first_name);
console.log(username.last_name);
console.log(username.isLoggedIn);

console.log(username["first_name"]); //Preferred => Use square brackets because dot notation could generate error in some cases

// Exploring in build objects

let today = new Date();
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());

// @ Arrays -> Just a collection of multiple elements
let arr1 = [1, 2, 3, 4, 5, 7];
console.log(arr1);

let arr = ["abc", 2, false, { val1: 1, val2: "Alpha" }]; //Element could be of different type also
console.log(arr[3]);
