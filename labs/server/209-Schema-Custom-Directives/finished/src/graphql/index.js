const { makeExecutableSchema } = require('@graphql-tools/schema');
const debug = require('debug');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
// const directives = require('./directives');
const exampleDirectives = require('./exampleDirectives');
const constants = require('../constants');

const dlog = debug(`${constants.rootNamespace}:graphql`);

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
//   schemaDirectives: {
//     ...directives,
//     ...exampleDirectives,
//   },
// });

const middleware = () => {
  dlog('creating server');
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives: {
      ...exampleDirectives,
      // ...directives,
    },
    // schema,
    // mocks: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
        'schema.disableComments': false,
      },
    },
    dataSources: () => ({
      mongo: 'the mongos',
    }),
    context: (req) => {
      dlog('context');
      return { context: { user: 'clark' } };
    },
  });

  return apollo.getMiddleware({ path: '/', playground: true });
};

module.exports = middleware();
