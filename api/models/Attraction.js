/**
 * Attraction.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    packageId: {
      type: 'string',
      required: true,
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    image: {
      type: 'string',
      required: true,
    }
  },

};

