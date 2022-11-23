/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Given, When, Then } = require('@cucumber/cucumber');
const { AddVehicleToFleet } = require('../../App/Commands/addVehicleToFleet');
const { FleetCommandHandler } = require('../../App/Handlers/fleetCommandHandler');
const { ParkVehicle } = require('../../App/Commands/parkVehicle');
const { LocationCommandHandler } = require('../../App/Handlers/locationCommandHandler');
const { Fleet } = require('../../Domain/fleetObject');
const { Vehicle } = require('../../Domain/vehicle');
// eslint-disable-next-line max-len
const { CheckVehicleLocationWithAnother } = require('../../App/Queries/checkVehicleLocationWithAnother');
const { LocationQueriesHandler } = require('../../App/Handlers/locationQueriesHandler');
const { FleetRepository } = require('../../Infra/Repositories/FleetRepository');
const { VehicleRepository } = require('../../Infra/Repositories/VehicleRepository');

const idFleet = '637deb66337d08f4a447e60d';
const idVehicle = '637d5c036129eb8472bd1a09';
let myFleet;
let vehicle;
let long;
let lat;
const fleetCommandHandler = new FleetCommandHandler();
const locationCommandHandler = new LocationCommandHandler();
const locationQueriesHandler = new LocationQueriesHandler();
const fleetRepository = new FleetRepository();
const vehicleRepository = new VehicleRepository();

Given('own fleet', async () => {
  const fleetinRepo = await fleetRepository.getFleetById(idFleet);
  // eslint-disable-next-line no-underscore-dangle
  myFleet = new Fleet(fleetinRepo._id.toString());
});

Given('any vehicle', async () => {
  const vehicleinRepo = await vehicleRepository.findById(idVehicle);
  vehicle = new Vehicle(vehicleinRepo.longitude, vehicleinRepo.latitude, idVehicle);
});

Given('I have registered vehicle into own fleet', () => {
  const addVehicleToFleet = new AddVehicleToFleet();
  fleetCommandHandler.handleRegistering(addVehicleToFleet, idFleet, idVehicle);
});

Given('a location', () => {
  long = 50;
  lat = 50;
});

When('I park my vehicle at this location', () => {
  const parkVehicle = new ParkVehicle();
  locationCommandHandler.handle(parkVehicle, long, lat, myFleet.fleetId, vehicle.vehicleId);
});

Then('the known location of my vehicle should verify this location', () => {
  // eslint-disable-next-line max-len, max-len
  const checkVehicleLocationWithAnother = new CheckVehicleLocationWithAnother();
  // eslint-disable-next-line max-len
  console.assert(locationQueriesHandler.handle(checkVehicleLocationWithAnother, vehicle.vehicleId, long, lat));
});
