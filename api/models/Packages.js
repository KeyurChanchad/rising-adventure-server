/**
 * Package.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
    },
    slogan: {
      type: 'string',
    },
    days: {
      type: 'number',
      required: true,
    },
    nights: {
      type: 'number',
      required: true,
    },
    minAge: {
      type: 'number',
      required: true,
    },
    maxAge: {
      type: 'number',
      required: true,
    },
    maxAltitude: {
      type: 'number',
      required: true,
    },
    amount: {
      type: 'number',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    joinUsFrom: {
      type: 'json',
      columnType: 'array',
      required: true,
    },
    availableDates: {
      type: 'json',
      columnType: 'array',
      required: true,
    },
    crouselImages: {
      type: 'string',
      columnType: 'array',
      required: true,
    },
  },

};

