const debug = require('debug');

const constants = require('../../../constants');

const dlog = debug(
  `${constants.rootNamespace}:graphql.resolvers:subscriptions`,
);

const subs = {
  newSession: {
    resolve: (payload) => {
      dlog('payload %O', payload);
      return payload;
    },
    subscribe: (_, __, { dataSourcesHack: { pubsub } }) => {
      dlog('in subscribe');

      return pubsub.asyncIterator(['NEW_SESSION']);
    },
  },
};

module.exports = subs;
