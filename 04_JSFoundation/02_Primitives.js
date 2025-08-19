// @ Number

let balance = 120;
console.log(balance);
console.log(typeof balance); //typeof function gives the type of data

let balance_1 = new Number(120); //Here we are creating a Number Object
console.log(balance_1);
console.log(balance_1.valueOf());
console.log(typeof balance_1);

// @ Boolean

let isActive = true; //Recommended
let isReallyActive = new Boolean(true); //Not Recommended

// @ Null and Undefined

let first_name; //We have just declared the variable but not defined its value, so right now it stores undefined
console.log(first_name);

let last_name = null; //In this currently we don't know what value should be provided, so rather that keeping it undefined we are giving it a null value, so that program keeps on running
console.log(last_name);

// @ String

let str1 = "hello";
let str2 = "world";
let username = "Ayush";

let greetMessage =
  "Hello " + username + " welcome to this conceptual knowledge  !";

console.log(greetMessage);

let newGreetMessage = `Hello ${username} welcome to this conceptual knowledge  !`; //Preferred, as it provides formatting easily
console.log(newGreetMessage);

let demo = `Value of ${2} x ${2} is ${2 * 2}`; //Allows inplace computation
console.log(demo);

// @ Symbol -> There only use is to Return a new unique Symbol value, irrespective of passed argument or whatever

let sm1 = Symbol();
let sm2 = Symbol();
console.log(sm1 == sm2);

let sm3 = Symbol("Ayush");
let sm4 = Symbol("Ayush");
console.log(sm3 == sm4);
