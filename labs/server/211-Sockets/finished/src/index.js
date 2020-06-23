const http = require('http');
const debug = require('debug');
const express = require('express');

const graphServer = require('./graphql');
const constants = require('./constants');

const dlog = debug(`${constants.rootNamespace}:root`);
dlog('started');

const port = process.env.PORT || 9090;

const app = express();
graphServer.applyMiddleware({ app });

const httpServer = http.createServer(app);
graphServer.installSubscriptionHandlers(httpServer);

httpServer.listen(port, () => {
  dlog(`🚀 Server ready at http://localhost:${port}${graphServer.graphqlPath}`);
  dlog(
    `🚀 Subscriptions ready at ws://localhost:${port}${graphServer.subscriptionsPath}`,
  );
});
