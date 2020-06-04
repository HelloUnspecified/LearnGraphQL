/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:directives:upperCase`);

function convertCase(field) {
  const result = field;

  if (typeof result === 'string') {
    dlog('type = string');
    return result.toUpperCase();
  }

  if (Array.isArray(result)) {
    return result.map((r) => typeof r === 'string' && r.toUpperCase());
  }

  return result;
}

class UpperCaseDirective extends SchemaDirectiveVisitor {
  visitObject(graphqlObject) {
    dlog('visitObject');

    const fields = graphqlObject.getFields();

    Object.keys(fields).forEach((f) => {
      const field = fields[f];
      const { resolve = defaultFieldResolver } = field;

      field.resolve = async (...args) => {
        const result = await resolve.apply(this, args);
        dlog('visitObject resolver');
        return convertCase(result);
      };
    });
  }

  visitFieldDefinition(field) {
    dlog('visitFieldDefinition');

    // eslint-disable-next-line no-undef
    const { resolve = defaultFieldResolver } = field;

    field.resolve = async (...args) => {
      dlog('upperCase');
      const result = await resolve.apply(this, args);

      return convertCase(result);
    };
  }
}

module.exports = UpperCaseDirective;
