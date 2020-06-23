const debug = require('debug');

const constants = require('../../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql.resolvers:mutations`);

const mutations = {
  createSession(_, { session }, { dataSources: { pubsub } }) {
    dlog('new session created:', session);
    pubsub.publish('NEW_SESSION', session);

    return {
      id: '12345789',
      ...session,
    };
  },
};

module.exports = mutations;
