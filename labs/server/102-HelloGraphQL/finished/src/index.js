const debug = require('debug');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const constants = require('./constants');

const dlog = debug(`${constants.rootNamespace}:root`);

function resolve(root, args, context, ast) {
  dlog('from our resolve function');
  return 'world';
}

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve,
      },
    },
  }),
});

const port = process.env.PORT || 9090;

const app = express();
app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

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
