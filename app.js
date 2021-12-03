// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal Modules
const generateReadMe = require('./utils/readme-template.js');
const api = require('./utils/api.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        default: 'FranSkitzo',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        default: 'readme-generator',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for the badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function(answer) {
            if ( answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT license', 'Boost Software License 1.0', 'The Unclicense'],
        name: 'license'
    }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

// Main function
async function init() {
    try {
        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your response: ", userResponses);
        console.log("Thank you for your responses! Fetching yoiur GitHub data next...");

        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);

        // Pass Inquirer userResponses and GitHub userInfo to readme-template.js
        console.log("Generating your README next...")
        const markdown = generateReadMe(userResponses, userInfo);
        console.log(markdown);

        // Write README to file
        await writeFileAsync('TestREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();