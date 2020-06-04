/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:directives:visitEnum`);

class VisitEnum extends SchemaDirectiveVisitor {
  visitEnum(iFace) {
    dlog('visitEnum', iFace);
  }
}

module.exports = VisitEnum;
