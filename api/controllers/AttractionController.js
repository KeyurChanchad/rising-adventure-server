/**
 * AttractionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Status = sails.config.constants.ResponseCodes;

module.exports = {
    getRelatedPackages: async (req, res)=> {
        let response = {};
        try {
            const packages = await Attraction.find({ pacakgeId: req.body.pacakgeId});
            response = {
                status: Status.OK,
                message: 'Related packages get successfully.',
                data: packages
            }
            return res.status(Status.OK).json(response);
            
        } catch (error) {
            response = {
                status: 401,
                message: 'Related packages not geted.'
            }
            return res.status(Status.OK).json(response);
        }
    }
};

