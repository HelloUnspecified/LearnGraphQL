const express = require('express');
const { gql, ApolloServer } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context, ast) => {
      console.log('from our resolve function');
      return 'world';
    },
  },
};

const apollo = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(apollo.getMiddleware({ path: '/', playground: true }));

app.listen({ port: 9090 }, () => {
  console.log('listening');
});
