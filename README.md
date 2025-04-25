# JavaScript Crash Course

Welcome to the **JavaScript Crash Course**! This repository contains a 60-minute crash course designed to teach you the essentials of JavaScript, from variables to building a functional to-do list app. Whether you're a beginner or refreshing your skills, this guide and the accompanying code will get you coding fast.

This README serves as the written guide, covering core JavaScript concepts in a concise format. The repository includes the code for a to-do list project demonstrated in the course. For a video version, check [insert video link here, or remove this sentence if no video is hosted].

## Repository Contents

- `index.html`: The HTML file for the to-do list project.
- `script.js`: The JavaScript code for the to-do list functionality.
- `README.md`: This file, containing the written crash course.
- `style.css`: Optional CSS for styling the to-do list (if applicable).

## Getting Started

1. Clone this repository: `git clone https://github.com/TheDevPath/Javascript-Crash-Course`
2. Open `index.html` in a browser to try the to-do list app.
3. Follow the guide below to learn JavaScript essentials.

---

## JavaScript Crash Course: Learn the Essentials in 60 Minutes

JavaScript is a versatile, high-level programming language used primarily for web development. This crash course covers the core concepts you need to start coding in JavaScript effectively.

### 1. What is JavaScript?

- JavaScript runs in browsers to make websites interactive.
- It’s also used server-side (Node.js) and in mobile apps.
- Write JavaScript in `<script>` tags in HTML or in `.js` files.

```html
<script>
  console.log('Hello, JavaScript!');
</script>
```

## Variables and Data Types

- Declare variables with `var`, `let`, or `const`.
- `let` allows reassignment; `const` doesn’t.
- Data types: `number`, `string`, `boolean`, `null`, `undefined`, `object`, `array`

```javascript
let name = 'Alice'; // string
const age = 25; // number
let isStudent = true; // boolean
let scores = [90, 85, 88]; // array
let person = { name: 'Bob', age: 30 }; // object
```

## Operators and Expressions

- Arithmetic: `+`, `-`, `*`, `/`, `%`
- Comparison: `==`, `===`, `!=`, `>`, `<`
- Logical: `&&`, `||`, `!`
- Assignment: `=`, `+=`, `-=`

```javascript
let x = 10;
let y = 5;
console.log(x + y); // 15
console.log(x === 10 && y < 6); // true
```

## Control Flow

- Conditionals: `if`, `else if`, `else`
- Loops: `for`, `while`, `do...while`
- `switch` for multiple conditions

```javascript
let score = 85;
if (score >= 90) {
  console.log('A');
} else if (score >= 80) {
  console.log('B');
} else {
  console.log('C');
}

for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
```

## Functions

- Define with `function` keyword or arrow syntax (`=>`).
- Parameters and return values make functions reusable.
- Functions can be stored in variables.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

const add = (a, b) => a + b;

console.log(greet('Alice')); // Hello, Alice!
console.log(add(3, 4)); // 7
```

## Arrays and Objects

- Arrays store ordered lists; access with indices (`[0]`).
- Objects store key-value pairs; access with dot (`.`) or bracket (`[]`) notation.
- Common methods: `push`, `pop`, ` map`, `filter`(arrays); `Object.keys()` (objects).

```javascript
let fruits = ['apple', 'banana', 'orange'];
fruits.push('grape');
console.log(fruits[1]); // banana

let user = { name: 'Charlie', age: 28 };
console.log(user.name); // Charlie
```

## DOM Manipulation

- The Document Object Model (DOM) represents HTML.
- Use `document` to select and modify elements.
- Common methods: `querySelector`, `innerHTML`, `style`

```javascript
// HTML: <p id="demo">Hello</p>
let para = document.querySelector('#demo');
para.innerHTML = 'World!';
para.style.color = 'blue';
```

## Event Handling

- Events (click, input, etc.) trigger JavaScript code.
- Use `addEventListener` to attach handlers.

```javascript
// HTML: <button id="btn">Click Me</button>
let button = document.querySelector('#btn');
button.addEventListener('click', () => {
  alert('Button clicked!');
});
```

## Error Handling

- Use `try-catch` to handle errors gracefully
- Throw custom errors with `throw`

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.log('Error:', error.message);
}
```

## ES6+ Features

- `let` and `const` for block scope.
- Template literals: `Hello, ${name}!`.
- Destructuring: extract values from arrays/objects.

```javascript
const [a, b] = [1, 2]; // a = 1, b = 2
const { name, age } = { name: 'Dave', age: 40 };
console.log(`Name: ${name}, Age: ${age}`); // Name: Dave, Age: 40
```

## Asynchronous JavaScript

- JavaScript is single-threaded; async operations (e.g., fetching data) use callbacks, Promises, or `async/await`
- Promises resolve or reject; chain with `.then()`
- `async/await` simplifies Promise handling.

```javascript
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('Error:', error));

async function getData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error:', error);
  }
}
```

## Mini Project: To-Do List

Build a simple to-do list to apply what you’ve learned. The code is included in this repository.
**HTML** (`index.html`)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>To-Do List</title>
    <style>
      .done {
        text-decoration: line-through;
      }
    </style>
  </head>
  <body>
    <input id="taskInput" placeholder="Add a task" />
    <button id="addBtn">Add</button>
    <ul id="taskList"></ul>
    <script src="script.js"></script>
  </body>
</html>
```

**JavaScript** (`script.js`)

```javascript
const input = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

addBtn.addEventListener('click', () => {
  if (input.value.trim() === '') return;
  const li = document.createElement('li');
  li.textContent = input.value;
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });
  taskList.appendChild(li);
  input.value = '';
});
```

- **How it works**: Type a task, click “Add,” and click tasks to mark them done.
- **Concepts used**: DOM manipulation, events, and basic styling.
  **Try It**
- Open `index.html` in a browser.
- Add tasks and click them to toggle completion.
- Inspect script.js to see how it works.

## What’s Next?

- Practice on sites like freeCodeCamp or LeetCode.
- Explore frameworks like React or Vue.js.
- Learn Node.js for backend development.
- Refer to MDN Web Docs for in-depth JavaScript documentation.

## Contributing

Found a typo or want to improve the code? Feel free to open an issue or submit a pull request!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

- Inspired by the need for fast, practical JavaScript learning.
- Thanks to the JavaScript community and resources like MDN Web Docs.

Happy coding!
