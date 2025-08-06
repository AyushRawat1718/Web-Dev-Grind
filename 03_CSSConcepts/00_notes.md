# 🎨 Introduction to CSS (Cascading Style Sheets)

## 📌 Why CSS Was Introduced

- HTML handles the **structure** and **meaning** of content.
- CSS controls how that content **looks and feels** — layout, colors, fonts, spacing, animations, etc.
- Without CSS, every website would look like plain black text on a white background.

> ✅ In simple words:  
> **HTML = content (what you say)**  
> **CSS = style (how you say it)**

---

## 🎯 What CSS Really Does

> 💡 The **main goal of CSS** is to make websites **visually appealing**.

It allows us to:

- Change colors, font sizes, margins, padding
- Make layouts responsive
- Animate elements
- Control position, display, and visibility

---

## 🧠 The Core Concept of CSS

> CSS is all about **selecting elements** and then **styling them**.

### 🔹 Example:

```css
p {
  color: blue;
  font-size: 18px;
}
```

- This selects all `<p>` elements and styles them with blue text and larger font size.

---

## 🧩 Ways to Apply CSS in HTML

You can write CSS in **three ways**, each with its own use case and priority:

### 1️⃣ Inline CSS

Written directly inside the tag using the `style` attribute.

```html
<p style="color: red;">This is red text.</p>
```

✅ Good for quick tests  
❌ Not reusable, hard to maintain

---

### 2️⃣ Internal CSS

Written inside a `<style>` tag in the `<head>` of the HTML file.

```html
<head>
  <style>
    p {
      color: green;
    }
  </style>
</head>
```

✅ Useful for small projects or single-page styling  
❌ Still not reusable across multiple files

---

### 3️⃣ External CSS

Written in a separate `.css` file and linked to the HTML using `<link>`.

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

✅ Best for large projects — clean, reusable, maintainable  
✅ Keeps HTML and CSS separate

---

## 📊 CSS Priority Order (Specificity)

If all three methods are used for the same element, this is the order of priority:

```
Inline CSS > Internal CSS > External CSS
```

> Always try to **avoid inline CSS** in real projects for better scalability.

---

## 🆔 ID and 🎯 Class: The Tag Targeting System

To apply styles **to specific elements**, we use **classes and IDs**.

---

### 🧠 Analogy to Understand:

- Think of your HTML page as a **classroom**.
- Every student can wear the **same uniform** (that's a `class`).
- But each student has a **roll number** (that's an `id` — unique).

---

### 🔹 Class (Reusable)

- A class can be shared by **multiple elements**.
- Defined using `class="name"` in HTML
- Selected in CSS with a dot (`.`)

```html
<p class="highlight">This is highlighted text.</p>
```

```css
.highlight {
  background-color: yellow;
}
```

---

### 🔹 ID (Unique)

- An ID should be used by **only one element** on a page.
- Defined using `id="name"` in HTML
- Selected in CSS with a hash (`#`)

```html
<p id="main-heading">Welcome</p>
```

```css
#main-heading {
  font-size: 32px;
}
```

---

### 🎯 Summary: Class vs ID

| Feature      | Class (`.`)                  | ID (`#`)                   |
| ------------ | ---------------------------- | -------------------------- |
| Reusability  | Can be used on many elements | Only once per page         |
| CSS Selector | `.` (dot)                    | `#` (hash)                 |
| Specificity  | Lower                        | Higher                     |
| Use Case     | Styling groups of elements   | Targeting a unique element |

---

## 🌱 Good-to-Know Early CSS Concepts

These concepts will be covered in more detail later, but having a basic understanding of them now will help you **write better CSS from the start**.

---

### 1️⃣ 🧾 Margin vs Padding — The Box Model Basics

- **Margin** = space **outside** the element (pushes elements apart)
- **Padding** = space **inside** the element (between content and border)

📌 Example:

```css
box {
  margin: 20px;
  padding: 10px;
}
```

🧠 Think of:

- Padding = element’s **internal breathing space**
- Margin = element’s **external social distancing**

---

### 2️⃣ 🧭 Viewport Units (vh, vw)

- `vh` = **viewport height**
- `vw` = **viewport width**
- 1vh = 1% of the height of the browser window

📌 Example:

```css
.fullscreen-section {
  height: 100vh;
}
```

✅ Useful for:

- Full-screen hero sections
- Responsive layouts without fixed px units

---

### 3️⃣ 🧠 Resetting Default Spacing (Margin & Padding)

- Browsers apply default `margin` and `padding` to many elements (`body`, `h1`, `ul`, etc.)
- It's good practice to **reset these to `0`** at the start of every project.

📌 Example:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

> ✅ `box-sizing: border-box` ensures that padding and border don't increase element width/height unexpectedly.

---

### 4️⃣ 🎯 Centering Elements Using Flexbox

One of the most common layout tasks in CSS.

📌 Center horizontally:

```css
.container {
  display: flex;
  justify-content: center;
}
```

📌 Center vertically:

```css
.container {
  display: flex;
  align-items: center;
  height: 100vh;
}
```

📌 Center both:

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
```

> Works great for centering modals, sections, text blocks, etc.

---

### 5️⃣ 🏷️ Basic CSS Selectors

Selectors are how you **target HTML elements** in CSS to apply styles.

| Selector Type | Syntax       | Targets                         |
| ------------- | ------------ | ------------------------------- |
| Element       | `p`          | All `<p>` tags                  |
| Class         | `.btn`       | All elements with `class="btn"` |
| ID            | `#header`    | The element with `id="header"`  |
| Universal     | `*`          | All elements                    |
| Grouping      | `h1, h2, h3` | All those elements              |
| Descendant    | `.card p`    | All `<p>` inside `.card`        |

> ✅ Mastering selectors early will make writing CSS much more powerful and flexible.

---

## 🌳 HTML Tree Structure: Parent, Child, Descendant

### 🧠 DOM is a Tree

Every HTML document is a **tree structure**, where:

- Elements can be **parents** (they wrap other elements)
- **Children** are directly inside parents
- **Descendants** are children, grandchildren, etc.

```html
<div class="parent">
  <div class="child">
    <p>I'm a descendant of the parent</p>
  </div>
</div>
```

- `.parent` → parent
- `.child` → child of `.parent`
- `<p>` → descendant of both `.parent` and `.child`

> ✅ Understanding this helps in using selectors properly and avoiding styling conflicts.

---

## 🎯 CSS Selectors: From Basic to Advanced

Selectors are how you **target elements** to apply styles.

---

### 🔹 1. Universal Selector (`*`)

Selects **all elements**.

```css
* {
  margin: 0;
  padding: 0;
}
```

---

### 🔹 2. Type Selector (Element)

Targets all elements of a specific type.

```css
p {
  font-size: 16px;
}
```

---

### 🔹 3. Class Selector (`.`)

Targets all elements with a specific class.

```css
.button {
  background-color: blue;
}
```

---

### 🔹 4. ID Selector (`#`)

Targets a **unique element** with a specific ID.

```css
#header {
  background-color: black;
}
```

---

### 🔹 5. Attribute Selector (`[]`)

Targets elements based on the presence or value of an attribute.

```css
input[type="text"] {
  border: 1px solid gray;
}
```

---

### 🔹 6. Grouping Selector (`,`)

Apply same styles to **multiple elements**.

```css
h1,
h2,
h3 {
  font-family: Arial;
}
```

---

### 🔹 7. Descendant Selector (Space)

Targets elements **nested inside** another element.

```css
.card p {
  color: gray;
}
```

---

### 🔹 8. Child Selector (`>`)

Targets **direct children only**.

```css
.card > p {
  font-weight: bold;
}
```

---

### 🔹 9. Adjacent Sibling Selector (`+`)

Targets an element that **immediately follows** another.

```css
h2 + p {
  color: red;
}
```

---

### 🔹 10. General Sibling Selector (`~`)

Targets all siblings that come **after** a specified element.

```css
h2 ~ p {
  color: green;
}
```

---

### 🔹 11. Pseudo-Classes (`:`)

Target elements based on **state**.

```css
a:hover {
  text-decoration: underline;
}
input:focus {
  border-color: blue;
}
```

Common pseudo-classes:

- `:hover`
- `:focus`
- `:active`
- `:nth-child()`
- `:first-child`

---

### 🔹 12. Pseudo-Elements (`::`)

Style **parts of elements** (virtual elements).

```css
p::first-line {
  font-weight: bold;
}
div::before {
  content: "👉 ";
}
```

Common pseudo-elements:

- `::before`
- `::after`
- `::first-line`
- `::first-letter`

---

## ✅ Summary Table

| Selector Type    | Example              | Description                       |
| ---------------- | -------------------- | --------------------------------- |
| Universal        | `*`                  | All elements                      |
| Type             | `p`                  | All `<p>` tags                    |
| Class            | `.btn`               | Elements with class="btn"         |
| ID               | `#header`            | Element with id="header"          |
| Attribute        | `input[type="text"]` | Inputs of type text               |
| Grouping         | `h1, h2`             | Multiple elements                 |
| Descendant       | `.card p`            | All `<p>` inside `.card`          |
| Child            | `.card > p`          | Direct child `<p>` inside `.card` |
| Adjacent Sibling | `h2 + p`             | First `<p>` right after an `<h2>` |
| General Sibling  | `h2 ~ p`             | All `<p>` after `<h2>`            |
| Pseudo-Class     | `a:hover`            | When `<a>` is hovered             |
| Pseudo-Element   | `p::first-line`      | Style the first line of `<p>`     |

---

## 🧩 Inline vs Block-level Elements

HTML elements are divided into two main display types by default:

---

### 🧱 Block-level Elements

- Take **full width** available
- Always start on a **new line**
- Respect `width`, `height`, `margin`, `padding`

#### Examples:

```
<div>,<p>,<h1>-<h6>,<section>,<article> etc.
```

```css
div {
  width: 200px;
  height: 100px;
  background: lightblue;
}
```

✅ This works and respects all sizes.

---

### 🧷 Inline Elements

- Take up **only as much width as needed**
- Don’t break into a new line
- **Ignore width and height**
- Respect only `left/right padding` & `margin` (not top/bottom)

#### Examples:

```
<span>,<a>,<strong>, <img/> etc.
```

```css
<span style="width: 200px; height: 100px;">Hello</span>
```

❌ Width and height will be **ignored**!

---

### ⚙️ Converting between types

Use `display` property:

```css
span {
  display: block; /* Now behaves like a div */
}
```

Or

```css
div {
  display: inline; /* Now behaves like span */
}
```

---

## 📦 Box-Sizing in CSS

The `box-sizing` property controls how the total width and height of an element is calculated:

---

### 🧮 Two Common Values:

| Value         | What It Means                                                           |
| ------------- | ----------------------------------------------------------------------- |
| `content-box` | **Default**. Width/height only includes **content**, not padding/border |
| `border-box`  | Width/height includes **content + padding + border**                    |

---

## 🧪 Examples

### 🔹 `box-sizing: content-box;` (Default)

```html
<div class="box-content">Content Box</div>
```

```css
.box-content {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 10px solid black;
  background-color: lightblue;
}
```

✅ **Total width** =  
`200 (content) + 40 (padding) + 20 (border)` = **260px**  
→ So the box **grows bigger** than defined `width`.

---

### 🔸 `box-sizing: border-box;`

```html
<div class="box-border">Border Box</div>
```

```css
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 10px solid black;
  background-color: lightgreen;
}
```

✅ **Total width remains** = **200px**  
→ Browser adjusts content width to fit within total 200px including padding & border.

---

## 💡 Best Practice

Set globally for consistency:

```css
* {
  box-sizing: border-box;
}
```

> Makes layout calculations easier and more predictable across the site.

---

## ✅ Summary

| Feature              | Inline Elements | Block Elements |
| -------------------- | --------------- | -------------- |
| Starts on new line   | ❌              | ✅             |
| Takes full width     | ❌              | ✅             |
| Accepts width/height | ❌ (ignored)    | ✅             |
| Examples             | `<span>`, `<a>` | `<div>`, `<p>` |
