/* eslint-disable linebreak-style */
const { AddVehicleToFleet } = require('./App/Commands/addVehicleToFleet');
const { CreateFleetToUser } = require('./App/Commands/createFleetToUser');
const { ParkVehicle } = require('./App/Commands/parkVehicle');
const { FleetCommandHandler } = require('./App/Handlers/fleetCommandHandler');
const { LocationCommandHandler } = require('./App/Handlers/locationCommandHandler');

const args = process.argv.slice(2);

if (args.length === 2 && args[0] === 'create') {
  try {
    const createFleetToUser = new CreateFleetToUser();
    const fleetCommandHandler = new FleetCommandHandler();
    fleetCommandHandler.handleCreating(createFleetToUser, args[1]);
  } catch (error) {
    console.log(error);
  }
} else if (args.length === 3 && args[0] === 'register-vehicle') {
  const fleetCommandHandler = new FleetCommandHandler();
  const addVehicleToFleet = new AddVehicleToFleet();
  fleetCommandHandler.handleRegistering(addVehicleToFleet, args[1], args[2]);
} else if (args.length === 5 && args[0] === 'localize-vehicle') {
  const locationCommandHandler = new LocationCommandHandler();
  const parkVehicle = new ParkVehicle();
  locationCommandHandler.handle(parkVehicle, args[4], args[3], args[1], args[2]);
} else {
  console.log('unknown command');
}
