const debug = require('debug');
const constants = require('../../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql:resolvers:hello`);

const queries = {
  hello: (root, args, context, ast) => {
    dlog('hello resolve function');
    return 'world';
  },
};

module.exports = queries;
