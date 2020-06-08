/* eslint-disable no-console */
const { PositiveIntResolver } = require('graphql-scalars');

const debug = require('debug');
const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:graphql.resolvers`);

const mockSessions = [
  {
    type: 'Presentation',
    id: '1234',
    title: 'yolo',
    tags: ['react', 'graphql', 'javascript', 'twitch'],
    rating: 5,
  },
  {
    type: 'Workshop',
    id: '2345',
    title: 'yolo 2',
    tags: ['javascript', 'twitch'],
    rating: 5,
  },
  {
    type: 'OpenSpace',
    id: '3456',
    title: 'yolo 3',
    tags: ['twitch'],
    rating: 5,
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
  PositiveInt: PositiveIntResolver,
  Session: {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-underscore-dangle
    __resolveType(obj, context, info) {
      dlog('Session __resolveType');
      return obj.type;
    },
  },

  ScheduleDetails: {
    // eslint-disable-next-line no-unused-vars
    // eslint-disable-next-line no-underscore-dangle
    __resolveType(obj, context, info) {
      dlog('Schedule Details __resolveType');
      return obj.type;
    },
  },
  RootChild: {
    speakers: (root, args, context, ast) => {
      dlog('speakers');

      return mockSpeakers;
    },
    sessions: (root, args, context, ast) => {
      dlog('sessions');

      return mockSessions;
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

        return [...searchSessionResults, ...searchSpeakersResults];
      }

      return [...mockSessions, ...mockSpeakers];
    },
    speakers: (root, args, context, ast) => {
      dlog('speakers');

      return mockSpeakers;
    },
    sessions: (root, args, context, ast) => {
      dlog('sessions');

      return mockSessions;
    },
    child: () => ({}),
  },
  Mutation: {
    // addSession(session: NewSession!): Session
    addSession: (_, { session }, context) => {
      dlog('addSession');

      return {
        type: 'OpenSpace',
        id: '1010101',
        ...session,
      };
    },

    // addRating(sessionId: ID!, rating: Int!): Session
    addRating: (_, { sessionId, rating }, context) => {
      dlog('addRating');
      return {
        type: 'OpenSpace',
        id: sessionId,
        title: 'hello from resolver',
        rating,
      };
    },
  },
};

module.exports = resolvers;
