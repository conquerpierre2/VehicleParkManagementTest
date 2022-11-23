/* eslint-disable linebreak-style */
const { ObjectId } = require('mongodb');
const { FleetRepository } = require('../../Infra/Repositories/FleetRepository');

class CheckVehicleIncludedToFleet {
  fleetRepository = new FleetRepository();

  check(fleetId, vehicleId) {
    return this.fleetRepository.getFleetCollection()
      .find({ _id: ObjectId(fleetId), vehicles: { $elemMatch: { _id: ObjectId(vehicleId) } } });
  }
}

exports.CheckVehicleIncludedToFleet = CheckVehicleIncludedToFleet;
