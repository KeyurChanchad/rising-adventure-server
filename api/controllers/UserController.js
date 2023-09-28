/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const accountSid = "AC868fe0328e66b950841853a0c174f546";
const authToken = "7cdd4704ef8ff889ec251d5c4f63b13e";
const verifySid = "VAc00377f0a025a282362008f4aadc4bf2";
const client = require("twilio")(accountSid, authToken);
var nodemailer = require('nodemailer');

module.exports = {
    sendOTP: async (req, res) => {
        let response = {};
        console.log("Sending OTP to user.....");
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'keyur@raoinformationtechnology.com',
                pass: 'ebeecwkoawbyqrdf'
            }
        });
            // ebeecwkoawbyqrdf
        var mailOptions = {
            from: 'keyur@raoinformationtechnology.com',
            to: req.body.email,
            subject: 'Forget Password for Admin by Rao Chat.',
            text: `OTP is 35523`,
            // html: "<b>Hello world?</b>"
        };
        
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("Send mail error " ,error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
         response.status = 200
        return res.status(200).json(response);
    },

    createUser: async (req, res) => {
        let response = {};
        console.log(req.body);
        try {
            let exists = await User.findOne({ email: req.body.email });
            console.log("user already exists ", exists);

            if (!exists) {
                let user = await User.create(req.body).fetch();
                console.log("create user ", user);
                response.status = 200;
                response.isUserCreate = true;
                response.data = user;
                return res.status(200).json(response);
            }
            response.status = 200;
            response.message = "Login successfully.";
            response.data = {
                isLogin: true,
                isUserCreate: true,
            }
            return res.status(200).json(response); 
        } catch (error) {
            response.message = "Something went wrong."
            return res.status(400).json(response)
        }
       
    }
};

