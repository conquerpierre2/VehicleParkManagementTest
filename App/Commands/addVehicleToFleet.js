/* eslint-disable linebreak-style */
const { FleetRepository } = require('../../Infra/Repositories/FleetRepository');

class AddVehicleToFleet {
  fleetRepository;

  constructor() {
    this.fleetRepository = new FleetRepository();
  }

  addVehicle(fleetId, userId) {
    this.fleetRepository.registerVehicle(fleetId, userId);
  }
}

exports.AddVehicleToFleet = AddVehicleToFleet;
