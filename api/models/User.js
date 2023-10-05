/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: 'string',
      defaultsTo: ''
    },
    profilePic: {
      type: 'string',
    },
    otp: {
      type: 'string',
      defaultsTo: '',
    },
    role: {
      type: 'string',
      defaultsTo: ''
    },
    token: {
      type: 'string',
      defaultsTo: ''
    }


  },

};

