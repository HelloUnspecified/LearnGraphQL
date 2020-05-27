const debug = require('debug');
const constants = require('../../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql:resolvers:world`);

const queries = {
  world: (root, args, context, ast) => {
    dlog('world resolve function');
    return 'world';
  },
};

module.exports = queries;
