/* eslint-disable linebreak-style */
const { VehicleRepository } = require('../../Infra/Repositories/VehicleRepository');

/* eslint-disable linebreak-style */
class CheckVehicleLocationWithAnother {
  vehicleRepository = new VehicleRepository();

  async check(vehicleId, long, lat) {
    const vehicle = await this.vehicleRepository.findById(vehicleId);
    return vehicle.longitude === long && vehicle.latitude === lat;
  }
}

exports.CheckVehicleLocationWithAnother = CheckVehicleLocationWithAnother;
