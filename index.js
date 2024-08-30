// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    // Question 1: Project Title
    {
        type: 'input',
        message: 'Enter the project title:',
        name: 'title',
    },
    // Question 2: Project Description
    {
        type: 'input',
        message: 'Enter a description of the project:',
        name: 'description',
    },
    // Question 3: Table of Contents
    {
        type: 'input',
        message: 'Enter a table of contents (separate items with newlines):',
        name: 'contents',
    },
    // Question 4: Installation Instructions
    {
        type: 'input',
        message: 'Enter installation instructions:',
        name: 'installation',
    },
    // Question 5: Usage Information
    {
        type: 'input',
        message: 'Enter usage instructions:',
        name: 'usage',
    },
    // Question 6: License  ]]
// Question 6: License
{
    type: 'list',
    message: 'Choose a license:',
    choices: [
        'MIT License',
        'Apache License 2.0',
        'GPL'
    ],
    name: 'license',
},
{
    type: 'input',
    message: 'Who Contributed:',
    name: 'contributing',
},
//Contributing Guidelines
{
    type: 'input',
    message: 'How to test:',
    name: 'tests',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync (fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("output/README.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
