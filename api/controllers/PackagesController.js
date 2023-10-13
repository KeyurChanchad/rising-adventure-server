/**
 * PackageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Status = sails.config.constants.ResponseCodes;

module.exports = {
    getAllPackages: async (req, res) => {
        console.log('getting pacakges from db.')
        let response = {};
        try {
            const data = await Packages.find();
            response = {
                status: Status.OK,
                message: 'Packages get successfully.',
                data
            }
            console.log("Pakcages get successfully ");
            return res.status(Status.OK).json(response);

        } catch (error) {
            console.log("error is ", error);
            response = {
                status: Status.BAD_REQUEST,
                message: "No package found",
            }
            return res.status(Status.OK).json(response);
        }
    }
};

