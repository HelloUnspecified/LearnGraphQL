const debug = require('debug');
const express = require('express');
const { gql, ApolloServer } = require('apollo-server-express');

const dlog = debug('graphql.help:03:root');
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context, ast) => {
      dlog('hello resolve function');
      return 'world';
    },
  },
};

const port = process.env.PORT || 9090;
const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(apollo.getMiddleware({ path: '/', playground: true }));

const listen = () => {
  app.listen(port, () => {
    dlog(`listening on http://localhost:${port}/`);
  });
};

const shouldStart = process.argv.find((n) => n === '--start');
if (shouldStart) {
  dlog('starting');
  listen();
}

module.exports = app;
