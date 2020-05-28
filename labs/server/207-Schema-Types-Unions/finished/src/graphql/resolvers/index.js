/* eslint-disable no-console */
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql.resolvers`);

const mockSessions = [
  {
    type: 'Presentation',
    id: '1234',
    title: 'yolo',
    tags: ['react', 'graphql', 'javascript', 'twitch'],
  },
  {
    type: 'Workshop',
    id: '2345',
    title: 'yolo 2',
    tags: ['javascript', 'twitch'],
  },
  {
    type: 'OpenSpace',
    id: '3456',
    title: 'yolo 3',
    tags: ['twitch'],
  },
];

const mockSpeakers = [
  {
    type: 'Speaker',
    id: '1234',
    name: 'jimmy',
    tags: ['react', 'graphql'],
  },
  {
    type: 'Speaker',
    id: '2345',
    name: 'jimmy Johns',
    tags: ['graphql', 'javascript', 'twitch'],
  },
  {
    type: 'Speaker',
    id: '3456',
    name: 'jimmy jj johns',
    tags: ['twitch'],
  },
];

const resolvers = {
  Session: {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-underscore-dangle
    __resolveType(obj, context, info) {
      dlog('Session __resolveType');

      // console.log('__resolveType -> context', context);
      console.log('__resolveType -> obj', obj);

      return obj.type;
    },
  },

  ScheduleDetails: {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-underscore-dangle
    __resolveType(obj, context, info) {
      dlog('Schedule Details __resolveType');

      // console.log('__resolveType -> context', context);
      console.log('__resolveType -> obj', obj);

      return obj.type;
    },
  },
  Query: {
    schedule: (root, { contains }, context, ast) => {
      dlog('schedule');

      if (contains) {
        const searchSessionResults = mockSessions.filter((f) =>
          f.tags.includes(contains),
        );
        const searchSpeakersResults = mockSpeakers.filter((f) =>
          f.tags.includes(contains),
        );

        // console.log('root', root);
        // console.log('args', args);

        return [...searchSessionResults, ...searchSpeakersResults];
      }

      return [...mockSessions, ...mockSpeakers];
    },
    speakers: (root, args, context, ast) => {
      dlog('speakers');

      // console.log('root', root);
      // console.log('args', args);

      return mockSpeakers;
    },
    sessions: (root, args, context, ast) => {
      dlog('sessions');

      // console.log('root', root);
      // console.log('args', args);

      return mockSessions;
    },
  },
};

module.exports = resolvers;
