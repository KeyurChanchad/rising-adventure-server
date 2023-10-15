/**
 * BookedPackage.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    packageName: {
      type: 'string',
      required: true,
    },
    userId: {
      type: 'string',
      required: true,
    },
    userName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    persons: {
      type: 'number',
      required: true,
    },
    joinUs: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    phoneNumber: {
      type: 'string',
      required: true,
    },
    address: {
      type: 'string',
      required: true,
    }

  },

};

