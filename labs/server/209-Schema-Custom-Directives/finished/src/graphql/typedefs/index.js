/*
  References and Notes:

  Package Documentation - https://www.graphql-tools.com/docs/merge-typedefs
*/

const path = require('path');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { loadFilesSync } = require('@graphql-tools/load-files');

const files = loadFilesSync(path.join(__dirname, './**/*.graphql'), {
  recursive: true,
});

module.exports = mergeTypeDefs(files, { all: true });
