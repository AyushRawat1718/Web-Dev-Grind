// Basic printing functon
console.log("Hello World"); //Preferred

console.table({ firstName: "Ayush", lastName: "Rawat" }); //In table format

let gameName = "spiderman";
gameName = "batman";

console.log(gameName);

const new_gameName = "spiderman";
// new_gameName = "batman"; //Error

console.log(new_gameName);

// Data Types

// String – Represents textual data.
let name = "Ayush";

// Number – Represents integers and floating-point numbers.
let age = 25;

// Boolean – Represents true or false values.
let isLoggedIn = true;

// BigInt – Represents very large integers beyond Number limit.
let bigNumber = 12345678901234567890n; //The n at the end tells that this number is a bigint.

// Undefined – Variable declared but no value assigned.
let x;

// Null – Represents intentional absence of any value.
let y = null;

// Symbol – Represents a unique and immutable identifier.
let id = Symbol("unique");

// Object – A collection of key-value pairs.
let person = { name: "Ayush", age: 25 };

let score = 102;
let bonus = 25;

let totalScore = score + bonus;

// Some basic operations
let addition = 4 + 6;
let subtract = 9 - 3;
let mult = 3 * 5;
let division = 8 / 2;
let remainder = 9 % 2;
let exponent = 2 ** 3;

// Concept of pre and post also works here
let req = 5;
let increment = req++;
console.log(increment);
console.log(req);

// Comparison Operation

let num1 = 3;
let num2 = 3;
let num3 = 6;

console.log(num1 == num3); //false
console.log(num2 != num3); //true

// Logical Operators => && , ||, !
let LoggedIn = true;
let Paid = false;

let allowed = LoggedIn && Paid;
console.log(allowed);

let googleVerify = true;
let systemVerify = false;
let githubVerify = true;

let authenticate = googleVerify || systemVerify || githubVerify;
console.log(authenticate);
