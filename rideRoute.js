const findNearestDriver = require("./findNearestDriver");
// const run  =  require('./dbConnections/connection');
const connectMongoDB =  require('./dbConnections/dbConnections');

const rideRoutes = [
  {
    method: "POST",
    path: "/matchRiderWithDriver",
    handler: async (request, h) => {
      const riderId = 1;
      // console.log("request....?", request.payload);
      const response = await findNearestDriver(request.payload,riderId);

      // const con = await run();
      const result = await connectMongoDB();

      return h.response(response).code(200);
    },
  },
  {
    method: "POST",
    path: "/startRide/{riderId}",
    handler: (request, h) => {
      const { riderId } = request.params;
      // Logic to start the ride for the given riderId
      // ...
      return "Ride started successfully";
    },
  },
  {
    method: "POST",
    path: "/completeRide/{riderId}",
    handler: (request, h) => {
      const { riderId } = request.params;
      // Logic to complete the ride for the given riderId
      // ...
      return "Ride completed successfully";
    },
  },
  {
    method: "GET",
    path: "/generateBill/{riderId}",
    handler: (request, h) => {
      const { riderId } = request.params;
      // Logic to calculate bill for the completed ride of the given riderId
      // ...
      return "Bill generated successfully";
    },
  },
];

module.exports = rideRoutes;
