const debug = require('debug');
const express = require('express');

const dlog = debug('graphql.help:index');
const port = process.env.PORT || 9090;
const app = express();

function indexHandler(req, res) {
  res.json({ hello: 'world' });
}

app.use('/', indexHandler);

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
