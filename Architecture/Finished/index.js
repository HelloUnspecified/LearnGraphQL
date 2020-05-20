const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const graphqlHTTP = require('express-graphql');

const app = express();

function resolve(root, args, context, ast) {
  console.log('from our resolve function');
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

app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen({ port: 9090 }, () => {
  console.log('listening');
});
