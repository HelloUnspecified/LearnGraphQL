const debug = require('debug');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const constants = require('../constants');

const dlog = debug(`${constants.rootNamespace}:graphql`);

const middleware = () => {
  dlog('creating server');
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    // mocks: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
        'schema.disableComments': false,
      },
    },
  });
  return apollo.getMiddleware({ path: '/', playground: true });
};

module.exports = middleware();
