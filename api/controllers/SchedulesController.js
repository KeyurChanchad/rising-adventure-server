/**
 * ScheduleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    getSchedule: async (req, res) => {
        console.log("pakcage id ", req.body.packageId);
        let response = {};
        try {
            const data = await Schedules.find({ packageId: req.body.packageId });
            // console.log("data is ", data);
            response = {
                status: 200,
                message: 'Schedule of package get successfully.',
                data
            }
            return res.status(200).json(response);

        } catch (error) {
            console.log("error is ", error);
            response = {
                status: 404,
                message: "pacakge id not found",
            }
            return res.status(200).json(response);
        }
    }
};

