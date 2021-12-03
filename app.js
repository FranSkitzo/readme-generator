// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal Modules
const generateMarkdown = require('./utils/readme-template.js');
const api = require('./utils/api.js');