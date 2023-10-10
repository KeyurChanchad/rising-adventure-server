/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const nodemailer = require("nodemailer");

function generateOTP(length) {
    const digits = '0123456789';
    let OTP = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      OTP += digits[randomIndex];
    }
  
    return OTP;
  }

module.exports = {
    sendOTP: async (req, res) => {
        let response = {};
        const generatedOTP = generateOTP(6);
        console.log("Sending OTP to user..... ", generatedOTP);
        try {
            console.log("starting web whatsapp");
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: sails.config.constants.SMTP.username,
                    pass: sails.config.constants.SMTP.password,
                }
            });
            var mailOptions = {
                from: sails.config.constants.SMTP.username,
                to: req.body.email,
                subject: 'Email verification by Rising Adventure.',
                // text: ``,
                html: `<!DOCTYPE html>
                <html lang="en">
                
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <style>
                    body {
                      font-family: Arial, sans-serif;
                    }
                
                    .email-container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      border: 1px solid #ccc;
                    }
                
                    .otp-section {
                      padding: 20px;
                      background-color: #f5f5f5;
                    }
                
                    .otp-code {
                      font-size: 24px;
                      font-weight: bold;
                      color: #333;
                    }
                
                    .instructions {
                      margin-top: 20px;
                    }
                  </style>
                </head>
                
                <body>
                  <div class="email-container">
                    <h1>Your One-Time Password (OTP)</h1>
                
                    <div class="otp-section">
                      <p>Your OTP code is:</p>
                      <span class="otp-code">${generatedOTP}</span>
                    </div>
                
                    <div class="instructions">
                      <p>Please use this OTP code to complete your authentication process. Do not share this code with anyone.</p>
                    </div>
                  </div>
                </body>
                
                </html>`
            };
            
            transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log("Send mail error " ,error);
                response = {
                    status: 401,
                    message:'OTP not able to sent.',
                }
                return res.status(200).json(response);
            } else {
                console.log('Email sent: ' + info.response);
                response = {
                    status: 200,
                    message:'OTP send successfully.',
                    data: {
                        OTP: generatedOTP
                    }
                }
                return res.status(200).json(response);
            }
            });
        } catch (error) {
            console.log("Error in email js ", error);
            response.status = 401
            response.data = error
            return res.json(response);
        }

       
    },

    createUser: async (req, res) => {
        console.log('creating user')
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

