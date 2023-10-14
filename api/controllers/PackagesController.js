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
    },

    getAvailableDates: async (req, res) =>{
        let response = {};
        try {
            const package = await Packages.find({ id: req.body.packageId }).limit(1);
            console.log("package is ", package);
            const dates = [];
            await package[0].availableDates.forEach( async (element) => {
                await element.dates.forEach(date => {
                    dates.push({ lable: `${element.month} ${date}, ${element.year}`, value: `${element.month} ${date}, ${element.year}`})
                })
            });
            response = {
                status: Status.OK,
                message: "Dates get successfully",
                data: dates
            }
            return res.status(Status.OK).json(response);
        } catch (error) {
            console.log("Error getting available dates ", error);
            response = {
                status : Status.BAD_REQUEST,
                message: "No package found."
            }
            return res.status(Status.BAD_REQUEST).json(response);
        }
    }
};

