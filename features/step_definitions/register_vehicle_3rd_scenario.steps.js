/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/no-extraneous-dependencies
const { Given, When, Then } = require('@cucumber/cucumber');
const { Fleet } = require('../../Domain/fleetObject');
const { User } = require('../../Domain/user');
const { Vehicle } = require('../../Domain/vehicle');
const { FleetCommandHandler } = require('../../App/Handlers/fleetCommandHandler');
const { AddVehicleToFleet } = require('../../App/Commands/addVehicleToFleet');
const { CheckVehicleIncludedToFleet } = require('../../App/Queries/checkVehicleIncludedToFleet');
const { FleetQueriesHandler } = require('../../App/Handlers/fleetQueriesHandler');
const { FleetRepository } = require('../../Infra/Repositories/FleetRepository');
const { VehicleRepository } = require('../../Infra/Repositories/VehicleRepository');

const idFleet = '637deb66337d08f4a447e60d';
const otherIdFleet = '637de69f4acccffecc4ab9b9';
const idVehicle = '637d5c036129eb8472bd1a09';
// eslint-disable-next-line no-unused-vars
let myFleet;
// eslint-disable-next-line no-unused-vars
let vehicle;
let otherFleet;
let otherUser;
const fleetCommandHandler = new FleetCommandHandler();
const fleetRepository = new FleetRepository();
const vehicleRepository = new VehicleRepository();

Given('fleet', async () => {
  const fleetinRepo = await fleetRepository.getFleetById(idFleet);
  myFleet = new Fleet(fleetinRepo._id.toString());
});

Given('the fleet of another user', async () => {
  otherUser = new User();
  const fleetInRepo2 = await fleetRepository.getFleetById(otherIdFleet);
  otherFleet = new Fleet(fleetInRepo2._id.toString());
  otherUser.setFleet(otherFleet);
});

Given('vehicle', async () => {
  const vehicleInRepo = await vehicleRepository.findById(idVehicle);
  // eslint-disable-next-line max-len
  vehicle = new Vehicle(vehicleInRepo.longitude, vehicleInRepo.latitude, vehicleInRepo._id.toString());
});

Given("this vehicle has been registered into the other user's fleet", () => {
  const addVehicleToFleet = new AddVehicleToFleet();
  fleetCommandHandler.handleRegistering(addVehicleToFleet, otherIdFleet, idVehicle);
});

When('I register this vehicle into fleet', () => {
  const addVehicleToFleet = new AddVehicleToFleet();
  fleetCommandHandler.handleRegistering(addVehicleToFleet, idFleet, idVehicle);
});

Then('this vehicle should be part of my own vehicle fleet', () => {
  const checkVehicleIncludedToFleetQuery = new CheckVehicleIncludedToFleet();
  const fleetQueriesHandler = new FleetQueriesHandler();
  // eslint-disable-next-line max-len
  console.assert(fleetQueriesHandler.handle(checkVehicleIncludedToFleetQuery, idFleet, idVehicle) !== undefined);
});
