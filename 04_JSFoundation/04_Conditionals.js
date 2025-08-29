//  Check if a number is greater than another number

let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num1} is not greater than ${num2}`);
}

// Check if a variable is number or not

let score = 44;

if (typeof score === "number") {
  console.log("Yep this is a number !");
} else {
  console.log("No this is not a number");
}

// Some more questions

/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
let firstTea = teaFlavors[0];

/* 
2. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbel tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

/* 
3. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); //Option 1
// citiesVisited[3] = "Berlin"; //Option 2
// citiesVisited[citiesVisited.length] = "Berlin" //Option 3
console.log(citiesVisited);

/* 
4. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"];

// let var1 = 5;
// let var2 = var1;
// console.log(var2); //5
// console.log(var1); //5
// var2 = 9;

// console.log(var2); //9
// console.log(var1); //5

// The above depicted one is the usual expected behaviour

let softCopyTeas = popularTeas;
console.log(softCopyTeas);
console.log(popularTeas);

popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/* 
5. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"];

// There are various ways to create the hard copy
let hardCopyCities = [...topCities]; //Recommended Method
// let hardCopyCities_1 = topCities.slice(); //One more option
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

/* 
6. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities_1 = europeanCities + asianCities; //It is been converted to string
console.log(worldCities_1);
console.log(typeof worldCities_1);

let worldCities_2 = [europeanCities, asianCities]; //It creates the array of array
console.log(worldCities_2);
console.log(typeof worldCities_2);

let worldCities = europeanCities.concat(asianCities); //Working !!
console.log(worldCities);

/* 
7. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala Chai", "oolong Tea", "Green Tea", "Earl Grey"];
let menuLength = teaMenu.length;
console.log(`Length of the array is ${menuLength}`);

/* 
8. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["kyoto", "london", "cape town", "vancouver"];

let isLondonInList = cityBucketList.includes("london");
console.log(isLondonInList);
