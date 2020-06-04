/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-undef */

const { SchemaDirectiveVisitor } = require('apollo-server-express');
// const { defaultFieldResolver } = require('graphql');
const debug = require('debug');

const constants = require('../../constants');

const dlog = debug(`${constants.rootNamespace}:directives:visitInterface`);

class VisitInterface extends SchemaDirectiveVisitor {
  visitInterface(iFace) {
    dlog('visitInterface', iFace);

    const fields = iFace.getFields();

    // Object.keys(fields).forEach((f) => {
    //   const field = fields[f];
    //   const { resolve = defaultFieldResolver } = field;
    //   field.resolve = async (...args) => {
    //     // todo never gets called....

    //     dlog('upperCase');
    //     const result = await resolve.apply(this, args);

    //     if (typeof result === 'string') {
    //       dlog('type = string');
    //       return result.toUpperCase();
    //     }

    //     if (Array.isArray(result)) {
    //       return result.map((r) => typeof r === 'string' && r.toUpperCase());
    //     }

    //     return result;
    //   };
    // });
  }
}

module.exports = VisitInterface;
