/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:directives:visitUnion`);

class VisitUnion extends SchemaDirectiveVisitor {
  visitUnion(union) {
    dlog('visitUnion');
    const types = union.getTypes();
  }
}

module.exports = VisitUnion;
