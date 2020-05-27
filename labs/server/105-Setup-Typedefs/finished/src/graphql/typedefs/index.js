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

// BUG: this doesn't appear to be loading correctly when in ansync

// const path = require('path');
// const { mergeTypeDefs } = require('@graphql-tools/merge');
// const { loadFiles } = require('@graphql-tools/load-files');

// const load = () =>
//   loadFiles(path.join(__dirname, './**/*.graphql'), {
//     recursive: true,
//   });

// const merge = () => load().then((f) => mergeTypeDefs(f, { all: true }));

// module.exports = merge();
