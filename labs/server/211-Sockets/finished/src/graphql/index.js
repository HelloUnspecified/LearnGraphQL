const { ApolloServer, PubSub } = require('apollo-server-express');
const debug = require('debug');

const pubsub = new PubSub();

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const constants = require('../constants');

const dlog = debug(`${constants.rootNamespace}:graphql`);

const middleware = () => {
  dlog('creating server');
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
      settings: {
        'schema.polling.enable': false,
        'schema.disableComments': false,
      },
    },

    dataSources: () => ({
      mongo: 'the mongos',
      pubsub,
    }),

    // eslint-disable-next-line consistent-return
    context: async ({ _, connection }) => {
      dlog('context');
      if (connection) {
        return {
          dataSourcesHack: {
            pubsub,
          },
        };
      }
    },

    formatError: (...args) => {
      dlog('formatError %O', args);
      return args;
    },

    subscriptions: {
      onConnect: () => {
        dlog('socket connected');
      },
    },
  });

  return apollo;
};

module.exports = middleware();
