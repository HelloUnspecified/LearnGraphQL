const { ApolloServer } = require('apollo-server-express');
const debug = require('debug');
const ServerTimingPlugin = require('@jmandzik/apollo-server-plugin-server-timing');

const typeDefs = require('./typedefs');
const resolvers = require('./resolvers');
const constants = require('../constants');

const dlog = debug(`${constants.rootNamespace}:graphql`);

const middleware = () => {
  dlog('creating server');
  const apollo = new ApolloServer({
    typeDefs,
    resolvers,
    // debug: true,
    // tracing: true,
    // logger: {
    //   log(message) {
    //     console.log('im here');
    //     console.log(message);
    //   },
    // },
    // mocks: true,
    playground: {
      settings: {
        'schema.polling.enable': false,
        'schema.disableComments': false,
      },
    },

    dataSources: (...args) => ({
      mongo: 'the mongos',
    }),

    context: (...args) => {
      dlog('context');
      return { context: { user: 'clark' } };
    },

    formatError: (...args) => {
      dlog('formatError %O', args);
      return args;
    },

    plugins: [
      {
        serverWillStart() {
          dlog('serverWillStart');
        },

        requestDidStart({ context, logger }) {
          let handled = false;

          dlog('requestDidStart');

          return {
            // didResolveSource(requestContext) {
            //   dlog('didResolveSource');
            // },

            // note: supports an endHook
            // notes: invalid query syntax....
            parsingDidStart(requestContext) {
              dlog('parsingDidStart');

              return (...args) => {
                dlog('parsingDidStart:EndHook');

                if (args && args.length > 0) {
                  handled = true;
                  dlog('# of errors', args.length);
                  // args.forEach((err) => dlog(err));
                }
              };
            },

            // note: supports an endHook
            // notes... valid query syntax but invalid query of object
            validationDidStart(requestContext) {
              dlog('validationDidStart');

              return (...args) => {
                dlog('validationDidStart:EndHook');

                if (args && args.length > 0) {
                  handled = true;
                  dlog('# of errors', args.length);
                  // args.forEach((err) => dlog(err));
                }
              };
            },

            didResolveOperation() {
              dlog('didResolveOperation');
            },

            responseForOperation() {
              dlog('responseForOperation');
            },

            // note: supports an endHook
            executionDidStart(requestContext) {
              dlog('executionDidStart');

              return (...args) => {
                // handled = true;

                dlog('executionDidStart end hook');

                if (args) {
                  dlog('I haz the errors');
                }
              };
            },

            didEncounterErrors(...args) {
              dlog('did we handle the error already', handled);
              dlog('args %O', args);

              // dlog('didEncounterErrors counts %O', {
              //   errors: args.length,
              //   errorsInErrorOne: args[0].errors.length,
              // });

              // console.log(args[0].errors[0]);

              // args[0].errors[0].clark = 'YOLO';

              // WAT can we do here???!?!?
            },

            willSendResponse(requestContext) {
              dlog('willSendResponse');
            },
          };
        },
      },
    ],
  });

  return apollo.getMiddleware({ path: '/', playground: true });
};

module.exports = middleware();
