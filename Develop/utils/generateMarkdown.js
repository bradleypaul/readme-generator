// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n${generateSection(data)}`;
}

function generateSection(data) {
  // get keys of the data object except for the title.
  const headers = Object.keys(data).filter(key => key !== "title");
  // map over the keys to use them with [] property notation
  // (because of spaces and more flexible code generation)

  // added benefit of adding more sections in the questions 
  // is automatically reflected here.
  return headers.map(header => {
    return `## ${header}\n
    ${data[header]}`;
  }).join('\n');
}

module.exports = generateMarkdown;
