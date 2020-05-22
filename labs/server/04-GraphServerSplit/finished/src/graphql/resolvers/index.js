const debug = require('debug');

const dlog = debug('graphql.help:04:graphql.resolvers');

const resolvers = {
  Query: {
    hello: (root, args, context, ast) => {
      dlog('hello resolve function');
      return 'world';
    },
  },
};

module.exports = resolvers;
