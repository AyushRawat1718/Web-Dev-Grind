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
