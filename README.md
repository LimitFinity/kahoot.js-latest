# About
Kahoot.js is a library to interact with the Kahoot API. kahoot.js supports joining and interacting with quizzes and challenges.
**Installation requires Node.js 10.9.0 or higher.**

[![HitCount](https://hits.dwyl.com/limitfinity/kahoot.js-updated.svg)](https://hits.dwyl.com/limitfinity/kahoot.js-updated) [![Known Vulnerabilities](https://snyk.io/test/github/limitfinity/kahoot.js-latest/badge.svg?targetFile=package.json)](https://snyk.io/test/github/limitfinity/kahoot.js-latest?targetFile=package.json) ![Version](https://badge.fury.io/js/kahoot.js-latest.svg)

# Basic Example
```js
const Kahoot = require("kahoot.js-latest");
const client = new Kahoot();
console.log("Joining kahoot...");
client.join(9802345 /* Replace with kahoot game pin */, "kahoot.js");
client.on("Joined", () => {
  console.log("I joined the Kahoot!");
});
client.on("QuizStart", () => {
  console.log("The quiz has started!");
});
client.on("QuestionStart", question => {
  console.log("A new question has started, answering the first answer.");
  question.answer(0);
});
client.on("QuizEnd", () => {
  console.log("The quiz has ended.");
});
```

## Full API Documentation
See [Documentation.md](Documentation.md).

## Examples
See `examples/` and `tests/`.
