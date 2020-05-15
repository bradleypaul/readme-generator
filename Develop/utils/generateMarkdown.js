const badges = {
  "BSD 3 Clause": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  "GPL3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
};

const licenseSites = {
  "BSD 3 Clause": "https://opensource.org/licenses/BSD-3-Clause",
  "GPL3": "https://www.gnu.org/licenses/gpl-3.0",
  "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
  "MIT": "https://opensource.org/licenses/MIT"
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${badges[data.license]}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  * [Description](#description})
  * [Installation](#installation})
  * [Usage](#usage})
  * [License](#license})
  * [Contributing](#contributing})
  * [Tests](#tests})
  * [Contact](#contact})
  
  ## Installation
  \`\`\`bash
  git clone https://github.com/${data.gitHub}/${data.title}.git
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
   For more infomation about the selected license, [click here!](${licenseSites[data.license]})
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Contact

  GitHub profile: [${data.gitHub}](https://github.com/${data.gitHub})
  My email is: [${data.email}](mailto:${data.email})
  ${data.contact}
   `;
}

module.exports = generateMarkdown;
