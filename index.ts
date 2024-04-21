#! usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    name: "Sentence",
    message: "Enter a Sentence to count Words init: ",
    type: "input",
  },
]);

let words = answer.Sentence.trim().split(" ");

console.log("Word count is: " + words.length);
