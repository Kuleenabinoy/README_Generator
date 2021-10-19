// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseID;
    switch (license) {
        case "MIT":
            licenseID = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
            break;
        case "Apache 2.0":
            licenseID = "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
            break;
        case "GPL 3.0":
            licenseID = "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
            break;
        case "Mozilla 2.0":
            licenseID = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
            break;
        case "None":
            licenseID = "";
            break;
        default:
            licenseID = "";
            break;
    }
    return licenseID;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseLink;
    switch (license) {
        case "MIT":
            licenseLink = "https://opensource.org/licenses/MIT";
            break;
        case "Apache 2.0":
            licenseLink = "https://opensource.org/licenses/Apache-2.0";
            break;
        case "GPL 3.0":
            licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "Mozilla 2.0":
            licenseLink = "https://opensource.org/licenses/MPL-2.0";
            break;
        case "None":
            licenseLink = "";
            break;
        default:
            licenseLink = "";
            break;
    }
    return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license);
    return licenseLink;
    // console.log(licenseLink, "license link");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.Project}\n
${renderLicenseBadge(data.license)}\n   
# Description
${data.Description}\n
# Table of Contents\n
*[Installation](#Installation)\n
*[License](#License)\n
*[Description](#Description)\n
*[Useage](#Useage)\n  
*[Tests](#Tests)\n
*[Questions](#Questions)\n

# Installation\n
The following necessary dependencies must be installed to run application properly:
${data.Installation}
   
# License\n
This project is licensed under the ${data.license} license.
${renderLicenseSection(data.license)}

# Useage\n
This project uses the repo:\n
${data.repo}  


# Tests\n
 To run the project use the following command:\n
 ${data.run}
    
# Questions\n
Find me on GitHub:https://github.com/${data.Username}\n

If you have any questions about the repo, open an issue , contact  ${data.Username}  directly at : ${data.Email}.`;
}

module.exports = generateMarkdown;
