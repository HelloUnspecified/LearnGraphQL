const debug = require('debug');
const { gql } = require('apollo-server-express');

const dlog = debug('graphql.help:04:graphql.typedefs');
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

module.exports = typeDefs;
