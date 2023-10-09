/**
 * AttractionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getRelatedPackages: async (req, res)=> {
        const data = await Attraction.find();
        return res.json(data);
    }
};

