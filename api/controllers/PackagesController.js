/**
 * PackageController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllPackages: async (req, res) => {
        let response = {};
        try {
            const data = await Packages.find();
            console.log("data is ", data);
            response = {
                status: 200,
                message: 'Packages get successfully.',
                data
            }
            return res.status(200).json(response);

        } catch (error) {
            console.log("error is ", error);
            response = {
                status: 404,
                message: "No package found",
            }
            return res.status(200).json(response);
        }
    }
};

