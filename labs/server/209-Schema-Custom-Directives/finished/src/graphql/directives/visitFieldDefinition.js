/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(
  `${constants.rootNamespace}:directives:visitFieldDefinition`,
);

class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    dlog('visitFieldDefinition');

    // eslint-disable-next-line no-undef
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      dlog('visitFieldDefinition');
      const result = await resolve.apply(this, args);

      return result;
    };
  }
}

module.exports = UpperCaseDirective;
