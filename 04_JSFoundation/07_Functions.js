// Normal functions

/*

function func_name(parameters){
    function body
}

*/

/*
1. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. Call `confirmOrder` from within `orderTea` and return the result
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}

console.log(orderTea("cold coffee"));

// Arrow Functions

/*

const func_name = (parameters) => {
    function body;
}

*/

/*
2. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. Store the result in a variable named `totalCost`.
*/

// const calculateTotal = (price, quantity) => {
//     return price*quantity;
// }

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(40, 5);
console.log(totalCost);

// Higher Order Function

/*
3. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. Return the result of calling `makingTea`.
*/

const makeTea = (teaType) => {
  return `Processing ${teaType}`;
};

const processTeaOrder = (teaFunction) => {
  return teaFunction("earl grey");
};

let order = processTeaOrder(makeTea);
console.log(order);

/*
4. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType` and return a message like "Making green tea". Store the returned function in a variable named `teaMaker` and call it with "green tea".
*/

const createTeaMaker = () => {
  //Normal Approach
  //   const helperFunc = (teaType) => `Making ${teaType}`;
  //   return helperFunc;

  //More standard Approach
  return (teaType) => `Making ${teaType}`;
};

let teaMaker = createTeaMaker();
console.log(typeof teaMaker); //It tells us that given variable is a function
console.log(teaMaker("Ice Tea"));
