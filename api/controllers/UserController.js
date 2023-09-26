/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    sendOTP: async (req, res) => {
        let response = {};
        console.log("Sending OTP to user.....");
        response = {
            status: 200
        }
        return res.status(200).json(response);
    }
};

