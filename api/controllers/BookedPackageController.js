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
    }
};

