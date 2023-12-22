/**
 * BookedPackageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Status = sails.config.constants.ResponseCodes;

module.exports = {
    bookPackage: async (req, res) => {
        let response = {};
        console.log("booking package ....");
        try {
            const package = await BookedPackage.create(req.body).fetch();
            response = {
                status: Status.OK,
                message: 'Package booked successfully.',
                data: package
            }
            console.log("response of booking ", response);
            return res.status(Status.OK).json(response);
            
        } catch (error) {
            response = {
                status: Status.BAD_REQUEST,
                message: 'Package not booked.'
            }
            return res.status(Status.BAD_REQUEST).json(response);
        }
    },

    getBookedPackages: async (req, res) => {
        let response = {};
        console.log("get booked package ....");
        try {
            const packages = await BookedPackage.find({ userId: req.params.userId });
            response = {
                status: Status.OK,
                message: 'Get booked successfully.',
                data: packages
            }
            console.log("response of booking ", response);
            return res.status(Status.OK).json(response);
            
        } catch (error) {
            response = {
                status: Status.BAD_REQUEST,
                message: 'User not booked.'
            }
            return res.status(Status.BAD_REQUEST).json(response);
        }
    },

    cancelPackage: async (req, res)=> {
        let response = {};
        console.log("cancelling booked package ....");
        try {
            const packages = await BookedPackage.updateOne({ id: req.body.id }).set({ status: 'cancel'});
            response = {
                status: Status.OK,
                message: 'Package cancel successfully.',
                data: packages
            }
            console.log("response of booking ", response);
            return res.status(Status.OK).json(response);
            
        } catch (error) {
            response = {
                status: Status.BAD_REQUEST,
                message: 'Package not cancelled.'
            }
            return res.status(Status.BAD_REQUEST).json(response);
        }
    }
};

