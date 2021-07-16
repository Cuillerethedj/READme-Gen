// TODO: Create a function that returns a license badge based on which license is passed in


function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      
    case 'None':
    return ''
    
    case 'Apache License 2.0':
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    
    case 'GNU General Public License V3.0':
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'; 

  }
}

function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
    return 'https://opensource.org/licenses/MIT';
      
    case 'None':
    return ''
    
    case 'Apache License 2.0':
    return 'https://opensource.org/licenses/Apache-2.0';
    
    case 'GNU General Public License V3.0':
    return 'http://www.gnu.org/licenses/gpl-3.0'; 

  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license){
  if (license == 'None'){
    return ''
  }
  else {
   return `## Usage License
This project is license to ${license}
The link to this license is ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 

${data.description}

## Table of Contents

[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contribution-Guidelines)  
[Tests](#How-To-Test)  
[Questions](#Questions)

## Installation

${data.install}

## Usage

${data.use}

${renderLicenseSection(data.license)}

## Contributing 

${data.help}

## Tests

${data.test}

## Questions

${data.github}

${data.email}

`
}




module.exports = generateMarkdown;