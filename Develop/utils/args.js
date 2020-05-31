const args = require('args');

args.option('filename', 'The file that the readme generator will be saved to.', 'README.md');

module.exports = args.parse(process.argv);