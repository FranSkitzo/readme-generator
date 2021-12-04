function generateReadMe(userResponses, userInfo) {
    // Generate Table of Contents conditionally based on userResponses
    let draftToC = `## Table of Contents`;

    if(userResponses.installation !== '') { draftToC += `
    * [Installation](#installation)` };

    if(userResponses.usage !== '') { draftToC += `
    *[Usage](#usage)` };

    if(userResponses.contributing !== '') { draftToC += `
    * [Contributing](#contributing)` };

    if(userResponses.tests !== '') { draftToC += `
    * [Tests](#tests)` };


    // Generate mardown for the top required portions of the README
    let draftMardown =
    `# ${userResponses.title}
    
    ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
    
    Check out the badges hosted by [shields.io](https://shields.io/).
    
    
    ## Description
    
    *The wat, why, and how:*
    
    ${userResponses.description}
    
    `

    // Add Tabel of Contents to markdown
    draftMardown += draftToC;

    // Add License section since License is required to Table of Contents
    draftMardown += `
    * [License](#license)`;

    //  Optional Installation section
    if(userResponses.installation !== '') {
        draftMardown +=
        `
        
        ## Installation
        
        *Steps required to install project and how to get the development environment running:*
        
        ${userResponses.installation}`
    };

    // Optional Usage section
    if(userResponses.usage !== '') {
        draftMardown +=
        `
        
        ## Usage
        
        *Instructions and exasmples for use:*
        
        ${userResponses.usage}`
    };

    // Optional Contributing section
    if(userResponses.contributing !== '') {
        draftMardown +=
        `
        
        ## Contributing
        
        *If you would like to contribute, you can follow these guidlines for how to do so.*

        ${userResponses.contributing}`
    };

    // License section is required
    draftMardown +=
    `
    
    ## License
    
    ${userResponses.license}`;

    // Questions / About Developer section
    let draftDev =
    `
    ---
    
    ## Questions?
    
    <img src="${userInfo.avatar_url}" alt="$${userInfo.login}" width="40%" />
    
    For any questions, please contact me with the information below:
    
    GitHub: [@${userInfo.login}](${userInfo.url})
    `;

    // If GitHub email is not null, add to Developer section
    if(userInfo.email !== null) {

        draftDev +=
        `
        
        Email: ${userInfo.email}`
    };

    // Add developer section to markdown
    draftMardown += draftDev;

    // Return markdown
    return draftMardown;

}

module.exports = generateReadMe;