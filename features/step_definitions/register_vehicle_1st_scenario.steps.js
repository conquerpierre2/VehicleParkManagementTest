/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Given, When, Then } = require('@cucumber/cucumber');
const { Fleet } = require('../../Domain/fleetObject');
const { Vehicle } = require('../../Domain/vehicle');
const { AddVehicleToFleet } = require('../../App/Commands/addVehicleToFleet');
const { FleetCommandHandler } = require('../../App/Handlers/fleetCommandHandler');
const { CheckVehicleIncludedToFleet } = require('../../App/Queries/checkVehicleIncludedToFleet');
const { FleetQueriesHandler } = require('../../App/Handlers/fleetQueriesHandler');
const { FleetRepository } = require('../../Infra/Repositories/FleetRepository');
const { VehicleRepository } = require('../../Infra/Repositories/VehicleRepository');

const idFleet = '637deb66337d08f4a447e60d';
const idVehicle = '637d5c036129eb8472bd1a09';
let fleet;
let vehicle;
const fleetRepository = new FleetRepository();
const vehicleRepository = new VehicleRepository();

Given('my fleet', async () => {
  const fleetinRepo = await fleetRepository.getFleetById(idFleet);
  fleet = new Fleet(fleetinRepo._id.toString());
});

Given('a vehicle', async () => {
  const vehicleinRepo = await vehicleRepository.findById(idVehicle);
  // eslint-disable-next-line max-len
  vehicle = new Vehicle(vehicleinRepo.longitude, vehicleinRepo.latitude, vehicleinRepo._id.toString());
});

When('I register this vehicle into my fleet', () => {
  const addVehicleToFleet = new AddVehicleToFleet();
  const fleetCommandHandler = new FleetCommandHandler();
  fleetCommandHandler.handleRegistering(addVehicleToFleet, fleet.fleetId, vehicle.vehicleId);
});

Then('this vehicle should be part of my vehicle fleet', () => {
  const checkVehicleIncludedToFleetQuery = new CheckVehicleIncludedToFleet();
  const fleetQueriesHandler = new FleetQueriesHandler();
  // eslint-disable-next-line max-len
  console.assert(fleetQueriesHandler.handle(checkVehicleIncludedToFleetQuery, fleet.fleetId, vehicle.vehicleId) !== undefined);
});
