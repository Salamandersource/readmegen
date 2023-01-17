// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter project description",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information",
    name: "usage",
  },

  {
    type: "input",
    message: "what is your Github username?",
    name: "title",
  },

  {
    type: "input",
    message: "Choose a license for your application?",
    choices: ["MIT", "none"],
    name: "licsense",
  },

  {
    type: "input",
    message: "what is your email",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const mkdn = generateMarkdown(data);
  return fs.writeFileSync(fileName, mkdn);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
