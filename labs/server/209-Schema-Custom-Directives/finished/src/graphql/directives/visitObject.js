/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:directives:visitObject`);

class VisitObject extends SchemaDirectiveVisitor {
  visitObject(graphqlObject) {
    dlog('visitObject');

    const fields = graphqlObject.getFields();

    Object.keys(fields).forEach((f) => {
      const field = fields[f];
      const { resolve = defaultFieldResolver } = field;

      field.resolve = async (...args) => {
        const result = await resolve.apply(this, args);
        dlog('visitObject resolver');
        return result;
      };
    });
  }
}

module.exports = VisitObject;
