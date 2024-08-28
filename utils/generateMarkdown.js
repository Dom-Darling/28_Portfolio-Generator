// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
  }
  if (license === "GPL-3.0") {
    return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
  }
  if (license === "Apache-2.0") {
    return "![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  }
  if (license === "ISC") {
    return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "[MIT License](https://opensource.org/licenses/MIT)";
  }
  if (license === "GPL-3.0") {
    return "[GPL v3 License](https://www.gnu.org/licenses/gpl-3.0)";
  }
  if (license === "Apache-2.0") {
    return "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
  }
  if (license === "ISC") {
    return "[ISC License](https://opensource.org/licenses/ISC)";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  }
}
  return "### License";

// This project is licensed under the ${license} License.
function renderLicenseSection(license) {
  if (license === "") {
    return "";
  }

  return `### License
This project is licensed under the ${license} License.`;
}

// TODO: Create a function to generate markdown for README
// generateMarkdown.js

function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
This project is licensed under the ${data.license}.
`;
}
export default generateMarkdown;