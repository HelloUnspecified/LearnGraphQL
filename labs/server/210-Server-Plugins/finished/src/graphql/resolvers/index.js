const debug = require('debug');
const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql.resolvers`);

const mockSessions = [
  {
    id: '1',
    title: 'yolo',
    tags: ['react', 'graphql', 'javascript', 'twitch'],
    rating: 5,
  },
  {
    id: '2',
    title: 'yolo 2',
    tags: ['javascript', 'twitch'],
    rating: 5,
  },
  {
    id: '3',
    title: 'yolo 3',
    tags: ['twitch'],
    rating: 5,
  },
];

const resolvers = {
  Query: {
    sessions: () => {
      dlog('sessions');
      throw new Error('the internet broke on Sessions');
      // return mockSessions;
    },
    session: () => {
      dlog('sessions');
      // throw new Error('the internet broke on Session');

      // return Promise.resolve(
      //   // process.nextTick(() => {
      //   () => {
      //     throw new Error('aftertick');
      //   },
      //   // }),
      // );

      return mockSessions[0];
    },
  },
};

module.exports = resolvers;
