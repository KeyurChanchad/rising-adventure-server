/**
 * Schedules.js
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
    amount: {
      type: 'number',
      required: true
    },
    image: {
      type: 'string',
    },
    maniSchedule: {
      type: 'json',
      columnType: 'array' 
    }
  },

};

