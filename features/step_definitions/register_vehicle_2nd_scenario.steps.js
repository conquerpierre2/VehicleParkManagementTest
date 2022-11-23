/* eslint-disable linebreak-style */
// const {AddVehicleToFleet } = require("../../App/Commands/addVehicleToFleet");
// const { FleetCommandHandler } = require("../../App/Handlers/fleetCommandHandler");
// const {Fleet } = require("../../Domain/fleetObject");
// const { Vehicle } = require("../../Domain/vehicle");

// const {Given, When, Then} = require('@cucumber/cucumber');

// let myFleet;
// let vehicle;
// let fleetCommandHandler =  new FleetCommandHandler();

// Given('a fleet' , function() {
//     myFleet =  new Fleet();
// })

// Given('one vehicle', function() {
//     vehicle =  new Vehicle();
// })

//  Given('I have registered this vehicle into my fleet', function() {
//     let addVehicleToFleet =  new AddVehicleToFleet(vehicle,myFleet);
//     fleetCommandHandler.handle(addVehicleToFleet);
//  })

// When('I try to register this vehicle into my fleet', function() {
//     let addVehicleToFleet =  new AddVehicleToFleet(vehicle,myFleet);
//     fleetCommandHandler.handle(addVehicleToFleet);

// })

// Then('I should be informed this this vehicle has already been registered into my fleet',
// function() {
//     let addVehicleToFleet =  new AddVehicleToFleet(vehicle,myFleet);
//     fleetCommandHandler.handle(addVehicleToFleet);
//     console.assert(addVehicleToFleet.message === 'Vehicle already been added');

// })
