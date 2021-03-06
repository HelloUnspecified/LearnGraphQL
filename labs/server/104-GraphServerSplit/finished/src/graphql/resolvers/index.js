const debug = require('debug');
const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql.resolvers`);

const resolvers = {
  Query: {
    hello: (root, args, context, ast) => {
      dlog('hello resolve function');
      return 'world';
    },
  },
};

module.exports = resolvers;
