"use scrict";

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions =  [
    {
        type: "input",
        name: "title",
        message: `What is the name of your project?`
    }, {
        type: "input",
        name: "Description",
        message: "What is your name?"
    }, {
        type: "input",
        name: "Table Of Contents",
        message: "What is your name?"
    }, {
        type: "input",
        name: "Installation",
        message: "What is your name?"
    }, {
        type: "input",
        name: "Usage",
        message: "What is your products usage?",
    }, {
        type: "input",
        name: "Credits",
        message: "Who wrote this project?"
    }, {
        type: "input",
        name: "License",
        message: "Which license would you like to use?"
    }
];

// function to write README file
async function writeToFile(fileName, data) {
    await fs.promises.writeFile(fileName, data, "utf-8");
}

// function to initialize program
// async because it's 2020 and we should be using it now
async function init() {
    const answers = await inquirer.prompt(questions);
    const generatedMarkdown = generateMarkdown(answers);
    await writeToFile("README.md", generatedMarkdown);
}

// function call to initialize program
init();
