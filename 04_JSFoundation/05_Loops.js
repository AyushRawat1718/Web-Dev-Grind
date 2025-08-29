/*
1. Write a `while` loop that calculates the sum of all numbers from 1 to 500 and the result in a variable named `sum`.
*/

let sum = 0;
let num = 1;
while (num <= 500) {
  sum += num;
  num++;
}

console.log(`Total sum of the numbers is ${sum}`);

/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = [];
let num_1 = 5;
while (num_1 > 0) {
  countdown.push(num_1);
  num_1--;
}
console.log(countdown);

/*
3. Write a `do while` loop that prompts a user to enter their favourite tea type untill they enter "stop". Store each tea type in an array named 'teaCollection'.
*/

let teaCollection = [];
let tea;

do {
  tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

console.log(teaCollection);

// This would not work using node.js environment, browser is required for prompt function !!

/*
4. Write a loop that lists all the cities in the array `["Paris", "New York", "Toky", "London"]` and stores each city in a new array named `cityList`, also try some another approach not the basic one, optimization is not required !!.
*/

let cities = ["Paris", "New York", "Toky", "London"];
let cityList = [];

while (cities.length !== 0) {
  let req = cities.shift();
  cityList.push(req);
}
console.log(cityList);
console.log(cities);

// This approach takes more computation then the ordinary approach !!
