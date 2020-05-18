"use scrict";

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions =  [
    {
        type: "input",
        name: "title",
        message: 'What is the name of your project?'
    }, {
        type: "input",
        name: "description",
        message: "Describe your project."
    }, {
        type: "input",
        name: "installation",
        message: 'What steps must a user take to install your project? Separate commands with " | " to print on separate lines.'
    }, {
        type: "input",
        name: "usage",
        message: "What is your products usage?",
    }, {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
            "Apache 2.0",
            "MIT",
            "GPL3",
            "BSD 3 Clause"
        ]
    }, {
        type: "input",
        name: "contributing",
        message: "Please describe how others can contribute to this project."
    },{
        type: "input",
        name: "tests",
        message: "How are tests run for this project?",
    }, {
        type: "input",
        name: "gitHub",
        message: "Please input your Github username."
    },{
        type: "input",
        name: "email",
        message: "Please input your contact email."
    },{
        type: "input",
        name: "contact",
        message: "Please input instructions on how to contact you."
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
