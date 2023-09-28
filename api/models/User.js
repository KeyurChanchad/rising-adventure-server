/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: {
      type: 'String',
      required: true,
    },
    lastName: {
      type: 'String',
      required: true,
    },
    email: {
      type: 'String',
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: 'String',
      defaultsTo: ''
    },
    profilePic: {
      type: 'String',
    },
    otp: {
      type: 'String',
      defaultsTo: '',
    },
    role: {
      type: 'String',
      defaultsTo: ''
    },
    token: {
      type: 'String',
      defaultsTo: ''
    }


  },

};

