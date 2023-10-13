/**
 * ScheduleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Status = sails.config.constants.ResponseCodes;

module.exports = {
  
    getSchedule: async (req, res) => {
        console.log("pakcage id ", req.body.packageId);
        let response = {};
        try {
            const data = await Schedules.find({ packageId: req.body.packageId });
            // console.log("data is ", data);
            response = {
                status: Status.OK,
                message: 'Schedule of package get successfully.',
                data
            }
            return res.status(Status.OK).json(response);

        } catch (error) {
            console.log("error is ", error);
            response = {
                status: Status.BAD_REQUEST,
                message: "pacakge id not found",
            }
            return res.status(Status.OK).json(response);
        }
    }
};

