# README Generator: Node.js

## Descirption

This is a README generator to make createing README files easy.  This generator has everything a developer will need to generate a quality README for their GitHub repository.

This is a command-line application that runs with Node.js to dynamically generate a README.md file.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)

## Installation

To have access to this application, `git clone` the repo to your local machine to have the Node project.

Run `npm install` to be able to use the following package dependencies as specified in the `package.json`:

* [`inquirer`](https://www.npmjs.com/package/inquirer) will prompt you for your inputs from the command line.
* [`axios`](https://www.npmjs.com/package/axios) will fetch your info from the GitHub API.

The application will start by running `node app.js` in the command-line.

Answer the prompts in your command-line to generate the README.

After answering all the prompts, your REAMDE file will be named 'TestREADME.md' and will be ready for you at the root of the repo.

The README has some automatically generated badges for your repo courtesy of shields.io and will include your profile picture & email from GitHub.

## Usage 

![DEMO video](./utils/generator-demo.gif)

When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to fetch your GitHub profile from the [GitHub API](https://developer.github.com/v3/), including your GitHub profile picture (avatar) and email.
From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo.

Finally, `fs.writeFile` is used to generate your project's README.md file. Check out the [`ExampleREADME.md`](https://github.com/connietran-dev/readme-generator/blob/master/ExampleREADME.md) in this repo as an example on the final output. 

The lorem ipsum is generated thanks to [Social Good Ipsum](http://socialgoodipsum.com/#/).


## Methodology

The application utilizes modularization by separating the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js`, respectively, inside the `utils` folder.

The application also utilizes, as much as possible, syntax and paradigms introduced in ES6 and beyond, including:

- Arrow functions, 
- `const`, `let`, 
- Template literals, and
- `async/await` to handle `inquirer`, `axios`, and `fs.writeFile` promises.