# 📘 JavaScript Fundamentals – Evolution & Core Concepts

## 🕰️ Evolution of JavaScript Execution

### 🔹 Early Days

- JavaScript was originally written and executed **inside the browser itself**.
- Browsers came with built-in **JavaScript engines** (like V8 in Chrome) to interpret and run JS code.

### 🔹 Emergence of V8 & Node.js

- **V8** is Google’s high-performance JavaScript engine used in Chrome.
- **Node.js** extracts V8 from the browser and embeds it in a **C++ program** to allow JS to run **outside the browser**, enabling server-side JS.

### 🧪 Under the Hood

- **V8**:
  - Parses and compiles JavaScript into **machine code**.
  - Uses **JIT (Just-In-Time)** compilation to optimize performance.
- **Node.js**:
  - Built on top of V8.
  - Adds APIs like `fs`, `http`, and more for server-side programming.
- **Bun**:
  - Built on **JavaScriptCore** (Apple’s engine).
  - Includes a JavaScript runtime, bundler, and test runner.
- **Deno**:
  - Built on V8 + Rust.
  - Secure by default (no file or network access unless explicitly allowed).

---

## 🌐 Where Is JavaScript Used?

### 🔹 Frontend Development

- Manipulating the DOM and creating dynamic UIs.
- Popular frameworks: React, Vue, Angular.

### 🔹 Backend Development

- Using Node.js to build servers and APIs.
- Popular frameworks: Express.js, Nest.js.

### 🔹 Desktop Applications

- Using **Electron.js** to build cross-platform desktop apps.
  - Examples: VS Code, Slack.

### 🔹 Mobile Applications

- Using **React Native**, **Ionic**, or **NativeScript** to build native-like mobile apps with JavaScript.

### 🔹 APIs and Web Services

- Creating and consuming **REST APIs**, **GraphQL**, and other web services using Node.js.

---

## 🔥 [Important Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 🔥

## 🔐 Concept of `let`, `var`, and `const` in JavaScript

JavaScript provides three ways to declare variables, each with different scoping rules and behaviors:

- **`var`**

  - Function-scoped.
  - Can be redeclared and updated, within the same scope also.
  - Hoisted and initialized with `undefined`.
  - Example:
    ```js
    var x = 10;
    var x = 20; // Allowed
    x = 30; // Allowed
    ```

- **`let` [Preffered]**

  - Block-scoped.
  - Can be updated but **cannot be redeclared** in the same scope.
  - Hoisted but not initialized (temporal dead zone).
  - Example:
    ```js
    let y = 10;
    y = 20; // Allowed
    // let y = 30; // Error: redeclaration not allowed
    ```

- **`const`**
  - Block-scoped.
  - Cannot be updated or redeclared.
  - Must be initialized at declaration.
  - Example:
    ```js
    const z = 10;
    // z = 20;    // Error: assignment to constant variable
    ```

---

## ➕ Operators in JavaScript (Brief Overview)

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`
- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`
- **Logical Operators**: `&&`, `||`, `!`
- **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
- **Increment/Decrement**: `++`, `--`
- **Ternary Operator**: `condition ? expr1 : expr2`

---

## 🔢 Data Types in JavaScript

### 🔹 Primitive Types

- **String** → `"Hello"`
- **Number** → `42`, `3.14`
- **Boolean** → `true` / `false`
- **Null** → `null`
- **Undefined** → variable declared but not assigned
- **Symbol** → unique identifiers
- **BigInt** → very large integers

### 🔹 Non-Primitive Types (Objects)

- **Object** → `{ key: "value" }`
- **Array** → `[1, 2, 3]`
- **Function** → `function() { ... }`

⚡ Note:  
Even if an object is declared with `const`, its internal properties **can still be modified**.

```js
const person = { name: "John", age: 25 };
person.age = 26; // ✅ Allowed
// person = {}   // ❌ Error: reassignment not allowed
```

---

## 🔄 Type Conversion in JavaScript

### 🔹 Explicit Conversion (Preferred)

Converting types manually ensures predictable results:

```js
Number("123"); // 123
String(123); // "123"
Boolean(1); // true
parseInt("50"); // 50
parseFloat("3.14"); // 3.14
```

### 🔹 Explicit Conversion (Preferred)

JavaScript sometimes converts types automatically in expressions:

```js
"5" + 2; // "52"   (number converted to string)
"5" - 2; // 3      (string converted to number)
true + 1; // 2      (boolean converted to number)
```

- 👉 Best practice: Avoid implicit conversion and always use explicit type conversion for clarity.

---

## ⚖️ Difference between `==` and `===`

- **`==` (Loose Equality)**

  - Compares **values only**.
  - Performs **type conversion** if types are different.
  - Example:
    ```js
    5 == "5"; // true
    ```

- **`===` (Strict Equality)**
  - Compares **both value and type**.
  - No type conversion is performed.
  - Example:
    ```js
    5 === "5"; // false
    5 === 5; // true
    ```

---

## 📂 Hard Copy vs Soft Copy

- **Soft Copy (Shallow Copy / Reference Copy)**

  - New variable points to the **same memory address** as the original.
  - Changes in one variable affect the other.
  - Example:
    ```js
    let arr1 = [1, 2, 3];
    let arr2 = arr1; // soft copy
    arr2.push(4);
    console.log(arr1); // [1, 2, 3, 4]
    ```

- **Hard Copy (Deep Copy / Independent Copy)**
  - New variable has a **separate memory allocation**.
  - Changes in one variable do **not** affect the other.
  - Example:
    ```js
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1]; // hard copy
    arr2.push(4);
    console.log(arr1); // [1, 2, 3]
    console.log(arr2); // [1, 2, 3, 4]
    ```

---

## 💻 Prompt in JavaScript

- `prompt()` is **only available in browsers**, not in Node.js console.
- Reason: JavaScript started as a **browser language**, and `prompt` is part of the **Web APIs** provided by browsers.
- In Node.js, input is handled differently (e.g., using the `readline` module).

---

## 🔁 Loops in JavaScript

### 🔹 `while`

- Runs as long as the condition is **true**.
- Used when the number of iterations is **unknown**.

### 🔹 `do...while`

- Executes **at least once**, then checks condition.
- Useful when code must run once regardless of condition.

### 🔹 `for`

- Best for **known number of iterations**.
- Includes initializer, condition, and increment in one line.

### 🔹 `for...of`

- Iterates **over values** of an iterable (arrays, strings, maps, sets).
- Great for array loops.

### 🔹 `for...in`

- Iterates **over keys (indexes or property names)**.
- Used mostly for objects.

### 🔹 `forEach`

- Array method; executes a function for each element.
- Cannot `break` early (always processes all elements).

---

👉 **Use-Case Summary**

- **while** → unknown count, repeat until condition fails.
- **do...while** → run at least once.
- **for** → fixed/known count.
- **for...of** → iterate over **values**.
- **for...in** → iterate over **keys/properties**.
- **forEach** → iterate over arrays, no break/continue.

---

## ⚙️ JavaScript Execution Context

- JS runs inside an **Execution Context**:

  1. **Creation Phase**
     - Memory is allocated for variables & functions.
     - Variables are initialized with `undefined`.
  2. **Execution Phase**
     - Code runs line by line.
     - Variables get assigned actual values, functions are executed.

- Two types of Execution Contexts:
  - **Global Execution Context (GEC)** → Created when JS starts, only one per program.
  - **Function Execution Context (FEC)** → Created each time a function is called, multiple possible.

---

## ⚡ Types of Functions

Functions in JS are blocks of code that can be reused. Two main types:

### 🔹 Normal Functions

- Declared with `function` keyword.
- Can return a value or just perform an action.

```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Ayush")); // Hello, Ayush
```

### Arrow Functions

- Shorter syntax (ES6).
- Often used for simple tasks.

```js
const square = (num) => num * num;
console.log(square(6)); // 36
```

---

## 🔥 Implicit vs Explicit Return

- Explicit return → Uses `{}` and the return keyword.
- Implicit return → Omits `{}` and automatically returns the expression.

- Useful for short functions.

```js
// Explicit return
const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3)); // 5

// Implicit return
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20
```

---

## 🌐 `this` Context

`this` is a special keyword in JavaScript that **refers to the object that is executing the current function**.

Its value depends on **how the function is called**, not where it was defined.

### 🖥️ In Browser

- Global scope
  - In browsers, global functions/variables belong to the `window` object.
  - So in global scope, `this = window`.
  ```js
  console.log(this); // window
  ```
- Inside an Object Method
  - When a function is called as an object’s method, this = that object.
  ```js
  const obj = {
    name: "Ayush",
    show() {
      console.log(this.name);
    },
  };
  obj.show(); // Ayush
  ```
- Event Handlers

  - In DOM event handlers, this refers to the element that triggered the event.

  ```js
  document.querySelector("button").addEventListener("click", function () {
    console.log(this); // <button> element
  });
  ```

### 💻 In Node.js

- Global scope

  - In Node.js, **top-level** `this` is not global.
  - Instead, it is an **empty object** `{}`.

  ```js
  console.log(this); // {}
  ```

- Inside a Normal Function

  - In **non-strict** mode → `this` = `global`.

  - In **strict** mode → `this` = `undefined`.

  ```js
  function test() {
    console.log(this);
  }
  test(); // global object (or undefined in strict mode)
  ```

- Inside an Object Method

  - Works the same as browser → `this = the object`.

  ```js
  const obj = {
    name: "NodeJS",
    show() {
      console.log(this.name);
    },
  };
  obj.show(); // NodeJS
  ```

---

## ➡️ Normal Functions vs Arrow Functions

### Normal Function :

- Value of `this` depends on how the function is called.

```js
const obj = {
  name: "Ayush",
  normalFn: function () {
    console.log(this.name);
  },
};

obj.normalFn(); // Ayush
```

### Arrow Functions :

- Arrow functions do not have their own this.
- Instead, it inherits `this` from the scope where it was created → i.e., from its parent function/object context (lexical scope).

```js
const obj = {
  name: "Ayush",
  show: function () {
    const arrowFn = () => {
      console.log(this.name);
    };
    arrowFn();
  },
};

obj.show(); // Ayush ✅ (arrowFn inherits `this` from show())
```

- `arrowFn` doesn’t have its own `this`.

- It inherits this from the parent (`show` method), so `this.name` = `"Ayush"`.

---

## 💡 Higher-Order Functions

Functions that can:

- Take other functions as arguments, or

- Return functions as results.

This allows functional programming patterns like map, filter, reduce.

```js
// Function as parameter
function operate(a, b, fn) {
  return fn(a, b);
}
console.log(operate(5, 3, (x, y) => x + y)); // 8

// Function returning another function
function multiplier(factor) {
  return (num) => num * factor;
}
const double = multiplier(2);
console.log(double(10)); // 20
```

---

## 🎯 Scope vs Closure in JavaScript

### 🔹 1. Scope

- **Definition**: Scope defines where variables are accessible.

- JavaScript uses lexical scope (based on where the function is written).

- Inner functions can access variables of their parent functions.

```js
// Scope Example
function outer() {
  let msg = "Hello"; // variable defined in outer
  function inner() {
    console.log(msg); // inner can "see" msg because of scope
  }
  inner();
}
outer(); // Output: Hello
```

👉 Here, `inner()` can access `msg` because of lexical scope.

### 🔹 2. Closure

- **Definition**: A closure is formed when a function remembers variables from its parent scope, even after the parent function has finished executing.

- It’s like the function **“carries”** its surrounding scope along with it.

```js
// Closure Example
function counter() {
  let count = 0; // private variable
  return function () {
    // inner function (closure)
    return ++count; // remembers `count`
  };
}

const c = counter(); // counter() finished, but `count` is preserved
console.log(c()); // 1
console.log(c()); // 2
console.log(c()); // 3
```

👉 count is not lost even though counter() has returned.
That’s because the inner function (closure) preserves the lexical scope of counter.

### ⚖️ Difference (Easy Way)

**Scope** → decides where a variable can be accessed.

**Closure** → when an inner function remembers variables from its parent scope even after the parent is gone.

---

## 🔹Some Important Concepts

### 1️⃣ `forEach` vs `map`

#### `forEach`

- Executes a function on each element.
- **Does NOT return a new array**.
- Used for **side-effects** like logging.

```js
const arr = [1, 2, 3];
arr.forEach((e) => console.log(e * 2));
// Output: 2, 4, 6 (printed individually)
```

#### `map`

- **Executes a function on each element and** **returns a new array**.
- Use it when you need a transformed array.

```js
const arr = [1, 2, 3];
const squared = arr.map((e) => e * e);
console.log(squared); // Output: [1, 4, 9]
```

### 2️⃣ `filter`

- Returns a new array with elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((n) => n % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### 3️⃣ `reduce`

- Reduces an array to a **single value**.

- Syntax: `arr.reduce((acc, val) => { ... }, initialValue)`

**Sum of positive numbers**

```js
const nums = [-1, 2, 3, -5];
const sumPositive = nums.reduce((sum, e) => (e > 0 ? sum + e : sum), 0);
console.log(sumPositive); // Output: 5
```

**Find the longest word**

```js
const words = ["cat", "elephant", "dog"];
const longest = words.reduce(
  (longest, word) => (word.length > longest.length ? word : longest),
  ""
);
console.log(longest); // Output: "elephant"
```

### 4️⃣ Accessing properties from objects in arrays

- Use map to extract properties from objects.

```js
const users = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
const names = users.map((user) => user.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]
```

### Tips to Remember

- **`map`** → new transformed array.

- **`filter`** → subset of array.

- **`reduce`** → single aggregated value.

- **`forEach`** → only for side-effects.
