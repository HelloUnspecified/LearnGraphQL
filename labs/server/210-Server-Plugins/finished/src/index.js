const debug = require('debug');
const express = require('express');

const graphServer = require('./graphql');
const constants = require('./constants');

const dlog = debug(`${constants.rootNamespace}:root`);
dlog('started');

const port = process.env.PORT || 9090;

function failWhale(err, req, res, next) {
  dlog('landed in failWhale');
  res.status(500).json({ errorReference: '1234' });
}

const app = express();
app.use(graphServer);
app.use(failWhale);

const listen = () => {
  app.listen(port, () => {
    dlog(`listening on http://localhost:${port}/`);
  });
};

const shouldStart = process.argv.find((n) => n === '--start');
if (shouldStart) {
  dlog('starting');
  listen();
}

module.exports = app;
