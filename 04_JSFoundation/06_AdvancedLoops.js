/*
1. Write a `for` loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds "chai". Store all the teas before "chai" in a new array named `selectedTeas`.
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") break;
  selectedTeas.push(teas[i]);
}
console.log(selectedTeas);

/*
2. Write a `for` loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips "Paris". Store the other cities in a new array named 'visitedCities'.
*/

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris" || cities[i] === "paris") continue;
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

// for-of loop

/*
3. Use a `for-of` loop to iterate through the array [1,2,3,4,5] and stop when the number 4 is found. Store the numbers before 4 in an array named smallNumbers.
*/

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) break;
  smallNumbers.push(num);
}
console.log(smallNumbers);

// for-in loop

/*
4. Use a `for-in` loop to loop through an object containing city populations. Stop the loop when the population of `Berlin` is found and store all previous cities population in a new object named `cityPopulations`.

let cityPopulation = {
"London" : 8900000, "New York" : 8400000, "Paris" : 2200000, "Berlin" : 3500000, "Delhi" : 4500000};
*/

let cityPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
  Delhi: 4500000,
};

let cityNewPopulation = {};

console.log(Object.keys(cityPopulation));
console.log(Object.values(cityPopulation));

for (const city in cityPopulation) {
  if (city === "Berlin") break;
  cityNewPopulation[city] = cityPopulation[city];
}

console.log(cityNewPopulation);

// for-each loop

/*
5. Write a for-each loop that iterates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Skip the loop when "chai" is found, and store all the other tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

/*
This would also work

teaCollection.forEach(function (){
    //code lines ....
});

*/

teaCollection.forEach((tea) => {
  if (tea !== "chai") {
    availableTeas.push(tea);
  } else return;
});

console.log(availableTeas);

// Note we can't achieve the stopping feature, just like we did in for/for-of/for-in loop.
