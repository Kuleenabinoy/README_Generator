// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generatorMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your Email address?",
    "What is your ProjectName?",
    "Write a short description of your project.",
    "What kind of license should your project use?",
    "What are the commands/instructions  for installing dependencies?",
    "What is your Repo name?",
    "What are the instructions for running Project",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log(data);
        if (err) {
            return console.log(err);
        } else {
            console.log("success");
        }
    });
}
// TODO: Create a function to initialize app
const question = [
    {
        type: "input",
        name: "Username",
        message: questions[0],
    },
    {
        type: "input",
        name: "Email",
        message: questions[1],
    },
    {
        type: "input",
        name: "Project",
        message: questions[2],
    },
    {
        type: "input",
        name: "Description",
        message: questions[3],
    },

    {
        type: "input",
        name: "Installation",
        message: questions[5],
    },

    {
        type: "list",
        name: "license",
        message: questions[4],
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "Mozilla 2.0", "None"],
    },
    {
        type: "input",
        name: "repo",
        message: questions[6],
    },
    {
        type: "input",
        name: "run",
        message: questions[7],
    },
];

function init() {
    inquirer.prompt(question).then((data) => {
        console.log(data);
        const fileName = "READMEGenerated.md";
        writeToFile(fileName, generatorMarkdown(data));
    });
}

// Function call to initialize app
init();
