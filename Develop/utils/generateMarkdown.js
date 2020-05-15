const badges = {
  "BSD 3 Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "GPL3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};

const licenses = {
  "BSD 3 Clause": "https://opensource.org/licenses/BSD-3-Clause",
  "GPL3": "https://www.gnu.org/licenses/gpl-3.0",
  "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0",
  "MIT": "https://opensource.org/licenses/MIT"
};

function getBadge(license) {
  return badges[license];
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n\n${getBadge(data.License)}\n\n${generateSection(data)}`;
}

function generateSection(data) {
  // get keys of the data object except for the title.
  const headers = Object.keys(data);

  // remove title from headers
  headers.shift();
  console.log(headers);
  const contactInfo = createContactSection(headers.splice(6, 3));
  // map over the keys to use them with [] property notation
  // (because of spaces and more flexible code generation)
  
  // added benefit of adding more sections in the questions 
  // is automatically reflected here.
  const result = headers.map(header => {
    const value = data[header];
    if (header === "License") {
      return createLicenseSection(value);
    } else {
      return `## ${header}\n\n${value}`;
    }
  });

  const tableOfContents = createTableOfContents(headers);

  // add ToC where it needs to go
  result.splice(1, 0, tableOfContents);
  result.splice(-1, 0, contactInfo);
  return result.join('\n\n');
}

function createContactInfo()

function createTableOfContents(headers) {
  const linkList = headers.map(header => {
    return makeLineItem(header);
  }).join("\n");
  return `## Table of Contents\n\n${linkList}`;
}

function makeLineItem(header) {
  const link = header.toLowerCase().replace(' ', '-');
  return `* [${header}](${link}})`;
}

function createLicenseSection(license) {
  return `## License\n\n For more infomation about the selected license, [click here!](${licenses[license]})`;
}

module.exports = generateMarkdown;
