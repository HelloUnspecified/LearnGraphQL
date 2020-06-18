const debug = require('debug');

const { promisify } = require('util');
const constants = require('../../constants');
const subscriptions = require('./subscriptions');
const mutations = require('./mutations');

const createSessions = require('./sHelper');

const sleep = promisify(setTimeout);
const dlog = debug(`${constants.rootNamespace}:graphql.resolvers`);

const resolvers = {
  Subscription: {
    ...subscriptions,
  },

  Mutation: {
    ...mutations,
  },

  Query: {
    sessions: () => {
      dlog('in resolver ');

      return sleep(2000).then(() => {
        dlog('sessions');
        return createSessions(10);
      });
    },
    session: () => {
      dlog('sessions');
      return createSessions()[0];
    },
  },
};

module.exports = resolvers;
