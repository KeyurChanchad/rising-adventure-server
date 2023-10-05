/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const wbm = require('wbm');

module.exports = {
    sendOTP: async (req, res) => {
        let response = {};
        console.log("Sending OTP to user.....");
        
        try {
            console.log("starting web whatsapp");
            wbm.start().then(async () => {
                const contacts = [
                    { phone: '917202055029', name: 'Keyur', group: 'friend' }, 
                    { phone: '919974720957', name: 'Manful', group: 'friend' }, 
                    { phone: '917984254576', name: 'Rao', group: 'customer' },
                ];
                for (let contact of contacts) {
                    let message = 'hi';
                    if(contact.group === 'customer') {
                        message = 'Good morning ' + contact.name;
                    }
                    else if(contact.group === 'friend') {
                        message = 'Hey ' + contact.name + '. Wassup?';
                    }
                    await wbm.sendTo(contact.phone, message);
                }
                await wbm.end();
                response = {
                    status: 200,
                    message:'send successfully.'
                }
                return res.status(200).json(response);
            }).catch(err => console.log(err));
            
            return res;
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

