# 📝 Introduction to HTML

## 📌 Why HTML Was Created

- **HTML (HyperText Markup Language)** was introduced to create **structured documents** for the web.
- The main need was to organize content like:
  - Headings, paragraphs, links, images, etc.
- It allowed documents to be **readable by both humans and browsers**.

---

## 🧠 Concept of Semantic Document Structure

- HTML uses **tags** to give meaning to different parts of a document.
- These tags act as **containers** for content.
- Example of semantic tags:
  - `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`

✅ **Why Semantic Tags?**

- Makes the content structure clearer
- Helps browsers and screen readers understand the layout
- Improves SEO and accessibility

---

## 🧱 Basic Structure of an HTML Document

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

### 🔹 Explanation:

| Tag          | Purpose                                     |
| ------------ | ------------------------------------------- |
| `<!DOCTYPE>` | Declares HTML version (HTML5)               |
| `<html>`     | Root of the document                        |
| `<head>`     | Meta info (title, CSS links, charset, etc.) |
| `<body>`     | Visible content shown to the user           |

---

## 🧭 Role of `index.html`

- `index.html` is the **default starting page** for most websites.
- When a user visits a directory (like `example.com/`), the server serves `index.html`.
- This file can be replaced or renamed depending on project setup or routing logic.

---

## 🎯 How Browsers Render HTML

- Browsers **parse HTML from top to bottom**.
- They construct the **DOM (Document Object Model)** in memory based on the tags.
- Then they render the visual representation of the DOM for users to interact with.

---

## 🔠 Headings: Purpose Over Appearance

- HTML provides heading tags from `<h1>` to `<h6>`.
- These are not just for size — their main purpose is to define the **importance and structure** of the content.
- For example:
  - `<h1>` should be the main page title
  - `<h2>` for sub-sections, and so on
- **CSS** should be used for styling; headings are for **semantic structure**.

---

## 🔧 HTML Tag Attributes

- Most HTML tags can include **attributes** that add extra information.
- Example:
  ```html
  <img src="image.jpg" alt="A sample image" width="300" />
  ```
  - `src`: Specifies the image path
  - `alt`: Alternative text if image fails to load (also improves accessibility)
  - `width`: Sets the width of the image

✅ Attributes are always written inside the opening tag and follow this format: `name="value"`

---

## 🔢 Lists in HTML

HTML supports two types of lists:

### ✅ Unordered List

- Used when the order of items **doesn't matter**.

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### 🔢 Ordered List

- Used when the order of items **does matter**.

```html
<ol>
  <li>Step One</li>
  <li>Step Two</li>
  <li>Step Three</li>
</ol>
```

### 📌 Semantic Difference:

- Use `<ul>` for menus, categories, etc.
- Use `<ol>` for instructions, rankings, steps, etc.
- Always wrap items in `<li>` (List Item) tags.

---

## 🧱 Block vs Inline Elements

### 🧩 Block-Level Elements

- Take the **full width** available
- Start on a **new line**
- Can contain other block or inline elements

📌 Examples: `<div>`, `<p>`, `<h1>`-`<h6>`, `<section>`, `<article>`

### 🧩 Inline Elements

- Only take up as much width as needed
- Do **not** start on a new line
- Mostly used **within** block elements

📌 Examples: `<span>`, `<a>`, `<strong>`, `<img>`

---

### 🧪 How to Identify Them

- Use browser **Inspect Element (DevTools)** to see how elements behave.
  - Block elements will appear stacked vertically.
  - Inline elements appear side-by-side inside a block.

---

## 📏 HTML’s Handling of Spacing

In HTML, extra spaces and new lines are usually ignored by the browser. This means that whether you add one space or multiple spaces between words, HTML will treat them as a single space. Similarly, pressing the Enter key (adding a new line) doesn’t create a visible line break in the output. If you want to add extra spacing or breaks, you can use special HTML entities like `&nbsp;` (which adds a non-breaking space) or handle spacing and layout using CSS.

### Example:

```html
<p>This sentence has multiple spaces.</p>
<p>This sentence is written on multiple lines.</p>
<p>
  This&nbsp;&nbsp;sentence&nbsp;&nbsp;has&nbsp;&nbsp;non-breaking&nbsp;&nbsp;spaces.
</p>
```

---

## 🎯 Final Note: What HTML Is Really For

HTML's **main purpose** is to define the **structure, meaning, and emphasis** of content — not its appearance. The **visual styling** is handled by CSS. So, when writing HTML, always think in terms of:

- What does this content represent?
- What is its importance?
- How should it be understood by the browser and the user?

Semantic, accessible, and properly structured HTML is the foundation of every modern web application.

---
