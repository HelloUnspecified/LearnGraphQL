/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:exampleDirectives:logUsage`);

class LogUsageDirective extends SchemaDirectiveVisitor {
  visitObject(graphqlObject) {
    dlog('visitObject');
    const fields = graphqlObject.getFields();

    Object.keys(fields).forEach((f) => {
      const field = fields[f];
      const { resolve = defaultFieldResolver } = field;
      dlog(`field ${field.name} visited`);

      field.resolve = async (parent, args, data, ast) => {
        dlog('resolver');
        const result = await resolve.apply(this, parent, args, data, ast);
        console.log(`${data.context.user} just called ${field.name}`);

        return result;
      };
    });
  }
}

module.exports = LogUsageDirective;
