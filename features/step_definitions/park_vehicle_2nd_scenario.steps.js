/* eslint-disable linebreak-style */
// const { Given, When, Then } = require("@cucumber/cucumber");
// const { Fleet } = require("../../Domain/fleetObject");
// const { Vehicle } = require("../../Domain/vehicle");
// const { FleetCommandHandler } = require("../../App/Handlers/fleetCommandHandler");
// const { AddVehicleToFleet } = require("../../App/Commands/addVehicleToFleet");
// const { ParkVehicle } = require("../../App/Commands/parkVehicle");
// const { LocationCommandHandler } = require("../../App/Handlers/locationCommandHandler");

// let longitude;
// let latitude;
// let myFleet = new Fleet();
// let vehicle = new Vehicle(0.0, 0.0);
// let fleetCommandHandler = new FleetCommandHandler();
// let locationCommandHandler = new LocationCommandHandler();
// let addVehicleToFleet = new AddVehicleToFleet(vehicle, myFleet);
// fleetCommandHandler.handle(addVehicleToFleet);

// Given('some location', function() {
// longitude = 35.0;
// latitude = 37.0

// })

// Given('my vehicle has been parked into this location', function() {
//     let parkVehicle = new ParkVehicle(vehicle,longitude,latitude);
//     locationCommandHandler.handle(parkVehicle);

// })

// When('I try to park my vehicle at this location', function() {
//     let parkVehicle = new ParkVehicle(vehicle,longitude,latitude);
//     locationCommandHandler.handle(parkVehicle);
// })

// Then('I should be informed that my vehicle is already parked at this location', function() {
//     let parkVehicle = new ParkVehicle(vehicle,longitude,latitude);
//     locationCommandHandler.handle(parkVehicle);
//     console.assert(parkVehicle.message === 'Vehicle already parked')

// })
