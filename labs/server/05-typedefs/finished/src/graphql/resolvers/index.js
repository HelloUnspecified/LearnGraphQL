const debug = require('debug');

const dlog = debug('graphql.help:05:graphql.resolvers');

const resolvers = {
  Query: {
    hello: (root, args, context, ast) => {
      dlog('hello resolve function');
      return 'world';
    },
    world: (root, args, context, ast) => {
      dlog('hello resolve function');
      return 'hello';
    },
  },
};

module.exports = resolvers;
