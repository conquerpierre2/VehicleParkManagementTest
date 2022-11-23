/* eslint-disable linebreak-style */
const { VehicleRepository } = require('../../Infra/Repositories/VehicleRepository');

class ParkVehicle {
  vehicleRepository;

  constructor() {
    this.vehicleRepository = new VehicleRepository();
  }

  park(long, lat, fleetId, vehicleId) {
    this.vehicleRepository.locate(long, lat, fleetId, vehicleId);
  }
}

exports.ParkVehicle = ParkVehicle;
