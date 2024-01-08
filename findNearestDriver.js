function calculateDistance(coord1, coord2) {
  // Replace this with your actual distance calculation logic (using formulas or APIs)
  const lat1 = coord1.latitude;
  const lon1 = coord1.longitude;
  const lat2 = coord2.latitude;
  const lon2 = coord2.longitude;

  // Dummy calculation using Euclidean distance formula (not accurate for geographical coordinates)
  return Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lon2 - lon1, 2));
}

// Function to find the nearest available driver for a rider
const findNearestDriver = async (riderLocation, riderId) => {
  //destructuring array objects...
  const { drivers, riders } = riderLocation;
  console.log("drivers....", drivers);
  console.log("riders....", riders);
  const rider = riders.find((r) => r.id === riderId);
  console.log("rider..????", rider);

  if (!rider || rider.isRideStarted || rider.matchedDriver !== null) {
    return "Invalid rider or ride already started/matched";
  }

  const availableDriver = drivers.find((d) => d.isAvailable);
  if (!availableDriver) {
    return "No available drivers at the moment";
  }

  // rider.matchedDriver = availableDriver;
  // availableDriver.isAvailable = false;

  let minDistance = Number.MAX_VALUE;
  let nearestDriver = null;

  for (const driver of drivers) {
    if (driver.isAvailable) {
      const distance = calculateDistance(rider.location, driver.location);
      if (distance < minDistance) {
        minDistance = distance;
        nearestDriver = driver;
      }
    }
  }

  console.log("nearestDriver.....???", nearestDriver);

  if (!nearestDriver) {
    return "No available drivers at the moment";
  }

  rider.matchedDriver = nearestDriver;
  nearestDriver.isAvailable = false;

  console.log("nearestDriver.....???", nearestDriver);
  console.log("rider..????", rider);



  return "Successfully matched rider with the nearest available driver";
};

module.exports = findNearestDriver;
